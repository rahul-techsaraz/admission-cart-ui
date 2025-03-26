import { useSelector } from 'react-redux';
import TrendingExamCard from '../utils/Constants/custom-components/trendingExamCard/TrendingExamCard';
import CustomeCrousel, { CarouselSlides } from '../utils/Constants/custom-components/CustomeCrousel';

const ExploreCareer = () => {
  const { allExamData } = useSelector((state) => state.common);
  const responsive = {
    1400: {
      itemsPerView: 3,
      spaceBetween: 20,
    },
    1024: {
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
      {allExamData.length > 0 &&
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
                      <CustomeCrousel
                        navigatePrev={'crousel-btn-prev'}
                        navigateNext={'crousel-btn-next'}
                        itemsPerView={3}
                        isAutoScroll={true}
                        breakPoints={responsive}
                        animation={'Card-Zoom-Effect'}
                        autoScrollPauseOnMouseEnter={true}
                      >
                        {allExamData.map((exam)=>(
                          <CarouselSlides>
                            <TrendingExamCard exam={exam}/>
                          </CarouselSlides>
                        ))}
                      </CustomeCrousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};
export default ExploreCareer;
