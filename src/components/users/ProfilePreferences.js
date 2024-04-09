import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomSelectBox from '../../utils/Constants/custom-components/CustomSelectBox'
import httpFetch from '../../fetch/useFetch'
import constants from '../../utils/Constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserCollegePreferences } from '../../features/userSlice'

export default function ProfilePreferences() {
    const [show, setShow] = useState(true)
    const [stream, setStream] = useState('')
    const [level, setLevel] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [location, setLocation] = useState('')
    const [collegeType, setCollegeType] = useState('')
    const [feeRange, setFeeRange] = useState('')
    const [colleges, setColleges] = useState('')
    const [interestedInStudyingAbroad, setInterestedInStudingAbroad] = useState('')
    const [needALoan, setNeedALoan] = useState('')
    const [toggleButton, setToggleButton] = useState(true)
    const [disable, setDisable] = useState(true)
    const {userInfo, userCollegePreferences} = useSelector((state)=> state.userSlice)
    const dispatch = useDispatch()


    const toFetch = async ()=>{
        try{
        const response = await httpFetch(constants.apiEndPoint.USER_PREFERENCE_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
        if(response.data.length > 0){
                dispatch(updateUserCollegePreferences({collegePreferences:response.data}))
                setToggleButton(false)
            }
        }
        catch(err){
            alert("Something went wrong")
        }
    }
    const handleEdit = async ()=>{
        const response = await httpFetch(constants.apiEndPoint.USER_PREFERENCE_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
        console.log(response.data)
        if(response.data.length > 0){
            setToggleButton(false)
        }
        setShow(false)
        console.log(toggleButton)
    }
    const handleSave = async ()=>{
        try{
            const payload = {
                "requestType": "collegePreferences",
                "email": userInfo.email,
                "stream": stream,
                "level": level,
                "specialization": specialization,
                "location": location,
                "college_type": collegeType,
                "fee_range": feeRange,
                "colleges": colleges,
                "interested_abroad": interestedInStudyingAbroad,
                "need_loan": needALoan
            }
            const response = await httpFetch(constants.apiEndPoint.USER_PREFERENCE_SAVE_UPDATE, constants.apiMethod.POST,constants.apiHeader.HEADER, payload)
            if(response.status==="success"){
                const response = await httpFetch(constants.apiEndPoint.USER_PREFERENCE_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
                if(response.data!==false){
                    dispatch(updateUserCollegePreferences({collegePreferences:response.data})) 
                }
                setShow(true)
            }
        }
        catch(err){
            alert("Something went Wrong")
        }
    }
    const handleUpdate = async ()=>{
        try{
            const payload = {
                "requestType": "collegePreferences",
                "email": userInfo.email,
                "stream": stream,
                "level": level,
                "specialization": specialization,
                "location": location,
                "college_type": collegeType,
                "fee_range": feeRange,
                "colleges": colleges,
                "interested_abroad": interestedInStudyingAbroad,
                "need_loan": needALoan
            }
            const response = await httpFetch(constants.apiEndPoint.USER_PREFERENCE_SAVE_UPDATE, constants.apiMethod.PUT,constants.apiHeader.HEADER, payload)
            if(response.status==="success"){
                const response = await httpFetch(constants.apiEndPoint.USER_PREFERENCE_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
                if(response.data!==false){
                    dispatch(updateUserCollegePreferences({collegePreferences:response.data}))
                }
                setShow(true)
            }
        }
        catch(err){
            alert("Something went Wrong")
        }
    }
    const validate = ()=>{
        if(stream !== '' && level !== '' && specialization !== '' && location !== '' && collegeType !== '' &&
        feeRange !== '' && colleges !== '' && interestedInStudyingAbroad !== '' && needALoan !== ''){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }
    useEffect(()=>{
        validate()
    },[stream, level, specialization, location, collegeType, feeRange, colleges, interestedInStudyingAbroad, needALoan])
    useEffect(()=>{
        toFetch()
    },[])
  return (
    <>
    {show ? 
        <div className="preferences">
            <div className="preferences-h3-i">
                <h3>Preferences</h3>
                <Link><i className="fa-solid fa-pen-fancy" onClick={()=>handleEdit()}></i></Link>
            </div>
            <div className="preferences-all-text">
                <div className="text">Stream
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].stream : "NA"}</h6>
                </div>
                <div className="text">Level
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].level : "NA"}</h6>
                </div>
                <div className="text">Specialization
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].specialization : "NA"}</h6>
                </div>
                <div className="text">Location
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].location : "NA"}</h6>
                </div>
                <div className="text">College Type
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].college_type : "NA"}</h6>
                </div>
                <div className="text">Fee Range
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].fee_range : "NA"}</h6>
                </div>
                <div className="text">Colleges
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].colleges : "NA"}</h6>
                </div>
                <div className="text">Interested in studying abroad?
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].interested_abroad : "NA"}</h6>
                </div>
                <div className="text">Need a loan?
                    <h6>{userCollegePreferences.length > 0 ? userCollegePreferences[0].need_loan : "NA"}</h6>
                </div>
            </div>
        </div>
        :
        <div className="preferences">
            <div className="preferences-h3-i">
                <h3>Preferences</h3>
            </div>
            <div className="preferences-all-text">
                <CustomSelectBox
                divlable="Stream" 
                onChange={(e)=>setStream(e.target.value)}
                style={{fontWeight:"600"}}
                values={['Stream', 'Stream 1', 'Stream 2','Stream 3']}
                />
                <CustomSelectBox
                divlable="Level" 
                onChange={(e)=>setLevel(e.target.value)}
                style={{fontWeight:"600"}}
                values={['Level', 'Level 1', 'Level 2','Level 3']}
                />
                <CustomSelectBox
                divlable="Specialization" 
                onChange={(e)=>setSpecialization(e.target.value)}
                style={{fontWeight:"600"}}
                values={['Specialization', 'Specialization 1', 'Specialization 2','Specialization 3']}
                />
                <CustomSelectBox
                divlable="Location" 
                onChange={(e)=>setLocation(e.target.value)}
                style={{fontWeight:"600"}}
                values={['Location', 'Location 1', 'Location 2','Location 3']}
                />
                <CustomSelectBox
                divlable="College Type" 
                onChange={(e)=>setCollegeType(e.target.value)}
                style={{fontWeight:"600"}}
                values={['College Type', 'Type 1', 'Type 2','Type 3']}
                />
                <CustomSelectBox
                divlable="Fee Range" 
                onChange={(e)=>setFeeRange(e.target.value)}
                style={{fontWeight:"600"}}
                values={['SFee Range', 'Range 1', 'Range 2','Range 3']}
                />
                <CustomSelectBox
                divlable="Colleges" 
                onChange={(e)=>setColleges(e.target.value)}
                style={{fontWeight:"600"}}
                values={['Colleges', 'A', 'B','C']}
                />
                <CustomSelectBox
                divlable="Interested in studying abroad" 
                onChange={(e)=>setInterestedInStudingAbroad(e.target.value)}
                style={{fontWeight:"600"}}
                values={['Interested in studying abroad', 'Yes', 'No']}
                />
                <CustomSelectBox
                divlable="Need a Loan" 
                onChange={(e)=>setNeedALoan(e.target.value)}
                style={{fontWeight:"600"}}
                values={['Need a Loan', 'Yes', 'No']}
                />
            </div>
            <div className="besic-detials-all-text-hide-button-parent">
                    <button className="besic-detials-all-text-hide-button1" onClick={()=>setShow(true)}>Cancle</button>
                    {toggleButton===true?
                        <button className="besic-detials-button-save" disabled={disable === true ? true : false} onClick={()=>handleSave()} style={disable ? {backgroundColor:"lightgray"} : {}}>Save</button> 
                        :
                        <button className="besic-detials-button-save" disabled={disable === true ? true : false} onClick={()=>handleUpdate()} style={disable ? {backgroundColor:"lightgray"} : {}}>Update</button>
                    }
            </div>
        </div>
       }
    </>
  )
}
