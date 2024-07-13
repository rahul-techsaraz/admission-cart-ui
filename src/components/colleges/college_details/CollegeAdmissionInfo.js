import React from 'react'
import greyTicketIcon from '../../../images/grey-tick.svg'
import { Link } from 'react-router-dom'
export default function CollegeAdmissionInfo() {
  return (
      <>
          <div className="tick-heading d-flex align-items-center mb-4">
                        <span className="tick-heading-icon d-inline-flex">
                        <img src={greyTicketIcon} alt="" />
                        </span>
                        <h2>IIT Chennai Admission 2023</h2>
          </div>
          <div className="clg-location-infograybx">
                        <p>IIT Chennai University admission for 2023 is currently open. The university is accepting applications through its official website. Interested candidates can apply online as well as visit the campus to apply in the offline mode. </p>
                        <div className="text-start mt-3">
                           <Link className="course-details-readmore-btn btn text-white">Read More</Link>
                        </div>
                     </div>
      </>
  )
}
