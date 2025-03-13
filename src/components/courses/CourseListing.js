import React from 'react';
import CoursesBanner from './CoursesBanner';
import CoursesTopSearch from './CourseTopSearch';
import courseIcon1 from '../../images/course/course-icon1.svg';
import courseIcon2 from '../../images/course/course-icon2.svg';
import courseIcon3 from '../../images/course/course-icon3.svg';
import courseIcon4 from '../../images/course/course-icon4.svg';
import courseIcon5 from '../../images/course/course-icon5.svg';
import courseIcon6 from '../../images/course/course-icon6.svg';
import courseIcon7 from '../../images/course/course-icon7.svg';
import courseIcon8 from '../../images/course/course-icon8.svg';
import courseIcon9 from '../../images/course/course-icon9.svg';
import courseIcon10 from '../../images/course/course-icon10.svg';
import courseIcon11 from '../../images/course/course-icon11.svg';
import courseIcon12 from '../../images/course/course-icon12.svg';
import ApplyFilter from '../ApplyFilter';
import CourseCard from './course_details/CourseCard';
import { useSelector } from 'react-redux';
import CustomFaq from '../colleges/CustomFaq';

export default function CourseListing() {
  const { allCourseData } = useSelector((state) => state.common);

  const yearsFilterOption = [
    { label: '1 Year', count: 4142 },
    { label: '2 Years', count: 4142 },
    { label: '3 Years', count: 4142 },
    { label: '4 Years', count: 4142 },
    { label: '5 Years', count: 4142 },
    { label: '6 Years', count: 4142 },
  ];
  const studyModeFilterOption = [
    { label: 'Full TIme', count: 4142 },
    { label: 'Distance', count: 4142 },
    { label: 'Regular / Distance', count: 4142 },
    { label: 'Regular', count: 4142 },
  ];
  return (
    <>
      <CoursesBanner />
      {/* <CoursesTopSearch /> */}
      <section className="course-listing-section pt-50 pb-50">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-3">
                    <aside className="filter-col">
                        <div className="accordion" id="duration_accordion">
                            <ApplyFilter  inputField={yearsFilterOption} isSearchBar={false} label="Duration" />
                        </div>

                        <div className="accordion" id="studymode_accordion">
                                                       <ApplyFilter  inputField={studyModeFilterOption} isSearchBar={false} label="Study Mode" />

                        </div>

                        
                     </aside>

                </div> */}
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="mb-4">
                    <p className="totalSearch-courses">
                      Total <span>{allCourseData.length}</span> Courses
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="row"> */}
              <CourseCard />
              {/* <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon1} alt="courseIcon1" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>Engineering</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon2} alt="courseIcon2" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>LAW</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon3} alt="courseIcon3" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>MEDICAL</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon4} alt="courseIcon4" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>SCIENCE</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon5} alt="courseIcon5" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>Management</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon6} alt="courseIcon6" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>Pharmacy</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon7} alt="courseIcon7" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>Commerce</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon8} alt="courseIcon8" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>Journalism</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon9} alt="courseIcon9" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>FILM & Media</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon10} alt="courseIcon10" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>Hotel Management</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon11} alt="courseIcon11" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>Agriculture</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="couses-listing-grid d-flex align-items-center">
                                <div className="course-list-leftbox yellow-bg">
                                    <img src={courseIcon12} alt="courseIcon12" />
                                </div>
                                <div className="course-list-rightbox">
                                    <h2>BUsiness administration</h2>
                                    <p>2345 University</p>
                                </div>
                            </div>
                        </div> */}

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <CustomFaq />
    </>
  );
}
