import { Box, Button, Divider, Image, List, ListItem, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'

const NewArrivalPopover = () => {
  return (
    <Box><Popover trigger='hover' isLazy placement='bottom' size="full">
    <PopoverTrigger>
      <Box>NEW ARRIVALS</Box>
    </PopoverTrigger>
    <PopoverContent mt={"16px"} borderRadius="none" width={"99vw"}>
      <PopoverBody>
      <Box className='arrival-container'>
        <Box>
            <Box className='nav-heading'>NEW ARRIVALS</Box>
            <Box>
            <List className='newArrival-li-css'>
                    {arraivalData?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List>
            </Box>
        </Box>
        <Divider h={"auto"} border="1px solid gray" orientation='vertical'/>
        <Box className='nav-arrival-img'>
            {arraivalImg?.map((data,i)=>{
                return <Box key ={i+1}>
                    <Image src ={data.url} alt={data.name} />
                </Box>
            })}
        </Box>
        </Box>
      </PopoverBody>
    </PopoverContent>
  </Popover></Box>
  )
}

export default NewArrivalPopover;
const arraivalImg = [
    {
        name:"img1",
        url:"https://images.dailyobjects.com/marche/assets/images/other/recess-collection-dropdown-image-for-new-arrival.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"
    },
    {
        name:"img2",
        url:"https://images.dailyobjects.com/marche/assets/images/other/planner-dropdown-image-for-new-arrival-2-new.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"
    },
    {
        name:"img3",
        url:"https://images.dailyobjects.com/marche/assets/images/other/new-watch-chargers-dropdown-image-for-new-arrival-update.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"
    }
];
const arraivalData = [
"Desks",
"Charging Solutions",
"Collections",
"Macbook Sleeves",
"Messenger Bags",
"Eyewear Cases",
"Watchbands"
]