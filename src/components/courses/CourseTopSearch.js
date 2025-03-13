import React from 'react';

export default function CoursesTopSearch() {
  return (
    <section className="course-topsearch-section py-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="topsearch-txt">Top Searches:</p>
            <div className="d-flex flex-wrap gap-3">
              <span className="course-topsearch-badge btn">Master of Arts</span>
              <span className="course-topsearch-badge btn">CA</span>
              <span className="course-topsearch-badge btn">MBA</span>
              <span className="course-topsearch-badge btn">B Pharmacy</span>
              <span className="course-topsearch-badge btn">Merchant Navy</span>
              <span className="course-topsearch-badge btn">Aeronautical Engineering</span>
              <span className="course-topsearch-badge btn">BBA</span>
              <span className="course-topsearch-badge btn">BCA</span>
              <span className="course-topsearch-badge btn">BSc</span>
              <span className="course-topsearch-badge btn">BSc Nursing</span>
              <span className="course-topsearch-badge btn">Alumni</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
