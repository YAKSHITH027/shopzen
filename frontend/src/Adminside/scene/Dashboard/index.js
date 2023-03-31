import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import PieChart from '../../components/PieChart'
import StatCard from '../../components/StatCard'

const Dashboard = () => {
  return (
    <Box>
      <Flex gap='3' justify={'space-around'}>
        <StatCard title='users' percent='12' value='23' count='5' />
        <StatCard title='orders' percent='24' value='57' count='8' />
        <StatCard title='products' percent='34' value='34' count='47' />
        <StatCard title='sales' percent='28' value='15' count='53' />
      </Flex>
      <Flex gap='2' mt='1rem'>
        <Box width='70%' minH={'25vh'}>
          <LineChart />
          <Flex>
            <BarChart width='47%' height='18rem' />
            <PieChart width='47%' height='18rem' />
          </Flex>
        </Box>
        <Box minH={'30vh'} width='27%'>
          <Text textAlign={'center'} fontSize='1.3rem'>
            Recent Orders
          </Text>
          <Box
            minH={'30rem'}
            bg='gray.700'
            mt='1rem'
            borderRadius={'1rem'}
          ></Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Dashboard
