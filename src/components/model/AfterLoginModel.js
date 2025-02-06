import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toggelAfterLoginModel, toggelIsLoginPopup, updateauthenticateUser } from '../../features/commonSlice'

export default function AfterLoginModel() {
    const dispatch = useDispatch()
    const {userInfo} = useSelector((state) => state.userSlice)
    const navigate = useNavigate()
    
    
    const handelSignout = ()=>{
        dispatch(toggelAfterLoginModel({flag:false}))
        dispatch(updateauthenticateUser({flag:false}))
        localStorage.removeItem('loginResponse')
        navigate('/')
        dispatch(toggelIsLoginPopup({flag:true}))
    }

    const handelClick = ()=>{
        dispatch(toggelAfterLoginModel({flag:false}))
    }
  return (
    <>
        <section className="popup">
            <div className="logo-name">
                <div className="logo">{userInfo?.full_name && userInfo?.full_name.charAt(0).toUpperCase()}</div>
                <label for="name" className="name">Hi, {userInfo?.full_name}</label>
            </div>
            <div className="all-list">
                <div className="my-collage">
                    <div className="my-collage-box" onClick={()=>handelClick()}>
                        <Link to={"/user/dashboard/collages"}><i className="fa-solid fa-building-columns"></i><span className="My-Collages">My Collages</span></Link>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box" onClick={()=>handelClick()}>
                        <Link to={"/user/dashboard/profile"}><i className="fa-regular fa-circle-user"></i><span className="My-Collages">My Profile</span></Link>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box" onClick={()=>handelClick()}>
                        <Link to={"/user/dashboard/payment"}><i className="fa-regular fa-credit-card"></i><span className="My-Collages">Payments</span></Link>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box" onClick={()=>handelClick()}>
                        <Link to={"/user/dashboard/account"}><i className="fa-solid fa-screwdriver-wrench"></i><span className="My-Collages">Account Settings</span>                        </Link>
                    </div>
                </div>
                <div className="my-collage">
                    <div className="my-collage-box-log-out">
                    <i className="fa-solid fa-right-from-bracket"></i><span className="My-Collages" onClick={()=>handelSignout()}>Sign Out</span>
                </div>
                </div>
            </div>

    </section>
    </>
  )
}
