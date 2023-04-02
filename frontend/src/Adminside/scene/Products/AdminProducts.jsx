import {
  Box,
  Button,
  Flex,
  Image,
  Skeleton,
  Text,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import EditModal from '../../components/EditModal'
import axios from 'axios'

const AdminProducts = () => {
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const toast = useToast()

  const fetchProduct = async () => {
    try {
      let res = await axios.get(
        `https://dark-erin-fox-cuff.cyclic.app/product?limit=25&page=${page}`
      )
      setProducts(res.data.products)
      setTotalProducts(res.data.totalProducts)
      setIsLoading(false)
      console.log('data', res.data)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [page])

  const handleDelete = async (id) => {
    try {
      let res = await fetch(
        `https://dark-erin-fox-cuff.cyclic.app/product/delete/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('admin_token'),
          },
        }
      )
      let data = await res.json()
      console.log(data)
      console.log(res.status)
      if (res.status == 200) {
        fetchProduct()
        toast({
          title: 'Product has been deleted successfully',
          description: 'good luck!',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
      } else {
        toast({
          title: 'Permission denied',
          description: 'Your are not a real administrator',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
      }
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <Box
      overflowY={'auto'}
      maxH={'90vh'}
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Box
        display={'grid'}
        gridTemplateColumns={{ base: 'repeat(4,1fr)', xl: 'repeat(5,1fr)' }}
        gap={'4'}
      >
        {isLoading
          ? [...Array(25).keys()].map((item, i) => {
              return (
                <Skeleton
                  key={i}
                  width='225px'
                  height='352px'
                  borderRadius={'md'}
                ></Skeleton>
              )
            })
          : products.map((item) => {
              return (
                <Box
                  bg={
                    'linear-gradient(to bottom, #032239, #092940, #102f46, #17364d, #1d3d54)'
                  }
                  py='1rem'
                  borderRadius={'md'}
                  key={item.image}
                >
                  <Image src={item.image} width={'225px'} height={'275px'} />
                  <Flex justifyContent={'space-around'} pt={'5px'}>
                    <EditModal
                      id={item._id}
                      image={item.image}
                      original={item.ogprice}
                      offerPrice={item.price}
                      title={item.title}
                    />
                    <Button
                      colorScheme='blackAlpha'
                      onClick={() => {
                        handleDelete(item._id)
                      }}
                    >
                      Delete
                    </Button>
                  </Flex>
                  {/* <Text>{item.title.substring(0, 18)}</Text> */}
                </Box>
              )
            })}
      </Box>
      <Flex gap='3' py='4rem' mx='auto' width={'max-content'}>
        <Button
          colorScheme='blackAlpha'
          isDisabled={page <= 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        {[...Array(Math.ceil(totalProducts / 25)).keys()].map((item) => {
          return (
            <Button
              colorScheme={page == item + 1 ? 'purple' : 'blackAlpha'}
              onClick={() => setPage(item + 1)}
            >
              {item + 1}
            </Button>
          )
        })}
        <Button
          colorScheme='blackAlpha'
          isDisabled={page >= Math.ceil(totalProducts / 25) ? true : false}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  )
}

export default AdminProducts
