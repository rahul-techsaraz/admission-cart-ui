import React, { useEffect, useState } from 'react';
import constants from '../../constants';
import { Link, useSearchParams } from 'react-router-dom';
import './trendingCollegeCard.css';
import { useDispatch } from 'react-redux';
import { toggelIsLoginPopup } from '../../../../features/commonSlice';

const TrendingCollegesCard = ({ college, index, updateActiveIndex, realIndex, toggelScroll, ishidden, isModal }) => {
  const { authenticateUser } = useSearchParams((state) => state.common);
  const dispatch = useDispatch();
  // const getRandomInt = (min, max) => {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min)) + min;
  // }
  const handleClick = (from) => {
    console.log('from click');
    if (!authenticateUser) {
      dispatch(toggelIsLoginPopup({ flag: true }));
    }
  };
  const isOdd = (i) => {
    if (i % 2 === 1) {
      return true;
    } else {
      return false;
    }
  };
  const handleMouseEnter = () => {
    updateActiveIndex(index);
    toggelScroll(false);
  };
  const handleMouseLeave = () => {

    updateActiveIndex(null);
    toggelScroll(true);
  };

  return (
    <div className={ishidden ? 'hidden' : isModal ? "col-12 clg-listing-box-modal" : 'col-12'}>
      <div
        className={isOdd(realIndex) ? 'clg-listing-box bg-yellow' : 'clg-listing-box bg-green'}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="course_card_main_box">
          <div className="course_card_1stimgbox">
            <img
              src={constants.imageAbsolutePath + college?.college_thumbnail}
              className="course_card_images_img"
              alt="College Thumbnail"
            />
            <div className="course_card_1stimgbox_text_logo_parents">
              <div className="course_card_1stimgbox_text_logo">
                <img
                  className="course_card_1stimgbox_img_logo_logo_img"
                  src={constants.imageAbsolutePath + college?.college_logo}
                  alt="college Logo"
                />
                <div className="course_card_2ndtextbox_rating">
                  <p className="course_card_2ndtextbox_rating_star_number">
                    <i class="fa-solid fa-star"></i> {college?.ratings}/5
                  </p>
                  <p className="course_card_2ndtextbox_reviews">300 + reviews</p>
                </div>
              </div>
              <div className="course_card_1stimgbox_img_logo">
                <div className="course_card_1stimgbox_img_logo_logo">
                  <div className="course_card_1stimgbox_img_logo_collages_name_address">
                    <h2 className="course_card_1stimgbox_img_logo_collages_name">{college?.college_name}</h2>
                    <p className="course_card_1stimgbox_img_logo_collages_address">
                      {college?.city + ', ' + college?.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="course_card_2ndtextbox">
            <div className="course-name_rating_parents_box course-name_rating_parents_box-2">
              <div className="course_card_2ndtextbox_course-name">
                <h3 className="course_card_2ndtextbox_course-name_h3">{college?.category_name}</h3>
                <p className="course_card_2ndtextbox_course-name_p">
                  <span className="course_card_2ndtextbox_course-name_p_span">2.31 Lacs</span> First Year Fees
                </p>
              </div>
            </div>
            <Link
              to={authenticateUser && `/colleges_details/${college.college_id}`}
              className={!isModal ? 'hidden' : 'course-name_compare_parents_box'}
              onClick={() => handleClick('View')}
            >
              <div className="course-name_courses_fees_parents_box">
                View All Courses and Fees
                <span className="course-name_courses_fees_parents_box_icon">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </div>
            </Link>
            <div
              className={!isModal ? 'hidden' : 'course-name_download_brochure_parents_box'}
              onClick={() => handleClick('Download')}
            >
              Download Brochure
              <span className="course-name_courses_fees_parents_box_icon">
                <i class="fa-solid fa-angle-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollegesCard;
