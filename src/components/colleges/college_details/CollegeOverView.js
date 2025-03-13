import React from 'react'
import whatsNewIcon from '../../../images/whatsnew-cal-icon.svg';
import arrowLeftIcon from '../../../images/arrow-left-icon.svg';
import arrowRightIcon from '../../../images/arrow-right-icon.svg';
import greyTicketIcon from '../../../images/grey-tick.svg';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper';
import { Link } from 'react-router-dom';

export default function CollegeOverView() {
    return (
      <>
    <div className="whatsNew-box mb-5">
                        <div className="d-flex mb-4 ms-3">
                           <div className="whatsnew-cal-badge">
                              <img src={whatsNewIcon} alt="" />
                           </div>
                           <h1 className="whatsNew-heading ms-2">
                              <span>IIT Chennai</span>
                              What’s New
                           </h1>
                        </div>
                        <div className="whatsNew-inner-box">
                           <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                           <p className="whatsNew-para">IIT Chennai University PhD applications 2024 are open and the last date to apply is Jan 17, 2024. Below are some of the other important IIM Ahmedabad latest updates:</p>
                           <ul className="whatsNew-list">
                              <li>&gt; The CAT 2023 exam will be held on Nov 26, 2023.</li>
                              <li>&gt; MBA-PGPX R2 applications are open and the last date to apply is Oct 30, 2023.</li>
                           </ul>
                           <Link className="whatsNew-readmore-btn mt-4 d-inline-block">Read More</Link>
                        </div>
                        <div className="whatsNew-slider-wrapper position-relative mt-4 mb-5">
                           <div className="swiper whatsNew-slider swiper-initialized swiper-horizontal swiper-backface-hidden">
                              <div className="swiper-wrapper" id="swiper-wrapper-37bc362fb3516451" aria-live="polite" style="transition-duration: 0ms; transform: translate3d(-554px, 0px, 0px); transition-delay: 0ms;">
                                 <CustomSwiper noOfSlidesPerView={1} isBreakPoint={false}>
                                    <swiper-slide>
                                       <div className="swiper-slide" role="group" aria-label="2 / 5" data-swiper-slide-index="1" style="width: 262px; margin-right: 15px;">
                                          <div className="whatsNew-inner-box">
                                             <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                             <p className="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link className="whatsNew-readmore-btn">Read More</Link></p>
                                          </div>
                                       </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                       <div className="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 5" data-swiper-slide-index="2" style="width: 262px; margin-right: 15px;">
                                          <div className="whatsNew-inner-box">
                                             <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                             <p className="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link className="whatsNew-readmore-btn">Read More</Link></p>
                                          </div>
                                       </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                       <div className="swiper-slide swiper-slide-active" role="group" aria-label="4 / 5" data-swiper-slide-index="3" style="width: 262px; margin-right: 15px;">
                                          <div className="whatsNew-inner-box">
                                             <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                             <p className="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link className="whatsNew-readmore-btn">Read More</Link></p>
                                          </div>
                                       </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                       <div className="swiper-slide swiper-slide-next" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style="width: 262px; margin-right: 15px;">
                                          <div className="whatsNew-inner-box">
                                             <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                             <p className="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link className="whatsNew-readmore-btn">Read More</Link></p>
                                          </div>
                                       </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                       <div className="swiper-slide" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style="width: 262px; margin-right: 15px;">
                                          <div className="whatsNew-inner-box">
                                             <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                             <p className="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link className="whatsNew-readmore-btn">Read More</Link></p>
                                          </div>
                                       </div>
                                    </swiper-slide>
                                 </CustomSwiper>
                                 
                                 
                                 
                                 
                              
                                 </div>
                           <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                           <div className="swiper-button-prev whatsNew-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-37bc362fb3516451">
                              <img src={arrowLeftIcon} alt="" />
                           </div>
                           <div className="swiper-button-next whatsNew-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-37bc362fb3516451">
                              <img src={arrowRightIcon} alt="" />
                           </div>
                        </div>
            </div>
            <div className="course-details-left-innerBox mb-5 text-center">
                        <h2 className="imgText-heading mb-4">Indian Institute of Technology Overview</h2>
                        <p className="imgText-para">It is an engineering and technology school in Chennai (formerly Madras) in southern India. Recognized as an Institute of National Importance by the Government of India, it is regarded as one of the finest engineering institutions in India. Founded in 1959...</p>
                        <div className="text-center">
                           <Link className="theme-btn green-btn">Read More</Link>
                        </div>
            </div>
             <div className="course-details-left-innerBox mb-5 text-center">
                        <h2 className="imgText-heading mb-4">IIT Chennai Highlights 2023</h2>
                        <p className="imgText-para">It is an engineering and technology school in Chennai (formerly Madras) in southern India. Recognized as an Institute of National Importance by the Government of India, it is regarded as one of the finest engineering institutions in India. Founded in 1959...</p>
                        <div className="text-center">
                           <Link className="theme-btn green-btn">Get Started Now</Link>
                        </div>
                     </div>
                     <div className="tick-heading d-flex align-items-center mb-4">
                        <span className="tick-heading-icon d-inline-flex">
                        <img src={greyTicketIcon} alt="" />
                        </span>
                        <h2>IIT Chennai Top Courses & Fees</h2>
                     </div>
        </>
  )
}
