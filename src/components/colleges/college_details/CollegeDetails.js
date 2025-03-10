import React, { useEffect, useState } from 'react'
import CollegeBannerSection from './CollegeBannerSection'
import MenucSection from './MenucSection';
import whatsIcon from '../../../images/whatsnew-cal-icon.svg';
import arrowLeftIcon from '../../../images/arrow-left-icon.svg';
import arrowRightIcon from '../../../images/arrow-right-icon.svg';
import greyTickIcon from '../../../images/grey-tick.svg';
import rankingIcon from '../../../images/ranking-stage-img.png';
import cdIcon from '../../../images/cd-img1.png';
import audienceIcon from '../../../images/audience-icon.svg';
import hostelIcon from '../../../images/hostel-icon.svg';
import canteenIcon from '../../../images/canteen-icon.svg';
import yellowCircleIcon from '../../../images/yellow-circle-calender1.png';
import alumniManIcon1 from '../../../images/alumni-man1.png';
import alumniManIcon2 from '../../../images/alumni-man2.png';
import studentFaculty from '../../../images/faculty-students-img.png';
import facultImage1 from '../../../images/faculty-img1.jpg';
import facultImage2 from '../../../images/faculty-img2.jpg';
import facultImage3 from '../../../images/faculty-img3.jpg';
import facultImage4 from '../../../images/faculty-img4.jpg';
import downloadIcon from '../../../images/download-icon.svg';
import starFIcon from '../../../images/star-f.svg';
import verifiedGreenIcon from '../../../images/verified-green-icon.svg';
import scollarshipIcon from '../../../images/scollarship-icon-white.svg';
import likeThumbIcon from '../../../images/like-thumb.svg';
import dislikeThumbIcon from '../../../images/dislike-thumb.svg';
import heartIcon from '../../../images/heart.png';
import heartIcon2X from '../../../images/heart@2x.png';
import filledStarIcon from '../../../images/filled_star.png';
import blankStarIcon from '../../../images/blank_star.png';
import blankStarIcon2X from '../../../images/blank_star@2x.png';
import filledStarIcon2X from '../../../images/filled_star@2x.png';
import iconOneImage from '../../../images/iconOne.png';
import iconOneImage2X from '../../../images/iconOne@2x.png';
import iconTwoImage from '../../../images/iconTwo.png';
import iconTwoImage2X from '../../../images/iconTwo@2x.png';
import iconThreeImage from '../../../images/iconThree.png';
import iconThreeImage2X from '../../../images/iconThree@2x.png';
import askQuesImage from '../../../images/ask-ques-img.png';
import logoSliderImage from '../../../images/clg-slider-logo.png';
import clgInfoPhoto1 from '../../../images/clg-info-photo1.jpg';
import clgInfoVideo1 from '../../../images/clg-info-video1.jpg';
import companyLogo1 from '../../../images/company-logo1.png';
import companyLogo2 from '../../../images/company-logo2.png';
import companyLogo3 from '../../../images/company-logo3.png';
import companyLogo4 from '../../../images/company-logo4.png';
import relatedNews from '../../../images/related-news-img.png';
import clgLogo3 from '../../../images/clg-logo3.png';
import avtar from '../../../images/profile-Avtar.jpg';
import sandclassNameIcon from '../../../images/sandglass-icon.svg';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper';
import { Link, useParams } from 'react-router-dom';
import { swiperResponsive } from '../../../utils/Constants/swiperResponsive';
import { useFetchCollegeById } from '../../hooks/useFetchCollegeById';
import { useDispatch, useSelector } from 'react-redux';
import constants from '../../../utils/Constants/constants';
import { toggelIsLoginPopup } from '../../../features/commonSlice';
import CustomCourseCard from '../../courses/course_details/CustomCourseCard';
import { CustomCollegeCard } from './CustomCollegeCard';






export default function CollegeDetails() {
   const [readmore, setReadmore] = useState(
      {
         overview: false,
         highlightDescription: false,
         highlightCourses: false,
         allCourses: false,
      })
   const {college_id} = useParams()
   console.log(college_id)
   const {fetchCollege} = useFetchCollegeById()
   const dispatch = useDispatch()
   const {collegeDetailsById,allCourseData, allCollegeData} = useSelector(state=>state.common)
   console.log(collegeDetailsById)
   
   const responsive = {
      1400:{
          slidesPerView: 3,
          spaceBetween: 50,
      },
      1024:{
          slidesPerView: 3,
          spaceBetween: 50,
      },
      768:{
          slidesPerView: 2,
          spaceBetween: 40,
      },
      576:{
         slidesPerView: 2,
         spaceBetween: 20,
     },
   }
   const responsive1 = {
      1400:{
         slidesPerView: 3,
         spaceBetween: 50,
      },
      1024:{
         slidesPerView: 3,
         spaceBetween: 50,
      },
      768:{
         slidesPerView: 2,
         spaceBetween: 40,
      },
      576:{
         slidesPerView: 2,
         spaceBetween: 20,
     },
   }
   const getCurrentYear = ()=>{
      const d = new Date();
      const year = d.getFullYear();
      return year
   }
   const dataToMap = (data)=>{
      if(readmore.highlightCourses){
         return data
      }else{
         return data.filter((_,i)=> i<4 )
      }
   }
   const getAllCourseDataById = ()=>{
      const ids = collegeDetailsById.courseOfferedDetails.map((v)=> v.course_id)
      const data = allCourseData.filter((v)=>ids.includes(v.course_id))
      console.log(data)
      return data
   }
   const getAllCollegesDataByCity = ()=>{
      const data = allCollegeData.filter((v)=>v.city === collegeDetailsById?.basicDetails?.city && v.college_name !== collegeDetailsById?.basicDetails?.college_name)
      return data
   }
   useEffect(()=>{
      getAllCollegesDataByCity()
      console.log(collegeDetailsById)
   },[collegeDetailsById])
   useEffect(()=>{
      fetchCollege(college_id)
   },[college_id])
   
  return (
      <>
          <CollegeBannerSection />
          {/* <MenucSection /> */}
          <section class="exam-details-section pt-50">
         <div class="container">
            <div class="row">
               <div class="col-12">
                  <div class="colg-examinfo-leftcol">
                     {/* <div class="whatsNew-box mb-5">
                        <div class="d-flex mb-4 ms-3">
                           <div class="whatsnew-cal-badge">
                              <img src={whatsIcon} alt="" />
                           </div>
                           <h1 class="whatsNew-heading ms-2">
                              <span>{collegeDetailsById?.basicDetails?.college_name}</span>
                              What’s New
                           </h1>
                        </div>
                        <div class="whatsNew-inner-box">
                           <p class="whatsNew-date">October 6, 2023 10:09 AM</p>
                           <p class="whatsNew-para">IIT Chennai University PhD applications 2024 are open and the last date to apply is Jan 17, 2024. Below are some of the other important IIM Ahmedabad latest updates:</p>
                           <ul class="whatsNew-list">
                              <li>The CAT 2023 exam will be held on Nov 26, 2023.</li>
                              <li>MBA-PGPX R2 applications are open and the last date to apply is Oct 30, 2023.</li>
                           </ul>
                           <Link class="whatsNew-readmore-btn mt-4 d-inline-block">Read More</Link>
                        </div>
                        <div class="whatsNew-slider-wrapper mt-4 mb-5">
                           <div class="swiper whatsNew-slider">
                              <div class="swiper-wrapper">
                                 <main className="slider-main-container position-relative">
                                    <CustomSwiper navigationNext={".whatsNew-button-next"} navigationPrev={".whatsNew-button-prev"} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                       <swiper-slide>
                                          <div class="swiper-slide">
                                             <div class="whatsNew-inner-box">
                                                <p class="whatsNew-date">October 6, 2023 10:09 AM</p>
                                                <p class="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link class="whatsNew-readmore-btn">Read More</Link></p>
                                             </div>
                                          </div>
                                       </swiper-slide>
                                       <swiper-slide>
                                          <div class="swiper-slide">
                                             <div class="whatsNew-inner-box">
                                                <p class="whatsNew-date">October 6, 2023 10:09 AM</p>
                                                <p class="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link class="whatsNew-readmore-btn">Read More</Link></p>
                                             </div>
                                          </div>      
                                       </swiper-slide>
                                       <swiper-slide>
                                          <div class="swiper-slide">
                                             <div class="whatsNew-inner-box">
                                                <p class="whatsNew-date">October 6, 2023 10:09 AM</p>
                                                <p class="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link class="whatsNew-readmore-btn">Read More</Link></p>
                                             </div>
                                          </div>      
                                       </swiper-slide>
                                       <swiper-slide>
                                          <div class="swiper-slide">
                                             <div class="whatsNew-inner-box">
                                                <p class="whatsNew-date">October 6, 2023 10:09 AM</p>
                                                <p class="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link class="whatsNew-readmore-btn">Read More</Link></p>
                                             </div>
                                          </div>      
                                       </swiper-slide>
                                       <swiper-slide>
                                          <div class="swiper-slide">
                                             <div class="whatsNew-inner-box">
                                                <p class="whatsNew-date">October 6, 2023 10:09 AM</p>
                                                <p class="whatsNew-para">IIT Chennai University celebrated World Pharmacist Day at the premises... <Link class="whatsNew-readmore-btn">Read More</Link></p>
                                             </div>
                                          </div>      
                                       </swiper-slide>
                                    </CustomSwiper>
                                    <div class="swiper-button-prev whatsNew-button-prev">
                                       <img src={arrowLeftIcon} alt="" />
                                    </div>
                                    <div class="swiper-button-next whatsNew-button-next ">
                                       <img src={arrowRightIcon} alt="" />
                                    </div>
                                 </main>
                              </div>
                           </div>
                        </div>
                     </div> */}
                     <div class="course-details-left-innerBox mb-5 text-center">
                        <h2 class="imgText-heading mb-4">{collegeDetailsById?.basicDetails?.college_name} Overview</h2>
                        <p class="imgText-para">{(collegeDetailsById?.descriptionDetails?.college_description.length > 300 && readmore.overview === false) ? collegeDetailsById?.descriptionDetails?.college_description.slice(0,300)+"..." : collegeDetailsById?.descriptionDetails?.college_description}</p>
                        {collegeDetailsById?.descriptionDetails?.college_description.length > 300 &&
                           <div class="text-center">
                              <Link class="theme-btn green-btn" onClick={()=>setReadmore({...readmore, overview:!readmore.overview })}>{!readmore.overview ? 'Read More' : 'Read Less'}</Link>
                           </div>   
                        }
                     </div>
                     <div class="course-details-left-innerBox mb-5 text-center">
                        <h2 class="imgText-heading mb-4">{`${collegeDetailsById?.basicDetails?.college_name} Highlights ${getCurrentYear()}`}</h2>
                        <p class="imgText-para">{(collegeDetailsById?.descriptionDetails?.college_highlights_description.length > 300 && readmore.highlightDescription === false) ? `${collegeDetailsById?.descriptionDetails?.college_highlights_description.slice(0,300)}...` : collegeDetailsById?.descriptionDetails?.college_highlights_description}</p>
                        {collegeDetailsById?.descriptionDetails?.college_highlights_description.length > 300 &&
                           <div class="text-center">
                              <Link class="theme-btn green-btn"onClick={()=>setReadmore({...readmore, highlightDescription:!readmore.highlightDescription})}>{!readmore.highlightDescription ? 'Read More' : 'Read Less'}</Link>
                           </div>   
                        }
                     </div>
                     <div class="tick-heading d-flex align-items-center mb-4">
                        <span class="tick-heading-icon d-inline-flex">
                        <img src={greyTickIcon} alt="" />
                        </span>
                        <h2>{`${collegeDetailsById?.basicDetails?.college_name} Top Courses & Fees`}</h2>
                     </div>
                     <div class="exam-details-hightlisghts-sec mt-5">
                        <div class="exam-details-hightlights-table">
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th>
                                       <p>Courses</p>
                                    </th>
                                    <th>
                                       <p>Annual Course Fees</p>
                                    </th>
                                    <th>
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {collegeDetailsById?.highlightsDetails.length>0 && dataToMap(collegeDetailsById?.highlightsDetails).map((college)=>(
                                    <tr>
                                       <td>{college?.course_name.split('-')[0].trim()} <span class="d-block">{college?.course_name.split('-')[1].trim()}</span></td>
                                       <td>₹ {college?.fees_annually}</td>
                                       <td class="position-relative"><Link class="management-clg-applybtn clginfo-applybtn" onClick={()=>dispatch(toggelIsLoginPopup({flag:true}))}>Apply Now</Link></td>
                                    </tr>   
                                 ))}
                              </tbody>
                           </table>
                        </div>
                        {collegeDetailsById?.highlightsDetails.length>4 && <div class="text-start mt-5">
                           <Link class="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, highlightCourses:!readmore.highlightCourses})}>{!readmore.highlightCourses ? 'Read More' : 'Read Less'}</Link>
                        </div>}
                     </div>
                     <div class="course-details-left-innerBox mb-5 text-center">
                        <h2 class="imgText-heading mb-4">{`${collegeDetailsById?.basicDetails?.college_name} Courses & Fees`}</h2>
                        <p class="imgText-para">{collegeDetailsById?.descriptionDetails?.college_course_description}</p>
                     </div>
                     <div class="exam-details-hightlisghts-sec mt-5">
                        <h5 class="mb-3"><strong>{`${collegeDetailsById?.basicDetails?.college_name} Fees and Course List`}</strong></h5>
                        <div class="exam-details-hightlights-table">
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th>
                                       <p>Courses</p>
                                    </th>
                                    <th>
                                       <p>Annual Course Fees</p>
                                    </th>
                                    <th>
                                       <p>Eligibility</p>
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {collegeDetailsById?.courseOfferedDetails.length > 0 && dataToMap(collegeDetailsById?.courseOfferedDetails).map((course)=>(
                                    <tr>
                                       <td>{course?.course_name}</td>
                                       <td>{`Rs ${course?.sub_course_fee}`}</td>
                                       <td>10+2: 45%</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                        {collegeDetailsById?.highlightsDetails.length > 4 && <div class="text-start mt-5">
                           <Link class="course-details-readmore-btn btn" onClick={()=>setReadmore({...readmore, allCourses:!readmore.allCourses})}>{!readmore.allCourses ? 'Read More' : 'Read Less'}</Link>
                        </div>}
                        
                        {/* <h5 class="mb-3 mt-5"><strong>IIT Chennai University Fees and Course List</strong></h5>
                        <div class="exam-details-hightlights-table">
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th>
                                       <p>Programme Name</p>
                                    </th>
                                    <th>
                                       <p>Specialisation</p>
                                    </th>
                                    <th>
                                       <p>In Association With</p>
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>B.E/B.Tech</td>
                                    <td>Rs 1,27,000</td>
                                    <td>10+2: 45%</td>
                                 </tr>
                                 <tr>
                                    <td>B.E/B.Tech</td>
                                    <td>Rs 1,27,000</td>
                                    <td>10+2: 45%</td>
                                 </tr>
                                 <tr>
                                    <td>B.E/B.Tech</td>
                                    <td>Rs 1,27,000</td>
                                    <td>10+2: 45%</td>
                                 </tr>
                                 <tr>
                                    <td>B.E/B.Tech</td>
                                    <td>Rs 1,27,000</td>
                                    <td>10+2: 45%</td>
                                 </tr>
                                 <tr>
                                    <td>B.E/B.Tech</td>
                                    <td>Rs 1,27,000</td>
                                    <td>10+2: 45%</td>
                                 </tr>
                                 <tr>
                                    <td>B.E/B.Tech</td>
                                    <td>Rs 1,27,000</td>
                                    <td>10+2: 45%</td>
                                 </tr>
                                 <tr>
                                    <td>B.E/B.Tech</td>
                                    <td>Rs 1,27,000</td>
                                    <td>10+2: 45%</td>
                                 </tr>
                                 <tr>
                                    <td>B.E/B.Tech</td>
                                    <td>Rs 1,27,000</td>
                                    <td>10+2: 45%</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div class="text-start mt-5">
                           <Link class="course-details-readmore-btn btn">Read More</Link>
                        </div> */}
                     </div>
                     <div class="tick-heading d-flex align-items-center mb-4">
                        <span class="tick-heading-icon d-inline-flex">
                        <img src={greyTickIcon} alt="" />
                        </span>
                        <h2>{`${collegeDetailsById?.basicDetails?.college_name} Admission ${getCurrentYear()}`}</h2>
                     </div>
                     <div class="clg-location-infograybx">
                        <p>{collegeDetailsById?.descriptionDetails?.college_admission_description}</p>
                        <div class="text-start mt-3">
                           <Link class="course-details-readmore-btn btn text-white">Read More</Link>
                        </div>
                     </div>
                     {/* <div class="course-details-left-innerBox my-5 text-center">
                        <h2 class="imgText-heading mb-4">IIT Chennai Ranking</h2>
                        <p class="imgText-para">IIT Chennai University ranking for 2023 is 145 out of 246 in India as per India Today’s B.Tech Survey. Moreover, the university has also been ranked 64th in the engineering category by the Times of India Ranking Survey 2023. Various other rankings obtained by the university are mentioned below..</p>
                        <div class="row align-items-center today-ranking-info">
                           <div class="col-md-4 text-end">
                              <h3>India Today:</h3>
                              <p>
                                 Category-B.Tech<br />
                                 Rank-145<br />
                                 Year-2023
                              </p>
                              <p>
                                 Category-B.Tech<br />
                                 Rank-145<br />
                                 Year-2023
                              </p>
                           </div>
                           <div class="col-md-4 text-center">
                              <img src={rankingIcon} class="p-3" alt="" />
                           </div>
                           <div class="col-md-4 text-start">
                              <h3>India Today:</h3>
                              <p>
                                 Category-B.Tech<br />
                                 Rank-145<br />
                                 Year-2023
                              </p>
                              <p>
                                 Category-B.Tech<br />
                                 Rank-145<br />
                                 Year-2023
                              </p>
                           </div>
                        </div>
                     </div> */}
                     {/* <div class="course-details-alterImgbox d-flex align-items-center">
                        <div class="course-details-alterImgbox-col1 green-bg">
                           <h2 class="text-white">Worried About College <span>Guidance?</span></h2>
                           <p>Convert your Upfront Fees in to Simple, Convenient & Affordable EMIs</p>
                           <Link class="theme-btn white-btn">Apply For Education Loan</Link>
                        </div>
                        <div class="course-details-alterImgbox-col2 position-relative">
                           <img src={cdIcon} alt="" />
                        </div>
                     </div>
                     <div class="clg-facilities-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
                        <h2 class="section-heading2 grey text-center mb-5">IIT Chennai Facilities</h2>
                        <div class="swiper clg-facilities-slider">
                           <div class="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={".clg-facilities-button-next"} navigationPrev={".clg-facilities-button-prev"} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Auditorium</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={hostelIcon} alt="" />
                                          <p>Boys Hostel</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={canteenIcon} alt="" />
                                          <p>Canteen</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Computer Lab</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Counselling</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Auditorium</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                              </CustomSwiper>
                              <div class="swiper-button-prev clg-facilities-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div class="swiper-button-next clg-facilities-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="course-details-alterImgbox d-flex align-items-center mt-5 pt-5">
                        <div class="course-details-alterImgbox-col2 position-relative">
                           <img src={cdIcon} alt="" />
                        </div>
                        <div class="course-details-alterImgbox-col1 green-bg">
                           <h2 class="text-white">Are you feeling lost and unsure about what <span>career path to take after completing 12th standard?</span></h2>
                           <p>Say goodbye to confusion and hello to a bright future!</p>
                           <Link class="theme-btn white-btn">Take the  free test now</Link>
                        </div>
                     </div>
                     <div class="py-5 mt-4">
                        <div class="row align-items-center">
                           <div class="col-md-5">
                              <h1 class="exam-center-calenderTxt1 text-center">Will you get 
                                 <span>Admission in IIT Chennai University?</span>
                              </h1>
                           </div>
                           <div class="col-md-2 text-center">
                              <img src={yellowCircleIcon} alt="" />
                           </div>
                           <div class="col-md-5 text-center">
                              <h1 class="exam-center-calenderTxt">Goodbye doubts! 
                                 Say hello to our experts
                              </h1>
                              <Link class="theme-btn black-btn">Ask A Question</Link>
                           </div>
                        </div>
                     </div>
                     <div class="successfull-almni-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
                        <h2 class="section-heading2 grey text-center mb-5">Successful Alumni</h2>
                        <div class="swiper successfull-almni-slider">
                           <div class="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={".clg-alumni-button-next"} navigationPrev={".clg-alumni-button-prev"} isBreakPoint={true} breakPoint={swiperResponsive(responsive1)}>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                              </CustomSwiper>
                              <div class="swiper-button-prev clg-alumni-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div class="swiper-button-next clg-alumni-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="tick-heading d-flex align-items-center mb-4">
                        <span class="tick-heading-icon d-inline-flex">
                        <img src={greyTickIcon} alt="" />
                        </span>
                        <h2>IIT Chennai University Faculty</h2>
                     </div>
                     <div class="mt-5">
                        <img src={studentFaculty} class="faculty-students-img d-block mx-auto" alt="" />
                     </div>
                     <div class="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                        <div class="swiper faculty-slider-slider">
                           <div class="swiper-wrapper">
                              <CustomSwiper navigationNext={'.clg-faculty-button-next'} navigationPrev={'.clg-faculty-button-prev'} noOfSlidesPerView={3} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="faculty-slider-box">
                                          <img src={facultImage1} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="faculty-slider-box">
                                          <img src={facultImage2} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="faculty-slider-box">
                                          <img src={facultImage3} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="faculty-slider-box">
                                          <img src={facultImage4} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="faculty-slider-box">
                                          <img src={facultImage1} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="faculty-slider-box">
                                          <img src={facultImage2} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                              </CustomSwiper>
                              <div class="swiper-button-prev clg-faculty-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div class="swiper-button-next clg-faculty-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>      
                           </div>
                        </div>
                        
                     </div>
                     <div class="row justify-content-center mb-5">
                        <div class="col-9">
                           <div class="download-content-box text-center">
                              <img src={downloadIcon} class="mb-4" alt="" />
                              <h2 class="mb-4"><span class="d-block">Get details on</span> Fee, Cut off marks, Admission Process for session 2023.</h2>
                              <div class="d-flex justify-content-center gap-3 align-items-center download-btn-sec">
                                 <p>Download brochure</p>
                                 <Link class="theme-btn black-btn">Ask A Question</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="clg-specific-review-section mb-5">
                        <div class="row mb-4">
                           <div class="col-12">
                              <div class="tick-heading d-flex align-items-center mb-4">
                                 <span class="tick-heading-icon d-inline-flex">
                                 <img src={greyTickIcon} alt="" />
                                 </span>
                                 <h2>IIT Chennai University Reviews</h2>
                              </div>
                           </div>
                        </div>
                        <div class="row justify-content-between">
                           <div class="col-md-4">
                              <div class="clg-verified-review-box text-center">
                                 <p><img src={starFIcon} alt="" /> 4.6 <span>/5</span></p>
                                 <p><img src={verifiedGreenIcon} alt="" />50 Verified Review</p>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="reviews-count-progresbar">
                                 <div class="barWrapper d-flex align-items-center justify-content-end">
                                    <div class="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div class="progress">
                                       <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >   
                                          <span  class="popOver" data-toggle="tooltip" data-placement="top" title="4-5"> </span>     
                                       </div>
                                    </div>
                                    <p class="review-totaltxt ms-3">55</p>
                                 </div>
                                 <div class="barWrapper d-flex align-items-center justify-content-end">
                                    <div class="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div class="progress ">
                                       <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="10" aria-valuemax="100">
                                          <span  class="popOver" data-toggle="tooltip" data-placement="top" title="3-4"> </span>  
                                       </div>
                                    </div>
                                    <p class="review-totaltxt ms-3">44</p>
                                 </div>
                                 <div class="barWrapper d-flex align-items-center justify-content-end">
                                    <div class="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div class="progress">
                                       <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                          <span  class="popOver" data-toggle="tooltip" data-placement="top" title="1-3"> </span>  
                                       </div>
                                    </div>
                                    <p class="review-totaltxt ms-3">22</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="row align-items-center justify-content-center mt-2">
                           <div class="col-4">
                              <p class="write-review-title">Help other aspirants by sharing your review of this college</p>
                           </div>
                           <div class="col-4">
                              <Link class="write-review-btn d-inline-block">Write a Review</Link>
                           </div>
                        </div>
                        <div class="row mt-4">
                           <div class="col-12">
                              <div class="accomodation-review-row d-flex flex-wrap justify-content-between">
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Academic</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Infrastructure</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Hostel</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Faculty</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Placement</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-12">
                              <h5 class="mt-5 mb-4">What students say about IIT Chennai University - Indian Institute of Management</h5>
                           </div>
                           <div class="col-12">


                              <ul class="nav nav-pills mb-3 review-tab-listing" id="pills-tab" role="tablist">
                                 <li class="nav-item" role="presentation">
                                    <button class="active position-relative" id="detailed-reviews-tab" data-bs-toggle="pill" data-bs-target="#detailed-reviews" type="button" role="tab" aria-controls="detailed-reviews" aria-selected="true">Detailed</button>
                                 </li>
                                 <li class="nav-item" role="presentation">
                                    <button class="position-relative" id="latest-reviews-tab" data-bs-toggle="pill" data-bs-target="#latest-reviews" type="button" role="tab" aria-controls="latest-reviews" aria-selected="false">Latest</button>
                                 </li>
                                 <li class="nav-item" role="presentation">
                                    <button class="position-relative" id="mosthelpful-reviews-tab" data-bs-toggle="pill" data-bs-target="#mosthelpful-reviews" type="button" role="tab" aria-controls="mosthelpful-reviews" aria-selected="false">Most Helpful</button>
                                 </li>
                              </ul>
                              <div class="tab-content" id="pills-tabContent">
                                 <div class="tab-pane fade show active" id="detailed-reviews" role="tabpanel" aria-labelledby="detailed-reviews-tab">
                                       <div class="clg-specific-postreview-box mb-4">
                                          <div class="row justify-content-between mb-4">
                                             <div class="col-4">
                                                <div class="d-flex">
                                                   <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      A
                                                   </div>
                                                   <p class="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div class="col-4 text-end">
                                                <div class="green-review-badge green-bg">
                                                   <img src={starFIcon} class="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Placements</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Infrastructure</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Faculty</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>4 Crowd & Campus Life</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>3 Value for Money</p>
                                             </li>
                                          </ul>
                                          <h4 class="reviewOverview-txt">Overview</h4>
                                          <p class="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link class="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div class="d-flex justify-content-between align-items-center mt-5">
                                             <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div class="d-inline-flex">
                                                <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="clg-specific-postreview-box mb-4">
                                          <div class="row justify-content-between mb-4">
                                             <div class="col-4">
                                                <div class="d-flex">
                                                   <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      H
                                                   </div>
                                                   <p class="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div class="col-4 text-end">
                                                <div class="green-review-badge green-bg">
                                                   <img src={starFIcon} class="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Placements</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Infrastructure</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Faculty</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>4 Crowd & Campus Life</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>3 Value for Money</p>
                                             </li>
                                          </ul>
                                          <h4 class="reviewOverview-txt">Overview</h4>
                                          <p class="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link class="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div class="d-flex justify-content-between align-items-center mt-5">
                                             <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div class="d-inline-flex">
                                                <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="clg-specific-postreview-box mb-4">
                                          <div class="row justify-content-between mb-4">
                                             <div class="col-4">
                                                <div class="d-flex">
                                                   <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      T
                                                   </div>
                                                   <p class="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div class="col-4 text-end">
                                                <div class="green-review-badge green-bg">
                                                   <img src={starFIcon} class="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Placements</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Infrastructure</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Faculty</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>4 Crowd & Campus Life</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>3 Value for Money</p>
                                             </li>
                                          </ul>
                                          <h4 class="reviewOverview-txt">Overview</h4>
                                          <p class="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link class="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div class="d-flex justify-content-between align-items-center mt-5">
                                             <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div class="d-inline-flex">
                                                <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="clg-specific-postreview-box mb-4">
                                          <div class="row justify-content-between mb-4">
                                             <div class="col-4">
                                                <div class="d-flex">
                                                   <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      S
                                                   </div>
                                                   <p class="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div class="col-4 text-end">
                                                <div class="green-review-badge green-bg">
                                                   <img src={starFIcon} class="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Placements</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Infrastructure</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Faculty</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>4 Crowd & Campus Life</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>3 Value for Money</p>
                                             </li>
                                          </ul>
                                          <h4 class="reviewOverview-txt">Overview</h4>
                                          <p class="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link class="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div class="d-flex justify-content-between align-items-center mt-5">
                                             <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div class="d-inline-flex">
                                                <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="tab-pane fade" id="latest-reviews" role="tabpanel" aria-labelledby="latest-reviews-tab">
                                    <div class="clg-specific-postreview-box mb-4">
                                       <div class="row justify-content-between mb-4">
                                          <div class="col-4">
                                             <div class="d-flex">
                                                <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   A
                                                </div>
                                                <p class="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div class="col-4 text-end">
                                             <div class="green-review-badge green-bg">
                                                <img src={starFIcon} class="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Placements</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Infrastructure</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Faculty</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>4 Crowd & Campus Life</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>3 Value for Money</p>
                                          </li>
                                       </ul>
                                       <h4 class="reviewOverview-txt">Overview</h4>
                                       <p class="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link class="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div class="d-flex justify-content-between align-items-center mt-5">
                                          <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div class="d-inline-flex">
                                             <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="clg-specific-postreview-box mb-4">
                                       <div class="row justify-content-between mb-4">
                                          <div class="col-4">
                                             <div class="d-flex">
                                                <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   H
                                                </div>
                                                <p class="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div class="col-4 text-end">
                                             <div class="green-review-badge green-bg">
                                                <img src={starFIcon} class="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Placements</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Infrastructure</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Faculty</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>4 Crowd & Campus Life</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>3 Value for Money</p>
                                          </li>
                                       </ul>
                                       <h4 class="reviewOverview-txt">Overview</h4>
                                       <p class="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link class="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div class="d-flex justify-content-between align-items-center mt-5">
                                          <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div class="d-inline-flex">
                                             <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="tab-pane fade" id="mosthelpful-reviews" role="tabpanel" aria-labelledby="mosthelpful-reviews-tab">
                                    <div class="clg-specific-postreview-box mb-4">
                                       <div class="row justify-content-between mb-4">
                                          <div class="col-4">
                                             <div class="d-flex">
                                                <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   A
                                                </div>
                                                <p class="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div class="col-4 text-end">
                                             <div class="green-review-badge green-bg">
                                                <img src={starFIcon} class="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Placements</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Infrastructure</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Faculty</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>4 Crowd & Campus Life</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>3 Value for Money</p>
                                          </li>
                                       </ul>
                                       <h4 class="reviewOverview-txt">Overview</h4>
                                       <p class="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link class="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div class="d-flex justify-content-between align-items-center mt-5">
                                          <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div class="d-inline-flex">
                                             <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>
                              
                              <div>
                                 <Link class="readallreview-gray-btn d-block text-center">Read All Reviews</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="tick-heading d-flex align-items-center mb-4 mt-5">
                        <span class="tick-heading-icon d-inline-flex">
                        <img src={greyTickIcon} alt="" />
                        </span>
                        <h2>IIT Chennai Courses Offered</h2>
                     </div>
                     <div class="row">
                        <div class="col-12">
                           <div class="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                              <div class="swiper course-offered-slider pb-5">
                                 <div class="swiper-wrapper">
                                    <CustomSwiper navigationNext={'.courseOffer-button-next'} navigationPrev={'.courseOffer-button-prev'} noOfSlidesPerView={3} isBreakPoint={true} breakPoint={swiperResponsive(responsive1)}>
                                       <swiper-slide>
                                          <div class="swiper-slide">
                                             <div class="card">
                                                <div class="top_review d-flex justify-content-end align-items-center">
                                                   <p class="review_count mb-0 me-2">724 Reviews</p>
                                                   <p class="rating mb-0 me-2">4.5</p>
                                                   <p class="like mb-0">
                                                      <img src={heartIcon} srcset={`${heartIcon} 1X , ${heartIcon2X} 2X`} alt="Heart" width="18" height="17" />
                                                   </p>
                                                </div>
                                                <div class="details">
                                                   <p class="details_name mb-0">Bachelor of Technology [B.Tech]</p>
                                                   <p class="details_price mb-0">₹ 200,500 <span>1st Yr Fees</span></p>
                                                   <p class="details_review mb-0 d-flex align-items-center">
                                                      4.5/724 Reviews
                                                      <span class="ms-2">
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={blankStarIcon} srcset={`${blankStarIcon} 1X , ${blankStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      </span>
                                                   </p>
                                                   <p class="details_rating mb-0">Rated #3 out of 131 by The Week in Engineering</p>
                                                   <div class="badge_group">
                                                      <div class="badge rounded-0 text-center text-uppercase">4 YEARS</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">DEGREE</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">ON CAMPUS</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">GRADUATION</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">FULL TIME</div>
                                                   </div>
                                                </div>
                                                <div class="details_tab">
                                                   <ul class="nav nav-tabs" role="tablist">
                                                      <li class="nav-item">
                                                         <Link class="nav-link active" data-bs-toggle="tab" href="#specialization">Specialization</Link>
                                                      </li>
                                                      <li class="nav-item">
                                                         <Link class="nav-link" data-bs-toggle="tab" href="#cutoff">Cutoff</Link>
                                                      </li>
                                                      <li class="nav-item">
                                                         <Link class="nav-link" data-bs-toggle="tab" href="#examsAccepted">Exams Accepted</Link>
                                                      </li>
                                                   </ul>
                                                   <div class="tab-content">
                                                      <div id="specialization" class="container tab-pane active">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="cutoff" class="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="examsAccepted" class="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="details_btn_group">
                                                   <div class="row">
                                                      <div class="col-6 pe-1">
                                                         <button type="button" class="details_btn text-center w-100">
                                                            Compare <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2x`} alt="Button Icon" width="22" height="18" />
                                                         </button>
                                                      </div>
                                                      <div class="col-6 ps-1">
                                                         <button type="button" class="details_btn text-center w-100">
                                                            Admission Predictor <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2x`} alt="Button Icon" width="18" height="14" />
                                                         </button>
                                                      </div>
                                                      <div class="col-6 pe-1">
                                                         <button type="button" class="details_btn active text-center w-100">
                                                            Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" />
                                                         </button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </swiper-slide>
                                       <swiper-slide>
                                          <div class="swiper-slide">
                                             <div class="card">
                                                <div class="top_review d-flex justify-content-end align-items-center">
                                                   <p class="review_count mb-0 me-2">724 Reviews</p>
                                                   <p class="rating mb-0 me-2">4.5</p>
                                                   <p class="like mb-0">
                                                      <img src={heartIcon} srcset={`${heartIcon} 1X , ${heartIcon2X} 2X`} alt="Heart" width="18" height="17" />
                                                   </p>
                                                </div>
                                                <div class="details">
                                                   <p class="details_name mb-0">Bachelor of Technology [B.Tech]</p>
                                                   <p class="details_price mb-0">₹ 200,500 <span>1st Yr Fees</span></p>
                                                   <p class="details_review mb-0 d-flex align-items-center">
                                                      4.5/724 Reviews
                                                      <span class="ms-2">
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={blankStarIcon} srcset={`${blankStarIcon} 1X , ${blankStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      </span>
                                                   </p>
                                                   <p class="details_rating mb-0">Rated #3 out of 131 by The Week in Engineering</p>
                                                   <div class="badge_group">
                                                      <div class="badge rounded-0 text-center text-uppercase">4 YEARS</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">DEGREE</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">ON CAMPUS</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">GRADUATION</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">FULL TIME</div>
                                                   </div>
                                                </div>
                                                <div class="details_tab">
                                                   <ul class="nav nav-tabs" role="tablist">
                                                      <li class="nav-item">
                                                         <Link class="nav-link active" data-bs-toggle="tab" href="#specialization">Specialization</Link>
                                                      </li>
                                                      <li class="nav-item">
                                                         <Link class="nav-link" data-bs-toggle="tab" href="#cutoff">Cutoff</Link>
                                                      </li>
                                                      <li class="nav-item">
                                                         <Link class="nav-link" data-bs-toggle="tab" href="#examsAccepted">Exams Accepted</Link>
                                                      </li>
                                                   </ul>
                                                   <div class="tab-content">
                                                      <div id="specialization" class="container tab-pane active">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="cutoff" class="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="examsAccepted" class="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="details_btn_group">
                                                   <div class="row">
                                                      <div class="col-6 pe-1">
                                                         <button type="button" class="details_btn text-center w-100">
                                                            Compare <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2x`} alt="Button Icon" width="22" height="18" />
                                                         </button>
                                                      </div>
                                                      <div class="col-6 ps-1">
                                                         <button type="button" class="details_btn text-center w-100">
                                                            Admission Predictor <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2x`} alt="Button Icon" width="18" height="14" />
                                                         </button>
                                                      </div>
                                                      <div class="col-6 pe-1">
                                                         <button type="button" class="details_btn active text-center w-100">
                                                            Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" />
                                                         </button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </swiper-slide>
                                       <swiper-slide>
                                          <div class="swiper-slide">
                                             <div class="card">
                                                <div class="top_review d-flex justify-content-end align-items-center">
                                                   <p class="review_count mb-0 me-2">724 Reviews</p>
                                                   <p class="rating mb-0 me-2">4.5</p>
                                                   <p class="like mb-0">
                                                      <img src={heartIcon} srcset={`${heartIcon} 1X , ${heartIcon2X} 2X`} alt="Heart" width="18" height="17" />
                                                   </p>
                                                </div>
                                                <div class="details">
                                                   <p class="details_name mb-0">Bachelor of Technology [B.Tech]</p>
                                                   <p class="details_price mb-0">₹ 200,500 <span>1st Yr Fees</span></p>
                                                   <p class="details_review mb-0 d-flex align-items-center">
                                                      4.5/724 Reviews
                                                      <span class="ms-2">
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={blankStarIcon} srcset={`${blankStarIcon} 1X , ${blankStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      </span>
                                                   </p>
                                                   <p class="details_rating mb-0">Rated #3 out of 131 by The Week in Engineering</p>
                                                   <div class="badge_group">
                                                      <div class="badge rounded-0 text-center text-uppercase">4 YEARS</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">DEGREE</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">ON CAMPUS</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">GRADUATION</div>
                                                      <div class="badge rounded-0 text-center text-uppercase">FULL TIME</div>
                                                   </div>
                                                </div>
                                                <div class="details_tab">
                                                   <ul class="nav nav-tabs" role="tablist">
                                                      <li class="nav-item">
                                                         <Link class="nav-link active" data-bs-toggle="tab" href="#specialization">Specialization</Link>
                                                      </li>
                                                      <li class="nav-item">
                                                         <Link class="nav-link" data-bs-toggle="tab" href="#cutoff">Cutoff</Link>
                                                      </li>
                                                      <li class="nav-item">
                                                         <Link class="nav-link" data-bs-toggle="tab" href="#examsAccepted">Exams Accepted</Link>
                                                      </li>
                                                   </ul>
                                                   <div class="tab-content">
                                                      <div id="specialization" class="container tab-pane active">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="cutoff" class="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="examsAccepted" class="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="details_btn_group">
                                                   <div class="row">
                                                      <div class="col-6 pe-1">
                                                         <button type="button" class="details_btn text-center w-100">
                                                            Compare <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2X`} alt="Button Icon" width="22" height="18" />
                                                         </button>
                                                      </div>
                                                      <div class="col-6 ps-1">
                                                         <button type="button" class="details_btn text-center w-100">
                                                            Admission Predictor <img src={iconTwoImage} srcset={`${iconTwoImage} 1X, ${iconTwoImage2X} 2X`} alt="Button Icon" width="18" height="14" />
                                                         </button>
                                                      </div>
                                                      <div class="col-6 pe-1">
                                                         <button type="button" class="details_btn active text-center w-100">
                                                            Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" />
                                                         </button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </swiper-slide>
                                    </CustomSwiper>
                                    <div class="swiper-button-prev courseOffer-button-prev">
                                       <img src={arrowLeftIcon} alt="" />
                                    </div>
                                    <div class="swiper-button-next courseOffer-button-next">
                                       <img src={arrowRightIcon} alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="course-details-alterImgbox d-flex align-items-center">
                        <div class="course-details-alterImgbox-col1 green-bg">
                           <h2 class="text-white">Still have questions about <span>IIT Chennai University?</span></h2>
                           <p>Ask us and get personalized</p>
                           <Link class="theme-btn white-btn">Ask A Question</Link>
                        </div>
                        <div class="course-details-alterImgbox-col2 position-relative">
                           <img src={askQuesImage} alt="" />
                        </div>
                     </div>

                     <div class="clg-slider-wrapper position-relative">
                        <div class="tick-heading d-flex align-items-center mb-4">
                            <span class="tick-heading-icon d-inline-flex">
                                <img src={greyTickIcon} alt="" />
                            </span>
                            <h2>Recommended Colleges</h2>
                        </div>
                        <div class="swiper recommended-clg-slider pb-5">
                            <div class="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={'.clg-button-next'} navigationPrev={'.clg-button-prev'} noOfSlidesPerView={3} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                          <div class="clg-slider-box position-relative">
                                             <div class="recommended-clg-sliderbx">
                                                <div class="d-flex justify-content-between">
                                                   <img src={logoSliderImage} class="clg-slider-logo" alt="" />
                                                   <div class="recommended-clg-rating text-center">
                                                      <p class="mb-0">4.8</p>
                                                      <span class="d-flex align-items-center justify-content-center gap-1">
                                                         <img src={starFIcon} alt="" />
                                                         <img src={starFIcon} alt="" />
                                                         <img src={starFIcon} alt="" />
                                                         <img src={starFIcon} alt="" />
                                                         <img src={starFIcon} alt="" />
                                                      </span>
                                                   </div>
                                                </div>
                                                <p class="recommended-clg-name mb-2">IIM Bangalore - Indian Institute of Management</p>
                                                <p class="recommended-clg-location">Bangalore <span>#2 NIRF</span></p>
                                                <p class="course-offer-badge d-flex justify-content-between align-items-center">
                                                   <span>Courses Offered</span>
                                                   <span class="text-end">4 courses</span>
                                                </p>
                                                <p class="total-price-range d-flex justify-content-between align-items-center">
                                                   <span>Total Fees Range</span>
                                                   <span class="text-end">₹12.5 L - 24.5 L</span>
                                                </p>
                                             </div>

                                             <Link class="apply-btn position-absolute px-3">Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" /></Link>
                                          </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-slider-box position-relative">
                                          <div class="recommended-clg-sliderbx">
                                             <div class="d-flex justify-content-between">
                                                <img src={logoSliderImage} class="clg-slider-logo" alt="" />
                                                <div class="recommended-clg-rating text-center">
                                                   <p class="mb-0">4.8</p>
                                                   <span class="d-flex align-items-center justify-content-center gap-1">
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                   </span>
                                                </div>
                                             </div>
                                             <p class="recommended-clg-name mb-2">IIM Bangalore - Indian Institute of Management</p>
                                             <p class="recommended-clg-location">Bangalore <span>#2 NIRF</span></p>
                                             <p class="course-offer-badge d-flex justify-content-between align-items-center">
                                                <span>Courses Offered</span>
                                                <span class="text-end">4 courses</span>
                                             </p>
                                             <p class="total-price-range d-flex justify-content-between align-items-center">
                                                <span>Total Fees Range</span>
                                                <span class="text-end">₹12.5 L - 24.5 L</span>
                                             </p>
                                          </div>

                                          <Link class="apply-btn position-absolute px-3">Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" /></Link>
                                       </div>
                                 </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-slider-box position-relative">
                                          <div class="recommended-clg-sliderbx">
                                             <div class="d-flex justify-content-between">
                                                <img src={logoSliderImage} class="clg-slider-logo" alt="" />
                                                <div class="recommended-clg-rating text-center">
                                                   <p class="mb-0">4.8</p>
                                                   <span class="d-flex align-items-center justify-content-center gap-1">
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                   </span>
                                                </div>
                                             </div>
                                             <p class="recommended-clg-name mb-2">IIM Bangalore - Indian Institute of Management</p>
                                             <p class="recommended-clg-location">Bangalore <span>#2 NIRF</span></p>
                                             <p class="course-offer-badge d-flex justify-content-between align-items-center">
                                                <span>Courses Offered</span>
                                                <span class="text-end">4 courses</span>
                                             </p>
                                             <p class="total-price-range d-flex justify-content-between align-items-center">
                                                <span>Total Fees Range</span>
                                                <span class="text-end">₹12.5 L - 24.5 L</span>
                                             </p>
                                          </div>

                                          <Link class="apply-btn position-absolute px-3">Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" /></Link>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-slider-box position-relative">
                                          <div class="recommended-clg-sliderbx">
                                             <div class="d-flex justify-content-between">
                                                <img src={logoSliderImage} class="clg-slider-logo" alt="" />
                                                <div class="recommended-clg-rating text-center">
                                                   <p class="mb-0">4.8</p>
                                                   <span class="d-flex align-items-center justify-content-center gap-1">
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                   </span>
                                                </div>
                                             </div>
                                             <p class="recommended-clg-name mb-2">IIM Bangalore - Indian Institute of Management</p>
                                             <p class="recommended-clg-location">Bangalore <span>#2 NIRF</span></p>
                                             <p class="course-offer-badge d-flex justify-content-between align-items-center">
                                                <span>Courses Offered</span>
                                                <span class="text-end">4 courses</span>
                                             </p>
                                             <p class="total-price-range d-flex justify-content-between align-items-center">
                                                <span>Total Fees Range</span>
                                                <span class="text-end">₹12.5 L - 24.5 L</span>
                                             </p>
                                          </div>

                                          <Link class="apply-btn position-absolute px-3">Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" /></Link>
                                       </div>
                                    </div>
                                 </swiper-slide>
                              </CustomSwiper>
                              <div class="swiper-button-prev clg-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div class="swiper-button-next clg-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
               {/* <div class="col-md-4">
                  <aside id="courses_details_rightcol" class="courses-details-rightcol">
                     <div class="courses-details-rightcol-grid">
                        <h2 class="courses-details-rightcol-grid-title">Photos</h2>
                        <div class="courses-details-rightcol-gridcontent clg-info-photo-innergrid">
                           <ul class="d-flex flex-wrap justify-content-between">
                              <li class="border-0"><img src={clgInfoPhoto1} alt="" /></li>
                              <li class="border-0"><img src={clgInfoPhoto1} alt="" /></li>
                              <li class="border-0"><img src={clgInfoPhoto1} alt="" /></li>
                              <li class="border-0"><img src={clgInfoPhoto1} alt="" /></li>
                              <li class="border-0"><img src={clgInfoPhoto1} alt="" /></li>
                              <li class="border-0"><img src={clgInfoPhoto1} alt="" /></li>
                           </ul>
                        </div>
                     </div>
                     <Link class="courses-details-rightcol-viewall-btn">View All</Link>

                     <div class="courses-details-rightcol-grid mt-5">
                        <h2 class="courses-details-rightcol-grid-title">Videos</h2>
                        <div class="courses-details-rightcol-gridcontent">
                           <ul class="d-flex flex-wrap justify-content-center">
                              <li class="border-0"><img src={clgInfoVideo1} alt="" /></li>
                              <li class="border-0"><img src={clgInfoVideo1} alt="" /></li>
                           </ul>
                        </div>
                     </div>
                     <Link class="courses-details-rightcol-viewall-btn">View All</Link>

                     <div class="courses-details-rightcol-grid mt-5">
                        <h2 class="courses-details-rightcol-grid-title">Placement</h2>
                        <div class="courses-details-rightcol-gridcontent">
                           <ul class="clg-info-topcourse-list">
                              <li class="border-0 pb-0">
                                 <p class="topcourse-avgfess mb-0">₹19,800,000</p>
                                 <p class="clginfo-topcourse-title">Highest Package</p>
                              </li>
                              <li class="border-0 pb-0">
                                 <p class="topcourse-avgfess mb-0">₹19,800,000</p>
                                 <p class="clginfo-topcourse-title">Highest Package</p>
                              </li>
                           </ul>
                           <ul class="placement-company-logolist d-flex justify-content-between mt-3">
                              <li class="border-0"><img src={companyLogo1} alt="" /></li>
                              <li class="border-0"><img src={companyLogo2} alt="" /></li>
                              <li class="border-0"><img src={companyLogo3} alt="" /></li>
                              <li class="border-0"><img src={companyLogo4} alt="" /></li>
                           </ul>
                        </div>
                     </div>
                     <Link class="courses-details-rightcol-viewall-btn">View All</Link>

                     <div class="courses-details-rightcol-grid mt-5">
                        <h2 class="courses-details-rightcol-grid-title">Scholarship</h2>
                        <div class="courses-details-rightcol-gridcontent">
                           <p class="clg-info-scholarship-para mt-4">The university's authorities provide several kinds of scholarships to its students. The Haridwar University scholarship is offered to needy and meritorious students. Students can get to know more details regarding scholarship programs from the table below.</p>
                           <span class="clg-info-scholarship-badge green-bg d-inline-block px-3 py-1">Institute’s Scholarship</span>
                           <ul class="clg-info-scholarship-list">
                              <li class="border-0">Institute Merit-Cum Means Scholarship</li>
                              <li class="border-0">Institute Free studentship</li>
                              <li class="border-0">Institute National Prize</li>
                              <li class="border-0">Institute SC/ST Scholarship</li>
                              <li class="border-0">Indian Women’s Association at Bonn Scholarship</li>
                              <li class="border-0">Sri V Ranga Raju Memorial scholarship</li>
                              <li class="border-0">Kanchi Kamakoti Jagadguru Sri Chandrasekharendra Saraswathi Endowment Award</li>
                              <li class="border-0">More..</li>
                           </ul>
                           <div class="mt-4 mb-3">
                              <span class="clg-info-scholarship-badge green-bg d-inline-block px-3 py-1">Other Scholarships</span>
                           </div>
                           <div>
                              <span class="clg-info-scholarship-badge green-bg d-inline-block px-3 py-1">FAQs</span>
                           </div>
                        </div>
                     </div>
                     <Link class="courses-details-rightcol-viewall-btn">View All</Link>

                     <div class="courses-details-rightcol-grid mt-5">
                        <h2 class="courses-details-rightcol-grid-title">Top Courses</h2>
                        <div class="courses-details-rightcol-gridcontent">
                           <ul class="clg-info-topcourse-list">
                              <li class="d-flex">
                                 <div class="col-9">
                                    <p class="clginfo-topcourse-title">B.Tech Computer Science Engineering</p>
                                    <p class="topcourse-avgfess">AVG FEE - ₹204,263/Yr</p>
                                 </div>
                                 <div class="col-3">
                                    <p class="topcourse-duration text-end">4 Years</p>
                                 </div>
                              </li>
                              <li class="d-flex">
                                 <div class="col-9">
                                    <p class="clginfo-topcourse-title">B.Tech Computer Science Engineering</p>
                                    <p class="topcourse-avgfess">AVG FEE - ₹204,263/Yr</p>
                                 </div>
                                 <div class="col-3">
                                    <p class="topcourse-duration text-end">4 Years</p>
                                 </div>
                              </li>
                              <li class="d-flex">
                                 <div class="col-9">
                                    <p class="clginfo-topcourse-title">B.Tech Computer Science Engineering</p>
                                    <p class="topcourse-avgfess">AVG FEE - ₹204,263/Yr</p>
                                 </div>
                                 <div class="col-3">
                                    <p class="topcourse-duration text-end">4 Years</p>
                                 </div>
                              </li>
                              <li class="d-flex">
                                 <div class="col-9">
                                    <p class="clginfo-topcourse-title">B.Tech Computer Science Engineering</p>
                                    <p class="topcourse-avgfess">AVG FEE - ₹204,263/Yr</p>
                                 </div>
                                 <div class="col-3">
                                    <p class="topcourse-duration text-end">4 Years</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <Link class="courses-details-rightcol-viewall-btn">View All</Link>

                     <div class="courses-details-rightcol-grid mt-5">
                        <h2 class="courses-details-rightcol-grid-title">Related News</h2>
                        <div class="courses-details-rightcol-gridcontent">
                           <div class="d-inline-flex gap-2 my-3">
                              <Link class="latest-news-badge">Latest</Link>
                              <Link class="popular-news-badge">Popular</Link>
                           </div>
                           <ul class="courses-details-rightcol-listing">
                              <li class="d-flex">
                                 <div class="related-news-postimg">
                                    <img src={relatedNews} alt="" />
                                 </div>
                                 <div class="related-news-postinfo">
                                    <p class="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <Link>Read More</Link> </p>
                                    <p class="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                 </div>
                              </li>
                              <li class="d-flex">
                                 <div class="related-news-postimg">
                                    <img src={relatedNews} alt="" />
                                 </div>
                                 <div class="related-news-postinfo">
                                    <p class="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <Link>Read More</Link> </p>
                                    <p class="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                 </div>
                              </li>
                              <li class="d-flex">
                                 <div class="related-news-postimg">
                                    <img src={relatedNews} alt="" />
                                 </div>
                                 <div class="related-news-postinfo">
                                    <p class="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <Link>Read More</Link> </p>
                                    <p class="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <Link class="courses-details-rightcol-viewall-btn">View All</Link>

                     <div class="courses-details-rightcol-grid mt-5">
                        <h2 class="courses-details-rightcol-grid-title">Notification</h2>
                        <div class="courses-details-rightcol-gridcontent">
                           <ul class="clg-info-noti-listing">
                              <li><img src={clgLogo3} alt="" />Geetanjali Group of Colleges</li>
                              <li><img src={clgLogo3} alt="" />Indian Institute of Management Ahmedabad</li>
                              <li><img src={clgLogo3} alt="" />Biotechnology Engineering</li>
                              <li><img src={clgLogo3} alt="" />Industrial Design</li>
                           </ul>
                        </div>
                     </div>
                     <Link class="courses-details-rightcol-viewall-btn">View All</Link>

                  </aside>
               </div> */}
            
            </div>
            <div className='row'>
               <div className='col-12'>
              
               <div class="course-details-alterImgbox d-flex align-items-center">
                        <div class="course-details-alterImgbox-col1 green-bg">
                           <h2 class="text-white">Worried About College <span>Guidance?</span></h2>
                           <p>Convert your Upfront Fees in to Simple, Convenient & Affordable EMIs</p>
                           <Link class="theme-btn white-btn">Ask Our Experts</Link>
                        </div>
                        <div class="course-details-alterImgbox-col2 position-relative">
                           <img src={cdIcon} alt="" />
                        </div>
                     </div>
                     {/* <div class="clg-facilities-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
                        <h2 class="section-heading2 grey text-center mb-5">IIT Chennai Facilities</h2>
                        <div class="swiper clg-facilities-slider">
                           <div class="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={".clg-facilities-button-next"} navigationPrev={".clg-facilities-button-prev"} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Auditorium</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={hostelIcon} alt="" />
                                          <p>Boys Hostel</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={canteenIcon} alt="" />
                                          <p>Canteen</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Computer Lab</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Counselling</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Auditorium</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                              </CustomSwiper>
                              <div class="swiper-button-prev clg-facilities-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div class="swiper-button-next clg-facilities-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div> */}
                     <div class="course-details-alterImgbox d-flex align-items-center mt-5 pt-5">
                        <div class="course-details-alterImgbox-col2 position-relative">
                           <img src={cdIcon} alt="" />
                        </div>
                        <div class="course-details-alterImgbox-col1 green-bg">
                           <h2 class="text-white">Are you feeling lost and unsure about what <span>career path to take after completing 12th standard?</span></h2>
                           <p>Say goodbye to confusion and hello to a bright future!</p>
                           <Link class="theme-btn white-btn">Ask Our Experts</Link>
                        </div>
                     </div>
                     <div class="py-5 mt-4">
                        <div class="row align-items-center">
                           <div class="col-md-5">
                              <h1 class="exam-center-calenderTxt1 text-center">Will you get 
                                 <span>{` Admission in ${collegeDetailsById?.basicDetails?.college_name}`}</span>
                              </h1>
                           </div>
                           <div class="col-md-2 text-center">
                              <img src={yellowCircleIcon} alt="" />
                           </div>
                           <div class="col-md-5 text-center">
                              <h1 class="exam-center-calenderTxt">Goodbye doubts! 
                                 Say hello to our experts
                              </h1>
                              <Link class="theme-btn black-btn">Ask A Question</Link>
                           </div>
                        </div>
                     </div>
                     {/* <div class="successfull-almni-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
                        <h2 class="section-heading2 grey text-center mb-5">Successful Alumni</h2>
                        <div class="swiper successfull-almni-slider">
                           <div class="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={".clg-alumni-button-next"} navigationPrev={".clg-alumni-button-prev"} isBreakPoint={true} breakPoint={swiperResponsive(responsive1)}>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div class="swiper-slide">
                                       <div class="successfull-almni-box d-flex">
                                          <div class="successfull-almni-infobx text-start">
                                             <p class="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p class="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p class="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div class="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                              </CustomSwiper>
                              <div class="swiper-button-prev clg-alumni-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div class="swiper-button-next clg-alumni-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div> */}
                     <div class="tick-heading d-flex align-items-center mb-4">
                        <span class="tick-heading-icon d-inline-flex">
                        <img src={greyTickIcon} alt="" />
                        </span>
                        <h2>{`${collegeDetailsById?.basicDetails?.college_name} Faculty`}</h2>
                     </div>
                     {/* <div class="mt-5">
                        <img src={studentFaculty} class="faculty-students-img d-block mx-auto" alt="" />
                     </div> */}
                     <div class="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                        <div class="swiper faculty-slider-slider">
                           <div class="swiper-wrapper">
                              <CustomSwiper navigationNext={'.clg-faculty-button-next'} navigationPrev={'.clg-faculty-button-prev'} noOfSlidesPerView={3} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 {collegeDetailsById?.facilitiesDetails?.faculty_name && collegeDetailsById?.facilitiesDetails?.faculty_name.split(',').map((faculty)=>(
                                    <swiper-slide>
                                       <div class="swiper-slide">
                                          <div class="faculty-slider-box">
                                             <img className='faculty-slider-box-img' src={avtar} alt="" />
                                             <p>{`Prof. ${faculty.split('-')[0]}`}<br/><span>{`Dept. ${faculty.split('-')[1]}`}</span></p>
                                          </div>
                                       </div>
                                    </swiper-slide>
                                 ))}
                              </CustomSwiper>
                              <div class="swiper-button-prev clg-faculty-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div class="swiper-button-next clg-faculty-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>      
                           </div>
                        </div>
                        
                     </div>
                     <div class="row justify-content-center mb-5">
                        <div class="col-9">
                           <div class="download-content-box text-center">
                              <img src={downloadIcon} class="mb-4" alt="" />
                              <h2 class="mb-4"><span class="d-block">Get details on</span> {`Fee, Cut off marks, Admission Process for session ${getCurrentYear()}.`}</h2>
                              <div class="d-flex justify-content-center gap-3 align-items-center download-btn-sec">
                                 <p>Download brochure</p>
                                 <Link class="theme-btn black-btn">Ask A Question</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <div class="clg-specific-review-section mb-5">
                        <div class="row mb-4">
                           <div class="col-12">
                              <div class="tick-heading d-flex align-items-center mb-4">
                                 <span class="tick-heading-icon d-inline-flex">
                                 <img src={greyTickIcon} alt="" />
                                 </span>
                                 <h2>IIT Chennai University Reviews</h2>
                              </div>
                           </div>
                        </div>
                        <div class="row justify-content-between">
                           <div class="col-md-4">
                              <div class="clg-verified-review-box text-center">
                                 <p><img src={starFIcon} alt="" /> 4.6 <span>/5</span></p>
                                 <p><img src={verifiedGreenIcon} alt="" />50 Verified Review</p>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="reviews-count-progresbar">
                                 <div class="barWrapper d-flex align-items-center justify-content-end">
                                    <div class="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div class="progresss2">
                                       <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >   
                                          <span  class="popOver" data-toggle="tooltip" data-placement="top" title="4-5"> </span>     
                                       </div>
                                    </div>
                                    <p class="review-totaltxt ms-3">55</p>
                                 </div>
                                 <div class="barWrapper d-flex align-items-center justify-content-end">
                                    <div class="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div class="progresss2 ">
                                       <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="10" aria-valuemax="100">
                                          <span  class="popOver" data-toggle="tooltip" data-placement="top" title="3-4"> </span>  
                                       </div>
                                    </div>
                                    <p class="review-totaltxt ms-3">44</p>
                                 </div>
                                 <div class="barWrapper d-flex align-items-center justify-content-end">
                                    <div class="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div class="progresss2">
                                       <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                          <span  class="popOver" data-toggle="tooltip" data-placement="top" title="1-3"> </span>  
                                       </div>
                                    </div>
                                    <p class="review-totaltxt ms-3">22</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="row align-items-center justify-content-center mt-2">
                           <div class="col-4">
                              <p class="write-review-title">Help other aspirants by sharing your review of this college</p>
                           </div>
                           <div class="col-4">
                              <Link class="write-review-btn d-inline-block">Write a Review</Link>
                           </div>
                        </div>
                        <div class="row mt-4">
                           <div class="col-12">
                              <div class="accomodation-review-row d-flex flex-wrap justify-content-between">
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Academic</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Infrastructure</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Hostel</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Faculty</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div class="accomodation-box d-flex">
                                    <img src={scollarshipIcon} class="accomodation-icon me-2" alt="" />
                                    <div class="accomodation-review-count">
                                       <p class="accomodation-title">Placement</p>
                                       <p class="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-12">
                              <h5 class="mt-5 mb-4">What students say about IIT Chennai University - Indian Institute of Management</h5>
                           </div>
                           <div class="col-12">


                              <ul class="nav nav-pills mb-3 review-tab-listing" id="pills-tab" role="tablist">
                                 <li class="nav-item" role="presentation">
                                    <button class="active position-relative" id="detailed-reviews-tab" data-bs-toggle="pill" data-bs-target="#detailed-reviews" type="button" role="tab" aria-controls="detailed-reviews" aria-selected="true">Detailed</button>
                                 </li>
                                 <li class="nav-item" role="presentation">
                                    <button class="position-relative" id="latest-reviews-tab" data-bs-toggle="pill" data-bs-target="#latest-reviews" type="button" role="tab" aria-controls="latest-reviews" aria-selected="false">Latest</button>
                                 </li>
                                 <li class="nav-item" role="presentation">
                                    <button class="position-relative" id="mosthelpful-reviews-tab" data-bs-toggle="pill" data-bs-target="#mosthelpful-reviews" type="button" role="tab" aria-controls="mosthelpful-reviews" aria-selected="false">Most Helpful</button>
                                 </li>
                              </ul>
                              <div class="tab-content" id="pills-tabContent">
                                 <div class="tab-pane fade show active" id="detailed-reviews" role="tabpanel" aria-labelledby="detailed-reviews-tab">
                                       <div class="clg-specific-postreview-box mb-4">
                                          <div class="row justify-content-between mb-4">
                                             <div class="col-md-6 col-sm-8 col-lg-4">
                                                <div class="d-flex">
                                                   <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      A
                                                   </div>
                                                   <div>
                                                   <p class="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="col-4 text-end">
                                                <div class="green-review-badge green-bg">
                                                   <img src={starFIcon} class="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Placements</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Infrastructure</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Faculty</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>4 Crowd & Campus Life</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>3 Value for Money</p>
                                             </li>
                                          </ul>
                                          <h4 class="reviewOverview-txt">Overview</h4>
                                          <p class="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link class="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div class="d-flex justify-content-between align-items-center mt-5">
                                             <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div class="d-inline-flex">
                                                <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="clg-specific-postreview-box mb-4">
                                          <div class="row justify-content-between mb-4">
                                             <div class="col-md-6 col-sm-8 col-lg-4">
                                                <div class="d-flex">
                                                   <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      H
                                                   </div>
                                                   <p class="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div class="col-4 text-end">
                                                <div class="green-review-badge green-bg">
                                                   <img src={starFIcon} class="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Placements</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Infrastructure</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Faculty</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>4 Crowd & Campus Life</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>3 Value for Money</p>
                                             </li>
                                          </ul>
                                          <h4 class="reviewOverview-txt">Overview</h4>
                                          <p class="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link class="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div class="d-flex justify-content-between align-items-center mt-5">
                                             <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div class="d-inline-flex">
                                                <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="clg-specific-postreview-box mb-4">
                                          <div class="row justify-content-between mb-4">
                                             <div class="col-md-6 col-sm-8 col-lg-4">
                                                <div class="d-flex">
                                                   <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      T
                                                   </div>
                                                   <p class="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div class="col-4 text-end">
                                                <div class="green-review-badge green-bg">
                                                   <img src={starFIcon} class="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Placements</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Infrastructure</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Faculty</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>4 Crowd & Campus Life</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>3 Value for Money</p>
                                             </li>
                                          </ul>
                                          <h4 class="reviewOverview-txt">Overview</h4>
                                          <p class="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link class="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div class="d-flex justify-content-between align-items-center mt-5">
                                             <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div class="d-inline-flex">
                                                <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="clg-specific-postreview-box mb-4">
                                          <div class="row justify-content-between mb-4">
                                             <div class="col-md-6 col-sm-8 col-lg-4">
                                                <div class="d-flex">
                                                   <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      S
                                                   </div>
                                                   <p class="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div class="col-4 text-end">
                                                <div class="green-review-badge green-bg">
                                                   <img src={starFIcon} class="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Placements</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Infrastructure</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>5 Faculty</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>4 Crowd & Campus Life</p>
                                             </li>
                                             <li>
                                                <img src={starFIcon} alt="" />
                                                <p>3 Value for Money</p>
                                             </li>
                                          </ul>
                                          <h4 class="reviewOverview-txt">Overview</h4>
                                          <p class="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link class="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div class="d-flex justify-content-between align-items-center mt-5">
                                             <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div class="d-inline-flex">
                                                <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="tab-pane fade" id="latest-reviews" role="tabpanel" aria-labelledby="latest-reviews-tab">
                                    <div class="clg-specific-postreview-box mb-4">
                                       <div class="row justify-content-between mb-4">
                                          <div class="col-4">
                                             <div class="d-flex">
                                                <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   A
                                                </div>
                                                <p class="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div class="col-4 text-end">
                                             <div class="green-review-badge green-bg">
                                                <img src={starFIcon} class="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Placements</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Infrastructure</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Faculty</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>4 Crowd & Campus Life</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>3 Value for Money</p>
                                          </li>
                                       </ul>
                                       <h4 class="reviewOverview-txt">Overview</h4>
                                       <p class="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link class="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div class="d-flex justify-content-between align-items-center mt-5">
                                          <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div class="d-inline-flex">
                                             <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="clg-specific-postreview-box mb-4">
                                       <div class="row justify-content-between mb-4">
                                          <div class="col-4">
                                             <div class="d-flex">
                                                <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   H
                                                </div>
                                                <p class="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div class="col-4 text-end">
                                             <div class="green-review-badge green-bg">
                                                <img src={starFIcon} class="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Placements</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Infrastructure</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Faculty</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>4 Crowd & Campus Life</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>3 Value for Money</p>
                                          </li>
                                       </ul>
                                       <h4 class="reviewOverview-txt">Overview</h4>
                                       <p class="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link class="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div class="d-flex justify-content-between align-items-center mt-5">
                                          <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div class="d-inline-flex">
                                             <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="tab-pane fade" id="mosthelpful-reviews" role="tabpanel" aria-labelledby="mosthelpful-reviews-tab">
                                    <div class="clg-specific-postreview-box mb-4">
                                       <div class="row justify-content-between mb-4">
                                          <div class="col-4">
                                             <div class="d-flex">
                                                <div class="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   A
                                                </div>
                                                <p class="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div class="col-4 text-end">
                                             <div class="green-review-badge green-bg">
                                                <img src={starFIcon} class="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul class="reviews-core-items d-flex flex-wrap gap-2">
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Placements</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Infrastructure</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>5 Faculty</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>4 Crowd & Campus Life</p>
                                          </li>
                                          <li>
                                             <img src={starFIcon} alt="" />
                                             <p>3 Value for Money</p>
                                          </li>
                                       </ul>
                                       <h4 class="reviewOverview-txt">Overview</h4>
                                       <p class="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link class="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div class="d-flex justify-content-between align-items-center mt-5">
                                          <p class="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div class="d-inline-flex">
                                             <span class="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span class="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>
                              
                              <div>
                                 <Link class="readallreview-gray-btn d-block text-center">Read All Reviews</Link>
                              </div>
                           </div>
                        </div>
                     </div> */}
                     <div class="tick-heading d-flex align-items-center mb-4 mt-5">
                        <span class="tick-heading-icon d-inline-flex">
                        <img src={greyTickIcon} alt="" />
                        </span>
                        <h2>{`${collegeDetailsById?.basicDetails?.college_name} Courses Offered`}</h2>
                     </div>
                     <div class="row">
                        <div class="col-12">
                           <div class="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                              <div class="swiper course-offered-slider pb-5">
                                 <div class="swiper-wrapper">
                                    <CustomSwiper navigationNext={'.courseOffer-button-next'} navigationPrev={'.courseOffer-button-prev'} noOfSlidesPerView={1} isBreakPoint={true} breakPoint={swiperResponsive(responsive1)}>
                                       {collegeDetailsById?.courseOfferedDetails.length > 0 && getAllCourseDataById().map((course)=>(
                                          <swiper-slide>
                                             <CustomCourseCard course={course} isSwiper={true}/>
                                          </swiper-slide>
                                       ))}
                                    </CustomSwiper>
                                    <div class="swiper-button-prev courseOffer-button-prev">
                                       <img src={arrowLeftIcon} alt="" />
                                    </div>
                                    <div class="swiper-button-next courseOffer-button-next">
                                       <img src={arrowRightIcon} alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="course-details-alterImgbox d-flex align-items-center">
                        <div class="course-details-alterImgbox-col1 green-bg">
                           <h2 class="text-white">Still have questions about <span>{`${collegeDetailsById?.basicDetails?.college_name}?`}</span></h2>
                           <p>Ask us and get personalized</p>
                           <Link class="theme-btn white-btn">Ask A Question</Link>
                        </div>
                        <div class="course-details-alterImgbox-col2 position-relative">
                           <img src={askQuesImage} alt="" />
                        </div>
                     </div>

                     <div class="clg-slider-wrapper position-relative">
                        <div class="tick-heading d-flex align-items-center mb-4">
                            <span class="tick-heading-icon d-inline-flex">
                                <img src={greyTickIcon} alt="" />
                            </span>
                            <h2>Recommended Colleges</h2>
                        </div>
                        <div class="swiper recommended-clg-slider pb-5">
                            <div class="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={'.clg-button-next'} navigationPrev={'.clg-button-prev'} noOfSlidesPerView={1} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 {collegeDetailsById?.basicDetails?.city && getAllCollegesDataByCity().map((college)=>(
                                    <swiper-slide>
                                       <CustomCollegeCard college={college} isSwiper={true}/>
                                    </swiper-slide>
                                 ))}
                              </CustomSwiper>
                              <div class="swiper-button-prev clg-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div class="swiper-button-next clg-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
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
