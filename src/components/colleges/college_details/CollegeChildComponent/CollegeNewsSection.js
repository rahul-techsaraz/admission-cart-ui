import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomSwiper from '../../../../utils/Constants/custom-components/CustomSwiper';
import NewsCard from './NewsCard';
import CustomeCrousel, { CarouselSlides } from '../../../../utils/Constants/custom-components/CustomeCrousel';

const CollegeNewsSection = ({
  collegeDetails,
  readmore = {},
  setReadmore,
  getCurrentYear,
  whatsIcon,
  swiperResponsive,
  arrowLeftIcon,
  arrowRightIcon,
}) => {
  const collegeDescription = collegeDetails?.description?.college_description || '';
  const collegeHighlightsDescription = collegeDetails?.description?.college_highlights_description || '';
  const collegeName = collegeDetails?.college_name || '';
  const collegeNews = collegeDetails?.news_data || [];
  const responsive = {
    1400: {
      itemsPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      itemsPerView: 3,
      spaceBetween: 20,
    },
    992: {
      itemsPerView: 2,
      spaceBetween: 20,
    },
    768: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
    576: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
  };
  useEffect(()=>{
    console.log({collegeDetails})
  },[collegeDetails])
  return (
    <>
      <div className="whatsNew-box mb-5">
        <div className="d-flex mb-4 ms-3">
          <div className="whatsnew-cal-badge">
            <img src={whatsIcon} alt="" />
          </div>
          <h1 className="whatsNew-heading ms-2">
            <span>{collegeDetails?.college_name}</span>
            What’s New
          </h1>
        </div>
        {/* <div className="whatsNew-inner-box">
          <p className="whatsNew-date">{collegeDetails.news_data[collegeDetails.news_data.length-1]?.title}</p>
          <p className="whatsNew-para">
            {collegeDetails.news_data[collegeDetails.news_data.length-1]?.content}
          </p>
          <ul className="whatsNew-list">
            <li>The CAT 2023 exam will be held on Nov 26, 2023.</li>
            <li>MBA-PGPX R2 applications are open and the last date to apply is Oct 30, 2023.</li>
          </ul>
          <Link className="whatsNew-readmore-btn mt-4 d-inline-block">Read More</Link>
        </div> */}
        {/* <div className="whatsNew-slider-wrapper mt-4 mb-5">
          <div className="swiper whatsNew-slider">
            <div className="swiper-wrapper">
              <main className="slider-main-container position-relative"> */}
                <CustomeCrousel
                  navigatePrev={'whatsNew-button-prev'}
                  navigateNext={'whatsNew-button-next'}
                  itemsPerView={3}
                  isAutoScroll={false}
                  breakPoints={responsive}
                  // animation={'Card-Zoom-Effect'}
                  autoScrollPauseOnMouseEnter={true}
                >
                  {collegeNews.map((news, index) => (
                      <CarouselSlides>
                        {/* <TrendingCollegesCard college={college} /> */}
                        <NewsCard data={news} index={index}/>
                      </CarouselSlides>
                    ))}
                </CustomeCrousel>
                {/* <CustomSwiper
                  navigationNext={'.whatsNew-button-next'}
                  navigationPrev={'.whatsNew-button-prev'}
                  isBreakPoint={true}
                  breakPoint={swiperResponsive(responsive)}
                >
                  {[...Array(5)].map((_, idx) => (
                    <swiper-slide key={idx}>
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
                  ))}
                </CustomSwiper> */}
                {/* <div className="swiper-button-prev whatsNew-button-prev">
                  <img src={arrowLeftIcon} alt="" />
                </div>
                <div className="swiper-button-next whatsNew-button-next ">
                  <img src={arrowRightIcon} alt="" />
                </div> */}
              {/* </main>
            </div>
          </div>
        </div> */}
      </div>
      <div className="course-details-left-innerBox mb-5 text-center">
        <h2 className="imgText-heading mb-4">{collegeName ? `${collegeName} Overview` : 'Overview'}</h2>
        <p className="imgText-para">
          {collegeDescription.length > 300 && !readmore.overview
            ? collegeDescription.slice(0, 300) + '...'
            : collegeDescription}
        </p>
        {collegeDescription.length > 300 && (
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
        <h2 className="imgText-heading mb-4">
          {collegeName ? `${collegeName} Highlights ${getCurrentYear()}` : 'Highlights'}
        </h2>
        <p className="imgText-para">
          {collegeHighlightsDescription.length > 300 && !readmore.highlightDescription
            ? `${collegeHighlightsDescription.slice(0, 300)}...`
            : collegeHighlightsDescription}
        </p>
        {collegeHighlightsDescription.length > 300 && (
          <div className="text-center">
            <Link
              className="theme-btn green-btn"
              onClick={() => setReadmore({ ...readmore, highlightDescription: !readmore.highlightDescription })}
            >
              {!readmore.highlightDescription ? 'Read More' : 'Read Less'}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

CollegeNewsSection.propTypes = {
  collegeDetails: PropTypes.shape({
    college_name: PropTypes.string,
  }),
  whatsIcon: PropTypes.string.isRequired,
  getCurrentYear: PropTypes.func.isRequired,
  swiperResponsive: PropTypes.func.isRequired,
  setReadmore: PropTypes.func.isRequired,
  arrowLeftIcon: PropTypes.string.isRequired,
  arrowRightIcon: PropTypes.string.isRequired,
  readmore: PropTypes.shape({
    overview: PropTypes.bool,
    highlightDescription: PropTypes.bool,
    highlightCourses: PropTypes.bool,
    allCourses: PropTypes.bool,
  }),
};

export default CollegeNewsSection;
