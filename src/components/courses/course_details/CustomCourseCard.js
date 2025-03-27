import React, { useEffect, useState } from 'react';
import sandclassNameIcon from '../../../images/sandglass-icon.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../../../features/commonSlice';

const CustomCourseCard = ({ course }) => {
  const { authenticateUser } = useSelector((state) => state.common);
  const [ishidden, setIsHidden] = useState(true)
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
    <div className='col-12' onMouseEnter={()=>setIsHidden(false)} onMouseLeave={()=>setIsHidden(true)}>
      {/* <Link to={`/courses_details/${course.course_id}`}> */}
        <div className="course-listing-box align-items-center mb-4">
          <div className="course-post-contentBx">
            {/* <div className="course-box-img">
                            <img src="/static/media/scholarship-icon.a58590de458b29a1a0ffcd163c4c712a.svg" class="scollarship-icon" alt="Course Image"/>
                        </div> */}
            <div className="course-box-heading">
              <h2 className="course-title">{course?.course_name}</h2>
            </div>
            {/* <div className='course-box-para'>
                            <p className="course-para">{course?.course_description.length > 150 ? `${course?.course_description.slice(0, 150)}...` : course?.course_description}</p>
                        </div> */}
            {/* <div className='course-box-link'>
                            <Link className="course-moredetails-btn" to={`/courses_details/${course.course_id}`}>More Details</Link>
                        </div> */}
            <div className="d-flex flex-wrap course-infowrapper">
              <div className="course-infobx d-inline-flex align-items-center">
                <span className="course-info-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                  <img src={sandclassNameIcon} alt="" />
                </span>
                <p className="course-info-title">
                  Average Duration <span>{course?.course_duration} years</span>
                </p>
              </div>
              <div className="course-infobx d-inline-flex align-items-center">
                <span className="course-info-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                  <img src={sandclassNameIcon} alt="" />
                </span>
                <p className="course-info-title">
                  Average Fees
                  <span>
                    {course?.course_fee_min} K-{course?.course_fee_max} L INR
                  </span>
                </p>
              </div>
            </div>
            <Link to={authenticateUser && `/courses_details/${course.course_id}`} onClick={()=>handleClick()} className={ishidden ? 'hidden' : ''}>
              <div className="course-readmore-btn course-readmore-btn2 course-card-hover">Enquire Now </div>
            </Link>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default CustomCourseCard;
