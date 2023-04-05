import Navbar from '../../components/home/Navbar'
import styles from './Checkout.module.css'
import { getCartProducts } from '../../redux/CartReducer/Action'
import { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useCallback } from 'react'
import useRazorpay from 'react-razorpay'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Checkout() {
  const { products, isLoading, isError } = useSelector((store) => {
    return {
      products: store.CartReducer.products,
      isLoading: store.CartReducer.isLoading,
      isError: store.CartReducer.isError,
    }
  }, shallowEqual)
  console.log(products)
  let dispatch = useDispatch()
  const Razorpay = useRazorpay()
  const navigate = useNavigate()
  const itemLength = products.length

  let totalprice = products.reduce((acc, el) => {
    return acc + Number(el.price * el.quantity)
  }, 0)

  let discountedprice = products.reduce((acc, el) => {
    return acc + Number(el.discountedPrice * el.quantity)
  }, 0)

  const address = JSON.parse(localStorage.getItem('address'))



  const handlePayment = useCallback(
    async (prod) => {
      const options = {
        key: 'rzp_test_C5ZSCFnANduzvO',
        amount: totalprice * 100,
        currency: 'INR',
        name: 'Shopzen Corp',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        handler: async (response) => {

          let postOrder = async () => {
            try {
              console.log('inside post', prod)
              let res = await fetch(
                'https://dark-erin-fox-cuff.cyclic.app/order/add',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('user_token'),
                  },
                  body: JSON.stringify({
                    products: prod,
                    userId: '123456',
                    createdAt: Date.now(),
                    totalAmount: totalprice,
                    address: {
                      fullname: address.name,
                      mobile: address.phone,
                      email: address.email,
                      address: address.area,
                      pincode: address.pincode,
                      city: address.city,
                      state: address.state,
                      country: address.country,
                    },
                  }),
                }
              )
              console.log(res.status)
            } catch (error) {
              console.log('error', error)
            }
          }

          const deleteAllCart = () => {
            try {
              axios.delete(`https://dark-erin-fox-cuff.cyclic.app/cart/delete`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': localStorage.getItem("user_token")
                }
              })

            } catch (err) {
              console.log(err)
            }
          }

          postOrder()
          deleteAllCart()
          navigate("/")
        },
        prefill: {
          name: address.name,
          email: address.email,
          contact: address.phone,
        },
        notes: {
          address: "ShopZen Corporation",
        },
        theme: {
          color: '#3399cc',
        },
      }

      const rzpay = new Razorpay(options)
      rzpay.open()
    },
    [Razorpay]
  )

  useEffect(() => {
    dispatch(getCartProducts())
  }, [])



  return (
    <>
      <Navbar />
      <img
        src='https://images.dailyobjects.com/marche/assets/images/other/20-off-new-homepage-desktop.gif?tr=cm-pad_resize,v-2,dpr-1'
        alt=''
      />
      <div>
        <p className={styles.checkout_heading}>CHECKOUT</p>
      </div>

      <div className={styles.checkout_main_div}>
        <div className={styles.checkout_subdiv1}>
          <p className={styles.orderSummary}>Address</p>

          <div style={{ marginTop: '50px' }}>
            <p>{address.name}</p>
            <p>
              {address.area} {address.building}
            </p>
            <p>
              {address.city} {address.counter}
            </p>

            <p>{address.pincode} </p>
            <p>{address.state}</p>
          </div>

          <Link to='/cart'>
            <p className={styles.gobackHeading}>Go Back</p>
          </Link>
        </div>
        <div className={styles.checkout_subdiv2}>
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
            <Button
              colorScheme='green'
              borderRadius={0}
              width='100%'
              onClick={() => {
                handlePayment(products)
              }}
            >
              PAY NOW
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
