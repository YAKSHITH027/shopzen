import { Box, Button, Image, Input, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import { LoadingPosts } from "../../components/products/LoadingPost"
import {AiOutlineTag} from "react-icons/ai"
function SingleProduct() {
    const [product, setProduct] = useState({})
    const [Loader, setLoader] = useState(false)
    
    console.log(Loader)
    const { id } = useParams()
    const fetchData = () => {
        setLoader(true)
        axios.get(`http://localhost:7000/product/${id}`)
        .then((res) => setProduct(res.data))
        .then(() => setLoader(false))
        .catch((err) => console.log(err))

    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        {
            Loader?
            <LoadingPosts/>

            :

            <Box display={["","","flex","flex","flex","flex"]} fontFamily="sans-serif">
            <Box>
                <Image src={product.image} alt={product.title} />
            </Box>
            <Box>
                <Box>
                    <Text fontSize={["13px","14px","15px","16px","19px","19px"]}>{product.title}</Text>

                    <Box display="flex" gap="10px">
                        <Text fontSize={["16px","17px","19px","18px","21px","21px"]} fontWeight="bold">{product.price}</Text>
                        <Text fontSize={["16px","17px","19px","18px","21px","21px"]} fontWeight="bold" textDecoration="line-through" color="gray">{product.ogprice}</Text>
                        <Text>Inclusive of all taxes</Text>
                    </Box>

                    <Box>
                        <Button>ADD TO CART</Button>
                    </Box>

                    <Box>
                        <Text>EXCITING OFFERS</Text>
                        <Text display="flex"><AiOutlineTag/>BUY ANY 2 GET 10% OFF / BUY ANY 3 GET 20% OFF SITEWIDE</Text>
                        <Text display="flex"><AiOutlineTag/>FREE DUFFLE BAG ON ALL ORDERS ABOVE Rs. 2499</Text>
                    </Box>

                    <Box>
                        <Input placeholder="Enter Pincode To Check Delivery"/>

                    </Box>

                    <Box display="flex"> 
                        <Text>Product Details</Text>
                        <HiOutlineArrowNarrowRight/>
                    </Box >
                    <Box display="flex">
                        <Text>Specifications</Text>
                        <HiOutlineArrowNarrowRight/>
                    </Box>
                    <Box display="flex">
                        <Text>Delivery Time & Returns</Text>
                        <HiOutlineArrowNarrowRight/>
                    </Box>
                </Box>
            </Box>
        </Box>
        }
        </>
        
    )
}
export default SingleProduct