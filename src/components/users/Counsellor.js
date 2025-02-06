import React from 'react'
import constants from '../../utils/Constants/constants';
import '../../css/counsellors-collagedekho.css';
import '../../css/counsellors-responsive.css';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';


export default function Counsellor() {
  const {userInfo} = useSelector(state=>state.userSlice)
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
            <Sidebar/>
        <div className="left-box">
            <div className="counsellors-box1">
                <div className="counsellors-text-image">
                    <div className="counsellors-text-h5-button order-text">
                    <h5>{`Hey ${userInfo.full_name}, we are here to help you.`}</h5>
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
