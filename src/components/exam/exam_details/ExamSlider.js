import React from 'react'
import arrowLeft from '../../../images/arrow-left-icon.svg';
import arrowRight from '../../../images/arrow-right-icon.svg';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper';
import { useSelector } from 'react-redux';

export default function ExamSlider() {
  const {examDetailsById}=useSelector(state=>state.common)
  return (
    <div className="clg-accepting-slider-wrapper position-relative yellow-bg px-4 pt-5 mt-5 mb-5">
            <h2 className="section-heading2 grey text-center mb-4">{'Colleges Accepting Exam ' + examDetailsById?.examBasicDetails?.exam_name} :</h2>
            <div className="swiper clg-slider">
               {/* Additional required wrapper */}
              <div className="swiper-wrapper position-relative">
                {/* <!-- Slides --> */}
                <CustomSwiper navigationNext={'.clg-button-next'} navigationPrev={'.clg-button-prev'} noOfSlidesPerView={1} isBreakPoint={false}>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <p className="clg-accepting-name">VNIT Nagpur</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <p className="clg-accepting-name">NIT Trichy</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                      </div>
                    </div>    
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <p className="clg-accepting-name">Indian Institute of Engineering Science and Technology</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                      </div>
                    </div>    
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <p className="clg-accepting-name">NIT Trichy</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                      </div>
                    </div>    
                  </swiper-slide>
                </CustomSwiper>
                
                {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev clg-button-prev">
              <img src={arrowLeft} alt="" />
            </div>
            <div className="swiper-button-next clg-button-next">
              <img src={arrowRight} alt="" />
            </div>
                
                
              </div>
            </div>
            {/* <!-- If we need navigation buttons --> */}
            {/* <div className="swiper-button-prev clg-button-prev">
              <img src={arrowLeft} alt="" />
            </div>
            <div className="swiper-button-next clg-button-next">
              <img src={arrowRight} alt="" />
            </div> */}
          </div>
  )
}
