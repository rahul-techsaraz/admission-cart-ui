import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../../../images/arrow-right-icon.svg';
import scollarship from '../../../../images/scholarship-icon.svg';
import './trendingCourseCard.css';

const TrendingCourseCard = ({ course }) => {
  return (
    <div className="swiper-slide">
      <div className="course-box text-start course_box_childtext">
        {/* <img src={scollarship} className="scollarship-icon" alt="" /> */}
        <h3 className="courses_card_categroy">Information Technology</h3>
        <hr className="courses_card_hr" />
        <div className="course-name-text">
          <p className="course-name mb-1">
            {course.course_name}
            <br /> Management
          </p>
        </div>
        <div className="courses_card_flexbox">
            <span className="courses_card_flexbox-i"><span className="courses_card_flexbox-i-i"><i class="fa-solid fa-clock"></i></span>2 - 3 Years</span>
            <span className="courses_card_flexbox-i"><i class="fa-solid fa-tags"></i>Regular</span>
          </div>
        {/* <p className="course-numbering mb-2">01.</p> */}
        {/* <p className="course-para text-start p-0">
          Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor
        </p> */}
        <Link className="course-readmore-btn course-readmore-btn-position" to={'/courses_list'}>
          Read More <img src={rightArrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default TrendingCourseCard;
