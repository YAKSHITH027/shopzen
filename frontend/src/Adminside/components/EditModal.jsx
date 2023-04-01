import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  useDisclosure,
  Input,
  Flex,
  Image,
  useToast,
} from '@chakra-ui/react'
const EditModal = ({ image, offerPrice, original, title, id }) => {
  const [productData, setProductData] = useState({
    title: title,
    image: image,
    price: +offerPrice,
    ogprice: +original,
  })
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value })
  }

  const handleUpload = async () => {
    let payload = {
      ...productData,
      price: +productData.price,
      ogprice: +productData.ogprice,
    }
    console.log(payload)
    try {
      let res = await fetch(
        `https://dark-erin-fox-cuff.cyclic.app/product/update/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('admin_token'),
          },
          body: JSON.stringify(payload),
        }
      )
      if (res.status == 200) {
        toast({
          title: 'Product has been edited successfully',
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
  // console.log(productData)
  return (
    <>
      <Button onClick={onOpen} colorScheme='blackAlpha'>
        Edit
      </Button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent color='white' bg={'#1a2b4a'}>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify={'center'}>
              <Image src={image} width='200px' />
            </Flex>
            <FormControl mt='6px'>
              <FormLabel>Title</FormLabel>
              <Input
                name='title'
                onChange={handleChange}
                value={productData.title}
              />
            </FormControl>
            <FormControl mt='6px'>
              <FormLabel>Image URL</FormLabel>
              <Input
                name='image'
                onChange={handleChange}
                value={productData.image}
              />
            </FormControl>
            <Flex gap='5'>
              <FormControl mt='6px'>
                <FormLabel>Offer Price</FormLabel>
                <Input
                  name='price'
                  type='number'
                  onChange={handleChange}
                  value={productData.price}
                />
              </FormControl>{' '}
              <FormControl mt='6px'>
                <FormLabel>Original Price</FormLabel>
                <Input
                  name='ogprice'
                  type='number'
                  onChange={handleChange}
                  value={productData.ogprice}
                />
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blackAlpha'
              mr={3}
              onClick={() => {
                onClose()
                handleUpload()
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditModal
