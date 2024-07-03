import React, { useEffect } from 'react'
import {register} from "swiper/element/bundle"

const responsive = 
  JSON.stringify({
    3000:{
      slidesPerView: 5,
      spaceBetween: 50,
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
    },
    // 420:{
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // }
  })

export default function CustomSwiper({noOfSlidesPerView, children, isBreakPoint, navigationNext, navigationPrev}) {
    register();
    // useEffect(()=>{
    //   console.log(navigationNext, navigationPrev)
    // },[])
  return (
    <>
    {isBreakPoint ? (<swiper-container navigation-next-el={navigationNext} navigation-prev-el={navigationPrev} slides-per-view={noOfSlidesPerView} space-between={20} navigation={true} breakpoints={responsive}>{children}</swiper-container>) : 
    <swiper-container navigation-next-el={navigationNext} navigation-prev-el={navigationPrev} slides-per-view={noOfSlidesPerView} space-between={20} navigation={true}>{children}</swiper-container>}
    </>
  )
}
