import React from 'react'
import alertIcon from '../../../images/alert-icon.svg';
export default function ExamLandingBanner() {
  return (
     <section className="inner-pagebanner-section text-center pt-50 pb-50 position-relative">
         <div className="container">
            <h1>JEE Main 2024</h1>
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item active" aria-current="page">home/exam/engineering college entrance exams/JEE Main exam 2024  </li>
               </ol>
            </nav>
            <div className="registration-right-alertbx">
                <img className="regis-alert-icon" src={alertIcon} alt="alertIcon" />
                <p className="regis-alert-txt1">Registration starts On
                    <span>December 08, 2023</span></p>
                <p className="regis-alert-txt2 d-flex align-items-center justify-content-center"> <span className="ylw-circle me-2"></span>Set Exam alert</p>
            </div>
         </div>
      </section> 
  )
}
