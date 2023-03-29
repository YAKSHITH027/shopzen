import styles from "./CartMap.module.css"
import { Button } from '@chakra-ui/react'
import { RiDeleteBin6Line } from "react-icons/ri"

const CartMap = () => {
    return (
        <>

            <div className={styles.cartMap_Maindiv}>
                <div>
                    <img src="https://images.dailyobjects.com/marche/product-images/1702/arete-laptop-stand-ivory-images/Arete-Laptop-Stand-Ivory-v.png?tr=cm-pad_resize,v-2,w-134,h-164,dpr-1" alt="" />
                </div>


                <div className={styles.cartProduct_subdiv1}>
                    <p className={styles.cartProduct_Name}>Arete Laptop Stand - (Ivory)</p>
                    <p className={styles.cartProduct_Price}>Rs.9996  <span> 11996</span> </p>
                    <div className={styles.cartProduct_subdiv2}>
                        <div>
                            <Button colorScheme='black' variant='outline' >
                                -
                            </Button>
                            <Button colorScheme='black' variant='outline' >
                                3
                            </Button>
                            <Button colorScheme='black' variant='outline' >
                                +
                            </Button>
                        </div>

                        <div>
                            <RiDeleteBin6Line size={25} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartMap