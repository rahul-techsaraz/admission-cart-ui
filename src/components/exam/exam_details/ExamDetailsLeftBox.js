import React, { useEffect, useState } from 'react'
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
import { swiperResponsive } from '../../../utils/Constants/swiperResponsive'
import Tooltip from '../../../utils/Constants/custom-components/Tooltip'
import ExamMockList from './ExamMockList'
import { CustomCollegeCard } from '../../colleges/college_details/CustomCollegeCard';








export default function ExamDetailsLeftBox() {
  const [linkIndex, setLinkIndex] = useState(0)
  const [readmore, setReadmore] = useState(
    {
      exam_description: false,
      exam_conducting_body_description: false,
      exam_important_dates_description: false,
      exam_application_form_description: false,
      apllication_form_step1_description: false,
      apllication_form_step2_description: false,
      apllication_form_step3_description: false,
    })
  const {examDetailsById, allExamData, allCollegeData}=useSelector(state=>state.common)
  const [pData, setPData] = useState(examDetailsById?.descriptionDetails?.exam_intimation_slip_description)
  const updateActive = (p, index)=>{
    setLinkIndex(index)
    setPData(p)
  }
  const getAllExamByCategory = ()=>{
    const data = allExamData.filter((v)=>v?.category_name === examDetailsById?.examBasicDetails?.category_name && v?.exam_name !== examDetailsById?.examBasicDetails?.exam_name)
    return data
  }
  const examDescriptionTabSetting = ()=>{
    const obj = {
      tagTitle: '',
      pTagData : ''
    }
    const data = Object.keys(examDetailsById?.descriptionDetails).filter((v)=>{
      return ["exam_intimation_slip_description",
      "exam_admit_card_description",
      "exam_center_description",
      "exam_pattern_description",
      "exam_syllabus_description",
      ].includes(v)
    }).map((p)=>({...obj, 'tagTitle':p, 'pTagData': examDetailsById.descriptionDetails[p]}))
    return data
  }
  const responsive = {
    1400:{
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1024:{
        slidesPerView: 3,
        spaceBetween: 20,
    },
    768:{
        slidesPerView: 2,
        spaceBetween: 20,
    },
    640:{
        slidesPerView: 1,
        spaceBetween: 20,
    },
    460:{
        slidesPerView: 1,
        spaceBetween: 20,
    },
 }
 const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
 const getCollegesByExamId = () => {
    const data = allCollegeData.filter((college)=>college?.category_name === examDetailsById?.examBasicDetails?.category_name)
    return data
 }
  return (
   <div className="col-md-12">
        <div id="exam_details_leftBox" className="exam-details-leftBox">
          <h2 className="exam-details-yellow-heading mb-4 d-inline-block">{examDetailsById?.examBasicDetails?.exam_name} {examDetailsById?.examBasicDetails?.exam_year}</h2>
          <div className="exam-details-left-innerpara mb-5 ps-5">
            <p className="exam-details-para1">{(examDetailsById?.descriptionDetails?.exam_description.length > 300 && readmore.exam_description === false) ? `${examDetailsById?.descriptionDetails?.exam_description.slice(0,300)}...` : examDetailsById?.descriptionDetails?.exam_description}</p>
            {examDetailsById?.descriptionDetails?.exam_description.length > 300 &&
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
          <ExamMockList/>
         <ExamSlider examDetailsById={examDetailsById}/>
          <div className="pt-4"></div>
          <div className="tick-heading d-flex align-items-center mb-4">
            <span className="tick-heading-icon d-inline-flex">
              <img src={greyTick} alt="" />
            </span>
            <h2>{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Conducting Body`}</h2>
          </div>
          <div className="exam-details-left-innerpara mb-5 ps-tick85">
            <p className="exam-details-para1">{(examDetailsById?.descriptionDetails?.exam_conducting_body_description.length > 300 && readmore.exam_conducting_body_description === false) ? `${examDetailsById?.descriptionDetails?.exam_conducting_body_description.slice(0,300)}...` : examDetailsById?.descriptionDetails?.exam_conducting_body_description}</p>
            {examDetailsById?.descriptionDetails?.exam_conducting_body_description.length > 300 &&
              <div className="text-start mt-5">
                <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, exam_conducting_body_description:!readmore.exam_conducting_body_description})}>{!readmore.exam_conducting_body_description ? 'Read More' : 'Read Less'}</Link>
              </div>
            }
          </div>
          <div className="similar-exam-ylw-box yellow-bg py-5">
            <h2 className="section-heading2 text-center mb-5">Similar Exams</h2>
            <div className="d-flex justify-content-center flex-wrap gap-4">
              {examDetailsById?.examBasicDetails?.category_name && getAllExamByCategory().map((exam)=>(
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
            <p className="similar-exam-bottom-contentbox-para1 mb-5">{(examDetailsById?.descriptionDetails?.exam_important_dates_description.length > 300 && readmore.exam_important_dates_description === false) ? `${examDetailsById?.descriptionDetails?.exam_important_dates_description.slice(0,300)}...` : examDetailsById?.descriptionDetails?.exam_important_dates_description}</p>
            <h3 className="mb-3">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Exam Dates (${examDetailsById?.examDetails?.session_name} Sessions)` }</h3>
            <p className="similar-exam-bottom-contentbox-para2">{(examDetailsById?.descriptionDetails?.exam_session_description.length > 300 && readmore.exam_important_dates_description === false) ? `${examDetailsById?.descriptionDetails?.exam_session_description.slice(0,300)}...` : examDetailsById?.descriptionDetails?.exam_session_description}</p>
          </div>
          <div className="py-5 mt-4">
            <div className="d-flex justify-content-around align-items-center">
                {/* <div className="col-12 col-md-5">
                  <h1 className="exam-center-calenderTxt text-center">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Exam Dates`} <span>January (Session 1)</span>
                  </h1>
                </div> */}
                <div className="col-4 col-md-2">
                  <img src={yellowCircle} alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <div className="col-12 col-md-5 mt-4">
                <h1 className="exam-center-calenderTxt text-center">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Exam Dates`} <span>{`${examDetailsById?.examDetails?.session_name} ( ${examDetailsById?.examBasicDetails?.exam_start_date} )`}</span>
                </h1>
              </div>
            </div>
          </div>
          {examDetailsById?.descriptionDetails?.exam_important_dates_description.length > 300 || examDetailsById?.descriptionDetails?.exam_session_description.length > 300}
          <div className="text-center mb-5">
            <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, exam_important_dates_description:!readmore.exam_important_dates_description})}>{!readmore.exam_important_dates_description ? 'Read More' : 'Read Less'}</Link>
          </div>
          <div className="counselling-date-box">
            <h2 className="counselling-date-box-heading">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Counselling Dates`}</h2>
            <p className="counselling-date-box-para">{examDetailsById?.descriptionDetails?.exam_counselling_description}</p>
            <div className="tobe-announce-bx yellow-bg">
              <p className="text-center">{examDetailsById?.examDetails?.counselling_dates == '' ? 'To Be Announced' : examDetailsById?.examDetails?.counselling_dates}</p>
            </div>
          </div>
          <div className="clg-accepting-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
            <h2 className="section-heading2 grey text-center mb-5">{`Top ${examDetailsById?.examBasicDetails?.category_name} Colleges`}</h2>
            <div className="swiper clg-slider">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper position-relative">
                <CustomSwiper navigationNext={'.clg-button-next'} navigationPrev={'.clg-button-prev'} noOfSlidesPerView={1} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                  {examDetailsById?.examBasicDetails?.exam_name && getCollegesByExamId().map((college)=>(
                      <swiper-slide>
                        <CustomCollegeCard college={college} isSwiper={true}/>
                      </swiper-slide>
                  ))}
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
            <h2>{`${examDetailsById?.examBasicDetails?.exam_name} Application Form ${examDetailsById?.examBasicDetails?.exam_year}`}</h2>
          </div>
          <div className="exam-details-left-innerpara mb-5 ps-tick85">
            <p className="exam-details-para1">{(examDetailsById?.descriptionDetails?.exam_application_form_description.length > 300 && readmore.exam_application_form_description === false) ? `${examDetailsById?.descriptionDetails?.exam_application_form_description.slice(0,300)}...` : examDetailsById?.descriptionDetails?.exam_application_form_description}</p>
            {examDetailsById?.descriptionDetails?.exam_application_form_description.length > 300 &&
              <div className="text-start mt-5">
                <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, exam_application_form_description:!readmore.exam_application_form_description})}>{!readmore.exam_application_form_description ? 'Read More' : 'Read Less'}</Link>
              </div>
            }
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
                  <p className="exam-3step-leftTxt">{`Pay the ${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} application fee`}</p>
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
                    <p className="exam-registration-infopara">{(examDetailsById?.descriptionDetails?.apllication_form_step1_description.length > 300 && readmore.apllication_form_step1_description === false) ? `${examDetailsById?.descriptionDetails?.apllication_form_step1_description.slice(0,300)}...` : examDetailsById?.descriptionDetails?.apllication_form_step1_description}</p>
                    {examDetailsById?.descriptionDetails?.apllication_form_step1_description.length > 300 &&
                      <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, apllication_form_step1_description:!readmore.apllication_form_step1_description})}>{!readmore.apllication_form_step1_description ? 'Read More' : 'Read Less'}</Link>
                    }
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-3">
                    <img src={examStep3Info} className="exam-step3info-img" alt="" />
                  </div>
                  <div className="col-md-9">
                    <h1 className="exam-registration-infoheading">Step 2: Upload the Necessary Documents</h1>
                    <p className="exam-registration-infopara">{(examDetailsById?.descriptionDetails?.apllication_form_step2_description.length > 300 && readmore.apllication_form_step2_description === false) ? `${examDetailsById?.descriptionDetails?.apllication_form_step2_description.slice(0,300)}...` : examDetailsById?.descriptionDetails?.apllication_form_step2_description}</p>
                    {examDetailsById?.descriptionDetails?.apllication_form_step2_description.length > 300 &&
                      <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, apllication_form_step2_description:!readmore.apllication_form_step2_description})}>{!readmore.apllication_form_step2_description ? 'Read More' : 'Read Less'}</Link>
                    }
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-3">
                    <img src={examStep4Info} className="exam-step3info-img" alt="" />
                  </div>
                  <div className="col-md-9">
                    <h1 className="exam-registration-infoheading">{`Step 3: Pay the ${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} Application Fee`}</h1>
                    <p className="exam-registration-infopara">{(examDetailsById?.descriptionDetails?.apllication_form_step3_description.length > 300 && readmore.apllication_form_step3_description === false) ? `${examDetailsById?.descriptionDetails?.apllication_form_step3_description.slice(0,300)}...` : examDetailsById?.descriptionDetails?.apllication_form_step3_description}</p>
                    {examDetailsById?.descriptionDetails?.apllication_form_step3_description.length > 300 &&
                      <Link className="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, apllication_form_step3_description:!readmore.apllication_form_step3_description})}>{!readmore.apllication_form_step3_description ? 'Read More' : 'Read Less'}</Link>  
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TopCollegesAccesptingExam />
          <div className="py-5 header">
            <div className="px-2">
              <div className="row">
                <div className="col-12 col-lg-5 pe-0">
                  <div className="nav flex-column nav-pills nav-pills-custom">
                    {Object.keys(examDetailsById).length > 0 && examDescriptionTabSetting().map((value, index)=>(
                      <Tooltip text={value.pTagData} linkIndex={linkIndex} index={index}>
                      <div onMouseEnter={()=>updateActive(value.pTagData, index)} className={index===linkIndex ? "nav-link mb-3 d-flex align-items-stretch gap-2 active" : "nav-link mb-3 d-flex align-items-stretch gap-2"}>
                        <span className="exam-tab-icon flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                          <img src={contractIcon} alt="" />
                        </span>
                        <span className="exam-tab-txt d-inline-flex align-items-center ps-3">{`${examDetailsById?.examBasicDetails?.exam_name} ${examDetailsById?.examBasicDetails?.exam_year} ${value.tagTitle.split('_').slice(0,value.tagTitle.split('_').length).join(' ')}`}</span>
                      </div>
                      </Tooltip>  
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
                {/* <div className="col-md-7 ps-0">
                  <div className="tab-content exam-tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <p className="m-0">{pData}</p>
                    </div>
                  </div>
                </div> */}
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
