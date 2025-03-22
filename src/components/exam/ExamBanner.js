import React from 'react';
import { Link } from 'react-router-dom';

export default function ExamBanner() {
  return (
    <section className="inner-pagebanner-section text-center section-padding">
      <div className="container">
        <h1>Entrance Exams in 2024</h1>
        {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/exam">Exam</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">engineering college entrance exams</li>
                </ol>
            </nav> */}
      </div>
    </section>
  );
}
