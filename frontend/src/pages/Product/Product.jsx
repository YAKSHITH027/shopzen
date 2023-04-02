import { useRef } from 'react'
import clsx from 'clsx'
import useLazyLoad from '../../components/products/LazyLoading'
import { Box, GridItem, Grid, Button, Select, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCart from '../../components/products/ProductCart'
import { LoadingPosts } from '../../components/products/LoadingPost'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/ProductReducer/Action'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'react-router-dom'

function Product() {
    const [page, setPage] = useState(2)
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [type,setType]=useState("")
    const products = useSelector((store) => {
        return store.ProductReducer.product;
    });
    const [SearchParams]=useSearchParams()
    const dispatch = useDispatch()
    let obj={
        params:{
            limit:20,
        }
    }

    useEffect(() => {
        dispatch(getProduct(obj)).then((res) => setItems(res.data.products)).catch((err) => console.log(err))
    }, [type])

    const fetchComments = async () => {
        const res = await fetch(
            `https://dark-erin-fox-cuff.cyclic.app/product?page=${page}&limit=20`);
        const data = await res.json();
        return data.products;
    };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments()

    setItems([...items, ...commentsFormServer])
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false)
    }
    setPage(page + 1)
  }

    const handleType=(T)=>{
        setType(T)
    }
    console.log(type)
    return (
        <Box m="auto" w="95%">
            <Box display="flex">
                {/* <Button onClick={handleBag}>Bags</Button> */}
                {/* <Button onClick={()=>handleType("Stand")}>Stand</Button>
                <Button onClick={()=>handleType("Daypack")}>Daypack</Button>
                <Button onClick={()=>handleType("Watch")}>Watch</Button>
                <Button onClick={()=>handleType("All")}>Ivory</Button> */}
                    {/* <Select onChange={(e)=>handleType(e.target.value)}>
                        <option value="Macbook">Desks</option>
                        <option value="Watch">Watch</option>
                        <option value="Stand">All</option>
                    </Select> */}

                    <Box w="80%" m="auto"  display="flex" mt="20px" mb="20px" >
                        <Box m="auto" w="100px" >
                            <Image src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto"/>
                            <Text color="gray" fontSize="13px" textAlign="center">All</Text>
                        </Box>

                        <Box m="auto" w="100px" >
                            <Image src="https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto"/>
                            <Text color="gray" fontSize="13px" textAlign="center">Pedal Backpack</Text>
                        </Box>

                        <Box m="auto" w="100px" >
                            <Image src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-72,h-71,dpr-1" borderRadius="50%" m="auto"/>
                            <Text color="gray" fontSize="13px" textAlign="center">Desks</Text>
                        </Box>

                        <Box m="auto" w="100px" >
                            <Image src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto"/>
                            <Text color="gray" fontSize="13px" textAlign="center">Charging Solutions</Text>
                        </Box>

                        <Box m="auto" w="100px" >
                            <Image src="https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto"/>
                            <Text color="gray" fontSize="13px" textAlign="center">Macbook Sleeves</Text>
                        </Box>

                        <Box m="auto" w="100px" >
                            <Image src="https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto"/>
                            <Text color="gray" fontSize="13px" textAlign="center">Messanger Bags</Text>
                        </Box>

                        <Box m="auto" w="100px" >
                            <Image src="https://images.dailyobjects.com/marche/icons/filter/eyewear-cases.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto"/>
                            <Text color="gray" fontSize="13px" textAlign="center">Eyewear Cases</Text>
                        </Box>

                        <Box m="auto" w="100px" >
                            <Image src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto"/>
                            <Text color="gray" fontSize="13px" textAlign="center">Watchbands</Text>
                        </Box>
                    </Box>
            </Box>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<LoadingPosts/>}
                
            >

                <Grid gridTemplateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(4,1fr)", "repeat(4,1fr)"]} gap={["5px", "7px", "10px", "10px", "15px", "15px",]}>
                    {
                        items.map((el) => (
                            <GridItem>
                                <ProductCart key={el._id} id={el._id} image={el.image} title={el.title} price={el.price} ogprice={el.ogprice} new={el.new ? el.new : ""} />
                            </GridItem>
                        ))
                    }
                </Grid>
            </InfiniteScroll>
        </Box>
    )
}
export default Product
