import React from 'react'
import Sidebar from './Sidebar'
import '../../css/account-collagedekho.css'
import '../../css/account-responsive.css'

export default function Account() {
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
            <Sidebar/>
        <div className="left-box">
            {/* <!--  --> */}
            <div className="notification-box">
               <h3>Notification & Reminders</h3>
               <p className="noti-p">Never miss important reminders & notifications about the latest education news and your admission journey status</p>
               <div className="noti-flexbox">
                <div className="emil-flexbox">
                    <div className="email-text">Email</div>
                    <div className="lavel-div">
                            <label>
                                <input className="toggle-checkbox" type="checkbox"/>
                               <div className="toggle-slot">
                               <div className="sun-icon-wrapper">
                                 <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                                 </div>
                                 <div className="toggle-button"></div>
                                 <div className="moon-icon-wrapper">
                                  <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                                   </div>
                                    </div>
                           </label>
                        </div>
                        </div>

<div className="emil-flexbox">
    <div className="email-text">SMS</div>
    <div className="lavel-div">
            <label>
                <input className="toggle-checkbox" type="checkbox"/>
               <div className="toggle-slot">
               <div className="sun-icon-wrapper">
                 <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                 </div>
                 <div className="toggle-button"></div>
                 <div className="moon-icon-wrapper">
                  <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                   </div>
                    </div>
           </label>
        </div>
        </div>


        <div className="emil-flexbox">
            <div className="email-text">Whatsapp</div>
            <div className="lavel-div">
                    <label>
                        <input className="toggle-checkbox" type="checkbox"/>
                       <div className="toggle-slot">
                       <div className="sun-icon-wrapper">
                         <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                         </div>
                         <div className="toggle-button"></div>
                         <div className="moon-icon-wrapper">
                          <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                           </div>
                            </div>
                   </label>
                </div>
                </div>


               </div>
            </div>
            {/* <!--  --> */}
            <div className="issu-box">
                 <h3>Report an Issue</h3>
                 <div className="issu-comment">
                    <input type="write" className="issu-button" placeholder="What is your concern?"/>
                 </div>
                 <div className="submit-button-box">
                    <div className="submit-button from-center">Submit</div>
                  </div>
            </div>
        </div>

        </div>
        </div>
    </section>
    </>
  )
}
