import React from 'react';
import ExamBanner from './ExamBanner';
import ExamCard from './exam_details/ExamCard';
import CustomFaq from '../colleges/CustomFaq';

export default function ExamListing() {
  return (
    <>
      <ExamBanner />
      <section className="exam-listing-section section-padding">
        <div className="container">
          <div className="">
            <div className="">
              <div className="">
                <ExamCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomFaq />
    </>
  );
}
