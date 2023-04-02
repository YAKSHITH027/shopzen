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

  const [title, setTitle] = useState('')
  const [orginalPrice, setOriginalPrice] = useState('')
  const [offerPrice, setOfferPrice] = useState('')
  const handleChange = (e) => {
    console.log(e.target.files[0])
    if (e.target.files.length) {
      setUrl(URL.createObjectURL(e.target.files[0]))
      setFile(e.target.files[0])
    }
  }
  const handleSubmit = async () => {
    if (!file || !title || !offerPrice || !orginalPrice) {
      toast({
        title: 'Fill all fields',
        description: 'Just fill the fields',
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
    try {
      await uploadBytes(fileRef, file, metadata)

      const avatarURL = await getDownloadURL(fileRef)
      let payload = {
        title: title,
        image: avatarURL,
        price: +offerPrice,
        ogprice: +orginalPrice,
        is_new: '',
      }
      console.log(payload)
      let res = await fetch(
        'https://dark-erin-fox-cuff.cyclic.app/product/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('admin_token'),
          },
          body: JSON.stringify(payload),
        }
      )
      console.log(avatarURL)
      if (res.status == 200) {
        toast({
          title: 'Product has been added successfully',
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
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
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
              <FormLabel>Title</FormLabel>
              <Input
                isRequired
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <Flex gap='1rem'>
              <FormControl>
                <FormLabel>Offer price</FormLabel>
                <Input
                  name='offerPrice'
                  value={offerPrice}
                  type='number'
                  onChange={(e) => setOfferPrice(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Original price</FormLabel>
                <Input
                  name='originalPrice'
                  value={orginalPrice}
                  type='number'
                  onChange={(e) => setOriginalPrice(e.target.value)}
                />
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
