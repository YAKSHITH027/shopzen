import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AdminProtectedRoute = ({ children }) => {
  let token = localStorage.getItem('admin_token')
  console.log(token, 'protect')
  let navigate = useNavigate()
  if (!token) {
    console.log(token)
    return <Navigate to='/adminlogin' />
  }
  return children
}

export default AdminProtectedRoute
