import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FormHelperText,
  FormErrorMessage,
  Input,
  Box,
  Text,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from '@chakra-ui/react'

// const initd={
//   email: "",
//   password: ""
// }

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const toast = useToast()
  // const handleInputChange = (e) => setInput(e.target.value)
  const handleClick = async () => {
    let payload = { email, password }
    try {
      let res = await fetch(
        'https://dark-erin-fox-cuff.cyclic.app/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )
      let data = await res.json()
      console.log(payload, res)
      if (res.status == 200) {
        toast({
          title: 'login successfully',
          description: 'good luck!',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
        localStorage.setItem('user_token', data.token)
        navigate('/')
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

  const isError = false

  return (
    <Box border='1px solid gray' height={'39rem'} backgroundColor='gray.200'>
      <Box
        w='40%'
        m='auto'
        mt='10rem'
        boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
        p='30px'
        backgroundColor='white'
      >
        <Text
          mt='30px'
          fontWeight={'bold'}
          fontSize='30px'
          textAlign={'center'}
        >
          LOGIN
        </Text>
        <Text mt='20px'>
          Please enter your{' '}
          <span style={{ color: 'green', fontWeight: '400' }}>email </span> and{' '}
          <span style={{ color: 'green', fontWeight: '400' }}>password</span>{' '}
          for login
        </Text>

        <FormControl isRequired mt='20px'>
          <FormLabel> Email</FormLabel>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isError ? (
            <FormHelperText color='red'>
              Please Enter Your Email Address
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
          <FormLabel> Password</FormLabel>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isError ? (
            <FormHelperText color='red'>
              Please Enter Your Password
            </FormHelperText>
          ) : (
            <FormErrorMessage>password is required.</FormErrorMessage>
          )}

          <Button
            onClick={handleClick}
            mt='20px'
            ml='12rem'
            backgroundColor={'green.400'}
            color='white'
            _hover={{ backgroundColor: 'green', color: 'white' }}
          >
            SUBMIT
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Login
