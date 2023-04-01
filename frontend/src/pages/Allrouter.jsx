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
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route
          path='/dashboard'
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />
        <Route
          path='/adminusers'
          element={
            <Sidebar>
              <Users />
            </Sidebar>
          }
        />
        <Route
          path='/adminproducts'
          element={
            <Sidebar>
              <AdminProducts />
            </Sidebar>
          }
        />
        <Route
          path='/addproduct'
          element={
            <Sidebar>
              <AddProduct />
            </Sidebar>
          }
        />
        <Route
          path='/admincalender'
          element={
            <Sidebar>
              <Calendar />
            </Sidebar>
          }
        />
        <Route
          path='/admincalender'
          element={
            <Sidebar>
              <Calendar />
            </Sidebar>
          }
        />
        <Route
          path='/adminorders'
          element={
            <Sidebar>
              <Orders />
            </Sidebar>
          }
        />
        <Route
          path='/admins'
          element={
            <Sidebar>
              <Admins />
            </Sidebar>
          }
        />
        <Route
          path='/barchart'
          element={
            <Sidebar>
              <BarChart />
            </Sidebar>
          }
        />
        <Route
          path='/piechart'
          element={
            <Sidebar>
              <PieChart />
            </Sidebar>
          }
        />
      </Routes>
    </div>
  )
}

export default Allrouter
