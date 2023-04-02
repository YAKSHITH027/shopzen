import { Box, Button, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLoginU = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()
  let navigate = useNavigate()
  const handlSubmit = async () => {
    let payload = { email, password }
    try {
      let res = await fetch(
        'https://dark-erin-fox-cuff.cyclic.app/admin/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )
      let data = await res.json()
      if (res.status == 200) {
        toast({
          title: 'login successfully',
          description: 'good luck!',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
        localStorage.setItem('admin_token', data.token)
        navigate('/dashboard')
        console.log(data)
      } else {
        toast({
          title: 'login failed',
          description: 'good luck!',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box width='20rem' margin={'auto'}>
      <Input
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handlSubmit}>submit</Button>
      or
      <Button
        onClick={() => {
          localStorage.setItem('admin_token', 'something')
          navigate('/dashboard')
        }}
      >
        Guest mode
      </Button>
    </Box>
  )
}

export default AdminLoginU
