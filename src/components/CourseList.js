import { useSelector } from 'react-redux';
import TrendingCollegesCard from '../utils/Constants/custom-components/trendingColleges/TrendingCollegesCard';
import CustomeCrousel from '../utils/Constants/custom-components/CustomeCrousel';

const CourseList = () => {
  const { allCollegeData } = useSelector((state) => state.common);
  const responsive = {
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };

  return (
    <>
      <section className="course-slider-section text-center section-padding">
        <div className="container">
          <h3 className="course-slider_h3text">Tranding Courses</h3>
          {/* <div className="row flex-nowrap align-items-center position-relative overflow-x-hidden"> */}
            <CustomeCrousel
              data={allCollegeData.filter((data) => data.ratings >= 3)}
              itemsPerView={4}
              CardComponent={TrendingCollegesCard}
              ishidden={true}
              isAutoScroll={false}
              // breakPoints={responsive}
            />
          {/* </div> */}
        </div>
      </section>
    </>
  );
};
export default CourseList;
