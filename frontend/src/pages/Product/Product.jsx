import { useRef } from 'react'
import clsx from 'clsx'
import useLazyLoad from '../../components/products/LazyLoading'
import {
  Box,
  GridItem,
  Grid,
  Button,
  Select,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCart from '../../components/products/ProductCart'
import { LoadingPosts } from '../../components/products/LoadingPost'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/ProductReducer/Action'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Navbar from '../../components/home/Navbar'
import { Navbar as Test } from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ProductCategory from '../../components/products/ProductCategory'
// import { useLocation } from 'react-router-dom';
let num = 0
function Product() {
  const [page, setPage] = useState(2)
  const [items, setItems] = useState([])
  const [hasMore, sethasMore] = useState(true)
  const [type, setType] = useState('')

  const products = useSelector((store) => {
    return store.ProductReducer.product
  })
  const [SearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const location = useLocation()

  let obj = {
    params: {
      sort: SearchParams.get('sort'),
    },
  }
  console.log(obj.params.sort)

  useEffect(() => {
    dispatch(getProduct(obj))
      .then((res) => setItems(res.data.products))
      .catch((err) => console.log(err))
  }, [location.search])

  const fetchComments = async () => {
    let url
    if (obj.params.sort != null) {
      let qur = obj.params.sort
      url = `https://dark-erin-fox-cuff.cyclic.app/product?page=${page}&limit=20&sort=${qur}`
    } else {
      url = `https://dark-erin-fox-cuff.cyclic.app/product?page=${page}&limit=20`
    }
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    return data.products
  }

  const fetchData = async () => {
    const commentsFormServer = await fetchComments()

    setItems([...items, ...commentsFormServer])
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false)
    }
    setPage(page + 1)
  }

  const handleType = (T) => {
    setType(T)
  }
  return (
    <Box>
      {/* <Navbar /> */}
      <Box mb='90px'>
        <Test />
      </Box>
      <Box mt='20px' mb='20px'>
        <Image src='https://images.dailyobjects.com/marche/assets/images/other/20-off-new-homepage-desktop.gif?tr=cm-pad_resize,v-2,dpr-1' />
      </Box>
      <Box m='auto' w='95%'>
        <Box display='flex'>
          <Box w='85%' m='auto' display='flex' mt='20px' mb='20px'>
            <ProductCategory />
          </Box>
        </Box>
        <Box>
          <InfiniteScroll
            dataLength={items.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            loader={<LoadingPosts />}
            scrollThreshold='80%'
          >
            <Grid
              gridTemplateColumns={[
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(3,1fr)',
                'repeat(4,1fr)',
                'repeat(4,1fr)',
                'repeat(4,1fr)',
              ]}
              gap={['5px', '7px', '10px', '10px', '15px', '15px']}
            >
              {items.map((el) => (
                <GridItem>
                  <ProductCart
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    title={el.title}
                    price={el.price}
                    ogprice={el.ogprice}
                    new={el.new ? el.new : ''}
                  />
                </GridItem>
              ))}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Box>
      {/* <Footer /> */}
    </Box>
  )
}
export default Product
