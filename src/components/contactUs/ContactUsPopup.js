import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { useDispatch } from 'react-redux';
import { toggelIsLoginPopup, toggelIsSignupPopup } from '../../features/commonSlice';
import constants from '../../utils/Constants/constants';
import { signup } from '../ReduxThunk/CommonThunk';

function ContactUsPopup() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEye, setIsEye] = useState(true);
  const dispatch = useDispatch();

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
        alert(data?.payload?.message);
      } else {
        dispatch(toggelIsLoginPopup({ flag: true }));
        dispatch(toggelIsSignupPopup({ flag: false }));
        alert(data?.payload?.message);
      }
    }
  };
  const toggelToSignupPopup = () => {
    dispatch(toggelIsLoginPopup({ flag: true }));
    dispatch(toggelIsSignupPopup({ flag: false }));
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
              <div className='admission-cart-signin-otpbox'>
                <input type="otp"
                className="popup-otp-input-model"
                id="otp1"
                required />
                <input type="otp"
                className="popup-otp-input-model"
                id="otp1"
                required />
                <input type="otp"
                className="popup-otp-input-model"
                id="otp1"
                required />
                <input type="otp"
                className="popup-otp-input-model"
                id="otp1"
                required />
              </div>
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
              <button className="popup-submit-btn-btn" onClick={() => handleSignUp()}>
                Submit
              </button>
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
