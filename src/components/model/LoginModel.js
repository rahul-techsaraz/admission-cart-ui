import React, { useState } from 'react'
import user2 from '../../images/sign-up-image/users-2.png';
import nationalFLag from '../../images/sign-up-image/national-flag.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggelLoginModel, toggelSignupModel } from '../../features/commonSlice';


export default function LoginModel() {
    const [isPhoneNumber, setPhoneNumber] = useState(true);
    const dispatch = useDispatch();
    const handleModel = () => {
        dispatch(toggelLoginModel({flag:false}))

        dispatch(toggelSignupModel({flag:true}))
    }
    return (
      
    <section className="sign-up-page">
        <div className="page1">
            <div className="massage-parent">
            <div className="massage">
                <i className="fa-solid fa-right-left"></i>
                <span className="career-switch">Career Switch</span>
            </div>
        </div>

            <div className="massage2">
                <div className="massage2-img">
                    <img src={user2} alt="user-up" />
                </div>
                <span className="promotion">Promotion</span>
            </div>
            <div className="massage3">
                <i className="fa-solid fa-arrow-trend-up"></i>
                <span className="salary-hike">Salary Hike</span>
            </div>
        </div>

        <div className="page2">
            <div className="container">
                <div className="p2right">
                    <div className="arrow-icon">
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </div>
                    <h2>Welcome! Sign up or Login</h2>
                    <div className="input-fluid">
                    <div className="national-flag-img">
                        <img src={nationalFLag} alt="flag" />
                    </div>
                    {isPhoneNumber && <span className="number">+91</span>}
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                    <span className="hr"></span>
                    <input type="input" className="input-button" placeholder={isPhoneNumber ? "Phone Number": "Your Email"}  />
                </div>
                <h4 className="or">or</h4>
                <Link onClick={() => setPhoneNumber(!isPhoneNumber)}>Continue with Email</Link> 
                <button className="continue" >Continue</button>
                <div className="account_submit">
                    <button type="button" className="account-btn">Create New Account?</button>
                    <span  className="submit-span-btn" onClick={() => handleModel() }>Signup</span>
                </div>
                </div>
            </div>
        </div>
    </section>

  )
}
