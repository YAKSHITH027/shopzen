import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";
import {
  Input,
  Box,
  Text,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

const initd = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [user, setUser] = useState(initd);

  const { username, email, password } = user;

  const Navigate = useNavigate();

  const oninputchange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    // const res = axios
    //   .post("https://dark-erin-fox-cuff.cyclic.app/user/register", user)
    //   .then((res) => {
    //     console.log(res);
    //   });
    if(!username || !email || !password){
      alert("please fill all credentials")
    }else{
      Navigate("/Login");
    }

    // localStorage.setItem("user", JSON.stringify(user))

    
  };
  return (
    <Box border="1px solid gray" height={"50rem"} backgroundColor="gray.200">
      <Box
        w="40%"
        m="auto"
        mt="10rem"
        boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        p="30px"
        backgroundColor="white"
      >
        <Text
          mt="10px"
          fontWeight={"bold"}
          fontSize="30px"
          textAlign={"center"}
        >
          SIGNUP
        </Text>
        <Text mt="20px">
          Please enter your{" "}
          <span style={{ color: "green", fontWeight: "600" }}>detail </span>
          here.
        </Text>

        <FormControl isRequired mt="20px">
          <Box mb="20px">
            <FormLabel>UserName</FormLabel>
            <Input
              placeholder=" Enter Your Name here"
              name="username"
              value={username}
              onChange={oninputchange}
            />
          </Box>
          <Box mb="20px">
            <FormLabel>Email</FormLabel>
            <Input
              placeholder=" Enter Your Email here"
              name="email"
              value={email}
              onChange={oninputchange}
            />
          </Box>
          <FormLabel> Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={oninputchange}
          />

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
          <Text mt="20px">
            You have already an account
            <span style={{ color: "green", fontWeight: "600" }}>
              <Link to="/Login"> Login </Link>
            </span>{" "}
            here
          </Text>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Signup;
