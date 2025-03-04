import React, { useEffect, useState } from 'react'
import examCalenderImage from '../../../images/calendar-icon.svg';
import examOverviewImage from '../../../images/overview-icon.svg';
import examImpDateImage from '../../../images/imp-date-icon.svg';
import examAppFormImage from '../../../images/app-form-icon.svg';
import examElgiIconImage from '../../../images/eligi-icon.svg';
import examAdmitCardIconImage from '../../../images/admit-card-icon.svg';
import examRegisterIconImage from '../../../images/register-icon.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomPagination from '../../../utils/Constants/custom-components/CustomPagination';

export default function ExamCard({data}) {
    const {allExamData}=useSelector(state=>state.common)
    const [examData, setExamData] = useState([])
    useEffect(()=>{
        if(data){
            setExamData(data)
        }
    },[data])
  return (
    <>
        
            {examData.map((exam)=>(
            <div class="col-lg-4 col-md-6">
                <div class="exam-listing-box position-relative">
                    <p class="exam-name-listing-box d-inline-block">{exam?.exam_name}</p>
                    <div class="exam-listing-box-content">
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <div className='calender-icon-circle-parent'>
                            <span class="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                <img src={examCalenderImage} alt="examCalenderImage" />
                            </span>
                            </div>

                            <div className='calender-h2-parent'>
                            <h2 class="exam-dateinfo m-0">Application Date
                                <span class="date">{exam?.application_start_date}</span>
                            </h2>
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                        <div className='calender-icon-circle-parent'>
                            <span class="calender-icon-circle green-bg d-inline-flex align-items-center justify-content-center">
                                <img src={examCalenderImage} alt="" />
                            </span>
                            </div>

                            <div className='calender-h2-parent'>
                            <h2 class="exam-dateinfo m-0">Exam Date
                                <span class="date">{`${exam?.exam_start_date} to ${exam?.exam_end_date}`}</span>
                            </h2>
                            </div>
                        </div>
                        <ul class="exam-imp-list">
                            <li>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={examOverviewImage} alt="" />
                                    Overview
                                </div>
                            </li>
                            <li>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={examImpDateImage} alt="" />
                                    Important Date
                                </div>
                            </li>
                            <li>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={examAppFormImage} alt="" />
                                    Application Form
                                </div>
                            </li>
                            <li>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={examElgiIconImage} alt="" />
                                    Eligibility
                                </div>
                            </li>
                            <li>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={examAdmitCardIconImage} alt="" />
                                    Admit Card
                                </div>
                            </li>
                        </ul>
                        {/* <button className='examcard_applynow_button'>Apply Now</button> */}

                    </div>
                    <Link class="register-btn yellow-bg" to={`/exam_details/${exam?.exam_id}`}><img src={examRegisterIconImage} alt="" /> View Details</Link>
                    <Link class="exam-apply-btn examcard_applynow_button yellow-bg" to={`/exam_details/${exam?.exam_id}`}>Apply Now</Link>
                </div>
            </div>
            ))}
        <div class="row">
            <CustomPagination data={allExamData} itemsPerPage={6} currentItemsParent={setExamData}/>
        </div>
    </>
  )
}
