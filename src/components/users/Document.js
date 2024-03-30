import React, { useEffect, useState } from 'react'
import constants from '../../utils/Constants/constants';
import '../../css/document-collagedekho.css';
import '../../css/document-responsive.css';
import Sidebar from './Sidebar';
import axios from 'axios';

export default function Document() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    useEffect(() => {
console.log(selectedFiles[0])
    }, [selectedFiles])
    const handleUpload = () => {
    const data = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      data.append("file[]", selectedFiles[i]);
    }

    let url = constants.apiEndPoint.UPLOAD_FILE+"?dir=upload";

    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res)
        
      },error=>{
        console.log(error);
      });
        
    }
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
            <Sidebar/>
        <div className="left-box">
            {/* <!--  --> */}
            <div className="tabset">
                {/* <!-- Tab 1 --> */}
                <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked/>
                <label for="tab1">Basic Documents</label>
                {/* <!-- Tab 2 --> */}
                <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
                <label for="tab2">Admission Proof</label>
                
                
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
                                                       <input
                type="file"
                className="form-control"
                                                          name="file"
                                                          
                onChange={(e) => setSelectedFiles(e.target.files)}
              />
                                    <i className="fa-solid fa-upload"></i>
                                    <span onClick={() => handleUpload()}>Upload</span>
                                </div>
                                <h6>10th Certificate</h6>
                                <p className="document-p">File should be max 2mb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                                  <div className="upload-i-text">
                                                      <input
                type="file"
                className="form-control"
                name="file"
                onChange={(e) => setSelectedFiles([...selectedFiles,{name:e.target.files[0].name,size:e.target.files[0]}])}
              />
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
