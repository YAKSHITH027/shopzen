

import styles from "./Cart.module.css"
import CartComponent from "../../components/CartComponent/CartComponent";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import Navbar from "../../components/home/Navbar";
import { Navbar as Test } from "../../components/Navbar/Navbar";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCartProducts} from "../../redux/CartReducer/Action"
import { useEffect } from "react";
import SkeletonCart from "../../components/products/SkeletonCart"
import { Box } from "@chakra-ui/react";


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


//localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI4NDc0YjU4NTg2ZDlkYTgzNmUyNDkiLCJpYXQiOjE2ODAzNjEzNjN9.xU401t290Tjhwhk6owjRZlo7cqeQWj1tg2NE9CJOsZk")


  return (
    <>
      {/* <Navbar /> */}
      <Box mb="90px">
      <Test/>
      </Box>
      <img src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1" alt="" />
      <div>
        <p className={styles.shoppingbag_heading}> SHOPPING BAG</p>
      </div>

      {
      isLoading?<p style={{color:white}}>Loading</p>: products.length==0?<EmptyCart/>: <CartComponent/>
      }

    </>
  )
}

export default Cart

