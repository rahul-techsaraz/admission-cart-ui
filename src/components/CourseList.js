import React, { useEffect, useState } from 'react';
import TrendingCollegesCard from '../utils/Constants/custom-components/trendingColleges/TrendingCollegesCard';
import CustomeCrousel, { CarouselSlides } from '../utils/Constants/custom-components/CustomeCrousel';
import { useSelector } from 'react-redux';
import { useFetchAllCollege } from './hooks/useFetchAllCollege';

const CourseList = () => {
  const [trendingCollege, setTrendingCollege] = useState([])
  const { allCollegeData } = useSelector((state) => state.common);
  const {fetchTrendingCollege} = useFetchAllCollege()
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
  useEffect(()=>{
    if(allCollegeData.length > 0){
      const trendingList = fetchTrendingCollege(allCollegeData)
      setTrendingCollege(trendingList)
    }
  },[allCollegeData])
  return (
    <>
      {trendingCollege.length > 0 && (
        <section className="course-slider-section text-center section-padding">
          <div className="container">
            <h3 className="course-slider_h3text">Featured Colleges</h3>
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
              {trendingCollege.map((college) => (
                  <CarouselSlides>
                    <TrendingCollegesCard college={college} />
                  </CarouselSlides>
                ))}
            </CustomeCrousel>
            {/* </div> */}
          </div>
        </section>
      )}
    </>
  );
};
export default CourseList;
