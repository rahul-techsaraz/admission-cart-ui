import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import constants from '../../utils/Constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { upDateActiveMenu } from '../../features/commonSlice'

export default function Sidebar() {
    const {openLoginModel,activemenue}= useSelector((state)=>state.common)
    console.log(activemenue)
    const dispatch= useDispatch()
  return (
    <>
        <div className="side-navbar-parents">
                
                <div className="side-navbar">
                    <input type="checkbox" id="check"/>
                    <label for="check">
                        <i className="fa-solid fa-bars-staggered" id="bars"></i>
                        <i className="fa-solid fa-xmark" id="cancel"></i>
                    </label>
                <ul>
                    {constants.userDashBoardSidebarMenu.map((menuName, index)=>(
                        <li onClick={()=>dispatch(upDateActiveMenu({index}))} className={index === activemenue? "active" : ""}><Link to={`/user/dashboard${menuName.path}`}><span className={index=== activemenue ? menuName.firstSpanClassName : ""}><i className={`fa-solid ${menuName.itagClassName}`}></i></span> <span className={index === activemenue ? menuName.secondSpanClassName : ""}>{menuName.lableName}</span></Link></li>
                    ))}
                    {/* <li><Link to={"/user/dashboard/home"}><span className="home-icon"><i className="fa-solid fa-house"></i></span> <span className="home-text">Home</span></Link></li>
                    <li className="active"><Link to={"/user/dashboard/profile"}><span className="profile-icon"><i className="fa-solid fa-user"></i></span> <span className="profile-text">Profile</span></Link></li>
                    <li className="active"><Link to={"/user/dashboard/performence"}><span><i className="fa-solid fa-chart-pie"></i></span> My Test Performance</Link></li>
                    <li><Link to={"/user/dashboard/collages"}><span><i className="fa-solid fa-building-columns"></i></span> Collages</Link></li>
                    <li><Link to={"/user/dashboard/career"}><span><i className="fa-solid fa-compass"></i></span> Career Compass</Link></li>
                    <li><Link to={"/user/dashboard/document"}><span><i className="fa-solid fa-id-card"></i></span> Document</Link></li>
                    <li><Link to={"/user/dashboard/feed"}><span><i className="fa-solid fa-comment"></i></span> Feed</Link></li>
                    <li><Link to={"/user/dashboard/payment"}><span><i className="fa-solid fa-money-check-dollar"></i></span> Payments</Link></li>
                    <li><Link to={"/user/dashboard/insurance"}><span><i className="fa-solid fa-car-burst"></i></span> Insurance</Link></li>
                    <li><Link to={"/user/dashboard/counsellor"}><span><i className="fa-solid fa-face-smile"></i></span> Counsellors</Link></li>
                    <li><Link to={"/user/dashboard/account"}><span><i className="fa-solid fa-gear"></i></span> Account Settings</Link></li> */}
                </ul>
            </div>
        </div>
    </>
  )
}
