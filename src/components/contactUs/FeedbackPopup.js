import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { saveUserFeedback } from '../ReduxThunk/CommonThunk'
import constants from '../../utils/Constants/constants'
import { toggelIsFeedBackPopup } from '../../features/commonSlice'
import { useFetchUserFeedback } from '../hooks/useFetchUserFeedback'

const FeedbackPopup = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const {userInfo, feedback} = useSelector(state=>state.userSlice)
    const {fetchFeedback} = useFetchUserFeedback()
    const handleSubmit = async() => {
        try{
            const payload = {
                "email":userInfo.email,
                "user_name":userInfo.full_name,
                "feedback": feedback.length > 0 ? [...feedback, message] : [message],
                "status":"RESOLVED",
                "phone_number":userInfo.phone
            }
            const response = await dispatch(saveUserFeedback({
                url : constants.apiEndPoint.USER_FEADBACK,
                method :  feedback.length > 0 ? constants.apiMethod.PUT : constants.apiMethod.POST,
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
    <div className="main-popup-full-box-parent">
        <div className="popup-main-container" id="popup-main-container1">
            <div className="popup-main-container-child">
                <div className="popup-close-btn-container">
                    <button className="popup-close-btn-x" id="close-btn" onClick={()=>dispatch(toggelIsFeedBackPopup({flag:false}))}>X</button>
                </div>
                <div className="popup-container-start">
                    <div className="popup-container-image-img">
                        <img src={logo} alt="Admission Kart Image"/>
                        <h3 className="popup-heading-h3">Share Your Feedback</h3>
                    </div>
                    <div className="form-div-start">
                        <textarea id="popup-textarea-show" name="textarea" rows="4" cols="50" placeholder="Message" onChange={(e)=> setMessage(e.target.value)}></textarea>
                        <button className="popup-submit-btn-btn" onClick={()=>handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeedbackPopup