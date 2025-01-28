import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExamDetailsUpdate from './ExamDetailsUpdate'
import ExamHighlights from './ExamHighlights'
import ExamSlider from './ExamSlider'
import TopCollegesAccesptingExam from './TopCollegesAccesptingExam';
import contractIcon from '../../../images/contract-icon.svg';
import cdImage from '../../../images/cd-img1.png';
import greyTick from '../../../images/grey-tick.svg';
import yellowCircle from '../../../images/yellow-circle-calender.png';
import arrowLeft from '../../../images/arrow-left-icon.svg';
import arrowRight from '../../../images/arrow-right-icon.svg';
import undrawImage from '../../../images/undraw_img.png';
import examStep3 from '../../../images/exam-step3info-img1.png';
import examStep3Info from '../../../images/exam-step3info-img2.png';
import examStep4Info from '../../../images/exam-step3info-img3.png';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper'
import constants from '../../../utils/Constants/constants'
import { useSelector } from 'react-redux'








export default function ExamDetailsLeftBox() {
  const [linkIndex, setLinkIndex] = useState(0)
  const [readmore, setReadmore] = useState(
    {
      exam_description: false,
      exam_conducting_body_description: false,
      exam_important_dates_description: false,
    })
  const [pData, setPData] = useState(constants.examDetailsList[0].pTagData)
  const {examDetailsById, allExamData}=useSelector(state=>state.common)
  console.log(examDetailsById)
  console.log(allExamData)
  const updateActive = (p, index)=>{
    setLinkIndex(index)
    setPData(p)
    //console.log(p)
  }
  const getAllExamByCategory = ()=>{
    const data = allExamData.filter((v)=>v?.category_name === examDetailsById?.examBasicDetails?.category_name && v?.exam_name !== examDetailsById?.examBasicDetails?.exam_name)
    return data
  }
  return (
   <div className="col-md-12">
        <div id="exam_details_leftBox" className="exam-details-leftBox">
          <h2 className="exam-details-yellow-heading mb-4 d-inline-block">{examDetailsById?.examBasicDetails?.exam_name} {examDetailsById?.examBasicDetails?.exam_year}</h2>
          <div className="exam-details-left-innerpara mb-5 ps-5">
            <p className="exam-details-para1">{(examDetailsById?.descriptionDetails?.exam_description.length > 100 && readmore.exam_description === false) ? `${examDetailsById?.descriptionDetails?.exam_description.slice(0,100)}...` : examDetailsById?.descriptionDetails?.exam_description}</p>
            {examDetailsById?.descriptionDetails?.exam_description.length > 100 &&
              <div className="text-start mt-5">
                <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, exam_description:!readmore.exam_description})}>{!readmore.exam_description ? 'Read More' : 'Read Less'}</Link>
              </div>
            }
            
          </div>
          <div className="course-details-alterImgbox d-flex align-items-center pb-5">
            <div className="course-details-alterImgbox-col1 green-bg">
              <h2 className="text-white">Start free <span>Mock Test Now</span>
              </h2>
              <p>No Problem! Speak to our experts safely from your home.</p>
              <Link className="theme-btn white-btn">Attempt Now</Link>
            </div>
            <div className="course-details-alterImgbox-col2 position-relative">
              <img src={cdImage} alt="" />
            </div>
          </div>
          {/* <div className="exam-details-latestupdate-sec mt-5">
            <h2 className="section-heading2 grey text-center mb-4">JEE Main 2024 Latest Updates</h2>
            <ExamDetailsUpdate />
            <div className="text-start mt-5">
              <Link className="course-details-readmore-btn btn">View More</Link>
            </div>
          </div> */}
          <ExamHighlights />
         <ExamSlider examDetailsById={examDetailsById}/>
          <div className="pt-4"></div>
          <div className="tick-heading d-flex align-items-center mb-4">
            <span className="tick-heading-icon d-inline-flex">
              <img src={greyTick} alt="" />
            </span>
            <h2>{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Conducting Body`}</h2>
          </div>
          <div className="exam-details-left-innerpara mb-5 ps-tick85">
            <p className="exam-details-para1">{(examDetailsById?.descriptionDetails?.exam_conducting_body_description.length > 100 && readmore.exam_conducting_body_description === false) ? `${examDetailsById?.descriptionDetails?.exam_conducting_body_description.slice(0,100)}...` : examDetailsById?.descriptionDetails?.exam_conducting_body_description}</p>
            {examDetailsById?.descriptionDetails?.exam_conducting_body_description.length > 100 &&
              <div className="text-start mt-5">
                <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, exam_conducting_body_description:!readmore.exam_conducting_body_description})}>{!readmore.exam_conducting_body_description ? 'Read More' : 'Read Less'}</Link>
              </div>
            }
          </div>
          <div className="similar-exam-ylw-box yellow-bg py-5">
            <h2 className="section-heading2 text-center mb-5">Similar Exams</h2>
            <div className="d-flex justify-content-center flex-wrap gap-4">
              {getAllExamByCategory().map((exam)=>(
                <Link className="similar-exam-badge">{exam.exam_name}</Link>  
              ))}
              {/* <Link className="similar-exam-badge">BITSAT</Link>
              <Link className="similar-exam-badge">JEE Advanced</Link>
              <Link className="similar-exam-badge">NATA</Link>
              <Link className="similar-exam-badge">SRMHCAT</Link> */}
            </div>
          </div>
          <div className="similar-exam-bottom-contentbox text-center mt-5">
            <h2 className="section-heading2 text-center mb-2">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Important Dates`}</h2>
            <p className="similar-exam-bottom-contentbox-para1 mb-5">{(examDetailsById?.descriptionDetails?.exam_important_dates_description.length > 100 && readmore.exam_important_dates_description === false) ? `${examDetailsById?.descriptionDetails?.exam_important_dates_description.slice(0,100)}...` : examDetailsById?.descriptionDetails?.exam_important_dates_description}</p>
            <h3 className="mb-3">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Exam Dates (January & April Sessions)` }</h3>
            <p className="similar-exam-bottom-contentbox-para2">{(examDetailsById?.descriptionDetails?.exam_session_description.length > 100 && readmore.exam_important_dates_description === false) ? `${examDetailsById?.descriptionDetails?.exam_session_description.slice(0,100)}...` : examDetailsById?.descriptionDetails?.exam_session_description}</p>
          </div>
          <div className="py-5 mt-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-5">
                <h1 className="exam-center-calenderTxt text-center">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Exam Dates`} <span>January (Session 1)</span>
                </h1>
              </div>
              <div className="col-4 col-md-2">
                <img src={yellowCircle} alt="" />
              </div>
              <div className="col-12 col-md-5">
                <h1 className="exam-center-calenderTxt text-center">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Exam Dates`} <span>January (Session 1)</span>
                </h1>
              </div>
            </div>
          </div>
          {examDetailsById?.descriptionDetails?.exam_important_dates_description.length > 100 || examDetailsById?.descriptionDetails?.exam_session_description.length > 100}
          <div className="text-center mb-5">
            <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, exam_important_dates_description:!readmore.exam_important_dates_description})}>{!readmore.exam_important_dates_description ? 'Read More' : 'Read Less'}</Link>
          </div>
          <div className="counselling-date-box">
            <h2 className="counselling-date-box-heading">JEE Main 2024 Counselling Dates</h2>
            <p className="counselling-date-box-para">NTA has released the JEE Main 2024 exam dates for January and April sessions. Currently, only the exam dates are announced and the complete JEE Main 2024 schedule will be released soon. </p>
            <div className="tobe-announce-bx yellow-bg">
              <p className="text-center">To Be Announced</p>
            </div>
          </div>
          <div className="clg-accepting-slider-wrapper position-relative yellow-bg px-4 pt-5 mt-5 mb-5">
            <h2 className="section-heading2 grey text-center mb-5">Top Engineering Colleges</h2>
            <div className="swiper clg-slider">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper position-relative">
                <CustomSwiper navigationNext={'.clg-button-next'} navigationPrev={'.clg-button-prev'} noOfSlidesPerView={1} isBreakPoint={false}>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <p className="clg-accepting-name">Geetanjali Group of Colleges</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <p className="clg-accepting-name">DIT University</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                      </div>
                    </div>    
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <p className="clg-accepting-name">Haridwar University</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                      </div>
                    </div>    
                  </swiper-slide>
                  <swiper-slide>
                    <div className="swiper-slide">
                      <div className="clg-accepting-exam-slider-box position-relative">
                        <p className="clg-accepting-name">Geetanjali Group of Colleges</p>
                        <p className="clg-accepting-location">Durgapur, West Bengal</p>
                      </div>
                    </div>    
                  </swiper-slide>
                </CustomSwiper>
                {/* <!-- Slides --> */}
                
                {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev clg-button-prev">
              <img src={arrowLeft} alt="" />
            </div>
            <div className="swiper-button-next clg-button-next">
              <img src={arrowRight} alt="" />
            </div>
                
                
              </div>
            </div>
            {/* <!-- If we need navigation buttons --> */}
            {/* <div className="swiper-button-prev clg-button-prev">
              <img src={arrowLeft} alt="" />
            </div>
            <div className="swiper-button-next clg-button-next">
              <img src={arrowRight} alt="" />
            </div> */}
          </div>
          <div className="tick-heading d-flex align-items-center mb-4">
            <span className="tick-heading-icon d-inline-flex">
              <img src={greyTick} alt="" />
            </span>
            <h2>JEE Main Application Form 2024</h2>
          </div>
          <div className="exam-details-left-innerpara mb-5 ps-tick85">
            <p className="exam-details-para1">NTA will release the JEE Main Eligibility Criteria 2024 along with the official brochure at jeemain.nta.nic.in. JEE Main 2024 eligibility criteria will include information on the basic requirements that a candidate must meet in order to be eligible for the exam.</p>
            <div className="text-start mt-5">
              {/* <Link className="course-details-readmore-btn btn">Read More</Link> */}
            </div>
          </div>
          <div className="exam-3step-sec">
            <div className="row">
              <div className="col-md-4">
                <div className="exam-3step-box d-flex align-items-center">
                  <p className="exam-3step-leftTxt">Register & fill out the application form online</p>
                  <div className="exam-3step-badgebx">
                    <p className="exam-3step-text d-flex align-items-center justify-content-center">
                      <span className="me-1">01</span> Step
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="exam-3step-box d-flex align-items-center">
                  <p className="exam-3step-leftTxt">Upload the required documents</p>
                  <div className="exam-3step-badgebx">
                    <p className="exam-3step-text d-flex align-items-center justify-content-center">
                      <span className="me-1">02</span> Step
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="exam-3step-box d-flex align-items-center">
                  <p className="exam-3step-leftTxt"> Pay the JEE Main 2024 application fee</p>
                  <div className="exam-3step-badgebx">
                    <p className="exam-3step-text d-flex align-items-center justify-content-center">
                      <span className="me-1">03</span> Step
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="exam-step-registration-info mt-50">
            <p className="graycurveboxtxt">Let us look at the steps in a detailed manner</p>
            <img src={undrawImage} className="undraw_img d-block mx-auto" alt="" />
            <div className="row justify-content-center mt-5">
              <div className="col-10">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <img src={examStep3} className="exam-step3info-img" alt="" />
                  </div>
                  <div className="col-md-9">
                    <h1 className="exam-registration-infoheading">Step 1: Registration & Application Form Fill-up</h1>
                    <p className="exam-registration-infopara">Candidates can visit the official website of NTA and apply for JEE Main 2024 by filling out the registration form and submitting the required details like name, date of birth, a valid phone number, email ID etc.</p>
                    {/* <Link className="course-details-readmore-btn btn">Read More</Link> */}
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-3">
                    <img src={examStep3Info} className="exam-step3info-img" alt="" />
                  </div>
                  <div className="col-md-9">
                    <h1 className="exam-registration-infoheading">Step 2: Upload the Necessary Documents</h1>
                    <p className="exam-registration-infopara">While filling out the registration form for JEE Main 2024, candidates will have to upload a passport-size photograph and signature as per the dimensions mentioned in the table below. </p>
                    {/* <Link className="course-details-readmore-btn btn">Read More</Link> */}
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-3">
                    <img src={examStep4Info} className="exam-step3info-img" alt="" />
                  </div>
                  <div className="col-md-9">
                    <h1 className="exam-registration-infoheading">Step 3: Pay the JEE Main 2024 Application Fee</h1>
                    <p className="exam-registration-infopara">Candidates are required to successfully fill out the JEE Main Application Form 2024 and pay the required fees according to reservations. Payment can be done in online mode through Debit/Credit Cards</p>
                    {/* <Link className="course-details-readmore-btn btn">Read More</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TopCollegesAccesptingExam />
          <div className="py-5 header">
            <div className="px-2">
              <div className="row">
                <div className="col-md-5 pe-0">
                  <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {constants.examDetailsList.map((value, index)=>(
                      <Link onClick={()=>updateActive(value.pTagData, index)} className={index===linkIndex ? value.linkClass : "nav-link mb-3 d-flex align-items-stretch gap-2"} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        <span className="exam-tab-icon flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                          <img src={contractIcon} alt="" />
                        </span>
                        <span className="exam-tab-txt d-inline-flex align-items-center ps-3">JEE Main 2024 Advanced City Intimation Slip</span>
                      </Link>  
                    ))}
                    {/* <Link className="nav-link mb-3 d-flex align-items-stretch gap-2 active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                      <span className="exam-tab-icon flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                        <img src={contractIcon} alt="" />
                      </span>
                      <span className="exam-tab-txt d-inline-flex align-items-center ps-3">JEE Main 2024 Advanced City Intimation Slip</span>
                    </Link>
                    <Link className="nav-link mb-3 d-flex align-items-stretch gap-2" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                      <span className="exam-tab-icon flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                        <img src={contractIcon} alt="" />
                      </span>
                      <span className="exam-tab-txt d-inline-flex align-items-center ps-3">JEE Main Admit card 2024</span>
                    </Link>
                    <Link className="nav-link mb-3 d-flex align-items-stretch gap-2" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                      <span className="exam-tab-icon flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                        <img src={contractIcon} alt=""/>
                      </span>
                      <span className="exam-tab-txt d-inline-flex align-items-center ps-3">JEE Main Exam Centers 2024</span>
                    </Link>
                    <Link className="nav-link mb-3 d-flex align-items-stretch gap-2" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                      <span className="exam-tab-icon flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                        <img src={contractIcon} alt="" />
                      </span>
                      <span className="exam-tab-txt d-inline-flex align-items-center ps-3">JEE Main Exam Pattern 2024</span>
                    </Link>
                    <Link className="nav-link mb-3 d-flex align-items-stretch gap-2" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                      <span className="exam-tab-icon flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                        <img src={contractIcon} alt="" />
                      </span>
                      <span className="exam-tab-txt d-inline-flex align-items-center ps-3">JEE Main 2024 Syllabus</span>
                    </Link> */}
                  </div>
                </div>
                <div className="col-md-7 ps-0">
                  <div className="tab-content exam-tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <p className="m-0">{pData}</p>
                    </div>
                    {/* <div className="tab-pane fade rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="tab-pane fade rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="tab-pane fade rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="tab-pane fade rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-12">
                  <Link className="course-details-readmore-btn btn">Read More</Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
  )
}
