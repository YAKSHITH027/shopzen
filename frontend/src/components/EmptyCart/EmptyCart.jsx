
import styles from "./EmptyCart.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {Link} from "react-router-dom"

function EmptyCart() {
  return (
    <>
      <div className={styles.empty_cart_maindiv}>
        <p>YOUR SHOPPING CART IS EMPTY</p>
        <p>Fill it with products</p>
        
        <div >
        <Link to="/product">
        <Button colorScheme='green' borderRadius={0} m="auto" size='lg'  >
          Browse Products
        </Button>
        </Link>
        </div>

       
      </div>
    </>
  )
}

export default EmptyCart