import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Search = ({ show }) => {
  return (
    <Flex
      justify={'center'}
      pos={'fixed'}
      top='6rem'
      margin={'auto'}
      width='full'
      display={show ? 'flex' : 'none'}
    >
      <Box width='29rem'>
        <Input
          placeholder='Search here'
          bg={'whiteAlpha'}
          py='25px'
          px='10px'
        />
        <Flex bg='white' flexDir={'column'}>
          {/* <Text className='suggestion'>hello</Text>
          <Text className='suggestion'>heldfslo</Text>
          <Text>helldfso</Text> */}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Search
