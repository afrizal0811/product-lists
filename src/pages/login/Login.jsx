import React, { useEffect } from 'react'
import { apiValidation, postApi } from '../../getApi'

const Login = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/user/login`
      const values = {
        username: 'emilys',
        password: 'emilyspass',
      }
      const response = await postApi(url, values)
      console.log(response)
    //   const api = apiValidation(response)
    //   if (api) setValidation(api)
    }
    fetchData()
  }, [])

  return <div>Login</div>
}

export default Login
