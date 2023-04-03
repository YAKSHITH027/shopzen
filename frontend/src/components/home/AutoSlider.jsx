import { Image } from '@chakra-ui/react'
import React, { Component } from 'react'
import Slider from 'react-slick'

export default class AutoSlider extends Component {
  render() {
    var settings = {
      infinite: true,

      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      speed: 7000,
      arrows: false,
      autoplaySpeed: 1000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
          {this.props.data.map((item) => {
            return (
              <Image
                width={{ base: '80px', lg: '150px' }}
                height={{ base: '200px', lg: '353px' }}
                src={item.image}
                key={item.id}
              />
            )
          })}
        </Slider>
      </div>
    )
  }
}
