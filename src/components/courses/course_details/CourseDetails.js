import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CourseDetailsBanner from './CourseDetailsBanner';

import greyTick from '../../../images/grey-tick.svg';
import cd from '../../../images/cd-img1.png';
import { useFetchCourseById } from '../../hooks/useFetchCourseById';
import { useDispatch, useSelector } from 'react-redux';
import { toggelIsContactUs, toggelIsLoginPopup } from '../../../features/commonSlice';
import { CustomCollegeCard } from '../../colleges/college_details/CustomCollegeCard';
import CustomFaq from '../../colleges/CustomFaq';
import CustomeCrousel, { CarouselSlides } from '../../../utils/Constants/custom-components/CustomeCrousel';
import Loader from '../../Loader/Loader';
import CourseOverview from './CourseDeatilsChild/CourseOverview';
import CourseSyllabus from './CourseDeatilsChild/CourseSyllbus';

export default function CourseDetails() {
  const [readmore, setReadmore] = useState({
    course_description: false,
    course_eligibility_criteria_description: false,
    syllabusDetails: false,
    course_placement_description: false,
  });

  const { course_id } = useParams();
  const { fetchCourse } = useFetchCourseById();
  const { courseDetailsById, allCollegeData } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const matchingColleges = useMemo(() => {
    if (!Array.isArray(allCollegeData) || !Array.isArray(courseDetailsById?.category_name)) {
      return [];
    }

    const data = allCollegeData.filter(
      (college) =>
        Array.isArray(college?.category_name) &&
        college.category_name.some((category) => courseDetailsById.category_name.includes(category))
    );

    return Array.isArray(data) ? data : [];
  }, [allCollegeData, courseDetailsById?.category_name]);

  const responsive = {
    1400: { itemsPerView: 4, spaceBetween: 20 },
    1200: { itemsPerView: 4, spaceBetween: 20 },
    992: { itemsPerView: 3, spaceBetween: 20 },
    768: { itemsPerView: 2, spaceBetween: 20 },
    576: { itemsPerView: 1, spaceBetween: 20 },
  };

  useEffect(() => {
    fetchCourse(course_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course_id]);

  if (!courseDetailsById || Object.keys(courseDetailsById).length === 0) {
    return <Loader />;
  }

  return (
    <>
      <CourseDetailsBanner />

      <section className="courses-details-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="course_details_leftBox" className="course-details-leftBox">
                <div className="course-details-leftBox-inner text-center">
                  <CourseOverview courseDetails={courseDetailsById} readmore={readmore} setReadmore={setReadmore} />
                  <CourseSyllabus courseDetails={courseDetailsById} readmore={readmore} setReadmore={setReadmore} />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="course-details-alterImgbox d-flex align-items-center">
                <div className="course-details-alterImgbox-col1 green-bg">
                  <h2 className="text-white">
                    Can’t find right <span className="course-details-span">Guidance?</span>
                  </h2>
                  <p>No Problem! Speak to our experts safely from your home.</p>
                  <Link className="theme-btn white-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>
                    Request a Call Back
                  </Link>
                </div>
                <div className="course-details-alterImgbox-col2 position-relative">
                  <img src={cd} alt="" />
                </div>
              </div>

              <div className="course-details-alterbox">
                <h2>Don't Miss Anything!</h2>
                <p>Subscribe now and get latest updates on college news, exam and much more.</p>
                <Link className="theme-btn green-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>Subscribe Now</Link>
              </div>

              <div className="course-details-alterbox greybg">
                <h2>
                  So, How do you <span>secure your job?</span>
                </h2>
                <p>Master employable skills under the mentorship of industry experts to become job ready.</p>
                <Link className="theme-btn yellow-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>
                  Job Assured
                </Link>
              </div>

              <div className="course-details-alterbox">
                <h2>
                  Still have questions about
                  <br />
                  {courseDetailsById?.course_name || 'this course'}?
                </h2>
                <p>Ask us and get personalized response free of cost.</p>
                <Link className="theme-btn green-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>
                  Ask A Question
                </Link>
              </div>

              <div className="course-details-alterbox greybg">
                <h2>
                  Will you get admission in{' '}
                  <span className="d-block">{courseDetailsById?.course_name || 'this course'}</span>
                </h2>
                <p>Goodbye doubts! Say hello to our experts</p>
                <Link className="theme-btn yellow-btn" onClick={() => dispatch(toggelIsContactUs({ flag: true }))}>
                  Job Assured
                </Link>
              </div>

              {Array.isArray(matchingColleges) && matchingColleges.length > 3 && (
                <div className="clg-slider-wrapper position-relative">
                  <div className="tick-heading d-flex align-items-center mb-4">
                    <span className="tick-heading-icon d-inline-flex">
                      <img src={greyTick} alt="" />
                    </span>
                    <h2>{`Top ${courseDetailsById?.course_categories?.[0] || 'related'} colleges in India`}</h2>
                  </div>
                  <div className="swiper clg-slider">
                    <div className="swiper-wrapper position-relative">
                      <CustomeCrousel
                        navigatePrev={'ind-clg-button-prev'}
                        navigateNext={'ind-clg-button-next'}
                        itemsPerView={1}
                        isAutoScroll={true}
                        breakPoints={responsive}
                        animation={'Card-Zoom-Effect'}
                        autoScrollPauseOnMouseEnter={true}
                      >
                        {matchingColleges.map((college, index) => (
                          <CarouselSlides key={index}>
                            <CustomCollegeCard college={college} />
                          </CarouselSlides>
                        ))}
                      </CustomeCrousel>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CustomFaq />
    </>
  );
}
