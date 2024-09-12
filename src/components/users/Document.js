import React, { useEffect, useState } from 'react'
import constants from '../../utils/Constants/constants';
import '../../css/document-collagedekho.css';
import '../../css/document-responsive.css';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDocument, updateUserDocumentAfterFetch } from '../../features/userSlice';
import httpFetch from '../../fetch/useFetch';

export default function Document() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploadResponse, setUploadResponse] = useState(false)
    const allowedFileTypes = ['jpg','jpeg','png','pdf']
    const dispatch = useDispatch()
    const { userInfo, userDocument } = useSelector(state=>state.userSlice)
    
    const validateSelectedFiles = (e, document)=>{
      const fileType = e.target.files[0].type.split('/')
      const newName = document+'.'+fileType[1]
      if (!allowedFileTypes.includes(fileType[1])) {
        alert('Selected File Type is not Supported')
        return;
      } else if (e.target.files[0].size > 2097152) {
        alert('Selected File Size exceeds the limit')
        return;
      } else {
        const file = new File([e.target.files[0]], newName);
        selectedFiles.push(file)
      }
      setSelectedFiles(selectedFiles)
    }
    const handleUpload = async () => {
      const data = new FormData();
      for (let i = 0; i < selectedFiles.length; i++) {
        data.append("file[]", selectedFiles[i]);
      }
      let url = constants.apiEndPoint.UPLOAD_FILE+"?dir=upload";

      await axios.post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res)
        if(res.status !== 200){
          alert('File Upload unsucessfull... try again')
        }
        dispatch(updateUserDocument({data:res.data}))
        setUploadResponse(true)
      })
      .catch((error) =>{
        alert('File Upload unsucessfull... try again')
      });
    }

    const afterFileUpload = async ()=>{
      try{
        const filePayload = {
          email: userInfo.email,
          certificate_10th: userDocument.certificate_10th,
          certificate_12th: userDocument.certificate_12th,
          graduation_certificate: userDocument.graduation_certificate,
          pg_certificate: userDocument.pg_certificate,
          aadhaar_card: userDocument.aadhaar_card,
          pan_card: userDocument.pan_card
        }
        const jsonData = await httpFetch(constants.apiEndPoint.USER_DOCUMENT_SAVE_UPDATE,constants.apiMethod.POST,constants.apiHeader.HEADER,filePayload)
        console.log(jsonData)
        if(jsonData.status == 'success'){
          alert('File Upload Sucessfull')
          setUploadResponse(false)
        }else{
          alert('File Upload unsucessfull... try again')
          setUploadResponse(false)
        }
      }
      catch(error){
        alert('File Upload unsucessfull... try again')
      }
    }

    const handleTabClick = async ()=>{
      
      const data = await httpFetch(constants.apiEndPoint.USER_DOCUMENT_GET_ALL_DOCUMENT+userInfo.email,constants.apiMethod.GET,constants.apiHeader.HEADER)
      console.log(data)
      if(data.status == 'success'){
        dispatch(updateUserDocumentAfterFetch({data : data.data}))
      }
      console.log(userDocument)
    }

    const customLabel = (data)=>{
      const capturedName = data.split('-')[1].split('.')[0]
      const removeExtension = capturedName.replace(/_/,' ')
      if(removeExtension==='certificate 10th' || removeExtension==='certificate 12th'){
        return removeExtension.split(' ').reverse().join(" ")
      }
      return removeExtension
    }
    useEffect(()=>{
      if(uploadResponse){
        afterFileUpload()
      }
    },[uploadResponse])
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
                <label for="tab2" onClick={()=>handleTabClick()}>Admission Proof</label>
                
                
                <div className="tab-panels">
                  <section id="Basic-Documents" className="tab-panel">
                    {/* <div className="document-box">
                        <div className="document-text-image">
                            <div className="document-text-h5-button order-text">
                            <h5>Securely access your documents anywhere, anytime.</h5>
                            <p className="rewards-p">Upload the documents listed below to build your profile that will help us serve you better and also earn exciting rewards Upload atleast 3 documents and earn <img src={constants.images.users.reward} alt="coin"/> 50 reward points.</p>
                            </div>
        
                          <div className="document-img">
                            <img src={constants.images.users.imgBannerUpload} alt="rewards-img"/>
                          </div>
                        </div>
                    </div> */}

                    {/* <!--  --> */}
                    <div className="document-box2">
                        <h5>Documents</h5>
                        <div className="upload-wraper">
                            <div className="upload">
                              <div className="upload-i-text">
                                <div style={{width:'90%'}}>
                                  <input type="file" className="form-control" name="file" onChange={(e) => validateSelectedFiles(e, 'certificate_10th')}/>
                                </div>
                              </div>
                                <h6>10th Certificate</h6>
                                <p className="document-p">File should be max 500kb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                              <div className="upload-i-text">
                                <div style={{width:'90%'}}>
                                  <input type="file" className="form-control" name="file" onChange={(e) => validateSelectedFiles(e, 'certificate_12th')}/>
                                </div>
                              </div>
                                <h6>12th Certificate</h6>
                                <p className="document-p">File should be max 500kb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                  <div style={{width:'90%'}}>
                                    <input type="file" className="form-control" name="file" onChange={(e) => validateSelectedFiles(e, 'graduation_certificate')}/>
                                  </div>
                                </div>
                                <h6>Graduation Certificate</h6>
                                <p className="document-p">File should be max 500kb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                  <div style={{width:'90%'}}>
                                    <input type="file" className="form-control" name="file" onChange={(e) => validateSelectedFiles(e, 'aadhaar_card')}/>
                                  </div>
                                </div>
                                <h6>Aadhaar Card</h6>
                                <p className="document-p">File should be max 500kb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div className="upload">
                                <div className="upload-i-text">
                                  <div style={{width:'90%'}}>
                                    <input type="file" className="form-control" name="file" onChange={(e) => validateSelectedFiles(e, 'pan_card')}/>
                                  </div>
                                </div>
                                <h6>PAN Card</h6>
                                <p className="document-p">File should be max 500kb and jpg, jpeg, png, pdf</p>
                            </div>
                            <div style={{display:'flex', width:'100%', height:'250px', justifyContent:'center', alignItems:'end'}}>
                              <button class="besic-detials-button-save" onClick={()=> handleUpload()}>Upload</button>
                            </div>
                            
                        </div>
                    </div>


                    {/* <!--  --> */}
                  </section>
                  <section id="Admission-Proof" className="tab-panel">
                    {/* <div className="document-box">
                        <div className="document-text-image">
                            <div className="document-text-h5-button order-text">
                            <h5>Securely access your documents anywhere, anytime.</h5>
                            <p className="rewards-p">Upload your admission proof and earn <img src={constants.images.users.reward} alt="coin"/> 100 reward points..</p>
                            </div>
        
                          <div className="document-img">
                            <img src={constants.images.users.imgBannerUpload} alt="rewards-img"/>
                          </div>
                        </div>
                    </div> */}
                    <div className="document-box2">
                      <h5>Uploaded Documents</h5>
                      <div className="upload-wraper">
                        {Object.keys(userDocument).filter((data)=> data !== 'email').map((value)=>userDocument[value]).filter((value)=>(value!==' ')).map((data)=>(
                          <div className="upload" style={{display:'flex', flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
                            <div className="upload-i-text">
                              <div style={{width:'60%', height:"100px"}}>
                                <img src={constants.apiEndPoint.DOCUMENT_PATH+data} alt='Certificate Image'/>
                              </div>
                            </div>
                              <h6 style={{textTransform:'capitalize'}}>{customLabel(data)}</h6>
                              <div>
                                <button class="besic-detials-button-save">View</button>
                              </div>
                          </div>
                        ))}
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
