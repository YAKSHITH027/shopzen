import { useToast } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const UserProtectedRoute = ({ children }) => {
  const toast = useToast()
  let token = localStorage.getItem('user_token')
  console.log(token, 'protect')

  if (!token) {
    console.log(token)
    toast({
      title: 'Login required',
      description: 'You are not logged in',
      status: 'error',
      duration: 4000,
      isClosable: true,
      position: 'top',
    })
    return <Navigate to='/login' />
  }
  return children
}

export default UserProtectedRoute
