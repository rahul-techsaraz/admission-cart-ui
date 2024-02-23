import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDashBoardBanner() {
  return (
    <section class="main">
        <div class="container">
      <div class="firstletter-name">
           <div class="firstletter">
            <h1>J</h1>
           </div>
           <div class="name">
            <h1> Welcome, Jayanta Kumar Mondal</h1>
            <p class="profile"><Link>Manage your Profile</Link></p>
            <p class="admission"><Link>Track your Admission Journey</Link></p>
           </div>
      </div>

      <div class="progress-wraper">
        <div class="progress-bar-container">
            <ul>
                <li class="step step1">
                    <div class="step-inner">Profile <br />Building</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">Expert Counsellor is Assigned</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">Recommendation is Build</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">Shortlisting of Colleges</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">Fill your College Application</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">Admission RM is Assigned</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">Upload your Documents</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">College Fee Submission</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">Admission Confirmation</div>
                </li>
                <li class="step step1">
                    <div class="step-inner">Upload Documents & Claim your Gift</div>
                </li>
            </ul>
            <div id="line">
                <div id="line-proces"></div>
            </div>
        </div>
      </div>
    </div>
    </section> 
  )
}
