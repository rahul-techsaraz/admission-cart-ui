import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseSyllabus = ({ courseDetails, setReadmore, readmore }) => {
  const syllabusList = Array.isArray(courseDetails?.syllabus_details) ? courseDetails.syllabus_details : [];

  return (
    <>
      <div className="course-details-left-innerBox mb-5">
        <h2 className="imgText-heading mb-4">
          {courseDetails?.slug ? `${courseDetails.slug} Syllabus` : 'Course Syllabus'}
        </h2>

        {syllabusList.length > 0 &&
          syllabusList.map((syllabus, index) => (
            <div key={index}>
              <p className="course-details-yearsyllabus text-start">Year: {syllabus?.year ?? 'N/A'}</p>
              <p className="course-details-yearsyllabus text-start">Semester/Year: {syllabus?.type ?? 'N/A'}</p>

              <ul className="course-details-criteria-list d-flex flex-wrap mb-4">
                {Array.isArray(syllabus?.subjects) && syllabus.subjects.length > 0 ? (
                  syllabus.subjects.map((subject, i) => <li key={i}>{subject}</li>)
                ) : (
                  <li>No subjects available</li>
                )}
              </ul>
            </div>
          ))}

        {/* {syllabusList.length > 3 && (
          <div className="text-start mt-5">
            <Link
              className="course-details-readmore-btn btn"
              onClick={() => setReadmore({ ...readmore, syllabusDetails: !readmore.syllabusDetails })}
            >
              {!readmore.syllabusDetails ? 'Read More' : 'Read Less'}
            </Link>
          </div>
        )} */}
      </div>
      <div className="course-details-left-innerBox mb-5">
        <h2 className="imgText-heading mb-4">{`About ${courseDetails?.slug} Placement`}</h2>

        {!readmore.course_placement_description &&
        courseDetails?.course_descriptions?.coursePlacementDescription?.length > 300 ? (
          <p className="imgText-para">
            {courseDetails.course_descriptions.coursePlacementDescription.replace(/<[^>]+>/g, '').slice(0, 300)}
            ...
          </p>
        ) : (
          <div
            className="imgText-para td-inner-html"
            dangerouslySetInnerHTML={{
              __html:
                courseDetails?.course_descriptions?.coursePlacementDescription ||
                '<p>No placement description available.</p>',
            }}
          />
        )}

        {courseDetails?.course_descriptions?.coursePlacementDescription?.length > 300 && (
          <div className="text-start mt-5">
            <Link
              className="course-details-readmore-btn btn"
              onClick={() =>
                setReadmore({
                  ...readmore,
                  course_placement_description: !readmore.course_placement_description,
                })
              }
            >
              {!readmore.course_placement_description ? 'Read More' : 'Read Less'}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

CourseSyllabus.propTypes = {
  courseDetails: PropTypes.shape({
    slug: PropTypes.string,
    syllabus_details: PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        type: PropTypes.string,
        subjects: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
  readmore: PropTypes.shape({
    syllabusDetails: PropTypes.bool.isRequired,
  }).isRequired,
  setReadmore: PropTypes.func.isRequired,
};

export default CourseSyllabus;
