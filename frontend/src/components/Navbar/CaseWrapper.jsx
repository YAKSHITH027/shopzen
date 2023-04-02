import { Box, Divider, Image, List, ListItem, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'

const CaseWrapper = () => {
  return (
    <Box><Popover trigger='hover' isLazy placement='bottom' size="full">
    <PopoverTrigger>
      <Box>CASES & SLEEVES</Box>
    </PopoverTrigger>
    <PopoverContent mt={"16px"} borderRadius="none" width={"99vw"}>
      <PopoverBody>
      <Box className='arrival-container'>
        <Box>
            <Box className='nav-heading'>CASES</Box>
            <Box className='case-navlist-style'>
            <Box>
            <Box color={"black"} textDecoration={"underline"}>APPLE</Box>
            <List className='newArrival-li-css'>
                    {apple?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List>
                <Box textDecoration={"underline"} >View All Models +</Box>
            </Box>
            <Box>
            <Box color={"black"} textDecoration={"underline"}>SAMSUNG</Box>
            <List className='newArrival-li-css'>
                    {samsung?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List>
                <Box textDecoration={"underline"} >View All Models +</Box>
            </Box>
            <Box>
            <Box color={"black"} textDecoration={"underline"}>ONEPLUS</Box>
            <List className='newArrival-li-css'>
                    {oneplus?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List>
                <Box textDecoration={"underline"} >View All Models +</Box>
            </Box>
            <Box>
            <Box color={"black"} textDecoration={"underline"}>OTHER BRANDS</Box>
            <List className='newArrival-li-css'>
                    {otherbrand?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List>
            </Box>
            <Box>
            <Box color={"black"} textDecoration={"underline"}>IPAD</Box>
            <List className='newArrival-li-css'>
                    {ipad?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List>
            </Box>
            </Box>
        </Box>
        <Divider h={"auto"} border="1px solid gray" orientation='vertical'/>
        <Box className='nav-case-right-side'>
            <Box>
            <List className='case-li-css'>
                    {laptop?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List>
            </Box>
            <Box >
                    <Image className="nav-case-img" src="https://images.dailyobjects.com/marche/assets/images/other/airpods-cases-sleeves-page-dropdown-image.jpg?tr=cm-pad_crop,v-2,w-1000,w-237,h-658,dpr-1" alt="img"/>
            </Box>
        </Box>
        </Box>
      </PopoverBody>
    </PopoverContent>
  </Popover></Box>
  )
}

export default CaseWrapper;

const apple = [
"iPhone 13",
"iPhone 14",
"iPhone 14 Pro Max",
"iPhone 14 Pro",
"iPhone 14 Plus",
"iPhone 12",
"iPhone 13 Pro",
"iPhone 11",
"iPhone 13 Pro Max",
"iPhone XR",
"iPhone 12 Pro Max",
"iPhone 12 Pro",
"iPhone 12 Mini",
"iPhone 11 Pro",
"iPhone 11 Pro Max",
"iPhone X",
"iPhone SE 2020",
"iPhone XS"
];

const samsung = [
"Galaxy S23 Ultra",
"Galaxy S23 Plus",
"Galaxy S23New",
"Galaxy Z Fold 4",
"Galaxy Z Flip 4",
"Galaxy S22 Ultra",
"Galaxy Z Fold 3",
"Galaxy S20 FE",
"Galaxy S21 Ultra",
"Galaxy S21",
"Galaxy S21 FE",
"Galaxy S21 Plus",
"Galaxy S20 Plus",
"Galaxy Z Flip 3",
"Galaxy S22",
"Galaxy A52",
"Galaxy Note 10 Plus",
"Galaxy Note 20 Ultra"
];
const oneplus =[
"OnePlus Nord CE 2",
"OnePlus 10R",
"OnePlus Nord",
"OnePlus 9R",
"OnePlus 9",
"OnePlus 8T",
"OnePlus 9RT",
"OnePlus 10 Pro",
"OnePlus 7",
"OnePlus 9 Pro",
"OnePlus 7T",
"OnePlus Nord CE",
"OnePlus 8",
"OnePlus Nord 2",
"OnePlus 7 Pro"

];

const otherbrand=[
    "NothingNew",
    "Xiaomi",
    "Oppo",
    "Google",
    "Motorola",
    "Vivo"
];

const ipad =[
    "iPad Pro 11 2021",
    "iPad Air 4 10.9",
    "iPad 9 10.2",
    "iPad 7 10.2",
    "iPad 8 10.2",
    "iPad Mini 6"
];

const laptop = [
    "LAPTOP/MACBOOK SLEEVES",
"AIRPOD CASES",
"MESSENGER BAGS",
"PASSPORT COVERS",
"EYEWEAR CASES",
"AIRTAG CASESN"
]



