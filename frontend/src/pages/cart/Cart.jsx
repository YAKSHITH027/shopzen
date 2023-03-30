
import styles from "./Cart.module.css"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { MdDiscount } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";

import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import CartMap from "../../components/CartMap/CartMap"
import Navbar from "../../components/home/Navbar";
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,

} from '@chakra-ui/react'



const Cart = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  

  return (
    <>
      <Navbar />
      <img src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1" alt="" />
      <div>
        <p className={styles.shoppingbag_heading}> SHOPPING BAG</p>
      </div>

      <div className={styles.cartMainDiv}>
        <div className={styles.cartMainDiv_subdiv1}>
          <CartMap />
        </div>
        <div className={styles.cartMainDiv_subdiv2}>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <div className={styles.coupons}>
                      <MdDiscount size={20} />
                      <div>
                        <p className={styles.coupons_heading1}>COUPONS & OFFERS</p>
                        <p className={styles.coupons_heading2}> <span>SUMMERSALE</span> Coupon Applied</p>
                      </div>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className={styles.applyCouponInput}>
                  <Input variant='unstyled' placeholder='Type coupon code here...' size='md' />
                  <Button colorScheme='green' variant='ghost'>
                    APPLY
                  </Button>
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <div className={styles.coupons}>
                      <AiFillGift size={20} />
                      <div>
                        <p className={styles.coupons_heading1}>REDEEM GIFT CARD</p>
                      </div>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div>
                  <p className={styles.coupons_heading2}> E-GIFT CARD CREDENTIALS</p>
                  <div className={styles.giftDiv}>
                    <Input variant='unstyled' placeholder='E-Gift Card Number' size='md' />
                    <Input variant='unstyled' placeholder='Pin' size='md' />
                  </div>
                  <Button colorScheme='green' borderRadius={0} width="100%">APPLY</Button>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>



          <p className={styles.orderSummary}>ORDER SUMMARY</p>

          <div className={styles.TotalItemDiv}>
            <p>Item Total (4 Items)</p>
            <p>Rs.9996</p>
          </div>

          <div className={styles.TotalDiscountDiv}>
            <p>Discount</p>
            <p>Rs.1999</p>
          </div>

          <div className={styles.shippingDiv}>
            <p>Shipping</p>
            <p>FREE</p>
          </div>

          <div className={styles.grandTotal}>
            <p>Grand Total</p>
            <p>Rs.7997</p>
          </div>

          <div className={styles.savedDiv}>
            <p>(Inclusive of Taxes)</p>
            <p>You Saved Rs.1999</p>
          </div>

          <div className={styles.checkoutButtonDiv}>
            <Button colorScheme='green' borderRadius={0} width="100%" onClick={onOpen} >CHECKOUT</Button>
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>ADD NEW ADDRESS</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

                <div style={{ display: "flex" }}>
                  <Input isRequired='true' variant='flushed' placeholder='Full Name' />
                  <Input variant='flushed' placeholder='Phone No' />
                </div>

                <Input variant='flushed' placeholder='Email Address' />

                <div style={{ display: "flex" }}>
                  <Input variant='flushed' placeholder='Pincode' />
                  <Input variant='flushed' placeholder='city' />
                  <Input variant='flushed' placeholder='State' />
                  <Input variant='flushed' placeholder='Country' />
                </div>

                <Input variant='flushed' placeholder='Flat No/Building,Street Name' />
                <Input variant='flushed' placeholder='Area / Locality' />
                <Input variant='flushed' placeholder='Landmark' />
                <Input variant='flushed' placeholder='GSTIN' />
                <p>PS. Your information is safe with us, No spam.</p>



              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>










































        </div>

      </div>


      <div className={styles.recentlyViewedDiv}>
        <p className={styles.recentlyHeading}>RECENTLY VIEWED</p>

        <div className={styles.recentlyViewed_subdiv1}>
          <div>
            <img src="https://images.dailyobjects.com/marche/product-images/1201/all-red-pedal-daypack-images/All-Red-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-202,h-249,dpr-1" alt="" />
            <p className={styles.productName}>All Red Pedal Daypack</p>
            <p className={styles.productPrice}>Rs.1699 <span>2499</span></p>
            <p className={styles.FreeInfo}>*FREE DUFFLE BAG</p>
          </div>

          <div>
            <img src="https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-stride-2-0-clear-case-cover-for-iphone-13-images/DailyObjects-Stride-2-0-Clear-Case-Cover-For-iPhone-13-2.png?tr=cm-pad_resize,v-2,w-202,h-249,dpr-1" alt="" />
            <p className={styles.productName}>Stride 2.0 Clear Case Cover For iPhone 13</p>
            <p className={styles.productPrice}>Rs.699  <span>1199</span></p>
            <p className={styles.FreeInfo}>*FREE DUFFLE BAG</p>
          </div>

        </div>



      </div>
    </>
  )
}

export default Cart

