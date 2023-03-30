import React from 'react'
import {useNavigate} from "react-router-dom"
import {
    Input,
    Box,
    Text,
    FormControl,
    FormLabel,
    Button
   
  } from '@chakra-ui/react'

const Login = () => {
  const Navigate=useNavigate()
  const handleClick=()=>{
    Navigate("registration")
  }
  return (
    
    <Box border="1px solid gray" height={"39rem"} backgroundColor="gray.200">
    
    <Box w="40%" m="auto" mt="10rem" boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"} p="30px" backgroundColor="white">
    <Text mt="30px" fontWeight={"bold"} fontSize="20px">LOGIN</Text>
    <Text mt="20px">Please enter your <span style={{ color: "green", fontWeight: "400" }}>email </span> and <span style={{ color: "green", fontWeight: "400" }} >password</span> for login
</Text>

     <FormControl isRequired mt="20px">
    
  <FormLabel>Email</FormLabel>
  <Input placeholder=' Enter Your Email' />
  <FormLabel> Password</FormLabel>
  <Input placeholder='Enter Your Password' />

  
  <Button onClick={handleClick}
  mt="20px"
          ml="12rem"
          backgroundColor={"green.400"}
          color="white"
          _hover={{ backgroundColor: "green", color: "white" }}>SUBMIT</Button>
</FormControl>

    </Box>
    </Box>
    
  )
}

export default Login
