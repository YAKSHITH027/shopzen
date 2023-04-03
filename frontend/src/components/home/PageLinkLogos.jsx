import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BsBag } from 'react-icons/bs'
import { GrSearch } from 'react-icons/gr'
import { MdOutlinePerson2 } from 'react-icons/md'
import { Link } from 'react-router-dom'
const PageLinkLogos = ({ setShow }) => {
  return (
    <Flex gap='6' align={'center'} paddingRight='1rem'>
      <Link to="/cart"><BsBag fontSize={'1.3rem'} /></Link>
      <Link to='/profile'>
        <MdOutlinePerson2 fontSize={'1.5rem'} />
      </Link>
      <GrSearch
        fontSize={'1.3rem'}
        onClick={() => {
          setShow((prev) => !prev)
        }}
      />
    </Flex>
  )
}

export default PageLinkLogos
