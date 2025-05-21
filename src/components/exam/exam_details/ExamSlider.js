import React from 'react';
import arrowLeft from '../../../images/arrow-left-icon.svg';
import arrowRight from '../../../images/arrow-right-icon.svg';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper';
import { useSelector } from 'react-redux';
import { swiperResponsive } from '../../../utils/Constants/swiperResponsive';
import CollegeCard from '../../colleges/college_details/CollegeCard';
import constants from '../../../utils/Constants/constants';
import { Link } from 'react-router-dom';
import { CustomCollegeCard } from '../../colleges/college_details/CustomCollegeCard';
import CustomeCrousel, { CarouselSlides } from '../../../utils/Constants/custom-components/CustomeCrousel';

export default function ExamSlider() {
  const { examDetailsById, allCollegeData } = useSelector((state) => state.common);
  const responsive = {
    1400: {
      itemsPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      itemsPerView: 4,
      spaceBetween: 20,
    },
    992: {
      itemsPerView: 3,
      spaceBetween: 20,
    },
    768: {
      itemsPerView: 2,
      spaceBetween: 20,
    },
    576: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const getCollegesByExamId = () => {
    const data = allCollegeData.filter(
      (college) => college?.category_name === examDetailsById?.examBasicDetails?.category_name
    );
    return data;
  };
  return (
    <div className="clg-accepting-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
      <h2 className="section-heading2 grey text-center mb-4">
        {'Colleges Exam ' + examDetailsById?.examBasicDetails?.exam_name} :
      </h2>
      <div className="swiper clg-slider">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper position-relative">
          {/* <!-- Slides --> */}
          <CustomeCrousel
            navigatePrev={'clg-button-prev'}
            navigateNext={'clg-button-next'}
            itemsPerView={1}
            isAutoScroll={true}
            breakPoints={responsive}
            animation={'Card-Zoom-Effect'}
            autoScrollPauseOnMouseEnter={true}
          >
            {examDetailsById?.examBasicDetails?.exam_name &&
              getCollegesByExamId().map((college) => (
                <CarouselSlides>
                  <CustomCollegeCard college={college} />
                </CarouselSlides>
              ))}
          </CustomeCrousel>
          {/* <CustomSwiper
            navigationNext={'.clg-button-next'}
            navigationPrev={'.clg-button-prev'}
            noOfSlidesPerView={1}
            isBreakPoint={true}
            breakPoint={swiperResponsive(responsive)}
          >
            {examDetailsById?.examBasicDetails?.exam_name &&
              getCollegesByExamId().map((college) => (
                <swiper-slide>
                  <CustomCollegeCard college={college} isSwiper={true} />
                </swiper-slide>
              ))}
          </CustomSwiper> */}

          {/* <!-- If we need navigation buttons --> */}
          {/* <div className="swiper-button-prev clg-button-prev">
            <img src={arrowLeft} alt="" />
          </div>
          <div className="swiper-button-next clg-button-next">
            <img src={arrowRight} alt="" />
          </div> */}
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
  );
}
