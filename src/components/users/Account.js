import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../../css/account-collagedekho.css'
import '../../css/account-responsive.css'
import { toggelIsFeedBackPopup } from '../../features/commonSlice'
import constants from '../../utils/Constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchUserFeedback } from '../hooks/useFetchUserFeedback'
import { saveUserFeedback } from '../ReduxThunk/CommonThunk'

export default function Account() {
  const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const {userInfo, feedback} = useSelector(state=>state.userSlice)
    const {fetchFeedback} = useFetchUserFeedback()
    const handleSubmit = async() => {
        try{
            const payload = {
                "email":userInfo.email,
                "user_name":userInfo.full_name,
                "feedback": feedback ? `${feedback}, ${message}` : message,
                "status":"RESOLVED",
                "phone_number":userInfo.phone
            }
            const response = await dispatch(saveUserFeedback({
                url : feedback ? constants.apiEndPoint.USER_FEADBACK_RESPONSE+userInfo.email : constants.apiEndPoint.USER_FEADBACK,
                method :  feedback ? constants.apiMethod.PUT : constants.apiMethod.POST,
                header : constants.apiHeader.HEADER,
                body : payload
            }))
            if(response.payload?.status===constants.apiResponseStatus.SUCCESS){
                fetchFeedback()
                dispatch(toggelIsFeedBackPopup({flag:false}))
            }
        }catch(err){
            alert("Something went wrong please try again later...")
        }
    }
    useEffect(()=>{
        fetchFeedback()
    },[])
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
            <Sidebar/>
        <div className="left-box">
            {/* <!--  --> */}
            <div className="notification-box">
               <h3>Notification & Reminders</h3>
               <p className="noti-p">Never miss important reminders & notifications about the latest education news and your admission journey status</p>
               <div className="noti-flexbox">
                <div className="emil-flexbox">
                    <div className="email-text">Email</div>
                    <div className="lavel-div">
                            <label>
                                <input className="toggle-checkbox" type="checkbox"/>
                               <div className="toggle-slot">
                               <div className="sun-icon-wrapper">
                                 <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                                 </div>
                                 <div className="toggle-button"></div>
                                 <div className="moon-icon-wrapper">
                                  <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                                   </div>
                                    </div>
                           </label>
                        </div>
                        </div>

<div className="emil-flexbox">
    <div className="email-text">SMS</div>
    <div className="lavel-div">
            <label>
                <input className="toggle-checkbox" type="checkbox"/>
               <div className="toggle-slot">
               <div className="sun-icon-wrapper">
                 <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                 </div>
                 <div className="toggle-button"></div>
                 <div className="moon-icon-wrapper">
                  <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                   </div>
                    </div>
           </label>
        </div>
        </div>


        <div className="emil-flexbox">
            <div className="email-text">Whatsapp</div>
            <div className="lavel-div">
                    <label>
                        <input className="toggle-checkbox" type="checkbox"/>
                       <div className="toggle-slot">
                       <div className="sun-icon-wrapper">
                         <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                         </div>
                         <div className="toggle-button"></div>
                         <div className="moon-icon-wrapper">
                          <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                           </div>
                            </div>
                   </label>
                </div>
                </div>


               </div>
            </div>
            {/* <!--  --> */}
            <div className="issu-box">
                 <h3>Report an Issue</h3>
                 <div className="issu-comment">
                    {/* <input type="text" className="issu-button" placeholder="What is your concern?"/> */}
                    <textarea className="issu-button" name="textarea" rows="4" cols="100" placeholder="What is your concern?" onChange={(e)=>setMessage(e.target.value)}></textarea>
                 </div>
                 <div className="submit-button-box">
                    <div className="submit-button from-center" onClick={()=>handleSubmit()}>Submit</div>
                  </div>
            </div>
        </div>

        </div>
        </div>
    </section>
    </>
  )
}
