import React, { useState } from 'react'
import user2 from '../../images/sign-up-image/users-2.png';
import nationalFLag from '../../images/sign-up-image/national-flag.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggelLoginModel, toggelSignupModel } from '../../features/commonSlice';


export default function LoginModel() {
    const [isPhoneNumber, setPhoneNumber] = useState(true);
    const [signin, setSignin] = useState(true)
    const dispatch = useDispatch();
    const handleModel = () => {
        dispatch(toggelLoginModel({flag:false}))

        dispatch(toggelSignupModel({flag:true}))
    }
    return (
      
    // <section classNameName="sign-up-page">
    //     <div classNameName="page1">
    //         <div classNameName="massage-parent">
    //         <div classNameName="massage">
    //             <i classNameName="fa-solid fa-right-left"></i>
    //             <span classNameName="career-switch">Career Switch</span>
    //         </div>
    //     </div>

    //         <div classNameName="massage2">
    //             <div classNameName="massage2-img">
    //                 <img src={user2} alt="user-up" />
    //             </div>
    //             <span classNameName="promotion">Promotion</span>
    //         </div>
    //         <div classNameName="massage3">
    //             <i classNameName="fa-solid fa-arrow-trend-up"></i>
    //             <span classNameName="salary-hike">Salary Hike</span>
    //         </div>
    //     </div>

    //     <div classNameName="page2">
    //         <div classNameName="container">
    //             <div classNameName="p2right">
    //                 <div classNameName="arrow-icon">
    //                     <i classNameName="fa-solid fa-arrow-left-long"></i>
    //                 </div>
    //                 <h2>Welcome! Sign up or Login</h2>
    //                 <div classNameName="input-fluid">
    //                 <div classNameName="national-flag-img">
    //                     <img src={nationalFLag} alt="flag" />
    //                 </div>
    //                 {isPhoneNumber && <span classNameName="number">+91</span>}
    //                 {/* <i classNameName="fa-solid fa-angle-down"></i> */}
    //                 <span classNameName="hr"></span>
    //                 <input type="input" classNameName="input-button" placeholder={isPhoneNumber ? "Phone Number": "Your Email"}  />
    //             </div>
    //             <h4 classNameName="or">or</h4>
    //             <Link onClick={() => setPhoneNumber(!isPhoneNumber)}>Continue with Email</Link> 
    //             <button classNameName="continue" >Continue</button>
    //             <div classNameName="account_submit">
    //                 <button type="button" classNameName="account-btn">Create New Account?</button>
    //                 <span  classNameName="submit-span-btn" onClick={() => handleModel() }>Signup</span>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    <div className="login-main-box">
        <div className="slider"></div>
        <div className="btn">
            <button className="login" onClick={()=>setSignin(true)}>Login</button>
            <button className="signup" onClick={()=>setSignin(false)}>Signup</button>
        </div>
        <div className="form-section">
        {signin == true ? <div className="login-box">
                <input type="email" className="email ele" placeholder="youremail@email.com"/>
                <input type="password" className="password ele" placeholder="password"/>
                <div style={{display:"flex", gap:"10px"}}>
                <Link><button className="clkbtn">Login</button></Link>
                <button className="clkbtn" onClick={()=>dispatch(toggelLoginModel({flag:false}))}>Close</button>
                </div>
            </div> : 
            <div className="signup-box">
                <input type="text" className="name ele" placeholder="Enter your name"/>
                <input type="email" className="email ele" placeholder="youremail@email.com"/>
                <input type="password" className="password ele" placeholder="password"/>
                <input type="password" className="password ele" placeholder="Confirm password"/>
                <Link><button className="clkbtn">Signup</button></Link>
            </div>}
        </div>
    </div>

  )
}
