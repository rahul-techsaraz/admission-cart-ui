import React, { useEffect, useState } from 'react'
import constants from '../../utils/Constants/constants'
import { useSelector } from 'react-redux'

export default function UserDashBoardBanner() {
  const [isComplete, setIsComplete] = useState({
          basicDetails: false,
          educationalDetails: false,
          preferences: false,
          recomendation: false,
          shortlisting: false,
          documentUploaded: false,
      })
  const {userInfo, userQualificationInfo, userPreferenceInfo, userShortListedColleges, userDocument} = useSelector((state)=>state.userSlice)
  const calculateProfileBuildPercentage = () =>{
    const requiredFields = [
        'full_name',
        'dob',
        'social_category',
        'gender',
        'marital_status',
        'physically_challenged',
        'phone',
        'email',
        'city',
        'state',
    ]
    if(Object.keys(userInfo).filter((info)=>requiredFields.includes(info)).length === requiredFields.length && isComplete.basicDetails === false){
        setIsComplete({...isComplete, basicDetails:true})
    }
    if(userQualificationInfo.length > 0 && isComplete.educationalDetails === false){
        setIsComplete({...isComplete, educationalDetails:true})
    }
    if(userPreferenceInfo.length > 0 && isComplete.preferences === false){
        setIsComplete({...isComplete, preferences:true, recomendation:true})
    }
    if(userShortListedColleges.college_id !== '' && isComplete.shortlisting === false){
        setIsComplete({...isComplete, shortlisting:true})
    }
    if(Object.keys(userDocument).filter((data)=> [
        'aadhaar_card',
        'certificate_10th',
        'certificate_12th',
        'graduation_certificate',
        'pan_card',
        'pg_certificate',
      ].includes(data)).length > 0 && isComplete.documentUploaded === false){
        setIsComplete({...isComplete, documentUploaded:true})
      }
  }
  const calculateWidth = () => {
    if(isComplete.basicDetails && isComplete.educationalDetails && isComplete.preferences && isComplete.recomendation &&isComplete.preferences){
      return '99%'
    }else if(isComplete.basicDetails && isComplete.educationalDetails && isComplete.preferences && isComplete.recomendation){
      return '66%'
    }else if(isComplete.basicDetails && isComplete.educationalDetails && isComplete.preferences){
      return '33%'
    }else{
      return ''
    }
  }
  useEffect(()=>{
    calculateProfileBuildPercentage()
  },[userInfo, userQualificationInfo, userPreferenceInfo, userShortListedColleges, userDocument])
  return (
    <section className="main">
        <div className="container">
      <div className="firstletter-name">
           <div className="firstletter">
            <h1>{userInfo.full_name && userInfo?.full_name.charAt(0).toUpperCase()}</h1>
           </div>
           <div className="name">
            <h1> Welcome, {userInfo?.full_name}</h1>
            <p className="profile">Manage your Profile</p>
            <p className="admission">Track your Admission Journey</p>
           </div>
      </div>


      <div className="contain">
        <div className="steps">
          <div className="steps-span-p">
            <span className={isComplete.basicDetails && isComplete.educationalDetails && isComplete.preferences ? "circle active" : "circle"}><i className="fa-solid fa-user"></i></span>
            <p className="steps-p">Profile <br/> Building</p>
          </div>

          {/* <div className="steps-span-p">
            <Link to={"/user/dashboard/counsellor"}><span className="circle active" onClick={()=>dispatch(upDateActiveMenu({index:6}))}><img src={constants.images.users.chat} alt="chat-img"/></span></Link>
            <p className="steps-p">Expert Counsellor <br/>is Assigned</p>
          </div> */}
        
          <div className="steps-span-p">
            <span className={isComplete.recomendation ? "circle active" : "circle"}><i className="fa-solid fa-thumbs-up"></i></span>
            <p className="steps-p">Recommendation is Build</p>
          </div>
          
          <div className="steps-span-p">
            <span className={isComplete.shortlisting ? "circle active" : "circle"}><img src={constants.images.users.shortlist} alt="shortlist"/></span>
            <p className="steps-p">Shortlisting of Colleges</p>
          </div>
          
          {/* <div className="steps-span-p">
            <Link to={"/user/dashboard/collages"}><span className="circle" onClick={()=>dispatch(upDateActiveMenu({index:3}))}><img src={constants.images.users.form} alt="contact"/></span></Link>
            <p className="steps-p">Fill your College Application</p>
          </div> */}
          
          {/* <div className="steps-span-p">
            <Link to={"/user/dashboard/"}><span className="circle"><img src={constants.images.users.categories} alt="categary-img"/></span></Link>
            <p className="steps-p">Admission RM is Assigned</p>
          </div> */}
          
          <div className="steps-span-p">
            <span className={isComplete.documentUploaded ? "circle active" : "circle"}><i className="fa-solid fa-arrow-up-from-bracket"></i></span>
            <p className="steps-p">Upload your Documents</p>
          </div>
          
          {/* <div className="steps-span-p">
            <Link to={"/user/dashboard/payment"}><span className="circle" ><i className="fa-solid fa-comments-dollar"></i></span></Link>
            <p className="steps-p">College Fee Submission</p>
          </div> */}
          
          {/* <div className="steps-span-p">
            <Link to={"/user/dashboard/insurance"}><span className="circle"><img src={constants.images.users.checkMark} alt="admission"/></span></Link>
            <p className="steps-p">Admission Confirmation</p>
          </div> */}
          
          {/* <div className="steps-span-p">
            <Link><span className="circle"><i className="fa-solid fa-gift"></i></span></Link>
            <p className="steps-p">Upload Documents & Claim your Gift</p>
          </div> */}
          
          <div className="progress-bar23">
            <span className="indicator" style={{width:`${calculateWidth()}`}}></span>
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
