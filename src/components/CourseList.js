import CustomSwiper from "../utils/Constants/custom-components/CustomSwiper";
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg';
import scollarship from '../images/scholarship-icon.svg'
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
            spaceBetween: 50,
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: 50,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
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
    //   useEffect(()=>{
    //     console.log(allCollegeData)
    //   },[allCollegeData])
    return(
        <>
        <section className="course-slider-section text-center section-padding">
            <div className="container">
                <div className="course-slider">
                    <div className="swiper-wrapper position-relative">
                        <CustomSwiper navigationNext='.courselist-button-next' navigationPrev='.courselist-button-prev' noOfSlidesPerView={4} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                            {allCollegeData.filter((data)=>data.ratings>=3).map((college)=>(
                                <swiper-slide>
                                <div className="swiper-slide position-relative">
                                    <div className="course-box text-start">
                                        <img src={constants.imageAbsolutePath + college.college_logo} className="scollarship-icon" alt="" />
                                        <p className="course-name">{college.college_name}</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <Link className="course-readmore-btn" to={`/colleges_details/${college.college_name}`}>Read More <img src={{rightArrow}} alt="" /></Link>
                                    </div>
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