import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomSwiper from '../../../../utils/Constants/custom-components/CustomSwiper';

const CollegeNewsSection = ({
  collegeDetails,
  whatsIcon,
  responsive,
  swiperResponsive,
  arrowLeftIcon,
  arrowRightIcon,
}) => {
  return (
    <div className="whatsNew-box mb-5">
      <div className="d-flex mb-4 ms-3">
        <div className="whatsnew-cal-badge">
          <img src={whatsIcon} alt="" />
        </div>
        <h1 className="whatsNew-heading ms-2">
          <span>{collegeDetails?.college_name}</span>
          What’s New
        </h1>
      </div>
      <div className="whatsNew-inner-box">
        <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
        <p className="whatsNew-para">
          IIT Chennai University PhD applications 2024 are open and the last date to apply is Jan 17, 2024. Below are
          some of the other important IIM Ahmedabad latest updates:
        </p>
        <ul className="whatsNew-list">
          <li>The CAT 2023 exam will be held on Nov 26, 2023.</li>
          <li>MBA-PGPX R2 applications are open and the last date to apply is Oct 30, 2023.</li>
        </ul>
        <Link className="whatsNew-readmore-btn mt-4 d-inline-block">Read More</Link>
      </div>
      <div className="whatsNew-slider-wrapper mt-4 mb-5">
        <div className="swiper whatsNew-slider">
          <div className="swiper-wrapper">
            <main className="slider-main-container position-relative">
              <CustomSwiper
                navigationNext={'.whatsNew-button-next'}
                navigationPrev={'.whatsNew-button-prev'}
                isBreakPoint={true}
                breakPoint={swiperResponsive(responsive)}
              >
                {[...Array(5)].map((_, idx) => (
                  <swiper-slide key={idx}>
                    <div className="swiper-slide">
                      <div className="whatsNew-inner-box">
                        <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                        <p className="whatsNew-para">
                          IIT Chennai University celebrated World Pharmacist Day at the premises...{' '}
                          <Link className="whatsNew-readmore-btn">Read More</Link>
                        </p>
                      </div>
                    </div>
                  </swiper-slide>
                ))}
              </CustomSwiper>
              <div className="swiper-button-prev whatsNew-button-prev">
                <img src={arrowLeftIcon} alt="" />
              </div>
              <div className="swiper-button-next whatsNew-button-next ">
                <img src={arrowRightIcon} alt="" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

CollegeNewsSection.propTypes = {
  collegeDetails: PropTypes.shape({
    college_name: PropTypes.string,
  }),
  whatsIcon: PropTypes.string.isRequired,
  responsive: PropTypes.object.isRequired,
  swiperResponsive: PropTypes.func.isRequired,
  arrowLeftIcon: PropTypes.string.isRequired,
  arrowRightIcon: PropTypes.string.isRequired,
};

export default CollegeNewsSection;
