import React from 'react'
import {register} from "swiper/element/bundle"

export default function CustomSwiper({noOfSlidesPerView, children}) {
    register();
  return (
    <>
        <swiper-container slides-per-view={noOfSlidesPerView} space-between={20} navigation={true} 
        // breakpoints={
        //     JSON.stringify({
        //         640:{
        //             slidesPerView: 1,
        //             spaceBetween: 20,
        //         },
        //         768:{
        //             slidesPerView: 3,
        //             spaceBetween: 40,
        //         },
        //         1024:{
        //             slidesPerView: 4,
        //             spaceBetween: 50,
        //         }
        //     })
        // }
        >
            {children}
        </swiper-container>
    </>
  )
}
