import leftArrow from '../images/arrow-left-icon.svg';
import rightArrow from '../images/arrow-right-icon.svg';
import CustomSwiper from '../utils/Constants/custom-components/CustomSwiper';
import exploreThumbImg from '../images/course/course-post-img1.jpg';
import scollarship from '../images/scholarship-icon.svg';
import { swiperResponsive } from '../utils/Constants/swiperResponsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import constants from '../utils/Constants/constants';
import TrendingExamCard from '../utils/Constants/custom-components/trendingExamCard/TrendingExamCard';

const ExploreCareer = () => {
  const { allExamData } = useSelector((state) => state.common);
  const responsive = {
    1400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <>
      <section className="career-slider-section text-center section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section-heading text-center">Explore Exams</h1>
              <p className="section-subheading">
                Explore your preferred streams to learn about the relevant colleges, exams and more!
              </p>
            </div>
            <div className="col-12">
              <div className="career-slider-wrapper position-relative">
                <div className="swiper career-slider">
                  <div className="swiper-wrapper position-reltive">
                    <CustomSwiper
                      navigationNext={'.career-button-next'}
                      navigationPrev={'.career-button-prev'}
                      noOfSlidesPerView={1}
                      isBreakPoint={true}
                      breakPoint={swiperResponsive(responsive)}
                    >
                      {allExamData.map((exam) => (
                        <swiper-slide>
                          <TrendingExamCard exam={exam} />
                        </swiper-slide>
                      ))}
                    </CustomSwiper>
                  </div>
                  <div className="swiper-button-prev career-button-prev">
                    <img src={leftArrow} alt="" />
                  </div>
                  <div className="swiper-button-next career-button-next">
                    <img src={rightArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ExploreCareer;
