import CustomSwiper from "../utils/Constants/custom-components/CustomSwiper";

const TrandingSection  = () => {
    return(
        <>
         <section className="trending-course-section">
        <div className="container">
            <div className="trending-course-box position-relative">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <h2 className="text-white text-center text-lg-start mb-5 mb-lg-0 position-relative z-1">Trending Courses</h2>
                    </div>
                    
                                    <CustomSwiper noOfSlidesPerView={1} isBreakPoint={false}>
                                    <div className="col-12 col-md-9 col-lg-5 mx-auto ms-lg-auto">
                        <div className="trending-slider-wrapper position-relative">
                            <div className="swiper trending-course-slider bg-white">
                                <div className="swiper-wrapper">
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                            <div className="course-box text-start">
                                                <img src="images/scollarship-icon.svg" className="scollarship-icon" alt="" />
                                                <p className="course-name mb-1">MBA Media<br /> Management</p>
                                                <p className="course-numbering mb-2">01.</p>
                                                <p className="course-para text-start p-0">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                                <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                            </div>
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                            <div className="course-box text-start">
                                                <img src="images/scollarship-icon.svg" className="scollarship-icon" alt="" />
                                                <p className="course-name mb-2">MBA Media<br /> Management</p>
                                                <p className="course-numbering mb-1">02.</p>
                                                <p className="course-para text-start p-0">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor</p>
                                                <a href="#" className="course-readmore-btn">Read More <img src="images/arrow-right-icon.svg" alt="" /></a>
                                            </div>
                                            </div>
                                        </swiper-slide>
                                        </div>
                            </div>
                            {/* <div className="swiper-button-prev trending-button-prev"><img src="images/arrow-left-icon.svg" alt="" /></div>
                            <div className="swiper-button-next trending-button-next"><img src="images/arrow-right-icon.svg" alt="" /></div> */}
                
                        </div>
                    </div>
                                    </CustomSwiper>
                                
                </div>
                
                
            </div>
        </div>
    </section>
        </>
    )
}
export default TrandingSection;