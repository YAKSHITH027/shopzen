import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/home/Navbar'

const Profile = () => {
  return (
    <>
      <Navbar />
      <Flex justify={'space-around'} py='2rem' width='70%' margin={'auto'}>
        <Flex width='14rem' flexDir={'column'} align='center' gap='5'>
          <Avatar
            textAlign={'center'}
            size={'2xl'}
            name='Kola Tioluwani'
            src='https://bit.ly/tioluwani-kolawole'
          />
          <Text>User Name: yakshith</Text>

          <Button>Change profile</Button>
        </Flex>
        <Box mt='3rem'>
          <FormControl>
            <Flex gap='5'>
              <Box>
                <FormLabel>First Name</FormLabel>
                <Input />
              </Box>
              <Box>
                <FormLabel>Last Name</FormLabel>
                <Input />
              </Box>
            </Flex>
          </FormControl>
          <FormControl>
            <Flex gap='5'>
              <Box>
                <FormLabel>Mobile Number</FormLabel>
                <Input />
              </Box>
              <Box>
                <FormLabel>Age</FormLabel>
                <Input />
              </Box>
            </Flex>
          </FormControl>
          <Button my='2rem' width={'full'}>
            Submit
          </Button>
        </Box>
      </Flex>
      <Text fontSize={'1.5rem'} textAlign='center'>
        Histroy of Orders
      </Text>
      <Flex width='80%' margin={'auto'} mt='2rem'>
        item2
      </Flex>
    </>
  )
}

export default Profile
