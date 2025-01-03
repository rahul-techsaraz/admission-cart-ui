import React from 'react'
import collegeImage1 from '../../../images/clg-img1.jpg';
import collegeLogo from '../../../images/clg-logo3.png';
import collegeWishList from '../../../images/wishlist-checked-icon.svg';
import constants from '../../../utils/Constants/constants';
import { Link } from 'react-router-dom';


export default function CollegeCard({allCollegeData}) {
    // console.log(allCollegeData)
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
  return (
    <>
        {allCollegeData.map((college)=>(
            
            <div className="col-lg-6">
                <Link to={`/colleges_details/${college.college_id}`}>
                    <div className="clg-listing-box">
                        <div className="clg-listing-inner-upbx position-relative" style={{width:"403.5px", height:'225px'}}>
                            <img src={constants.imageAbsolutePath+college.college_thumbnail} alt="college Thumbnail" style={{width:"100%", height:"100%", objectFit:"contain"}}/>
                            <div>
                                <span className="featured-badge">Featured</span>
                                <span className="respond-grnte-badge">Respond Guaranteed</span>
                                <div className="clglisting-clglogo position-absolute" style={{width:"92px", height:'92px'}}>
                                    <img src={constants.imageAbsolutePath+college.college_logo} alt="college Logo" />
                                </div>
                                <div className="clg-whistlist-badge">
                                    <img src={collegeWishList} alt="collegeWishList" />
                                </div>
                                <div className="position-absolute clg-rating-badge d-flex flex-column">
                                    <span className="clg-rating">{college.ratings}</span>
                                    <span className="clg-reviews-count">{getRandomInt(1, 100)}+ Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div className="clg-listing-inner-btmbx">
                            <h4 className="clg-name">{college.college_name}</h4>
                            <p className="clg-location">{college.city+", "+college.state}</p>
                            <ul className="clg-affi-info d-flex">
                                <li>{'Approved by '+college.affiliate_by}</li>
                                <li>{'Type '+college.college_type}</li>
                                <li>NRF Ranking</li>
                            </ul>
                            <p className="clg-stream-name">{college.category_name}</p>
                            {/* <ul className="clg-admission-info-listitem d-flex flex-wrap">
                                <li className="">Duration:</li>
                                <li>4 Years</li>
                                <li className="">Total Fees:</li>
                                <li>Rs 8,74,950/-</li>
                                <li className="">Mint Rank:</li>
                                <li>1 out of 50</li>
                                <li className="">Placements:</li>
                                <li>Average - Rs. 8 L.P.A/- Highest - Rs. 95.8 L.P.A/-</li>
                            </ul> */}
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
                    </Link>
            </div>
            
        ))}
    </>
  )
}
