import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import { RxDashboard } from 'react-icons/rx'
import { BsCartCheck } from 'react-icons/bs'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { SlCalender, SlHandbag } from 'react-icons/sl'
import { MdAddShoppingCart, MdOutlineSecurity } from 'react-icons/md'
// import { IoBagAddOutline } from 'react-icons/io'
// import { BsCartCheck } from 'react-icons/bs'
const Sidebar = ({ children }) => {
  const pageLinks = [
    {
      id: 1,
      link: '/dashboard',
      title: 'dashboard',
      icon: <RxDashboard />,
    },
    {
      id: 2,
      link: '/adminproducts',
      title: 'products',
      icon: <BsCartCheck />,
    },
    {
      id: 23,
      link: '/addproduct',
      title: 'add products',
      icon: <MdAddShoppingCart />,
    },
    {
      id: 3,
      link: '/adminusers',
      title: 'users',
      icon: <HiOutlineUserCircle />,
    },
    {
      id: 4,
      link: '/admincalender',
      title: 'calender',
      icon: <SlCalender />,
    },
    {
      id: 5,
      link: '/adminorders',
      title: 'orders',
      icon: <SlHandbag />,
    },
    {
      id: 6,
      link: '/admins',
      title: 'admins',
      icon: <MdOutlineSecurity />,
    },
    {
      id: 7,
      link: '/barchart',
      title: 'bar chart',
      icon: <MdOutlineSecurity />,
    },
    {
      id: 8,
      link: '/piechart',
      title: 'pie chart',
      icon: <MdOutlineSecurity />,
    },
  ]
  return (
    <Flex bg='#032239' minH={'100vh'} color='white' overflow={'auto'}>
      <Flex flexDir={'column'} minW='15rem' gap='3' bg='#042b47' p='1rem'>
        <Heading
          textAlign={'center'}
          fontFamily='monospace'
          letterSpacing={'1px'}
        >
          ADMIN
        </Heading>
        <Flex flexDir={'column'} align='center'>
          <Avatar size={'xl'} name='yakshith' />
          <Box my='1rem'>
            <Text textAlign={'center'}>Yakshith</Text>
          </Box>
        </Flex>
        {pageLinks.map((item) => {
          return (
            <Flex gap='3' align={'center'} pl='2rem' key={item.id}>
              <Text>{item.icon}</Text>
              <Link to={item.link}>
                <Text textTransform={'capitalize'}>{item.title}</Text>
              </Link>
            </Flex>
          )
        })}
      </Flex>
      <Box width={'100%'} minW='1000px'>
        <Topbar />
        <Box px={'3rem'} pt='2rem' minH={'30vh'}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default Sidebar
