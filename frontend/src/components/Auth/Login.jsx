import React from 'react'
import {Link} from "react-router-dom"
import {
    Input,
    Box,
    Text,
    FormControl,
    FormLabel,
   
  } from '@chakra-ui/react'

const Login = () => {
  return (
    <>
     <Box w="100%" h="auto">
        <Box w="50%" h="40%" border={"1px solid red"} ml="30%" mt="20%"> 
        <Link to="/Registration">
            <Text>Login</Text>
            </Link>
            <Box>
                <Input />
            </Box>
        </Box>
     </Box>
    </>
  )
}

export default Login
