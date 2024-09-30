import React from 'react'
import { Link } from 'react-router-dom';
import greyTick from '../../../images/grey-tick.svg';
import { useSelector } from 'react-redux';

export default function ExamHighlights() {
  const {examDetailsById}=useSelector(state=>state.common)
  return (
    <div className="exam-details-hightlisghts-sec mt-5">
            <div className="tick-heading d-flex align-items-center mb-4">
              <span className="tick-heading-icon d-inline-flex">
                <img src={greyTick} alt="" />
              </span>
              <h2>{'Highlights of ' + examDetailsById?.examBasicDetails?.exam_name} {examDetailsById?.examBasicDetails?.exam_year}</h2>
            </div>
            <div className="exam-details-hightlights-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <p>Particulars</p>
                    </th>
                    <th>
                      <p>{examDetailsById?.examBasicDetails?.exam_name + 'Exam Details'}</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Exam Name</td>
                    <td>{examDetailsById?.examBasicDetails?.exam_name}</td>
                  </tr>
                  <tr>
                    <td>Conducting Body</td>
                    <td>{examDetailsById?.highlightsDetails?.map((conductingBody)=>conductingBody.conducting_body).join(' / ')}</td>
                  </tr>
                  <tr>
                    <td>Exam Level</td>
                    <td>{examDetailsById?.highlightsDetails?.map((examlevel)=>examlevel.exam_level).join(' ')}</td>
                  </tr>
                  <tr>
                    <td>Exam Frequency</td>
                    <td>{examDetailsById?.highlightsDetails?.map((examFrequency)=>examFrequency.exam_frequency).join(' ')}</td>
                  </tr>
                  <tr>
                    <td>Model of Exam</td>
                    <td>
                      <ul>
                        {examDetailsById?.highlightsDetails?.map((model)=>(<li>{model.model_of_exam}</li>))}
                        {/* <li>Computed Based Test (CBT) for BE/ B.Tech/ B.Arch/ B.Planning</li>
                        <li>Pen and Paper-based Test (PBT) for Drawing section in BArch</li> */}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Exam Duration</td>
                    <td>
                      <ul>
                        {examDetailsById?.highlightsDetails?.map((examDuration)=>(<li>{examDuration.exam_duration}</li>))} 
                        {/* <li>BTech/BArch/BPlan: 3 hours</li>
                        <li>3.5 hours for both BArch and B.Planning</li>
                        <li>4 hours for candidates with disabilities</li> */}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Number of Papers and Total Marks in JEE Mains</td>
                    <td>
                      <ul>
                        {examDetailsById?.highlightsDetails?.map((marks)=>(<li>{marks.paper_marks}</li>))}
                        {/* <li>Paper 1: BE/B.Tech (300 marks)</li>
                        <li>Paper 2A: B.Arch (400 marks)</li>
                        <li>Paper 2B: B.Plan (400 marks)</li> */}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Marking Scheme</td>
                    <td>
                      <ul>
                        {examDetailsById?.highlightsDetails?.map((scheme)=>(<li>{scheme.marking_scheme}</li>))}
                        {/* <li>4 marks for each correct response</li>
                        <li>For each wrong response, one mark will be deducted</li>
                        <li>There are no points for questions that are not attempted</li> */}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-start mt-5">
              {/* <Link className="course-details-readmore-btn btn">Read More</Link> */}
            </div>
          </div>
  )
}
