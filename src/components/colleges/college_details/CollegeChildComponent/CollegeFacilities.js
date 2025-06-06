import React from 'react';
import PropTypes from 'prop-types';
import CustomSwiper from '../../../../utils/Constants/custom-components/CustomSwiper';
import { Link } from 'react-router-dom';
import constants from '../../../../utils/Constants/constants';
import { toggelIsContactUs } from '../../../../features/commonSlice';
import { useDispatch } from 'react-redux';
import CustomeCrousel, { CarouselSlides } from '../../../../utils/Constants/custom-components/CustomeCrousel';

const CollegeFacilities = ({
  collegeDetails,
  facultyData,
  getCurrentYear,
  readmore,
  setReadmore,
  swiperResponsive,
  audienceIcon,
  hostelIcon,
  arrowLeftIcon,
  arrowRightIcon,
  cdIcon,
  greyTickIcon,
  canteenIcon,
  yellowCircleIcon,
  avtar,
}) => {
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
  const dispatch = useDispatch()
  const admissionDescription = readmore?.admission ? collegeDetails?.description?.college_admission_description : collegeDetails?.description?.college_admission_description.slice(0, 200)
  return (
    <>
      <div className="tick-heading d-flex align-items-center mb-4">
        <span className="tick-heading-icon d-inline-flex">
          <img src={greyTickIcon} alt="" />
        </span>
        <h2>{`${collegeDetails?.college_name} Admission ${getCurrentYear()}`}</h2>
      </div>
      <div className="clg-location-infograybx mb-5">
        <p>{admissionDescription}</p>
        {/* <div className="text-start mt-3">
          <Link className="course-details-readmore-btn btn text-white">Read More</Link>
        </div> */}
        {collegeDetails?.description?.college_admission_description.length > 200 && (
          <div className="text-start mt-5">
            <Link
              className="course-details-readmore-btn btn text-white"
              onClick={() => setReadmore({ ...readmore, admission: !readmore.admission })}
            >
              {!readmore.admission ? 'Read More' : 'Read Less'}
            </Link>
          </div>
        )}
      </div>

      <div className="course-details-alterImgbox d-flex align-items-center">
        <div className="course-details-alterImgbox-col1 green-bg">
          <h2 className="text-white">
            Worried About College <span>Guidance?</span>
          </h2>
          <p>Convert your Upfront Fees in to Simple, Convenient & Affordable EMIs</p>
          <Link className="theme-btn white-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>Ask Our Experts</Link>
        </div>
        <div className="course-details-alterImgbox-col2 position-relative">
          <img src={cdIcon} alt="" />
        </div>
      </div>
      <div className="clg-facilities-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
        <h2 className="section-heading2 grey text-center mb-5">{`${collegeDetails?.college_name} Facilities`}</h2>
        <div className="swiper clg-facilities-slider">
          <div className="swiper-wrapper position-relative">
            {/* <CustomSwiper
              navigationNext={'.clg-facilities-button-next'}
              navigationPrev={'.clg-facilities-button-prev'}
              isBreakPoint={true}
              breakPoint={swiperResponsive(responsive)}
            >
              <swiper-slide>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Auditorium</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={hostelIcon} alt="" />
                    <p>Boys Hostel</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={canteenIcon} alt="" />
                    <p>Canteen</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Computer Lab</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Counselling</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Auditorium</p>
                  </div>
                </div>
              </swiper-slide>
            </CustomSwiper>
            <div className="swiper-button-prev clg-facilities-button-prev">
              <img src={arrowLeftIcon} alt="" />
            </div>
            <div className="swiper-button-next clg-facilities-button-next">
              <img src={arrowRightIcon} alt="" />
            </div> */}
            <CustomeCrousel
              navigatePrev={'clg-facilities-button-prev'}
              navigateNext={'clg-facilities-button-next'}
              itemsPerView={4}
              isAutoScroll={true}
              breakPoints={responsive}
              // animation={'Card-Zoom-Effect'}
              autoScrollPauseOnMouseEnter={true}
            >
              <CarouselSlides>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Auditorium</p>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={hostelIcon} alt="" />
                    <p>Boys Hostel</p>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={canteenIcon} alt="" />
                    <p>Canteen</p>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Computer Lab</p>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Computer Lab</p>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Computer Lab</p>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide">
                  <div className="clg-facilities-box position-relative">
                    <img src={audienceIcon} alt="" />
                    <p>Computer Lab</p>
                  </div>
                </div>
              </CarouselSlides>
            </CustomeCrousel>
          </div>
        </div>
      </div>
      <div className="course-details-alterImgbox d-flex align-items-center mt-5 pt-5">
        <div className="course-details-alterImgbox-col2 position-relative">
          <img src={cdIcon} alt="" />
        </div>
        <div className="course-details-alterImgbox-col1 green-bg">
          <h2 className="text-white">
            Are you feeling lost and unsure about what <span>career path to take after completing 12th standard?</span>
          </h2>
          <p>Say goodbye to confusion and hello to a bright future!</p>
          <Link className="theme-btn white-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>Ask Our Experts</Link>
        </div>
      </div>
      <div className="py-5 mt-4">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h1 className="exam-center-calenderTxt1 text-center">
              Will you get
              <span>{` Admission in ${collegeDetails?.college_name}`}</span>
            </h1>
          </div>
          <div className="col-md-2 text-center">
            <img src={yellowCircleIcon} alt="" />
          </div>
          <div className="col-md-5 text-center">
            <h1 className="exam-center-calenderTxt">Goodbye doubts! Say hello to our experts</h1>
            <Link className="theme-btn black-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>Ask A Question</Link>
          </div>
        </div>
      </div>

      {facultyData.length > 0 && (
        <>
          <div className="tick-heading d-flex align-items-center mb-4">
            <span className="tick-heading-icon d-inline-flex">
              <img src={greyTickIcon} alt="" />
            </span>
            <h2>{`${collegeDetails?.college_name} Faculty`}</h2>
          </div>
          <div className="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
            <div className="swiper faculty-slider-slider">
              <div className="swiper-wrapper">
                {/* <CustomSwiper
                  navigationNext={'.clg-faculty-button-next'}
                  navigationPrev={'.clg-faculty-button-prev'}
                  noOfSlidesPerView={3}
                  isBreakPoint={true}
                  breakPoint={swiperResponsive(responsive)}
                >
                  {facultyData?.map((faculty) => (
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="faculty-slider-box">
                          <img
                            className="faculty-slider-box-img"
                            src={
                              (faculty?.image_path && faculty?.image_path !== '') ? constants.assestAbsolutePath + faculty?.image_path : avtar
                            }
                            alt="Faculty Image"
                          />
                          <p>
                            {`Prof. ${faculty?.faculty_name}`}
                            <br />
                            <span>{`Dept. ${faculty?.department}`}</span>
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                  ))}
                </CustomSwiper>
                <div className="swiper-button-prev clg-faculty-button-prev">
                  <img src={arrowLeftIcon} alt="" />
                </div>
                <div className="swiper-button-next clg-faculty-button-next">
                  <img src={arrowRightIcon} alt="" />
                </div> */}
                <CustomeCrousel
                  navigatePrev={'clg-faculty-button-prev'}
                  navigateNext={'clg-faculty-button-next'}
                  itemsPerView={3}
                  isAutoScroll={false}
                  breakPoints={responsive}
                  // animation={'Card-Zoom-Effect'}
                  autoScrollPauseOnMouseEnter={true}
                >
                {facultyData?.map((faculty) => (
                  <CarouselSlides>
                    <div className="swiper-slide">
                      <div className="faculty-slider-box">
                        <img
                          className="faculty-slider-box-img"
                          src={
                            (faculty?.image_path && faculty?.image_path !== '') ? constants.assestAbsolutePath + faculty?.image_path : avtar
                          }
                          alt="Faculty Image"
                        />
                        <p>
                          {`Prof. ${faculty?.faculty_name}`}
                          <br />
                          <span>{`Dept. ${faculty?.department}`}</span>
                        </p>
                      </div>
                    </div>
                  </CarouselSlides>
                ))}
                </CustomeCrousel>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

CollegeFacilities.propTypes = {
  collegeDetails: PropTypes.shape({
    college_name: PropTypes.string,
    description: PropTypes.shape({
      college_admission_description: PropTypes.string,
    }),
  }).isRequired,
  getCurrentYear: PropTypes.func.isRequired,
  swiperResponsive: PropTypes.func.isRequired,
  readmore: PropTypes.object.isRequired,
  // responsive: PropTypes.object.isRequired,
  facultyData: PropTypes.array.isRequired,

  audienceIcon: PropTypes.string.isRequired,
  hostelIcon: PropTypes.string.isRequired,
  arrowLeftIcon: PropTypes.string.isRequired,
  arrowRightIcon: PropTypes.string.isRequired,
  cdIcon: PropTypes.string.isRequired,
  greyTickIcon: PropTypes.string.isRequired,
  canteenIcon: PropTypes.string.isRequired,
  yellowCircleIcon: PropTypes.string.isRequired,
  avtar: PropTypes.string.isRequired,
};
export default CollegeFacilities;
