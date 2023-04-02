import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import {knowus,helpdesk,network,blogs,giftByBudget,giftByPersona,giftByRelationship,giftsByOccasion,others,wallets,cases,homeoffice,straps,bags } from './footerData'

const AccordionComponent = () => {
  return (
    <Box>
    <Accordion allowToggle>
    <Box className='footermedia'>
    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        KNOW US
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>

    <Box>
                    <List className='knowus-li-css' >
                    {knowus?.map((item,i)=>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}</List></Box>
               </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        HELPDESK
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
    <Box>
                    <List className='knowus-li-css'>
                    {helpdesk?.map((item,i)=>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}</List></Box>
               </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        NETWORK
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
                <Box>
                    <List className='knowus-li-css'>
                    {network?.map((item,i)=>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}</List></Box>
               </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        MOST SEARCHED ON DAILYOBJECTS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
               <Box>
                <Heading className='footer-serched-object-heading'>CASES & COVERS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {cases?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
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
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>BAGS & SLEEVES</Heading>
                <Box>
                <List className='footer-li-css'>
                    {bags?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>WALLETS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {wallets?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>OTHERS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {others?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
        </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1'  >
        GIFTS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
            <Box>
                <Heading className='footer-serched-object-heading'>GIFTS BY OCCASIONS</Heading>
                <Box>

                <List className='footer-li-css'>

                    {giftsByOccasion?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
            </Box>
            <Box>
                <Heading className='footer-serched-object-heading'>GIFTS BY RELATIONSHIPS</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByRelationship?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>GIFTS BY PERSONA</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByPersona?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
               <Box>
                <Heading className='footer-serched-object-heading'>GIFTS BY BUDGET</Heading>
                <Box>
                <List className='footer-li-css'>
                    {giftByBudget?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
            </Box>
    </AccordionPanel>
  </AccordionItem>
</Box>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className='accordian-button' fontWeight={"semibold"} as="span" flex='1' >
        BLOGS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box className='accordian-wraper'>
                <Heading className='footer-serched-object-heading'>RECENTLY ADDED</Heading>
                <Box>
                <List className='footer-li-css'>
                    {blogs?.map((item, i) =>{
                        return <ListItem key ={i+1}><Box>{item}</Box></ListItem>
                    })}
                    </List>
                </Box>
               </Box>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>
  )
}

export default AccordionComponent