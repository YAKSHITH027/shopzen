import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AutoSlider from '../../components/home/AutoSlider'
import Navbar from '../../components/home/Navbar';
import {Navbar as Test} from "../../components/Navbar/Navbar"
import ProductSlider from '../../components/home/ProductSlider'
import { AutoImage } from '../../utils/HomeSliderData/AutoSliderImages'
import { newArrivalData } from '../../utils/HomeSliderData/newArrival'
import { shopCategory } from '../../utils/HomeSliderData/shopCategory'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Test/>
      <Box>
        <Image src='https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1' />
      </Box>
      <Box mb={{ base: '1rem', lg: '3.5rem' }}>
        <Image src='https://images.dailyobjects.com/marche/assets/images/homepage/desktop/pangea_collection_homepage_desktop.jpg?tr=cm-pad_crop,v-2,dpr-1' />
      </Box>
      <Box>
        <Image src='https://images.dailyobjects.com/marche/assets/images/other/watchband-homepage-sdesktop.jpg?tr=cm-pad_crop,v-2,dpr-1' />
      </Box>
      <Flex
        minH={'20vh'}
        py={{ base: '1.5rem', lg: '3.5rem' }}
        justify={'space-around'}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Flex
          flexDir={{ base: 'column', lg: 'column' }}
          gap='3'
          p={{ base: '0.7rem', lg: '2rem' }}
          width={{ base: '100%', lg: '25%' }}
          justify='center'
        >
          <Heading
            fontSize={'1.5rem'}
            fontWeight='bold'
            textTransform={'uppercase'}
          >
            New Arrival
          </Heading>
          <Text>Check out our newest launches.</Text>
          <Button
            display={{ base: 'none', lg: 'block' }}
            bg={'black'}
            color='white'
          >
            Shop new arrival
          </Button>
        </Flex>
        <Box width={{ base: '100%', lg: '65%' }}>
          <ProductSlider newArrival={newArrivalData} />
        </Box>
      </Flex>
      <Box mb={{ base: '1rem', lg: '2rem' }}>
        <Image src='https://images.dailyobjects.com/marche/assets/images/homepage/desktop/Desktop-banner_backpacks-updated.jpg?tr=cm-pad_crop,v-2,dpr-1' />
      </Box>
      <Box>
        <Image src='https://images.dailyobjects.com/marche/assets/images/other/deals-of-the-day-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1' />
      </Box>

      <Box>
        <Image src='https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1' />
      </Box>
      <Flex
        minH={'20vh'}
        py={{ base: '1.5rem', lg: '3.5rem' }}
        justify={'space-around'}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Flex
          flexDir={{ base: 'column', lg: 'column' }}
          gap='3'
          p={{ base: '1rem', lg: '2rem' }}
          width={{ base: '100%', lg: '25%' }}
          justify='center'
        >
          <Heading
            fontSize={'1.5rem'}
            fontWeight='bold'
            textTransform={'uppercase'}
          >
            SHOP CATEGORIES
          </Heading>
          <Text>
            Now browse our selection of carefully curated products in sorted
            categories.
          </Text>
        </Flex>
        <Box width={{ base: '100%', lg: '65%' }}>
          <ProductSlider newArrival={shopCategory} />
        </Box>
      </Flex>
      <Box>
        <Image src='https://images.dailyobjects.com/marche/assets/images/other/phone-cases-desktop-up.jpg?tr=cm-pad_crop,v-2,dpr-1' />
      </Box>
      <Box p={{ base: '1.5rem', lg: '3rem' }} margin={'auto'}>
        <AutoSlider data={AutoImage} />
      </Box>
      <Footer />
    </div>
  )
}

export default Home
