import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'

const Topbar = () => {
  return (
    <Box display={'flex'} justifyContent='space-between' p='2'>
      {/* search bar */}
      <Box display={'flex'} borderRadius='3px'>
        <Input />
      </Box>
      <Flex gap='3'>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </Flex>
    </Box>
  )
}

export default Topbar
