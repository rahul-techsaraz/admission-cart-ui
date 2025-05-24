import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomSwiper from '../../../../utils/Constants/custom-components/CustomSwiper';
import CustomCourseCard from '../../../courses/course_details/CustomCourseCard';
import { toggelIsContactUs } from '../../../../features/commonSlice';
import { useDispatch } from 'react-redux';

const CollageAdmissionProcess = ({
  collegeDetails,
  downloadIcon,
  getCurrentYear,
  greyTickIcon,
  responsive1,
  swiperResponsive,
  arrowLeftIcon,
  arrowRightIcon,
  askQuesImage,
  getAllCourseDataById,
  courseOffered,
}) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-9">
          <div className="download-content-box text-center">
            <img src={downloadIcon} className="mb-4" alt="" />
            <h2 className="mb-4">
              <span className="d-block">Get details on</span>{' '}
              {`Fee, Cut off marks, Admission Process for session ${getCurrentYear()}.`}
            </h2>
            <div className="d-flex justify-content-center gap-3 align-items-center download-btn-sec">
              <p>Download brochure</p>
              <Link className="theme-btn black-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>Ask A Question</Link>
            </div>
          </div>
        </div>
      </div>

      {courseOffered.length > 0 && (
        <>
          <div className="tick-heading d-flex align-items-center mb-4 mt-5">
            <span className="tick-heading-icon d-inline-flex">
              <img src={greyTickIcon} alt="" />
            </span>
            <h2>{`${collegeDetails?.college_name} Courses Offered`}</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                <div className="swiper course-offered-slider pb-5">
                  <div className="swiper-wrapper">
                    <CustomSwiper
                      navigationNext={'.courseOffer-button-next'}
                      navigationPrev={'.courseOffer-button-prev'}
                      noOfSlidesPerView={1}
                      isBreakPoint={true}
                      breakPoint={swiperResponsive(responsive1)}
                    >
                      {courseOffered.length > 0 &&
                        getAllCourseDataById().map((course) => (
                          <swiper-slide key={course.id || course.course_name}>
                            <CustomCourseCard course={course} isSwiper={true} />
                          </swiper-slide>
                        ))}
                    </CustomSwiper>
                    <div className="swiper-button-prev courseOffer-button-prev">
                      <img src={arrowLeftIcon} alt="" />
                    </div>
                    <div className="swiper-button-next courseOffer-button-next">
                      <img src={arrowRightIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="course-details-alterImgbox d-flex align-items-center">
        <div className="course-details-alterImgbox-col1 green-bg">
          <h2 className="text-white">
            Still have questions about <span>{`${collegeDetails?.college_name}?`}</span>
          </h2>
          <p>Ask us and get personalized</p>
          <Link className="theme-btn white-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>Ask A Question</Link>
        </div>
        <div className="course-details-alterImgbox-col2 position-relative">
          <img src={askQuesImage} alt="" />
        </div>
      </div>
    </>
  );
};

// ✅ Props Validation
CollageAdmissionProcess.propTypes = {
  collegeDetails: PropTypes.shape({
    college_name: PropTypes.string,
    courses_offered: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  downloadIcon: PropTypes.string.isRequired,
  getCurrentYear: PropTypes.func.isRequired,
  greyTickIcon: PropTypes.string.isRequired,
  responsive1: PropTypes.object.isRequired,
  swiperResponsive: PropTypes.func.isRequired,
  arrowLeftIcon: PropTypes.string.isRequired,
  arrowRightIcon: PropTypes.string.isRequired,
  askQuesImage: PropTypes.string.isRequired,
  getAllCourseDataById: PropTypes.func.isRequired,
};

export default CollageAdmissionProcess;
