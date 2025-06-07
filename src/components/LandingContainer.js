import sliderBanner1 from '../images/slider/new-banner1.png';
import sliderBanner2 from '../images/slider/new-banner2.png';
import sliderBanner3 from '../images/slider/new-banner3.png';
import sliderBanner4 from '../images/slider/new-banner4.png';
import CustomeCrousel, { CarouselSlides } from '../utils/Constants/custom-components/CustomeCrousel';
import CustomSearch from '../utils/Constants/custom-components/CustomSearch';

const tarndingBanner = [sliderBanner1, sliderBanner2, sliderBanner3, sliderBanner4];
const LandingContainer = () => {
  const responsive = {
    1400: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      itemsPerView: 1,
      spaceBetween: 20,
    },
    992: {
      itemsPerView: 1,
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
  return (
    <>
      <section className="banner-section text-center">
        <div className="banner-container">
          <div className="swiper-wrapper swiper-container position-relative">
            <CustomeCrousel
              navigatePrev={'banner-button-prev'}
              navigateNext={'banner-button-next'}
              itemsPerView={1}
              isAutoScroll={false}
              breakPoints={responsive}
              autoScrollPauseOnMouseEnter={true}
            >
              <CarouselSlides>
                <div className="swiper-slide banner1" style={{ backgroundImage: `url(${tarndingBanner[0]})` }}>
                  <div className="banner-caption">
                    <h1 className="text-center">
                      <span className="d-block">From</span>
                      College Admissions to <strong className="d-block">Being Job Ready</strong>
                    </h1>
                    <div className="banner-btn-grp text-center mt-5 mt-md-1 mt-lg-4">{/* <CustomSearch /> */}</div>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide banner1" style={{ backgroundImage: `url(${tarndingBanner[1]})` }}>
                  <div className="banner-caption" id="banner2-caption-right-position">
                    <h1 className="text-center">
                      <span className="d-block">From</span>
                      College Admissions to <strong className="d-block">Being Job Ready</strong>
                    </h1>
                    <div className="banner-btn-grp text-center mt-5 mt-md-1 mt-lg-4">{/* <CustomSearch/> */}</div>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide banner1" style={{ backgroundImage: `url(${tarndingBanner[2]})` }}>
                  <div className="banner-caption" id="banner3-caption-right-position">
                    <h1 className="text-center">
                      <span className="d-block">From</span>
                      College Admissions to <strong className="d-block">Being Job Ready</strong>
                    </h1>
                    <div className="banner-btn-grp text-center mt-5 mt-md-1 mt-lg-4">{/* <CustomSearch/> */}</div>
                  </div>
                </div>
              </CarouselSlides>
              <CarouselSlides>
                <div className="swiper-slide banner1" style={{ backgroundImage: `url(${tarndingBanner[3]})` }}>
                  <div className="banner-caption" id="banner4-caption-right-position">
                    <h1 className="text-center">
                      <span className="d-block">From</span>
                      College Admissions to <strong className="d-block">Being Job Ready</strong>
                    </h1>
                    <div className="banner-btn-grp text-center mt-5 md-mt-2 mt-lg-4">{/* <CustomSearch/> */}</div>
                  </div>
                </div>
              </CarouselSlides>
            </CustomeCrousel>
            {/* <div className='banner-search-button'><CustomSearch /></div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default LandingContainer;
