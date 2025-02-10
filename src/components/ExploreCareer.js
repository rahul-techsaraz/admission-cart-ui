import leftArrow from '../images/arrow-left-icon.svg';
import rightArrow from '../images/arrow-right-icon.svg';
import CustomSwiper from '../utils/Constants/custom-components/CustomSwiper';
import exploreThumbImg from '../images/course/course-post-img1.jpg';
import scollarship from '../images/scholarship-icon.svg'
import { swiperResponsive } from '../utils/Constants/swiperResponsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import constants from "../utils/Constants/constants";

const ExploreCareer = () => {
    const{allExamData}= useSelector(state=>state.common)
    const responsive = {
        1400:{
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        640:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        460:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
    
    return(
        <>
        <section className="career-slider-section text-center section-padding pt-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="section-heading text-center">Explore Exams</h1>
                    <p className="section-subheading">Explore your preferred streams to learn about the relevant colleges, exams and more!</p>
                </div>
                <div className="col-12">
                    <div className="career-slider-wrapper position-relative">
                        <div className="swiper career-slider">
                            <div className="swiper-wrapper position-reltive">
                                <CustomSwiper navigationNext={".career-button-next"} navigationPrev={".career-button-prev"} noOfSlidesPerView={4} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                    {allExamData.map((exam)=>(
                                        <swiper-slide>
                                        {/* <div className="swiper-slide">
                                            <div className="career-box-flex-box">
                                                <div className="career-box text-start">
                                                    <img src={constants.imageAbsolutePath + college.college_thumbnail} className="explore-ThumbImg" alt="" />
                                                    <div className="career-boxInner">
                                                        <div className="d-flex justify-content-center career-upperbx">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" className="chat-icon">
                                                                <path d="M14 36V35.5H13.5H4.5C3.43913 35.5 2.42172 35.0786 1.67157 34.3284C0.921427 33.5783 0.5 32.5609 0.5 31.5V4.5C0.5 3.43913 0.921427 2.42172 1.67157 1.67157C2.42172 0.921427 3.43913 0.5 4.5 0.5H40.5C41.5609 0.5 42.5783 0.921427 43.3284 1.67157C44.0786 2.42172 44.5 3.43913 44.5 4.5V31.5C44.5 33.7214 42.7214 35.5 40.5 35.5H26.775H26.5675L26.421 35.6469L18.101 43.9894C17.7397 44.3305 17.3006 44.5 16.875 44.5H15.75C14.7886 44.5 14 43.7114 14 42.75V36ZM25.1371 32H40.5H41V31.5V4.5V4H40.5H4.5H4V4.5V31.5V32H4.5H17.5V38.43V39.6371L18.3536 38.7836L25.1371 32ZM11.9543 19.1253L14.4004 16.6617L18.7031 20.9852L19.058 21.3418L19.4124 20.9847L30.6001 9.70975L33.0457 12.1729L19.0574 26.2897L11.9543 19.1253Z" fill="#5BE4A8" stroke="#F3F3F3"/>
                                                            </svg>
                                                            <div className="ms-3 flex-shrink-1">
                                                                <p className="career-name">{college.college_name}</p>
                                                                <p className="clg-count">240 Colleges</p>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>Featured Colleges</li>
                                                            <li>Important Exams</li>
                                                            <li>Related Courses</li>
                                                            <li>Top cities</li>
                                                        </ul>
                                                        <Link className="career-readmore-btn text-center" to={`/colleges_details/${college.college_name}`}>Read More <img src={rightArrow} alt="" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="swiper-slide position-relative">
                                            <div className="course-box text-start course-box-heigh-set">
                                            <div className='course-box-img'><img src={scollarship} className="scollarship-icon" alt="" /></div>
                                                <div className='course-box-p-parent'><p className="course-name">{exam.exam_name}</p></div>
                                                <div className='course-box-p-parent2'><p className="course-numbering">{exam.category_name}</p></div>
                                                <div className='course-box-p-parent3'><p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p></div>
                                                <Link className="course-readmore-btn course-readmore-btn2" to={`/exam_details/${exam.exam_id}`}>Enquire Now <img src={{rightArrow}} alt="" /></Link>
                                            </div>
                                        </div>
                                        </swiper-slide>
                                    ))}
                                </CustomSwiper>
                            </div>
                            <div className="swiper-button-prev career-button-prev">
                                <img src={leftArrow} alt="" />
                            </div>
                            <div className="swiper-button-next career-button-next">
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
export default ExploreCareer;