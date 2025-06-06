import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../../../images/arrow-right-icon.svg';
import './trendingCourseCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../../../../features/commonSlice';

const TrendingCourseCard = ({ course, isModal }) => {
  const dispatch = useDispatch();
  const { authenticateUser } = useSelector((state) => state.common);
  const handleClick = () => {
    if (!authenticateUser) {
      dispatch(toggelIsLoginPopup({ flag: true }));
    }
  };
  return (
    <div className="trending-course-container">
      <div className="course-box text-start course_box_childtext">
        <h3 className="courses_card_categroy">Information Technology</h3>
        <hr className="courses_card_hr" />
        <div className="course-name-text">
          <p className="course-name mb-1">
            {course?.slug}
            <br /> Management
          </p>
        </div>
        <div className="courses_card_flexbox">
          <span className="courses_card_flexbox-i">
            <span className="courses_card_flexbox-i-i">
              <i className="fa-solid fa-clock"></i>
            </span>
            2 - 3 Years
          </span>
          <span className="courses_card_flexbox-i">
            <i className="fa-solid fa-tags"></i>Regular
          </span>
        </div>
        <Link
          className={!isModal ? 'hidden' : 'course-readmore-btn course-readmore-btn-position'}
          to={authenticateUser && '/courses_list'}
          onClick={() => handleClick()}
        >
          Read More <img src={rightArrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default TrendingCourseCard;
