import React from 'react'
import constants from '../../utils/Constants/constants'

export default function Counsellor() {
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
                <li><a href="#"><span><i className="fa-solid fa-chart-pie"></i></span> My Test Performance</a></li>
                <li><a href="#"><span><i className="fa-solid fa-building-columns"></i></span> Collages</a></li>
                <li><a href="#"><span><i className="fa-solid fa-compass"></i></span>Career Compass</a></li>
                <li><a href="#"><span><i className="fa-solid fa-id-card"></i></span> Document</a></li>
                <li><a href="#"><span><i className="fa-solid fa-comment"></i></span>Feed</a></li>
                <li><a href="#"><span><i className="fa-solid fa-money-check-dollar"></i></span>Payments</a></li>
                <li><a href="#"><span><i className="fa-solid fa-gift"></i></span> Rewards</a></li>
                <li><a href="#"><span><i className="fa-solid fa-car-burst"></i></span>Insurance</a></li>
                <li className="active"><a href="#"><span className="counsellors-i"><i className="fa-solid fa-face-smile"></i></span><span className="counsellors-text">Counsellors</span></a></li>
                <li><a href="#"><span><i className="fa-solid fa-gear"></i></span> Account Settings</a></li>
            </ul>
        </div>
    </div>
        <div className="left-box">
            <div className="counsellors-box1">
                <div className="counsellors-text-image">
                    <div className="counsellors-text-h5-button order-text">
                    <h5>Hi Jayanta Kumar Mondal, we are here to help you.</h5>
                    <span className="counsellors-span-text">Our experts will help you in your entire admission journey.</span>
                      {/* <!-- <div className="button-box">
                      <div className="counsellors-btn from-right">Apply for more colleges</div>
                    </div> --> */}
                      
                    </div>
                  <div className="counsellors-img">
                    <img src={constants.images.users.counsellor} alt="counsellors-img"/>
                  </div>
                </div>
              </div>

              {/* <!--  --> */}

              <div className="counsellors-box2">
                <div className="counsellors-child">
                    <h5>Need help deciding the right insurance plan for you?</h5>
                    <div className="counsellors-button">
                        <div className="counsellors-btn from-right">Share your Feedback</div>
                      </div>
                </div>
              </div>

        </div>

        </div>
        </div>
    </section>
    </>
  )
}
