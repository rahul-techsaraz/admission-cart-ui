import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  toggelAfterLoginModel,
  toggelIsLoginPopup,
  upDateActiveMenu,
  updateauthenticateUser,
} from '../../features/commonSlice';

export default function AfterLoginModel() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

  const handelSignout = () => {
    dispatch(toggelAfterLoginModel({ flag: false }));
    dispatch(updateauthenticateUser({ flag: false }));
    localStorage.removeItem('loginResponse');
    navigate('/');
    dispatch(toggelIsLoginPopup({ flag: true }));
  };

  const handelClick = (activeMenuIndex) => {
    dispatch(upDateActiveMenu({ index: activeMenuIndex }));
    dispatch(toggelAfterLoginModel({ flag: false }));
  };
  return (
    <>
      <section className="popup">
        <div className="logo-name">
          <div className="logo">{userInfo?.full_name && userInfo?.full_name.charAt(0).toUpperCase()}</div>
          <label htmlFor="name" className="name">
            Hi, {userInfo?.full_name}
          </label>
        </div>
        <div className="all-list">
          <div className="my-collage">
            <div className="my-collage-box" onClick={() => handelClick(1)}>
              <Link to={'/user/dashboard/profile'}>
                <i className="fa-regular fa-circle-user"></i>
                <span className="My-Collages">My Profile</span>
              </Link>
            </div>
          </div>

          <div className="my-collage">
            <div className="my-collage-box" onClick={() => handelClick(2)}>
              <Link to={'/user/dashboard/collages'}>
                <i className="fa-solid fa-building-columns"></i>
                <span className="My-Collages">My Collages</span>
              </Link>
            </div>
          </div>

          <div className="my-collage">
            <div className="my-collage-box" onClick={() => handelClick(3)}>
              <Link to={'/user/dashboard/document'}>
                <i className="fa-solid fa-id-card"></i>
                <span className="My-Collages">My Documents</span>
              </Link>
            </div>
          </div>

          <div className="my-collage">
            <div className="my-collage-box" onClick={() => handelClick(5)}>
              <Link to={'/user/dashboard/account'}>
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <span className="My-Collages">Account Settings</span>{' '}
              </Link>
            </div>
          </div>

          <div className="my-collage">
            <div className="my-collage-box-log-out">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span className="My-Collages" onClick={() => handelSignout()}>
                Sign Out
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
