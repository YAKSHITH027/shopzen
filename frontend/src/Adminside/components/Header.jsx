import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = ({ title }) => {
  return (
    <>
      <Heading mb='1rem' fontSize={'2rem'} color={'gray.300'}>
        {title}
      </Heading>
    </>
  )
}

export default Header
