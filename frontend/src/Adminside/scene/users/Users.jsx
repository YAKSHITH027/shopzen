import React, { useEffect } from 'react'
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
  Skeleton,
} from '@chakra-ui/react'
import axios from 'axios'
import Header from '../../components/Header'
import { useState } from 'react'
const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  //   "email": "yakshith@exampdfle.com",
  // "password": "passworddsd123"
  const fetchUsers = async () => {
    setLoading(true)
    try {
      let users = await fetch('https://dark-erin-fox-cuff.cyclic.app/user')
      let data = await users.json()
      setUsers(data.users)
      setLoading(false)
      console.log(data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <>
      <Header title='Users' />
      <div>
        {isLoading ? (
          [...Array(12).keys()].map((item) => {
            return (
              <Skeleton
                mt='0.4rem'
                width={{ base: '900px', xl: '80vw' }}
                height={'2.5rem'}
                borderRadius={'md'}
              ></Skeleton>
            )
          })
        ) : (
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
                {users.map((item, id) => {
                  console.log(item.createdAt)
                  var date = +item.createdAt
                  var d = new Date(date)
                  var ds = d.toLocaleString()

                  return (
                    <Tr key={id}>
                      <Td width='16rem'>{item._id}</Td>
                      <Td>{item.userName}</Td>
                      <Td>{item.email}</Td>
                      <Td>{ds}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  )
}

export default Users
