import React from 'react';
import './trendingExamCard.css';
import { Link } from 'react-router-dom';
import rightArrow from '../../../../images/arrow-right-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../../../../features/commonSlice';

const TrendingExamCard = ({ exam, isModal }) => {
  const dispatch = useDispatch();
  const { authenticateUser } = useSelector((state) => state.common);
  const handleClick = () => {
      if (!authenticateUser) {
        dispatch(toggelIsLoginPopup({ flag: true }));
      }
    };
  return (
    <div className="swiper-slide position-relative">
      <div className="course-box text-start course-box-heigh-set">
        <div className="course-box-img">
          {/* <img src={scollarship} className="scollarship-icon" alt="" /> */}
          <div className="course-box-p-parent">
            <p className="course-name tranding_exam_details_heading">{exam.exam_name}</p>
          </div>
        </div>
        {/* <div className='course-box-p-parent'><p className="course-name">{exam.exam_name}</p></div> */}
        <div className="course-box-p-parent2">
          <p className="course-numbering">{exam.category_name}</p>
        </div>
        <div className="course-box-p-parent3">
          <div className="course-box_parent3-child">
            <div className="course-box-prents3-child-in-child1">
              <h3 className="course-box-prents3-child-in-child1-h3">Admit Card</h3>
              <div className="course-box-prents3-child-in-child1-confirmed tranding_tooltip">
                <i className="fa-solid fa-circle-info"></i>
                <span className="tooltiptext">Confirmed</span>
              </div>
            </div>
            <div className="course-box-prents3-child-in-child1-date">07 Mar 25</div>
          </div>

          <div className="course-box_parent3-child2">
            <div className="course-box-prents3-child-in-child1">
              <h3 className="course-box-prents3-child-in-child1-h3">Exam</h3>
              <div className="course-box-prents3-child-in-child1-confirmed tranding_tooltip">
                <i className="fa-solid fa-circle-info"></i>
                <span className="tooltiptext">Confirmed</span>
              </div>
            </div>
            <div className="course-box-prents3-child-in-child1-date">07 Mar 25</div>
          </div>

          {/* <div className="course-box_parent3-child3">
                    <div className='course-box-prents3-child-in-child1'>
                        <h3 className='course-box-prents3-child-in-child1-h3'>Answer Key Release</h3>
                        <div className='course-box-prents3-child-in-child1-confirmed'>Tentative</div>
                    </div>
                    <div className='course-box-prents3-child-in-child1-date'>07 Mar 25</div>
                </div> */}
        </div>
        <Link className={!isModal ? 'hidden' : "course-readmore-btn course-readmore-btn2"} to={authenticateUser && `/exam_details/${exam.exam_id}`} onClick={()=>handleClick()}>
          Enquire Now <img src={{ rightArrow }} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default TrendingExamCard;
