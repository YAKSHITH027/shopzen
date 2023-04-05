import styles from './CartMap.module.css'
import { Button } from '@chakra-ui/react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { HiPlusSm } from 'react-icons/hi'
import { GrFormSubtract } from 'react-icons/gr'
import { useEffect, useState } from 'react'

const CartMap = ({
  image,
  price,
  product_name,
  quantity,
  discountedPrice,
  _id,
  HandleCartDelete,
  HandleQuantityDecreament,
  HandleQuantityIncreament,
}) => {
  const [cartquantity, setCartquantity] = useState(quantity)

  function HandleIncreament(id) {
    if (cartquantity === 5) {
      setCartquantity(cartquantity)
    } else {
      setCartquantity(cartquantity + 1)
      HandleQuantityIncreament(id, cartquantity)
    }
  }

  function HandleDecreament(id) {
    if (cartquantity === 1) {
      setCartquantity(cartquantity)
    } else {
      setCartquantity(cartquantity - 1)
      HandleQuantityDecreament(id, cartquantity)
    }
  }

  useEffect(() => {
    console.log('totalprice')
  }, [cartquantity])

  return (
    <>
      <div className={styles.cartMap_Maindiv} key={_id}>
        <div>
          <img src={image} alt='image' />
        </div>

        <div className={styles.cartProduct_subdiv1}>
          <p className={styles.cartProduct_Name}>{product_name}</p>
          <p className={styles.cartProduct_Price}>
            Rs. {price * cartquantity}{' '}
            <span>
              {' '}
              <del>{discountedPrice * cartquantity}</del>
            </span>{' '}
          </p>
          <div className={styles.cartProduct_subdiv2}>
            <div className={styles.quantity_div}>
              <GrFormSubtract size={20} onClick={() => HandleDecreament(_id)} />
              <p>{cartquantity}</p>
              <HiPlusSm size={20} onClick={() => HandleIncreament(_id)} />
            </div>

            <div className={styles.DeleteIcon}>
              <RiDeleteBin6Line
                size={20}
                onClick={() => HandleCartDelete(_id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartMap
