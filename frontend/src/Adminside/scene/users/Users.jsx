import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const Users = () => {
  return (
    <div>
      <TableContainer color={'gray.400'}>
        <Table variant='striped' colorScheme='blackAlpha'>
          <TableCaption>All Users Data</TableCaption>
          <Thead>
            <Tr>
              <Th color={'white'}>UserId</Th>
              <Th color={'white'}>User Name</Th>
              <Th color={'white'}>Email</Th>
              <Th color={'white'}>Joined on</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inchedfsdfdsfdsfsdfsdfs</Td>
              <Td>millimetrdfdses (mm)</Td>
              <Td>25.4dfdsf</Td>
              <Td>25.4dfsdfsd</Td>
            </Tr>
            <Tr>
              <Td>feedfsdfdsfdt</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
            </Tr>
            <Tr>
              <Td>yarddfdsfs</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Users
