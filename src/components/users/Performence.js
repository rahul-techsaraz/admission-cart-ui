import React from 'react'
import constants from '../../utils/Constants/constants'

export default function Performence() {
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
            <div className="side-navbar-parents">
                
            <div className="side-navbar">
                <input type="checkbox" id="check"/>
                <label for="check">
                    <i className="fa-solid fa-bars-staggered" id="bars"></i>
                    <i className="fa-solid fa-xmark" id="cancel"></i>
                </label>
            <ul>
                <li><a href="#"><span className="home-icon"><i className="fa-solid fa-house"></i></span> <span className="home-text">Home</span></a></li>
                <li><a href="#"><span><i className="fa-solid fa-user"></i></span> <span className="profile-text">Profile</span></a></li>
                <li className="active"><a href="#"><span className="perfomence-i"><i className="fa-solid fa-chart-pie"></i></span><span className="perfomence-text">My Test Performance</span></a></li>
                <li><a href="#"><span><i className="fa-solid fa-building-columns"></i></span> Collages</a></li>
                <li><a href="#"><span><i className="fa-solid fa-compass"></i></span>Career Compass</a></li>
                <li><a href="#"><span><i className="fa-solid fa-id-card"></i></span>Document</a></li>
                <li><a href="#"><span><i className="fa-solid fa-comment"></i></span>Feed</a></li>
                <li><a href="#"><span><i className="fa-solid fa-money-check-dollar"></i></span>Payments</a></li>
                <li><a href="#"><span><i className="fa-solid fa-gift"></i></span>Rewards</a></li>
                <li><a href="#"><span><i className="fa-solid fa-car-burst"></i></span>Insurance</a></li>
                <li><a href="#"><span><i className="fa-solid fa-face-smile"></i></span>Counsellors</a></li>
                <li><a href="#"><span><i className="fa-solid fa-gear"></i></span> Account Settings</a></li>
            </ul>
        </div>
    </div>
        <div className="left-box">
            <div className="not-show">
                <div className="not-show-img">
                    <img src={constants.images.users.noDataImg} alt="no-data"/>
                </div>
                <h5>Sorry! Seems like you have no Insurance</h5>
            </div>
        </div>
        </div>
        </div>
    </section>
    </>
  )
}
