import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../Component/Login"
import MyAccount from '../Component/MyAccount'
import Registration from '../Component/registration'

const Allrouter = () => {
  return (
    <div>
      <Routes>
<Route path="registration" element={<Registration/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<MyAccount/>}/>
      </Routes>
    </div>
  )
}

export default Allrouter

