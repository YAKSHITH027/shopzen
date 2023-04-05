import styles from './CartComponent.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
} from '@chakra-ui/react'
import { MdDiscount } from 'react-icons/md'
import { AiFillGift } from 'react-icons/ai'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import CartMap from '../../components/CartMap/CartMap'
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getCartProducts,
  deleteCartdata,
  cartUpdateQty,
} from '../../redux/CartReducer/Action'
import { useToast } from '@chakra-ui/react'

const addressInitislState = {
  name: '',
  phone: '',
  email: '',
  pincode: '',
  city: '',
  state: '',
  country: '',
  building: '',
  area: '',
  landmark: '',
  GSTIN: '',
}

function CartComponent() {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [addressForm, setAddressForm] = useState(addressInitislState)
  const {
    name,
    phone,
    email,
    pincode,
    city,
    state,
    country,
    building,
    area,
    landmark,
    GSTIN,
  } = addressForm
  const navigate = useNavigate()
  //total price state
  let [totalprice, setTotalPrice] = useState(0)

  let discountedprice = 0
  function HandleChange(e) {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value })
  }

  function HandleSubmit() {
    if (
      name === '' ||
      phone === '' ||
      email === '' ||
      pincode === '' ||
      city === '' ||
      country === '' ||
      building === '' ||
      area === ''
    ) {
      toast({
        title: 'All Feilds Required',
        position: 'top',
        isClosable: true,
      })
    } else {
      localStorage.setItem('address', JSON.stringify(addressForm))
      onClose()
      navigate('/checkout')
    }
  }

  const { products, isLoading, isError } = useSelector((store) => {
    return {
      products: store.CartReducer.products,
      isLoading: store.CartReducer.isLoading,
      isError: store.CartReducer.isError,
    }
  }, shallowEqual)

  let dispatch = useDispatch()

  function HandleCartDelete(id) {
    dispatch(deleteCartdata(id)).then(() => {
      dispatch(getCartProducts())
    })
  }

  const itemLength = products.length

  function HandleQuantityIncreament(id, cartquantity) {
    console.log(id, cartquantity)
    fetch(`https://dark-erin-fox-cuff.cyclic.app/cart/increament/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: cartquantity,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: localStorage.getItem('user_token'),
      },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(cartUpdateQty({ id, qty: cartquantity }))
        // dispatch(getCartProducts())
      })
  }

  function HandleQuantityDecreament(id, cartquantity) {
    fetch(`https://dark-erin-fox-cuff.cyclic.app/cart/decreament/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: cartquantity,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: localStorage.getItem('user_token'),
      },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(cartUpdateQty({ id, qty: cartquantity }))
        //this is what i was saying just updating the quantity in the redux rather making the api call
        // dispatch(getCartProducts())
      })
  }
  //kept the total price and discount price at the top level
  useEffect(() => {
    //this is for initialily getting the products also if user refreshes the page
    dispatch(getCartProducts())
  }, [])

  useEffect(() => {
    console.log('hello running')
    discountedprice = products.reduce((acc, el) => {
      return acc + Number(el.discountedPrice * el.quantity)
    }, 0)

    totalprice = products.reduce((acc, el) => {
      return acc + Number(el.price * el.quantity)
    }, 0)
    console.log(totalprice)
    setTotalPrice(totalprice)
  }, [products])

  return (
    <>
      <div className={styles.cartMainDiv}>
        <div className={styles.cartMainDiv_subdiv1}>
          {products.map((el, i) => {
            return (
              <CartMap
                {...el}
                HandleCartDelete={HandleCartDelete}
                key={i}
                HandleQuantityDecreament={HandleQuantityDecreament}
                HandleQuantityIncreament={HandleQuantityIncreament}
              />
            )
          })}
        </div>

        <div className={styles.cartMainDiv_subdiv2}>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    <div className={styles.coupons}>
                      <MdDiscount size={20} />
                      <div>
                        <p className={styles.coupons_heading1}>
                          COUPONS & OFFERS
                        </p>
                        <p className={styles.coupons_heading2}>
                          {' '}
                          <span>SUMMERSALE</span> Coupon Applied
                        </p>
                      </div>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className={styles.applyCouponInput}>
                  <Input
                    variant='unstyled'
                    placeholder='Type coupon code here...'
                    size='md'
                  />
                  <Button colorScheme='green' variant='ghost'>
                    APPLY
                  </Button>
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    <div className={styles.coupons}>
                      <AiFillGift size={20} />
                      <div>
                        <p className={styles.coupons_heading1}>
                          REDEEM GIFT CARD
                        </p>
                      </div>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div>
                  <p className={styles.coupons_heading2}>
                    {' '}
                    E-GIFT CARD CREDENTIALS
                  </p>
                  <div className={styles.giftDiv}>
                    <Input
                      variant='unstyled'
                      placeholder='E-Gift Card Number'
                      size='md'
                    />
                    <Input variant='unstyled' placeholder='Pin' size='md' />
                  </div>
                  <Button colorScheme='green' borderRadius={0} width='100%'>
                    APPLY
                  </Button>
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
            <p>Rs. {discountedprice - totalprice}</p>
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
            <Button
              colorScheme='green'
              borderRadius={0}
              width='100%'
              onClick={onOpen}
            >
              CHECKOUT
            </Button>
          </div>

          <div className={styles.modelDiv}>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>ADD NEW ADDRESS</ModalHeader>
                <ModalCloseButton />
                <ModalBody pt={5}>
                  <FormControl isRequired>
                    <div style={{ Display: 'flex' }}>
                      <Input
                        onChange={HandleChange}
                        value={name}
                        name='name'
                        variant='flushed'
                        placeholder='Full Name'
                        pt={5}
                      />

                      <Input
                        onChange={HandleChange}
                        value={phone}
                        name='phone'
                        variant='flushed'
                        placeholder='Phone No'
                        pt={5}
                      />
                    </div>

                    <Input
                      onChange={HandleChange}
                      value={email}
                      name='email'
                      variant='flushed'
                      placeholder='Email Address'
                      pt={5}
                    />
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Input
                          onChange={HandleChange}
                          value={pincode}
                          name='pincode'
                          variant='flushed'
                          placeholder='Pincode'
                          pt={5}
                        />
                      </div>
                      <div>
                        <Input
                          onChange={HandleChange}
                          value={city}
                          name='city'
                          variant='flushed'
                          placeholder='city'
                          pt={5}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                      <div>
                        <Input
                          onChange={HandleChange}
                          value={state}
                          name='state'
                          variant='flushed'
                          placeholder='State'
                          pt={5}
                        />
                      </div>
                      <div>
                        <Input
                          onChange={HandleChange}
                          value={country}
                          name='country'
                          variant='flushed'
                          placeholder='Country'
                          pt={5}
                        />
                      </div>
                    </div>

                    <Input
                      onChange={HandleChange}
                      value={building}
                      name='building'
                      variant='flushed'
                      placeholder='Flat No/Building,Street Name'
                      pt={5}
                    />
                    <Input
                      onChange={HandleChange}
                      value={area}
                      name='area'
                      variant='flushed'
                      placeholder='Area / Locality'
                      pt={5}
                    />
                    <Input
                      onChange={HandleChange}
                      value={landmark}
                      name='landmark'
                      variant='flushed'
                      placeholder='Landmark'
                      pt={5}
                    />
                    <Input
                      onChange={HandleChange}
                      value={GSTIN}
                      name='GSTIN'
                      variant='flushed'
                      placeholder='GSTIN'
                      pt={5}
                    />

                    <p>PS. Your information is safe with us, No spam.</p>
                    <Button
                      colorScheme='green'
                      borderRadius={0}
                      width='100%'
                      onClick={HandleSubmit}
                    >
                      ADD Address
                    </Button>
                  </FormControl>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <div className={styles.recentlyViewedDiv}>
        <p className={styles.recentlyHeading}>RECENTLY VIEWED</p>

        <div className={styles.recentlyViewed_subdiv1}>
          <div>
            <img
              width='100%'
              height='100%'
              src='https://images.dailyobjects.com/marche/product-images/1201/all-red-pedal-daypack-images/All-Red-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-202,h-249,dpr-1'
              alt=''
            />
            <p className={styles.productName}>All Red Pedal Daypack</p>
            <p className={styles.productPrice}>
              Rs.1699 <span>2499</span>
            </p>
            <p className={styles.FreeInfo}>*FREE DUFFLE BAG</p>
          </div>

          <div>
            <img
              width='100%'
              height='100%'
              src='https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-stride-2-0-clear-case-cover-for-iphone-13-images/DailyObjects-Stride-2-0-Clear-Case-Cover-For-iPhone-13-2.png?tr=cm-pad_resize,v-2,w-202,h-249,dpr-1'
              alt=''
            />
            <p className={styles.productName}>
              Stride 2.0 Clear Case Cover For iPhone 13
            </p>
            <p className={styles.productPrice}>
              Rs.699 <span>1199</span>
            </p>
            <p className={styles.FreeInfo}>*FREE DUFFLE BAG</p>
          </div>


          <div>
            <img
              width='100%'
              height='100%'
              src='https://images.dailyobjects.com/marche/product-images/1202/all-navy-commute-messenger-large-images/All-Navy-Commute-Messenger-Large-2n.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1'
              alt=''
            />
            <p className={styles.productName}>
              Space Blue SnapOn Envelope Sleeve For Macbook Pro 40.64cm (16
              inch)
            </p>
            <p className={styles.productPrice}>
              Rs.699 <span>1699</span>
            </p>
            <p className={styles.FreeInfo}>*FREE DUFFLE BAG</p>
          </div>

          <div>
            <img
              width='100%'
              height='100%'
              src='https://images.dailyobjects.com/marche/product-images/1201/all-blue-pedal-daypack-images/All-Blue-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-312,h-385,dpr-1'
              alt=''
            />
            <p className={styles.productName}>All Blue Pedal Daypack</p>
            <p className={styles.productPrice}>
              Rs.1699 <span>2499</span>
            </p>
            <p className={styles.FreeInfo}>*FREE DUFFLE BAG</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default CartComponent
