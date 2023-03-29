import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BsBag } from 'react-icons/bs'
import { GrSearch } from 'react-icons/gr'
import { MdOutlinePerson2 } from 'react-icons/md'
const PageLinkLogos = () => {
  return (
    <Flex gap='6' align={'center'} paddingRight='1rem'>
      <BsBag fontSize={'1.3rem'} />
      <MdOutlinePerson2 fontSize={'1.5rem'} />
      <GrSearch fontSize={'1.3rem'} />
    </Flex>
  )
}

export default PageLinkLogos
