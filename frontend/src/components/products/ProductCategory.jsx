import { Image } from "@chakra-ui/image"
import { Box, Text } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

let num = 0;
function ProductCategory() {
    const [isnavlessthan500] = useMediaQuery('(max-width: 550px)')
    const [isnavlessthan750] = useMediaQuery('(max-width: 850px)')
    const [searchParams, setSearchParams]=useSearchParams();

    const initialState=searchParams.getAll("category");
    const [category,setCategory]=useState(initialState || []);

    const handleCategory=(cat)=>{
        setCategory(cat)
    }

    useEffect(()=>{
        if(category!=null){
            let params={
                sort:category
            }
            setSearchParams(params)
        }else{
            setSearchParams("")
        }
        
    },[category])
    return (
        <Swiper
            {
            ...isnavlessthan500 ? num = 3 : isnavlessthan750 ? num = 5 : num = 8
            }
            slidesPerView={num}
            spaceBetween={20}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"

        >

            <SwiperSlide>
                <Box m="auto" w="100px" onClick={() =>handleCategory(null)}>
                    <Image src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto" />
                    <Text color="gray" fontSize="13px" textAlign="center">All</Text>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box m="auto" w="100px" onClick={() =>handleCategory("Daypack")}>
                    <Image src="https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto" />
                    <Text color="gray" fontSize="13px" textAlign="center">Pedal Backpack</Text>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box m="auto" w="100px"  onClick={() =>handleCategory("Desks")} >
                    <Image src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-72,h-71,dpr-1" borderRadius="50%" m="auto" />
                    <Text color="gray" fontSize="13px" textAlign="center">Desks</Text>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box m="auto" w="100px" onClick={() =>handleCategory("Charging Solutions")} >
                    <Image src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto" />
                    <Text color="gray" fontSize="13px" textAlign="center">Charging Solutions</Text>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box m="auto" w="100px"  onClick={() =>handleCategory("sleeves")}>
                    <Image src="https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto" />
                    <Text color="gray" fontSize="13px" textAlign="center">Macbook Sleeves</Text>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box m="auto" w="100px"  onClick={() =>handleCategory("Messenger Bag")} >
                    <Image src="https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto" />
                    <Text color="gray" fontSize="13px" textAlign="center">Messanger Bags</Text>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box m="auto" w="100px"  >
                    <Image src="https://images.dailyobjects.com/marche/icons/filter/eyewear-cases.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto" />
                    <Text color="gray" fontSize="13px" textAlign="center">Eyewear Cases</Text>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box m="auto" w="100px" onClick={() =>handleCategory("Watchbands")} >
                    <Image src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" borderRadius="50%" m="auto" />
                    <Text color="gray" fontSize="13px" textAlign="center">Watchbands</Text>
                </Box>
            </SwiperSlide>
        </Swiper>
    )
}
export default ProductCategory