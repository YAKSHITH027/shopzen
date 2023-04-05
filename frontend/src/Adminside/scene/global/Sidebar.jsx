import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Topbar from './Topbar'
import { RxDashboard } from 'react-icons/rx'
import { BsBarChartLineFill, BsCartCheck, BsPieChart } from 'react-icons/bs'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { SlCalender, SlHandbag } from 'react-icons/sl'
import { MdAddShoppingCart, MdOutlineSecurity } from 'react-icons/md'
// import { IoBagAddOutline } from 'react-icons/io'
// import { BsCartCheck } from 'react-icons/bs'
const Sidebar = ({ children }) => {
  const { pathname } = useLocation()
  console.log(pathname)
  let adminInfo = JSON.parse(localStorage.getItem('admin_info'))
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
      icon: <BsBarChartLineFill />,
    },
    {
      id: 8,
      link: '/piechart',
      title: 'pie chart',
      icon: <BsPieChart />,
    },
  ]
  return (
    <Flex
      bg='#032239'
      minH={'100vh'}
      color='white'
      overflow={'auto'}
      width='full'
    >
      <Flex
        flexDir={'column'}
        minW={{ base: '4rem', lg: '15rem' }}
        gap='3'
        overflow={'hidden'}
        whiteSpace='nowrap'
        textOverflow={'ellipsis'}
        bg='#042b47'
        p='1rem'
      >
        <Heading
          textAlign={'center'}
          fontFamily='monospace'
          letterSpacing={'1px'}
          display={{ base: 'none', lg: 'block' }}
        >
          ADMIN
        </Heading>
        <Flex flexDir={'column'} align='center'>
          <Avatar
            size={{ base: 'md', lg: 'xl' }}
            src={adminInfo.image}
            name={adminInfo.userName}
          />
          <Box my='1rem'>
            <Text
              textAlign={'center'}
              fontSize={'1.3rem'}
              display={{ base: 'none', lg: 'block' }}
            >
              {adminInfo.userName}
            </Text>
          </Box>
        </Flex>
        {pageLinks.map((item) => {
          return (
            <Link to={item.link}>
              <Flex
                gap='3'
                align={'center'}
                pl={{ base: '0.3rem', lg: '2rem' }}
                key={item.id}
              >
                <Text fontSize={'1.5rem'}>{item.icon}</Text>
                <Text
                  textTransform={'capitalize'}
                  color={pathname == item.link ? '#5c60bd' : 'white'}
                  display={{ base: 'none', lg: 'block' }}
                >
                  {item.title}
                </Text>
              </Flex>
            </Link>
          )
        })}
      </Flex>
      <Box overflow={'auto'} width='full'>
        <Box width={'full'} minW='1000px'>
          <Topbar />
          <Box px={'3rem'} pt='2rem' minH={'30vh'} width={'full'}>
            {children}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default Sidebar
