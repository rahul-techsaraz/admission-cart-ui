import React from 'react';
import alertIcon from '../../../images/alert-icon.svg';
import { useSelector } from 'react-redux';
export default function ExamLandingBanner() {
  const { examDetailsById } = useSelector((state) => state.common);
  return (
    <section className="inner-pagebanner-section text-center pt-50 pb-50 position-relative">
      <div className="container">
        <h1>
          {examDetailsById?.examBasicDetails?.exam_name} {examDetailsById?.examBasicDetails?.exam_year}
        </h1>
        {/* <nav aria-label="breadcrumb">
               <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item active" aria-current="page">home/exam/engineering college entrance exams/JEE Main exam 2024  </li>
               </ol>
            </nav> */}
        <div className="registration-right-alertbx">
          <img className="regis-alert-icon" src={alertIcon} alt="alertIcon" />
          <p className="regis-alert-txt1">
            Registration starts On
            <span> {examDetailsById?.examBasicDetails?.application_start_date}</span>
          </p>
          {/* <p className="regis-alert-txt2 d-flex align-items-center justify-content-center"> <span className="ylw-circle me-2"></span>Set Exam alert</p> */}
        </div>
      </div>
    </section>
  );
}
