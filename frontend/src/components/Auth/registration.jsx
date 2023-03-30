import React from 'react'
import {ArrowRightIcon} from '@chakra-ui/icons'
import {Link} from "react-router-dom"
import {

  Box,
  Center,
  Text,


} from '@chakra-ui/react'




const Registration = () => {
  return (

    <Box fontFamily="Trade Gothic LT Pro', sans-serif ">
            <Box w="100%" border="1px solid gray" h="8rem" m>
                <Text textAlign="Center" mt="2rem" fontSize="34px" fontWeight="bold" fontFamily="Trade Gothic LT Pro', sans-serif " alignSelf="center">
                    My Account
                </Text>

            </Box>
            <Box w="25%" h="60rem" p="20px" borderRight={"1px solid gray"}>
            <Text mt="3rem" fontWeight={"bold"}>GUEST</Text>
            
<Box pl="1rem">
<Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Text >Personal Info</Text>
            <ArrowRightIcon/>
            </Box>
            <hr/>

            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Text >My Orders</Text>
            <ArrowRightIcon/>
            </Box>
            <hr/>

            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Text >Address Book</Text>
            <ArrowRightIcon/>
            </Box>
            <hr/>

            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Link to="/Login">
            <Text >Contact Us</Text>
            
            </Link>
            <ArrowRightIcon/>
            </Box>
            <hr/>

            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Link to="/Login">
            <Text >Return/Exchange</Text>
            
            </Link>
            <ArrowRightIcon/>
            </Box>
            <hr/>

            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Link to="/Login">
            <Text >Wishlist</Text>
            
            </Link>
            <ArrowRightIcon/>
            </Box>
            <hr/>

            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Link to="/Login">
            <Text >Help Center</Text>
            
            </Link>
            <ArrowRightIcon/>
            </Box>
            <hr/>

            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Link to="/Login">
            <Text >Rewards</Text>
            
            </Link>
            <ArrowRightIcon/>
            </Box>
            <hr/>

            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}mt="2rem" mb="1rem" >
            <Link to="/Login">
            <Text >Logout</Text>
            
            </Link>
            <ArrowRightIcon/>
            </Box>
            <hr/>
            
            
            </Box> 
            
            </Box>

            </Box>
    )
}
  


export default Registration
