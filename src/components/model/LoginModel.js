import React, { useEffect, useRef, useState } from 'react';
import user2 from '../../images/sign-up-image/users-2.png';
import nationalFLag from '../../images/sign-up-image/national-flag.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggelLoginModel,
  toggelAfterLoginModel,
  updateauthenticateUser,
  showNotification,
} from '../../features/commonSlice';
import '../../css/collagedekho.css';
import constants from '../../utils/Constants/constants';
import httpFetch from '../../fetch/useFetch';
import { updateUserInfo } from '../../features/userSlice';
import { login } from '../ReduxThunk/CommonThunk';
import useUser from '../hooks/useUser';

export default function LoginModel() {
  const [firstName, setFirstName] = useState('');
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVerifyed, setIsVerifyed] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const OTP_LENGTH = 4;
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [otp4Digit, set4digitOtp] = useState('')
  const [classChange, setClassChange] = useState(false)
  const dispatch = useDispatch();
  const { openLoginModel, openAfterLoginModel } = useSelector((state) => state.common);
  const navigate = useNavigate();
  const { sendEmail, generate4DigitOTP} = useUser();
  // const handleModel = () => {
  //     dispatch(toggelLoginModel({flag:false}))

  //     dispatch(toggelSignupModel({flag:true}))
  // }
  const validateName = () => {
    if (firstName.length === 0) {
      alert("Name can't be blank");
    } else {
      return true;
    }
  };
  const validatePhone = () => {
    const phoneRegex = /[0-9]{10}/;
    if (!phone.match(phoneRegex)) {
      alert('Invalid Phone Number');
    } else {
      return true;
    }
  };
  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
      alert('Invalid Email');
    } else {
      return true;
    }
  };
  const validatePassword = () => {
    if (password.length < 8) {
      alert('Your password must be at least 8 characters long!');
    } else if (password !== confirmPassword) {
      alert('Password Missmatch');
    } else {
      return true;
    }
  };
  const handleSignUp = async (e) => {
    if (validateName() && validatePhone() && validateEmail() && validatePassword()) {
      const payload = {
        phone: phone,
        email: email,
        password: password,
        full_name: firstName,
      }
      const data = await fetch('https://techsaraz.in/admission-cart/api/login/register.php', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const jsonData = await data.json();
      if (jsonData.success === 0) {
        alert(jsonData.message);
      } else {
        setClassChange(true)
      }
    }
  };
  const handleSubmit = async (e) => {
    let Newotp = generate4DigitOTP()
        while (Newotp === '0000') {
            Newotp = generate4DigitOTP()
        }

        set4digitOtp(Newotp) // Save OTP for modal
        

        const subject = 'Use This OTP to Complete Your Action'
        const fromEmail = 'rahul.tech.mastery@gmail.com'
        const fromEmailName = 'AdmissionKartTeam'

        const otpEmailTemplate = `
            <!DOCTYPE html>
            <html>
            <head><meta charset="UTF-8" /><title>Your OTP Code</title></head>
            <body style="font-family:Arial,sans-serif;background:#f4f6f8;padding:20px;">
            <div style="max-width:500px;margin:auto;background:#fff;padding:30px;text-align:center;border-radius:8px;">
                <h2>🔐 Your OTP Code</h2>
                <p>This code is valid for 10 minutes.</p>
                <div style="font-size:32px;font-weight:bold;color:#2c3e50;margin:20px 0;">${Newotp}</div>
                <p>Please do not share this with anyone.</p>
                <div style="font-size:12px;color:#777;margin-top:30px;">If you did not request this, ignore the email.</div>
            </div>
            </body>
            </html>
        `

        const mailPayload = {
            toEmail: email,
            subject,
            fromEmail,
            htmlTemplate: otpEmailTemplate,
            fromEmailName
        }
        try {
            const response = await sendEmail(mailPayload)
            if (response.payload.data.success === true) {
                dispatch(
                  showNotification({
                    isOpen: true,
                    type: 'success',
                    message: 'OTP send to your mail Succesfully',
                  })
                );
                setIsOTP(true)
            } else {
                dispatch(
                  showNotification({
                    isOpen: true,
                    type: 'error',
                    message: 'Failed to send OTP. Please try again.',
                  })
                );
            }
        } catch (err) {
            dispatch(
              showNotification({
                isOpen: true,
                type: 'error',
                message: 'Failed to send OTP. Please try again.',
              })
            );
        }
  };
  const handleVerify = async () => {
    const userOTP = otp.join('')
    if(userOTP === otp4Digit){
      setIsOTP(false)
      setIsVerifyed(true)
    }
  };
  const validateLogin = () => {
    if (loginPhone.length < 10 || loginPassword.length < 8) {
      alert('Invalid Credentials');
    } else {
      return true;
    }
  };

  const handleLogin = async () => {
    if (validateLogin()) {
      const loginPayload = {
        phone: loginPhone,
        password: loginPassword,
      };
      const jsonData = await dispatch(
        login({
          url: constants.apiEndPoint.USER_LOGIN,
          method: constants.apiMethod.POST,
          header: constants.apiHeader.HEADER,
          payload: loginPayload,
        })
      );
      if (jsonData?.payload?.success !== 1) {
        alert('Invalid Phone or Password');
      } else {
        dispatch(toggelLoginModel({ flag: false }));
        dispatch(toggelAfterLoginModel({ flag: true }));
        dispatch(updateauthenticateUser({ flag: true }));
        const obj = {
          email: jsonData?.payload?.email,
          full_name: jsonData?.payload?.full_name,
          phone: jsonData?.payload?.phone,
          token: jsonData?.payload?.token,
        };
        localStorage.setItem('loginResponse', JSON.stringify(obj));
        dispatch(updateUserInfo({ userData: obj }));
        navigate('/user/dashboard/profile');
      }
    }
  };
  const togelSignupClass = (e) => {
    let sliderElement = e.target.parentElement.parentElement.childNodes[0];
    sliderElement.classList.add('moveslider');
    let formElement = e.target.parentElement.parentElement.childNodes[2];
    formElement.classList.add('form-section-move');
  };
  const togelLoginClass = (e) => {
    let sliderElement = e.target.parentElement.parentElement.childNodes[0];
    sliderElement.classList.remove('moveslider');
    let formElement = e.target.parentElement.parentElement.childNodes[2];
    formElement.classList.remove('form-section-move');
  };
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, '');
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0]; // Only take first digit
    setOtp(newOtp);

    if (index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('Text').replace(/\D/g, '');
    const newOtp = [...otp];

    for (let i = 0; i < OTP_LENGTH; i++) {
      newOtp[i] = pasted[i] || '';
      if (inputRefs.current[i]) {
        inputRefs.current[i].value = pasted[i] || '';
      }
    }

    setOtp(newOtp);

    const lastFilled = Math.min(pasted.length, OTP_LENGTH) - 1;
    inputRefs.current[lastFilled]?.focus();
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
        inputRefs.current[index].value = '';
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1].value = '';
      }
    }
  };
  
  return (
    <>
      {openLoginModel && (
        <div className="login-main-box">
          <div className={!classChange ? "slider" : 'slider moveslider'}></div>
          <div className="btn">
            <button className="login" onClick={(e) => togelLoginClass(e)}>
              Login
            </button>
            <button className="signup" onClick={(e) => togelSignupClass(e)}>
              Signup
            </button>
          </div>
          <div className={!classChange ? "form-section" : "form-section form-section-move"}>
            <div className={!classChange ? "login-box" : "hidden"}>
              <input
                type="tel"
                className="email ele"
                placeholder="Your Phone Number"
                onChange={(e) => setLoginPhone(e.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <div className="login-model-buttons">
                <button type="submit" className="clkbtn" onClick={() => handleLogin()}>
                  Login
                </button>
                <button className="clkbtn" onClick={() => dispatch(toggelLoginModel({ flag: false }))}>
                  Close
                </button>
              </div>
            </div>
            <div className="signup-box">
              <input
                type="email"
                className="email ele"
                placeholder="youremail@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              {isOTP && (
                <div className="otp-code-main-box" onPaste={handlePaste}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="otp-input"
                      ref={(el) => (inputRefs.current[i] = el)}
                      value={otp[i]}
                      onChange={(e) => handleChange(e, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      inputMode="numeric"
                      autoComplete="one-time-code"
                    />
                  ))}
                </div>
              )}
              {isVerifyed && (
                <div className="after-verify">
                  <input
                    type="txt"
                    className="name ele"
                    placeholder="Your Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="tel"
                    className="name ele"
                    placeholder="Enter your Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="password"
                    className="password ele"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    className="password ele"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              )}
              <div className="login-model-buttons">
                {isVerifyed ? (
                  <button className="clkbtn" onClick={(e) => handleSignUp(e)}>
                    Signup
                  </button>
                ) : isOTP ? (
                  <button className="clkbtn" onClick={(e) => handleVerify(e)}>
                    Verify
                  </button>
                ) : (
                  <button className="clkbtn" onClick={(e) => handleSubmit(e)}>
                    Submit
                  </button>  
                )}

                <button className="clkbtn" onClick={() => dispatch(toggelLoginModel({ flag: false }))}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
