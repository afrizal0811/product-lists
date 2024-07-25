import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Password } from '../../components/antd'
import { apiValidation, postApi } from '../../utilities/handleApi'
import { checkValidToken } from '../../utilities/localStorages'
import { StyledCard } from './StyledComponents'

const Login = () => {
  const navigate = useNavigate()
  const [validation, setValidation] = useState()
  const [form] = Form.useForm()

  useEffect(() => {
    if (checkValidToken()) {
      navigate('/products')
    } else {
      navigate('/')
    }
  }, [validation])

  const onFinish = async (values) => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/user/login`
      const response = await postApi(url, values)
      const api = apiValidation(response)
      if (api) setValidation(api)
    }
    await fetchData()
    if (checkValidToken()) {
      navigate('/products')
    }
  }

  return (
    <StyledCard
      title='Login User'
      bordered={true}
    >
      {/* {validation ? 'Gagal' : 'Berhasil'} */}
      <Form
        autoComplete='off'
        form={form}
        layout='vertical'
        name='add-form'
        onFinish={onFinish}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: `Please input username!`,
            },
          ]}
        >
          <Input placeholder='Input Username' />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: `Please input password!`,
            },
          ]}
        >
          <Password placeholder='Input Password' />
        </Form.Item>
        <Button
          type='primary'
          htmlType='submit'
        >
          Login
        </Button>
      </Form>
    </StyledCard>
  )
}

export default Login
