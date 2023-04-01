import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Megamenu = () => {
  return (
    <>
      <Link to='/cart'>cart</Link>
      <Link to='/registration'>register</Link>
      <Link to='/login'>login</Link>
      <Link to='/myaccount'>myaccount</Link>
      <Link to='/dashboard'>admin</Link>
    </>
  )
}

export default Megamenu
