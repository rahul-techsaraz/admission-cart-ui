import React from 'react'
import '../../css/insurance-collagedekho.css'
import constants from '../../utils/Constants/constants'
import Sidebar from './Sidebar'

export default function Insurance() {
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
          <Sidebar/>
        <div className="left-box">
            {/* <!-- start --> */}
            <div className="not-show">
                    <div className="not-show-img">
                        <img src={constants.images.users.noDataImg} alt="no-data"/>
                    </div>
                    <h5>Sorry! Seems like you have no Insurance</h5>
            </div>
              {/* <!--  --> */}
              <div className="need-help">
                <div className="need-help-child">
                    <h5>Need help deciding the right insurance plan for you?</h5>
                    <div className="need-help-button">
                        <div className="need-help-btn from-right">Schedule a Call</div>
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
