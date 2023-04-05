// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import {
//   FormHelperText,
//   FormErrorMessage,
//   Input,
//   Box,
//   Text,
//   FormControl,
//   FormLabel,
//   Button,
//   useToast,
// } from '@chakra-ui/react'

// // const initd={
// //   email: "",
// //   password: ""
// // }

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()
//   const toast = useToast()
//   // const handleInputChange = (e) => setInput(e.target.value)
//   const handleClick = async () => {
//     let payload = { email, password }
//     try {
//       let res = await fetch(
//         'https://dark-erin-fox-cuff.cyclic.app/user/login',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(payload),
//         }
//       )
//       let data = await res.json()
//       console.log(payload, res)
//       if (res.status == 200) {
//         toast({
//           title: 'login successfully',
//           description: 'good luck!',
//           status: 'success',
//           duration: 4000,
//           isClosable: true,
//           position: 'top',
//         })
//         localStorage.setItem('user_token', data.token)
//         navigate('/')
//         console.log(data)
//       } else {
//         toast({
//           title: 'login failed',
//           description: 'good luck!',
//           status: 'error',
//           duration: 4000,
//           isClosable: true,
//           position: 'top',
//         })
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const isError = false

//   return (
//     <Box border='1px solid gray' height={'39rem'} backgroundColor='gray.200'>
//       <Box
//         w='40%'
//         m='auto'
//         mt='10rem'
//         boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
//         p='30px'
//         backgroundColor='white'
//       >
//         <Text
//           mt='30px'
//           fontWeight={'bold'}
//           fontSize='30px'
//           textAlign={'center'}
//         >
//           LOGIN
//         </Text>
//         <Text mt='20px'>
//           Please enter your{' '}
//           <span style={{ color: 'green', fontWeight: '400' }}>email </span> and{' '}
//           <span style={{ color: 'green', fontWeight: '400' }}>password</span>{' '}
//           for login
//         </Text>

//         <FormControl isRequired mt='20px'>
//           <FormLabel> Email</FormLabel>
//           <Input
//             type='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {!isError ? (
//             <FormHelperText color='red'>
//               Please Enter Your Email Address
//             </FormHelperText>
//           ) : (
//             <FormErrorMessage>Email is required.</FormErrorMessage>
//           )}
//           <FormLabel> Password</FormLabel>
//           <Input
//             type='password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {!isError ? (
//             <FormHelperText color='red'>
//               Please Enter Your Password
//             </FormHelperText>
//           ) : (
//             <FormErrorMessage>password is required.</FormErrorMessage>
//           )}

//           <Button
//             onClick={handleClick}
//             mt='20px'
//             ml='12rem'
//             backgroundColor={'green.400'}
//             color='white'
//             _hover={{ backgroundColor: 'green', color: 'white' }}
//           >
//             SUBMIT
//           </Button>
//           <Link to='/signup'> register</Link>
//         </FormControl>
//       </Box>
//     </Box>
//   )
// }

// export default Login
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  FormHelperText,
  FormErrorMessage,
  Input,
  Box,
  Text,
  FormControl,
  FormLabel,
  Button,
  Flex,
  useToast,
} from '@chakra-ui/react'
import Navbar from '../home/Navbar'
import { Navbar as Test } from '../Navbar/Navbar'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleClick = async () => {
    let payload = { email, password }
    if (!email || !password) {
      toast({
        title: 'Enter both email and password to login',
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
      setIsLoading(false)
      console.log(payload, res)
      if (res.status == 200) {
        toast({
          title: 'Login successful',
          description: 'Have a great day',
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
          title: 'Login failed',

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

  const isEmailError = email === ''
  const isPasswordError = password === ''

  return (
    <>
      {/* <Navbar /> */}
      <Box mb='70px'>
        <Test />
      </Box>
      <Box
        border='1px solid gray'
        minHeight='100vh'
        backgroundColor='gray.200'
        display='flex'
        justifyContent='center'
        alignItems='center'
        px={{ base: '2rem', md: '4rem', lg: '8rem' }}
      >
        <Box
          w={{ base: '100%', md: '60%', lg: '40%' }}
          m='auto'
          boxShadow='md'
          p={{ base: '2rem', md: '3rem', lg: '4rem' }}
          backgroundColor='white'
          borderRadius='md'
        >
          <Text
            fontWeight='bold'
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign='center'
            mb={{ base: '1rem', md: '2rem' }}
          >
            LOGIN
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }}>
            Please enter your{' '}
            <Text as='span' color='green.500' fontWeight='bold'>
              email{' '}
            </Text>
            and{' '}
            <Text as='span' color='green.500' fontWeight='bold'>
              password
            </Text>{' '}
            to login
          </Text>

          <FormControl isRequired mt={{ base: '1.5rem', md: '2rem' }}>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={isEmailError}
              errorBorderColor='red.300'
            />
            {isEmailError ? (
              <FormErrorMessage color='red'>
                Please enter your email address
              </FormErrorMessage>
            ) : null}

            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={isPasswordError}
              errorBorderColor='red.300'
            />
            {isPasswordError ? (
              <FormErrorMessage color='red'>
                Please enter your password
              </FormErrorMessage>
            ) : null}

            <Button
              onClick={handleClick}
              mt={{ base: '1.5rem', md: '2rem' }}
              alignSelf='flex-end'
              backgroundColor='green.500'
              color='white'
              width='full'
              isLoading={isLoading}
              loadingText='Logging in '
              _hover={{ backgroundColor: 'green.600' }}
            >
              SUBMIT
            </Button>
          </FormControl>
          <Flex justify={'space-between'} px='10px' py='1rem'>
            <p>
              New User ? <Link to='/signup'>Signup </Link>
            </p>
            <p>
              Admin ? <Link to='/adminlogin'>Login </Link>
            </p>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Login
