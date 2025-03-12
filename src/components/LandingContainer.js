import sliderBanner1 from '../images/slider/banner1.jpg';
import sliderBanner2 from '../images/slider/banner2.jpg';
import sliderBanner3 from '../images/slider/banner3.jpg';
import sliderBanner4 from '../images/slider/banner4.jpg';
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg';
import CustomSwiper from '../utils/Constants/custom-components/CustomSwiper';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggelIsLoginPopup } from '../features/commonSlice';

const tarndingBanner = [sliderBanner1, sliderBanner2, sliderBanner3, sliderBanner4]
const LandingContainer = () => {
    const dispatch = useDispatch()
    return (
        <>
            <section className="banner-section text-center">
                <div className="banner-container">
                    {/* <div className="banner-slider-wrapper position-relative">
                        <div className="swiper banner-slider"> */}
                            <div className="swiper-wrapper swiper-container position-relative">
                                <CustomSwiper navigationNext={'.banner-button-next'} navigationPrev={'.banner-button-prev'} autoplay={2000} noOfSlidesPerView={1} isBreakPoint={false}>
                                    {/* {tarndingBanner.map(bannerUrl => (
                                        <swiper-slide>
                                            <div className="swiper-slide banner1" style={{ backgroundImage: `url(${bannerUrl})` }}>
                                                <div className="banner-caption">
                                                    <h1 className="text-center">
                                                        <span className="d-block">From</span>
                                                        College Admissions to <strong className="d-block">Being Job Ready</strong>
                                                    </h1>
                                                    <div className="banner-btn-grp text-center mt-5 sm:mt-3">
                                                        <Link className="theme-btn black-btn">Get Started</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                    ))} */}
                                    <swiper-slide>
                                        <div className="swiper-slide banner1" style={{ backgroundImage: `url(${tarndingBanner[0]})` }}>
                                            <div className="banner-caption">
                                                <h1 className="text-center">
                                                    <span className="d-block">From</span>
                                                    College Admissions to <strong className="d-block">Being Job Ready</strong>
                                                </h1>
                                                <div className="banner-btn-grp text-center mt-5 mt-md-1 mt-lg-4">
                                                    {/* <Link className="theme-btn black-btn" onClick={()=>dispatch(toggelPopup({flag:true}))}>Get Started</Link> */}
                                                    <form className="banner1_searchbutton_button">
                                                        <input type="text" placeholder="Search.." name="search"/>
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div className="swiper-slide banner1" style={{ backgroundImage: `url(${tarndingBanner[1]})` }}>
                                            <div className="banner-caption" id='banner2-caption-right-position'>
                                                <h1 className="text-center">
                                                    <span className="d-block">From</span>
                                                    College Admissions to <strong className="d-block">Being Job Ready</strong>
                                                </h1>
                                                <div className="banner-btn-grp text-center mt-5 mt-md-1 mt-lg-4">
                                                    {/* <Link className="theme-btn black-btn" onClick={()=>dispatch(toggelPopup({flag:'true'}))}>Get Started</Link> */}
                                                    <form className="banner1_searchbutton_button">
                                                        <input type="text" placeholder="Search.." name="search"/>
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div className="swiper-slide banner1" style={{ backgroundImage: `url(${tarndingBanner[2]})` }}>
                                            <div className="banner-caption" id='banner3-caption-right-position'>
                                                <h1 className="text-center">
                                                    <span className="d-block">From</span>
                                                    College Admissions to <strong className="d-block">Being Job Ready</strong>
                                                </h1>
                                                <div className="banner-btn-grp text-center mt-5 mt-md-1 mt-lg-4">
                                                    {/* <Link className="theme-btn black-btn" onClick={()=>dispatch(toggelPopup({flag:'true'}))}>Get Started</Link> */}
                                                    <form className="banner1_searchbutton_button">
                                                        <input type="text" placeholder="Search.." name="search"/>
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div className="swiper-slide banner1" style={{ backgroundImage: `url(${tarndingBanner[3]})` }}>
                                            <div className="banner-caption" id='banner4-caption-right-position'>
                                                <h1 className="text-center">
                                                    <span className="d-block">From</span>
                                                    College Admissions to <strong className="d-block">Being Job Ready</strong>
                                                </h1>
                                                <div className="banner-btn-grp text-center mt-5 md-mt-2 mt-lg-4">
                                                    {/* <Link className="theme-btn black-btn" onClick={()=>dispatch(toggelPopup({flag:'true'}))}>Get Started</Link> */}
                                                    <form className="banner1_searchbutton_button">
                                                        <input type="text" placeholder="Search.." name="search"/>
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </CustomSwiper>
                                <div className="swiper-button-next banner-button-next">
                                    <img src={rightArrow} alt="" />
                                </div>
                                <div className="swiper-button-prev banner-button-prev">
                                    <img src={leftArrow} alt="" />
                                </div>
                            </div>
                        {/* </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}
export default LandingContainer;