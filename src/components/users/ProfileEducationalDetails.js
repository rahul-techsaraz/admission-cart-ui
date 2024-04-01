import React, { useEffect, useState } from 'react'
import CustomInputTextBox from '../../utils/Constants/custom-components/CustomInputTextBox'
import httpFetch from '../../fetch/useFetch'
import constants from '../../utils/Constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CustomSelectBox from '../../utils/Constants/custom-components/CustomSelectBox'
import { updateQualificationInfo } from '../../features/userSlice'


export default function ProfileEducationalDetails() {
    const [show, setShow] = useState(true)
    const [toggleButton, setToggleButton] = useState(true)
    const [disable, setDisable] = useState(true)
    const [className, setClassName] = useState('')
    const [board, setBoard] = useState('')
    const [school, setSchool] = useState('')
    const [passingYear, setPassingYear] = useState('')
    const [marksType, setMarksType] = useState('')
    const [marksPercentage, setMarksPercentage] = useState('')
    const [stream, setStream] = useState('')
    const dispatch = useDispatch()
    const [showDetails, setShowDetails] = useState(false)
    const {userQualificationInfo, userInfo } = useSelector((state)=> state.userSlice)

    useEffect(()=>{
        console.log(className)
    },[className])
    const handleEdit = async ()=>{
        const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
        if(response.data.length > 0){
            setToggleButton(false)
        }
        setShow(false)
    }
    const handleSave = async ()=>{
        try{
            const payload = {
                requestType: "educationalQualification",
                email: userInfo.email,
                class_name: className,
                board_name: board,
                school_name: school,
                passing_year: passingYear,
                stream: stream,
                marks_type: marksType,
                marks_percentage: marksPercentage
            }
            // console.log(payload)
            const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_UPDATE, constants.apiMethod.POST,constants.apiHeader.HEADER, payload)
            // console.log(response)
            if(response.status==="success"){
                const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
                // console.log(response)
                if(response.data!==false){
                    setClassName(response.data.class_name)
                    setBoard(response.data.board_name)
                    setSchool(response.data.school_name)
                    setPassingYear(response.data.passing_year)
                    setMarksType(response.data.marks_type)
                    setMarksPercentage(response.data.marks_percentage)
                    setStream(response.data.stream)
                    dispatch(updateQualificationInfo({qualificationInfo:response.data}))
                }
                setShow(true)
                setShowDetails(true)
            }
        }
        catch(err){
            console.log(err)
        }
        
    }
    const handleUpdate = async ()=>{
        const payload = {
            "requestType": "educationalQualification",
            "email": userInfo.email,
            "class_name": className,
            "board_name": board,
            "school_name": school,
            "passing_year": passingYear,
            "stream": stream,
            "marks_type": marksType,
            "marks_percentage": marksPercentage
        }
        const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_UPDATE, constants.apiMethod.PUT,constants.apiHeader.HEADER, payload)
        if(response.status==="success"){
            const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
            if(response.data!==false){
                setClassName(response.data.class_name)
                setBoard(response.data.board_name)
                setSchool(response.data.school_name)
                setPassingYear(response.data.passing_year)
                setMarksType(response.data.marks_type)
                setMarksPercentage(response.data.marks_percentage)
                setStream(response.data.stream)
                dispatch(updateQualificationInfo({qualificationInfo:response.data}))
            }
            setShow(true)
            setShowDetails(true)
        }
    }
    const validate = ()=>{
        if(className !== '' && board !== '' && school !== '' && passingYear !== '' && marksType !== '' && marksPercentage !== '' && stream !== ''){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }
    useEffect(()=>{
        validate()
    },[board, school, passingYear, marksType, marksPercentage, stream])
  return (
    <>
        {show===true ? 
        <>
            <div className="education-details">
                <div className="education-details-all-text">
                    <div className="education-detials-h3-i">
                        <h3>Education Details</h3>
                        <Link><button className="besic-detials-button-save" onClick={()=>handleEdit()}>Add Details</button></Link>
                    </div>
                    <div style={{display:showDetails ? 'block' : 'none'}}>
                    <h4 className="education-h4">{userQualificationInfo.class_name}</h4>
                    <div className="educationl-details-wraper">
                    <div className="full-name">Board
                        <h3 className="full-name-h3">{userQualificationInfo.board_name}</h3>
                    </div>
                    <div className="dob">School
                        <h3 className="do-b">{userQualificationInfo.school_name}</h3>
                    </div>
                    <div className="social-category">Passing Year
                        <h3 className="social">{userQualificationInfo.passing_year}</h3>
                    </div>

                    <div className="gender">Marks Type
                        <h3 className="gender-h3">{userQualificationInfo.marks_type}</h3>
                    </div>
                    <div className="marital-status">Percentage/ CGPA
                        <h3 className="marital-h3">{userQualificationInfo.marks_percentage}</h3>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
        :
        <>
            <div className="education-details">
                <div className="education-details-all-text">
                    <div className="education-detials-h3-i">
                        <h3>Education Details</h3>
                    </div>
                    <CustomSelectBox
                        divlable="Educational Standared" 
                        name="test"
                        arialInvalid="false"
                        onChange={(e)=>setClassName(e.target.value)}
                        style={{fontWeight:"600"}}
                        values={['Educational Standared', 'Class X', 'Class XII','Graduation', 'Diploma', 'Others']}
                    />
                    <div className="educationl-details-wraper">
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Board"
                        inputLabel="Board"
                        placeHolder={userQualificationInfo.board_name}
                        onChange={(e)=>setBoard(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="School"
                        inputLabel="School"
                        placeHolder={userQualificationInfo.school_name}
                        onChange={(e)=>setSchool(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Passing Year"
                        inputLabel="Passing Year"
                        placeHolder={userQualificationInfo.passing_year}
                        onChange={(e)=>setPassingYear(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Marks Type"
                        inputLabel="Marks Type"
                        placeHolder={userQualificationInfo.marks_type}
                        onChange={(e)=>setMarksType(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Percentage/ CGPA"
                        inputLabel="Percentage/CGPA"
                        placeHolder={userQualificationInfo.marks_percentage}
                        onChange={(e)=>setMarksPercentage(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Stream"
                        inputLabel="Stream"
                        placeHolder={userQualificationInfo.stream}
                        onChange={(e)=>setStream(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                    </div>
                </div>
                <div className="besic-detials-all-text-hide-button-parent">
                    <button className="besic-detials-all-text-hide-button1" onClick={()=>setShow(true)}>Cancle</button>
                    {toggleButton ?
                        <button className="besic-detials-button-save" disabled={disable ? true : false} onClick={()=>handleSave()}>Save</button> 
                        :
                        <button className="besic-detials-button-save" onClick={()=>handleUpdate()}>Update</button>
                    }
                </div>
            </div>
        </>
        }
        
    </>
  )
}
