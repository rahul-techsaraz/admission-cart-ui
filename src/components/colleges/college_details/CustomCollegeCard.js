import React, { useState } from 'react';
import constants from '../../../utils/Constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../../../features/commonSlice';
import { Link } from 'react-router-dom';

export const CustomCollegeCard = ({ college, isModal }) => {
  const { authenticateUser } = useSelector((state) => state.common);
  const [ishidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const handleMouseEnter = () => {
    console.log('mouse enter trigred');
    setIsHidden(false);
  };
  const handleMouseLeave = () => {
    console.log('mouse leave trigred');
    setIsHidden(true);
  };
  const handleClick = () => {
    if (!authenticateUser) {
      dispatch(toggelIsLoginPopup({ flag: true }));
    }
  };
  return (
    <div className="" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
      <div className="collage_card_main_box">
        <div className="collage_card_1stimgbox">
          <img
            src={constants.assestAbsolutePath + college?.college_thumbnail}
            className="collages_card_images_img"
            alt="College Thumbnail"
          />
          <div className="collage_card_1stimgbox_text_logo_parents">
            <div className="collage_card_1stimgbox_text_logo">
              <img
                className="collage_card_1stimgbox_img_logo_logo_img"
                src={constants.assestAbsolutePath + college?.college_logo}
                alt="college Logo"
              />
              {/* <span className="span_text">118/1800</span> */}
            </div>
            <div className="collage_card_1stimgbox_img_logo">
              <div className="collage_card_1stimgbox_img_logo_logo">
                <div className="collage_card_1stimgbox_img_logo_collages_name_address">
                  <h2 className="collage_card_1stimgbox_img_logo_collages_name">{college?.college_name}</h2>
                  <p className="collage_card_1stimgbox_img_logo_collages_address">
                    {college?.city + ', ' + college?.state}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collage_card_2ndtextbox">
          <div className="collage-name_rating_parents_box">
            <div className="collage_card_2ndtextbox_course-name">
              {college?.category_name?.map((categoryName) => (
                <h3 className="collage_card_2ndtextbox_course-name_h3">{categoryName}</h3>
              ))}
              <p className="collage_card_2ndtextbox_course-name_p">
                <span className="collage_card_2ndtextbox_course-name_p_span">{college?.fee_starting}</span> Starting Fee
              </p>
            </div>
            <div className="collage_card_2ndtextbox_rating">
              <p className="collage_card_2ndtextbox_rating_star_number">
                <i className="fa-solid fa-star"></i> {college?.ratings}/5
              </p>
              <p className="collage_card_2ndtextbox_reviews">{getRandomInt(1, 300)}+ reviews</p>
            </div>
          </div>
          {/* <hr className={ishidden ? 'hidden' : 'collages-list-hr'}/> */}

          <div className={!isModal ? 'hidden' : 'tranding-collage-card-on'}>
            <Link
              to={authenticateUser && `/colleges_details/${college.college_id}`}
              className="collage-name_courses_fees_parents_box2"
              onClick={() => handleClick()}
            >
              <div className="collage-name_courses_fees_parents_box">
                View All Courses and Fees
                {/* <span className="collage-name_courses_fees_parents_box_icon">
                <i className="fa-solid fa-angle-right"></i>
              </span> */}
              </div>
            </Link>
            {/* <hr className={ishidden ? "hidden" : 'collages-list-hr'}/> */}
            <div className="collage-name_download_brochure_parents_box" onClick={() => handleClick()}>
              Download Brochure
              {/* <span className="collage-name_courses_fees_parents_box_icon">
              <i className="fa-solid fa-angle-right"></i>
            </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
