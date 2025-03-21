import { shallowEqual, useSelector } from 'react-redux';
import TrendingCollegesCard from '../utils/Constants/custom-components/trendingColleges/TrendingCollegesCard';
import CustomeCrousel, { CarouselSlides } from '../utils/Constants/custom-components/CustomeCrousel';
import { useEffect } from 'react';

const CourseList = () => {
  const { allCollegeData } = useSelector((state) => state.common , shallowEqual);
  const responsive = {
    1400: {
      itemsPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      itemsPerView: 4,
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
          <h3 className="course-slider_h3text">Tranding Courses</h3>
          <div className="row flex-nowrap align-items-center position-relative overflow-x-hidden">
            <CustomeCrousel
              itemsPerView={1}
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
          </div>
        </div>
      </section>}
    </>
  );
};
export default CourseList;
