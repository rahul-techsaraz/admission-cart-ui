import { useSelector } from 'react-redux';
import TrendingCourseCard from '../utils/Constants/custom-components/trendingCourseCard/TrendingCourseCard';
import CustomeCrousel, { CarouselSlides } from '../utils/Constants/custom-components/CustomeCrousel';
import { useFetchAllCourse } from './hooks/useFetchAllCourse';
import { useEffect, useState } from 'react';

const TrandingSection = () => {
  const [trendingCourse, setTrendingCourse] = useState([]);
  const { allCourseData } = useSelector((state) => state.common);
  const { getTrendingCourses } = useFetchAllCourse();
  const responsive = {
    1400: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
    992: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
    768: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
    576: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
  };
  useEffect(() => {
    const trending_course = getTrendingCourses(allCourseData);
    setTrendingCourse(trending_course);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCourseData]);
  if (trendingCourse.length < 2) {
    return null;
  }
  return (
    <>
      <section className="trending-course-section section-padding">
        <div className="container">
          <div className="trending-course-box position-relative tranding_courses_box_heighset">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <h2 className="tranding-courses-heading text-white text-center text-lg-start mb-5 mb-lg-0 position-relative z-1">
                  Trending Courses
                </h2>
              </div>
              <div className="col-12 col-md-9 col-lg-4 mx-auto ms-lg-auto">
                <div className="trending-slider-wrapper position-relative">
                  <div className="swiper trending-course-slider bg-white tranding_border_radius">
                    <div className="swiper-wrapper ddddsdsdsd">
                      <CustomeCrousel
                        navigatePrev={'trending-button-prev'}
                        navigateNext={'trending-button-next'}
                        itemsPerView={1}
                        isAutoScroll={true}
                        breakPoints={responsive}
                        animation={'Card-Zoom-Effect'}
                        autoScrollPauseOnMouseEnter={true}
                      >
                        {trendingCourse.map((course) => (
                          <CarouselSlides key={course?.course_id}>
                            <TrendingCourseCard course={course} />
                          </CarouselSlides>
                        ))}
                      </CustomeCrousel>
                    </div>
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
