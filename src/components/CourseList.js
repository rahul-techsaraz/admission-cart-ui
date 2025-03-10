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
                                <div className="col-12" id="box-height">
                                    <Link to={`/colleges_details/${college.college_id}`} className="box-style">
                                        <div className="clg-listing-box">

                                            

                                        <div className='course_card_main_box'>
                    <div className='course_card_1stimgbox'>
                        <img src={constants.imageAbsolutePath+college?.college_thumbnail} className='course_card_images_img' alt="College Thumbnail"/>
                        <div className='course_card_1stimgbox_text_logo_parents'>
                        <div className='course_card_1stimgbox_text_logo'>
                        <img className='course_card_1stimgbox_img_logo_logo_img' src={constants.imageAbsolutePath+college?.college_logo} alt="college Logo"/>
                        <div className='course_card_2ndtextbox_rating'>
                                                    <p className='course_card_2ndtextbox_rating_star_number'><i class="fa-solid fa-star"></i> {college?.ratings}/5</p>
                                                    <p className='course_card_2ndtextbox_reviews'>{getRandomInt(1, 300)}+ reviews</p>
                                                </div>
                        </div>
                        <div className='course_card_1stimgbox_img_logo'>
                           <div className='course_card_1stimgbox_img_logo_logo'>
                            {/* <img className='collage_card_1stimgbox_img_logo_logo_img' src={constants.imageAbsolutePath+college?.college_logo} alt="college Logo"/> */}
                            <div className='course_card_1stimgbox_img_logo_collages_name_address'>
                                <h2 className='course_card_1stimgbox_img_logo_collages_name'>{college?.college_name}</h2>
                                <p className='course_card_1stimgbox_img_logo_collages_address'>{college?.city+", "+college?.state}</p>
                            </div>
                            </div> 
                        </div>

                        </div>
                    </div>

                    <div className='course_card_2ndtextbox'>
                                            <div className='course-name_rating_parents_box'>
                                                <div className='course_card_2ndtextbox_course-name'>
                                                    <h3 className='course_card_2ndtextbox_course-name_h3'>{college?.category_name}</h3>
                                                    <p className='course_card_2ndtextbox_course-name_p'><span className='course_card_2ndtextbox_course-name_p_span'>2.31 Lacs</span> First Year Fees</p>
                                                </div>
                                                {/* <div className='collage_card_2ndtextbox_rating'>
                                                    <p className='collage_card_2ndtextbox_rating_star_number'><i class="fa-solid fa-star"></i> {college?.ratings}/5</p>
                                                    <p className='collage_card_2ndtextbox_reviews'>{getRandomInt(1, 300)}+ reviews</p>
                                                </div> */}
                                            </div>
                                            
                                             <Link to={`/colleges_details/${college.college_id}`} className='course-name_courses_fees_parents_box2'>
                                                                    <div className='course-name_courses_fees_parents_box'>
                                                                        View All Courses and Fees
                                                                        <span className='course-name_courses_fees_parents_box_icon'>
                                                                        <i class="fa-solid fa-angle-right"></i>
                                                                        </span>
                                                                    </div>
                                                                    </Link>
                    
                    <div className='course-name_download_brochure_parents_box'>
                            Download Brochure
                            <span className='course-name_courses_fees_parents_box_icon'>
                            <i class="fa-solid fa-angle-right"></i>
                            </span>
                        </div>
                                        
                                            
                        </div>
                    
                </div>






                                            {/* <div className="clg-listing-inner-upbx position-relative" style={{width:"403.5px", height:'225px'}}> j code */}
                                                {/* <img src={constants.imageAbsolutePath+college.college_thumbnail} alt="college Thumbnail" style={{width:"100%", height:"100%", objectFit:"contain"}}/> j code */}
                                                {/* <div className="clg-img-reviews-box"> */}
                                                    {/* <span className="featured-badge">Featured</span>
                                                    <span className="respond-grnte-badge">Respond Guaranteed</span> j code */}

                                                    {/* <div className="clglisting-clglogo" style={{width:"92px", height:'92px'}}>
                                                        <img src={constants.imageAbsolutePath+college.college_logo} alt="college Logo" />
                                                    </div> */}

                                                    {/* <div className="clg-whistlist-badge">
                                                        <img src={collegeWishList} alt="collegeWishList" j code />
                                                    </div> */}
                                                    {/* <div className="clg-rating-badge d-flex flex-column">
                                                        <span className="clg-rating">{college.ratings}</span>
                                                        <span className="clg-reviews-count">{getRandomInt(1, 100)}+ Reviews</span>
                                                    </div>
                                                </div> */}
                                            {/* </div> j code */}
                                            {/* <div className="clg-listing-inner-btmbx" id="clg-listing-inner-btmbx-box-padding">
                                                <div className="clg-name-parents"><h4 className="clg-name">{college.college_name}</h4></div>
                                                <p className="clg-location"><i class="fa-solid fa-location-dot"></i> {college.city+", "+college.state}</p>
                                                <ul className="clg-affi-info">
                                                    <li><span className="clg-list-approved-text"><i class="fa-solid fa-person-circle-check"></i> Approved by :</span>{college.affiliate_by}</li>
                                                    <li><span className="clg-list-type-text"><i class="fa-solid fa-building-columns"></i> Type :</span>{college.college_type}</li> */}
                                                    {/* <li>NRF Ranking</li> */}
                                                {/* </ul>
                                                <p className="clg-stream-name">{college.category_name}</p> */}
                                                {/* <ul className="clg-admission-info-listitem d-flex flex-wrap">
                                                    <li className="">Duration:</li>
                                                    <li>4 Years</li>
                                                    <li className="">Total Fees:</li>
                                                    <li>Rs 8,74,950/-</li>
                                                    <li className="">Mint Rank:</li>
                                                    <li>1 out of 50</li>
                                                    <li className="">Placements:</li>
                                                    <li>Average - Rs. 8 L.P.A/- Highest - Rs. 95.8 L.P.A/-</li>
                                                </ul> j code */}
                                                {/* <div className="d-flex flex-wrap clg-others-infobadge gap-2">
                                                    <span>Courses & Fees</span>
                                                    <span>Reviews</span>
                                                    <span>Eligibility</span>
                                                    <span>Compare</span>
                                                    <span>Gallery</span>
                                                    <span>Contact</span>
                                                </div> j code */}
                                            {/* </div> */}

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