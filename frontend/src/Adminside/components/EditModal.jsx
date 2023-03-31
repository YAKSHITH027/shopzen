import React from 'react'
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
} from '@chakra-ui/react'
const EditModal = ({ image, offerPrice, original, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
              <FormLabel>Name</FormLabel>
              <Input value={title} />
            </FormControl>
            <FormControl mt='6px'>
              <FormLabel>Image URL</FormLabel>
              <Input value={image} />
            </FormControl>
            <Flex gap='5'>
              <FormControl mt='6px'>
                <FormLabel>Offer Price</FormLabel>
                <Input value={offerPrice} />
              </FormControl>{' '}
              <FormControl mt='6px'>
                <FormLabel>Original Price</FormLabel>
                <Input value={original} />
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blackAlpha' mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditModal
