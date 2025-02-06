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
    const [index, setIndex] = useState(0)
    const [isEdit, setIsEdit] = useState(false)

    const toFetch = async ()=>{
        try{
        const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
        console.log(response)
        if(response.status === constants.apiResponseStatus.SUCCESS){
                dispatch(updateQualificationInfo({qualificationInfo:response.data}))
                setToggleButton(false)
                setShowDetails(true)
            }
        }
        catch(err){
            alert("Something went wrong")
        }
    }

    useEffect(()=>{
        toFetch();
        console.log(userQualificationInfo)
    },[])
    const handleAddDetails = ()=>{
        setToggleButton(true)
        setShow(false)
        setIsEdit(false)
        setClassName('')
        setBoard('')
        setSchool('')
        setPassingYear('')
        setMarksType('')
        setMarksPercentage('')
        setStream('')
    }
    const handleEdit = async (i)=>{
        try{
            const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
            if(response.data.length > 0){
                dispatch(updateQualificationInfo({qualificationInfo:response.data}))
                setClassName(userQualificationInfo[i].class_name)
                setBoard(userQualificationInfo[i].board_name)
                setSchool(userQualificationInfo[i].school_name)
                setPassingYear(userQualificationInfo[i].passing_year)
                setMarksType(userQualificationInfo[i].marks_type)
                setMarksPercentage(userQualificationInfo[i].marks_percentage)
                setStream(userQualificationInfo[i].stream)
                setToggleButton(false)
                setIndex(i)
                setIsEdit(true)
            }
            setShow(false)
        }
        catch(err){
            alert("something went wrong")
        }
    }
    const handleSave = async ()=>{
        if(dataCheck()){
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
                const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_UPDATE, constants.apiMethod.POST,constants.apiHeader.HEADER, payload)
                if(response.status==="success"){
                    const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
                    if(response.data!==false){
                        dispatch(updateQualificationInfo({qualificationInfo:response.data}))
                    }
                    setShow(true)
                    setShowDetails(true)
                    setIsEdit(false)
                }
            }
            catch(err){
                alert("Something went Wrong")
            }
        }
        else{
            setDisable(true)
        }
        
    }
    const handleUpdate = async ()=>{
        try{
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
                console.log(response)
                if(response.data!==false){
                    dispatch(updateQualificationInfo({qualificationInfo:response.data}))
                }
                setShow(true)
                setShowDetails(true)
                setIsEdit(false)
            }
        }
        catch(err){
            alert("Something went Wrong")
        }
    }
    const handleDelete = async (i)=>{
        try{
            const payload = {
                "requestType": "educationalQualification",
                "email": userInfo.email,
                "class_name": userQualificationInfo[i].class_name,
            }
            const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_UPDATE, constants.apiMethod.DELETE,constants.apiHeader.HEADER, payload)
            if(response.status === "success"){
                const response = await httpFetch(constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY+userInfo.email, constants.apiMethod.GET, constants.apiHeader.HEADER)
                    if(response.data!==false){
                        dispatch(updateQualificationInfo({qualificationInfo:response.data}))
                    }
                    setShow(true)
                    setShowDetails(true) 
            }
        }
        catch(err){
            alert("Something went Wrong")
        }
    }
    const validate = ()=>{
        if(className !== '' && board !== '' && school !== '' && passingYear !== '' && marksType !== '' && marksPercentage !== '' && stream !== ''){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }
    const dataCheck = ()=>{
        if(JSON.stringify(userQualificationInfo).includes(className)){
            alert("Data for selected Class aready exist")
            return false
        }
        else{
            return true
        }
    }
    const checkClassName = (e)=>{
        if(JSON.stringify(userQualificationInfo).includes(e.target.value)){
            setDisable(true)
            alert("Data for selected Class aready exist")
        }
        else{
            setClassName(e.target.value)
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
                        <Link><button className="besic-detials-button-save" onClick={()=>handleAddDetails()}>Add Details</button></Link>
                    </div>
                    <div style={{display:showDetails ? 'block' : 'none'}}>
                        {userQualificationInfo.length > 0 && userQualificationInfo.map((data, index)=>
                            <>
                                <div className='preferences-h3-i' style={{display:'flex', columnGap:"30px", justifyContent:'flex-start', marginTop:'30px'}}>
                                    <h4 className="education-h4">{data.class_name}</h4>
                                    <Link><i className="fa-solid fa-pen-fancy" onClick={()=>handleEdit(index)}></i></Link>
                                    <Link><button className="besic-detials-button-save" onClick={()=>handleDelete(index)}>Delete</button></Link>
                                </div>
                                <div className="educationl-details-wraper" style={{borderBottom: "1px solid #00ff91"}}>
                                    <div className="full-name">Board
                                        <h3 className="full-name-h3">{data.board_name}</h3>
                                    </div>
                                    <div className="dob">School
                                        <h3 className="do-b">{data.school_name}</h3>
                                    </div>
                                    <div className="social-category">Passing Year
                                        <h3 className="social">{data.passing_year}</h3>
                                    </div>

                                    <div className="gender">Marks Type
                                        <h3 className="gender-h3">{data.marks_type}</h3>
                                    </div>
                                    <div className="marital-status">Percentage/ CGPA
                                        <h3 className="marital-h3">{data.marks_percentage}</h3>
                                    </div>
                                </div>
                            </>
                        )}
                        
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
                        onChange={(e)=>isEdit ? setClassName(e.target.value) : checkClassName(e)}
                        style={{fontWeight:"600"}}
                        values={isEdit === false ? ['Educational Standared', 'Class X', 'Class XII','Graduation', 'Diploma', 'Others'] : [userQualificationInfo[index].class_name]}
                    />
                    <div className="educationl-details-wraper">
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Board"
                        inputLabel="Board"
                        placeHolder={isEdit === false ? "Board" : userQualificationInfo[index].board_name}
                        onChange={(e)=>setBoard(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="School"
                        inputLabel="School"
                        placeHolder={isEdit === false ? "School" : userQualificationInfo[index].school_name}
                        onChange={(e)=>setSchool(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Passing Year"
                        inputLabel="Passing Year"
                        placeHolder={isEdit === false ? "Passing Year" : userQualificationInfo[index].passing_year}
                        onChange={(e)=>setPassingYear(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Marks Type"
                        inputLabel="Marks Type"
                        placeHolder={isEdit === false ? "Marks Type" : userQualificationInfo[index].marks_type}
                        onChange={(e)=>setMarksType(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Percentage/ CGPA"
                        inputLabel="Percentage/CGPA"
                        placeHolder={isEdit === false ? "Percentage/CGPA" : userQualificationInfo[index].marks_percentage}
                        onChange={(e)=>setMarksPercentage(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                        <CustomInputTextBox 
                        inputType="text"
                        divlable="Stream"
                        inputLabel="Stream"
                        placeHolder={isEdit === false ? "Stream" : userQualificationInfo[index].stream}
                        onChange={(e)=>setStream(e.target.value)}
                        style={{fontWeight:"600"}}
                        />
                    </div>
                </div>
                <div className="besic-detials-all-text-hide-button-parent">
                    <button className="besic-detials-all-text-hide-button1" onClick={()=>setShow(true)}>Cancle</button>
                    {toggleButton ?
                        <button className="besic-detials-button-save" disabled={disable ? true : false} onClick={()=>handleSave()} style={disable ? {backgroundColor:"lightgray"} : {}}>Save</button> 
                        :
                        <button className="besic-detials-button-save" disabled={disable ? true : false} onClick={()=>handleUpdate()} style={disable ? {backgroundColor:"lightgray"} : {}}>Update</button>
                    }
                </div>
            </div>
        </>
        }
        
    </>
  )
}
