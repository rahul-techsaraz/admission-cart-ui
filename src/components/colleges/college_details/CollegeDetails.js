import React, { useEffect, useState } from 'react';
import CollegeBannerSection from './CollegeBannerSection';
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
  const [readmore, setReadmore] = useState({
    overview: false,
    highlightDescription: false,
    highlightCourses: false,
    allCourses: false,
  });
  const { college_id } = useParams();
  const { fetchCollege } = useFetchCollegeById();
  const dispatch = useDispatch();
  const { collegeDetailsById, allCourseData, allCollegeData } = useSelector((state) => state.common);
  console.log(collegeDetailsById);

  const responsive = {
    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  };
  const responsive1 = {
    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  };
  const getCurrentYear = () => {
    const d = new Date();
    const year = d.getFullYear();
    return year;
  };
  const dataToMap = (data) => {
    if (readmore.highlightCourses) {
      return data;
    } else {
      return data.filter((_, i) => i < 4);
    }
  };
  const getAllCourseDataById = () => {
    const ids = collegeDetailsById.courseOfferedDetails.map((v) => v.course_id);
    const data = allCourseData.filter((v) => ids.includes(v.course_id));
    console.log(data);
    return data;
  };
  const getAllCollegesDataByCity = () => {
    const data = allCollegeData.filter(
      (v) =>
        v.city === collegeDetailsById?.basicDetails?.city &&
        v.college_name !== collegeDetailsById?.basicDetails?.college_name
    );
    return data;
  };
  useEffect(() => {
    getAllCollegesDataByCity();
    console.log(collegeDetailsById);
  }, [collegeDetailsById]);
  useEffect(() => {
    fetchCollege(college_id);
  }, [college_id]);

  return (
    <>
      <CollegeBannerSection />
      {/* <MenucSection /> */}
      <section className="exam-details-section pt-50">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="colg-examinfo-leftcol">
                <div className="whatsNew-box mb-5">
                  <div className="d-flex mb-4 ms-3">
                    <div className="whatsnew-cal-badge">
                      <img src={whatsIcon} alt="" />
                    </div>
                    <h1 className="whatsNew-heading ms-2">
                      <span>{collegeDetailsById?.basicDetails?.college_name}</span>
                      What’s New
                    </h1>
                  </div>
                  <div className="whatsNew-inner-box">
                    <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                    <p className="whatsNew-para">
                      IIT Chennai University PhD applications 2024 are open and the last date to apply is Jan 17, 2024.
                      Below are some of the other important IIM Ahmedabad latest updates:
                    </p>
                    <ul className="whatsNew-list">
                      <li>The CAT 2023 exam will be held on Nov 26, 2023.</li>
                      <li>MBA-PGPX R2 applications are open and the last date to apply is Oct 30, 2023.</li>
                    </ul>
                    <Link className="whatsNew-readmore-btn mt-4 d-inline-block">Read More</Link>
                  </div>
                  <div className="whatsNew-slider-wrapper mt-4 mb-5">
                    <div className="swiper whatsNew-slider">
                      <div className="swiper-wrapper">
                        <main className="slider-main-container position-relative">
                          <CustomSwiper
                            navigationNext={'.whatsNew-button-next'}
                            navigationPrev={'.whatsNew-button-prev'}
                            isBreakPoint={true}
                            breakPoint={swiperResponsive(responsive)}
                          >
                            <swiper-slide>
                              <div className="swiper-slide">
                                <div className="whatsNew-inner-box">
                                  <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                  <p className="whatsNew-para">
                                    IIT Chennai University celebrated World Pharmacist Day at the premises...{' '}
                                    <Link className="whatsNew-readmore-btn">Read More</Link>
                                  </p>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide>
                              <div className="swiper-slide">
                                <div className="whatsNew-inner-box">
                                  <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                  <p className="whatsNew-para">
                                    IIT Chennai University celebrated World Pharmacist Day at the premises...{' '}
                                    <Link className="whatsNew-readmore-btn">Read More</Link>
                                  </p>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide>
                              <div className="swiper-slide">
                                <div className="whatsNew-inner-box">
                                  <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                  <p className="whatsNew-para">
                                    IIT Chennai University celebrated World Pharmacist Day at the premises...{' '}
                                    <Link className="whatsNew-readmore-btn">Read More</Link>
                                  </p>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide>
                              <div className="swiper-slide">
                                <div className="whatsNew-inner-box">
                                  <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                  <p className="whatsNew-para">
                                    IIT Chennai University celebrated World Pharmacist Day at the premises...{' '}
                                    <Link className="whatsNew-readmore-btn">Read More</Link>
                                  </p>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide>
                              <div className="swiper-slide">
                                <div className="whatsNew-inner-box">
                                  <p className="whatsNew-date">October 6, 2023 10:09 AM</p>
                                  <p className="whatsNew-para">
                                    IIT Chennai University celebrated World Pharmacist Day at the premises...{' '}
                                    <Link className="whatsNew-readmore-btn">Read More</Link>
                                  </p>
                                </div>
                              </div>
                            </swiper-slide>
                          </CustomSwiper>
                          <div className="swiper-button-prev whatsNew-button-prev">
                            <img src={arrowLeftIcon} alt="" />
                          </div>
                          <div className="swiper-button-next whatsNew-button-next ">
                            <img src={arrowRightIcon} alt="" />
                          </div>
                        </main>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-details-left-innerBox mb-5 text-center">
                  <h2 className="imgText-heading mb-4">{collegeDetailsById?.basicDetails?.college_name} Overview</h2>
                  <p className="imgText-para">
                    {collegeDetailsById?.descriptionDetails?.college_description.length > 300 &&
                    readmore.overview === false
                      ? collegeDetailsById?.descriptionDetails?.college_description.slice(0, 300) + '...'
                      : collegeDetailsById?.descriptionDetails?.college_description}
                  </p>
                  {collegeDetailsById?.descriptionDetails?.college_description.length > 300 && (
                    <div className="text-center">
                      <Link
                        className="theme-btn green-btn"
                        onClick={() => setReadmore({ ...readmore, overview: !readmore.overview })}
                      >
                        {!readmore.overview ? 'Read More' : 'Read Less'}
                      </Link>
                    </div>
                  )}
                </div>
                <div className="course-details-left-innerBox mb-5 text-center">
                  <h2 className="imgText-heading mb-4">{`${collegeDetailsById?.basicDetails?.college_name} Highlights ${getCurrentYear()}`}</h2>
                  <p className="imgText-para">
                    {collegeDetailsById?.descriptionDetails?.college_highlights_description.length > 300 &&
                    readmore.highlightDescription === false
                      ? `${collegeDetailsById?.descriptionDetails?.college_highlights_description.slice(0, 300)}...`
                      : collegeDetailsById?.descriptionDetails?.college_highlights_description}
                  </p>
                  {collegeDetailsById?.descriptionDetails?.college_highlights_description.length > 300 && (
                    <div className="text-center">
                      <Link
                        className="theme-btn green-btn"
                        onClick={() =>
                          setReadmore({ ...readmore, highlightDescription: !readmore.highlightDescription })
                        }
                      >
                        {!readmore.highlightDescription ? 'Read More' : 'Read Less'}
                      </Link>
                    </div>
                  )}
                </div>
                <div className="tick-heading d-flex align-items-center mb-4">
                  <span className="tick-heading-icon d-inline-flex">
                    <img src={greyTickIcon} alt="" />
                  </span>
                  <h2>{`${collegeDetailsById?.basicDetails?.college_name} Top Courses & Fees`}</h2>
                </div>
                <div className="exam-details-hightlisghts-sec mt-5">
                  <div className="exam-details-hightlights-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>
                            <p>Courses</p>
                          </th>
                          <th>
                            <p>Annual Course Fees</p>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {collegeDetailsById?.highlightsDetails.length > 0 &&
                          dataToMap(collegeDetailsById?.highlightsDetails).map((college) => (
                            <tr>
                              <td>
                                {college?.course_name.split('-')[0].trim()}{' '}
                                <span className="d-block">{college?.course_name.split('-')[1].trim()}</span>
                              </td>
                              <td>₹ {college?.fees_annually}</td>
                              <td className="position-relative">
                                <Link
                                  className="management-clg-applybtn clginfo-applybtn"
                                  onClick={() => dispatch(toggelIsLoginPopup({ flag: true }))}
                                >
                                  Apply Now
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {collegeDetailsById?.highlightsDetails.length > 4 && (
                    <div className="text-start mt-5">
                      <Link
                        className="course-details-readmore-btn btn"
                        onClick={() => setReadmore({ ...readmore, highlightCourses: !readmore.highlightCourses })}
                      >
                        {!readmore.highlightCourses ? 'Read More' : 'Read Less'}
                      </Link>
                    </div>
                  )}
                </div>
                <div className="course-details-left-innerBox mb-5 text-center">
                  <h2 className="imgText-heading mb-4">{`${collegeDetailsById?.basicDetails?.college_name} Courses & Fees`}</h2>
                  <p className="imgText-para">{collegeDetailsById?.descriptionDetails?.college_course_description}</p>
                </div>
                <div className="exam-details-hightlisghts-sec mt-5">
                  <h5 className="mb-3">
                    <strong>{`${collegeDetailsById?.basicDetails?.college_name} Fees and Course List`}</strong>
                  </h5>
                  <div className="exam-details-hightlights-table">
                    <table className="table">
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
                        {collegeDetailsById?.courseOfferedDetails.length > 0 &&
                          dataToMap(collegeDetailsById?.courseOfferedDetails).map((course) => (
                            <tr>
                              <td>{course?.course_name}</td>
                              <td>{`Rs ${course?.sub_course_fee}`}</td>
                              <td>10+2: 45%</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {collegeDetailsById?.highlightsDetails.length > 4 && (
                    <div className="text-start mt-5">
                      <Link
                        className="course-details-readmore-btn btn"
                        onClick={() => setReadmore({ ...readmore, allCourses: !readmore.allCourses })}
                      >
                        {!readmore.allCourses ? 'Read More' : 'Read Less'}
                      </Link>
                    </div>
                  )}

                  {/* <h5 className="mb-3 mt-5"><strong>IIT Chennai University Fees and Course List</strong></h5>
                        <div className="exam-details-hightlights-table">
                           <table className="table">
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
                        <div className="text-start mt-5">
                           <Link className="course-details-readmore-btn btn">Read More</Link>
                        </div> */}
                </div>
                <div className="tick-heading d-flex align-items-center mb-4">
                  <span className="tick-heading-icon d-inline-flex">
                    <img src={greyTickIcon} alt="" />
                  </span>
                  <h2>{`${collegeDetailsById?.basicDetails?.college_name} Admission ${getCurrentYear()}`}</h2>
                </div>
                <div className="clg-location-infograybx mb-5">
                  <p>{collegeDetailsById?.descriptionDetails?.college_admission_description}</p>
                  <div className="text-start mt-3">
                    <Link className="course-details-readmore-btn btn text-white">Read More</Link>
                  </div>
                </div>
                {/* <div className="course-details-left-innerBox my-5 text-center">
                        <h2 className="imgText-heading mb-4">IIT Chennai Ranking</h2>
                        <p className="imgText-para">IIT Chennai University ranking for 2023 is 145 out of 246 in India as per India Today’s B.Tech Survey. Moreover, the university has also been ranked 64th in the engineering category by the Times of India Ranking Survey 2023. Various other rankings obtained by the university are mentioned below..</p>
                        <div className="row align-items-center today-ranking-info">
                           <div className="col-md-4 text-end">
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
                           <div className="col-md-4 text-center">
                              <img src={rankingIcon} className="p-3" alt="" />
                           </div>
                           <div className="col-md-4 text-start">
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
                {/* <div className="course-details-alterImgbox d-flex align-items-center">
                        <div className="course-details-alterImgbox-col1 green-bg">
                           <h2 className="text-white">Worried About College <span>Guidance?</span></h2>
                           <p>Convert your Upfront Fees in to Simple, Convenient & Affordable EMIs</p>
                           <Link className="theme-btn white-btn">Apply For Education Loan</Link>
                        </div>
                        <div className="course-details-alterImgbox-col2 position-relative">
                           <img src={cdIcon} alt="" />
                        </div>
                     </div>
                     <div className="clg-facilities-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
                        <h2 className="section-heading2 grey text-center mb-5">IIT Chennai Facilities</h2>
                        <div className="swiper clg-facilities-slider">
                           <div className="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={".clg-facilities-button-next"} navigationPrev={".clg-facilities-button-prev"} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Auditorium</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-facilities-box position-relative">
                                          <img src={hostelIcon} alt="" />
                                          <p>Boys Hostel</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-facilities-box position-relative">
                                          <img src={canteenIcon} alt="" />
                                          <p>Canteen</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Computer Lab</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Counselling</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-facilities-box position-relative">
                                          <img src={audienceIcon} alt="" />
                                          <p>Auditorium</p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                              </CustomSwiper>
                              <div className="swiper-button-prev clg-facilities-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div className="swiper-button-next clg-facilities-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="course-details-alterImgbox d-flex align-items-center mt-5 pt-5">
                        <div className="course-details-alterImgbox-col2 position-relative">
                           <img src={cdIcon} alt="" />
                        </div>
                        <div className="course-details-alterImgbox-col1 green-bg">
                           <h2 className="text-white">Are you feeling lost and unsure about what <span>career path to take after completing 12th standard?</span></h2>
                           <p>Say goodbye to confusion and hello to a bright future!</p>
                           <Link className="theme-btn white-btn">Take the  free test now</Link>
                        </div>
                     </div>
                     <div className="py-5 mt-4">
                        <div className="row align-items-center">
                           <div className="col-md-5">
                              <h1 className="exam-center-calenderTxt1 text-center">Will you get 
                                 <span>Admission in IIT Chennai University?</span>
                              </h1>
                           </div>
                           <div className="col-md-2 text-center">
                              <img src={yellowCircleIcon} alt="" />
                           </div>
                           <div className="col-md-5 text-center">
                              <h1 className="exam-center-calenderTxt">Goodbye doubts! 
                                 Say hello to our experts
                              </h1>
                              <Link className="theme-btn black-btn">Ask A Question</Link>
                           </div>
                        </div>
                     </div>
                     <div className="successfull-almni-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
                        <h2 className="section-heading2 grey text-center mb-5">Successful Alumni</h2>
                        <div className="swiper successfull-almni-slider">
                           <div className="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={".clg-alumni-button-next"} navigationPrev={".clg-alumni-button-prev"} isBreakPoint={true} breakPoint={swiperResponsive(responsive1)}>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                              </CustomSwiper>
                              <div className="swiper-button-prev clg-alumni-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div className="swiper-button-next clg-alumni-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tick-heading d-flex align-items-center mb-4">
                        <span className="tick-heading-icon d-inline-flex">
                        <img src={greyTickIcon} alt="" />
                        </span>
                        <h2>IIT Chennai University Faculty</h2>
                     </div>
                     <div className="mt-5">
                        <img src={studentFaculty} className="faculty-students-img d-block mx-auto" alt="" />
                     </div>
                     <div className="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                        <div className="swiper faculty-slider-slider">
                           <div className="swiper-wrapper">
                              <CustomSwiper navigationNext={'.clg-faculty-button-next'} navigationPrev={'.clg-faculty-button-prev'} noOfSlidesPerView={3} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="faculty-slider-box">
                                          <img src={facultImage1} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="faculty-slider-box">
                                          <img src={facultImage2} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="faculty-slider-box">
                                          <img src={facultImage3} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="faculty-slider-box">
                                          <img src={facultImage4} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="faculty-slider-box">
                                          <img src={facultImage1} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="faculty-slider-box">
                                          <img src={facultImage2} alt="" />
                                          <p>Prof.
                                             Bhaskar Ramamurthi
                                             Director
                                          </p>
                                       </div>
                                    </div>
                                 </swiper-slide>
                              </CustomSwiper>
                              <div className="swiper-button-prev clg-faculty-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div className="swiper-button-next clg-faculty-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>      
                           </div>
                        </div>
                        
                     </div>
                     <div className="row justify-content-center mb-5">
                        <div className="col-9">
                           <div className="download-content-box text-center">
                              <img src={downloadIcon} className="mb-4" alt="" />
                              <h2 className="mb-4"><span className="d-block">Get details on</span> Fee, Cut off marks, Admission Process for session 2023.</h2>
                              <div className="d-flex justify-content-center gap-3 align-items-center download-btn-sec">
                                 <p>Download brochure</p>
                                 <Link className="theme-btn black-btn">Ask A Question</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="clg-specific-review-section mb-5">
                        <div className="row mb-4">
                           <div className="col-12">
                              <div className="tick-heading d-flex align-items-center mb-4">
                                 <span className="tick-heading-icon d-inline-flex">
                                 <img src={greyTickIcon} alt="" />
                                 </span>
                                 <h2>IIT Chennai University Reviews</h2>
                              </div>
                           </div>
                        </div>
                        <div className="row justify-content-between">
                           <div className="col-md-4">
                              <div className="clg-verified-review-box text-center">
                                 <p><img src={starFIcon} alt="" /> 4.6 <span>/5</span></p>
                                 <p><img src={verifiedGreenIcon} alt="" />50 Verified Review</p>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="reviews-count-progresbar">
                                 <div className="barWrapper d-flex align-items-center justify-content-end">
                                    <div className="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div className="progress">
                                       <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >   
                                          <span  className="popOver" data-toggle="tooltip" data-placement="top" title="4-5"> </span>     
                                       </div>
                                    </div>
                                    <p className="review-totaltxt ms-3">55</p>
                                 </div>
                                 <div className="barWrapper d-flex align-items-center justify-content-end">
                                    <div className="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div className="progress ">
                                       <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="10" aria-valuemax="100">
                                          <span  className="popOver" data-toggle="tooltip" data-placement="top" title="3-4"> </span>  
                                       </div>
                                    </div>
                                    <p className="review-totaltxt ms-3">44</p>
                                 </div>
                                 <div className="barWrapper d-flex align-items-center justify-content-end">
                                    <div className="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div className="progress">
                                       <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                          <span  className="popOver" data-toggle="tooltip" data-placement="top" title="1-3"> </span>  
                                       </div>
                                    </div>
                                    <p className="review-totaltxt ms-3">22</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row align-items-center justify-content-center mt-2">
                           <div className="col-4">
                              <p className="write-review-title">Help other aspirants by sharing your review of this college</p>
                           </div>
                           <div className="col-4">
                              <Link className="write-review-btn d-inline-block">Write a Review</Link>
                           </div>
                        </div>
                        <div className="row mt-4">
                           <div className="col-12">
                              <div className="accomodation-review-row d-flex flex-wrap justify-content-between">
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Academic</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Infrastructure</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Hostel</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Faculty</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Placement</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-12">
                              <h5 className="mt-5 mb-4">What students say about IIT Chennai University - Indian Institute of Management</h5>
                           </div>
                           <div className="col-12">


                              <ul className="nav nav-pills mb-3 review-tab-listing" id="pills-tab" role="tablist">
                                 <li className="nav-item" role="presentation">
                                    <button className="active position-relative" id="detailed-reviews-tab" data-bs-toggle="pill" data-bs-target="#detailed-reviews" type="button" role="tab" aria-controls="detailed-reviews" aria-selected="true">Detailed</button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                    <button className="position-relative" id="latest-reviews-tab" data-bs-toggle="pill" data-bs-target="#latest-reviews" type="button" role="tab" aria-controls="latest-reviews" aria-selected="false">Latest</button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                    <button className="position-relative" id="mosthelpful-reviews-tab" data-bs-toggle="pill" data-bs-target="#mosthelpful-reviews" type="button" role="tab" aria-controls="mosthelpful-reviews" aria-selected="false">Most Helpful</button>
                                 </li>
                              </ul>
                              <div className="tab-content" id="pills-tabContent">
                                 <div className="tab-pane fade show active" id="detailed-reviews" role="tabpanel" aria-labelledby="detailed-reviews-tab">
                                       <div className="clg-specific-postreview-box mb-4">
                                          <div className="row justify-content-between mb-4">
                                             <div className="col-4">
                                                <div className="d-flex">
                                                   <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      A
                                                   </div>
                                                   <p className="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div className="col-4 text-end">
                                                <div className="green-review-badge green-bg">
                                                   <img src={starFIcon} className="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                          <h4 className="reviewOverview-txt">Overview</h4>
                                          <p className="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link className="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center mt-5">
                                             <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div className="d-inline-flex">
                                                <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="clg-specific-postreview-box mb-4">
                                          <div className="row justify-content-between mb-4">
                                             <div className="col-4">
                                                <div className="d-flex">
                                                   <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      H
                                                   </div>
                                                   <p className="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div className="col-4 text-end">
                                                <div className="green-review-badge green-bg">
                                                   <img src={starFIcon} className="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                          <h4 className="reviewOverview-txt">Overview</h4>
                                          <p className="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link className="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center mt-5">
                                             <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div className="d-inline-flex">
                                                <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="clg-specific-postreview-box mb-4">
                                          <div className="row justify-content-between mb-4">
                                             <div className="col-4">
                                                <div className="d-flex">
                                                   <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      T
                                                   </div>
                                                   <p className="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div className="col-4 text-end">
                                                <div className="green-review-badge green-bg">
                                                   <img src={starFIcon} className="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                          <h4 className="reviewOverview-txt">Overview</h4>
                                          <p className="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link className="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center mt-5">
                                             <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div className="d-inline-flex">
                                                <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="clg-specific-postreview-box mb-4">
                                          <div className="row justify-content-between mb-4">
                                             <div className="col-4">
                                                <div className="d-flex">
                                                   <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      S
                                                   </div>
                                                   <p className="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div className="col-4 text-end">
                                                <div className="green-review-badge green-bg">
                                                   <img src={starFIcon} className="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                          <h4 className="reviewOverview-txt">Overview</h4>
                                          <p className="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link className="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center mt-5">
                                             <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div className="d-inline-flex">
                                                <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="tab-pane fade" id="latest-reviews" role="tabpanel" aria-labelledby="latest-reviews-tab">
                                    <div className="clg-specific-postreview-box mb-4">
                                       <div className="row justify-content-between mb-4">
                                          <div className="col-4">
                                             <div className="d-flex">
                                                <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   A
                                                </div>
                                                <p className="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div className="col-4 text-end">
                                             <div className="green-review-badge green-bg">
                                                <img src={starFIcon} className="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                       <h4 className="reviewOverview-txt">Overview</h4>
                                       <p className="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link className="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div className="d-flex justify-content-between align-items-center mt-5">
                                          <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div className="d-inline-flex">
                                             <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="clg-specific-postreview-box mb-4">
                                       <div className="row justify-content-between mb-4">
                                          <div className="col-4">
                                             <div className="d-flex">
                                                <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   H
                                                </div>
                                                <p className="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div className="col-4 text-end">
                                             <div className="green-review-badge green-bg">
                                                <img src={starFIcon} className="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                       <h4 className="reviewOverview-txt">Overview</h4>
                                       <p className="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link className="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div className="d-flex justify-content-between align-items-center mt-5">
                                          <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div className="d-inline-flex">
                                             <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="tab-pane fade" id="mosthelpful-reviews" role="tabpanel" aria-labelledby="mosthelpful-reviews-tab">
                                    <div className="clg-specific-postreview-box mb-4">
                                       <div className="row justify-content-between mb-4">
                                          <div className="col-4">
                                             <div className="d-flex">
                                                <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   A
                                                </div>
                                                <p className="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div className="col-4 text-end">
                                             <div className="green-review-badge green-bg">
                                                <img src={starFIcon} className="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                       <h4 className="reviewOverview-txt">Overview</h4>
                                       <p className="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link className="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div className="d-flex justify-content-between align-items-center mt-5">
                                          <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div className="d-inline-flex">
                                             <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>
                              
                              <div>
                                 <Link className="readallreview-gray-btn d-block text-center">Read All Reviews</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tick-heading d-flex align-items-center mb-4 mt-5">
                        <span className="tick-heading-icon d-inline-flex">
                        <img src={greyTickIcon} alt="" />
                        </span>
                        <h2>IIT Chennai Courses Offered</h2>
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <div className="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                              <div className="swiper course-offered-slider pb-5">
                                 <div className="swiper-wrapper">
                                    <CustomSwiper navigationNext={'.courseOffer-button-next'} navigationPrev={'.courseOffer-button-prev'} noOfSlidesPerView={3} isBreakPoint={true} breakPoint={swiperResponsive(responsive1)}>
                                       <swiper-slide>
                                          <div className="swiper-slide">
                                             <div className="card">
                                                <div className="top_review d-flex justify-content-end align-items-center">
                                                   <p className="review_count mb-0 me-2">724 Reviews</p>
                                                   <p className="rating mb-0 me-2">4.5</p>
                                                   <p className="like mb-0">
                                                      <img src={heartIcon} srcset={`${heartIcon} 1X , ${heartIcon2X} 2X`} alt="Heart" width="18" height="17" />
                                                   </p>
                                                </div>
                                                <div className="details">
                                                   <p className="details_name mb-0">Bachelor of Technology [B.Tech]</p>
                                                   <p className="details_price mb-0">₹ 200,500 <span>1st Yr Fees</span></p>
                                                   <p className="details_review mb-0 d-flex align-items-center">
                                                      4.5/724 Reviews
                                                      <span className="ms-2">
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={blankStarIcon} srcset={`${blankStarIcon} 1X , ${blankStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      </span>
                                                   </p>
                                                   <p className="details_rating mb-0">Rated #3 out of 131 by The Week in Engineering</p>
                                                   <div className="badge_group">
                                                      <div className="badge rounded-0 text-center text-uppercase">4 YEARS</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">DEGREE</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">ON CAMPUS</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">GRADUATION</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">FULL TIME</div>
                                                   </div>
                                                </div>
                                                <div className="details_tab">
                                                   <ul className="nav nav-tabs" role="tablist">
                                                      <li className="nav-item">
                                                         <Link className="nav-link active" data-bs-toggle="tab" href="#specialization">Specialization</Link>
                                                      </li>
                                                      <li className="nav-item">
                                                         <Link className="nav-link" data-bs-toggle="tab" href="#cutoff">Cutoff</Link>
                                                      </li>
                                                      <li className="nav-item">
                                                         <Link className="nav-link" data-bs-toggle="tab" href="#examsAccepted">Exams Accepted</Link>
                                                      </li>
                                                   </ul>
                                                   <div className="tab-content">
                                                      <div id="specialization" className="container tab-pane active">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="cutoff" className="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="examsAccepted" className="container tab-pane fade">
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
                                                <div className="details_btn_group">
                                                   <div className="row">
                                                      <div className="col-6 pe-1">
                                                         <button type="button" className="details_btn text-center w-100">
                                                            Compare <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2x`} alt="Button Icon" width="22" height="18" />
                                                         </button>
                                                      </div>
                                                      <div className="col-6 ps-1">
                                                         <button type="button" className="details_btn text-center w-100">
                                                            Admission Predictor <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2x`} alt="Button Icon" width="18" height="14" />
                                                         </button>
                                                      </div>
                                                      <div className="col-6 pe-1">
                                                         <button type="button" className="details_btn active text-center w-100">
                                                            Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" />
                                                         </button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </swiper-slide>
                                       <swiper-slide>
                                          <div className="swiper-slide">
                                             <div className="card">
                                                <div className="top_review d-flex justify-content-end align-items-center">
                                                   <p className="review_count mb-0 me-2">724 Reviews</p>
                                                   <p className="rating mb-0 me-2">4.5</p>
                                                   <p className="like mb-0">
                                                      <img src={heartIcon} srcset={`${heartIcon} 1X , ${heartIcon2X} 2X`} alt="Heart" width="18" height="17" />
                                                   </p>
                                                </div>
                                                <div className="details">
                                                   <p className="details_name mb-0">Bachelor of Technology [B.Tech]</p>
                                                   <p className="details_price mb-0">₹ 200,500 <span>1st Yr Fees</span></p>
                                                   <p className="details_review mb-0 d-flex align-items-center">
                                                      4.5/724 Reviews
                                                      <span className="ms-2">
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={blankStarIcon} srcset={`${blankStarIcon} 1X , ${blankStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      </span>
                                                   </p>
                                                   <p className="details_rating mb-0">Rated #3 out of 131 by The Week in Engineering</p>
                                                   <div className="badge_group">
                                                      <div className="badge rounded-0 text-center text-uppercase">4 YEARS</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">DEGREE</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">ON CAMPUS</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">GRADUATION</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">FULL TIME</div>
                                                   </div>
                                                </div>
                                                <div className="details_tab">
                                                   <ul className="nav nav-tabs" role="tablist">
                                                      <li className="nav-item">
                                                         <Link className="nav-link active" data-bs-toggle="tab" href="#specialization">Specialization</Link>
                                                      </li>
                                                      <li className="nav-item">
                                                         <Link className="nav-link" data-bs-toggle="tab" href="#cutoff">Cutoff</Link>
                                                      </li>
                                                      <li className="nav-item">
                                                         <Link className="nav-link" data-bs-toggle="tab" href="#examsAccepted">Exams Accepted</Link>
                                                      </li>
                                                   </ul>
                                                   <div className="tab-content">
                                                      <div id="specialization" className="container tab-pane active">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="cutoff" className="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="examsAccepted" className="container tab-pane fade">
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
                                                <div className="details_btn_group">
                                                   <div className="row">
                                                      <div className="col-6 pe-1">
                                                         <button type="button" className="details_btn text-center w-100">
                                                            Compare <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2x`} alt="Button Icon" width="22" height="18" />
                                                         </button>
                                                      </div>
                                                      <div className="col-6 ps-1">
                                                         <button type="button" className="details_btn text-center w-100">
                                                            Admission Predictor <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2x`} alt="Button Icon" width="18" height="14" />
                                                         </button>
                                                      </div>
                                                      <div className="col-6 pe-1">
                                                         <button type="button" className="details_btn active text-center w-100">
                                                            Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" />
                                                         </button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </swiper-slide>
                                       <swiper-slide>
                                          <div className="swiper-slide">
                                             <div className="card">
                                                <div className="top_review d-flex justify-content-end align-items-center">
                                                   <p className="review_count mb-0 me-2">724 Reviews</p>
                                                   <p className="rating mb-0 me-2">4.5</p>
                                                   <p className="like mb-0">
                                                      <img src={heartIcon} srcset={`${heartIcon} 1X , ${heartIcon2X} 2X`} alt="Heart" width="18" height="17" />
                                                   </p>
                                                </div>
                                                <div className="details">
                                                   <p className="details_name mb-0">Bachelor of Technology [B.Tech]</p>
                                                   <p className="details_price mb-0">₹ 200,500 <span>1st Yr Fees</span></p>
                                                   <p className="details_review mb-0 d-flex align-items-center">
                                                      4.5/724 Reviews
                                                      <span className="ms-2">
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={filledStarIcon} srcset={`${filledStarIcon} 1X, ${filledStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      <img src={blankStarIcon} srcset={`${blankStarIcon} 1X , ${blankStarIcon2X} 2X`} alt="Rating Star" width="11" height="11" />
                                                      </span>
                                                   </p>
                                                   <p className="details_rating mb-0">Rated #3 out of 131 by The Week in Engineering</p>
                                                   <div className="badge_group">
                                                      <div className="badge rounded-0 text-center text-uppercase">4 YEARS</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">DEGREE</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">ON CAMPUS</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">GRADUATION</div>
                                                      <div className="badge rounded-0 text-center text-uppercase">FULL TIME</div>
                                                   </div>
                                                </div>
                                                <div className="details_tab">
                                                   <ul className="nav nav-tabs" role="tablist">
                                                      <li className="nav-item">
                                                         <Link className="nav-link active" data-bs-toggle="tab" href="#specialization">Specialization</Link>
                                                      </li>
                                                      <li className="nav-item">
                                                         <Link className="nav-link" data-bs-toggle="tab" href="#cutoff">Cutoff</Link>
                                                      </li>
                                                      <li className="nav-item">
                                                         <Link className="nav-link" data-bs-toggle="tab" href="#examsAccepted">Exams Accepted</Link>
                                                      </li>
                                                   </ul>
                                                   <div className="tab-content">
                                                      <div id="specialization" className="container tab-pane active">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="cutoff" className="container tab-pane fade">
                                                         <ul>
                                                            <li>Computer Science and Engineering</li>
                                                            <li>Aerospace Engineering</li>
                                                            <li>Electrical Engineering</li>
                                                            <li>Mechanical Engineering</li>
                                                            <li>+6 More</li>
                                                         </ul>
                                                      </div>
                                                      <div id="examsAccepted" className="container tab-pane fade">
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
                                                <div className="details_btn_group">
                                                   <div className="row">
                                                      <div className="col-6 pe-1">
                                                         <button type="button" className="details_btn text-center w-100">
                                                            Compare <img src={iconOneImage} srcset={`${iconOneImage} 1X, ${iconOneImage2X} 2X`} alt="Button Icon" width="22" height="18" />
                                                         </button>
                                                      </div>
                                                      <div className="col-6 ps-1">
                                                         <button type="button" className="details_btn text-center w-100">
                                                            Admission Predictor <img src={iconTwoImage} srcset={`${iconTwoImage} 1X, ${iconTwoImage2X} 2X`} alt="Button Icon" width="18" height="14" />
                                                         </button>
                                                      </div>
                                                      <div className="col-6 pe-1">
                                                         <button type="button" className="details_btn active text-center w-100">
                                                            Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" />
                                                         </button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </swiper-slide>
                                    </CustomSwiper>
                                    <div className="swiper-button-prev courseOffer-button-prev">
                                       <img src={arrowLeftIcon} alt="" />
                                    </div>
                                    <div className="swiper-button-next courseOffer-button-next">
                                       <img src={arrowRightIcon} alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="course-details-alterImgbox d-flex align-items-center">
                        <div className="course-details-alterImgbox-col1 green-bg">
                           <h2 className="text-white">Still have questions about <span>IIT Chennai University?</span></h2>
                           <p>Ask us and get personalized</p>
                           <Link className="theme-btn white-btn">Ask A Question</Link>
                        </div>
                        <div className="course-details-alterImgbox-col2 position-relative">
                           <img src={askQuesImage} alt="" />
                        </div>
                     </div>

                     <div className="clg-slider-wrapper position-relative">
                        <div className="tick-heading d-flex align-items-center mb-4">
                            <span className="tick-heading-icon d-inline-flex">
                                <img src={greyTickIcon} alt="" />
                            </span>
                            <h2>Recommended Colleges</h2>
                        </div>
                        <div className="swiper recommended-clg-slider pb-5">
                            <div className="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={'.clg-button-next'} navigationPrev={'.clg-button-prev'} noOfSlidesPerView={3} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                          <div className="clg-slider-box position-relative">
                                             <div className="recommended-clg-sliderbx">
                                                <div className="d-flex justify-content-between">
                                                   <img src={logoSliderImage} className="clg-slider-logo" alt="" />
                                                   <div className="recommended-clg-rating text-center">
                                                      <p className="mb-0">4.8</p>
                                                      <span className="d-flex align-items-center justify-content-center gap-1">
                                                         <img src={starFIcon} alt="" />
                                                         <img src={starFIcon} alt="" />
                                                         <img src={starFIcon} alt="" />
                                                         <img src={starFIcon} alt="" />
                                                         <img src={starFIcon} alt="" />
                                                      </span>
                                                   </div>
                                                </div>
                                                <p className="recommended-clg-name mb-2">IIM Bangalore - Indian Institute of Management</p>
                                                <p className="recommended-clg-location">Bangalore <span>#2 NIRF</span></p>
                                                <p className="course-offer-badge d-flex justify-content-between align-items-center">
                                                   <span>Courses Offered</span>
                                                   <span className="text-end">4 courses</span>
                                                </p>
                                                <p className="total-price-range d-flex justify-content-between align-items-center">
                                                   <span>Total Fees Range</span>
                                                   <span className="text-end">₹12.5 L - 24.5 L</span>
                                                </p>
                                             </div>

                                             <Link className="apply-btn position-absolute px-3">Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" /></Link>
                                          </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-slider-box position-relative">
                                          <div className="recommended-clg-sliderbx">
                                             <div className="d-flex justify-content-between">
                                                <img src={logoSliderImage} className="clg-slider-logo" alt="" />
                                                <div className="recommended-clg-rating text-center">
                                                   <p className="mb-0">4.8</p>
                                                   <span className="d-flex align-items-center justify-content-center gap-1">
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                   </span>
                                                </div>
                                             </div>
                                             <p className="recommended-clg-name mb-2">IIM Bangalore - Indian Institute of Management</p>
                                             <p className="recommended-clg-location">Bangalore <span>#2 NIRF</span></p>
                                             <p className="course-offer-badge d-flex justify-content-between align-items-center">
                                                <span>Courses Offered</span>
                                                <span className="text-end">4 courses</span>
                                             </p>
                                             <p className="total-price-range d-flex justify-content-between align-items-center">
                                                <span>Total Fees Range</span>
                                                <span className="text-end">₹12.5 L - 24.5 L</span>
                                             </p>
                                          </div>

                                          <Link className="apply-btn position-absolute px-3">Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" /></Link>
                                       </div>
                                 </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-slider-box position-relative">
                                          <div className="recommended-clg-sliderbx">
                                             <div className="d-flex justify-content-between">
                                                <img src={logoSliderImage} className="clg-slider-logo" alt="" />
                                                <div className="recommended-clg-rating text-center">
                                                   <p className="mb-0">4.8</p>
                                                   <span className="d-flex align-items-center justify-content-center gap-1">
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                   </span>
                                                </div>
                                             </div>
                                             <p className="recommended-clg-name mb-2">IIM Bangalore - Indian Institute of Management</p>
                                             <p className="recommended-clg-location">Bangalore <span>#2 NIRF</span></p>
                                             <p className="course-offer-badge d-flex justify-content-between align-items-center">
                                                <span>Courses Offered</span>
                                                <span className="text-end">4 courses</span>
                                             </p>
                                             <p className="total-price-range d-flex justify-content-between align-items-center">
                                                <span>Total Fees Range</span>
                                                <span className="text-end">₹12.5 L - 24.5 L</span>
                                             </p>
                                          </div>

                                          <Link className="apply-btn position-absolute px-3">Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" /></Link>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="clg-slider-box position-relative">
                                          <div className="recommended-clg-sliderbx">
                                             <div className="d-flex justify-content-between">
                                                <img src={logoSliderImage} className="clg-slider-logo" alt="" />
                                                <div className="recommended-clg-rating text-center">
                                                   <p className="mb-0">4.8</p>
                                                   <span className="d-flex align-items-center justify-content-center gap-1">
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                      <img src={starFIcon} alt="" />
                                                   </span>
                                                </div>
                                             </div>
                                             <p className="recommended-clg-name mb-2">IIM Bangalore - Indian Institute of Management</p>
                                             <p className="recommended-clg-location">Bangalore <span>#2 NIRF</span></p>
                                             <p className="course-offer-badge d-flex justify-content-between align-items-center">
                                                <span>Courses Offered</span>
                                                <span className="text-end">4 courses</span>
                                             </p>
                                             <p className="total-price-range d-flex justify-content-between align-items-center">
                                                <span>Total Fees Range</span>
                                                <span className="text-end">₹12.5 L - 24.5 L</span>
                                             </p>
                                          </div>

                                          <Link className="apply-btn position-absolute px-3">Download brochure <img src={iconThreeImage} srcset={`${iconThreeImage} 1X, ${iconThreeImage2X} 2X`} alt="Button Icon" width="16" height="18" /></Link>
                                       </div>
                                    </div>
                                 </swiper-slide>
                              </CustomSwiper>
                              <div className="swiper-button-prev clg-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div className="swiper-button-next clg-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div> */}
                <div className="course-details-alterImgbox d-flex align-items-center">
                  <div className="course-details-alterImgbox-col1 green-bg">
                    <h2 className="text-white">
                      Worried About College <span>Guidance?</span>
                    </h2>
                    <p>Convert your Upfront Fees in to Simple, Convenient & Affordable EMIs</p>
                    <Link className="theme-btn white-btn">Ask Our Experts</Link>
                  </div>
                  <div className="course-details-alterImgbox-col2 position-relative">
                    <img src={cdIcon} alt="" />
                  </div>
                </div>
                <div className="clg-facilities-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
                  <h2 className="section-heading2 grey text-center mb-5">IIT Chennai Facilities</h2>
                  <div className="swiper clg-facilities-slider">
                    <div className="swiper-wrapper position-relative">
                      <CustomSwiper
                        navigationNext={'.clg-facilities-button-next'}
                        navigationPrev={'.clg-facilities-button-prev'}
                        isBreakPoint={true}
                        breakPoint={swiperResponsive(responsive)}
                      >
                        <swiper-slide>
                          <div className="swiper-slide">
                            <div className="clg-facilities-box position-relative">
                              <img src={audienceIcon} alt="" />
                              <p>Auditorium</p>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div className="swiper-slide">
                            <div className="clg-facilities-box position-relative">
                              <img src={hostelIcon} alt="" />
                              <p>Boys Hostel</p>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div className="swiper-slide">
                            <div className="clg-facilities-box position-relative">
                              <img src={canteenIcon} alt="" />
                              <p>Canteen</p>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div className="swiper-slide">
                            <div className="clg-facilities-box position-relative">
                              <img src={audienceIcon} alt="" />
                              <p>Computer Lab</p>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div className="swiper-slide">
                            <div className="clg-facilities-box position-relative">
                              <img src={audienceIcon} alt="" />
                              <p>Counselling</p>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div className="swiper-slide">
                            <div className="clg-facilities-box position-relative">
                              <img src={audienceIcon} alt="" />
                              <p>Auditorium</p>
                            </div>
                          </div>
                        </swiper-slide>
                      </CustomSwiper>
                      <div className="swiper-button-prev clg-facilities-button-prev">
                        <img src={arrowLeftIcon} alt="" />
                      </div>
                      <div className="swiper-button-next clg-facilities-button-next">
                        <img src={arrowRightIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-details-alterImgbox d-flex align-items-center mt-5 pt-5">
                  <div className="course-details-alterImgbox-col2 position-relative">
                    <img src={cdIcon} alt="" />
                  </div>
                  <div className="course-details-alterImgbox-col1 green-bg">
                    <h2 className="text-white">
                      Are you feeling lost and unsure about what{' '}
                      <span>career path to take after completing 12th standard?</span>
                    </h2>
                    <p>Say goodbye to confusion and hello to a bright future!</p>
                    <Link className="theme-btn white-btn">Ask Our Experts</Link>
                  </div>
                </div>
                <div className="py-5 mt-4">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <h1 className="exam-center-calenderTxt1 text-center">
                        Will you get
                        <span>{` Admission in ${collegeDetailsById?.basicDetails?.college_name}`}</span>
                      </h1>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src={yellowCircleIcon} alt="" />
                    </div>
                    <div className="col-md-5 text-center">
                      <h1 className="exam-center-calenderTxt">Goodbye doubts! Say hello to our experts</h1>
                      <Link className="theme-btn black-btn">Ask A Question</Link>
                    </div>
                  </div>
                </div>
                {/* <div className="successfull-almni-slider-wrapper position-relative px-4 pt-5 mt-5 mb-5">
                        <h2 className="section-heading2 grey text-center mb-5">Successful Alumni</h2>
                        <div className="swiper successfull-almni-slider">
                           <div className="swiper-wrapper position-relative">
                              <CustomSwiper navigationNext={".clg-alumni-button-next"} navigationPrev={".clg-alumni-button-prev"} isBreakPoint={true} breakPoint={swiperResponsive(responsive1)}>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon1} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                                 <swiper-slide>
                                    <div className="swiper-slide">
                                       <div className="successfull-almni-box d-flex">
                                          <div className="successfull-almni-infobx text-start">
                                             <p className="successfull-almni-name">Mr. Raju Venkatraman</p>
                                             <p className="successfull-almni-qualif">1981/B. Tech/Chemical Engineering</p>
                                             <p className="successfull-almni-designation">Managing Director and CEO @ MEDall Healthcare Pvt Ltd. </p>
                                          </div>
                                          <div className="successfull-almni-imgbx">
                                             <img src={alumniManIcon2} alt="" />
                                          </div>
                                       </div>
                                    </div>      
                                 </swiper-slide>
                              </CustomSwiper>
                              <div className="swiper-button-prev clg-alumni-button-prev">
                                 <img src={arrowLeftIcon} alt="" />
                              </div>
                              <div className="swiper-button-next clg-alumni-button-next">
                                 <img src={arrowRightIcon} alt="" />
                              </div>
                           </div>
                        </div>
                     </div> */}
                <div className="tick-heading d-flex align-items-center mb-4">
                  <span className="tick-heading-icon d-inline-flex">
                    <img src={greyTickIcon} alt="" />
                  </span>
                  <h2>{`${collegeDetailsById?.basicDetails?.college_name} Faculty`}</h2>
                </div>
                {/* <div className="mt-5">
                        <img src={studentFaculty} className="faculty-students-img d-block mx-auto" alt="" />
                     </div> */}
                <div className="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                  <div className="swiper faculty-slider-slider">
                    <div className="swiper-wrapper">
                      <CustomSwiper
                        navigationNext={'.clg-faculty-button-next'}
                        navigationPrev={'.clg-faculty-button-prev'}
                        noOfSlidesPerView={3}
                        isBreakPoint={true}
                        breakPoint={swiperResponsive(responsive)}
                      >
                        {collegeDetailsById?.facilitiesDetails?.faculty_name &&
                          collegeDetailsById?.facilitiesDetails?.faculty_name.split(',').map((faculty) => (
                            <swiper-slide>
                              <div className="swiper-slide">
                                <div className="faculty-slider-box">
                                  <img className="faculty-slider-box-img" src={avtar} alt="" />
                                  <p>
                                    {`Prof. ${faculty.split('-')[0]}`}
                                    <br />
                                    <span>{`Dept. ${faculty.split('-')[1]}`}</span>
                                  </p>
                                </div>
                              </div>
                            </swiper-slide>
                          ))}
                      </CustomSwiper>
                      <div className="swiper-button-prev clg-faculty-button-prev">
                        <img src={arrowLeftIcon} alt="" />
                      </div>
                      <div className="swiper-button-next clg-faculty-button-next">
                        <img src={arrowRightIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mb-5">
                  <div className="col-9">
                    <div className="download-content-box text-center">
                      <img src={downloadIcon} className="mb-4" alt="" />
                      <h2 className="mb-4">
                        <span className="d-block">Get details on</span>{' '}
                        {`Fee, Cut off marks, Admission Process for session ${getCurrentYear()}.`}
                      </h2>
                      <div className="d-flex justify-content-center gap-3 align-items-center download-btn-sec">
                        <p>Download brochure</p>
                        <Link className="theme-btn black-btn">Ask A Question</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="clg-specific-review-section mb-5">
                        <div className="row mb-4">
                           <div className="col-12">
                              <div className="tick-heading d-flex align-items-center mb-4">
                                 <span className="tick-heading-icon d-inline-flex">
                                 <img src={greyTickIcon} alt="" />
                                 </span>
                                 <h2>IIT Chennai University Reviews</h2>
                              </div>
                           </div>
                        </div>
                        <div className="row justify-content-between">
                           <div className="col-md-4">
                              <div className="clg-verified-review-box text-center">
                                 <p><img src={starFIcon} alt="" /> 4.6 <span>/5</span></p>
                                 <p><img src={verifiedGreenIcon} alt="" />50 Verified Review</p>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="reviews-count-progresbar">
                                 <div className="barWrapper d-flex align-items-center justify-content-end">
                                    <div className="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div className="progresss2">
                                       <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >   
                                          <span  className="popOver" data-toggle="tooltip" data-placement="top" title="4-5"> </span>     
                                       </div>
                                    </div>
                                    <p className="review-totaltxt ms-3">55</p>
                                 </div>
                                 <div className="barWrapper d-flex align-items-center justify-content-end">
                                    <div className="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div className="progresss2 ">
                                       <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="10" aria-valuemax="100">
                                          <span  className="popOver" data-toggle="tooltip" data-placement="top" title="3-4"> </span>  
                                       </div>
                                    </div>
                                    <p className="review-totaltxt ms-3">44</p>
                                 </div>
                                 <div className="barWrapper d-flex align-items-center justify-content-end">
                                    <div className="reviews-star-grp d-inline-flex me-3">
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                       <img src={starFIcon} alt="" />
                                    </div>
                                    <div className="progresss2">
                                       <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                          <span  className="popOver" data-toggle="tooltip" data-placement="top" title="1-3"> </span>  
                                       </div>
                                    </div>
                                    <p className="review-totaltxt ms-3">22</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row align-items-center justify-content-center mt-2">
                           <div className="col-4">
                              <p className="write-review-title">Help other aspirants by sharing your review of this college</p>
                           </div>
                           <div className="col-4">
                              <Link className="write-review-btn d-inline-block">Write a Review</Link>
                           </div>
                        </div>
                        <div className="row mt-4">
                           <div className="col-12">
                              <div className="accomodation-review-row d-flex flex-wrap justify-content-between">
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Academic</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Infrastructure</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Hostel</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Faculty</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                                 <div className="accomodation-box d-flex">
                                    <img src={scollarshipIcon} className="accomodation-icon me-2" alt="" />
                                    <div className="accomodation-review-count">
                                       <p className="accomodation-title">Placement</p>
                                       <p className="accomodation-reviewtxt"><img src={starFIcon} alt="" /> 4.5</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-12">
                              <h5 className="mt-5 mb-4">What students say about IIT Chennai University - Indian Institute of Management</h5>
                           </div>
                           <div className="col-12">


                              <ul className="nav nav-pills mb-3 review-tab-listing" id="pills-tab" role="tablist">
                                 <li className="nav-item" role="presentation">
                                    <button className="active position-relative" id="detailed-reviews-tab" data-bs-toggle="pill" data-bs-target="#detailed-reviews" type="button" role="tab" aria-controls="detailed-reviews" aria-selected="true">Detailed</button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                    <button className="position-relative" id="latest-reviews-tab" data-bs-toggle="pill" data-bs-target="#latest-reviews" type="button" role="tab" aria-controls="latest-reviews" aria-selected="false">Latest</button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                    <button className="position-relative" id="mosthelpful-reviews-tab" data-bs-toggle="pill" data-bs-target="#mosthelpful-reviews" type="button" role="tab" aria-controls="mosthelpful-reviews" aria-selected="false">Most Helpful</button>
                                 </li>
                              </ul>
                              <div className="tab-content" id="pills-tabContent">
                                 <div className="tab-pane fade show active" id="detailed-reviews" role="tabpanel" aria-labelledby="detailed-reviews-tab">
                                       <div className="clg-specific-postreview-box mb-4">
                                          <div className="row justify-content-between mb-4">
                                             <div className="col-md-6 col-sm-8 col-lg-4">
                                                <div className="d-flex">
                                                   <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      A
                                                   </div>
                                                   <div>
                                                   <p className="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="col-4 text-end">
                                                <div className="green-review-badge green-bg">
                                                   <img src={starFIcon} className="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                          <h4 className="reviewOverview-txt">Overview</h4>
                                          <p className="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link className="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center mt-5">
                                             <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div className="d-inline-flex">
                                                <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="clg-specific-postreview-box mb-4">
                                          <div className="row justify-content-between mb-4">
                                             <div className="col-md-6 col-sm-8 col-lg-4">
                                                <div className="d-flex">
                                                   <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      H
                                                   </div>
                                                   <p className="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div className="col-4 text-end">
                                                <div className="green-review-badge green-bg">
                                                   <img src={starFIcon} className="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                          <h4 className="reviewOverview-txt">Overview</h4>
                                          <p className="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link className="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center mt-5">
                                             <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div className="d-inline-flex">
                                                <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="clg-specific-postreview-box mb-4">
                                          <div className="row justify-content-between mb-4">
                                             <div className="col-md-6 col-sm-8 col-lg-4">
                                                <div className="d-flex">
                                                   <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      T
                                                   </div>
                                                   <p className="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div className="col-4 text-end">
                                                <div className="green-review-badge green-bg">
                                                   <img src={starFIcon} className="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                          <h4 className="reviewOverview-txt">Overview</h4>
                                          <p className="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link className="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center mt-5">
                                             <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div className="d-inline-flex">
                                                <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="clg-specific-postreview-box mb-4">
                                          <div className="row justify-content-between mb-4">
                                             <div className="col-md-6 col-sm-8 col-lg-4">
                                                <div className="d-flex">
                                                   <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                      S
                                                   </div>
                                                   <p className="reviewer-fullname">
                                                      <span>7 years ago</span>
                                                      Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                      <span>M.Tech/M.E Student</span>
                                                   </p>
                                                </div>
                                             </div>
                                             <div className="col-4 text-end">
                                                <div className="green-review-badge green-bg">
                                                   <img src={starFIcon} className="me-2" alt="" />
                                                   5/5
                                                </div>
                                             </div>
                                          </div>
                                          <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                          <h4 className="reviewOverview-txt">Overview</h4>
                                          <p className="postreview-content">
                                             The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                             <Link className="read-review-link">Read Full Review</Link>
                                          </p>
                                          <div className="d-flex justify-content-between align-items-center mt-5">
                                             <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                             <div className="d-inline-flex">
                                                <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                                <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                             </div>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="tab-pane fade" id="latest-reviews" role="tabpanel" aria-labelledby="latest-reviews-tab">
                                    <div className="clg-specific-postreview-box mb-4">
                                       <div className="row justify-content-between mb-4">
                                          <div className="col-4">
                                             <div className="d-flex">
                                                <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   A
                                                </div>
                                                <p className="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div className="col-4 text-end">
                                             <div className="green-review-badge green-bg">
                                                <img src={starFIcon} className="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                       <h4 className="reviewOverview-txt">Overview</h4>
                                       <p className="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link className="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div className="d-flex justify-content-between align-items-center mt-5">
                                          <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div className="d-inline-flex">
                                             <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="clg-specific-postreview-box mb-4">
                                       <div className="row justify-content-between mb-4">
                                          <div className="col-4">
                                             <div className="d-flex">
                                                <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   H
                                                </div>
                                                <p className="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div className="col-4 text-end">
                                             <div className="green-review-badge green-bg">
                                                <img src={starFIcon} className="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                       <h4 className="reviewOverview-txt">Overview</h4>
                                       <p className="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link className="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div className="d-flex justify-content-between align-items-center mt-5">
                                          <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div className="d-inline-flex">
                                             <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="tab-pane fade" id="mosthelpful-reviews" role="tabpanel" aria-labelledby="mosthelpful-reviews-tab">
                                    <div className="clg-specific-postreview-box mb-4">
                                       <div className="row justify-content-between mb-4">
                                          <div className="col-4">
                                             <div className="d-flex">
                                                <div className="user-letter-circle d-inline-flex align-items-center justify-content-center me-2">
                                                   A
                                                </div>
                                                <p className="reviewer-fullname">
                                                   <span>7 years ago</span>
                                                   Abhijeet Dhal <img src={verifiedGreenIcon} alt="" />
                                                   <span>M.Tech/M.E Student</span>
                                                </p>
                                             </div>
                                          </div>
                                          <div className="col-4 text-end">
                                             <div className="green-review-badge green-bg">
                                                <img src={starFIcon} className="me-2" alt="" />
                                                5/5
                                             </div>
                                          </div>
                                       </div>
                                       <ul className="reviews-core-items d-flex flex-wrap gap-2">
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
                                       <h4 className="reviewOverview-txt">Overview</h4>
                                       <p className="postreview-content">
                                          The infrastructure and opportunities in IIT Madras is one of the best in India. Being situated in one of the metropolis of India (Chennai) certainly add to its benefit. Chennai is also known as a important automobiles, manufacturing, IT and transportation hub. Campus is a beautiful wooded area in...
                                          <Link className="read-review-link">Read Full Review</Link>
                                       </p>
                                       <div className="d-flex justify-content-between align-items-center mt-5">
                                          <p className="postreview-date">Reviewed on 18 Aug 2023</p>
                                          <div className="d-inline-flex">
                                             <span className="like-thumb-bx yellow-bg">4 <img src={likeThumbIcon} alt="" /></span>
                                             <span className="like-thumb-bx dislike-thumb-bx">0 <img src={dislikeThumbIcon} alt="" /></span>
                                          </div>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>
                              
                              <div>
                                 <Link className="readallreview-gray-btn d-block text-center">Read All Reviews</Link>
                              </div>
                           </div>
                        </div>
                     </div> */}
                <div className="tick-heading d-flex align-items-center mb-4 mt-5">
                  <span className="tick-heading-icon d-inline-flex">
                    <img src={greyTickIcon} alt="" />
                  </span>
                  <h2>{`${collegeDetailsById?.basicDetails?.college_name} Courses Offered`}</h2>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="faculty-slider-wrapper position-relative px-4 mt-4 mb-5">
                      <div className="swiper course-offered-slider pb-5">
                        <div className="swiper-wrapper">
                          <CustomSwiper
                            navigationNext={'.courseOffer-button-next'}
                            navigationPrev={'.courseOffer-button-prev'}
                            noOfSlidesPerView={1}
                            isBreakPoint={true}
                            breakPoint={swiperResponsive(responsive1)}
                          >
                            {collegeDetailsById?.courseOfferedDetails.length > 0 &&
                              getAllCourseDataById().map((course) => (
                                <swiper-slide>
                                  <CustomCourseCard course={course} isSwiper={true} />
                                </swiper-slide>
                              ))}
                          </CustomSwiper>
                          <div className="swiper-button-prev courseOffer-button-prev">
                            <img src={arrowLeftIcon} alt="" />
                          </div>
                          <div className="swiper-button-next courseOffer-button-next">
                            <img src={arrowRightIcon} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-details-alterImgbox d-flex align-items-center">
                  <div className="course-details-alterImgbox-col1 green-bg">
                    <h2 className="text-white">
                      Still have questions about <span>{`${collegeDetailsById?.basicDetails?.college_name}?`}</span>
                    </h2>
                    <p>Ask us and get personalized</p>
                    <Link className="theme-btn white-btn">Ask A Question</Link>
                  </div>
                  <div className="course-details-alterImgbox-col2 position-relative">
                    <img src={askQuesImage} alt="" />
                  </div>
                </div>

                <div className="clg-slider-wrapper position-relative">
                  <div className="tick-heading d-flex align-items-center mb-4">
                    <span className="tick-heading-icon d-inline-flex">
                      <img src={greyTickIcon} alt="" />
                    </span>
                    <h2>Recommended Colleges</h2>
                  </div>
                  <div className="swiper recommended-clg-slider pb-5">
                    <div className="swiper-wrapper position-relative">
                      <CustomSwiper
                        navigationNext={'.clg-button-next'}
                        navigationPrev={'.clg-button-prev'}
                        noOfSlidesPerView={1}
                        isBreakPoint={true}
                        breakPoint={swiperResponsive(responsive)}
                      >
                        {collegeDetailsById?.basicDetails?.city &&
                          getAllCollegesDataByCity().map((college) => (
                            <swiper-slide>
                              <CustomCollegeCard college={college} isSwiper={true} />
                            </swiper-slide>
                          ))}
                      </CustomSwiper>
                      <div className="swiper-button-prev clg-button-prev">
                        <img src={arrowLeftIcon} alt="" />
                      </div>
                      <div className="swiper-button-next clg-button-next">
                        <img src={arrowRightIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <aside id="courses_details_rightcol" className="courses-details-rightcol">
                <div className="courses-details-rightcol-grid">
                  <h2 className="courses-details-rightcol-grid-title">Photos</h2>
                  <div className="courses-details-rightcol-gridcontent clg-info-photo-innergrid">
                    <ul className="d-flex flex-wrap justify-content-between">
                      <li className="border-0">
                        <img src={clgInfoPhoto1} alt="" />
                      </li>
                      <li className="border-0">
                        <img src={clgInfoPhoto1} alt="" />
                      </li>
                      <li className="border-0">
                        <img src={clgInfoPhoto1} alt="" />
                      </li>
                      <li className="border-0">
                        <img src={clgInfoPhoto1} alt="" />
                      </li>
                      <li className="border-0">
                        <img src={clgInfoPhoto1} alt="" />
                      </li>
                      <li className="border-0">
                        <img src={clgInfoPhoto1} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
                <Link className="courses-details-rightcol-viewall-btn">View All</Link>

                {/* <div className="courses-details-rightcol-grid mt-5">
                        <h2 className="courses-details-rightcol-grid-title">Videos</h2>
                        <div className="courses-details-rightcol-gridcontent">
                           <ul className="d-flex flex-wrap justify-content-center">
                              <li className="border-0"><img src={clgInfoVideo1} alt="" /></li>
                              <li className="border-0"><img src={clgInfoVideo1} alt="" /></li>
                           </ul>
                        </div>
                     </div>
                     <Link className="courses-details-rightcol-viewall-btn">View All</Link> */}

                <div className="courses-details-rightcol-grid mt-5">
                  <h2 className="courses-details-rightcol-grid-title">Placement</h2>
                  <div className="courses-details-rightcol-gridcontent">
                    <ul className="clg-info-topcourse-list">
                      <li className="border-0 pb-0">
                        <p className="topcourse-avgfess mb-0">₹19,800,000</p>
                        <p className="clginfo-topcourse-title">Highest Package</p>
                      </li>
                      <li className="border-0 pb-0">
                        <p className="topcourse-avgfess mb-0">₹19,800,000</p>
                        <p className="clginfo-topcourse-title">Highest Package</p>
                      </li>
                    </ul>
                    <ul className="placement-company-logolist d-flex justify-content-between mt-3">
                      <li className="border-0">
                        <img src={companyLogo1} alt="" />
                      </li>
                      <li className="border-0">
                        <img src={companyLogo2} alt="" />
                      </li>
                      <li className="border-0">
                        <img src={companyLogo3} alt="" />
                      </li>
                      <li className="border-0">
                        <img src={companyLogo4} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
                <Link className="courses-details-rightcol-viewall-btn">View All</Link>

                {/* <div className="courses-details-rightcol-grid mt-5">
                        <h2 className="courses-details-rightcol-grid-title">Scholarship</h2>
                        <div className="courses-details-rightcol-gridcontent">
                           <p className="clg-info-scholarship-para mt-4">The university's authorities provide several kinds of scholarships to its students. The Haridwar University scholarship is offered to needy and meritorious students. Students can get to know more details regarding scholarship programs from the table below.</p>
                           <span className="clg-info-scholarship-badge green-bg d-inline-block px-3 py-1">Institute’s Scholarship</span>
                           <ul className="clg-info-scholarship-list">
                              <li className="border-0">Institute Merit-Cum Means Scholarship</li>
                              <li className="border-0">Institute Free studentship</li>
                              <li className="border-0">Institute National Prize</li>
                              <li className="border-0">Institute SC/ST Scholarship</li>
                              <li className="border-0">Indian Women’s Association at Bonn Scholarship</li>
                              <li className="border-0">Sri V Ranga Raju Memorial scholarship</li>
                              <li className="border-0">Kanchi Kamakoti Jagadguru Sri Chandrasekharendra Saraswathi Endowment Award</li>
                              <li className="border-0">More..</li>
                           </ul>
                           <div className="mt-4 mb-3">
                              <span className="clg-info-scholarship-badge green-bg d-inline-block px-3 py-1">Other Scholarships</span>
                           </div>
                           <div>
                              <span className="clg-info-scholarship-badge green-bg d-inline-block px-3 py-1">FAQs</span>
                           </div>
                        </div>
                     </div>
                     <Link className="courses-details-rightcol-viewall-btn">View All</Link> */}

                <div className="courses-details-rightcol-grid mt-5">
                  <h2 className="courses-details-rightcol-grid-title">Top Courses</h2>
                  <div className="courses-details-rightcol-gridcontent">
                    <ul className="clg-info-topcourse-list">
                      <li className="d-flex">
                        <div className="col-9">
                          <p className="clginfo-topcourse-title">B.Tech Computer Science Engineering</p>
                          <p className="topcourse-avgfess">AVG FEE - ₹204,263/Yr</p>
                        </div>
                        <div className="col-3">
                          <p className="topcourse-duration text-end">4 Years</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="col-9">
                          <p className="clginfo-topcourse-title">B.Tech Computer Science Engineering</p>
                          <p className="topcourse-avgfess">AVG FEE - ₹204,263/Yr</p>
                        </div>
                        <div className="col-3">
                          <p className="topcourse-duration text-end">4 Years</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="col-9">
                          <p className="clginfo-topcourse-title">B.Tech Computer Science Engineering</p>
                          <p className="topcourse-avgfess">AVG FEE - ₹204,263/Yr</p>
                        </div>
                        <div className="col-3">
                          <p className="topcourse-duration text-end">4 Years</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="col-9">
                          <p className="clginfo-topcourse-title">B.Tech Computer Science Engineering</p>
                          <p className="topcourse-avgfess">AVG FEE - ₹204,263/Yr</p>
                        </div>
                        <div className="col-3">
                          <p className="topcourse-duration text-end">4 Years</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link className="courses-details-rightcol-viewall-btn">View All</Link>

                {/* <div className="courses-details-rightcol-grid mt-5">
                        <h2 className="courses-details-rightcol-grid-title">Related News</h2>
                        <div className="courses-details-rightcol-gridcontent">
                           <div className="d-inline-flex gap-2 my-3">
                              <Link className="latest-news-badge">Latest</Link>
                              <Link className="popular-news-badge">Popular</Link>
                           </div>
                           <ul className="courses-details-rightcol-listing">
                              <li className="d-flex">
                                 <div className="related-news-postimg">
                                    <img src={relatedNews} alt="" />
                                 </div>
                                 <div className="related-news-postinfo">
                                    <p className="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <Link>Read More</Link> </p>
                                    <p className="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                 </div>
                              </li>
                              <li className="d-flex">
                                 <div className="related-news-postimg">
                                    <img src={relatedNews} alt="" />
                                 </div>
                                 <div className="related-news-postinfo">
                                    <p className="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <Link>Read More</Link> </p>
                                    <p className="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                 </div>
                              </li>
                              <li className="d-flex">
                                 <div className="related-news-postimg">
                                    <img src={relatedNews} alt="" />
                                 </div>
                                 <div className="related-news-postinfo">
                                    <p className="related-news-posttitle">How to Prepare Physics for JEE Mains 2024 - Expert Advice & Preparation.... <Link>Read More</Link> </p>
                                    <p className="related-news-postdate">Sept 20, 2023 | By: Someone</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <Link className="courses-details-rightcol-viewall-btn">View All</Link> */}

                <div className="courses-details-rightcol-grid mt-5">
                  <h2 className="courses-details-rightcol-grid-title">Notification</h2>
                  <div className="courses-details-rightcol-gridcontent">
                    <ul className="clg-info-noti-listing">
                      <li>
                        <img src={clgLogo3} alt="" />
                        Geetanjali Group of Colleges
                      </li>
                      <li>
                        <img src={clgLogo3} alt="" />
                        Indian Institute of Management Ahmedabad
                      </li>
                      <li>
                        <img src={clgLogo3} alt="" />
                        Biotechnology Engineering
                      </li>
                      <li>
                        <img src={clgLogo3} alt="" />
                        Industrial Design
                      </li>
                    </ul>
                  </div>
                </div>
                <Link className="courses-details-rightcol-viewall-btn">View All</Link>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
