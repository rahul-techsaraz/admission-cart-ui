import React, { useEffect, useState } from 'react';
// import sandclassNameIcon from '../../../images/sandglass-icon.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../../../features/commonSlice';

const CustomCourseCard = ({ course, isModal }) => {
  const { authenticateUser } = useSelector((state) => state.common);
  const [ishidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!authenticateUser) {
      dispatch(toggelIsLoginPopup({ flag: true }));
    }
  };
  // useEffect(()=>{
  //     console.log(course)
  // },[course])
  return (
    <div className="" onMouseEnter={() => setIsHidden(false)} onMouseLeave={() => setIsHidden(true)}>
      {/* <Link to={`/courses_details/${course.course_id}`}> */}
      <div class="course-card">
        <div class="course-card-header">
          <h3 class="course-name">{course.course_name}</h3>
          {/* <div className='course-title-mode-parents-box'> */}
          <div class="course-title-group">
            <p class="sub-course-name">{course.sub_course_name}</p>
          </div>
          <div className='course-mode-box-parents'>
          <div class="course-mode">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>{course?.course_mode}</span>
          </div>
          </div>
        {/* </div> */}
        </div>
        <div class="course-card-body">
          <div class="course-info-item">
            <span class="info-label">Duration:</span>
            <span class="info-value">{course?.course_duration} Years</span>
          </div>
          <div class="course-info-item">
            <span class="info-label">Fee:</span>
            
            <div class="info-value">
              <span>₹{course?.course_fee_min} -</span> <span>₹{course?.course_fee_max}</span>
            </div>
            
          </div>
        </div>
        <div class="course-card-additional-info">
          <div class="info-tag-group">
            <span class="info-tag type-tag">{course?.course_standard}</span>
            <span class="info-tag freq-tag">{course?.exam_frequency}</span>
          </div>
          {course?.course_categories.map((category) => (
            <div class="info-category" key={category}>
              {category}
            </div>
          ))}
        </div>
        {/* {course.is_trending ? (
          <div class="trending-tag">
            <i class="fa-solid fa-arrow-trend-up"></i> Trending
          </div>
        ) : null} */}
        <Link
          to={authenticateUser && `/courses_details/${course.course_id}`}
          onClick={() => handleClick()}
          className={!isModal ? 'hidden' : ''}
        >
          <div className="course-readmore-btn course-readmore-btn2 course-card-hover">Enquire Now </div>
        </Link>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default CustomCourseCard;
