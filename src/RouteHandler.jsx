import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import ViewProduct from './pages/products/ViewProduct'
const RouteHandler = () => {
  //   const isLoggin = !isNull(getLocalStorage('token')

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/products'
          element={<Products />}
        />
        <Route
          path='/products/:id'
          element={<ViewProduct />}
        />
        <Route
          path='*'
          element={<div>Gaada</div>}
        />
      </Routes>
    </div>
  )
}

export default RouteHandler
