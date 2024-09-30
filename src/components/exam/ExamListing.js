import React from 'react'
import ExamBanner from './ExamBanner'
import examCalenderImage from '../../images/calendar-icon.svg';
import examOverviewImage from '../../images/overview-icon.svg';
import examImpDateImage from '../../images/imp-date-icon.svg';
import examAppFormImage from '../../images/app-form-icon.svg';
import examElgiIconImage from '../../images/eligi-icon.svg';
import examAdmitCardIconImage from '../../images/admit-card-icon.svg';
import examRegisterIconImage from '../../images/register-icon.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ExamCard from './exam_details/ExamCard';





export default function ExamListing() {
    const {allExamData} = useSelector(state=>state.common)
    return (
        <>
            <ExamBanner />
         <section class="exam-listing-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <aside class="filter-col">
                        <div class="accordion" id="streams_accordion">
                            <div class="accordion-item border-0">
                              <h2 id="streamsHeadingFirst" class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#streamsCollapseFirst" aria-expanded="true" aria-controls="streamsCollapseFirst">
                                    Streams
                                </button>
                              </h2>
                              <div id="streamsCollapseFirst" class="accordion-collapse collapse show" aria-labelledby="streamsHeadingFirst" data-bs-parent="#streams_accordion">
                                <div class="accordion-body p-0">
                                    <div class="streams-filter">
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control stream-search-field search-field mb-4" placeholder="Search" />
                                            </div>
                                           <div class="form-group">
                                             <input type="checkbox" id="streams-filter1" />
                                             <label for="streams-filter1">Engineering <span>(4120)</span></label>
                                           </div>
                                           <div class="form-group">
                                              <input type="checkbox" id="streams-filter2" />
                                              <label for="streams-filter2">Management <span>(4120)</span></label>
                                            </div>
                                            <div class="form-group">
                                              <input type="checkbox" id="streams-filter3" />
                                              <label for="streams-filter3">Commerce & Banking <span>(4120)</span></label>
                                            </div>
                                            <div class="form-group">
                                              <input type="checkbox" id="streams-filter4" />
                                              <label for="streams-filter4">Design <span>(4120)</span></label>
                                            </div>
                
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="accordion" id="degree_accordion">
                            <div class="accordion-item border-0">
                              <h2 id="degreeHeadingFirst" class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#degreeCollapseFirst" aria-expanded="true" aria-controls="degreeCollapseFirst">
                                    Degree
                                </button>
                              </h2>
                              <div id="degreeCollapseFirst" class="accordion-collapse collapse show" aria-labelledby="degreeHeadingFirst" data-bs-parent="#degree_accordion">
                                <div class="accordion-body p-0">
                                    <div class="degree-filter">
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control degree-search-field search-field mb-4" placeholder="Search" />
                                            </div>
                                           <div class="form-group">
                                             <input type="checkbox" id="degree-filter1" />
                                             <label for="degree-filter1">B. Tech <span>(4120)</span></label>
                                           </div>
                                           <div class="form-group">
                                              <input type="checkbox" id="degree-filter2" />
                                              <label for="degree-filter2">B. Arch <span>(4120)</span></label>
                                            </div>
                                            <div class="form-group">
                                              <input type="checkbox" id="degree-filter3" />
                                              <label for="degree-filter3">MBA <span>(4120)</span></label>
                                            </div>
                                            <div class="form-group">
                                              <input type="checkbox" id="degree-filter4" />
                                              <label for="degree-filter4">M. Tech <span>(4120)</span></label>
                                            </div>
                                            
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div class="accordion" id="level_accordion">
                            <div class="accordion-item border-0">
                              <h2 id="levelHeadingFirst" class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#levelCollapseFirst" aria-expanded="true" aria-controls="levelCollapseFirst">
                                    Level
                                </button>
                              </h2>
                              <div id="levelCollapseFirst" class="accordion-collapse collapse show" aria-labelledby="levelHeadingFirst" data-bs-parent="#level_accordion">
                                <div class="accordion-body p-0">
                                    <div class="level-filter">
                                        <form>
                                           <div class="form-group">
                                             <input type="checkbox" id="level-filter1" />
                                             <label for="level-filter1">PG <span>(4120)</span></label>
                                           </div>
                                           <div class="form-group">
                                              <input type="checkbox" id="level-filter2" />
                                              <label for="level-filter2">PHD <span>(4120)</span></label>
                                            </div>
                                            <div class="form-group">
                                              <input type="checkbox" id="level-filter3" />
                                              <label for="level-filter3">Certificate <span>(4120)</span></label>
                                            </div>
                                            <div class="form-group">
                                              <input type="checkbox" id="level-filter4" />
                                              <label for="level-filter4">Diploma <span>(4120)</span></label>
                                            </div>
                                            
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div class="accordion" id="studymode_accordion">
                            <div class="accordion-item border-0">
                              <h2 id="studymodeHeadingFirst" class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#studymodeCollapseFirst" aria-expanded="true" aria-controls="studymodeCollapseFirst">
                                    Study Mode
                                </button>
                              </h2>
                              <div id="studymodeCollapseFirst" class="accordion-collapse collapse show" aria-labelledby="studymodeHeadingFirst" data-bs-parent="#studymode_accordion">
                                <div class="accordion-body p-0">
                                    <div class="studymode-filter">
                                        <form>
                                           <div class="form-group">
                                             <input type="checkbox" id="studymode-filter1" />
                                             <label for="studymode-filter1">Offline <span>(4120)</span></label>
                                           </div>
                                           <div class="form-group">
                                              <input type="checkbox" id="studymode-filter2" />
                                              <label for="studymode-filter2">Online <span>(4120)</span></label>
                                            </div>
                                            <div class="form-group">
                                              <input type="checkbox" id="studymode-filter3" />
                                              <label for="studymode-filter3">Both Offline & Online <span>(4120)</span></label>
                                            </div>
                                            <div class="form-group">
                                              <input type="checkbox" id="studymode-filter4" />
                                              <label for="studymode-filter4">None <span>(4120)</span></label>
                                            </div>
                                            
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        
                     </aside>

                </div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-12">
                            <div class="applied-fliter-o d-flex align-items-center justify-content-between mb-4">
                                <div class="applied-filter d-inline-flex align-items-center">
                                    <p class="filter-apply-txt m-0 me-3">Applied Filters</p>
                                    <span class="filter-applied-badge text-center">B.Tech. Bachelor of Technology</span>
                                </div>
                                <div class="sorted-filter-box">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Sort By</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <ExamCard />
                        {/* <div class="col-lg-4 col-md-6">
                            <div class="exam-listing-box position-relative">
                                <p class="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div class="exam-listing-box-content">
                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <div className='calender-icon-circle-parent'>
                                        <span class="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div className='calender-h2-parent'>
                                        <h2 class="exam-dateinfo m-0">Application Date
                                            <span class="date">08December, 2023 - 12January, 2024</span>
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
                                            <span class="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul class="exam-imp-list">
                                        <li>
                                            <img src={examOverviewImage} alt="" />
                                            Overview
                                        </li>
                                        <li>
                                            <img src={examImpDateImage} alt="" />
                                            Important Date
                                        </li>
                                        <li>
                                            <img src={examAppFormImage} alt="" />
                                            Application Form
                                        </li>
                                        <li>
                                            <img src={examElgiIconImage} alt="" />
                                            Eligibility
                                        </li>
                                        <li>
                                            <img src={examAdmitCardIconImage} alt="" />
                                            Admit Card
                                        </li>
                                    </ul>

                                </div>
                                <Link class="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="exam-listing-box position-relative">
                                <p class="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div class="exam-listing-box-content">
                                <div class="d-flex align-items-center gap-2 mb-3">
                                        <div className='calender-icon-circle-parent'>
                                        <span class="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div className='calender-h2-parent'>
                                        <h2 class="exam-dateinfo m-0">Application Date
                                            <span class="date">08December, 2023 - 12January, 2024</span>
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
                                            <span class="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul class="exam-imp-list">
                                        <li>
                                            <img src={examOverviewImage} alt="" />
                                            Overview
                                        </li>
                                        <li>
                                            <img src={examImpDateImage} alt="" />
                                            Important Date
                                        </li>
                                        <li>
                                            <img src={examAppFormImage} alt="" />
                                            Application Form
                                        </li>
                                        <li>
                                            <img src={examElgiIconImage} alt="" />
                                            Eligibility
                                        </li>
                                        <li>
                                            <img src={examAdmitCardIconImage} alt="" />
                                            Admit Card
                                        </li>
                                    </ul>

                                </div>
                                <Link class="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="exam-listing-box position-relative">
                                <p class="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div class="exam-listing-box-content">
                                <div class="d-flex align-items-center gap-2 mb-3">
                                        <div className='calender-icon-circle-parent'>
                                        <span class="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div className='calender-h2-parent'>
                                        <h2 class="exam-dateinfo m-0">Application Date
                                            <span class="date">08December, 2023 - 12January, 2024</span>
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
                                            <span class="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul class="exam-imp-list">
                                        <li>
                                            <img src={examOverviewImage} alt="" />
                                            Overview
                                        </li>
                                        <li>
                                            <img src={examImpDateImage} alt="" />
                                            Important Date
                                        </li>
                                        <li>
                                            <img src={examAppFormImage} alt="" />
                                            Application Form
                                        </li>
                                        <li>
                                            <img src={examElgiIconImage} alt="" />
                                            Eligibility
                                        </li>
                                        <li>
                                            <img src={examAdmitCardIconImage} alt="" />
                                            Admit Card
                                        </li>
                                    </ul>

                                </div>
                                <Link class="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="exam-listing-box position-relative">
                                <p class="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div class="exam-listing-box-content">
                                <div class="d-flex align-items-center gap-2 mb-3">
                                        <div className='calender-icon-circle-parent'>
                                        <span class="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div className='calender-h2-parent'>
                                        <h2 class="exam-dateinfo m-0">Application Date
                                            <span class="date">08December, 2023 - 12January, 2024</span>
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
                                            <span class="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul class="exam-imp-list">
                                        <li>
                                            <img src={examOverviewImage} alt="" />
                                            Overview
                                        </li>
                                        <li>
                                            <img src={examImpDateImage} alt="" />
                                            Important Date
                                        </li>
                                        <li>
                                            <img src={examAppFormImage} alt="" />
                                            Application Form
                                        </li>
                                        <li>
                                            <img src={examElgiIconImage} alt="" />
                                            Eligibility
                                        </li>
                                        <li>
                                            <img src={examAdmitCardIconImage} alt="" />
                                            Admit Card
                                        </li>
                                    </ul>

                                </div>
                                <Link class="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="exam-listing-box position-relative">
                                <p class="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div class="exam-listing-box-content">
                                <div class="d-flex align-items-center gap-2 mb-3">
                                        <div className='calender-icon-circle-parent'>
                                        <span class="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div className='calender-h2-parent'>
                                        <h2 class="exam-dateinfo m-0">Application Date
                                            <span class="date">08December, 2023 - 12January, 2024</span>
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
                                            <span class="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul class="exam-imp-list">
                                        <li>
                                            <img src={examOverviewImage} alt="" />
                                            Overview
                                        </li>
                                        <li>
                                            <img src={examImpDateImage} alt="" />
                                            Important Date
                                        </li>
                                        <li>
                                            <img src={examAppFormImage} alt="" />
                                            Application Form
                                        </li>
                                        <li>
                                            <img src={examElgiIconImage} alt="" />
                                            Eligibility
                                        </li>
                                        <li>
                                            <img src={examAdmitCardIconImage} alt="" />
                                            Admit Card
                                        </li>
                                    </ul>

                                </div>
                                <Link class="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="exam-listing-box position-relative">
                                <p class="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div class="exam-listing-box-content">
                                <div class="d-flex align-items-center gap-2 mb-3">
                                        <div className='calender-icon-circle-parent'>
                                        <span class="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div className='calender-h2-parent'>
                                        <h2 class="exam-dateinfo m-0">Application Date
                                            <span class="date">08December, 2023 - 12January, 2024</span>
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
                                            <span class="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul class="exam-imp-list">
                                        <li>
                                            <img src={examOverviewImage} alt="" />
                                            Overview
                                        </li>
                                        <li>
                                            <img src={examImpDateImage} alt="" />
                                            Important Date
                                        </li>
                                        <li>
                                            <img src={examAppFormImage} alt="" />
                                            Application Form
                                        </li>
                                        <li>
                                            <img src={examElgiIconImage} alt="" />
                                            Eligibility
                                        </li>
                                        <li>
                                            <img src={examAdmitCardIconImage} alt="" />
                                            Admit Card
                                        </li>
                                    </ul>

                                </div>
                                <Link class="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div> */}

                    </div>
                </div>
                
            </div>
        </div>
    </section>   
      </>
   
  )
}
