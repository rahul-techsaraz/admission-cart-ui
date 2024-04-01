import React, { useEffect, useState } from 'react'
import ProfileTheme from '../../utils/Constants/custom-components/ProfileTheme'
import { Link } from 'react-router-dom'
import httpFetch from '../../fetch/useFetch'
import constants from '../../utils/Constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import CustomInputTextBox from '../../utils/Constants/custom-components/CustomInputTextBox'
import CustomSelectBox from '../../utils/Constants/custom-components/CustomSelectBox'
import CustomeInputRadio from '../../utils/Constants/custom-components/CustomeInputRadio'
import { updateUserInfo } from '../../features/userSlice'

export default function ProfileBasicDetails() {
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
    const [disable, setDisable] = useState(true)
    const dispatch = useDispatch()
    const {userInfo} = useSelector((state)=> state.userSlice)

    const userData = JSON.parse(localStorage.getItem('loginResponse'))
    const updateUserData = (data)=>{
        const updatedData = {...userData, ...data}
        dispatch(updateUserInfo({userData:updatedData}))
    }
    const validate = ()=>{
        if(fullName !== '' && dob !== '' && socialCategory !== '' && gender !== '' && maritalStatus !== '' &&
        physicallyChallanged !== '' && city !== '' && state !== ''){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }
    const handleEdit = async ()=>{
        const response = await httpFetch(constants.apiEndPoint.USER_DETAILS_GET_ALL_USER_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
        if(response.data !== false){
            setToggleButton(false)
        }
        setShow(false)
    }
    const handleSave = async ()=>{
        const payload = {
            "requestType": "userDetails",
            "email": userInfo.email,
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
        const response = await httpFetch(constants.apiEndPoint.USER_DETAILS_SAVE_UPDATE, constants.apiMethod.POST,constants.apiHeader.HEADER, payload)
        if(response.status==="success"){
            const response = await httpFetch(constants.apiEndPoint.USER_DETAILS_GET_ALL_USER_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
            if(response.data!==false){
                setFullName(response.data.full_name)
                setCity(response.data.city)
                setState(response.data.state)
                setDob(response.data.dob)
                setGender(response.data.gender)
                setMaritalStatus(response.data.marital_status)
                setPhysicallyChallanged(response.data.physically_challenged)
                setSocialCategory(response.data.social_category)
                updateUserData(response.data) 
            }
            setShow(true)
        }
    }
    const handleUpdate = async ()=>{
        const payload = {
            "requestType": "userDetails",
            "email": userInfo.email,
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
        const response = await httpFetch(constants.apiEndPoint.USER_DETAILS_SAVE_UPDATE, constants.apiMethod.PUT,constants.apiHeader.HEADER, payload)
        if(response.status==="success"){
            const response = await httpFetch(constants.apiEndPoint.USER_DETAILS_GET_ALL_USER_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
            if(response.data!==false){
                setFullName(response.data.full_name)
                setCity(response.data.city)
                setState(response.data.state)
                setDob(response.data.dob)
                setGender(response.data.gender)
                setMaritalStatus(response.data.marital_status)
                setPhysicallyChallanged(response.data.physically_challenged)
                setSocialCategory(response.data.social_category)
                updateUserData(response.data)
            }
            setShow(true)
        }
    }
    useEffect(()=>{
        validate()
    },[fullName, dob, socialCategory, gender, maritalStatus, physicallyChallanged, city, state])
    useEffect(()=>{
        console.log(userInfo)
    },[userInfo])
  return (
    
    <>
        {show===true ? 
        <>
            <ProfileTheme>
                <div className="besic-detials-h3-i">
                    <h3>Basic Details</h3>
                    <Link><i className="fa-solid fa-pen-fancy" onClick={()=>handleEdit()}></i></Link>
                </div>
                <div className="fname-dob-social">
                    <div className="full-name">Full Name
                        <h3 className="full-name-h3">{userInfo.full_name}</h3>
                    </div>
                    <div className="dob">DOB
                        <h3 className="do-b">{userInfo.dob ? userInfo.dob : 'N/A'}</h3>
                    </div>
                    <div className="social-category">Social Category
                        <h3 className="social">{userInfo.social_category ? userInfo.social_category : 'N/A'}</h3>
                    </div>

                    <div className="gender">Gender
                        <h3 className="gender-h3">{userInfo.gender ? userInfo.gender : 'N/A'}</h3>
                    </div>
                    <div className="marital-status">Marital Status
                        <h3 className="marital-h3">{userInfo.marital_status ? userInfo.marital_status : 'N/A'}</h3>
                    </div>
                    <div className="physically-challenged">Physically challenged?
                        <h3 className="physically-h3">{userInfo.physically_challenged ? userInfo.physically_challenged : 'N/A'}</h3>
                    </div>
                    <div className="full-name">Mobile Number
                        <h3 className="full-name-h3">{userInfo.phone}</h3>
                    </div>
                    <div className="dob">Email address
                        <h3 className="do-b">{userInfo.email}</h3>
                    </div>
                    <div className="social-category">City
                        <h3 className="social">{userInfo.city ? userInfo.city : 'N/A'}</h3>
                    </div>
                    <div className="gender">State
                        <h3 className="gender-h3">{userInfo.state ? userInfo.state : 'N/A'}</h3>
                    </div>
                </div>
            </ProfileTheme>
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
                        placeHolder={userInfo?.full_name}
                    />
                    <CustomInputTextBox 
                        divlable="DOB"
                        inputType="date"
                        inputId="birth_date"
                        inputName="birth_date"
                        onChange={(e)=>setDob(e.target.value)}
                        style={{fontWeight:"600"}}
                        placeHolder={userInfo?.dob}
                    />
                    <CustomSelectBox
                        divlable="Social Category" 
                        name="test"
                        arialInvalid="false"
                        onChange={(e)=>setSocialCategory(e.target.value)}
                        style={{fontWeight:"600"}}
                        values={['Social Category', 'General','OBC', 'SC', 'Others']}
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
                        placeHolder={userInfo?.city}
                    />
                    <CustomInputTextBox 
                        divlable="State"
                        inputType="text"
                        spellcheck="false"
                        inputLabel="State"
                        onChange={(e)=>setState(e.target.value)}
                        style={{fontWeight:"600"}}
                        placeHolder={userInfo?.state}
                    />
                </div>
                <div className="besic-detials-all-text-hide-button-parent">
                    <button className="besic-detials-all-text-hide-button1" onClick={()=>setShow(true)}>Cancle</button>
                    {toggleButton===true?
                        <button className="besic-detials-button-save" disabled={disable === true ? true : false} onClick={()=>handleSave()}>Save</button> 
                        :
                        <button className="besic-detials-button-save" onClick={()=>handleUpdate()}>Update</button>
                    }
                </div>
            </ProfileTheme>
        </>
        }
    </>
  )
}
