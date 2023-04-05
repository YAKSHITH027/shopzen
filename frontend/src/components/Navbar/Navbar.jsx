import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import shopzen from '../../utils/Images/shopzen.jpeg'
import { NavbarWrapper } from './NavbarWrapper'
import PageLinkLogos from '../home/PageLinkLogos'
import NewArrivalPopover from './NewArrivalPopover'
import CaseWrapper from './CaseWrapper'
import { Link } from 'react-router-dom'
import Sidebar from '../home/Sidebar'

const Navbar = () => {
  let token = localStorage.getItem('user_token')
  return (
    <NavbarWrapper>
      <Box
        className='navbar-container'
        boxShadow='rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'
      >
        <Link to='/'>
          <Flex align={'center'} ml='-1rem' className='navbar-logo-container'>
            <Image
              src={shopzen}
              width={{ base: '10rem', md: '11rem', lg: '13rem' }}
            />
          </Flex>
        </Link>
        <Box className='middle-navlist'>
          <Box>
            <NewArrivalPopover />
          </Box>
          <Box>
            <CaseWrapper />
          </Box>
          <Box>ACCESSORIES</Box>
          <Box>BAGS & WALLETS</Box>
          <Box>HOME OFFICE</Box>

          {/* <Box>GIFTING</Box> */}
        </Box>
        <Box className='navbar-searching' mr={'-6rem'}>
          <PageLinkLogos />
        </Box>
        <Flex align={'center'} display={{ base: 'none', lg: 'flex' }}>
          {token ? (
            <Button
              onClick={() => {
                localStorage.setItem('user_token', '')
              }}
            >
              <Link to='/login'>LOGOUT</Link>
            </Button>
          ) : (
            <Button>
              <Link to='/login'>LOGIN</Link>
            </Button>
          )}
        </Flex>
        <Sidebar />
      </Box>
    </NavbarWrapper>
  )
}

export { Navbar }
