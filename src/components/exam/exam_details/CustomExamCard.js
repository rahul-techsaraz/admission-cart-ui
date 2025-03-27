import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsLoginPopup } from '../../../features/commonSlice';
import examCalenderImage from '../../../images/calendar-icon.svg';
import examOverviewImage from '../../../images/overview-icon.svg';
import examImpDateImage from '../../../images/imp-date-icon.svg';
import examAppFormImage from '../../../images/app-form-icon.svg';
import examElgiIconImage from '../../../images/eligi-icon.svg';
import examAdmitCardIconImage from '../../../images/admit-card-icon.svg';
import examRegisterIconImage from '../../../images/register-icon.svg';
import { Link } from 'react-router-dom';

const CustomExamCard = ({exam}) => {
    const { authenticateUser } = useSelector((state) => state.common);
  const [ishidden, setIsHidden] = useState(true)
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!authenticateUser) {
    dispatch(toggelIsLoginPopup({ flag: true }));
    }
    };
  return (
    <div className="col-12" onMouseEnter={()=>setIsHidden(false)} onMouseLeave={()=>setIsHidden(true)}>
        <div className="exam-listing-box position-relative">
            <p className="exam-name-listing-box d-inline-block">{exam?.exam_name}</p>
            <div className="exam-listing-box-content">
            <div className="exam-listing-flex-box d-flex justify-content-between text-center">
                <div className="d-flex gap-2 mb-3 flex-column application-exam-date-text">
                <div className="calender-icon-circle-parent">
                    <span className="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                    <img src={examCalenderImage} alt="examCalenderImage" />
                    </span>
                </div>

                <div className="calender-h2-parent">
                    <h2 className="exam-dateinfo m-0">
                    Application Date
                    <span className="date">{exam?.application_start_date}</span>
                    </h2>
                </div>
                </div>
                <div className="d-flex gap-2 flex-column application-exam-date-text">
                <div className="calender-icon-circle-parent">
                    <span className="calender-icon-circle green-bg d-inline-flex align-items-center justify-content-center">
                    <img src={examCalenderImage} alt="" />
                    </span>
                </div>

                <div className="calender-h2-parent">
                    <h2 className="exam-dateinfo m-0">
                    Exam Date
                    <span className="date">{`${exam?.exam_start_date} to ${exam?.exam_end_date}`}</span>
                    </h2>
                </div>
                </div>
            </div>

            <ul className="exam-imp-list">
                <li className="exam-imp-list-width-50">
                <div className="d-flex align-items-center gap-2 lg-gap-1 xl-gap-2">
                    <img src={examOverviewImage} alt="" />
                    Overview
                </div>
                </li>
                <li className="exam-imp-list-width-50">
                <div className="d-flex align-items-center gap-2">
                    <img src={examImpDateImage} alt="" />
                    Important Date
                </div>
                </li>
                <li className="exam-imp-list-width-50">
                <div className="d-flex align-items-center gap-2">
                    <img src={examAppFormImage} alt="" />
                    Application Form
                </div>
                </li>
                <li className="exam-imp-list-width-50">
                <div className="d-flex align-items-center gap-2">
                    <img src={examElgiIconImage} alt="" />
                    Eligibility
                </div>
                </li>
                <li className="exam-imp-list-width-50">
                <div className="d-flex align-items-center gap-2">
                    <img src={examAdmitCardIconImage} alt="" />
                    Admit Card
                </div>
                </li>
            </ul>
            {/* <button className='examcard_applynow_button'>Apply Now</button> */}
            </div>
            {/* <Link className="register-btn yellow-bg" to={`/exam_details/${exam?.exam_id}`}><img src={examRegisterIconImage} alt="" /> View Details</Link>
                    <Link className="exam-apply-btn examcard_applynow_button yellow-bg" to={`/exam_details/${exam?.exam_id}`}>Apply Now</Link> */}
            <Link to={authenticateUser && `/exam_details/${exam?.exam_id}`} className={ishidden ? 'hidden' : ''} onClick={()=>handleClick()}>
            <div className={"course-readmore-btn course-readmore-btn2 course-card-hover"}>Enquire Now </div>
            </Link>
        </div>
    </div>
  )
}

export default CustomExamCard