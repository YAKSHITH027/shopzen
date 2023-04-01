import { useRef } from "react";
import clsx from "clsx";
import useLazyLoad from "../../components/products/LazyLoading";
import { Box, GridItem, Grid, Button, Select } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react";
import ProductCart from "../../components/products/ProductCart";
import { LoadingPosts } from "../../components/products/LoadingPost";
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../redux/ProductReducer/Action";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

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
        dispatch(getProduct(obj)).then((res) => setItems(res.data)).catch((err) => console.log(err))
    }, [type])

    const fetchComments = async () => {
        const res = await fetch(
            `https://dark-erin-fox-cuff.cyclic.app/product?page=${page}&limit=20`);
        const data = await res.json();
        return data;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
            sethasMore(false);
        }
        setPage(page + 1);
    };

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
                    <Select onChange={(e)=>handleType(e.target.value)}>
                        <option value="Macbook">Desks</option>
                        <option value="Watch">Watch</option>
                        <option value="Stand">All</option>
                    </Select>
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
export default Product;