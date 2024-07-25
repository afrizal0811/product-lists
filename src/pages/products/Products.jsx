import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from '../../components/antd'
import { getApi } from '../../utilities/handleApi'
import { columns } from './tableConfig'
import { StyledProductsWrapper } from './StyledComponents'
const Products = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products?limit=999`
      const response = await getApi(url)
      setData(response.products)
      setLoading(false)
    }
    fetchData()
  }, [])

  const handleDetail = (id) => {
    navigate(`/products/${id}`)
  }

  return (
    <StyledProductsWrapper>
      <Table
        columns={columns(handleDetail)}
        data={data}
        pagination={true}
        loading={loading}
        bordered={true}
      />
    </StyledProductsWrapper>
  )
}

export default Products
