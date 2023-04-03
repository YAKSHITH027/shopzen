import { Box, Flex, Image, position, Text } from '@chakra-ui/react'
import React, { Component } from 'react'
import Slider from 'react-slick'
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'grey',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: '2',
        right: '1rem',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'grey',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: '2',
        left: '1rem',
      }}
      onClick={onClick}
    />
  )
}
export default class ProductSlider extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 730,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    }
    return (
      <div>
        <Slider {...settings}>
          {this.props.newArrival.map((item) => {
            return (
              <Flex
                flexDir={'column'}
                key={item.id}
                gap='4'
                align='center'
                justify={'center'}
              >
                <Flex justify={'center'}>
                  <Image
                    src={item.image}
                    maxW={{ base: '154px', lg: '235px' }}
                    maxH={{ base: '225px', lg: '290px' }}
                  />
                </Flex>
                <Text
                  textAlign={'center'}
                  overflow={'hidden'}
                  whiteSpace='nowrap'
                  textOverflow={'ellipsis'}
                  maxW={'full'}
                >
                  {item.color}
                </Text>
                <Text textAlign={'center'} my='5px'>
                  {' '}
                  {item.title}{' '}
                </Text>
              </Flex>
            )
          })}
        </Slider>
      </div>
    )
  }
}
