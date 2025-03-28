import { useSelector } from 'react-redux';
import TrendingCourseCard from '../utils/Constants/custom-components/trendingCourseCard/TrendingCourseCard';
import CustomeCrousel, { CarouselSlides } from '../utils/Constants/custom-components/CustomeCrousel';

const TrandingSection = () => {
  const { allCourseData } = useSelector((state) => state.common);
  const responsive = {
    1400: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
    1024: {
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

  return (
    <>
      {allCourseData.length > 0 &&
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
                    <div className="swiper-wrapper">
                      <CustomeCrousel
                        navigatePrev={'trending-button-prev'}
                        navigateNext={'trending-button-next'}
                        itemsPerView={1}
                        isAutoScroll={true}
                        breakPoints={responsive}
                        animation={'Card-Zoom-Effect'}
                        autoScrollPauseOnMouseEnter={true}
                      >
                        {allCourseData.map((course)=>(
                        <CarouselSlides>
                          <TrendingCourseCard course={course}/>
                        </CarouselSlides>
                        ))}
                      </CustomeCrousel>
                    </div>
                  </div>
                  {/* <div className="swiper-button-prev trending-button-prev">
                    <img src={leftArrow} alt="" />
                  </div>
                  <div className="swiper-button-next trending-button-next">
                    <img src={rightArrow} alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </>
  );
};
export default TrandingSection;
