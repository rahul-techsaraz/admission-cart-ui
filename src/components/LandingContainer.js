import sliderBanner1 from '../images/slider/banner1.jpg';
import sliderBanner2 from '../images/slider/banner2.jpg';
import sliderBanner3 from '../images/slider/banner3.jpg';
import sliderBanner4 from '../images/slider/banner4.jpg';
// import rightArrow from '../images/arrow-right-icon.svg';
// import leftArrow from '../images/arrow-left-icon.svg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CustomSwiper from '../utils/Constants/custom-components/CustomSwiper';
// import {register} from "swiper/element/bundle"
// register();
const tarndingBanner = [sliderBanner1,sliderBanner2,sliderBanner3,sliderBanner4]
const LandingContainer = () => {
    return(
        <>
        <section className="banner-section text-center mb-5">
        <div className="banner-container">
            <div className="banner-slider-wrapper position-relative">
                <div  className="swiper banner-slider">
                    <div className="swiper-wrapper swiper-container">
                    {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {tarndingBanner.map(bannerUrl => (
                             <SwiperSlide key={bannerUrl}>
                             <div className="swiper-slide banner1" style={{backgroundImage: `url(${bannerUrl})`}}>
                                     <div className="banner-caption">
                                         <h1 className="text-center">
                                             <span className="d-block">From</span>
                                             College Admissions to <strong className="d-block">Being Job Ready</strong>
                                         </h1>
                                         <div className="banner-btn-grp text-center ps-md-3 mt-5">
                                             <a href="#" className="theme-btn black-btn me-4">Get Started</a>
                                         </div>
                                     </div>
                                 </div>
                             </SwiperSlide>
                        ))}
                        </Swiper> */}
                        <CustomSwiper noOfSlidesPerView={1} isBreakPoint={false}>
                            {tarndingBanner.map(bannerUrl=>(
                                <swiper-slide>
                                    <div className="swiper-slide banner1" style={{backgroundImage: `url(${bannerUrl})`}}>
                                        <div className="banner-caption">
                                            <h1 className="text-center">
                                                <span className="d-block">From</span>
                                                College Admissions to <strong className="d-block">Being Job Ready</strong>
                                            </h1>
                                            <div className="banner-btn-grp text-center ps-md-3 mt-5">
                                                <a href="#" className="theme-btn black-btn me-4">Get Started</a>
                                            </div>
                                        </div>
                                    </div>    
                                </swiper-slide>
                            ))}
                        </CustomSwiper>
                    </div>
                </div>
                {/* <div className="swiper-button-next banner-button-next">
                    <img src={rightArrow} alt="" />
                </div>
                <div className="swiper-button-prev banner-button-prev">
                    <img src={leftArrow} alt="" />
                </div> */}
            </div>
        </div>
    </section>
        </>
    )
}
export default LandingContainer;