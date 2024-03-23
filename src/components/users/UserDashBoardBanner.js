import React from 'react'
import { Link } from 'react-router-dom'
import constants from '../../utils/Constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { upDateActiveMenu } from '../../features/commonSlice'

export default function UserDashBoardBanner() {
  const {fullName} = useSelector((state)=>state.common)
  const dispatch = useDispatch()
  return (
    <section className="main">
        <div className="container">
      <div className="firstletter-name">
           <div className="firstletter">
            <h1>{fullName.charAt(0).toUpperCase()}</h1>
           </div>
           <div className="name">
            <h1> Welcome, {fullName}</h1>
            <p className="profile">Manage your Profile</p>
            <p className="admission">Track your Admission Journey</p>
           </div>
      </div>


      <div className="contain">
        <div className="steps">
            <div className="steps-span-p">
          <Link to={"/user/dashboard/profile"}><span className="circle active" onClick={()=>dispatch(upDateActiveMenu({index:1}))}><i className="fa-solid fa-user"></i></span></Link>
          <p className="steps-p">Profile <br/> Building</p>
        </div>

        <div className="steps-span-p">
          <Link to={"/user/dashboard/counsellor"}><span className="circle active" onClick={()=>dispatch(upDateActiveMenu({index:6}))}><img src={constants.images.users.chat} alt="chat-img"/></span></Link>
          <p className="steps-p">Expert Counsellor <br/>is Assigned</p>
        </div>
        <div className="steps-span-p">
            <Link to={"/user/dashboard/collages"}><span className="circle active" onClick={()=>dispatch(upDateActiveMenu({index:3}))}><i className="fa-solid fa-thumbs-up"></i></span></Link>
            <p className="steps-p">Recommendation is Build</p>
          </div>
          <div className="steps-span-p">
            <Link to={"/user/dashboard/collages"}><span className="circle active" onClick={()=>dispatch(upDateActiveMenu({index:3}))}><img src={constants.images.users.shortlist} alt="shortlist"/></span></Link>
            <p className="steps-p">Shortlisting of Colleges</p>
          </div>
          <div className="steps-span-p">
            <Link to={"/user/dashboard/collages"}><span className="circle" onClick={()=>dispatch(upDateActiveMenu({index:3}))}><img src={constants.images.users.form} alt="contact"/></span></Link>
            <p className="steps-p">Fill your College Application</p>
          </div>
          <div className="steps-span-p">
            <Link to={"/user/dashboard/"}><span className="circle"><img src={constants.images.users.categories} alt="categary-img"/></span></Link>
            <p className="steps-p">Admission RM is Assigned</p>
          </div>
          <div className="steps-span-p">
            <Link to={"/user/dashboard/document"}><span className="circle" onClick={()=>dispatch(upDateActiveMenu({index:5}))}><i className="fa-solid fa-arrow-up-from-bracket"></i></span></Link>
            <p className="steps-p">Upload your Documents</p>
          </div>
          <div className="steps-span-p">
            <Link to={"/user/dashboard/payment"}><span className="circle" ><i className="fa-solid fa-comments-dollar"></i></span></Link>
            <p className="steps-p">College Fee Submission</p>
          </div>
          <div className="steps-span-p">
            <Link to={"/user/dashboard/insurance"}><span className="circle"><img src={constants.images.users.checkMark} alt="admission"/></span></Link>
            <p className="steps-p">Admission Confirmation</p>
          </div>
          <div className="steps-span-p">
            <Link><span className="circle"><i className="fa-solid fa-gift"></i></span></Link>
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
