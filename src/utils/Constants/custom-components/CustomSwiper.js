import React from 'react'
import {register} from "swiper/element/bundle"

const responsive = 
  JSON.stringify({
    3000:{
      slidesPerView: 5,
      spaceBetween: 50
    },
    1024:{
      slidesPerView: 4,
      spaceBetween: 50,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 40,
    },
    640:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    460:{
      slidesPerView: 1,
      spaceBetween: 20,
    }
  })

export default function CustomSwiper({noOfSlidesPerView, children, isBreakPoint}) {
    register();
  return (
    <>
    {/* {isBreakPoint ? (<swiper-container slides-per-view={noOfSlidesPerView} space-between={20} navigation={true} breakpoints={responsive}>{children}</swiper-container>) : 
    <swiper-container slides-per-view={noOfSlidesPerView} space-between={20} navigation={true}>{children}</swiper-container>} */}
    {isBreakPoint ? (<swiper-container slides-per-view={noOfSlidesPerView} slidesPerView={'auto'} space-between={20} navigation={true} breakpoints={responsive}>{children}</swiper-container>) : 
    <swiper-container slides-per-view={noOfSlidesPerView} slidesPerView={'auto'} space-between={20} navigation={true}>{children}</swiper-container>}
        
    </>
  )
}
