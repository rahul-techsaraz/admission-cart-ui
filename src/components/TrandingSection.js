import CustomSwiper from "../utils/Constants/custom-components/CustomSwiper";
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg';
import scollarship from '../images/scholarship-icon.svg'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const TrandingSection  = () => {
    const {allCourseData} = useSelector(state=>state.common)
    // useEffect(()=>{
    //     console.log(allCourseData)
    // },[allCourseData])
    return(
        <>
         <section className="trending-course-section">
        <div className="container">
            <div className="trending-course-box position-relative">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <h2 className="text-white text-center text-lg-start mb-5 mb-lg-0 position-relative z-1">Trending Courses</h2>
                    </div>
                    
                    
                    <div className="col-12 col-md-9 col-lg-5 mx-auto ms-lg-auto">
                        <div className="trending-slider-wrapper position-relative">
                            <div className="swiper trending-course-slider bg-white">
                                <div className="swiper-wrapper">
                                    <CustomSwiper navigationNext={".trending-button-next"} navigationPrev={".trending-button-prev"} noOfSlidesPerView={1} isBreakPoint={false}>
                                        {allCourseData.map((course)=>(
                                            <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="course-box text-start">
                                                    <img src={scollarship} className="scollarship-icon" alt="" />
                                                    <p className="course-name mb-1">{course.course_name}<br /> Management</p>
                                                    <p className="course-numbering mb-2">01.</p>
                                                    <p className="course-para text-start p-0">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                                    <Link className="course-readmore-btn" to={`/courses_details/${course.course_name}`}>Read More <img src={rightArrow} alt="" /></Link>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                        ))}
                                    </CustomSwiper>   
                                </div>
                            </div>
                            <div className="swiper-button-prev trending-button-prev">
                                <img src={leftArrow} alt="" />
                            </div>
                            <div className="swiper-button-next trending-button-next">
                                <img src={rightArrow} alt="" />
                            </div>
                
                        </div>
                    </div>
                    
                                
                </div>
                
                
            </div>
        </div>
    </section>
        </>
    )
}
export default TrandingSection;