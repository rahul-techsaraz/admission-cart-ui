import CustomSwiper from "../utils/Constants/custom-components/CustomSwiper";
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg';
import { swiperResponsive } from "../utils/Constants/swiperResponsive";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import constants from "../utils/Constants/constants";

const CourseList = () => {
    const {allCollegeData} = useSelector(state=>state.common)
    console.log(allCollegeData)
    const responsive = {
        1400:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        640:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        460:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
      };
    const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }
    
    return(
        <>
        <section className="course-slider-section text-center section-padding">
            <div className="container">
                <div className="course-slider">
                    <div className="swiper-wrapper position-relative">
                        <CustomSwiper navigationNext='.courselist-button-next' navigationPrev='.courselist-button-prev' noOfSlidesPerView={4} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                            {allCollegeData.filter((data)=>data.ratings>=3).map((college)=>(
                                <swiper-slide>
                                {/* <div className="swiper-slide position-relative">
                                    <div className="course-box text-start">
                                        <img src={constants.imageAbsolutePath+college.college_logo} className="scollarship-icon" alt="" />
                                        <p className="course-name">{college.college_name}</p>
                                        <p className="course-numbering">{college.category_name}</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <Link className="course-readmore-btn" to={`/colleges_details/${college.college_id}`}>Read More <img src={{rightArrow}} alt="" /></Link>
                                    </div>
                                </div> */}
                                <div className="col-12">
                                    <Link to={`/colleges_details/${college.college_id}`}>
                                        <div className="clg-listing-box">
                                            <div className="clg-listing-inner-upbx position-relative" style={{width:"403.5px", height:'225px'}}>
                                                {/* <img src={constants.imageAbsolutePath+college.college_thumbnail} alt="college Thumbnail" style={{width:"100%", height:"100%", objectFit:"contain"}}/> */}
                                                <div>
                                                    {/* <span className="featured-badge">Featured</span>
                                                    <span className="respond-grnte-badge">Respond Guaranteed</span> */}
                                                    <div className="clglisting-clglogo position-absolute" style={{width:"92px", height:'92px'}}>
                                                        <img src={constants.imageAbsolutePath+college.college_logo} alt="college Logo" />
                                                    </div>
                                                    {/* <div className="clg-whistlist-badge">
                                                        <img src={collegeWishList} alt="collegeWishList" />
                                                    </div> */}
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
                                                {/* <div className="d-flex flex-wrap clg-others-infobadge gap-2">
                                                    <span>Courses & Fees</span>
                                                    <span>Reviews</span>
                                                    <span>Eligibility</span>
                                                    <span>Compare</span>
                                                    <span>Gallery</span>
                                                    <span>Contact</span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </swiper-slide>
                            ))}
                        </CustomSwiper>
                        <div class="swiper-button-prev courselist-button-prev">
                            <img src={leftArrow} alt="" />
                        </div>
                        <div class="swiper-button-next courselist-button-next">
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}
export default CourseList;