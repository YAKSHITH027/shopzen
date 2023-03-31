import { Box, Button, Divider, Heading, Image, Input, InputGroup, InputRightElement, List, ListItem} from '@chakra-ui/react'
import React from 'react'
import { FooterWrapper } from '../../css/footer'
import { bags, cases, downloadApp, helpdesk, homeoffice, knowus, network, others, paymentlogo, socialMediaLogo, straps, wallets } from './footerData'

const Footer = () => {
  return (
        <FooterWrapper>
        <Heading fontSize={"26px"}> GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS</Heading>
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
            <Heading fontSize={"26px"}>FEATURED IN</Heading>
            <Image src='https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1' alt='partner'/>
        </Box>
        <Divider/>
        <Box>
            <Heading fontSize={"26px"}>HONEST REVIEWS. NOTHING ELSE.</Heading>
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
                    <Heading m={"16px 0px 24px"} fontSize={"16px"} >KNOW US</Heading>
                    <Box>
                    <List className='knowus-li-css' >
                    {knowus?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
                <Box>
                <Heading m={"16px 0px 24px"} fontSize={"16px"} >HELPDESK</Heading>
                <Box>
                    <List className='knowus-li-css'>
                    {helpdesk?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
                <Box>
                <Heading m={"16px 0px 24px"} fontSize={"16px"} >NETWORK</Heading>
                <Box>
                    <List className='knowus-li-css'>
                    {network?.map((item,i)=>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}</List></Box>
                </Box>
            </Box>
            <Divider h={"auto"} orientation='vertical'/>
            <Box className='knowus-main-right'>
                <Box className='follous-main'>
                <Heading mb={"12px"} fontSize={"26px"}>FOLLOW US ON</Heading>
                <Box className='followus-css'>
                    {socialMediaLogo?.map((item,i)=>{
                        return <Box key={i+4}>
                            <Image w="100%" src={item.url} alt={item.name} />
                        </Box>
                    })}
                </Box>
                </Box>
                <Divider/>
                <Box className='download-main'>
                <Heading mb={"12px"} fontSize={"26px"}>
                DOWNLOAD OUR APP
                </Heading>
                <Box className='download-app'>
                {downloadApp?.map((item,i)=>{
                        return <Box key={i+4}>
                            <Image w="100%" src={item.url} alt={item.name} />
                        </Box>
                    })}
                </Box>
                </Box>
            </Box>
        </Box>
        <Divider/>
        <Box className="payment-main-css">
            <Heading fontSize={"16px"} mb={"15px"} textAlign={"center"}>100% SECURE PAYMENT</Heading>
            <Box className='payment-css'>
                {paymentlogo?.map((item,i)=>{
                    return <Box key ={i+2}>
                        <Image maxW={"86px"} src={item.url} alt={item.name}/>
                    </Box>
                })}
            </Box>
        </Box>
        <Box>
               <Box>
               <Heading fontSize={"16px"}>MOST SEARCHED ON DAILYOBJECTS</Heading>
               </Box>
               <Box>
                <Heading fontSize={"13px"}>CASES & COVERS</Heading>
                <Box>
                <List>
                    {cases?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading fontSize={"13px"}>HOME OFFICE</Heading>
                <Box>
                <List>
                    {homeoffice?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading fontSize={"13px"}>STRAPS & WATCHBANDS</Heading>
                <Box>
                <List>
                    {straps?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading fontSize={"13px"}>BAGS & SLEEVES</Heading>
                <Box>
                <List>
                    {bags?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading fontSize={"13px"}>WALLETS</Heading>
                <Box>
                <List>
                    {wallets?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading fontSize={"13px"}>OTHERS</Heading>
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