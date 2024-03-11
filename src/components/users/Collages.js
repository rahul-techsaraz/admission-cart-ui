import React from 'react'
import constants from '../../utils/Constants/constants';
import '../../css/collages-responsive.css';
import '../../css/collage-collagedekho.css';


export default function Collages() {
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
                <li className="active"><a href="#"><span className="collages-i"><i className="fa-solid fa-building-columns"></i></span><span className="collages-text">Collages</span></a></li>
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
            {/* <!--  --> */}
            <div className="tabset">
                {/* <!-- Tab 1 --> */}
                <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked/>
                <label for="tab1">Recommendations</label>
                {/* <!-- Tab 2 --> */}
                <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
                <label for="tab2">Shortlists</label>
                {/* <!-- Tab 3 --> */}
                <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"/>
                <label for="tab3">Applications</label>
                
                <div className="tab-panels">
                  <section id="Recommendations" className="tab-panel">
                    <div className="recomendation-box">
                       <div className="reco-img-name">
                        <div className="reco-img">
                         <img src={constants.images.users.buLogo} alt=""/>
                        </div>
                         <div className="reco-text">
                         <h4>Brainware University</h4>
                         <p className="reco-p">Kolkata, West Bengal</p>
                        </div>
                       </div>
                       <hr className="reco-hr"/>
                       <div className="reco-text-button">
                        <div className="reco-text-i">Why should you choose this college? Know more about the College. <span className="reco-span">Checkout USPs <i className="fa-solid fa-arrow-right"></i></span></div>
                        <div className="reco-button">
                            <div className="reco-btn">
                            <button className="reco-btn1">Schedule a Call</button>
                            </div>
                                <div className="button-box">
                                <div className="collages-btn from-down">Move to Shortlist</div>
                                </div>
                        </div>
                       </div>
                    </div>

                    {/* <!--  --> */}
                  </section>
                  <section id="Shortlists" className="tab-panel">
                    <div className="not-show">
                        <div className="not-show-img">
                            <img src={constants.images.users.noDataImg} alt="no-data"/>
                        </div>
                        <h5>Sorry! Seems like you have no Insurance</h5>
                    </div>
                  </section>
                  <section id="Applications" className="tab-panel">
                    <div className="not-show">
                        <div className="not-show-img">
                            <img src={constants.images.users.noDataImg} alt="no-data"/>
                        </div>
                        <h5>Sorry! Seems like you have no Insurance</h5>
                    </div>
                  </section>
                </div>
                
              </div>
        </div>
{/* <!--  --> */}
        </div>
        </div>
    </section>
    </>
  )
}
