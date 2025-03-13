import React, { useState } from 'react'
import CollegeBanner from './CollegeBanner'
import collegeImage1 from '../../images/clg-img1.jpg';
import collegeLogo from '../../images/clg-logo3.png';
import collegeWishList from '../../images/wishlist-checked-icon.svg';
import { useSelector } from 'react-redux';
import CollegeCard from './college_details/CollegeCard';
import CustomPagination from '../../utils/Constants/custom-components/CustomPagination';
import CustomFaq from './CustomFaq';
export default function CollegeListing() {
    const [collegeData, setCollegeData] = useState([])
    const {allCollegeData} = useSelector(state=>state.common)
  return (
      <>
          <CollegeBanner />
          <section className="course-listing-section section-padding">
        <div className="container">
            <div className="row">
                {/* <div className="col-md-5 col-lg-3">
                    <aside className="filter-col">
                        <div className="accordion" id="degree_accordion">
                            <div className="accordion-item border-0">
                              <h2 id="degreeHeadingFirst" className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#degreeCollapseFirst" aria-expanded="true" aria-controls="degreeCollapseFirst">
                                    Degree
                                </button>
                              </h2>
                              <div id="degreeCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="degreeHeadingFirst" data-bs-parent="#degree_accordion">
                                <div className="accordion-body p-0">
                                    <div className="degree-filter">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control stream-search-field search-field mb-4" placeholder="Search" />
                                            </div>
                                           <div className="form-group">
                                             <input type="checkbox" id="degree-filter1" />
                                             <label for="degree-filter1">B. Tech(Bachelor of Technology) <span>(4120)</span></label>
                                           </div>
                                           <div className="form-group">
                                              <input type="checkbox" id="degree-filter2" />
                                              <label for="degree-filter2">B. Tech(Bachelor of Technology) <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="degree-filter3" />
                                              <label for="degree-filter3">B. Tech(Bachelor of Technology) <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="degree-filter4" />
                                              <label for="degree-filter4">B. Tech(Bachelor of Technology) <span>(4120)</span></label>
                                            </div>
                
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div className="accordion" id="state_accordion">
                            <div className="accordion-item border-0">
                              <h2 id="stateHeadingFirst" className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#stateCollapseFirst" aria-expanded="true" aria-controls="stateCollapseFirst">
                                    State
                                </button>
                              </h2>
                              <div id="stateCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="stateHeadingFirst" data-bs-parent="#state_accordion">
                                <div className="accordion-body p-0">
                                    <div className="state-filter">
                                        <form>
                                           <div className="form-group">
                                             <input type="checkbox" id="state-filter1" />
                                             <label for="state-filter1">State 1 <span>(4120)</span></label>
                                           </div>
                                           <div className="form-group">
                                              <input type="checkbox" id="state-filter2" />
                                              <label for="state-filter2">State 2 <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="state-filter3" />
                                              <label for="state-filter3">State 3 <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="state-filter4" />
                                              <label for="state-filter4">State 4 <span>(4120)</span></label>
                                            </div>
                                            
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div className="accordion" id="city_accordion">
                            <div className="accordion-item border-0">
                              <h2 id="cityHeadingFirst" className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cityCollapseFirst" aria-expanded="true" aria-controls="cityCollapseFirst">
                                    City
                                </button>
                              </h2>
                              <div id="cityCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="cityHeadingFirst" data-bs-parent="#city_accordion">
                                <div className="accordion-body p-0">
                                    <div className="city-filter">
                                        <form>
                                           <div className="form-group">
                                             <input type="checkbox" id="city-filter1" />
                                             <label for="city-filter1">State 1 <span>(4120)</span></label>
                                           </div>
                                           <div className="form-group">
                                              <input type="checkbox" id="city-filter2" />
                                              <label for="city-filter2">State 2 <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="city-filter3" />
                                              <label for="city-filter3">State 3 <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="city-filter4" />
                                              <label for="city-filter4">State 4 <span>(4120)</span></label>
                                            </div>
                                            
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div className="accordion" id="studymode_accordion">
                            <div className="accordion-item border-0">
                              <h2 id="studymodeHeadingFirst" className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#studymodeCollapseFirst" aria-expanded="true" aria-controls="studymodeCollapseFirst">
                                    Study Mode
                                </button>
                              </h2>
                              <div id="studymodeCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="studymodeHeadingFirst" data-bs-parent="#studymode_accordion">
                                <div className="accordion-body p-0">
                                    <div className="studymode-filter">
                                        <form>
                                           <div className="form-group">
                                             <input type="checkbox" id="studymode-filter1" />
                                             <label for="studymode-filter1">Study Mode 1 <span>(4120)</span></label>
                                           </div>
                                           <div className="form-group">
                                              <input type="checkbox" id="studymode-filter2" />
                                              <label for="studymode-filter2">Study Mode 2 <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="studymode-filter3" />
                                              <label for="studymode-filter3">Study Mode 3 <span>(4120)</span></label>
                                            </div>
                                            <div className="form-group">
                                              <input type="checkbox" id="studymode-filter4" />
                                              <label for="studymode-filter4">Study Mode 4 <span>(4120)</span></label>
                                            </div>
                                            
                                         </form>
                                     </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        
                     </aside>

                </div> */}
                <div className="col-12">
                    {/* <div className="row">
                        <div className="col-12">
                            <div className="mb-4">
                                <div className="applied-filter d-inline-flex align-items-center">
                                    <p className="filter-apply-txt m-0 me-3">Applied Filters</p>
                                    <span className="filter-applied-badge text-center">B.Tech. Bachelor of Technology</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    <div className="row">
                        <CollegeCard allCollegeData={collegeData}/>
                        {/* <div className="col-lg-6">
                            <div className="clg-listing-box">
                                <div className="clg-listing-inner-upbx position-relative">
                                    <img src={collegeImage1} alt="collegeImage1" />
                                    <div>
                                        <span className="featured-badge">Featured</span>
                                        <span className="respond-grnte-badge">Respond Guaranteed</span>
                                        <div className="clglisting-clglogo position-absolute">
                                            <img src={collegeLogo} alt="" />
                                        </div>
                                        <div className="clg-whistlist-badge">
                                            <img src={collegeWishList} alt="collegeWishList" />
                                        </div>
                                        <div className="position-absolute clg-rating-badge d-flex flex-column">
                                            <span className="clg-rating">4.5</span>
                                            <span className="clg-reviews-count">10 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clg-listing-inner-btmbx">
                                    <h4 className="clg-name">Indian Institute of Technology, Chennai</h4>
                                    <p className="clg-location">Chennai, Tamil Nadu</p>
                                    <ul className="clg-affi-info d-flex">
                                        <li>Approved by UGC</li>
                                        <li>Type Private</li>
                                        <li>NRF Ranking</li>
                                    </ul>
                                    <p className="clg-stream-name">Bachelor of Technology (B.Tech)</p>
                                    <ul className="clg-admission-info-listitem d-flex flex-wrap">
                                        <li className="">Duration:</li>
                                        <li>4 Years</li>
                                        <li className="">Total Fees:</li>
                                        <li>Rs 8,74,950/-</li>
                                        <li className="">Mint Rank:</li>
                                        <li>1 out of 50</li>
                                        <li className="">Placements:</li>
                                        <li>Average - Rs. 8 L.P.A/- Highest - Rs. 95.8 L.P.A/-</li>
                                    </ul>
                                    <div className="d-flex flex-wrap clg-others-infobadge gap-2">
                                        <span>Courses & Fees</span>
                                        <span>Reviews</span>
                                        <span>Eligibility</span>
                                        <span>Compare</span>
                                        <span>Gallery</span>
                                        <span>Contact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="clg-listing-box">
                                <div className="clg-listing-inner-upbx position-relative">
                                    <img src={collegeImage1} alt="" />
                                    <div>
                                        <span className="featured-badge">Featured</span>
                                        <span className="respond-grnte-badge">Respond Guaranteed</span>
                                        <div className="clglisting-clglogo position-absolute">
                                            <img src={collegeLogo} alt="" />
                                        </div>
                                        <div className="clg-whistlist-badge">
                                            <img src={collegeWishList} alt="" />
                                        </div>
                                        <div className="position-absolute clg-rating-badge d-flex flex-column">
                                            <span className="clg-rating">4.5</span>
                                            <span className="clg-reviews-count">10 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clg-listing-inner-btmbx">
                                    <h4 className="clg-name">Indian Institute of Technology, Chennai</h4>
                                    <p className="clg-location">Chennai, Tamil Nadu</p>
                                    <ul className="clg-affi-info d-flex">
                                        <li>Approved by UGC</li>
                                        <li>Type Private</li>
                                        <li>NRF Ranking</li>
                                    </ul>
                                    <p className="clg-stream-name">Bachelor of Technology (B.Tech)</p>
                                    <ul className="clg-admission-info-listitem d-flex flex-wrap">
                                        <li className="">Duration:</li>
                                        <li>4 Years</li>
                                        <li className="">Total Fees:</li>
                                        <li>Rs 8,74,950/-</li>
                                        <li className="">Mint Rank:</li>
                                        <li>1 out of 50</li>
                                        <li className="">Placements:</li>
                                        <li>Average - Rs. 8 L.P.A/- Highest - Rs. 95.8 L.P.A/-</li>
                                    </ul>
                                    <div className="d-flex flex-wrap clg-others-infobadge gap-2">
                                        <span>Courses & Fees</span>
                                        <span>Reviews</span>
                                        <span>Eligibility</span>
                                        <span>Compare</span>
                                        <span>Gallery</span>
                                        <span>Contact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="clg-listing-box">
                                <div className="clg-listing-inner-upbx position-relative">
                                    <img src={collegeImage1} alt="" />
                                    <div>
                                        <span className="featured-badge">Featured</span>
                                        <span className="respond-grnte-badge">Respond Guaranteed</span>
                                        <div className="clglisting-clglogo position-absolute">
                                            <img src={collegeLogo} alt="" />
                                        </div>
                                        <div className="clg-whistlist-badge">
                                            <img src={collegeWishList} alt="" />
                                        </div>
                                        <div className="position-absolute clg-rating-badge d-flex flex-column">
                                            <span className="clg-rating">4.5</span>
                                            <span className="clg-reviews-count">10 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clg-listing-inner-btmbx">
                                    <h4 className="clg-name">Indian Institute of Technology, Chennai</h4>
                                    <p className="clg-location">Chennai, Tamil Nadu</p>
                                    <ul className="clg-affi-info d-flex">
                                        <li>Approved by UGC</li>
                                        <li>Type Private</li>
                                        <li>NRF Ranking</li>
                                    </ul>
                                    <p className="clg-stream-name">Bachelor of Technology (B.Tech)</p>
                                    <ul className="clg-admission-info-listitem d-flex flex-wrap">
                                        <li className="">Duration:</li>
                                        <li>4 Years</li>
                                        <li className="">Total Fees:</li>
                                        <li>Rs 8,74,950/-</li>
                                        <li className="">Mint Rank:</li>
                                        <li>1 out of 50</li>
                                        <li className="">Placements:</li>
                                        <li>Average - Rs. 8 L.P.A/- Highest - Rs. 95.8 L.P.A/-</li>
                                    </ul>
                                    <div className="d-flex flex-wrap clg-others-infobadge gap-2">
                                        <span>Courses & Fees</span>
                                        <span>Reviews</span>
                                        <span>Eligibility</span>
                                        <span>Compare</span>
                                        <span>Gallery</span>
                                        <span>Contact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="clg-listing-box">
                                <div className="clg-listing-inner-upbx position-relative">
                                    <img src={collegeImage1} alt="" />
                                    <div>
                                        <span className="featured-badge">Featured</span>
                                        <span className="respond-grnte-badge">Respond Guaranteed</span>
                                        <div className="clglisting-clglogo position-absolute">
                                            <img src={collegeLogo} alt="" />
                                        </div>
                                        <div className="clg-whistlist-badge">
                                            <img src={collegeWishList} alt="" />
                                        </div>
                                        <div className="position-absolute clg-rating-badge d-flex flex-column">
                                            <span className="clg-rating">4.5</span>
                                            <span className="clg-reviews-count">10 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clg-listing-inner-btmbx">
                                    <h4 className="clg-name">Indian Institute of Technology, Chennai</h4>
                                    <p className="clg-location">Chennai, Tamil Nadu</p>
                                    <ul className="clg-affi-info d-flex">
                                        <li>Approved by UGC</li>
                                        <li>Type Private</li>
                                        <li>NRF Ranking</li>
                                    </ul>
                                    <p className="clg-stream-name">Bachelor of Technology (B.Tech)</p>
                                    <ul className="clg-admission-info-listitem d-flex flex-wrap">
                                        <li className="">Duration:</li>
                                        <li>4 Years</li>
                                        <li className="">Total Fees:</li>
                                        <li>Rs 8,74,950/-</li>
                                        <li className="">Mint Rank:</li>
                                        <li>1 out of 50</li>
                                        <li className="">Placements:</li>
                                        <li>Average - Rs. 8 L.P.A/- Highest - Rs. 95.8 L.P.A/-</li>
                                    </ul>
                                    <div className="d-flex flex-wrap clg-others-infobadge gap-2">
                                        <span>Courses & Fees</span>
                                        <span>Reviews</span>
                                        <span>Eligibility</span>
                                        <span>Compare</span>
                                        <span>Gallery</span>
                                        <span>Contact</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div className='row pagination-gap'>
                        <CustomPagination data={allCollegeData} itemsPerPage={8} currentItemsParent={setCollegeData}/>
                    </div>
                </div>
                
            </div>
        </div>
          </section>
          <CustomFaq />
      </>
  )
}
