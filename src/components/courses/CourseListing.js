import React from 'react';
import './courselist.css';
import CoursesBanner from './CoursesBanner';
import CourseCard from './course_details/CourseCard';
import { useSelector } from 'react-redux';
import CustomFaq from '../colleges/CustomFaq';

export default function CourseListing() {
  const { allCourseData } = useSelector((state) => state.common);

  return (
    <>
      <CoursesBanner />
      {/* <CoursesTopSearch /> */}
      <section className="course-listing-section section-padding">
        <div className="container">
          <div className="row">
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
              {/* <div className="course-grid">
                {allCourseData.map((course) => (
                  <NewCourseCard />
                ))}
              </div> */}
              <CourseCard />
            </div>
          </div>
        </div>
      </section>
      <CustomFaq />
    </>
  );
}
