import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormHelperText,
  FormErrorMessage,
  Input,
  Box,
  Text,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";


// const initd={
//   email: "",
//   password: ""
// }

const Login = () => {

//   const [ user ,setUser] = useState(initd);

// const {email, password} = user;

  const Navigate = useNavigate();


// const oninputchange=(e)=>{
// setUser({
//   ...user,
//   [e.target.name]: e.target.value
// })
// }






  const handleClick = () => {

 
// console.log(user)
// localStorage.setItem("user", JSON.stringify(user))
if( !input || !inputa){
  alert("Login first")
}else{
  Navigate("/registration");
}

    
  };

  const [input, setInput] = useState('')
  const [inputa, setInputa] = useState('')

  // const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <Box border="1px solid gray" height={"39rem"} backgroundColor="gray.200">
      <Box
        w="40%"
        m="auto"
        mt="10rem"
        boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        p="30px"
        backgroundColor="white"
      >
        <Text mt="30px" fontWeight={"bold"} fontSize="30px" textAlign={"center"}>
          LOGIN
        </Text>
        <Text mt="20px">
          Please enter your{" "}
          <span style={{ color: "green", fontWeight: "400" }}>email </span> and{" "}
          <span style={{ color: "green", fontWeight: "400" }}>password</span>{" "}
          for login
        </Text>

        <FormControl isRequired mt="20px">
        <FormLabel> Email</FormLabel>
        <Input type='email' value={input} onChange={(e)=>setInput(e.target.value)} />
      {!isError ? (
        <FormHelperText color="red">
          Please Enter Your Email Address
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
          <FormLabel> Password</FormLabel>
          <Input type='password' value={inputa} onChange={(e)=>setInputa(e.target.value)} />
      {!isError ? (
        <FormHelperText color="red">
        Please Enter Your Password
        </FormHelperText>
      ) : (
        <FormErrorMessage>password is required.</FormErrorMessage>
      )}

          <Button
            onClick={handleClick}
            mt="20px"
            ml="12rem"
            backgroundColor={"green.400"}
            color="white"
            _hover={{ backgroundColor: "green", color: "white" }}
          >
            SUBMIT
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
