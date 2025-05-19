import React from 'react';
import PropTypes from 'prop-types';
import CustomSwiper from '../../../../utils/Constants/custom-components/CustomSwiper';
import { CustomCollegeCard } from '../CustomCollegeCard';

const RecommendedCollege = ({
  collegeDetails,
  greyTickIcon,
  responsive,
  swiperResponsive,
  arrowLeftIcon,
  arrowRightIcon,
  recommendedCollege,
}) => {
  return (
    <>
      <div className="clg-slider-wrapper position-relative">
        <div className="tick-heading d-flex align-items-center mb-4">
          <span className="tick-heading-icon d-inline-flex">
            <img src={greyTickIcon} alt="" />
          </span>
          <h2>Recommended Colleges</h2>
        </div>
        <div className="swiper recommended-clg-slider pb-5">
          <div className="swiper-wrapper position-relative">
            <CustomSwiper
              navigationNext={'.clg-button-next'}
              navigationPrev={'.clg-button-prev'}
              noOfSlidesPerView={1}
              isBreakPoint={true}
              breakPoint={swiperResponsive(responsive)}
            >
              {collegeDetails?.city &&
                recommendedCollege.map((college) => (
                  <swiper-slide>
                    <CustomCollegeCard college={college} isSwiper={true} />
                  </swiper-slide>
                ))}
            </CustomSwiper>
            <div className="swiper-button-prev clg-button-prev">
              <img src={arrowLeftIcon} alt="" />
            </div>
            <div className="swiper-button-next clg-button-next">
              <img src={arrowRightIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
RecommendedCollege.propTypes = {
  collegeDetails: PropTypes.shape({
    city: PropTypes.string,
  }).isRequired,
  greyTickIcon: PropTypes.string.isRequired,
  responsive: PropTypes.object.isRequired,
  swiperResponsive: PropTypes.func.isRequired,
  arrowLeftIcon: PropTypes.string.isRequired,
  arrowRightIcon: PropTypes.string.isRequired,
  recommendedCollege: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
      // add other fields as needed
    })
  ).isRequired,
};
export default RecommendedCollege;
