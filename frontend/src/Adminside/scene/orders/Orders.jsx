import React from 'react'
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
} from '@chakra-ui/react'
const Orders = () => {
  const orders = [
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
      <Accordion allowMultiple>
        {orders.map((item) => {
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
                  <Flex width='full' fontSize={'1.1rem'}>
                    <Text width='24%'>Name: {item.address.fullname}</Text>
                    <Text width='24%'>City:{item.address.city}</Text>
                    <Text width='24%'>Amount:{item.totalAmount}</Text>
                    <Text width='24%'>ordredAT{item.createdAt}</Text>
                    <Text width='24%'>orderStatus:{item.orderStatus}</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
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
                        borderWidth='1px'
                        px='1rem'
                        justify={'space-around'}
                        py='0.2rem'
                        minW={'1000px'}
                      >
                        <Box> item: {i + 1}</Box>
                        <Box>
                          <Image
                            src={
                              'https://images.pexels.com/photos/5029301/pexels-photo-5029301.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            }
                            width='40px'
                          />
                        </Box>

                        <Flex gap='3'>
                          <Text>Price: </Text>
                          <Text>Quantity: </Text>
                        </Flex>
                      </Flex>
                    )
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default Orders
