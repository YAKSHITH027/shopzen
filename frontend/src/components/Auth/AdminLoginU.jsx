import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLoginU = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      localStorage.setItem('admin_token', data.token)
      navigate('/dashboard')
      console.log(data)
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
