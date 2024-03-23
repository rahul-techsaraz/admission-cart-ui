import React from 'react'
import constants from '../utils/Constants/constants'
import { Link } from 'react-router-dom'
import CustomSwiper from '../utils/Constants/custom-components/CustomSwiper'

export default function PsychometricTest() {
  return (
    <>
        <section className="inner-pagebanner-section text-center mb-5 pt-50 pb-50">
        <div className="container">
            <h1>psychometric-test</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><Link>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">psychometric-test</li>
                </ol>
            </nav>
        </div>
    </section>

    <section className="imgText-grid-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="position-relative pe-md-5">
                        <img src={constants.images.PsychometricTest.PsychometricTestimg1} className="img-fluid about-img1" alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="imgText-heading">Confused about the best career fit for you? </h1>

                    <p className="imgText-para">Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to={"/quiz"} className="theme-btn black-btn">Get Started Now</Link>
                </div>
                
            </div>
        </div>
    </section>

    <section className="imgText-grid-section section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <h1 className="imgText-heading">What is  Our Career Compass Test?</h1>

                    <p className="imgText-para">Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
                <div className="col-md-7">
                    <div className="position-relative ps-md-5">
                        <img src={constants.images.PsychometricTest.PsychometricTestimg2} className="img-fluid about-img1" alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>



    <section className="timeline-section mb-5">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-10">
                    <ul>
                        <li>
                          <div className="content">
                            <h3>Discover your strengths with our Career Compass Assessment Test</h3>
                            <ol>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                            </ol>
                          </div>
                          <div className="time">
                            <img src={constants.images.PsychometricTest.timeLineImg1} alt=""/>
                          </div>
                        </li>
                        
                        <li>
                          <div className="content">
                            <h3>Create a Career Roadmap</h3>
                            <ol>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                            </ol>
                          </div>
                          <div className="time">
                              <img src={constants.images.PsychometricTest.timeLineImg2} alt=""/>
                          </div>
                        </li>
                        
                        <li>
                          <div className="content">
                            <h3>Personalized Counselling with our Certified Career Counselor</h3>
                            <ol>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                            </ol>
                          </div>
                          <div className="time">
                              <img src={constants.images.PsychometricTest.timeLineImg3} alt=""/>
                          </div>
                        </li>
                        
                        <li>
                          <div className="content">
                            <h3>Get access to our Digital Career Library & other valuable resources</h3>
                            <ol>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                              <li>Lorem ipsum dolor sit ame consectetur adipiscing elieiusmod tempor incididunt ut labore</li>
                            </ol>
                          </div>
                          <div className="time">
                              <img src={constants.images.PsychometricTest.timeLineImg4} alt=""/>
                          </div>
                        </li>
              
                        
                        <div style={{clear:"both"}}></div>
                      </ul>
                </div>
            </div>
        </div>
       
    </section>


    <section class="testimonial-slider-section section-padding pt-4 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="section-heading text-center">Results I have Helped Create</h1>
                    <p class="section-subheading text-center">Hear out what my clients say about me.</p>
                </div>
                <div class="col-12">
                    {/* <!-- Slider main container --> */}
                    <div class="testimonial-slider-wrapper position-relative mt-3">
                        <div class="swiper testimonial-slider">
                            {/* <!-- Additional required wrapper --> */}
                            <div class="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <CustomSwiper>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="testimonials-box">
                                                <div class="testi-content-box">
                                                    <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor in cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
                                                </div>
                                                <img src={constants.images.PsychometricTest.testiUserImg1} class="testi-user-img mx-auto d-block" alt="user img"/>
                                                <p class="testi-user-info text-center">Dolorsit Psumamet <span class="d-block">Founder & Ceo</span></p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="testimonials-box">
                                                <div class="testi-content-box">
                                                    <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor in cididunt ut labore et dolore magna aliqua. Ut</p>
                                                </div>
                                                <img src={constants.images.PsychometricTest.testiUserImg2} class="testi-user-img mx-auto d-block" alt="user img"/>
                                                <p class="testi-user-info text-center">Dolorsit Psumamet <span class="d-block">Founder & Ceo</span></p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="testimonials-box">
                                                <div class="testi-content-box">
                                                    <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor in cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                                <img src={constants.images.PsychometricTest.testiUserImg3} class="testi-user-img mx-auto d-block" alt="user img"/>
                                                <p class="testi-user-info text-center">Dolorsit Psumamet <span class="d-block">Founder & Ceo</span></p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="testimonials-box">
                                                <div class="testi-content-box">
                                                    <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor in cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
                                                </div>
                                                <img src={constants.images.PsychometricTest.testiUserImg1} class="testi-user-img mx-auto d-block" alt="user img"/>
                                                <p class="testi-user-info text-center">Dolorsit Psumamet <span class="d-block">Founder & Ceo</span></p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </CustomSwiper>
                                
                                
                                
                                
                               

                            </div>
                        </div>

                        {/* <!-- If we need pagination --> */}
                        <div class="swiper-pagination testimonial-pagination"></div>

                        {/* <!-- If we need navigation buttons --> */}
                        <div class="swiper-button-prev testimonials-button-prev"><img src={constants.images.PsychometricTest.arrowLeftIcon} alt=""/></div>
                        <div class="swiper-button-next testimonials-button-next"><img src={constants.images.PsychometricTest.arrowRightIcon} alt=""/></div>
                        
        
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="choice-place-section section-padding">
        <div className="choice-place-innersection d-flex">
            <div className="choice-place-col1 position-relative">
                <img src={constants.images.PsychometricTest.PsychometricTestimg3} alt=""/>
            </div>
            <div className="choice-place-col2">
               <h2>Start your Free Test</h2>
               <p>Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Culpa qui officia deserunt mollit anim id est laborum.</p>
               <Link className="theme-btn black-btn">Get Started</Link>
            </div>
        </div>
    </section>
    </>
  )
}
