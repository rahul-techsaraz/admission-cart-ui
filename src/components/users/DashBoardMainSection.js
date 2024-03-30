import React from 'react'
import expertPersonImage from '../../images/homepage-image/img-talk-to-expert.5ba545e8.svg'
import referNEarn from '../../images/homepage-image/img-refre-earn.70618d08.svg';
import imageCareer from '../../images/homepage-image/img-career-test.d688cf52.svg';
import imageInsurance from '../../images/homepage-image/img-insurance.cbbd9882.svg';
import ICmanageProfile from '../../images/homepage-image/Ic-manage-profile.dd386740.svg';
import ICFeedbackProfile from '../../images/homepage-image/Ic-feedback.47ae6b92.svg';
import ICLegalProfile from '../../images/homepage-image/ic-legal.6c5d124d.svg';
import ICSettingProfile from '../../images/homepage-image/Ic-settings.5c58e061.svg';
import { Link } from 'react-router-dom';








export default function DashBoardMainSection() {
  return (
     <section className="next-section">
          <div className="container">
            <div className="incomplete">
                <div className="progress">
                    <h3>20<span>%</span><p className="complete-p">Completed</p></h3>
                </div>
                <div className="h3-p">
                    <h3>Hey Jayanta Kumar Mondal, Your profile is incomplete !</h3>
                    <p className="incomplete-p">Complete your profile and we will help you in building better college recommendations for you.You are one step closer to earning 100 reward points</p>
                </div>
                <Link to={"/user/dashboard/profile"}><button className="complte-your-profile btn1">Complete Your Profile</button></Link>
            </div>

            
            <div className="all-img-box">
             <div className="row">
                <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                    <div className="img-box">
                        <div className="col-lg-9 col-xl-9">
                        <div className="imgbox-p-button">
                            <div className="imgboxh3-p">
                            <h3>Talk to our Expert Counsellors</h3>
                            <p className="imgbox-p">Our expert counsellors are ready to help you to complete your admission process.</p>
                        </div>
                        <div className="click">
                            <span className="schedule-a-Call">Schedule a Call <i className="fa-solid fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <div className="imgbox-img">
                        <img src={expertPersonImage} alt="img-talk-to-expert" />
                    </div>
                </div>
            
                       </div>
                    </div>
                


                {/* <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                    <div className="img-box">
                        <div className="col-xl-9">
                        <div className="imgbox-p-button">
                            <div className="imgboxh3-p">
                            <h3>Refer & Earn</h3>
                            <p className="imgbox-p">Refer Collegedekho to a friend and earn reward points that you redeem in your Paytm Wallet</p>
                        </div>
                        <div className="click">
                            <span className="schedule-a-Call">Refer a Friend<i className="fa-solid fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="imgbox-img">
                        <img src={referNEarn} alt="img-talk-to-expert" />
                    </div>
                </div>
             </div>
                </div> */}


                <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                    <div className="img-box">
                        <div className="col-xl-9">
                        <div className="imgbox-p-button">
                            <div className="imgboxh3-p">
                            <h3>Career Profile Test</h3>
                            <p className="imgbox-p">A scientific assessment method that can analyze your aptitude, capabilities, personality, and interests and suggest the best-fit career options for you.</p>
                        </div>
                        <div className="click">
                            <Link to={'/aptitude_test'}><span className="schedule-a-Call" >Predict Your Career<i className="fa-solid fa-angle-right"></i></span></Link>
                        </div>
                    </div>
                </div>

                    <div className="col-xl-3">
                    <div className="imgbox-img">
                        <img src={imageCareer} alt="img-talk-to-expert" />
                    </div>
                </div>
                       </div>
                </div>


                {/* <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                    <div className="img-box">
                        <div className="col-xl-9">
                        <div className="imgbox-p-button">
                            <div className="imgboxh3-p">
                            <h3>CollegeDekho Insurance</h3>
                            <p className="imgbox-p">Get yourself or your parents covered with an insurance and continue uninterrupted education.</p>
                        </div>
                        <div className="click">
                            <span className="schedule-a-Call">Learn More<i className="fa-solid fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="imgbox-img">
                        <img src={imageInsurance} alt="img-talk-to-expert" />
                    </div>
                </div>
                       </div>
                </div> */}
             </div>
            </div>



            <section className="looking-for">
                    <div className="loking-for-box">
                        <h3>Looking for something else?</h3>
                        <div className="padding-icon-box">
                           <div className="icon-text">
                            <div className="manage-profile-img">
                                <img src={ICmanageProfile} alt="" />
                            </div>
                            <span className="manage-profile-span">Manage Profile</span>
                           </div>
                           <div className="manage-profile-rigrt-icon">
                            <i className="fa-solid fa-angle-right"></i>
                           </div>
                        </div>

                        <div className="padding-icon-box">
                            <div className="icon-text">
                             <div className="manage-profile-img">
                                 <img src={ICFeedbackProfile} alt="feedback-img" />
                             </div>
                             <span className="manage-profile-span">Give Us Feedback</span>
                            </div>
                            <div className="manage-profile-rigrt-icon">
                             <i className="fa-solid fa-angle-right"></i>
                            </div>
                         </div>

                         <div className="padding-icon-box">
                            <div className="icon-text">
                             <div className="manage-profile-img">
                                 <img src={ICLegalProfile} alt="legal-img" />
                             </div>
                             <span className="manage-profile-span">Legal</span>
                            </div>
                            <div className="manage-profile-rigrt-icon">
                             <i className="fa-solid fa-angle-right"></i>
                            </div>
                         </div>

                         <div className="padding-icon-box">
                            <div className="icon-text">
                             <div className="manage-profile-img">
                                 <img src={ICSettingProfile} alt="settimgs-img" />
                             </div>
                             <span className="manage-profile-span">Account Settings</span>
                            </div>
                            <div className="manage-profile-rigrt-icon">
                             <i className="fa-solid fa-angle-right"></i>
                            </div>
                         </div>

                    </div>
            </section>
          </div>
    </section>
  )
}
