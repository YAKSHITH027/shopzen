import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import shopzen from '../../utils/Images/shopzen.jpeg'
import { NavbarWrapper } from './NavbarWrapper'
import PageLinkLogos from '../home/PageLinkLogos'
import NewArrivalPopover from './NewArrivalPopover'
import CaseWrapper from './CaseWrapper'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box>
    <NavbarWrapper>
    <Box className='navbar-container'>
        <Box className='navbar-logo-container'>
        <Image src={shopzen} width='13rem' />
        </Box>
        <Box className='middle-navlist'>
        <Box><NewArrivalPopover/></Box>
        <Box><CaseWrapper/></Box>
        <Box>ACCESSORIES</Box>
        <Box>BAGS & WALLETS</Box>
        <Box>HOME OFFICE</Box>
        <Box>COLLECTIONS</Box>
        {/* <Box>GIFTING</Box> */}
        <Box>
            <Link to='/login'>LOGIN</Link>
        </Box>
        </Box>
        <Box className='navbar-searching'>
        <PageLinkLogos />
        </Box>
    </Box>
    </NavbarWrapper>
    </Box>
  )
}

export  {Navbar}