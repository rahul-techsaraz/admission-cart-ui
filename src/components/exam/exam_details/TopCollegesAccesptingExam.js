import React from 'react'
import { Link } from 'react-router-dom'
import arrowLeft from '../../../images/arrow-left-icon.svg';
import arrowRight from '../../../images/arrow-right-icon.svg';
import clgLogo1 from '../../../images/clg-logo1.png';
import clgLogo2 from '../../../images/clg-logo2.png';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper';

export default function TopCollegesAccesptingExam() {
  return (
    <div className="management-clg-state-slider-wrapper position-relative green-bg px-4 py-5 mt-5 mb-5">
            <h2 className="section-heading2 grey text-center mb-5">Top Management Colleges in Karnataka</h2>
            <div className="swiper management-clg-slider">
              <div className="swiper-wrapper position-relative">
                <CustomSwiper noOfSlidesPerView={1} isBreakPoint={false}>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <img src={clgLogo1} className="clg-logo" alt="" />
                        <p className="clg-accepting-name">Dayananda Sagar Institutions</p>
                        <p className="clg-accepting-location">Bangalore, Karnataka</p>
                        <Link className="management-clg-applybtn">Apply Now</Link>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <img src={clgLogo2} className="clg-logo" alt="" />
                        <p className="clg-accepting-name">Bangalore Institute of Management Studies</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                        <Link className="management-clg-applybtn">Apply Now</Link>
                      </div>
                    </div>    
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <img src={clgLogo1} className="clg-logo" alt="" />
                        <p className="clg-accepting-name">Haridwar University</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                        <Link className="management-clg-applybtn">Apply Now</Link>
                      </div>
                    </div>    
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <img src={clgLogo2} className="clg-logo" alt="" />
                        <p className="clg-accepting-name">Geetanjali Group of Colleges</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                        <Link className="management-clg-applybtn">Apply Now</Link>
                      </div>
                    </div>    
                  </swiper-slide>
                </CustomSwiper>
                
            <div className="swiper-button-prev clg-button-prev green-bg">
              <img src={arrowLeft} alt="" />
            </div>
            <div className="swiper-button-next clg-button-next green-bg">
              <img src={arrowRight} alt="" />
            </div>
                
                
              </div>
            </div>
            {/* <div className="swiper-button-prev clg-button-prev green-bg">
              <img src={arrowLeft} alt="" />
            </div>
            <div className="swiper-button-next clg-button-next green-bg">
              <img src={arrowRight} alt="" />
            </div> */}
          </div>
  )
}
