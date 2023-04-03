import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../home/Navbar'
import { stubTrue } from 'lodash'

const AdminLoginU = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()
  let navigate = useNavigate()
  const handlSubmit = async () => {
    let payload = { email, password }
    try {
      setLoading(true)
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
      setLoading(false)
      if (res.status == 200) {
        toast({
          title: 'Login Successful',
          description: 'Welcome back',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
        localStorage.setItem('admin_token', data.token)
        localStorage.setItem('admin_info', JSON.stringify(data.userInDb))
        navigate('/dashboard')
        console.log(data)
      } else {
        toast({
          title: 'Login Failed',
          description: 'You are not the Real Admin ',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
        toast({
          title: ' You can Login as Guest',

          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const handleGuest = () => {
    let data = {
      email: 'guest@gmail.com',
      image: '',
      userName: 'Guest',
    }
    localStorage.setItem('admin_token', 'something')
    localStorage.setItem('admin_info', JSON.stringify(data))
    navigate('/dashboard')
  }
  return (
    <>
      <Navbar />
      <Flex
        minH={'90vh'}
        width='25rem'
        margin={'auto'}
        flexDir={'column'}
        align='center'
        justifyContent={'center'}
      >
        <Flex
          flexDir={'column'}
          gap='5'
          width='full'
          borderWidth={'2px'}
          p='2rem'
          borderRadius={'md'}
          boxShadow={'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px'}
        >
          <Text
            my='0.3rem'
            textAlign={'center'}
            fontSize={'1.4rem'}
            fontWeight='700'
          >
            Admin Login
          </Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>

            <Input
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            onClick={handlSubmit}
            width={'full'}
            colorScheme='green'
            isLoading={isLoading}
            loadingText='Logging in '
          >
            submit
          </Button>
        </Flex>
        <Text fontSize={'1.2rem'} py='0.6rem'>
          or
        </Text>
        <Button
          width={'full'}
          mt='1rem'
          onClick={handleGuest}
          colorScheme='green'
        >
          Guest mode
        </Button>
      </Flex>
    </>
  )
}

export default AdminLoginU
