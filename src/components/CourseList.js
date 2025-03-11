import CustomSwiper from "../utils/Constants/custom-components/CustomSwiper";
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg';
import { swiperResponsive } from "../utils/Constants/swiperResponsive";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import constants from "../utils/Constants/constants";
import TrendingCollegesCard from "../utils/Constants/custom-components/trendingColleges/TrendingCollegesCard";

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
                <h3 className="course-slider_h3text">Tranding Courses</h3>
                <div className="course-slider">
                    <div className="swiper-wrapper position-relative">
                        <CustomSwiper navigationNext='.courselist-button-next' className='customswiperwraper' navigationPrev='.courselist-button-prev' noOfSlidesPerView={4} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                            {allCollegeData.filter((data)=>data.ratings>=3).map((college)=>(
                            <swiper-slide>
                                <TrendingCollegesCard college={college} />
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