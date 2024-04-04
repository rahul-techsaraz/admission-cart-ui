import React, { useEffect, useState } from 'react'
import user2 from '../../images/sign-up-image/users-2.png';
import nationalFLag from '../../images/sign-up-image/national-flag.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggelLoginModel, toggelAfterLoginModel, updateauthenticateUser } from '../../features/commonSlice';
import '../../css/collagedekho.css';
import constants from '../../utils/Constants/constants';
import httpFetch from '../../fetch/useFetch';
import { updateUserInfo } from '../../features/userSlice';



export default function LoginModel() {
    const [firstName, setFirstName] = useState('')
    const [loginPhone, setLoginPhone] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch();
    const {openLoginModel, openAfterLoginModel} = useSelector(state=>state.common)
    // const handleModel = () => {
    //     dispatch(toggelLoginModel({flag:false}))

    //     dispatch(toggelSignupModel({flag:true}))
    // }
    const validateName = ()=>{
        if(firstName.length === 0){
            alert("Name can't be blank")
        }else{
            return true
        }
    }
    const validatePhone = ()=>{
        const phoneRegex = /[0-9]{10}/;
        if(!phone.match(phoneRegex)){
            alert("Invalid Phone Number")
        }else{
            return true
        }
    }
    const validateEmail = ()=>{
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if(!email.match(emailRegex)){
            alert("Invalid Email")
        }else{
            return true;
        }
    }
    const validatePassword = ()=>{
        if(password.length<8){
            alert("Your password must be at least 8 characters long!")
        }else if (password!==confirmPassword){
            alert("Password Missmatch")
        }else{
            return true
        }
    }
    const handleSignUp = async (e)=>{
        if(validateName() && validatePhone() && validateEmail() && validatePassword()){
            const data = await fetch('https://techsaraz.in/admission-cart/api/login/register.php', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify({
                "phone":phone,
                "email":email,
                "password":password,
                "full_name":firstName
                })
           });
            const jsonData = await data.json()
            if(jsonData.success===0){
                alert(jsonData.message)
            }else{
                e.target.parentElement.parentElement.parentElement.childNodes[0].classList.remove("moveslider")
                e.target.parentElement.parentElement.parentElement.childNodes[2].classList.remove("form-section-move")
                alert(jsonData.message)
            }
        }
    }
    const validateLogin = ()=>{
        if((loginPhone.length < 10) || (loginPassword.length < 8)){
            alert("Invalid Credentials")
        }else{
            return true;
        }
    }
    
    const handleLogin = async ()=>{
        if(validateLogin()){
            const loginPayload = {
                "phone":loginPhone,
                "password":loginPassword
                }
                const jsonData = await httpFetch(constants.apiEndPoint.USER_LOGIN,constants.apiMethod.POST,constants.apiHeader.HEADER,loginPayload)
                console.log(jsonData)
                if(jsonData.success!==0){
                    dispatch(toggelLoginModel({flag:false}))
                    dispatch(toggelAfterLoginModel({flag:true}))
                    dispatch(updateauthenticateUser({flag:true}))
                    const obj = {email:jsonData.email,full_name:jsonData.full_name,phone:jsonData.phone,token:jsonData.token}
                    localStorage.setItem('loginResponse', JSON.stringify(obj))
                    dispatch(updateUserInfo({userData:obj}))
                }else{
                    alert("Invalid Phone or Password")
                }
           
        }
    }
    const togelSignupClass = (e)=>{
        let sliderElement = e.target.parentElement.parentElement.childNodes[0]
        sliderElement.classList.add("moveslider")
        let formElement = e.target.parentElement.parentElement.childNodes[2]
        formElement.classList.add("form-section-move")
    }
    const togelLoginClass = (e)=>{
        let sliderElement = e.target.parentElement.parentElement.childNodes[0]
        sliderElement.classList.remove("moveslider")
        let formElement = e.target.parentElement.parentElement.childNodes[2]
        formElement.classList.remove("form-section-move")
    }
    
    return (
      
    <>
    {openLoginModel && <div className="login-main-box">
        <div className="slider"></div>
        <div className="btn">
            <button className="login" onClick={(e)=>togelLoginClass(e)}>Login</button>
            <button className="signup" onClick={(e)=>togelSignupClass(e)}>Signup</button>
        </div>
        <div className="form-section">
        <div className="login-box">
                <input type="tel" className="email ele" placeholder="Your Phone Number" onChange={(e)=>setLoginPhone(e.target.value)}/>
                <input type="password" className="password ele" placeholder="password" onChange={(e)=>setLoginPassword(e.target.value)}/>
                <div style={{display:"flex", gap:"10px"}}>
                <button type='submit' className="clkbtn" onClick={()=>handleLogin()}>Login</button>
                <button className="clkbtn" onClick={()=>dispatch(toggelLoginModel({flag:false}))}>Close</button>
                </div>
            </div> 
            <div className="signup-box">
                <input type="txt" className="name ele" placeholder="Your Name" onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="tel" className="name ele" placeholder="Enter your Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
                <input type="email" className="email ele" placeholder="youremail@email.com" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className="password ele" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" className="password ele" placeholder="Confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <button className="clkbtn" onClick={(e)=>handleSignUp(e)}>Signup</button>
            </div>
        </div>
    </div>
    }
    </>
  )
}
