import React from 'react';
import { useSelector } from 'react-redux';

export default function CourseDetailsBanner() {
  const { courseDetailsById } = useSelector((state) => state.common);

  return (
    <section className="inner-pagebanner-section text-center section-padding position-relative">
      <div className="container">
        <h1>{courseDetailsById?.basicCourseDetails?.course_name}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item active" aria-current="page">
              list of Courses in India
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
