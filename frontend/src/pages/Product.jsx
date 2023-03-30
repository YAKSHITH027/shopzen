import { useRef } from "react";
import clsx from "clsx";
import useLazyLoad from "../components/products/LazyLoading";
import { Box, GridItem, Grid, Button } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react";
import ProductCart from "../components/products/ProductCart";
import { LoadingPosts } from "../components/products/LoadingPost";



function Product(){
    const [product,setProduct]=useState([])
    const [filterdData, setFilterdData]=useState([])
    const [productData,setProductData]=useState([])
    const [data1,setData]=useState([])
    const handleFilter=()=>{
        return product.filter((el)=>el.title.includes("WatchBand"))
    }

    const handleBag=()=>{
        setFilterdData(handleFilter())
        filterdData.length>0? setProductData(filterdData):setProductData(product)
    }
    console.log(filterdData)
    console.log(productData)

    
    
    const NUM_PER_PAGE = 12;
    const TOTAL_PAGES =filterdData.length>0? Math.floor(filterdData.length/12):Math.floor(product.length/12);
    useEffect(()=>{
        axios.get("http://localhost:8000/product")
        .then((res)=>setProduct(res.data))
        
    },[])
    
    

    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
        setTimeout(() => {
             filterdData.length>0? setData(filterdData.slice(
                ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
                NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
                )):setData(product.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            ))
            console.log(data1);
            resolve(data1);
        }, 2000);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    return(
        <Box m="auto" w="95%">
            <Box>
                <Button onClick={handleBag}>Bags</Button>
            </Box>
            <Grid gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(4,1fr)","repeat(4,1fr)"]} gap={["5px","7px","10px","10px","15px","15px",]}>
            {
                data.map((el)=>(
                    <GridItem>
                    <ProductCart image={el.image} title={el.title} price={el.price} ogprice={el.ogprice} new={el.new? el.new:"" }/>
                    </GridItem>
                ))
            }
            </Grid>


            <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingPosts />
        </div>
        </Box>
    )
}
export default Product;