import { Box, Button, Image, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import { LoadingPosts } from "../../components/products/LoadingPost"
import {AiOutlineTag} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { addCartData } from "../../redux/CartReducer/Action"
import {BsCameraVideo} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {FiShare2} from "react-icons/fi"
import { useToast } from '@chakra-ui/react'
import LoadingSinglePage from "../../components/products/LoadingSinglePage"
import Acco from "../../components/products/Accordion"
import Navbar from "../../components/home/Navbar"
import Footer from "../../components/footer/Footer"
function SingleProduct() {
    const [product, setProduct] = useState({})
    const [Loader, setLoader] = useState(false)
    const is_Auth = useSelector((store) => {
        return store.CartReducer.isAuth;
    });
    const toast = useToast()
    console.log(is_Auth)
    const dispatch=useDispatch()
    console.log(Loader)
    const { id } = useParams()
    const fetchData = () => {
        setLoader(true)
        axios.get(`https://dark-erin-fox-cuff.cyclic.app/product/${id}`)
        .then((res) => setProduct(res.data))
        .then(() => setLoader(false))
        .catch((err) => console.log(err))

    }
    useEffect(() => {
        fetchData()
    }, [])

    const successadd = () => {
        toast({
            title: `Successful.`,
            description: `Product added to the cart`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top"
        })
    }

    const faildadd = () => {
        toast({
            title: `PleaseLogin First.`,
            description: ``,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: "top"
        })
    }

    const postData=()=>{

        let CartProduct={product_name:product.title,quantity:1,discountedPrice:product.ogprice,price:product.price,image:product.image}
        dispatch(addCartData(CartProduct)).then(() => successadd()).catch(()=>faildadd())
    }

    return (
        <Box>
            <Navbar/>
        <Box m="auto" w="90%">
        {
            Loader?
            <LoadingPosts/>

            :

            <Box display={["","","flex","flex","flex","flex"]} fontFamily="sans-serif">
            <Box w={["100%","100%","50%"]} backgroundColor="#F7F7F7">

                <Box display="flex" w="20%" h="40px" gap="7px" ml="70%" mt="5px"><BsCameraVideo size="30px"/> <FiShare2 size="30px"/><AiOutlineHeart size="30px"/></Box>

                <Image src={product.image} alt={product.title} m="auto" backgroundColor="#F7F7F7"/>
            </Box>
            <Box w={["100%","100%","50%"]} mt={["20px","20px","",""]}>
                <Box w="85%" m="auto">
                <Box>
                    <Text fontSize={["16px","17px","19px","18px","21px","21px"]}>{product.title}</Text>

                    <Box display="flex" gap="10px" mt="15px">
                        <Text fontSize={["16px","17px","19px","18px","21px","21px"]} fontWeight="bold">Rs.{product.price}</Text>
                        <Text fontSize={["16px","17px","19px","18px","21px","21px"]} fontWeight="bold" textDecoration="line-through" color="gray">{product.ogprice}</Text>
                        <Text>Inclusive of all taxes</Text>
                    </Box>

                    <Box mt="20px">
                        <Button onClick={postData} w="100%" backgroundColor="#20A87E" borderRadius="0" color="white" _hover={{backgroundColor:"#209772"}}> ADD TO CART</Button>
                    </Box>

                    <Box fontSize={["15px","15px","16px","16px","18px"]} mt="20px">
                        <Text color="#E66B55" fontFamily="monospace" fontWeight="bold" >EXCITING OFFERS</Text>
                        <Text display="flex" gap="4px" ><AiOutlineTag/>BUY ANY 2 GET 10% OFF / BUY ANY 3 GET 20% OFF SITEWIDE</Text>
                        <Text display="flex" gap="4px"><AiOutlineTag/>FREE DUFFLE BAG ON ALL ORDERS ABOVE Rs. 2499</Text>
                    </Box>

                    <Box mt="20px">
                        <InputGroup>
                        <Input placeholder="Enter Pincode To Check Delivery"/>
                        <InputRightAddon  children="ADD"/>
                        </InputGroup>
                    </Box>

                                    <Box mt="20px">
                                        <Acco/>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
            }
        </Box>
        <Footer/>
        </Box>
    )
}
export default SingleProduct
