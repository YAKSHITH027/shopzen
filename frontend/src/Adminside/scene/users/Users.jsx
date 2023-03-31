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
import Header from '../../components/Header'
const Users = () => {
  const userData = [
    {
      userId: 'dfdfsere3434',
      userName: 'yakshith',
      email: 'yakshith@gamil.com',
      joinedOn: '12 march 2023',
    },
    {
      userId: 'dfdfsere3434',
      userName: 'yakshith',
      email: 'yakshith@gamil.com',
      joinedOn: '12 march 2023',
    },
    {
      userId: 'dfdfsere3434',
      userName: 'yakshith',
      email: 'yakshith@gamil.com',
      joinedOn: '12 march 2023',
    },
    {
      userId: 'dfdfsere3434',
      userName: 'yakshith',
      email: 'yakshith@gamil.com',
      joinedOn: '12 march 2023',
    },
    {
      userId: 'dfdfsere3434',
      userName: 'yakshith',
      email: 'yakshith@gamil.com',
      joinedOn: '12 march 2023',
    },
    {
      userId: 'dfdfsere3434',
      userName: 'yakshith',
      email: 'yakshith@gamil.com',
      joinedOn: '12 march 2023',
    },
  ]
  return (
    <>
      <Header title='Users' />
      <div>
        <TableContainer color={'gray.400'}>
          <Table variant='striped' colorScheme='whiteAlpha'>
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
              {userData.map((item) => {
                return (
                  <Tr>
                    <Td>{item.userId}</Td>
                    <Td>{item.userName}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.joinedOn}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Users
