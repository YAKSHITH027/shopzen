import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Auth/Login'
import MyAccount from '../components/Auth/MyAccount'
import Registration from '../components/Auth/registration'
import Home from './home/Home'
import Cart from '../pages/cart/Cart'
const Allrouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/' element={<Registration />} /> */}
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myaccount' element={<MyAccount />} />
      </Routes>
    </div>
  )
}

export default Allrouter
