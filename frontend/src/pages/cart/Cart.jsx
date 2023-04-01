/*
{
  "product_name":"Grey COMO Insulated Travel Flask - 355 ML",
  "quantity":1,
  "price":1999 ,
  "discountedPrice":2499,
  "image":"https://images.dailyobjects.com/marche/product-images/1707/grey-como-insulated-travel-flask-355-ml-images/COMO-Insulated-Travel-Flask-Black-350-ML.png?tr=cm-pad_resize,v-2,w-134,h-164,dpr-1"
}
*/

import styles from "./Cart.module.css"
import CartComponent from "../../components/CartComponent/CartComponent";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import Navbar from "../../components/home/Navbar";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCartProducts} from "../../redux/CartReducer/Action"
import { useEffect } from "react";


const Cart = () => {


  const { products, isLoading, isError } = useSelector((store) => {
    return {
        products: store.CartReducer.products,
        isLoading: store.CartReducer.isLoading,
        isError: store.CartReducer.isError,
    };
}, shallowEqual);

let dispatch = useDispatch();


useEffect(() => {
    dispatch(getCartProducts());
}, []);

console.log(isLoading)

  return (
    <>
      <Navbar />
      <img src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1" alt="" />
      <div>
        <p className={styles.shoppingbag_heading}> SHOPPING BAG</p>
      </div>

      {
       products.length==0?<EmptyCart/>: <CartComponent/>
      }     

    </>
  )
}

export default Cart

/*
<div className={styles.cartMainDiv}>
        <div className={styles.cartMainDiv_subdiv1}>
          {
            products.map((el, i) => (
              <CartMap {...el}
                HandleCartDelete={HandleCartDelete}
                key={i}
                HandleQuantityDecreament={HandleQuantityDecreament}
                HandleQuantityIncreament={HandleQuantityIncreament}
              />
            ))
          }
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
            <p>Item Total ({itemLength} Items)</p>
            <p>Rs. {totalprice}</p>
          </div>

          <div className={styles.TotalDiscountDiv}>
            <p>Discount</p>
            <p>Rs. {discountedprice}</p>
          </div>

          <div className={styles.shippingDiv}>
            <p>Shipping</p>
            <p>FREE</p>
          </div>

          <div className={styles.grandTotal}>
            <p>Grand Total</p>
            <p>Rs.{totalprice}</p>
          </div>

          <div className={styles.savedDiv}>
            <p>(Inclusive of Taxes)</p>
            <p>You Saved 20%</p>
          </div>

          <div className={styles.checkoutButtonDiv}>
            <Button colorScheme='green' borderRadius={0} width="100%" onClick={onOpen} >CHECKOUT</Button>
          </div>

          <div className={styles.modelDiv}>
            <Modal isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>ADD NEW ADDRESS</ModalHeader>
                <ModalCloseButton />
                <ModalBody pt={5}>

                  <div style={{ Display: "flex" }}>
                    <Input onChange={HandleChange} value={name} name="name" isRequired='true' variant='flushed' placeholder='Full Name' pt={5} />
                    <Input onChange={HandleChange} value={phone} name="phone" variant='flushed' placeholder='Phone No' pt={5} />
                  </div>

                  <Input onChange={HandleChange} value={email} name="email" variant='flushed' placeholder='Email Address' pt={5} />

                  <div style={{ display: "flex" }}>
                    <Input onChange={HandleChange} value={pincode} name="pincode" variant='flushed' placeholder='Pincode' pt={5} />
                    <Input onChange={HandleChange} value={city} name="city" variant='flushed' placeholder='city' pt={5} />
                    <Input onChange={HandleChange} value={state} name="state" variant='flushed' placeholder='State' pt={5} />
                    <Input onChange={HandleChange} value={country} name="country" variant='flushed' placeholder='Country' pt={5} />
                  </div>

                  <Input onChange={HandleChange} value={building} name="building" variant='flushed' placeholder='Flat No/Building,Street Name' pt={5} />
                  <Input onChange={HandleChange} value={area} name="area" variant='flushed' placeholder='Area / Locality' pt={5} />
                  <Input onChange={HandleChange} value={landmark} name="landmark" variant='flushed' placeholder='Landmark' pt={5} />
                  <Input onChange={HandleChange} value={GSTIN} name="GSTIN" variant='flushed' placeholder='GSTIN' pt={5} />
                  <p>PS. Your information is safe with us, No spam.</p>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='green' borderRadius={0} width="100%" onClick={HandleSubmit}>
                    ADD Address
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

          </div>
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
*/