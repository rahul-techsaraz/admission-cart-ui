import CustomSwiper from "../utils/Constants/custom-components/CustomSwiper";
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg';
import scollarship from '../images/scholarship-icon.svg'

const CourseList = () => {
    return(
        <>
        <section className="course-slider-section text-center section-padding">
            <div className="container">
                <div className="course-slider">
                    <div className="swiper-wrapper position-relative">
                        <CustomSwiper navigationNext={".courselist-button-next"} navigationPrev={".courselist-button-prev"} noOfSlidesPerView={5} isBreakPoint={true} centeredSlides={true}>
                            <swiper-slide>
                                <div className="swiper-slide position-relative">
                                    <div className="course-box text-start">
                                        <img src={scollarship} className="scollarship-icon" alt="" />
                                        <p className="course-name">MBA Media Management</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div className="swiper-slide">
                                    <div className="course-box text-start">
                                        <img src={scollarship} className="scollarship-icon" alt="" />
                                        <p className="course-name">MBA Media Management</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div className="swiper-slide">
                                    <div className="course-box text-start">
                                        <img src={scollarship} className="scollarship-icon" alt="" />
                                        <p className="course-name">MBA Media Management</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div className="swiper-slide">
                                    <div className="course-box text-start">
                                        <img src={scollarship} className="scollarship-icon" alt="" />
                                        <p className="course-name">MBA Media Management</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div className="swiper-slide">
                                    <div className="course-box text-start">
                                        <img src={scollarship} className="scollarship-icon" alt="" />
                                        <p className="course-name">MBA Media Management</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div className="swiper-slide">
                                    <div className="course-box text-start">
                                        <img src={scollarship} className="scollarship-icon" alt="" />
                                        <p className="course-name">MBA Media Management</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div className="swiper-slide">
                                    <div className="course-box text-start">
                                        <img src={scollarship} className="scollarship-icon" alt="" />
                                        <p className="course-name">MBA Media Management</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div className="swiper-slide">
                                    <div className="course-box text-start">
                                        <img src={scollarship} className="scollarship-icon" alt="" />
                                        <p className="course-name">MBA Media Management</p>
                                        <p className="course-numbering">1.</p>
                                        <p className="course-para">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                        <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            </swiper-slide>
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