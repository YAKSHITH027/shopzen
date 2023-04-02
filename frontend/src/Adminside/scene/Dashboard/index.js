import { Box, Flex, Text, Badge } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import PieChart from '../../components/PieChart'
import StatCard from '../../components/StatCard'
import axios from 'axios'

const Dashboard = () => {
  const [users, setUsers] = useState(0)
  const [orders, setOrders] = useState(0)
  const [products, setProducts] = useState(0)
  const [recentOrders, setRecentOrders] = useState(0)

  const fetchData = async () => {
    try {
      let usersRes = await axios.get(
        'https://dark-erin-fox-cuff.cyclic.app/user'
      )
      let ordersRes = await axios.get(
        'https://dark-erin-fox-cuff.cyclic.app/order'
      )
      let productsRes = await axios.get(
        'https://dark-erin-fox-cuff.cyclic.app/product'
      )
      setUsers(usersRes.data.totalProducts)
      setProducts(productsRes.data.totalProducts)
      setOrders(ordersRes.data.totalProducts)
      setRecentOrders(ordersRes.data.orders)
      console.log(usersRes.data, productsRes.data, ordersRes.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const orderss = [
    {
      products: [
        { image: 'src', product_name: 'something', amount: 3434, qty: 1 },
        { image: 'src', product_name: 'something', amount: 3434, qty: 1 },
      ],
      userId: 334343,
      createdAt: 10000,
      orderStatus: 'pending',
      totalAmount: 2333,
      address: {
        fullname: 'yakshtih',

        city: 'uupit',
      },
    },
    {
      products: [
        { image: 'src', product_name: 'something', amount: 3344 },
        { image: 'src', product_name: 'something', amount: 3344 },
      ],
      userId: 334343,
      createdAt: 10000,
      orderStatus: 'pending',
      totalAmount: 2334,
      address: {
        fullname: 'yakshtih',

        city: 'uupit',
      },
    },
  ]
  return (
    <Box>
      <Flex gap='3' justify={'space-around'}>
        <StatCard title='users' percent='12' value='23' count={users} />
        <StatCard title='orders' percent='24' value='57' count={orders} />
        <StatCard title='products' percent='34' value='34' count={products} />
        <StatCard title='sales' percent='28' value='15' count='53' />
      </Flex>
      <Flex gap='2' mt='1rem'>
        <Box width='70%' minH={'25vh'}>
          <LineChart />
          <Flex>
            <BarChart width='47%' height='18rem' />
            <PieChart width='47%' height='18rem' />
          </Flex>
        </Box>
        <Box minH={'30vh'} width='27%'>
          <Text textAlign={'center'} fontSize='1.3rem'>
            Recent Orders
          </Text>
          <Box
            minH={'29rem'}
            bg='#19376D'
            mt='1rem'
            borderRadius={'1rem'}
            px='8px'
            py='8px'
          >
            {orderss.map((item, id) => {
              return (
                <Flex
                  key={id}
                  px='1rem'
                  justifyContent={'space-around'}
                  py='9px'
                  borderRadius={'md'}
                  bg='gray.500'
                  mt='3px'
                  align={'center'}
                  textTransform={'capitalize'}
                >
                  <Text>{item.address.fullname}</Text>
                  <Badge
                    fontSize={'1rem'}
                    px='6px'
                    colorScheme='orange'
                    borderRadius={'md'}
                  >
                    ₹ {item.totalAmount}
                  </Badge>
                  <Text>'jan 20 2023'</Text>
                </Flex>
              )
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Dashboard
