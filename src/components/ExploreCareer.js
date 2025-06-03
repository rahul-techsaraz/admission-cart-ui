import { useSelector } from 'react-redux';
import TrendingExamCard from '../utils/Constants/custom-components/trendingExamCard/TrendingExamCard';
import CustomeCrousel, { CarouselSlides } from '../utils/Constants/custom-components/CustomeCrousel';
import { useFetchAllExam } from './hooks/useFetchAllExam';
import { useEffect, useState } from 'react';
import CustomExamCard from './exam/exam_details/CustomExamCard';

const ExploreCareer = () => {
  const [trendingExam, setTrendingExam] = useState([]);
  const { allExamData } = useSelector((state) => state.common);
  const { fetchTrendingExam } = useFetchAllExam();
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
  useEffect(() => {
    const trendingExamDetails = fetchTrendingExam(allExamData);
    setTrendingExam(trendingExamDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allExamData]);
  return (
    <>
      {trendingExam.length > 4 && (
        <section className="career-slider-section text-center section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 ">
                <h1 className="section-heading text-center">Explore Exams</h1>
                <p className="section-subheading career-slider-padding">
                  Explore your preferred streams to learn about the relevant colleges, exams and more!
                </p>
              </div>
              {/* <div className="col-12">
                <div className="career-slider-wrapper position-relative">
                  <div className="swiper career-slider">
                    <div className="swiper-wrapper position-reltive"> */}
              <CustomeCrousel
                navigatePrev={'crousel-btn-prev'}
                navigateNext={'crousel-btn-next'}
                itemsPerView={4}
                isAutoScroll={true}
                breakPoints={responsive}
                animation={'Card-Zoom-Effect'}
                autoScrollPauseOnMouseEnter={true}
              >
                {trendingExam.map((exam) => (
                  <CarouselSlides>
                    {/* <TrendingExamCard exam={exam} /> */}
                    <CustomExamCard exam={exam} />
                  </CarouselSlides>
                ))}
              </CustomeCrousel>
              {/* </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default ExploreCareer;
