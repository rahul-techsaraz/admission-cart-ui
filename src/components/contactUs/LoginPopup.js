import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  toggelAfterLoginModel,
  toggelIsLoginPopup,
  toggelIsSignupPopup,
  toggelLoginModel,
  updateauthenticateUser,
} from '../../features/commonSlice';
import logo from '../../images/logo.png';
import httpFetch from '../../fetch/useFetch';
import constants from '../../utils/Constants/constants';
import { updateUserInfo } from '../../features/userSlice';
import { login } from '../ReduxThunk/CommonThunk';

const LoginPopup = () => {
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isEye, setIsEye] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        dispatch(toggelIsLoginPopup({ flag: false }));
        navigate('/user/dashboard/profile');
      }
    }
  };
  const toggelToSignupPopup = () => {
    dispatch(toggelIsLoginPopup({ flag: false }));
    dispatch(toggelIsSignupPopup({ flag: true }));
  };
  return (
    <div className="login-popup-main-container-parents">
      <div className="login-popup-main-container">
        <div className="right-container">
          <div className="login-popup-form-close-btn-container">
            <button id="login-popup-close-btn-btn" onClick={() => dispatch(toggelIsLoginPopup({ flag: false }))}>
              X
            </button>
          </div>
          <div className="login-popup-form-start-box">
            <div className="login-popup-form-image-h2-parent-div">
              <img src={logo} alt="Admission Kard Image" />
              <h3 className="login-popup-form-heading-h3-text">Welcome to Login Form</h3>
            </div>
            <div className="login-popup-form-div">
              <div className="loin-popup-form-phone-container">
                <input
                  type="text"
                  className="login-popup-form-number-input i"
                  id="country-code1"
                  value={'+91'}
                  readOnly
                />
                <input
                  type="tel"
                  className="login-popup-form-number-input-area i"
                  id="phone1"
                  placeholder="Mobile No."
                  required
                  onChange={(e) => setLoginPhone(e.target.value)}
                />
              </div>

              <div className="popup-login-form-password-container" id="password-container1">
                <input
                  type={isEye ? 'password' : 'text'}
                  className="login-popup-form-password-form-input"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                {isEye ? (
                  <i className="fa-duotone fa-regular fa-eye" onClick={() => setIsEye(!isEye)} />
                ) : (
                  <i className="fa-regular fa-eye-slash" onClick={() => setIsEye(!isEye)} />
                )}
              </div>

              <button className="popup-login-form-btn-btn" onClick={() => handleLogin()}>
                Login
              </button>

              <p className="popup-login-form-full-down-text">
                New to Admission Cart?{' '}
                <span className="popup-login-form-text" onClick={toggelToSignupPopup}>
                  Signup
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
