import React, { useState } from 'react'
import { useUserCallbackRequest } from '../hooks/useUserCallbackRequest'
import { useDispatch } from 'react-redux'
import { showNotification, toggelIsContactUs } from '../../features/commonSlice'
import './ContactUsModal.css'

const ContactUsModal = () => {
    const [data, setdata] = useState({
        name: '',
        email: '',
        mobile: '',
        query_for: '',
        others: ''
    })
    const dispatch = useDispatch()
    const {sendUserCallbackRequest} = useUserCallbackRequest()
    const handleSubmit = () => {
        if(data.name === '' || data.email === '' || data.mobile === '' || data.query_for === '' || data.others === ''){
            dispatch(showNotification({
                isOpen: true,
                type: 'error',
                message: 'All fields need to be field',
            }))
            return
        }else{
            const payload = {
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                query_for: data.query_for,
                others: {message: data.others}
            }
            sendUserCallbackRequest(payload)
            dispatch(showNotification({
                isOpen: true,
                type: 'success',
                message: 'Your Query Submited Sucessfully',
            }))
            dispatch(toggelIsContactUs({ flag: false }))
        }
    }
  return (
    <div class="admission-cart-contact-model-main-parents-box1">
    <section class="admission-cart-contact-model">
        <div class="admission-cart-contact-model-cross-button" onClick={(e)=>dispatch(toggelIsContactUs({ flag: false }))}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="admission-cart-contact-model-filed">
            <div class="admission-cart-contact-model-filed-heading-text">
           <h1 class="admission-cart-contact-model-filed-heading-text-h1">contact us</h1>
           </div>
           <form class="admission-cart-contact-model-filed-form-filed">
                <input type="text" placeholder="Name" class="admission-cart-contact-model-filed-form-filed-name-email-phone" onChange={(e)=>setdata({...data, name: e.target.value})}/>
                <input type="text" placeholder="Email" class="admission-cart-contact-model-filed-form-filed-name-email-phone" onChange={(e)=>setdata({...data, email: e.target.value})}/>
                <input type="text" placeholder="Phone" class="admission-cart-contact-model-filed-form-filed-name-email-phone" onChange={(e)=>setdata({...data, mobile: e.target.value})}/>
                <select name="General Inquiry" id="admission-cart-contact-model-filed-form-filed-general-inquiry" onChange={(e)=>setdata({...data, query_for: e.target.value})}>
                    <option value="">Select...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admission Process Assistance">Admission Process Assistance</option>
                    <option value="Course Selection Guidance">Course Selection Guidance</option>
                    <option value="Fee Structure Information">Fee Structure Information</option>
                    <option value="College Shortlisting">College Shortlisting</option>
                    <option value="Exam Preparation Support">Exam Preparation Support</option>
                    <option value="Document Submission & Review">Document Submission & Review</option>
                    <option value="Scholarship/Financial Aid Info">Scholarship/Financial Aid Info</option>
                    <option value="Application Status Update">Application Status Update</option>
                    <option value="Technical Issues (Portal Login, Uploads, etc.)">Technical Issues (Portal Login, Uploads, etc.)</option>
                    <option value="Partner/Collaboration Request">Partner/Collaboration Request</option>
                    <option value="Other (Specify in Message)">Other (Specify in Message)</option>
                </select>
                <textarea rows="4" cols="50" placeholder="Message..." id="admission-cart-contact-model-filed-form-filed-textarea" onChange={(e)=>setdata({...data, others: e.target.value})}/>
           </form>
           <button id="admission-cart-contact-model-filed-submit-button-id" onClick={(e)=>handleSubmit()}>Submit</button>
        </div>
    </section>
    </div>
  )
}

export default ContactUsModal