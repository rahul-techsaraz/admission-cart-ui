import React, { useEffect, useState } from 'react';
import './collegedetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollegeBannerSection from './CollegeBannerSection';
import MenucSection from './MenucSection';
import CollegeNewsSection from './CollegeChildComponent/CollegeNewsSection';
import CourseOfferedByCollage from './CollegeChildComponent/CourseOfferedByCollage';
import CollegeFacilities from './CollegeChildComponent/CollegeFacilities';
import CollageAdmissionProcess from './CollegeChildComponent/CollageAdmissionProcess';
import RecommendedCollege from './CollegeChildComponent/RecommendedCollege';

import { useFetchCollegeById } from '../../hooks/useFetchCollegeById';
import { toggelIsLoginPopup } from '../../../features/commonSlice';
import Loader from '../../Loader/Loader';

import whatsIcon from '../../../images/whatsnew-cal-icon.svg';
import arrowLeftIcon from '../../../images/arrow-left-icon.svg';
import arrowRightIcon from '../../../images/arrow-right-icon.svg';
import greyTickIcon from '../../../images/grey-tick.svg';
import cdIcon from '../../../images/cd-img1.png';
import audienceIcon from '../../../images/audience-icon.svg';
import hostelIcon from '../../../images/hostel-icon.svg';
import canteenIcon from '../../../images/canteen-icon.svg';
import yellowCircleIcon from '../../../images/yellow-circle-calender1.png';
import downloadIcon from '../../../images/download-icon.svg';
import askQuesImage from '../../../images/ask-ques-img.png';
import avtar from '../../../images/profile-Avtar.jpg';

import { swiperResponsive } from '../../../utils/Constants/swiperResponsive';
import constants from '../../../utils/Constants/constants';
import CollegeGallery from './CollegeChildComponent/CollegeGallery';
import PlacementSection from './CollegeChildComponent/PlacementSection';

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
  const { collegeDetailsById = {}, allCourseData = [], allCollegeData = [] } = useSelector((state) => state.common);

  useEffect(() => {
    if (college_id) fetchCollege(college_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [college_id]);

  const responsive = {
    1400: { slidesPerView: 3, spaceBetween: 50 },
    1024: { slidesPerView: 3, spaceBetween: 50 },
    768: { slidesPerView: 1, spaceBetween: 40 },
    576: { slidesPerView: 1, spaceBetween: 20 },
  };

  const getCurrentYear = () => new Date().getFullYear();

  const getHighlightedCourses = () =>
    collegeDetailsById?.courses_offered?.filter((course) => course?.isHighlighted) ?? [];

  const getAllCourseDataById = () => {
    const courseIds = collegeDetailsById?.courses_offered?.map((v) => v.course_id) ?? [];
    return allCourseData.filter((course) => courseIds.includes(course.course_id));
  };

  const getAllCollegesDataByCity = () => {
    const currentCity = collegeDetailsById?.city;
    const currentName = collegeDetailsById?.college_name;
    return allCollegeData?.filter((clg) => clg?.city === currentCity && clg?.college_name !== currentName) ?? [];
  };

  if (!collegeDetailsById || Object.keys(collegeDetailsById).length === 0) {
    return <Loader />;
  }

  return (
    <>
      <CollegeBannerSection />

      <section className="exam-details-section section-padding">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-8">
              <div className="colg-examinfo-leftcol">
                <CollegeNewsSection
                 readmore={readmore}
                  setReadmore={setReadmore}
                  getCurrentYear={getCurrentYear}
                  collegeDetails={collegeDetailsById}
                  whatsIcon={whatsIcon}
                  responsive={responsive}
                  swiperResponsive={swiperResponsive}
                  arrowLeftIcon={arrowLeftIcon}
                  arrowRightIcon={arrowRightIcon}
                />

                {/* <CourseOfferedByCollage
                  collegeDetails={collegeDetailsById}
                  readmore={readmore}
                  setReadmore={setReadmore}
                  getCurrentYear={getCurrentYear}
                  greyTickIcon={greyTickIcon}
                  courseHighlight={getHighlightedCourses()}
                  handleLoginModalPopup={() => dispatch(toggelIsLoginPopup({ flag: true }))}
                  courseOffered={collegeDetailsById?.courses_offered ?? []}
                />

                <CollegeFacilities
                  collegeDetails={collegeDetailsById}
                  getCurrentYear={getCurrentYear}
                  swiperResponsive={swiperResponsive}
                  responsive={responsive}
                  audienceIcon={audienceIcon}
                  hostelIcon={hostelIcon}
                  arrowLeftIcon={arrowLeftIcon}
                  arrowRightIcon={arrowRightIcon}
                  cdIcon={cdIcon}
                  greyTickIcon={greyTickIcon}
                  canteenIcon={canteenIcon}
                  yellowCircleIcon={yellowCircleIcon}
                  avtar={avtar}
                  facultyData={collegeDetailsById?.faculty_data ?? []}
                />

                <CollageAdmissionProcess
                  collegeDetails={collegeDetailsById}
                  downloadIcon={downloadIcon}
                  getCurrentYear={getCurrentYear}
                  greyTickIcon={greyTickIcon}
                  responsive1={responsive}
                  swiperResponsive={swiperResponsive}
                  arrowLeftIcon={arrowLeftIcon}
                  arrowRightIcon={arrowRightIcon}
                  askQuesImage={askQuesImage}
                  getAllCourseDataById={getAllCourseDataById}
                  courseOffered={collegeDetailsById?.faculty_data ?? []}
                /> */}

                {getAllCollegesDataByCity().length > 0 && (
                  <RecommendedCollege
                    collegeDetails={collegeDetailsById}
                    greyTickIcon={greyTickIcon}
                    responsive={responsive}
                    swiperResponsive={swiperResponsive}
                    arrowLeftIcon={arrowLeftIcon}
                    arrowRightIcon={arrowRightIcon}
                    recommendedCollege={getAllCollegesDataByCity()}
                  />
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-md-4">
              <aside id="courses_details_rightcol" className="courses-details-rightcol">
                {/* Photos Section */}
                <CollegeGallery galleryImages={collegeDetailsById?.gallary} assetPath={constants.assestAbsolutePath} />

                {/* Placement Section */}
                <PlacementSection placementData={collegeDetailsById?.placement_data} />
              </aside>
            </div>
            <div className='col-md-12'>
   <CourseOfferedByCollage
                  collegeDetails={collegeDetailsById}
                  readmore={readmore}
                  setReadmore={setReadmore}
                  getCurrentYear={getCurrentYear}
                  greyTickIcon={greyTickIcon}
                  courseHighlight={getHighlightedCourses()}
                  handleLoginModalPopup={() => dispatch(toggelIsLoginPopup({ flag: true }))}
                  courseOffered={collegeDetailsById?.courses_offered ?? []}
                />

                <CollegeFacilities
                  collegeDetails={collegeDetailsById}
                  getCurrentYear={getCurrentYear}
                  swiperResponsive={swiperResponsive}
                  responsive={responsive}
                  audienceIcon={audienceIcon}
                  hostelIcon={hostelIcon}
                  arrowLeftIcon={arrowLeftIcon}
                  arrowRightIcon={arrowRightIcon}
                  cdIcon={cdIcon}
                  greyTickIcon={greyTickIcon}
                  canteenIcon={canteenIcon}
                  yellowCircleIcon={yellowCircleIcon}
                  avtar={avtar}
                  facultyData={collegeDetailsById?.faculty_data ?? []}
                />

                <CollageAdmissionProcess
                  collegeDetails={collegeDetailsById}
                  downloadIcon={downloadIcon}
                  getCurrentYear={getCurrentYear}
                  greyTickIcon={greyTickIcon}
                  responsive1={responsive}
                  swiperResponsive={swiperResponsive}
                  arrowLeftIcon={arrowLeftIcon}
                  arrowRightIcon={arrowRightIcon}
                  askQuesImage={askQuesImage}
                  getAllCourseDataById={getAllCourseDataById}
                  courseOffered={collegeDetailsById?.faculty_data ?? []}
                />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
