import CustomSwiper from '../utils/Constants/custom-components/CustomSwiper';
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg';
import scollarship from '../images/scholarship-icon.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import TrendingCourseCard from '../utils/Constants/custom-components/trendingCourseCard/TrendingCourseCard';

const TrandingSection = () => {
  const { allCourseData } = useSelector((state) => state.common);

  return (
    <>
      <section className="trending-course-section section-padding">
        <div className="container">
          <div className="trending-course-box position-relative tranding_courses_box_heighset">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <h2 className="text-white text-center text-lg-start mb-5 mb-lg-0 position-relative z-1">
                  Trending Courses
                </h2>
              </div>

              <div className="col-12 col-md-9 col-lg-5 mx-auto ms-lg-auto">
                <div className="trending-slider-wrapper position-relative">
                  <div className="swiper trending-course-slider bg-white tranding_border_radius">
                    <div className="swiper-wrapper">
                      <CustomSwiper
                        navigationNext={'.trending-button-next'}
                        navigationPrev={'.trending-button-prev'}
                        noOfSlidesPerView={1}
                        isBreakPoint={false}
                      >
                        {allCourseData.map((course) => (
                          <swiper-slide>
                            <TrendingCourseCard course={course} />
                          </swiper-slide>
                        ))}
                      </CustomSwiper>
                    </div>
                  </div>
                  <div className="swiper-button-prev trending-button-prev">
                    <img src={leftArrow} alt="" />
                  </div>
                  <div className="swiper-button-next trending-button-next">
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
export default TrandingSection;
