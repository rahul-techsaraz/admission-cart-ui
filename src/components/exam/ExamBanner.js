import React from 'react'
import { Link } from 'react-router-dom'

export default function ExamBanner() {
  return (
   <section class="inner-pagebanner-section text-center mb-5 pt-50 pb-50">
        <div class="container">
            <h1>Entrance Exams in  2023</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/exam">Exam</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">engineering college entrance exams</li>
                </ol>
            </nav>
        </div>
    </section>
  )
}
