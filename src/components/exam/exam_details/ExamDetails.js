import React, { useEffect } from 'react'
import ExamLandingBanner from './ExamLandingBanner'
import ExamDetailsRightCol from './ExamDetailsRightCol'
import ExamDetailsLeftBox from './ExamDetailsLeftBox'
import { useParams } from 'react-router-dom'
import { useFetchExamById } from '../../hooks/useFetchExamById';


export default function ExamDetails() {
  const {exam_id} = useParams()
  const {fetchExam} = useFetchExamById()
  useEffect(()=>{
    console.log("ExamDetails")
    fetchExam(exam_id)
  },[])
  return (
    <>
      <ExamLandingBanner />
  <section className="exam-details-section pt-50">
  <div className="container">
          <div className="row">
            {/* exam_details_rightcol */}
            {/* <ExamDetailsRightCol /> */}
            {/* exam_details_leftBox */}
            <ExamDetailsLeftBox />
          </div>
        </div>
        </section>
    </>
  )
}
