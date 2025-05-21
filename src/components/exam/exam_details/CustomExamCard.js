import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../../../features/commonSlice';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils/formatDate';

const CustomExamCard = ({ exam, isModal }) => {
  const { authenticateUser } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!authenticateUser) {
      dispatch(toggelIsLoginPopup({ flag: true }));
    }
  };
  return (
    <div className="">
      <div className="exam-listing-box position-relative">
        <div class="course-card">
          <div class="course-card-header">
            <div class="course-title-group">
              <h3 class="course-name">{exam.exam_name}</h3>
              <p class="sub-course-name">{exam.exam_year}</p>
            </div>
            <div class="course-mode">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>{exam?.exam_mode}</span>
            </div>
          </div>
          <div class="course-card-body">
            <div class="course-info-item">
              <span class="info-label">Duration:</span>
              <span class="info-value">{exam?.exam_duration} Minutes</span>
            </div>
            <div class="course-info-item">
              <span class="info-label">Application Start Date:</span>
              <span class="info-value">{formatDate(exam?.application_start_date)}</span>
            </div>
            <div class="course-info-item">
              <span class="info-label">Application End Date:</span>
              <span class="info-value">{formatDate(exam?.application_end_date)}</span>
            </div>
          </div>
          <div class="course-card-additional-info">
            <div class="info-tag-group">
              <span class="info-tag freq-tag">{exam?.exam_frequency}</span>
            </div>
            {exam?.exam_category.map((category) => (
              <span class="info-category" key={category}>
                {category}
              </span>
            ))}
          </div>
          {exam.is_trending ? (
            <div class="trending-tag">
              <i class="fa-solid fa-arrow-trend-up"></i> Trending
            </div>
          ) : null}
          <Link
            to={authenticateUser && `/exam_details/${exam?.exam_id}`}
            className={!isModal ? 'hidden' : ''}
            onClick={() => handleClick()}
          >
            <div className={'course-readmore-btn course-readmore-btn2 course-card-hover'}>Enquire Now </div>
          </Link>
        </div>
        {/* <Link className="register-btn yellow-bg" to={`/exam_details/${exam?.exam_id}`}><img src={examRegisterIconImage} alt="" /> View Details</Link>
                    <Link className="exam-apply-btn examcard_applynow_button yellow-bg" to={`/exam_details/${exam?.exam_id}`}>Apply Now</Link> */}
      </div>
    </div>
  );
};

export default CustomExamCard;
