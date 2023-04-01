import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'
import shopzen from '../../../utils/Images/shopzen.jpeg'
const Topbar = () => {
  return (
    <Box display={'flex'} justifyContent='space-between' p='2'>
      {/* search bar */}
      <Box
        display={'flex'}
        borderRadius='17px'
        p={'0.5rem'}
        pb='0'
        overflow={'hidden'}
      >
        <Image
          opacity={'0.7'}
          src={shopzen}
          width='10rem'
          borderRadius='11px'
        />
      </Box>
      <Flex gap='3' align={'center'} paddingRight={'1rem'}>
        <Button colorScheme='blackAlpha'>Sign Out</Button>
      </Flex>
    </Box>
  )
}

export default Topbar
