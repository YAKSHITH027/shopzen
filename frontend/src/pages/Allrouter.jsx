import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Auth/Login'
import MyAccount from '../components/Auth/MyAccount'
import Registration from '../components/Auth/registration'
import Home from './home/Home'
import Cart from '../pages/cart/Cart'
import Dashboard from '../Adminside/scene/Dashboard'
import Sidebar from '../Adminside/scene/global/Sidebar'
import Topbar from '../Adminside/scene/global/Topbar'
import Users from '../Adminside/scene/users/Users'
import AdminProducts from '../Adminside/scene/Products/AdminProducts'
import AddProduct from '../Adminside/scene/addProduct/AddProduct'
import Calendar from '../Adminside/scene/Calendar/Calendar'
import Orders from '../Adminside/scene/orders/Orders'
import Admins from '../Adminside/scene/Admins/Admins'
import BarChart from '../Adminside/components/BarChart'
import PieChart from '../Adminside/components/PieChart'
import Product from './Product/Product'
import SingleProduct from './Product/SingleProduct'
import Checkout from './Checkout/Checkout'
import Signup from '../components/Auth/Signup'

import AdminLoginU from '../components/Auth/AdminLoginU'
import AdminProtectedRoute from '../Adminside/components/AdminProtectedRoute'

const Allrouter = () => {
  return (
    <div>
      <Routes>
        <Route path='registration' element={<Registration />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/checkout' element={<Checkout />} /> 
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/adminlogin' element={<AdminLoginU />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route
          path='/dashboard'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Dashboard />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />
        <Route
          path='/adminusers'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Users />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />
        <Route
          path='/adminproducts'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <AdminProducts />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />
        <Route
          path='/addproduct'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <AddProduct />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />
        <Route
          path='/admincalender'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Calendar />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />

        <Route
          path='/adminorders'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Orders />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />
        <Route
          path='/admins'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Admins />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />
        <Route
          path='/barchart'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <BarChart />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />
        <Route
          path='/piechart'
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <PieChart />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default Allrouter
