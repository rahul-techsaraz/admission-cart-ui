import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseOfferedByCollage = ({
  collegeDetails = {},
  readmore = {},
  setReadmore,
  getCurrentYear,
  greyTickIcon,
  courseHighlight = [],
  handleLoginModalPopup,
  courseOffered = [],
}) => {
  const collegeName = collegeDetails?.college_name || '';
  const collegeDescription = collegeDetails?.description?.college_description || '';
  const collegeHighlightsDescription = collegeDetails?.description?.college_highlights_description || '';
  const collegeCourseDescription = collegeDetails?.description?.college_course_description || '';

  return (
    <>
      <div className="course-details-left-innerBox mb-5 text-center">
        <h2 className="imgText-heading mb-4">{collegeName ? `${collegeName} Overview` : 'Overview'}</h2>
        <p className="imgText-para">
          {collegeDescription.length > 300 && !readmore.overview
            ? collegeDescription.slice(0, 300) + '...'
            : collegeDescription}
        </p>
        {collegeDescription.length > 300 && (
          <div className="text-center">
            <Link
              className="theme-btn green-btn"
              onClick={() => setReadmore({ ...readmore, overview: !readmore.overview })}
            >
              {!readmore.overview ? 'Read More' : 'Read Less'}
            </Link>
          </div>
        )}
      </div>

      <div className="course-details-left-innerBox mb-5 text-center">
        <h2 className="imgText-heading mb-4">
          {collegeName ? `${collegeName} Highlights ${getCurrentYear()}` : 'Highlights'}
        </h2>
        <p className="imgText-para">
          {collegeHighlightsDescription.length > 300 && !readmore.highlightDescription
            ? `${collegeHighlightsDescription.slice(0, 300)}...`
            : collegeHighlightsDescription}
        </p>
        {collegeHighlightsDescription.length > 300 && (
          <div className="text-center">
            <Link
              className="theme-btn green-btn"
              onClick={() => setReadmore({ ...readmore, highlightDescription: !readmore.highlightDescription })}
            >
              {!readmore.highlightDescription ? 'Read More' : 'Read Less'}
            </Link>
          </div>
        )}
      </div>

      <div className="tick-heading d-flex align-items-center mb-4">
        <span className="tick-heading-icon d-inline-flex">
          {greyTickIcon ? <img src={greyTickIcon} alt="Tick icon" /> : null}
        </span>
        <h2>{collegeName ? `${collegeName} Top Courses & Fees` : 'Top Courses & Fees'}</h2>
      </div>

      {Array.isArray(courseHighlight) && courseHighlight.length > 0 && (
        <div className="exam-details-hightlisghts-sec mt-5">
          <div className="exam-details-hightlights-table">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <p>Courses</p>
                  </th>
                  <th>
                    <p>Annual Course Fees</p>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {courseHighlight.map((college, index) => (
                  <tr key={index}>
                    <td>
                      {college?.course_name || 'N/A'}
                      <span className="d-block">{college?.course_name || ''}</span>
                    </td>
                    <td>₹ {college?.sub_course_fee || '0'}</td>
                    <td className="position-relative">
                      <Link
                        className="management-clg-applybtn clginfo-applybtn"
                        onClick={() => handleLoginModalPopup && handleLoginModalPopup()}
                      >
                        Apply Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {courseHighlight.length > 4 && (
            <div className="text-start mt-5">
              <Link
                className="course-details-readmore-btn btn"
                onClick={() => setReadmore({ ...readmore, highlightCourses: !readmore.highlightCourses })}
              >
                {!readmore.highlightCourses ? 'Read More' : 'Read Less'}
              </Link>
            </div>
          )}
        </div>
      )}

      <div className="course-details-left-innerBox mb-5 text-center">
        <h2 className="imgText-heading mb-4">{collegeName ? `${collegeName} Courses & Fees` : 'Courses & Fees'}</h2>
        <p className="imgText-para">{collegeCourseDescription || 'No course description available.'}</p>
      </div>

      {Array.isArray(courseOffered) && courseOffered.length > 0 && (
        <div className="exam-details-hightlisghts-sec mt-5">
          <h5 className="mb-3">
            <strong>{collegeName ? `${collegeName} Fees and Course List` : 'Fees and Course List'}</strong>
          </h5>
          <div className="exam-details-hightlights-table">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <p>Courses</p>
                  </th>
                  <th>
                    <p>Annual Course Fees</p>
                  </th>
                  <th>
                    <p>Duration</p>
                  </th>
                  <th>
                    <p>Eligibility</p>
                  </th>
                  <th>
                    <p>Accepting Exam</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {courseOffered.map((course, index) => (
                  <tr key={course?.course_id || index}>
                    <td>{course?.course_name || 'N/A'}</td>
                    <td>{course?.sub_course_fee ? `₹ ${Number(course.sub_course_fee).toLocaleString()}` : '₹ 0.00'}</td>
                    <td>{course?.sub_course_duration ? `${course.sub_course_duration} Years` : 'N/A'}</td>
                    <td>
                      <div
                        className="td-inner-html"
                        dangerouslySetInnerHTML={{ __html: course?.eligibility_criteria || 'N/A' }}
                      />
                    </td>
                    <td>
                      <ul>
                        {Array.isArray(course?.course_accepting_exam) && course.course_accepting_exam.length > 0 ? (
                          course.course_accepting_exam.map((exam, idx) => <li key={`${exam}-${idx}`}>{exam}</li>)
                        ) : (
                          <li>N/A</li>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {courseOffered.length > 4 && (
            <div className="text-start mt-5">
              <Link
                className="course-details-readmore-btn btn"
                onClick={() => setReadmore({ ...readmore, allCourses: !readmore.allCourses })}
              >
                {!readmore.allCourses ? 'Read More' : 'Read Less'}
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

CourseOfferedByCollage.propTypes = {
  collegeDetails: PropTypes.shape({
    college_name: PropTypes.string,
    courseOffered: PropTypes.array,
    description: PropTypes.shape({
      college_description: PropTypes.string,
      college_highlights_description: PropTypes.string,
      college_course_description: PropTypes.string,
    }),
  }),
  readmore: PropTypes.shape({
    overview: PropTypes.bool,
    highlightDescription: PropTypes.bool,
    highlightCourses: PropTypes.bool,
    allCourses: PropTypes.bool,
  }),
  setReadmore: PropTypes.func.isRequired,
  getCurrentYear: PropTypes.func.isRequired,
  greyTickIcon: PropTypes.string,
  courseHighlight: PropTypes.arrayOf(
    PropTypes.shape({
      course_name: PropTypes.string,
      sub_course_fee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  handleLoginModalPopup: PropTypes.func,
  courseOffered: PropTypes.arrayOf(
    PropTypes.shape({
      course_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      course_name: PropTypes.string,
      sub_course_fee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sub_course_duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      eligibility_criteria: PropTypes.string,
      course_accepting_exam: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

CourseOfferedByCollage.defaultProps = {
  collegeDetails: {},
  readmore: {},
  greyTickIcon: '',
  courseHighlight: [],
  courseOffered: [],
  handleLoginModalPopup: () => {},
};

export default CourseOfferedByCollage;
