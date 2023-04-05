import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import logo from '../../utils/Images/shopzen.jpeg'
function Sidebar({ id, handleLogout }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let token = localStorage.getItem('user_token')
  const btnRef = React.useRef()

  return (
    <Box display={{ lg: 'none' }}>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box p='1rem'>
            <Image
              src={logo}
              alt='logo'
              width='11rem'
              height={{ base: '3rem', md: '100%' }}
            />
          </Box>
          <Flex
            justify='center'
            pl='1rem'
            gap='5'
            flexDir={'column'}
            mx='2rem'
            mt='2rem'
          >
            <Link to='/'>
              <Text
                textAlign={'center'}
                fontSize={'1.5rem'}
                borderBottomWidth='2px'
              >
                Home
              </Text>
            </Link>
            <Link to='/profile'>
              <Text
                textAlign={'center'}
                fontSize={'1.5rem'}
                borderBottomWidth='2px'
              >
                Profile
              </Text>
            </Link>
            <Link to='/cart'>
              <Text
                textAlign={'center'}
                fontSize={'1.5rem'}
                borderBottomWidth='2px'
              >
                Cart
              </Text>
            </Link>
            <Link to='/product'>
              <Text
                textAlign={'center'}
                fontSize={'1.5rem'}
                borderBottomWidth='2px'
              >
                Products
              </Text>
            </Link>
            <Flex
              align={'center'}
              justify={'center'}
              width='10rem'
              margin={'auto'}
            >
              {token ? (
                <Button
                  width={'full'}
                  onClick={() => {
                    localStorage.setItem('user_token', '')
                  }}
                >
                  <Link to='/login'>LOGOUT</Link>
                </Button>
              ) : (
                <Button width={'full'}>
                  <Link to='/login'>LOGIN</Link>
                </Button>
              )}
            </Flex>

            {/* <Flex justify={'center'}>
              {id ? (
                <Button onClick={handleLogout} px='2rem'>
                  Logout
                </Button>
              ) : (
                <Link to='/login'>
                  <Button px='2rem'>Login</Button>
                </Link>
              )}
            </Flex> */}
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
export default Sidebar
