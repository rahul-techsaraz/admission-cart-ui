import CustomSwiper from "../utils/Constants/custom-components/CustomSwiper";
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg';
import { swiperResponsive } from "../utils/Constants/swiperResponsive";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import constants from "../utils/Constants/constants";
import TrendingCollegesCard from "../utils/Constants/custom-components/trendingColleges/TrendingCollegesCard";
import CustomeCrousel from "../utils/Constants/custom-components/CustomeCrousel";

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
    
    return(
        <>
        <section className="course-slider-section text-center section-padding">
            <div className="container">
                <h3 className="course-slider_h3text">Tranding Courses</h3>
                <div className="row course-list">
                    <CustomeCrousel data={allCollegeData.filter((data)=>data.ratings>=3)} itemsPerView={4} CardComponent={TrendingCollegesCard} ishidden={true}/>
                    {/* {allCollegeData.filter((data)=>data.ratings>=3).map((college, index)=>(
                        <TrendingCollegesCard college={college} ishidden={true} index={index}/>
                    ))} */}
                </div>
            </div>
        </section>
        </>
    )
}
export default CourseList;