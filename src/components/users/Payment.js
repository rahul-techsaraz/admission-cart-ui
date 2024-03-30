import React from 'react'
import '../../css/payments-collagedekho.css'
import constants from '../../utils/Constants/constants'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

export default function Payment() {
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
            <Sidebar/>
        <div className="left-box">
            {/* <!-- My Feed start --> */}
            <div className="payment-history-box">
               <li><Link>Payment History</Link></li>
            </div>
            {/* <!--  -->  */}
            
            <div className="payments-box">
                <div className="payments-text-image">
                    <div className="payments-text-h5-button order-text">
                    <h5>Target multiple colleges through a single application with discounts of upto 50%</h5>
                      <div className="button-box">
                      <div className="payments-btn from-right">Apply for more colleges</div>
                    </div>
                      
                    </div>
                  <div className="payments-img">
                    <img src={constants.images.users.connectUs} alt="box-down-img"/>
                  </div>
                </div>
              </div>
              {/* <!--  --> */}
        </div>

        </div>
        </div>
    </section>
    </>
  )
}
