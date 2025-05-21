import React, { useEffect } from 'react';
import ExamLandingBanner from './ExamLandingBanner';
import ExamDetailsLeftBox from './ExamDetailsLeftBox';
import { useParams } from 'react-router-dom';
import { useFetchExamById } from '../../hooks/useFetchExamById';
import { shallowEqual, useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';

export default function ExamDetails() {
  const { exam_id } = useParams();
  const { fetchExam } = useFetchExamById();
  const { examDetailsById, allExamData, allCollegeData } = useSelector((state) => state.common, shallowEqual);
  useEffect(() => {
    fetchExam(exam_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exam_id]);
  if (!examDetailsById || Object.keys(examDetailsById).length === 0) {
    return <Loader />;
  }
  return (
    <>
      <ExamLandingBanner examDetails={examDetailsById} />
      <section className="exam-details-section pt-50">
        <div className="container">
          <div className="row">
            {/* exam_details_rightcol */}
            {/* <ExamDetailsRightCol /> */}
            {/* exam_details_leftBox */}
            <ExamDetailsLeftBox
              examDetails={examDetailsById}
              allExamData={allExamData}
              allCollegeData={allCollegeData}
            />
          </div>
        </div>
      </section>
    </>
  );
}
