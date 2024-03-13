import React, { useEffect, useState } from 'react'
import user2 from '../../images/sign-up-image/users-2.png';
import nationalFLag from '../../images/sign-up-image/national-flag.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggelLoginModel, toggelSignupModel } from '../../features/commonSlice';
import '../../css/collagedekho.css'


export default function LoginModel() {
    const [loginModelToggle, setLoginModelToggle] = useState(true)
    const [loginPhone, setLoginPhone] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch();
    const handleModel = () => {
        dispatch(toggelLoginModel({flag:false}))

        dispatch(toggelSignupModel({flag:true}))
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
    const handleSignUp = async ()=>{
        if(validatePhone() && validateEmail() && validatePassword()){
            const data = await fetch('https://techsaraz.in/admission-cart/api/login/register.php', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify({
                "phone":phone,
                "email":email,
                "password":password
                })
           });
            const jsonData = data.json()
            console.log(jsonData)
            alert("You have successfully registered.")
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
            const data = await fetch('https://techsaraz.in/admission-cart/api/login/login.php', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify({
                "phone":loginPhone,
                "password":loginPassword
                })
           });
           const jsonData = await data.json()
           //console.log(jsonData.token)
           if(jsonData.token.length!==0){
            setLoginModelToggle(false)
           }
           localStorage.setItem('token', JSON.stringify(jsonData.token))
        }
    }
    const togelSignupClass = (e)=>{
        let sliderElement = e.target.parentElement.parentElement.childNodes[0]
        sliderElement.classList.add("moveslider")
        let formElement = e.target.parentElement.parentElement.childNodes[2]
        formElement.classList.add("form-section-move")
        //setSignin(false)
    }
    const togelLoginClass = (e)=>{
        let sliderElement = e.target.parentElement.parentElement.childNodes[0]
        sliderElement.classList.remove("moveslider")
        let formElement = e.target.parentElement.parentElement.childNodes[2]
        formElement.classList.remove("form-section-move")
        //setSignin(false)
    }
    
    return (
      
    <>
    {loginModelToggle===true? <div className="login-main-box">
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
                <input type="tel" className="name ele" placeholder="Enter your Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
                <input type="email" className="email ele" placeholder="youremail@email.com" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className="password ele" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" className="password ele" placeholder="Confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <button className="clkbtn" onClick={()=>handleSignUp()}>Signup</button>
            </div>
        </div>
    </div> :
    <section className="popup">
        <div className="logo-name">
        <div className="logo">J</div>
            <label for="name" className="name">Hi, Jayanta Kumar Mondal</label>
        </div>
        <div className="all-list">
            <div className="my-collage">
                <div className="my-collage-box">
                    <Link>
                        <i className="fa-solid fa-building-columns"></i><span className="My-Collages">My Collages</span>
                    </Link>
                </div>
            </div>

            <div className="my-collage">
                <div className="my-collage-box">
                    <Link>
                        <i className="fa-regular fa-circle-user"></i><span className="My-Collages">My Profile</span>
                    </Link>
                </div>
            </div>

            <div className="my-collage">
                <div className="my-collage-box">
                    <Link>
                        <i className="fa-regular fa-credit-card"></i><span className="My-Collages">Payments</span>
                    </Link>
                </div>
            </div>

            <div className="my-collage">
                <div className="my-collage-box">
                    <Link>
                        <i className="fa-solid fa-screwdriver-wrench"></i><span className="My-Collages">Account Settings</span>
                    </Link>
                </div>
            </div>
            <div className="my-collage">
                <div className="my-collage-box-log-out">
                    <Link>
                        <i className="fa-solid fa-right-from-bracket"></i><span className="My-Collages">Sign Out</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    }
    </>
  )
}
