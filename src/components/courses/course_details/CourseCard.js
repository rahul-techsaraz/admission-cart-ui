import React, { useEffect, useState } from 'react'
import courseIcon1 from '../../../images/course/course-icon1.svg';
import courseIcon2 from '../../../images/course/course-icon2.svg';
import courseIcon3 from '../../../images/course/course-icon3.svg';
import courseIcon4 from '../../../images/course/course-icon4.svg';
import courseIcon5 from '../../../images/course/course-icon5.svg';
import courseIcon6 from '../../../images/course/course-icon6.svg';
import courseIcon7 from '../../../images/course/course-icon7.svg';
import courseIcon8 from '../../../images/course/course-icon8.svg';
import courseIcon9 from '../../../images/course/course-icon9.svg';
import courseIcon10 from '../../../images/course/course-icon10.svg';
import courseIcon11 from '../../../images/course/course-icon11.svg';
import courseIcon12 from '../../../images/course/course-icon12.svg';
import sandclassNameIcon from '../../../images/sandglass-icon.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomPagination from '../../../utils/Constants/custom-components/CustomPagination';

export default function CourseCard({data}) {
    const {allCourseData} = useSelector(state=>state.common)
    const [courseData, setCourseData] = useState([])
    console.log(allCourseData)
    const courseImage = {
        image : '',
        course : '',
    }
    useEffect(()=>{
        if(data){
            setCourseData(data)
        }
    },[data])
  return (
    <>
        <div className="row">
        {courseData.map((course)=>(
            
            <div className="col-md-4">
                <Link to={`/courses_details/${course.course_id}`}>
                <div className="course-listing-box align-items-center mb-4">
                    <div className="course-post-contentBx">
                        <h2 className="course-title">{course.course_name}</h2>
                        <p className="course-para">{course.course_description.slice(0, 100)}</p>
                        <Link className="course-moredetails-btn">More Details</Link>
                        <div className="d-flex flex-wrap course-infowrapper">
                            <div className="course-infobx d-inline-flex align-items-center">
                                <span className="course-info-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                                    <img src={sandclassNameIcon} alt=""/>
                                </span>
                                <p className="course-info-title">Average Duration <span>{course.course_duration} years</span></p>
                            </div>
                            <div className="course-infobx d-inline-flex align-items-center">
                                <span className="course-info-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                                    <img src={sandclassNameIcon} alt=""/>
                                </span>
                                <p className="course-info-title">Average Fees <span>{course.course_fee_min} K-{course.course_fee_max} L  INR</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        ))}
        </div>
        <div className="row">
            <CustomPagination data={allCourseData} itemsPerPage={6} currentItemsParent={setCourseData}/>
        </div>
    </>
  )
}
