import React from 'react'
import arrowLeft from '../../../images/arrow-left-icon.svg';
import arrowRight from '../../../images/arrow-right-icon.svg';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper';
import { useSelector } from 'react-redux';
import { swiperResponsive } from '../../../utils/Constants/swiperResponsive';
import CollegeCard from '../../colleges/college_details/CollegeCard';
import constants from '../../../utils/Constants/constants';
import { Link } from 'react-router-dom';

export default function ExamSlider() {
  const {examDetailsById, allCollegeData}=useSelector(state=>state.common)
  const responsive = {
    1400:{
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1024:{
        slidesPerView: 3,
        spaceBetween: 20,
    },
    768:{
        slidesPerView: 2,
        spaceBetween: 20,
    },
    640:{
        slidesPerView: 1,
        spaceBetween: 20,
    },
    460:{
        slidesPerView: 1,
        spaceBetween: 20,
    },
 }
 const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
 const getCollegesByExamId = () => {
    const data = allCollegeData.filter((college)=>college?.category_name === examDetailsById?.examBasicDetails?.category_name)
    return data
 }
  return (
    <div className="clg-accepting-slider-wrapper position-relative yellow-bg px-4 pt-5 mt-5 mb-5">
            <h2 className="section-heading2 grey text-center mb-4">{'Colleges Accepting Exam ' + examDetailsById?.examBasicDetails?.exam_name} :</h2>
            <div className="swiper clg-slider">
               {/* Additional required wrapper */}
              <div className="swiper-wrapper position-relative">
                {/* <!-- Slides --> */}
                <CustomSwiper navigationNext={'.clg-button-next'} navigationPrev={'.clg-button-prev'} noOfSlidesPerView={1} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                  {examDetailsById?.examBasicDetails?.exam_name && getCollegesByExamId().map((college)=>(
                      <swiper-slide>
                        <div className="col-12">
                          <Link to={`/colleges_details/${college.college_id}`}>
                            <div className="clg-listing-box cig-listing-box-clg-card bg-white">
                              <div className='clg-listing-box-logo-rating'>
                                <div className="clglisting-clglogo" style={{width:"92px", height:'92px'}}>
                                  <img src={constants.imageAbsolutePath+college?.college_logo} alt="college Logo" />
                                </div>
                                    <div className="clg-rating-badge d-flex flex-column">
                                        <span className="clg-rating" id='clg-rating-color-green'>{college?.ratings}</span>
                                        <span className="clg-reviews-count">{getRandomInt(1, 100)}+ Reviews</span>
                                    </div>
                                </div>
                            <div className="clg-listing-inner-btmbx" id="clg-listing-inner-btmbx-box-padding-pading">
                                <h4 className="clg-name">{college?.college_name}</h4>
                                <p className="clg-location"><i class="fa-solid fa-location-dot"></i> {college?.city+", "+college?.state}</p>
                                <ul className="clg-affi-info d-flex clg-affi-info-approve-type-parents-box">
                                <li><span className="clg-list-approved-text"><i class="fa-solid fa-person-circle-check"></i> Approved by :</span>{college?.affiliate_by}</li>
                                <li><span className="clg-list-type-text"><i class="fa-solid fa-building-columns"></i> Type :</span>{college?.college_type}</li>
                                </ul>
                                <p className="clg-stream-name">{college?.category_name}</p>
                                
                            </div>
                        </div>
                    </Link>
                        </div>
                      </swiper-slide>
                  ))}
                  
                  {/* <swiper-slide>
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
                  </swiper-slide> */}
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
