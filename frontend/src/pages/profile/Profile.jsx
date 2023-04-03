import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/home/Navbar'

const Profile = () => {
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState({})
  const fetchOrders = async () => {
    try {
      let res = await fetch(
        'https://dark-erin-fox-cuff.cyclic.app/order/userorder',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('user_token'),
          },
        }
      )

      let data = await res.json()
      console.log('data', data)
      setOrders(data)
      let response = await fetch(
        'https://dark-erin-fox-cuff.cyclic.app/user/getone',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('user_token'),
          },
        }
      )
      let userData = await response.json()
      setUser(userData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchOrders()
  }, [])
  console.log('orders', orders)
  return (
    <>
      <Navbar />
      <Box bg={'gray.100'} minH={'90vh'} py='2rem'>
        <Flex
          justify={'space-around'}
          py='2rem'
          px='1rem'
          flexDir={{ base: 'column', lg: 'row' }}
          borderRadius={'xl'}
          width='70%'
          bg='gray.200'
          margin={'auto'}
          mb='1rem'
        >
          <Flex
            width='auto'
            flexDir={'column'}
            mt='2rem'
            align='center'
            gap='5'
          >
            <Avatar textAlign={'center'} size={'2xl'} name={user.userName} />
            <Text>User Name: {user.userName}</Text>

            <Button colorScheme='teal'>Change profile</Button>
          </Flex>
          <Box mt='3rem'>
            <FormControl>
              <Flex gap='5'>
                <Box>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder='first name' bg={'gray.300'} />
                </Box>
                <Box>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder='last name' bg={'gray.300'} />
                </Box>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex gap='5'>
                <Box>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input placeholder='number' bg={'gray.300'} />
                </Box>
                <Box>
                  <FormLabel>Age</FormLabel>
                  <Input placeholder='age' bg={'gray.300'} />
                </Box>
              </Flex>
            </FormControl>
            <Button my='2rem' width={'full'} colorScheme='teal'>
              Submit
            </Button>
          </Box>
        </Flex>
        <Text fontSize={'1.5rem'} textAlign='center'>
          Histroy of Orders
        </Text>
        <Flex
          width={{ base: '97%', lg: '85%' }}
          margin={'auto'}
          mt='2rem'
          overflowX={'auto'}
          py='2rem'
          px='1rem'
        >
          {orders?.length == 0 ? (
            <Text textAlign={'center'} mt='3rem' fontSize={'2rem'}>
              You haven't purchased at
            </Text>
          ) : (
            <Accordion allowMultiple>
              {orders.map((item) => {
                var date = Number(item.createdAt)
                var d = new Date(date)
                var ds = d.toLocaleString()
                return (
                  <Flex
                    align={'center'}
                    key={item.createdAt}
                    justify={'center'}
                    overflowX={'auto'}
                  >
                    <AccordionItem
                      border={'none'}
                      bg={'gray.300'}
                      mb='7px'
                      p='10px'
                      borderRadius={'0.4rem'}
                      width='1200px'
                      mr={'2rem'}
                    >
                      <h2>
                        <Flex>
                          <AccordionButton>
                            <Flex
                              width='1200px'
                              fontSize={'1.1rem'}
                              textTransform={'capitalize'}
                            >
                              <Text width='24%' textAlign={'start'}>
                                Name: {item.address.fullname}
                              </Text>
                              <Text width='20%' textAlign={'start'}>
                                City:{item.address.city}
                              </Text>
                              <Text width='20%' textAlign={'start'}>
                                Amount:{item.totalAmount}
                              </Text>
                              <Text width='32%' textAlign={'start'}>
                                ordredAT: {ds}
                              </Text>
                              <Text width='32%' textAlign={'start'}>
                                OrderStatus : {item.orderStatus}
                              </Text>
                            </Flex>
                            <AccordionIcon />
                          </AccordionButton>
                        </Flex>
                      </h2>

                      <AccordionPanel pb={4} border={'none'} outline={'none'}>
                        <Flex flexDir={'column'} gap='5'>
                          {item.products.map((item22, i) => {
                            var date = 232334343343
                            var d = new Date(date)
                            var ds = d.toLocaleString()
                            return (
                              <Flex
                                key={i}
                                gap='9'
                                align={'center'}
                                // borderWidth='1px'
                                px='1rem'
                                justify={'space-around'}
                                py='0.2rem'
                                minW={'1200px'}
                              >
                                <Box width='50px'> item: {i + 1}</Box>

                                <Box>
                                  <Image
                                    src={item22.image}
                                    width='80px'
                                    borderRadius={'md'}
                                  />
                                </Box>

                                <Text width='100px'>
                                  Price: {item22.price}{' '}
                                </Text>
                                <Text width='100px'>
                                  Quantity: {item22.quantity}{' '}
                                </Text>
                              </Flex>
                            )
                          })}
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Flex>
                )
              })}
            </Accordion>
          )}
        </Flex>
      </Box>
    </>
  )
}

export default Profile
