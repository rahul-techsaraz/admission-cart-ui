import React from 'react';
import ExamBanner from './ExamBanner';
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
import CustomFaq from '../colleges/CustomFaq';

export default function ExamListing() {
  const { allExamData } = useSelector((state) => state.common);
  return (
    <>
      <ExamBanner />
      <section className="exam-listing-section section-padding">
        <div className="container">
          <div className="">
            {/* <div className="col-md-3">
                    <aside className="filter-col">
                        <div className="accordion" id="streams_accordion">
                            <div className="accordion-item border-0">
                              <h2 id="streamsHeadingFirst" className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#streamsCollapseFirst" aria-expanded="true" aria-controls="streamsCollapseFirst">
                                    Streams
                                </button>
                              </h2>
                              <div id="streamsCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="streamsHeadingFirst" data-bs-parent="#streams_accordion">
                                <div className="accordion-body p-0">
                                    <div className="streams-filter">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control stream-search-field search-field mb-4" placeholder="Search" />
                                            </div>
                                           <div className="form-group">
                                             <input type="checkbox" id="streams-filter1" />
                                             <label for="streams-filter1">Engineering <span>(4120)</span></label>
                                           </div>
                                           <div className="form-group">
                                              <input type="checkbox" id="streams-filter2" />
                                              <label for="streams-filter2">Management <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="streams-filter3" />
                                              <label for="streams-filter3">Commerce & Banking <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="streams-filter4" />
                                              <label for="streams-filter4">Design <span>(4120)</span></label>
                                            </div>
                
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="accordion" id="degree_accordion">
                            <div className="accordion-item border-0">
                              <h2 id="degreeHeadingFirst" className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#degreeCollapseFirst" aria-expanded="true" aria-controls="degreeCollapseFirst">
                                    Degree
                                </button>
                              </h2>
                              <div id="degreeCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="degreeHeadingFirst" data-bs-parent="#degree_accordion">
                                <div className="accordion-body p-0">
                                    <div className="degree-filter">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control degree-search-field search-field mb-4" placeholder="Search" />
                                            </div>
                                           <div className="form-group">
                                             <input type="checkbox" id="degree-filter1" />
                                             <label for="degree-filter1">B. Tech <span>(4120)</span></label>
                                           </div>
                                           <div className="form-group">
                                              <input type="checkbox" id="degree-filter2" />
                                              <label for="degree-filter2">B. Arch <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="degree-filter3" />
                                              <label for="degree-filter3">MBA <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="degree-filter4" />
                                              <label for="degree-filter4">M. Tech <span>(4120)</span></label>
                                            </div>
                                            
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div className="accordion" id="level_accordion">
                            <div className="accordion-item border-0">
                              <h2 id="levelHeadingFirst" className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#levelCollapseFirst" aria-expanded="true" aria-controls="levelCollapseFirst">
                                    Level
                                </button>
                              </h2>
                              <div id="levelCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="levelHeadingFirst" data-bs-parent="#level_accordion">
                                <div className="accordion-body p-0">
                                    <div className="level-filter">
                                        <form>
                                           <div className="form-group">
                                             <input type="checkbox" id="level-filter1" />
                                             <label for="level-filter1">PG <span>(4120)</span></label>
                                           </div>
                                           <div className="form-group">
                                              <input type="checkbox" id="level-filter2" />
                                              <label for="level-filter2">PHD <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="level-filter3" />
                                              <label for="level-filter3">Certificate <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="level-filter4" />
                                              <label for="level-filter4">Diploma <span>(4120)</span></label>
                                            </div>
                                            
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div className="accordion" id="studymode_accordion">
                            <div className="accordion-item border-0">
                              <h2 id="studymodeHeadingFirst" className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#studymodeCollapseFirst" aria-expanded="true" aria-controls="studymodeCollapseFirst">
                                    Study Mode
                                </button>
                              </h2>
                              <div id="studymodeCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="studymodeHeadingFirst" data-bs-parent="#studymode_accordion">
                                <div className="accordion-body p-0">
                                    <div className="studymode-filter">
                                        <form>
                                           <div className="form-group">
                                             <input type="checkbox" id="studymode-filter1" />
                                             <label for="studymode-filter1">Offline <span>(4120)</span></label>
                                           </div>
                                           <div className="form-group">
                                              <input type="checkbox" id="studymode-filter2" />
                                              <label for="studymode-filter2">Online <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="studymode-filter3" />
                                              <label for="studymode-filter3">Both Offline & Online <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
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

                </div> */}
            <div className="">
              {/* <div className="row">
                        <div className="col-12">
                            <div className="applied-fliter-o d-flex align-items-center justify-content-between mb-4">
                                <div className="applied-filter d-inline-flex align-items-center">
                                    <p className="filter-apply-txt m-0 me-3">Applied Filters</p>
                                    <span className="filter-applied-badge text-center">B.Tech. Bachelor of Technology</span>
                                </div>
                                <div className="sorted-filter-box">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Sort By</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                </div>
                            </div>
                        </div>
                    </div> */}
              <div className="">
                <ExamCard />
                {/* <div className="col-lg-4 col-md-6">
                            <div className="exam-listing-box position-relative">
                                <p className="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div className="exam-listing-box-content">
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Application Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle green-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Exam Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul className="exam-imp-list">
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
                                <Link className="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="exam-listing-box position-relative">
                                <p className="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div className="exam-listing-box-content">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                        <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Application Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle green-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Exam Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul className="exam-imp-list">
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
                                <Link className="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="exam-listing-box position-relative">
                                <p className="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div className="exam-listing-box-content">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                        <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Application Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle green-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Exam Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul className="exam-imp-list">
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
                                <Link className="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="exam-listing-box position-relative">
                                <p className="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div className="exam-listing-box-content">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                        <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Application Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle green-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Exam Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul className="exam-imp-list">
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
                                <Link className="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="exam-listing-box position-relative">
                                <p className="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div className="exam-listing-box-content">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                        <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Application Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle green-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Exam Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul className="exam-imp-list">
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
                                <Link className="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="exam-listing-box position-relative">
                                <p className="exam-name-listing-box d-inline-block">JEE Main 2024</p>
                                <div className="exam-listing-box-content">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                        <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle yellow-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="examCalenderImage" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Application Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <div classNameName='calender-icon-circle-parent'>
                                        <span className="calender-icon-circle green-bg d-inline-flex align-items-center justify-content-center">
                                            <img src={examCalenderImage} alt="" />
                                        </span>
                                        </div>

                                        <div classNameName='calender-h2-parent'>
                                        <h2 className="exam-dateinfo m-0">Exam Date
                                            <span className="date">08December, 2023 - 12January, 2024</span>
                                        </h2>
                                        </div>
                                    </div>
                                    <ul className="exam-imp-list">
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
                                <Link className="register-btn yellow-bg"><img src={examRegisterIconImage} alt="" /> Register Now</Link>
                            </div>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomFaq />
    </>
  );
}
