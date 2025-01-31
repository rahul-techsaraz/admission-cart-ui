import React from 'react'
import logo from '../../images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggelPopup } from '../../features/commonSlice'

function ContactUsPopup() {
    const {isPopup} = useSelector(state=>state.common)
    const dispatch = useDispatch()
  return (
    <div className="popup-main-container" id="popup-main-container1">
        <div className="popup-main-container-child">
            <div className="popup-close-btn-container">
                <button className="popup-close-btn-x" id="close-btn" onClick={()=>dispatch(toggelPopup({flag:false}))}>X</button>
            </div>
            <div className="popup-container-start">
                <div className="popup-container-image-img">
                    <img src={logo} alt=""/>
                    <h3 className="popup-heading-h3">Welcome To Admission Cart</h3>
                </div>
                <div className="form-div-start">
                    <form action="#" method="POST">
                        <input type="text" className="popup-name-input" id="name1" placeholder="Name" required/>
                        <input type="email" className="popup-email-input" id="email1" placeholder="Email" required/>
                        <div className="phone-container">
                            <input type="text" className="popup-country-code" placeholder="+91" required/>
                            <input type="text" className="popup-phone-input" placeholder="Mobile No." required/>
                        </div>
                        <select name="select-stream"  className="popup-select-stream" >
                            <option value="">Select Stream</option>
                            <option value="">Commerce and Banking</option>
                            <option value="">Design</option>
                            <option value="">Engineering</option>
                            <option value="">Management</option>
                            <option value="">Hotel Management</option>
                            <option value="">Information Technology</option>
                            <option value="">Media and Mass Communication</option>
                            <option value="">Medical</option>
                            <option value="">Retail</option>
                            <option value="">Arts and Humanities</option>
                            <option value="">Law</option>
                            <option value="">Science</option>
                            <option value="">Vocational</option>
                            <option value="">Others</option>
                            <option value="">Physical Education</option>
                            <option value="">Education</option>
                            <option value="">Paramedical</option>
                            <option value="">Agriculture</option>
                            <option value="">Nursing</option>
                            <option value="">Pharmacy</option>
                            <option value="">Dental</option>
                            <option value="">Performing Arts</option>
                        </select>
                        <textarea id="popup-textarea-show" name="textarea" rows="4" cols="50" placeholder="Message"/>
                        <button className="popup-submit-btn-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsPopup