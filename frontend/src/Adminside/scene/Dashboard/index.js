import { Box, Flex, Text, Badge } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import PieChart from '../../components/PieChart'
import StatCard from '../../components/StatCard'
import axios from 'axios'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { RiMoneyPoundCircleLine } from 'react-icons/ri'

const Dashboard = () => {
  const [users, setUsers] = useState(0)
  const [orders, setOrders] = useState(0)
  const [products, setProducts] = useState(0)
  const [recentOrders, setRecentOrders] = useState([])

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
      setRecentOrders(ordersRes.data.allOrders)
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
        <StatCard
          title='users'
          percent='12'
          value='23'
          count={users}
          icon={<AiOutlineUserAdd fontSize={'1.5rem'} />}
        />
        <StatCard
          title='orders'
          percent='24'
          value='57'
          count={orders}
          icon={<CiDeliveryTruck fontSize={'1.5rem'} />}
        />
        <StatCard
          title='products'
          percent='34'
          value='34'
          count={products}
          icon={<MdProductionQuantityLimits fontSize={'1.5rem'} />}
        />
        <StatCard
          title='sales'
          percent='28'
          value='15'
          count='53'
          icon={<RiMoneyPoundCircleLine fontSize={'1.5rem'} />}
        />
      </Flex>
      <Flex gap='2' mt='1rem'>
        <Box width='67%' minH={'25vh'}>
          <LineChart />
          <Flex>
            <BarChart width='47%' height='18rem' />
            <PieChart width='47%' height='18rem' />
          </Flex>
        </Box>
        <Box minH={'30vh'} width={{ base: '35%', lg: '33%' }}>
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
            overflowY={'auto'}
          >
            {recentOrders.map((item, id) => {
              var date = +item.createdAt
              var d = new Date(date)
              var ds = d.toLocaleString()
              let split = ds.split(',')
              return (
                <Flex
                  key={id}
                  px='0.2rem'
                  justifyContent={'space-around'}
                  py='9px'
                  borderRadius={'md'}
                  bg='#032239'
                  mt='3px'
                  align={'center'}
                  textTransform={'capitalize'}
                >
                  <Text
                    width='5rem'
                    overflow={'hidden'}
                    whiteSpace='nowrap'
                    textOverflow={'ellipsis'}
                  >
                    {item.address.fullname || 'yakshith'}
                  </Text>
                  <Badge
                    fontSize={'1rem'}
                    px='3px'
                    colorScheme='orange'
                    borderRadius={'md'}
                    width='4rem'
                    overflow={'hidden'}
                    whiteSpace='nowrap'
                    textOverflow={'ellipsis'}
                  >
                    ₹ {item.totalAmount}
                  </Badge>
                  <Text width='6rem'> {split[1]}</Text>
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
