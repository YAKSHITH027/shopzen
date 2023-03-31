
import styles from "./EmptyCart.module.css"

function EmptyCart(){
    return (
        <>
        <div className={styles.empty_cart_maindiv}>
          <p>YOUR SHOPPING CART IS EMPTY</p>
          <p>Fill it with products</p>
          <button>Browse Product</button>
        </div>
        </>
    )
}

export default EmptyCart