import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import EditModal from '../../components/EditModal'

const AdminProducts = () => {
  const productsData = [
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1809/surge-2-in-1-magnetic-charging-station-images/Surge-2-In-1-Magnetic-Charging-Station.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title:
        'DailyObjects SURGE™ 2-In-1 Universal Magnetic Wireless Charging Station (18W)',
      price: 3999,
      ogprice: 7999,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1809/conoid-universal-magnetic-charging-stand-images/Conoid-Universal-Magnetic-Charging-Stand-vw.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title: 'Conoid Universal Magnetic Wireless Charging Stand (15W)',
      price: 2999,
      ogprice: 5999,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1201/all-red-pedal-daypack-images/All-Red-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title: 'All Red Pedal Daypack',
      price: 1699,
      ogprice: 2499,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1202/all-navy-commute-messenger-large-images/All-Navy-Commute-Messenger-Large-vw.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title: 'All Navy Commute Messenger Large',
      price: 3499,
      ogprice: 6499,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1201/dailyobjects-khaki-beige-pilot-backpack-images/DailyObjects-Khaki-Beige-City-Compact-Backpack.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title: 'Khaki Beige Pilot Backpack',
      price: 2199,
      ogprice: 4999,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1201/dailyobjects-mustard-yellow-pilot-backpack-images/DailyObjects-Mustard-Yellow-City-Compact-Backpack.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title: 'Mustard Yellow Pilot Backpack',
      price: 2199,
      ogprice: 4999,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1201/all-olive-pedal-daypack-images/All-Olive-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title: 'All Olive Pedal Daypack',
      price: 1699,
      ogprice: 2499,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1201/all-clove-pedal-daypack-images/All-Clove-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title: 'All Clove Pedal Daypack',
      price: 1699,
      ogprice: 2499,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1103/dailyobjects-space-blue-snapon-envelope-sleeve-for-macbook-pro-40-64cm-16-inch-images/DailyObjects-Space-Blue-Slim-Envelope-Sleeve-For-Macbook-Pro-16-vw.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title:
        'Space Blue SnapOn Envelope Sleeve For Macbook Pro 40.64cm (16 inch)',
      price: 1699,
      ogprice: 2499,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1201/all-mustard-pedal-daypack-images/All-Mustard-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title: 'All Mustard Pedal Daypack',
      price: 1699,
      ogprice: 2499,
      is_new: '',
    },
    {
      image:
        'https://images.dailyobjects.com/marche/product-images/1103/dailyobjects-walnut-brown-snapon-envelope-sleeve-for-macbook-pro-35-56cm-14-inch-images/DailyObjects-Walnut-Brown-Slim-Envelope-Sleeve-For-Macbook-Pro-14-vw.png?tr=cm-pad_resize,v-2,w-312,h-385,dpr-1',
      title:
        'Walnut Brown SnapOn Envelope Sleeve For Macbook Pro 35.56cm (14 inch)',
      price: 1499,
      ogprice: 2199,
      is_new: '',
    },
  ]
  // maxH={'85vh'} overflow={'auto'}
  return (
    <Box>
      <Box display={'grid'} gridTemplateColumns={'repeat(5,1fr)'} gap={'4'}>
        {productsData.map((item) => {
          return (
            <Box
              bg={
                'linear-gradient(to bottom, #032239, #092940, #102f46, #17364d, #1d3d54)'
              }
              py='1rem'
              borderRadius={'md'}
              key={item.image}
            >
              <Image src={item.image} />
              <Flex justifyContent={'space-around'}>
                <EditModal
                  image={item.image}
                  original={item.ogprice}
                  offerPrice={item.price}
                  title={item.title}
                />
                <Button colorScheme='blackAlpha'>Delete</Button>
              </Flex>
              {/* <Text>{item.title.substring(0, 18)}</Text> */}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default AdminProducts
