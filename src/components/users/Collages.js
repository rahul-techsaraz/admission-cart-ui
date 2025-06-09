import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import constants from '../../utils/Constants/constants';
import '../../css/collages-responsive.css';
import '../../css/collage-collagedekho.css';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { removefromSortlistColleges, updateUserSortlistedColleges } from '../../features/userSlice';
import { Link } from 'react-router-dom';
import { useFetchUserSortlist } from '../hooks/useFetchUserSortlist';
import { saveUserShortlist } from '../ReduxThunk/CommonThunk';
import CustomPagination from '../../utils/Constants/custom-components/CustomPagination';
import { showNotification } from '../../features/commonSlice';

 function Collages() {
  const [recomendedColleges, setRecomendedColleges] = useState([]);
  const { userPreferenceInfo, userShortListedColleges, userInfo } = useSelector((state) => state.userSlice);
  const { allCollegeData } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const { fetchSortlist } = useFetchUserSortlist();
  const [tabToShow, setTabToShow] = useState({
    recomendation: true,
    shortlist: false,
  });
  const handleTabClick = (e) => {
    if (e.target.innerText === 'Recommendations') {
      setTabToShow({ ...tabToShow, recomendation: true, shortlist: false });
      return;
    }
    if (e.target.innerText === 'Shortlists') {
      setTabToShow({ ...tabToShow, recomendation: false, shortlist: true });
    }
  };
  const filteredColleges = useMemo(() => {
    if(userShortListedColleges.college_id){
      let filteredData = []
      filteredData = allCollegeData.filter((college)=> !userShortListedColleges.college_id.split(',').includes(college.college_id))
      // console.log(allCollegeData)
      // console.log(filteredData)
      // console.log(filteredData.filter((college) => college?.category_name.includes(userPreferenceInfo?.specialization)))
      return filteredData.filter((college) => college?.category_name.includes(userPreferenceInfo?.specialization));
    }
    return allCollegeData.filter((college) => college?.category_name.includes(userPreferenceInfo?.specialization));
  },[allCollegeData, userPreferenceInfo?.specialization, userShortListedColleges.college_id]);
  
  const filteredCollegesById = useMemo(() => {
    console.log(allCollegeData)
    console.log(allCollegeData.filter((college) => userShortListedColleges.college_id.split(',').includes(college.college_id)))
    return allCollegeData.filter((college) => userShortListedColleges.college_id.split(',').includes(college.college_id)
    );
  },[allCollegeData, userShortListedColleges.college_id]);
  
  const moveToShortList = async (college) => {
    try {
      const payload = {
        email: userInfo.email,
        college_id: college.college_id,
        college_name: college.college_name,
      };
      const response = await dispatch(
        saveUserShortlist({
          url: constants.apiEndPoint.USER_SORTLIST_SAVE_UPDATE,
          method:
            userShortListedColleges.email
              ? constants.apiMethod.PUT
              : constants.apiMethod.POST,
          header: constants.apiHeader.HEADER,
          payload: payload,
        })
      );
      if (response?.payload.status === constants.apiResponseStatus.SUCCESS) {
        dispatch(showNotification({
            isOpen: true,
            type: 'sucess',
            message: 'Shortlisting Sucessfully',
        }))
        fetchSortlist();
      } else {
         dispatch(showNotification({
            isOpen: true,
            type: 'error',
            message: 'Shortlisting Unsucessful...',
        }))
      }
    } catch (err) {
      dispatch(showNotification({
          isOpen: true,
          type: 'error',
          message: 'Something went wrong... try again later',
      }))
    }
  };
  // const uploadSortList = async () => {
  //   try {
  //     const payload = {
  //       email: userInfo.email,
  //       college_id: userShortListedColleges.college_id,
  //       college_name: userShortListedColleges.college_name,
  //     };
  //     const response = await dispatch(
  //       saveUserShortlist({
  //         url: constants.apiEndPoint.USER_SORTLIST_SAVE_UPDATE,
  //         method:
  //           userShortListedColleges.college_id.split(',').length < 1
  //             ? constants.apiMethod.POST
  //             : constants.apiMethod.PUT,
  //         header: constants.apiHeader.HEADER,
  //         payload: payload,
  //       })
  //     );
  //     if (response?.payload.status === constants.apiResponseStatus.SUCCESS) {
  //       fetchSortlist();
  //     } else {
  //        dispatch(showNotification({
  //           isOpen: true,
  //           type: 'error',
  //           message: 'Something went wrong',
  //       }))
  //     }
  //   } catch (err) {
  //     dispatch(showNotification({
  //         isOpen: true,
  //         type: 'error',
  //         message: 'Something went wrong',
  //     }))
  //   }
  // };
  const removeShortlist = async (college) => {
    try{
      const collageID = userShortListedColleges?.college_id.split(',').filter((id)=>id !== college.college_id)
      const collegeName = userShortListedColleges?.college_name.split(',').filter((name)=>name !== college.college_name)
      const remainingCollegeID = collageID.join(',')
      const remainingCollegeName = collegeName.join(',')
      const payload = {
        email: userInfo.email,
        college_id: `${remainingCollegeID}`,
        college_name: `${remainingCollegeName}`,
      };
      const response = await dispatch(
        saveUserShortlist({
          url: constants.apiEndPoint.USER_SORTLIST_SAVE_UPDATE,
          method:
            userShortListedColleges.college_id
              ? constants.apiMethod.PUT
              : constants.apiMethod.POST,
          header: constants.apiHeader.HEADER,
          payload: payload,
        })
      );
      if (response?.payload.status === constants.apiResponseStatus.SUCCESS) {
        dispatch(showNotification({
            isOpen: true,
            type: 'sucess',
            message: 'Shortlisting Sucessfully',
        }))
        fetchSortlist();
      } else {
         dispatch(showNotification({
            isOpen: true,
            type: 'error',
            message: 'Shortlisting Unsucessful...',
        }))
      }
    }catch(err){
      dispatch(showNotification({
          isOpen: true,
          type: 'error',
          message: 'Something went wrong... try again later',
      }))
    }
  }
  
  useEffect(() => {
    fetchSortlist();
  }, []);
  // useEffect(() => {
  //   // if (userShortListedColleges.college_id !== '') {
  //   //   console.log(userShortListedColleges);
  //   //   uploadSortList();
  //   // }
  //   uploadSortList();
  // }, [userShortListedColleges.college_id]);
  
  return (
    <>
      <section className="profile-page">
        <div className="container">
          <div className="side-bar">
            <Sidebar />
            <div className="left-box">
              {/* <!--  --> */}
              <div className="tabset">
                {/* <!-- Tab 1 --> */}
                {/* <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked/> */}
                <label onClick={(e) => handleTabClick(e)}>Recommendations</label>
                {/* <!-- Tab 2 --> */}
                {/* <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/> */}
                <label onClick={(e) => handleTabClick(e)}>Shortlists</label>
                {/* <!-- Tab 3 --> */}
                {/* <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"/>
                <label for="tab3">Applications</label> */}

                <div className="tab-panels">
                  {(tabToShow?.recomendation && (
                    filteredColleges.length>0 ? 
                    recomendedColleges.map((college) => (
                      <section id="Recommendations" style={{ marginBottom: '10px' }}>
                        <div className="recomendation-box">
                          <div className="reco-img-name">
                            <div className="reco-img">
                              <img src={constants.assestAbsolutePath + college?.college_logo} alt="" />
                            </div>
                            <div className="reco-text">
                              <h4>{college?.college_name}</h4>
                              <p className="reco-p">{`${college.city}, ${college.state}`}</p>
                            </div>
                          </div>
                          <hr className="reco-hr" />
                          <div className="reco-text-button">
                            <div className="reco-text-i">
                              Why should you choose this college? Know more about the College.{' '}
                              {/* <Link to={`/colleges_details/${college.college_id}`} style={{ display: 'inline-flex' }}>
                                <span className="reco-span">
                                  Checkout USPs <i className="fa-solid fa-arrow-right"></i>
                                </span>
                              </Link> */}
                            </div>
                            <div className="reco-button">
                              {/* <div className="reco-btn">
                              <button className="reco-btn1">Schedule a Call</button>
                            </div> */}
                              <div className="button-box">
                                <div className="collages-btn from-down" onClick={() => moveToShortList(college)}>
                                  Move to Shortlist
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    ))
                    :
                    <section id="Shortlists">
                      <div className="not-show">
                        <div className="not-show-img">
                          <img src={constants.images.users.noDataImg} alt="no-data" />
                        </div>
                        <h5>Sorry! Seems like you have no recomended colleges</h5>
                      </div>
                    </section>
                    ))}
                  {(tabToShow?.recomendation) && (
                    <div className="row pagination-gap">
                      <CustomPagination
                        data={filteredColleges}
                        itemsPerPage={2}
                        currentItemsParent={(items)=>setRecomendedColleges(items)}
                      />
                    </div>
                  )}

                  {tabToShow?.shortlist && userShortListedColleges.college_id !== ''
                    ? recomendedColleges.map((college) => (
                        <section id="Recommendations" style={{ marginBottom: '10px' }}>
                          <div className="recomendation-box">
                            <div className="reco-img-name">
                              <div className="reco-img">
                                <img src={constants.assestAbsolutePath + college?.college_logo} alt="" />
                              </div>
                              <div className="reco-text">
                                <h4>{college?.college_name}</h4>
                                <p className="reco-p">{`${college.city}, ${college.state}`}</p>
                              </div>
                            </div>
                            <hr className="reco-hr" />
                            <div className="reco-text-button">
                              <div className="reco-text-i">
                                Why should you choose this college? Know more about the College.
                              </div>
                              <div className="reco-button">
                                <div className="button-box">
                                  <div className="collages-btn from-down" onClick={()=>removeShortlist(college)}>Remove from Shortlist</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      ))
                    : tabToShow?.shortlist &&
                      userShortListedColleges.college_id === '' && (
                        <section id="Shortlists">
                          <div className="not-show">
                            <div className="not-show-img">
                              <img src={constants.images.users.noDataImg} alt="no-data" />
                            </div>
                            <h5>Sorry! Seems like you have no Shortlisted colleges</h5>
                          </div>
                        </section>
                      )}

                  {(tabToShow?.shortlist && userShortListedColleges.college_id !== '') && (
                    <div className="row pagination-gap">
                      <CustomPagination
                        data={filteredCollegesById}
                        itemsPerPage={2}
                        currentItemsParent={(items)=>setRecomendedColleges(items)}
                      />
                    </div>
                  )}

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
  );
}
export default memo(Collages);
