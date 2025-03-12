import React from 'react'
import {register} from "swiper/element/bundle"

export default function CustomSwiper({noOfSlidesPerView, children, isBreakPoint, navigationNext, navigationPrev, breakPoint, autoplay}) {
    register();
    
  return (
    <>
    {isBreakPoint ? (<swiper-container navigation-next-el={navigationNext} navigation-prev-el={navigationPrev} slides-per-view={noOfSlidesPerView} space-between={20} navigation={true} breakpoints={JSON.stringify(breakPoint)}>{children}</swiper-container>) : 
    <swiper-container navigation-next-el={navigationNext} navigation-prev-el={navigationPrev} autoplay-delay={autoplay} autoplay-pause-on-mouse-enter={true} loop={true} slides-per-view={noOfSlidesPerView} space-between={20} navigation={true}>{children}</swiper-container>}
    </>
  )
}
