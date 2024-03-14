import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggelAfterLoginModel } from '../../features/commonSlice'

export default function AfterLoginModel() {
    const dispatch = useDispatch()
    const {name} = useSelector((state) => state.common)
    useEffect(()=>{
        console.log(name)
    },[])
    
    const handelSignout = ()=>{
        dispatch(toggelAfterLoginModel({flag:false}))
        localStorage.removeItem('token')
    }
  return (
    <>
        <section className="popup">
            <div className="logo-name">
                <div className="logo">J</div>
                <label for="name" className="name">Hi, {name}</label>
            </div>
            <div className="all-list">
                <div className="my-collage">
                    <div className="my-collage-box">
                        <Link to={"/user/dashboard/collages"}><i className="fa-solid fa-building-columns"></i><span className="My-Collages">My Collages</span></Link>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box">
                        <Link to={"/user/dashboard/profile"}><i className="fa-regular fa-circle-user"></i><span className="My-Collages">My Profile</span></Link>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box">
                        <Link to={"/user/dashboard/payment"}><i className="fa-regular fa-credit-card"></i><span className="My-Collages">Payments</span></Link>
                    </div>
                </div>

                <div className="my-collage">
                    <div className="my-collage-box">
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
