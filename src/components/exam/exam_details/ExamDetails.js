import React from 'react'
import ExamLandingBanner from './ExamLandingBanner'
import ExamDetailsRightCol from './ExamDetailsRightCol'
import ExamDetailsLeftBox from './ExamDetailsLeftBox'

export default function ExamDetails() {
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
