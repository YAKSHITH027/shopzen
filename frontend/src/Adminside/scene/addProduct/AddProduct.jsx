import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  useToast,
} from '@chakra-ui/react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import { storage } from '../../../lib/firebase'
import Header from '../../components/Header'

const AddProduct = () => {
  const toast = useToast()
  const [url, setUrl] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    console.log(e.target.files[0])
    if (e.target.files.length) {
      setUrl(URL.createObjectURL(e.target.files[0]))
      setFile(e.target.files[0])
    }
  }
  const handleSubmit = async () => {
    if (!file) {
      toast({
        title: 'No file selected',
        description: 'Please select a file to upload',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })

      return
    }
    setLoading(true)
    console.log(file)
    const fileRef = ref(storage, 'avatars/' + `image${Date.now()}`)
    const metadata = {
      contentType: 'image/jpeg',
    }
    await uploadBytes(fileRef, file, metadata)

    const avatarURL = await getDownloadURL(fileRef)
    console.log(avatarURL)
    toast({
      title: 'Product uploaded',
      status: 'success',
      isClosable: true,
      position: 'top',
      duration: 5000,
    })
    setLoading(false)
  }
  return (
    <>
      <Header title='Add New Product' />
      <Flex>
        <Flex gap='5' flexDir={'column'}>
          <Image
            width='300px'
            height='300px'
            borderRadius={'md'}
            opacity={url ? 0.8 : 0.5}
            src={
              url
                ? url
                : 'https://cdn.dribbble.com/users/264129/screenshots/3520651/drbl_daily_ui_031.gif'
            }
          />
          <Button colorScheme='blackAlpha'>
            <FormLabel
              fontSize={'1.2rem'}
              pt='5px'
              width={'full'}
              textAlign={'center'}
            >
              select image
              <Input
                type='file'
                accept='image/*'
                onChange={handleChange}
                display={'none'}
              />
            </FormLabel>
          </Button>
        </Flex>
        <Box>
          <Flex pl={'5rem'} flexDirection={'column'} width='40rem'>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Brand</FormLabel>
              <Input />
            </FormControl>
            <Flex gap='1rem'>
              <FormControl>
                <FormLabel>price</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>original price</FormLabel>
                <Input />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel>Fast Delivery</FormLabel>
              <Input />
            </FormControl>
          </Flex>
        </Box>
      </Flex>
      <Flex justify={'center'} mt='3rem'>
        <Button colorScheme='blackAlpha' onClick={handleSubmit} px='3rem'>
          Submit
        </Button>
      </Flex>
    </>
  )
}

export default AddProduct
