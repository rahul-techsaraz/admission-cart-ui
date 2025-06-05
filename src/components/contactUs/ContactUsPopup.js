import React, { useRef, useState } from 'react';
import logo from '../../images/logo.png';
import { useDispatch } from 'react-redux';
import { showNotification, toggelIsLoginPopup, toggelIsSignupPopup } from '../../features/commonSlice';
import constants from '../../utils/Constants/constants';
import { signup } from '../ReduxThunk/CommonThunk';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

function ContactUsPopup() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEye, setIsEye] = useState(true);
  const [isVerifyed, setIsVerifyed] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const OTP_LENGTH = 4;
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [otp4Digit, set4digitOtp] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sendEmail, generate4DigitOTP} = useUser();

  const validateName = () => {
      if (firstName.length === 0) {
        dispatch(showNotification({
            isOpen: true,
            type: 'error',
            message: "Name can't be blank",
        }))
      } else {
        return true;
      }
  };
  const validatePhone = () => {
    const phoneRegex = /[0-9]{10}/;
    if (!phone.match(phoneRegex)) {
      dispatch(showNotification({
          isOpen: true,
          type: 'error',
          message: 'Invalid Phone Number',
      }))
    } else {
      return true;
    }
  };
  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
      dispatch(showNotification({
          isOpen: true,
          type: 'error',
          message: 'Invalid Email',
      }))
    } else {
      return true;
    }
  };
  const validatePassword = () => {
    if (password.length < 8) {
      dispatch(showNotification({
          isOpen: true,
          type: 'error',
          message: 'Your password must be at least 8 characters long!',
      }))
    } else if (password !== confirmPassword) {
      dispatch(showNotification({
          isOpen: true,
          type: 'error',
          message: 'Password Missmatch',
      }))
    } else {
      return true;
    }
  };
  const handleSignUp = async () => {
    if (validateName() && validatePhone() && validateEmail() && validatePassword()) {
      const signupPayload = {
        phone: phone,
        email: email,
        password: password,
        full_name: firstName,
      };
      const data = await dispatch(
        signup({
          url: constants.apiEndPoint.USER_SIGNUP,
          method: constants.apiMethod.POST,
          header: constants.apiHeader.HEADER,
          payload: signupPayload,
        })
      );
      if (data?.payload?.success !== 1) {
        dispatch(showNotification({
            isOpen: true,
            type: 'error',
            message: data?.payload?.message,
        }))
      } else {
        dispatch(showNotification({
            isOpen: true,
            type: 'sucess',
            message: data?.payload?.message,
        }))
        dispatch(toggelIsLoginPopup({ flag: true }));
        dispatch(toggelIsSignupPopup({ flag: false }));
      }
    }
  };
  const toggelToSignupPopup = () => {
    dispatch(toggelIsLoginPopup({ flag: true }));
    dispatch(toggelIsSignupPopup({ flag: false }));
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
              console.log(response)
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
      dispatch(showNotification({
          isOpen: true,
          type: 'success',
          message: 'Verified Successfully',
      }))
      setIsOTP(false)
      setIsVerifyed(true)
    }else{
      dispatch(showNotification({
          isOpen: true,
          type: 'error',
          message: 'Invalid OTP...',
      }))
    }
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
    <div className="main-popup-full-box-parent">
      <div className="popup-main-container" id="popup-main-container1">
        <div className="popup-main-container-child">
          <div className="popup-close-btn-container">
            <button
              className="popup-close-btn-x"
              id="close-btn"
              onClick={() => dispatch(toggelIsSignupPopup({ flag: false }))}
            >
              X
            </button>
          </div>
          <div className="popup-container-start">
            <div className="popup-container-image-img">
              <img src={logo} alt="Admission Kart Image" />
              <h3 className="popup-heading-h3">Welcome To Admission Cart</h3>
            </div>
            <div className="form-div-start">
              <input
                type="email"
                className="popup-email-input"
                id="email1"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isOTP && (
              <div className='admission-cart-signin-otpbox' onPaste={handlePaste}>
                {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="popup-otp-input-model"
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
              {isVerifyed &&(
                <>
              <input
                type="text"
                className="popup-name-input"
                id="name1"
                placeholder="Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className="phone-container">
                <input type="text" className="popup-country-code" placeholder="+91" value={'+91'} readOnly />
                <input
                  type="text"
                  className="popup-phone-input"
                  placeholder="Mobile No."
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="popup-login-form-password-container">
                <input
                  type={isEye ? 'password' : 'text'}
                  className="login-popup-form-password-form-input"
                  id="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isEye ? (
                  <i className="fa-duotone fa-regular fa-eye" onClick={() => setIsEye(!isEye)} />
                ) : (
                  <i className="fa-regular fa-eye-slash" onClick={() => setIsEye(!isEye)} />
                )}
              </div>
              <input
                type="text"
                className="popup-email-input"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              </>
              )}
              {isVerifyed ? (
                  <button className="popup-submit-btn-btn" onClick={(e) => handleSignUp(e)}>
                    Signup
                  </button>
                ) : isOTP ? (
                  <button className="popup-submit-btn-btn" onClick={(e) => handleVerify(e)}>
                    Verify
                  </button>
                ) : (
                  <button className="popup-submit-btn-btn" onClick={(e) => handleSubmit(e)}>
                    Submit
                  </button>  
                )}
              
              <p className="popup-account-text">
                Already have an account?{' '}
                <span className="popup-login-text" onClick={toggelToSignupPopup}>
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPopup;
