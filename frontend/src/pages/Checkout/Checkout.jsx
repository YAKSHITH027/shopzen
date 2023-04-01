
import Navbar from "../../components/home/Navbar"
import styles from "./Checkout.module.css"
import { getCartProducts } from "../../redux/CartReducer/Action"
import { useEffect } from "react";
import { Button } from '@chakra-ui/react'
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";


function Checkout (){

  const Razorpay = useRazorpay();
  const navigate = useNavigate()

  const handlePayment = useCallback( async () => {

    const options= {
      key:"rzp_test_Q6qLBPFz8pzc23",
      amount: totalprice*100,
      currency: "INR",
      name: "Shopzen Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      handler: (res) => {
        console.log(res);
       
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
    
  }, [Razorpay]);

 

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
  }, [])

  const itemLength = products.length

  let totalprice = products.reduce((acc, el) => {
    return acc + Number(el.price * el.quantity);
  }, 0);


  let discountedprice = products.reduce((acc, el) => {
    return acc + Number(el.discountedPrice * el.quantity);
  }, 0);

  const address = JSON.parse(localStorage.getItem("address"))
  console.log(address)






  return(
    <>
    <Navbar />
        <div>
          <p className={styles.checkout_heading}>CHECKOUT</p>
        </div>

        <div className={styles.checkout_main_div} >
          <div className={styles.checkout_subdiv1}>
            <p className={styles.orderSummary}>Address</p>

            <div style={{ marginTop: "50px" }}>
              <p>{address.name}</p>
              <p>{address.area} {address.building}</p>
              <p>{address.city} {address.counter}</p>
              <p>{address.city} {address.building}</p>
              <p>{address.pincode} </p>
            </div>

            <Link to="/cart">
            <p className={styles.gobackHeading} >Go Back</p>
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
              <Button colorScheme='green' borderRadius={0} width="100%" onClick={handlePayment} >PAY NOW</Button>
            </div>
          </div>

        </div>
    </>
  )
}


export default Checkout






























