import React, { useEffect, useState } from 'react';
import '../../css/profilepage-collage-dekho.css';
import '../../css/responsive-profile-page.css';
import Sidebar from './Sidebar';
import ProfileTheme from '../../utils/Constants/custom-components/ProfileTheme';
import { Link } from 'react-router-dom';
import CustomInputTextBox from '../../utils/Constants/custom-components/CustomInputTextBox';
import CustomSelectBox from '../../utils/Constants/custom-components/CustomSelectBox';
import CustomeInputRadio from '../../utils/Constants/custom-components/CustomeInputRadio';
import httpFetch from '../../fetch/useFetch';
import constants from '../../utils/Constants/constants';

export default function Profile() {
    const [show, setShow] = useState(true)
    const [fullName, setFullName] = useState('')
    const [dob, setDob] = useState('')
    const [socialCategory, setSocialCategory] = useState('')
    const [gender, setGender] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [physicallyChallanged, setPhysicallyChallanged] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [toggleButton, setToggleButton] = useState(true)

    const userinfo = JSON.parse(localStorage.getItem('loginResponse'))
    const handleEdit = async ()=>{
        const response = await httpFetch(constants.apiEndPoint.USER_DETAILS_GET_ALL_USER_TO_VERIFY+userinfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
        if(response.data === false){
            
        }else{
            setToggleButton(false)
        }
        setShow(false)
    }
    const handleSave = async ()=>{
        const payload = {
            "requestType": "userDetails",
            "email": userinfo.email,
            "full_name": fullName,
            "city": city,
            "state": state,
            "country": "India",
            "dob": dob,
            "gender": gender,
            "marital_status": maritalStatus,
            "physically_challenged": physicallyChallanged,
            "social_category": socialCategory
        }
        const response = await httpFetch(constants.apiEndPoint.USER_DETAILS_GET_ALL_USER_TO_VERIFY, constants.apiMethod.POST,constants.apiHeader.HEADER, payload)
        setShow(true)
    }
    const handleUpdate = async ()=>{
        const payload = {
            "requestType": "userDetails",
            "email": userinfo.email,
            "full_name": fullName,
            "city": city,
            "state": state,
            "country": "India",
            "dob": dob,
            "gender": gender,
            "marital_status": maritalStatus,
            "physically_challenged": physicallyChallanged,
            "social_category": socialCategory
        }
        const response = await httpFetch(constants.apiEndPoint.USER_DETAILS_GET_ALL_USER_TO_VERIFY, constants.apiMethod.PUT,constants.apiHeader.HEADER, payload)
        setShow(true)
    }
    useEffect(()=>{
        console.log(gender, maritalStatus, physicallyChallanged)
        
    },[gender, maritalStatus, physicallyChallanged])
  return (
    <>
        <section className="profile-page">
            <div className="container">
                <div className="side-bar">
                    <Sidebar/>
                    {show===true ? 
                        <>
                            <ProfileTheme>
                                <div className="besic-detials-h3-i">
                                    <h3>Basic Details</h3>
                                    <Link><i className="fa-solid fa-pen-fancy" onClick={()=>handleEdit()}></i></Link>
                                </div>
                                <div className="fname-dob-social">
                                    <div className="full-name">Full Name
                                        <h3 className="full-name-h3">{userinfo.full_name}</h3>
                                    </div>
                                    <div className="dob">DOB
                                        <h3 className="do-b">N/A</h3>
                                    </div>
                                    <div className="social-category">Social Category
                                        <h3 className="social">N/A</h3>
                                    </div>

                                    <div className="gender">Gender
                                        <h3 className="gender-h3">N/A</h3>
                                    </div>
                                    <div className="marital-status">Marital Status
                                        <h3 className="marital-h3">N/A</h3>
                                    </div>
                                    <div className="physically-challenged">Physically challenged?
                                        <h3 className="physically-h3">N/A</h3>
                                    </div>
                                    <div className="full-name">Mobile Number
                                        <h3 className="full-name-h3">{userinfo.phone}</h3>
                                    </div>
                                    <div className="dob">Email address
                                        <h3 className="do-b">{userinfo.email}</h3>
                                    </div>
                                    <div className="social-category">City
                                        <h3 className="social">N/A</h3>
                                    </div>
                                    <div className="gender">State
                                        <h3 className="gender-h3">N/A</h3>
                                    </div>
                                </div>
                            </ProfileTheme>
                            {/* <ProfileTheme>
                                <div className="education-detials-h3-i">
                                    <h3>Education Details</h3>
                                    <a href="#"><i className="fa-solid fa-pen-fancy"></i></a>
                                </div>
                                <h4 className="education-h4">className X</h4>
                                <div className="educationl-details-wraper">
                                    <div className="full-name">Board
                                        <h3 className="full-name-h3">N/A</h3>
                                    </div>
                                    <div className="dob">School
                                        <h3 className="do-b">N/A</h3>
                                    </div>
                                    <div className="social-category">Passing Year
                                        <h3 className="social">N/A</h3>
                                    </div>

                                    <div className="gender">Marks Type
                                        <h3 className="gender-h3">N/A</h3>
                                    </div>
                                    <div className="marital-status">Percentage/ CGPA
                                        <h3 className="marital-h3">N/A</h3>
                                    </div>
                                </div>
                            </ProfileTheme> */}
                        </>
                        : 
                        <>
                            <ProfileTheme>
                                <div className="besic-detials-h3-i">
                                    <h3>Basic Details</h3>
                                </div>
                                <div className="fname-dob-social-hide">
                                    <CustomInputTextBox 
                                        divlable="Full Name"
                                        inputType="text"
                                        spellcheck="false"
                                        inputLabel="Full Name"
                                        onChange={(e)=>setFullName(e.target.value)}
                                        style={{fontWeight:"600"}}
                                    />
                                    <CustomInputTextBox 
                                        divlable="DOB"
                                        inputType="date"
                                        inputId="birth_date"
                                        inputName="birth_date"
                                        onChange={(e)=>setDob(e.target.value)}
                                        style={{fontWeight:"600"}}
                                    />
                                    <CustomSelectBox
                                        divlable="Social Category" 
                                        name="test"
                                        arialInvalid="false"
                                        onChange={(e)=>setSocialCategory(e.target.value)}
                                        style={{fontWeight:"600"}}
                                    />
                                    <CustomeInputRadio 
                                        divlable="Gender"
                                        style={{fontWeight: "600"}}
                                        options={['Male', 'Female', 'Others']}
                                        onChange={(e)=>setGender(e.target.value)}
                                    />
                                    <CustomeInputRadio 
                                        divlable="Marital Status"
                                        style={{fontWeight: "600"}}
                                        options={['Married', 'Unmarried']}
                                        onChange={(e)=>setMaritalStatus(e.target.value)}
                                    />
                                    <CustomeInputRadio 
                                        divlable="Physically Challanged?"
                                        style={{fontWeight: "600"}}
                                        options={['Yes', 'No']}
                                        onChange={(e)=>setPhysicallyChallanged(e.target.value)}
                                    />
                                    <CustomInputTextBox 
                                        divlable="City"
                                        inputType="text"
                                        spellcheck="false"
                                        inputLabel="City"
                                        onChange={(e)=>setCity(e.target.value)}
                                        style={{fontWeight:"600"}}
                                    />
                                    <CustomInputTextBox 
                                        divlable="State"
                                        inputType="text"
                                        spellcheck="false"
                                        inputLabel="State"
                                        onChange={(e)=>setState(e.target.value)}
                                        style={{fontWeight:"600"}}
                                    />
                                </div>
                                <div className="besic-detials-all-text-hide-button-parent">
                                    <button className="besic-detials-all-text-hide-button1" onClick={()=>setShow(true)}>Cancle</button>
                                    {toggleButton===true?
                                        <button className="besic-detials-button-save" onClick={()=>handleSave()}>Save</button> 
                                        :
                                        <button className="besic-detials-button-save" onClick={()=>handleUpdate()}>Update</button>
                                    }
                                    
                                    
                                </div>
                            </ProfileTheme>
                        </>
                        }
                </div>
            </div>
        </section>
    </>
  )
}
