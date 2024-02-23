import React from 'react'
import { Link } from 'react-router-dom';
import greyTick from '../../../images/grey-tick.svg';

export default function ExamHighlights() {
  return (
    <div className="exam-details-hightlisghts-sec mt-5">
            <div className="tick-heading d-flex align-items-center mb-4">
              <span className="tick-heading-icon d-inline-flex">
                <img src={greyTick} alt="" />
              </span>
              <h2>Highlights of JEE Main 2024</h2>
            </div>
            <div className="exam-details-hightlights-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <p>Particulars</p>
                    </th>
                    <th>
                      <p>JEE Main Exam Details</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Exam Name</td>
                    <td>Joint Entrance Examination (Main) or JEE Main</td>
                  </tr>
                  <tr>
                    <td>Conducting Body</td>
                    <td>National Testing Agency (NTA) / JEE Apex Board (JAB)</td>
                  </tr>
                  <tr>
                    <td>Exam Level</td>
                    <td>National Level Undergraduate Exam (B Tech, B Arch and B Plan)</td>
                  </tr>
                  <tr>
                    <td>Exam Frequency</td>
                    <td>Twice: January and April, 2024 (Tentative)</td>
                  </tr>
                  <tr>
                    <td>Model of Exam</td>
                    <td>
                      <ul>
                        <li>Computed Based Test (CBT) for BE/ B.Tech/ B.Arch/ B.Planning</li>
                        <li>Pen and Paper-based Test (PBT) for Drawing section in BArch</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Exam Duration</td>
                    <td>
                      <ul>
                        <li>BTech/BArch/BPlan: 3 hours</li>
                        <li>3.5 hours for both BArch and B.Planning</li>
                        <li>4 hours for candidates with disabilities</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Number of Papers and Total Marks in JEE Mains</td>
                    <td>
                      <ul>
                        <li>Paper 1: BE/B.Tech (300 marks)</li>
                        <li>Paper 2A: B.Arch (400 marks)</li>
                        <li>Paper 2B: B.Plan (400 marks)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Marking Scheme</td>
                    <td>
                      <ul>
                        <li>4 marks for each correct response</li>
                        <li>For each wrong response, one mark will be deducted</li>
                        <li>There are no points for questions that are not attempted</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-start mt-5">
              <Link className="course-details-readmore-btn btn">Read More</Link>
            </div>
          </div>
  )
}
