import React from 'react'
import constants from '../../utils/Constants/constants'

export default function Document() {
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
                <li className="active"><a href="#"><span className="document-i"><i className="fa-solid fa-id-card"></i></span> <span className="document-text">Document</span></a></li>
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
                <label for="tab1">Basic Documents</label>
                {/* <!-- Tab 2 --> */}
                <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
                <label for="tab2">Admission Proof</label>
                {/* <!-- Tab 3 --> */}
                <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"/>
                <label for="tab3">Insurance Application</label>
                
                <div className="tab-panels">
                  <section id="Basic-Documents" className="tab-panel">
                    <div className="document-box">
                        <div className="document-text-image">
                            <div className="document-text-h5-button order-text">
                            <h5>Securely access your documents anywhere, anytime.</h5>
                            <p className="rewards-p">Upload the documents listed below to build your profile that will help us serve you better and also earn exciting rewards Upload atleast 3 documents and earn <img src={constants.images.users.reward} alt="coin"/> 50 reward points.</p>
                            </div>
        
                          <div className="document-img">
                            <img src={constants.images.users.imgBannerUpload} alt="rewards-img"/>
                          </div>
                        </div>
                    </div>

                    {/* <!--  --> */}
                    <div className="document-box2">
                        <h5>Documents</h5>
                        <div className="upload-wraper">
                            <div className="upload">
                                <div className="upload-i-text">
                                    <i className="fa-solid fa-upload"></i>
                                    <span>Upload</span>
                                </div>
                                <h6>10th Certificate</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                    <i className="fa-solid fa-upload"></i>
                                    <span>Upload</span>
                                </div>
                                <h6>12th Certificate</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                    <i className="fa-solid fa-upload"></i>
                                    <span>Upload</span>
                                </div>
                                <h6>Graduation Certificate</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                    <i className="fa-solid fa-upload"></i>
                                    <span>Upload</span>
                                </div>
                                <h6>Aadhaar Card</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                    <i className="fa-solid fa-upload"></i>
                                    <span>Upload</span>
                                </div>
                                <h6>PAN Card</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                        </div>
                    </div>


                    {/* <!--  --> */}
                  </section>
                  <section id="Admission-Proof" className="tab-panel">
                    <div className="document-box">
                        <div className="document-text-image">
                            <div className="document-text-h5-button order-text">
                            <h5>Securely access your documents anywhere, anytime.</h5>
                            <p className="rewards-p">Upload your admission proof and earn <img src={constants.images.users.reward} alt="coin"/> 100 reward points..</p>
                            </div>
        
                          <div className="document-img">
                            <img src={constants.images.users.imgBannerUpload} alt="rewards-img"/>
                          </div>
                        </div>
                    </div>
                    <div className="not-show">
                        <div className="not-show-img">
                            <img src={constants.images.users.noDataImg} alt="no-data"/>
                        </div>
                        <h5>Sorry! Seems like you have no Insurance</h5>
                    </div>
                  </section>
                  <section id="Insurance-Application" className="tab-panel">
                    <div className="document-box2">
                        <h5>Documents</h5>
                        <div className="upload-wraper">
                            <div className="upload">
                                <div className="upload-i-text">
                                    <i className="fa-solid fa-upload"></i>
                                    <span>Upload</span>
                                </div>
                                <h6>College ID Proof</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                    <i className="fa-solid fa-upload"></i>
                                    <span>Upload</span>
                                </div>
                                <h6>College Admission Receipt</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                    <i className="fa-solid fa-upload"></i>
                                    <span>Upload</span>
                                </div>
                                <h6>Parent's Aadhaar Card</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                        </div>
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
