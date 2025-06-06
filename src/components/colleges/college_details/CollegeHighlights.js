import React from 'react';
import { Link } from 'react-router-dom';

export default function CollegeHighlights() {
  return (
    <>
      <div className="exam-details-hightlisghts-sec mt-5">
        <div className="exam-details-hightlights-table">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <p>Courses</p>
                </th>
                <th>
                  <p>Course Fee</p>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  B.Tech <span className="d-block">19 Courses</span>
                </td>
                <td>₹ 1,27,000 - 1,37,000</td>
                <td className="position-relative">
                  <Link className="management-clg-applybtn clginfo-applybtn">Apply Now</Link>
                </td>
              </tr>
              <tr>
                <td>
                  B.CA <span className="d-block">19 Courses</span>
                </td>
                <td>₹ 1,27,000 - 1,37,000</td>
                <td className="position-relative">
                  <Link className="management-clg-applybtn clginfo-applybtn">Apply Now</Link>
                </td>
              </tr>
              <tr>
                <td>
                  B.Tech <span className="d-block">19 Courses</span>
                </td>
                <td>₹ 1,27,000 - 1,37,000</td>
                <td className="position-relative">
                  <Link className="management-clg-applybtn clginfo-applybtn">Apply Now</Link>
                </td>
              </tr>
              <tr>
                <td>
                  B.CA <span className="d-block">19 Courses</span>
                </td>
                <td>₹ 1,27,000 - 1,37,000</td>
                <td className="position-relative">
                  <Link className="management-clg-applybtn clginfo-applybtn">Apply Now</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-start mt-5">
          <Link className="course-details-readmore-btn btn">Read More</Link>
        </div>
      </div>
    </>
  );
}
