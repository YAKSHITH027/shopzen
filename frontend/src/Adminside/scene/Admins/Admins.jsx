import { Image } from '@chakra-ui/image'
import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import Header from '../../components/Header'

const Admins = () => {
  const admins = [
    {
      name: 'yakshith',
      image: 'https://avatars.githubusercontent.com/u/110689744?v=4',
    },
    {
      name: 'Nisha',
      image: 'https://avatars.githubusercontent.com/u/112969807?v=4',
    },
    {
      name: 'swapnil',
      image: 'https://avatars.githubusercontent.com/u/97510773?v=4',
    },
    {
      name: 'ruchi',
      image: 'https://avatars.githubusercontent.com/u/105973023?v=4',
    },
    {
      name: 'devang',
      image: 'https://avatars.githubusercontent.com/u/107463038?v=4',
    },
  ]
  return (
    <>
      <Header title='Admins' />
      <Box display={'grid'} gridTemplateColumns={'repeat(5,1fr)'} gap='3'>
        {admins.map((admin, index) => (
          <Box key={index}>
            <Image
              opacity={0.7}
              borderRadius={'md'}
              src={admin.image}
              alt={admin.name}
            />
            <Text
              textTransform={'capitalize'}
              fontSize={'1.5rem'}
              py='0.5rem'
              textAlign={'center'}
            >
              {admin.name}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Admins
