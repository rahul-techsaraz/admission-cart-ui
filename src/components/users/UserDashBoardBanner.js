import React from 'react'
import { Link } from 'react-router-dom'
import constants from '../../utils/Constants/constants'

export default function UserDashBoardBanner() {
  return (
    <section className="main">
        <div className="container">
      <div className="firstletter-name">
           <div className="firstletter">
            <h1>J</h1>
           </div>
           <div className="name">
            <h1> Welcome, Jayanta Kumar Mondal</h1>
            <p className="profile"><a href="#">Manage your Profile</a></p>
            <p className="admission"><a href="#">Track your Admission Journey</a></p>
           </div>
      </div>


      <div className="contain">
        <div className="steps">
            <div className="steps-span-p">
          <span className="circle active"><i className="fa-solid fa-user"></i></span>
          <p className="steps-p">Profile <br/> Building</p>
        </div>

        <div className="steps-span-p">
          <span className="circle active"><img src={constants.images.users.chat} alt="chat-img"/></span>
          <p className="steps-p">Expert Counsellor <br/>is Assigned</p>
        </div>
        <div className="steps-span-p">
            <span className="circle active"><i className="fa-solid fa-thumbs-up"></i></span>
            <p className="steps-p">Recommendation is Build</p>
          </div>
          <div className="steps-span-p">
            <span className="circle active"><img src={constants.images.users.shortlist} alt="shortlist"/></span>
            <p className="steps-p">Shortlisting of Colleges</p>
          </div>
          <div className="steps-span-p">
            <span className="circle"><img src={constants.images.users.form} alt="contact"/></span>
            <p className="steps-p">Fill your College Application</p>
          </div>
          <div className="steps-span-p">
            <span className="circle"><img src={constants.images.users.categories} alt="categary-img"/></span>
            <p className="steps-p">Admission RM is Assigned</p>
          </div>
          <div className="steps-span-p">
            <span className="circle"><i className="fa-solid fa-arrow-up-from-bracket"></i></span>
            <p className="steps-p">Upload your Documents</p>
          </div>
          <div className="steps-span-p">
            <span className="circle"><i className="fa-solid fa-comments-dollar"></i></span>
            <p className="steps-p">College Fee Submission</p>
          </div>
          <div className="steps-span-p">
            <span className="circle"><img src={constants.images.users.checkMark} alt="admission"/></span>
            <p className="steps-p">Admission Confirmation</p>
          </div>
          <div className="steps-span-p">
            <span className="circle"><i className="fa-solid fa-gift"></i></span>
            <p className="steps-p">Upload Documents & Claim your Gift</p>
          </div>
          <div className="progress-bar23">
            <span className="indicator"></span>
          </div>
        </div>
        <div className="buttons">
            <button id="prev" disabled>Prev</button>
            <button id="next">Next</button>
          </div>
      </div>
    </div>
    </section>
  )
}
