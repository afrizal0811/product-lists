import { Form } from 'antd'
import React, { useState } from 'react'
import { Input, Button, Password } from '../../components/antd'
import { apiValidation, postApi } from '../../utilities/handleApi'
const Login = () => {
  const [validation, setValidation] = useState()
  const [form] = Form.useForm()

  const onFinish = (values) => {
  console.log('values :', values);
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/user/login`
      const response = await postApi(url, values)
      const api = apiValidation(response)
      if (api) setValidation(api)
    }
    fetchData()
  }

  return (
    <div>
      {validation ? 'Gagal' : 'Berhasil'}
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
          Save
        </Button>
      </Form>
    </div>
  )
}

export default Login
