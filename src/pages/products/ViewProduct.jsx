import { Flex } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from '../../components/antd'
import { getApi } from '../../utilities/handleApi'
import { StyledDescription } from './StyledComponents'
import { Button } from '../../components/antd'
const ViewProduct = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  console.log('data :', data)
  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products/${id}`
      const response = await getApi(url)
      setData(response)
    }
    fetchData()
  }, [id])
  return (
    <Flex gap={10} vertical>
      <Button
        type='primary'
        onClick={() => window.history.back()}
        width={100}
      >
        Back
      </Button>

      <Flex
        gap={10}
        justify='center'
        align='center'
      >
        <Image
          width={500}
          src={data ? data.images : ''}
          items={data.images}
        />
        <Flex
          vertical
          gap={10}
          style={{ width: '500px' }}
          align='left'
        >
          <h1>{data.title}</h1>
          <Flex gap={data.brand ? 5 : 0}>
            <h4>{data.brand}</h4>
            <h4>({data.availabilityStatus})</h4>
          </Flex>
          <h2>{data.price}</h2>
          <StyledDescription>
            <p>{data.description}</p>
          </StyledDescription>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ViewProduct
