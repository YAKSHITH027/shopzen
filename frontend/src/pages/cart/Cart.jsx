
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

const Cart = () => {
  return (
    <>
      <img src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1" alt="" />
      <div>
        <p className={styles.shoppingbag_heading}> SHOPPING BAG</p>
      </div>

      <div className={styles.cartMainDiv}>
        <div className={styles.cartMainDiv_subdiv1}>
          <CartMap/>
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
            <Button colorScheme='green' borderRadius={0} width="100%">CHECKOUT</Button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart

