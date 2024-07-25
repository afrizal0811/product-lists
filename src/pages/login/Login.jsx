import React, { useState, useEffect } from 'react'
import { apiValidation, postApi } from '../../utilities/handleApi'

const Login = () => {
const [validation, setValidation] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/user/login`
      const values = {
        username: 'emilys',
        password: 'emilyspass',
      }
      const response = await postApi(url, values)
      const api = apiValidation(response)
      if (api) setValidation(api)
    }
    fetchData()
  }, [])

  return <div>{validation ? 'Gagal' : 'Berhasil'}</div>
}

export default Login
