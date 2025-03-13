import React, { useEffect, useState } from 'react'
import constants from '../../utils/Constants/constants';
import '../../css/collages-responsive.css';
import '../../css/collage-collagedekho.css';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserSortlistedColleges } from '../../features/userSlice';
import { Link } from 'react-router-dom';
import { useFetchUserSortlist } from '../hooks/useFetchUserSortlist';
import { saveUserShortlist } from '../ReduxThunk/CommonThunk';
import CustomPagination from '../../utils/Constants/custom-components/CustomPagination';


export default function Collages() {
  const [recomendedColleges, setRecomendedColleges] = useState([])
  const {userPreferenceInfo, userShortListedColleges, userInfo} = useSelector(state=>state.userSlice)
  const {allCollegeData} = useSelector(state=>state.common)
  const dispatch = useDispatch()
  const {fetchSortlist} = useFetchUserSortlist()
  const [tabToShow, setTabToShow] = useState({
    recomendation: true,
    shortlist: false,
  })
  const handleTabClick = (e) =>{
    if(e.target.innerText === 'Recommendations'){
      setTabToShow({...tabToShow, recomendation:true, shortlist:false})
      return
    }
    if(e.target.innerText === 'Shortlists'){
      setTabToShow({...tabToShow, recomendation:false, shortlist:true})
    }
  }
  const filteredColleges = () => {
    return allCollegeData.filter((college)=>college?.category_name === userPreferenceInfo[0]?.specialization)
  }
  const filteredCollegesById = () => {
    return allCollegeData.filter((college)=>userShortListedColleges.college_id.split(',').includes(college.college_id))
  }
  const moveToShortList = (college) => {
    if(userShortListedColleges.college_id.split(',').includes(college.college_id)){
      return
    }else{
      dispatch(updateUserSortlistedColleges({sortlistedCollege:college}))
    }
  }
  const uploadSortList = async () => {
    try{
      const payload = {
        email: userInfo.email,
        college_id: userShortListedColleges.college_id,
        college_name: userShortListedColleges.college_name
      }
      const response = await dispatch(saveUserShortlist({
        url: constants.apiEndPoint.USER_SORTLIST_SAVE_UPDATE,
        method: userShortListedColleges.college_id.split(',').length <= 1 ? constants.apiMethod.POST : constants.apiMethod.PUT,
        header: constants.apiHeader.HEADER,
        body: payload
      }))
      console.log(response)
      if(response?.payload.status === constants.apiResponseStatus.SUCCESS){
        fetchSortlist();
      }else{
        alert("Something went wrong try again later...")
      }
    }catch(err){
      alert("Something went wrong try again later...")
    }
  }
  useEffect(()=>{
    fetchSortlist()
  },[])
  useEffect(()=>{
    if(userShortListedColleges.college_id !== ''){
      console.log(userShortListedColleges)
      uploadSortList()
    }
  },[userShortListedColleges.college_id])
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
                {/* <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked/> */}
                <label onClick={(e)=>handleTabClick(e)}>Recommendations</label>
                {/* <!-- Tab 2 --> */}
                {/* <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/> */}
                <label onClick={(e)=>handleTabClick(e)}>Shortlists</label>
                {/* <!-- Tab 3 --> */}
                {/* <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"/>
                <label for="tab3">Applications</label> */}
                
                <div className="tab-panels">
                  {tabToShow?.recomendation &&
                    recomendedColleges.map((college)=>(
                      <section id="Recommendations" style={{marginBottom:'10px'}}>
                      <div className="recomendation-box">
                        <div className="reco-img-name">
                          <div className="reco-img">
                          <img src={constants.imageAbsolutePath+college?.college_logo} alt=""/>
                          </div>
                          <div className="reco-text">
                          <h4>{college?.college_name}</h4>
                          <p className="reco-p">{`${college.city}, ${college.state}`}</p>
                          </div>
                        </div>
                        <hr className="reco-hr"/>
                        <div className="reco-text-button">
                          <div className="reco-text-i">Why should you choose this college? Know more about the College. <Link to={`/colleges_details/${college.college_id}`}style={{display:"inline-flex"}}><span className="reco-span">Checkout USPs <i className="fa-solid fa-arrow-right"></i></span></Link></div>
                          <div className="reco-button">
                            {/* <div className="reco-btn">
                              <button className="reco-btn1">Schedule a Call</button>
                            </div> */}
                            <div className="button-box">
                              <div className="collages-btn from-down" onClick={()=>moveToShortList(college)}>Move to Shortlist</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    ))
                  }
                  {tabToShow?.recomendation &&
                    <div className='row pagination-gap'>
                      <CustomPagination data={filteredColleges()} itemsPerPage={2} currentItemsParent={setRecomendedColleges}/>
                    </div>
                  }
                  
                  
                  {(tabToShow?.shortlist && userShortListedColleges.college_id !== '' ? 
                    recomendedColleges.map((college)=>(
                      <section id="Recommendations" style={{marginBottom:'10px'}}>
                        <div className="recomendation-box">
                          <div className="reco-img-name">
                            <div className="reco-img">
                            <img src={constants.imageAbsolutePath+college?.college_logo} alt=""/>
                            </div>
                            <div className="reco-text">
                            <h4>{college?.college_name}</h4>
                            <p className="reco-p">{`${college.city}, ${college.state}`}</p>
                            </div>
                          </div>
                          <hr className="reco-hr"/>
                          <div className="reco-text-button">
                            <div className="reco-text-i">Why should you choose this college? Know more about the College.</div>
                            <div className="reco-button">
                              <div className="button-box">
                                <div className="collages-btn from-down">Remove from Shortlist</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    ))
                  :
                  (tabToShow?.shortlist && userShortListedColleges.college_id === '') &&
                    <section id="Shortlists">
                      <div className="not-show">
                          <div className="not-show-img">
                              <img src={constants.images.users.noDataImg} alt="no-data"/>
                          </div>
                          <h5>Sorry! Seems like you have no Insurance</h5>
                      </div>
                    </section>
                  )}

                  {(tabToShow?.shortlist && userShortListedColleges.college_id !== '') && 
                    <div className='row pagination-gap'>
                      <CustomPagination data={filteredCollegesById()} itemsPerPage={2} currentItemsParent={setRecomendedColleges}/>
                    </div>
                  }
                  
                  {/* <section id="Recommendations" className="tab-panel">
                    <div className="recomendation-box">
                       <div className="reco-img-name">
                        <div className="reco-img">
                         <img src={constants.images.users.buLogo} alt=""/>
                        </div>
                         <div className="reco-text">
                         <h4>Brainware University</h4>
                         <p className="reco-p">Kolkata, West Bengal</p>
                        </div>
                       </div>
                       <hr className="reco-hr"/>
                       <div className="reco-text-button">
                        <div className="reco-text-i">Why should you choose this college? Know more about the College. <span className="reco-span">Checkout USPs <i className="fa-solid fa-arrow-right"></i></span></div>
                        <div className="reco-button">
                            <div className="reco-btn">
                            <button className="reco-btn1">Schedule a Call</button>
                            </div>
                                <div className="button-box">
                                <div className="collages-btn from-down">Move to Shortlist</div>
                                </div>
                        </div>
                       </div>
                    </div>
                  </section> */}
                  {/* <section id="Shortlists" className="tab-panel">
                    <div className="not-show">
                        <div className="not-show-img">
                            <img src={constants.images.users.noDataImg} alt="no-data"/>
                        </div>
                        <h5>Sorry! Seems like you have no Insurance</h5>
                    </div>
                  </section> */}
                  {/* <section id="Applications" className="tab-panel">
                    <div className="not-show">
                        <div className="not-show-img">
                            <img src={constants.images.users.noDataImg} alt="no-data"/>
                        </div>
                        <h5>Sorry! Seems like you have no Insurance</h5>
                    </div>
                  </section> */}
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
