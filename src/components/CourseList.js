import React from 'react';
import TrendingCollegesCard from '../utils/Constants/custom-components/trendingColleges/TrendingCollegesCard';
import CustomeCrousel, { CarouselSlides } from '../utils/Constants/custom-components/CustomeCrousel';
import { useSelector } from 'react-redux';

const CourseList = () => {
  const { allCollegeData } = useSelector((state) => state.common);
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
  
  return (
    <>
    {allCollegeData.length > 0 &&
      <section className="course-slider-section text-center section-padding">
        <div className="container">
          <h3 className="course-slider_h3text">Tranding Collages</h3>
          {/* <div className=""> */}
            <CustomeCrousel
              navigatePrev={'crousel-btn-prev'}
              navigateNext={'crousel-btn-next'}
              itemsPerView={4}
              isAutoScroll={true}
              breakPoints={responsive}
              animation={'Card-Zoom-Effect'}
              autoScrollPauseOnMouseEnter={true}
            >
              {allCollegeData
                .filter((data) => data.ratings >= 3)
                .map((college) => (
                  <CarouselSlides>
                    <TrendingCollegesCard college={college} />
                  </CarouselSlides>
                ))}
            </CustomeCrousel>
          {/* </div> */}
        </div>
      </section>}
    </>
  );
};
export default CourseList;
