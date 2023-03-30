import { Badge, Box, Center, Flex, Text } from '@chakra-ui/layout'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress'
import { Stat, StatArrow, StatHelpText } from '@chakra-ui/stat'
import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'

const StatCard = ({ title, percent, count, value }) => {
  return (
    <Flex
      gap='3rem'
      bg={'#19376D'}
      px={'2rem'}
      py='1.3rem'
      borderRadius='md'
      align={'center'}
    >
      <Box>
        <Flex fontSize={'1.4rem'} align='center' gap='2'>
          <AiOutlineUserAdd fontSize={'1.5rem'} />
          <Text>{title}</Text>
        </Flex>
        <Text textAlign='center' mt='6px'>
          <Badge
            colorScheme='green'
            fontSize={'1.2rem'}
            width='full'
            borderRadius={'lg'}
          >
            {count}
          </Badge>
        </Text>
      </Box>
      <CircularProgress value={value} color='green.400' size={'70px'}>
        <CircularProgressLabel>
          <Center>
            <Stat>
              <StatHelpText>
                <StatArrow type='increase' />
                {percent}%
              </StatHelpText>
            </Stat>
          </Center>
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  )
}

export default StatCard
