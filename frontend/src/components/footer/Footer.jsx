import { Box, Button, Divider, Heading, Image, Input, InputGroup, InputRightElement, List, ListItem} from '@chakra-ui/react'
import React from 'react'
import { FooterWrapper } from '../../css/footer'
import {giftByBudget,giftByPersona, bags, cases, downloadApp, helpdesk, homeoffice, knowus, network, others, paymentlogo, socialMediaLogo, straps, wallets,giftsByOccasion,giftByRelationship } from './footerData'
import AccordionComponent from './AccordionComponent'

const Footer = () => {
  return (
        <FooterWrapper>
        {/* <Heading fontWeight={"500"} textAlign={"center"} fontSize={"24px"}> GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS</Heading> */}
        {/* <Box style={{width:"400px"}}>
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
        </Box> */}
        {/* <Box>
            <Heading fontWeight={"500"} textAlign={"center"} fontSize={"24px"}>FEATURED IN</Heading>
            <Image className='footer-img1-handler' src='https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1' alt='partner'/>
            <Image className='footer-img2-handler' src='https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1' alt='partner'/>
        </Box>
        <Divider/>
        <Box>
            <Heading fontWeight={"500"} textAlign={"center"} fontSize={"24px"}>HONEST REVIEWS. NOTHING ELSE.</Heading>
            <Image className='footer-img1-handler' src = "https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1" alt = "ratings"/>
            <Image className='footer-img2-handler' src = "https://images.dailyobjects.com/marche/assets/images/other/reviews-mobile-updateds-15.png?tr=cm-pad_resize,v-2,w-359,h-200,dpr-2,q-60 " alt = "ratings"/>
        </Box> */}
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
        <Box className='most-search-wraper'>
               <Box>
               <Heading m="16px 0px 24px" fontSize={"16px"}>MOST SEARCHED ON DAILYOBJECTS</Heading>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>CASES & COVERS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {cases?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>HOME OFFICE</Heading>
                <Box>
                <List className='footer-li-css'>
                    {homeoffice?.map((item, i) =>{
                        return <ListItem  key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>STRAPS & WATCHBANDS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {straps?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>BAGS & SLEEVES</Heading>
                <Box>
                <List className='footer-li-css'>
                    {bags?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>WALLETS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {wallets?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>OTHERS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {others?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
            <Divider/>
            <Box>
            <Box>
            <Heading m="16px 0px 24px" fontSize={"16px"}>GIFTS</Heading>
            </Box>
            <Box>
                <Heading className='footer-serched-object-heading'>GIFTS BY OCCASIONS</Heading>
                <Box>

                <List className='footer-li-css'>

                    {giftsByOccasion?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
            </Box>
            <Box>
                <Heading className='footer-serched-object-heading'>GIFTS BY RELATIONSHIPS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByRelationship?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>GIFTS BY PERSONA</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByPersona?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>GIFTS BY BUDGET</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByBudget?.map((item, i) =>{
                        return <ListItem key ={i+1}>{item}</ListItem>
                    })}
                    </List>
                </Box>
               </Box>
            </Box>
        </Box>
        <Box>
            <AccordionComponent/>
        </Box>
        <Box className='footer-last-conainer'>
        © 2012 - 2023 Firki Wholesale Pvt. Ltd.
        </Box>
        </FooterWrapper>
  )
}

export default Footer