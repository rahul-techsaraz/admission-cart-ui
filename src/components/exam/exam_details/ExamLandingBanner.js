import React from 'react';
import alertIcon from '../../../images/alert-icon.svg';
import { formatDate } from '../../../utils/formatDate';
export default function ExamLandingBanner({ examDetails }) {
  console.log({ examDetails });
  return (
    <section className="inner-pagebanner-section text-center pt-50 pb-50 position-relative">
      <div className="container">
        <h1>
          {examDetails?.exam_name} {examDetails?.exam_year}
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
            <span> {formatDate(examDetails?.application_start_date)}</span>
          </p>
          {/* <p className="regis-alert-txt2 d-flex align-items-center justify-content-center"> <span className="ylw-circle me-2"></span>Set Exam alert</p> */}
        </div>
      </div>
    </section>
  );
}
