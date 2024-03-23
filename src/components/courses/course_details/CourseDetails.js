import React from 'react'
import { Link } from 'react-router-dom';
import finderIcon from '../../../images/finder-icon.svg';
import studentIcon from '../../../images/student-icon.svg';
import bookMarkIcon from '../../../images/bookmark-icon.svg';
import questionIcon from '../../../images/question-icon.svg';
import CourseDetailsBanner from './CourseDetailsBanner';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper';




export default function CourseDetails() {
  return (
      <>
          <CourseDetailsBanner />
          <section class="courses-details-section pt-50">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="bookmark-badge-leftbox d-flex gap-3">
                        <a href="#"><img src={questionIcon} alt="" />Save</a>
                        <a href="#"><img src={questionIcon} alt="" />Ask</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bookmark-badge-rightbox d-flex gap-3 justify-content-end">
                        <a href="#" class="yellow-bg"><img src={finderIcon} alt="" />Try Our College Finder</a>
                        <a href="#" class="green-bg"><img src={studentIcon} alt="" />Check Eligibility</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="course-details-filtertab d-flex gap-3 mt-4">
                        <a href="#" class="active">College Info</a>
                        <a href="#" class="">News</a>
                        <a href="#" class="">Popular colleges</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
          <section className="courses-details-section pt-50">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div id="course_details_leftBox" className="course-details-leftBox">
                        <div className="course-details-leftBox-inner text-center">
                            <div className="course-details-left-innerBox mb-5">
                                <h2 className="imgText-heading mb-4">About B.Tech - Biochemical Engineering</h2>
                                <p className="imgText-para">B.Tech in Biochemical Engineering is a programme that covers various subjects related to the chemical process, production and development of biochemical products. This branch of engineering comprises of various aspects of biology, technology and engineering in order to come up with groundbreaking research to help improve the quality of human lifestyle.</p>
                                <div className="text-center">
                                    <a href="#" className="theme-btn green-btn">Read More</a>
                                </div>
                            </div>
                        
                            <div className="course-details-left-innerBox mb-5">
                                <h2 className="imgText-heading mb-4">B. Tech - Biochemical Engineering Eligibility Criteria</h2>
                                <p className="imgText-para"><u><strong>The eligibility criteria for B. Tech Biochemical Engineering course can be checked below:</strong></u></p>
                                <ul className="course-details-criteria-list d-flex flex-wrap">
                                    <li>Educational Qualification</li>
                                    <li>The candidates must have passed className 12</li>
                                    <li>Minimum Qualifying Marks</li>
                                    <li>The candidates must have a minimum of 45% of marks in className 12</li>
                                </ul>
                                <div className="text-start mt-5">
                                    <a href="#" className="course-details-readmore-btn btn">Read More</a>
                                </div>
                            </div>

                            <div className="course-details-left-innerBox mb-5">
                                <h2 className="imgText-heading mb-4">B. Tech - Biochemical Engineering Syllabus</h2>
                                <p className="course-details-yearsyllabus text-start">First Year:</p>
                                <ul className="course-details-criteria-list d-flex flex-wrap">
                                    <li>Educational Qualification</li>
                                    <li>The candidates must have passed className 12</li>
                                    <li>Minimum Qualifying Marks</li>
                                    <li>The candidates must have a minimum of 45% of marks in className 12</li>
                                </ul>
                                <p className="course-details-yearsyllabus text-start">Second Year:</p>
                                <ul className="course-details-criteria-list d-flex flex-wrap">
                                    <li>Educational Qualification</li>
                                    <li>The candidates must have passed className 12</li>
                                    <li>Minimum Qualifying Marks</li>
                                    <li>The candidates must have a minimum of 45% of marks in className 12</li>
                                </ul>
                                <div className="text-start mt-5">
                                    <a href="#" className="course-details-readmore-btn btn">Read More</a>
                                </div>
                            </div>

                            <div className="course-details-left-innerBox mb-5">
                                <h2 className="imgText-heading mb-4">About B.Tech - Biochemical Engineering</h2>
                                <p className="imgText-para">Numerous jobs are available for students who pursue this branch of engineering. Biochemical Engineers are offered job roles in Oil Refineries, Water Treatment Plants, Pharmaceutical Companies, environmental agencies, research institutions, etc. Following are some of the popular profiles offered to Biochemical engineers:</p>
                                <ul className="course-details-criteria-list2 text-start">
                                    <li>Chemical Administrator</li>
                                    <li>Technical Consultant</li>
                                    <li>Project Engineer</li>
                                    <li>Biochemical Professor</li>
                                    <li>Process Engineer</li>
                                    <li>Research Analyst</li>
                                    <li>Safety Advisor</li>
                                    <li>Fuel Meter Calibration Technician</li>
                                    <li>Environmental Manager</li>
                                    <li>Quality Analyst</li>
                                    <li>Product Technician</li>
                                </ul>
                                <div className="text-start mt-5">
                                    <a href="#" className="course-details-readmore-btn btn">Read More</a>
                                </div>
                            </div>
                            
                        </div>

                        <div className="course-details-alterImgbox d-flex align-items-center">
                            <div className="course-details-alterImgbox-col1 green-bg">
                                <h2 className="text-white">Can’t find right <span>Guidance?</span></h2>
                                <p>No Problem! Speak to our experts safely from your home.</p>
                                <a href="#" className="theme-btn white-btn">Request a Call Back</a>
                            </div>
                            <div className="course-details-alterImgbox-col2 position-relative">
                                <img src="images/cd-img1.png" alt="" />
                            </div>
                        </div>
                    
                        <div className="course-details-alterbox">
                            <h2>Don't Miss Anything!</h2>
                            <p>Subscribe now and get latest updates on college news, exam and much more.</p>
                            <a href="#" className="theme-btn green-btn">Subscribe Now</a>
                        </div>
                    
                        <div className="course-details-alterbox greybg">
                            <h2>So, How do you <span>secure your job?</span></h2>
                            <p>Master employable skills under the mentorship of industry experts to become job ready.</p>
                            <a href="#" className="theme-btn yellow-btn">Job Assured</a>
                        </div>

                        <div className="course-details-alterbox">
                            <h2>Still have questions about<br /> 
                                B. Tech - Biochemical Engineering?</h2>
                            <p>Ask us and get personalized response free of cost.</p>
                            <a href="#" className="theme-btn green-btn">Ask A Question</a>
                        </div>

                        <div className="course-details-alterbox greybg">
                            <h2>Will you get admission in  <span className="d-block">B. Tech - Biochemical Engineering</span></h2>
                            <p>Goodbye doubts! Say hello to our experts</p>
                            <a href="#" className="theme-btn yellow-btn">Job Assured</a>
                        </div>

                        <div className="clg-slider-wrapper position-relative">
                            <div className="tick-heading d-flex align-items-center mb-4">
                                <span className="tick-heading-icon d-inline-flex">
                                    <img src="images/grey-tick.svg" alt="" />
                                </span>
                                <h2>Top Engineering colleges in India</h2>
                            </div>
                            <div className="swiper clg-slider">
                                <div className="swiper-wrapper">
                                    <CustomSwiper noOfSlidesPerView={1}>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="clg-slider-box position-relative">
                                                    <img src="images/clg-slider-logo.png" className="clg-slider-logo" alt="" />
                                                    <p className="slider-clg-name">Santi Niketan Polytechnic Durgapur</p>
                                                    <p className="slider-clg-location">Durgapur, West Bengal</p>
                                                    <a href="#" className="apply-btn position-absolute">Apply</a>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="clg-slider-box position-relative">
                                                    <img src="images/clg-slider-logo.png" className="clg-slider-logo" alt="" />
                                                    <p className="slider-clg-name">Santi Niketan Polytechnic Durgapur</p>
                                                    <p className="slider-clg-location">Durgapur, West Bengal</p>
                                                    <a href="#" className="apply-btn position-absolute">Apply</a>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="clg-slider-box position-relative">
                                                    <img src="images/clg-slider-logo.png" className="clg-slider-logo" alt="" />
                                                    <p className="slider-clg-name">Santi Niketan Polytechnic Durgapur</p>
                                                    <p className="slider-clg-location">Durgapur, West Bengal</p>
                                                    <a href="#" className="apply-btn position-absolute">Apply</a>
                                                </div>
                                            </div>        
                                        </swiper-slide>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="clg-slider-box position-relative">
                                                    <img src="images/clg-slider-logo.png" className="clg-slider-logo" alt="" />
                                                    <p className="slider-clg-name">Santi Niketan Polytechnic Durgapur</p>
                                                    <p className="slider-clg-location">Durgapur, West Bengal</p>
                                                    <a href="#" className="apply-btn position-absolute">Apply</a>
                                                </div>
                                            </div>        
                                        </swiper-slide>
                                    </CustomSwiper>
                                    
                                    
                                    
                                    


                                </div>
                            </div>

                            <div className="swiper-button-prev clg-button-prev">
                                <img src="images/arrow-left-icon.svg" alt="" />
                            </div>
                            <div className="swiper-button-next clg-button-next">
                                <img src="images/arrow-right-icon.svg" alt="" />
                            </div>
                            
            
                        </div>

                        <div className="clg-slider-wrapper position-relative">
                            <div className="tick-heading d-flex align-items-center mb-4">
                                <span className="tick-heading-icon d-inline-flex">
                                    <img src="images/grey-tick.svg" alt="" />
                                </span>
                                <h2>Top Engineering colleges in West Bengal</h2>
                            </div>
                            <div className="swiper clg-slider">
                                <div className="swiper-wrapper">
                                    <CustomSwiper noOfSlidesPerView={1}>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="clg-slider-box position-relative">
                                                    <img src="images/clg-slider-logo.png" className="clg-slider-logo" alt="" />
                                                    <p className="slider-clg-name">Santi Niketan Polytechnic Durgapur</p>
                                                    <p className="slider-clg-location">Durgapur, West Bengal</p>
                                                    <a href="#" className="apply-btn position-absolute">Apply</a>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="clg-slider-box position-relative">
                                                    <img src="images/clg-slider-logo.png" className="clg-slider-logo" alt="" />
                                                    <p className="slider-clg-name">Santi Niketan Polytechnic Durgapur</p>
                                                    <p className="slider-clg-location">Durgapur, West Bengal</p>
                                                    <a href="#" className="apply-btn position-absolute">Apply</a>
                                                </div>
                                            </div>        
                                        </swiper-slide>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="clg-slider-box position-relative">
                                                    <img src="images/clg-slider-logo.png" className="clg-slider-logo" alt="" />
                                                    <p className="slider-clg-name">Santi Niketan Polytechnic Durgapur</p>
                                                    <p className="slider-clg-location">Durgapur, West Bengal</p>
                                                    <a href="#" className="apply-btn position-absolute">Apply</a>
                                                </div>
                                            </div>        
                                        </swiper-slide>
                                        <swiper-slide>
                                            <div className="swiper-slide">
                                                <div className="clg-slider-box position-relative">
                                                    <img src="images/clg-slider-logo.png" className="clg-slider-logo" alt="" />
                                                    <p className="slider-clg-name">Santi Niketan Polytechnic Durgapur</p>
                                                    <p className="slider-clg-location">Durgapur, West Bengal</p>
                                                    <a href="#" className="apply-btn position-absolute">Apply</a>
                                                </div>
                                            </div>        
                                        </swiper-slide>
                                    </CustomSwiper>
                                    
                                    
                                    
                                    


                                </div>
                            </div>

                            <div className="swiper-button-prev clg-button-prev">
                                <img src="images/arrow-left-icon.svg" alt="" />
                            </div>
                            <div className="swiper-button-next clg-button-next">
                                <img src="images/arrow-right-icon.svg" alt="" />
                            </div>

                        </div>
                    
                    </div>
                </div>
                <div className="col-md-4">
                    <aside id="courses_details_rightcol" className="courses-details-rightcol">
                        <div className="courses-details-rightcol-grid">
                            <h2 className="courses-details-rightcol-grid-title">Popular Courses</h2>
                            <div className="courses-details-rightcol-gridcontent">
                                <ul className="courses-details-rightcol-listing">
                                    <li>Biotechnology Engineering</li>
                                    <li>B.Tech Information Technology</li>
                                    <li>Biotechnology Engineering</li>
                                    <li>Industrial Design</li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" className="courses-details-rightcol-viewall-btn">View All</a>


                        <div className="courses-details-rightcol-grid mt-5">
                            <h2 className="courses-details-rightcol-grid-title">Top B Tech Biochemical Engineering Colleges in India</h2>
                            <div className="courses-details-rightcol-gridcontent">
                                <ul className="courses-details-rightcol-listing">
                                    <li>Geetanjali Group of Colleges</li>
                                    <li>Indian Institute of Management Ahmedabad</li>
                                    <li>Biotechnology Engineering</li>
                                    <li>Industrial Design</li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" className="courses-details-rightcol-viewall-btn">View All</a>

                        <div className="courses-details-rightcol-grid mt-5">
                            <h2 className="courses-details-rightcol-grid-title">Related News</h2>
                            <div className="courses-details-rightcol-gridcontent">
                                <div className="d-inline-flex gap-2 my-3">
                                    <a href="#" className="latest-news-badge">Latest</a>
                                    <a href="#" className="popular-news-badge">Popular</a>
                                </div>
                                <ul className="courses-details-rightcol-listing">
                                    <li className="d-flex">
                                        <div className="related-news-postimg">
                                            <img src="images/related-news-img.png" alt="" />
                                        </div>
                                        <div className="related-news-postinfo">
                                            <p className="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <a href="#">Read More</a> </p>
                                            <p className="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="related-news-postimg">
                                            <img src="images/related-news-img.png" alt="" />
                                        </div>
                                        <div className="related-news-postinfo">
                                            <p className="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <a href="#">Read More</a> </p>
                                            <p className="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="related-news-postimg">
                                            <img src="images/related-news-img.png" alt="" />
                                        </div>
                                        <div className="related-news-postinfo">
                                            <p className="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <a href="#">Read More</a> </p>
                                            <p className="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <a href="#" className="courses-details-rightcol-viewall-btn">View All</a>


                        <div className="courses-details-rightcol-grid mt-5">
                            <h2 className="courses-details-rightcol-grid-title">Popular Full Forms</h2>
                            <div className="courses-details-rightcol-gridcontent">
                                <ul className="courses-details-rightcol-listing">
                                    <li>SSC CGL Full Form</li>
                                    <li>CTET Full Form</li>
                                    <li>NEET Full Form</li>
                                    <li>CAT Full Form</li>
                                    <li>HSC Full Form</li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" className="courses-details-rightcol-viewall-btn">View All</a>



                    </aside>
                </div>
            </div>
        </div>
    </section>


    <section className="faq-section position-relative pt-50 pb-50">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="faq-heading text-center">Frequently Asked Questions</h2>
                    <div className="accordion faq-accordion-wrapper " id="faqAccordionRobots">
                        <div className="accordion-item">
                          <h2 id="regularHeadingFirst" className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFirst" aria-expanded="true" aria-controls="regularCollapseFirst">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
                            </button>
                          </h2>
                          <div id="regularCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="regularHeadingFirst" data-bs-parent="#faqAccordionRobots">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                          </div>
                        </div>
                      
                        <div className="accordion-item">
                            <h2 id="regularHeadingSecond" className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseSecond" aria-expanded="false" aria-controls="regularCollapseSecond">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
                              </button>
                            </h2>
                            <div id="regularCollapseSecond" className="accordion-collapse collapse" aria-labelledby="regularHeadingSecond" data-bs-parent="#faqAccordionRobots">
                              <div className="accordion-body">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 id="regularHeadingThird" className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseThird" aria-expanded="false" aria-controls="regularCollapseFirst">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
                              </button>
                            </h2>
                            <div id="regularCollapseThird" className="accordion-collapse collapse" aria-labelledby="regularHeadingThird" data-bs-parent="#faqAccordionRobots">
                              <div className="accordion-body">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 id="regularHeadingFourth" className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFourth" aria-expanded="false" aria-controls="regularCollapseFourth">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
                              </button>
                            </h2>
                            <div id="regularCollapseFourth" className="accordion-collapse collapse" aria-labelledby="regularHeadingFourth" data-bs-parent="#faqAccordionRobots">
                              <div className="accordion-body">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>
                            </div>
                          </div>

                          <a href="#" className="theme-btn black-btn mt-5">Request for a Callback</a>
                      
                      </div>
                </div>
            </div>
        </div>
    </section>


   


    

      </>
  )
}
