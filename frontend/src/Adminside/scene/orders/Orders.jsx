import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Image,
  Skeleton,
  Button,
} from '@chakra-ui/react'
const Orders = () => {
  const [order, setOrders] = useState([])
  const [isLoading, setLoading] = useState(true)
  //   "email": "yakshith@exampdfle.com",
  // "password": "passworddsd123"
  const fetchUsers = async () => {
    setLoading(true)
    try {
      let res = await fetch('https://dark-erin-fox-cuff.cyclic.app/order')
      let data = await res.json()
      setOrders(data.allOrders)
      setLoading(false)
      console.log(data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  const orders = [
    {
      products: [
        { image: 'src', product_name: 'something', amount: 34, qty: 1 },
        { image: 'src', product_name: 'something', amount: 34, qty: 1 },
      ],
      userId: 334343,
      createdAt: 10000,
      orderStatus: 'pending',
      totalAmount: 23,
      address: {
        fullname: 'yakshtih',

        city: 'uupit',
      },
    },
    {
      products: [
        { image: 'src', product_name: 'something', amount: 34 },
        { image: 'src', product_name: 'something', amount: 34 },
      ],
      userId: 334343,
      createdAt: 10000,
      orderStatus: 'pending',
      totalAmount: 23,
      address: {
        fullname: 'yakshtih',

        city: 'uupit',
      },
    },
  ]
  return (
    <div>
      <Header title='Orders' />
      {isLoading ? (
        [...Array(9).keys()].map((item) => {
          return (
            <Skeleton
              mt='0.4rem'
              width={{ base: '900px', xl: '80vw' }}
              height={'3.4rem'}
              borderRadius={'md'}
            ></Skeleton>
          )
        })
      ) : (
        <Accordion allowMultiple>
          {order.map((item) => {
            var date = Number(item.createdAt)
            var d = new Date(date)
            var ds = d.toLocaleString()
            return (
              <AccordionItem
                border={'none'}
                bg={'whiteAlpha.200'}
                mb='7px'
                p='7px'
                borderRadius={'0.4rem'}
              >
                <h2>
                  <AccordionButton>
                    <Flex
                      width='full'
                      fontSize={'1.1rem'}
                      textTransform={'capitalize'}
                    >
                      <Text width='24%'>Name: {item.address.fullname}</Text>
                      <Text width='20%'>City:{item.address.city}</Text>
                      <Text width='20%'>Amount:{item.totalAmount}</Text>
                      <Text width='32%'>ordredAT: {ds}</Text>
                      <Button width='24%' colorScheme='yellow'>
                        orderStatus:{item.orderStatus || 'pending'}
                      </Button>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
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
                          minW={'1000px'}
                        >
                          <Box width='50px'> item: {i + 1}</Box>
                          <Box>
                            Title
                            <Text width='200px'>{item22.product_name}</Text>
                          </Box>
                          <Box>
                            <Image
                              src={item22.image}
                              width='100px'
                              borderRadius={'md'}
                            />
                          </Box>

                          <Text width='100px'>Price: {item22.price} </Text>
                          <Text width='100px'>
                            Quantity: {item22.quantity}{' '}
                          </Text>
                        </Flex>
                      )
                    })}
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      )}
    </div>
  )
}

export default Orders
