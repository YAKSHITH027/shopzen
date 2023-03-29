import { Box, Button, Divider, Heading, Image, Input, InputGroup, InputRightElement, List, ListItem} from '@chakra-ui/react'
import React from 'react'
import { FooterWrapper } from '../../css/footer'
import { bags, cases, helpdesk, homeoffice, knowus, network, others, paymentlogo, straps, wallets } from './footerData'

const Footer = () => {
  return (
        <FooterWrapper>
        <Heading fontSize={"2xl"}> GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS</Heading>
        <Box style={{width:"400px"}}>
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        placeholder='Enter your email'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' >
          Subscribe
        </Button>
      </InputRightElement>
    </InputGroup>
        </Box>
        <Box>
            <Heading fontSize={"2xl"}>FEATURED IN</Heading>
            <Image src='https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1' alt='partner'/>
        </Box>
        <Divider/>
        <Box>
            <Heading fontSize={"2xl"}>HONEST REVIEWS. NOTHING ELSE.</Heading>
            <Image src = "https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1" alt = "ratings"/>
        </Box>
        <Divider/>
        <Box className='delivery-wrapper'>
            <Box className='delivery-flex-box'>
                <Box><Image src ="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" alt="icon1"/></Box>
                <Box>Quick Delivery</Box>
            </Box>
            <Box className='delivery-flex-box'>
                <Box><Image src ="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" alt="icon2"/></Box>
                <Box>Easy Returns</Box>
            </Box>
            <Box className='delivery-flex-box'>
                <Box><Image src ="https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" alt="icon3"/></Box>
                <Box>Quality Assured</Box>
            </Box>
        </Box>
        <Divider/>
        <Box className='knowsus-wrapper'>
            <Box className='knowus-main-left'>
                <Box>
                    <Heading m={"16px 0px 24px"} fontSize={"md"} >KNOW US</Heading>
                    <Box>
                    <List className='knowus-li-css' >
                    {knowus?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
                <Box>
                <Heading m={"16px 0px 24px"} fontSize={"md"} >HELPDESK</Heading>
                <Box>
                    <List className='knowus-li-css'>
                    {helpdesk?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
                <Box>
                <Heading m={"16px 0px 24px"} fontSize={"md"} >NETWORK</Heading>
                <Box>
                    <List className='knowus-li-css'>
                    {network?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
            </Box>
            <Divider h={"auto"} orientation='vertical'/>
            <Box className='knowus-main-right'>
                <Box>
                <Heading fontSize={"2xl"}>FOLLOW US ON</Heading>
                <Box>
                    icons here
                </Box>
                </Box>
                <Box>
                <Heading fontSize={"2xl"}>
                DOWNLOAD OUR APP
                </Heading>
                <Box>
                    store icon here
                </Box>
                </Box>
            </Box>
        </Box>
        <Divider/>
        <Box>
            <Heading>100% SECURE PAYMENT</Heading>
            <Box>
                {paymentlogo?.map((item,i)=>{
                    return <Box key ={i+2}>
                        <Image src={item.url} alt={item.name}/>
                    </Box>
                })}
            </Box>
        </Box>
        <Box>
               <Box>
               <Heading>MOST SEARCHED ON DAILYOBJECTS</Heading>
               </Box>
               <Box>
                <Heading>CASES & COVERS</Heading>
                <Box>
                <List>
                    {cases?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading>HOME OFFICE</Heading>
                <Box>
                <List>
                    {homeoffice?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading>STRAPS & WATCHBANDS</Heading>
                <Box>
                <List>
                    {straps?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading>BAGS & SLEEVES</Heading>
                <Box>
                <List>
                    {bags?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading>WALLETS</Heading>
                <Box>
                <List>
                    {wallets?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading>OTHERS</Heading>
                <Box>
                <List>
                    {others?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>

        </Box>
        </FooterWrapper>
  )
}

export default Footer