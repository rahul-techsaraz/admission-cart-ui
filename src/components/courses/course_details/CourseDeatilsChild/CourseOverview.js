import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseOverview = ({ courseDetails, readmore, setReadmore }) => {
  const courseName = courseDetails?.slug || 'Course';
  const courseDescription = courseDetails?.course_descriptions?.courseDescription || '';
  const eligibilityDescription = courseDetails?.course_descriptions?.courseEligibilityCriteriaDescription || '';
  const eligibilityCriteria = courseDetails?.eligibility_criteria || '';

  return (
    <>
      <div className="course-details-left-innerBox mb-5">
        <h2 className="imgText-heading mb-4">{`About ${courseName}`}</h2>
        {!readmore.course_description && courseDescription.length > 300 ? (
          <p className="imgText-para">{courseDescription.replace(/<[^>]+>/g, '').slice(0, 300)}...</p>
        ) : (
          <p className="imgText-para">{courseDescription.replace(/<[^>]+>/g, '')}</p>
        )}
        {courseDescription.length > 300 && (
          <div className="text-center">
            <Link
              className="theme-btn green-btn"
              onClick={() => setReadmore({ ...readmore, course_description: !readmore.course_description })}
            >
              {!readmore.course_description ? 'Read More' : 'Read Less'}
            </Link>
          </div>
        )}
      </div>

      <div className="course-details-left-innerBox mb-5">
        <h2 className="imgText-heading mb-4">{`${courseName} Eligibility Criteria`}</h2>
        {!readmore.course_eligibility_criteria_description && eligibilityDescription.length > 300 ? (
          <p className="imgText-para">{eligibilityDescription.replace(/<[^>]+>/g, '').slice(0, 300)}...</p>
        ) : (
          <p className="imgText-para">{eligibilityDescription.replace(/<[^>]+>/g, '')}</p>
        )}
        {eligibilityDescription.length > 300 && (
          <div className="text-center mb-4">
            <Link
              className="theme-btn green-btn"
              onClick={() =>
                setReadmore({
                  ...readmore,
                  course_eligibility_criteria_description: !readmore.course_eligibility_criteria_description,
                })
              }
            >
              {!readmore.course_eligibility_criteria_description ? 'Read More' : 'Read Less'}
            </Link>
          </div>
        )}

        <p className="imgText-para">
          <u>
            <strong>The eligibility criteria for {courseName} course can be checked below:</strong>
          </u>
        </p>
        <div>
          <p className="imgText-para">{eligibilityCriteria.replace(/<[^>]+>/g, '')}</p>
        </div>
      </div>
    </>
  );
};

CourseOverview.propTypes = {
  courseDetails: PropTypes.shape({
    slug: PropTypes.string,
    course_descriptions: PropTypes.shape({
      courseDescription: PropTypes.string,
      courseEligibilityCriteriaDescription: PropTypes.string,
    }),
    eligibility_criteria: PropTypes.string,
  }).isRequired,
  readmore: PropTypes.shape({
    course_description: PropTypes.bool,
    course_eligibility_criteria_description: PropTypes.bool,
  }).isRequired,
  setReadmore: PropTypes.func.isRequired,
};

export default CourseOverview;
