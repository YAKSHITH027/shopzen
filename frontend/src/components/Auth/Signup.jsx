import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import axios from 'axios'
import {
  Input,
  Box,
  Text,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from '@chakra-ui/react'
import Navbar from '../home/Navbar'

const initd = {
  username: '',
  email: '',
  password: '',
}

const Signup = () => {
  const [user, setUser] = useState(initd)
  const [isLoading, setIsLoading] = useState(false)

  const { username, email, password } = user
  const navigate = useNavigate()
  const toast = useToast()

  const oninputchange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = async () => {
    let payload = { email, password, userName: username }
    if (!email || !password || !username) {
      toast({
        title: 'Please fill all credentials',
        description: 'All fields are required',
        status: 'error',
        duration: 5000,
        position: 'top',
        isClosable: true,
      })
      return
    }

    try {
      setIsLoading(true)
      let res = await fetch(
        'https://dark-erin-fox-cuff.cyclic.app/user/register',
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
      setIsLoading(false)
      if (res.status == 201) {
        toast({
          title: 'Registered successfully',
          description: 'Have a great day',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })

        navigate('/login')
        console.log(data)
      } else {
        toast({
          title: 'Registration failed',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  return (
    <>
      <Navbar />
      <Box border='1px solid gray' height={'50rem'} backgroundColor='gray.200'>
        <Box
          w='40%'
          m='auto'
          mt='5rem'
          boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
          p='30px'
          backgroundColor='white'
          borderRadius={'xl'}
        >
          <Text
            mt='10px'
            fontWeight={'bold'}
            fontSize='30px'
            textAlign={'center'}
          >
            SIGNUP
          </Text>
          <Text mt='20px'>
            Please enter your{' '}
            <span style={{ color: 'green', fontWeight: '600' }}>detail </span>
            here.
          </Text>

          <FormControl isRequired mt='20px'>
            <Box mb='20px'>
              <FormLabel>UserName</FormLabel>
              <Input
                placeholder=' Enter Your Name here'
                name='username'
                type='text'
                value={username}
                onChange={oninputchange}
              />
            </Box>
            <Box mb='20px'>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder=' Enter Your Email here'
                name='email'
                type='email'
                value={email}
                onChange={oninputchange}
              />
            </Box>
            <FormLabel> Password</FormLabel>
            <Input
              type='password'
              placeholder='Enter Your Password'
              name='password'
              value={password}
              onChange={oninputchange}
            />

            <Button
              onClick={handleClick}
              mt='20px'
              colorScheme='green'
              width='full'
              isLoading={isLoading}
              loadingText='Signining in '
            >
              SUBMIT
            </Button>
            <Text mt='20px'>
              You have already an account?
              <span style={{ color: 'green', fontWeight: '600' }}>
                <Link to='/Login'> Login </Link>
              </span>{' '}
              here
            </Text>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}

export default Signup
