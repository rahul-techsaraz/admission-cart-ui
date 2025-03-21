import arrowLeftIconImg from '../../../images/arrow-left-icon.svg';
import arrowRightIconImg from '../../../images/arrow-right-icon.svg';
import CustomSwiper from '../../../utils/Constants/custom-components/CustomSwiper';
export const Milestones = () => {
  return (
    <section className="milestone-section text-center section-padding pt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto mb-5">
            <h1 className="section-heading text-start">Milestones</h1>
            <p className="section-subheading text-start">
              {' '}
              perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto b
            </p>
          </div>
          <div className="col-10 mx-auto">
            {/* <!-- Slider main container --> */}
            <div className="milestone-slider-wrapper position-relative">
              <div className="swiper milestone-slider">
                <div className="milestone-separator"></div>
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper position-relative">
                  {/* <!-- Slides --> */}
                  <CustomSwiper noOfSlidesPerView={1} isBreakPoint={false}>
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="milestone-box text-start">
                          <span className="milestone-dot"></span>
                          <h2 className="milestone-year">2015</h2>
                          <p className="milestone-para">
                            <span className="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit,{' '}
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="milestone-box text-start">
                          <span className="milestone-dot"></span>
                          <h2 className="milestone-year">2016</h2>
                          <p className="milestone-para">
                            <span className="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit,{' '}
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="milestone-box text-start">
                          <span className="milestone-dot"></span>
                          <h2 className="milestone-year">2017</h2>
                          <p className="milestone-para">
                            <span className="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit,{' '}
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="milestone-box text-start">
                          <span className="milestone-dot"></span>
                          <h2 className="milestone-year">2018</h2>
                          <p className="milestone-para">
                            <span className="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit,{' '}
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="milestone-box text-start">
                          <span className="milestone-dot"></span>
                          <h2 className="milestone-year">2019</h2>
                          <p className="milestone-para">
                            <span className="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit,{' '}
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="milestone-box text-start">
                          <span className="milestone-dot"></span>
                          <h2 className="milestone-year">2020</h2>
                          <p className="milestone-para">
                            <span className="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit,{' '}
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="milestone-box text-start">
                          <span className="milestone-dot"></span>
                          <h2 className="milestone-year">2021</h2>
                          <p className="milestone-para">
                            <span className="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit,{' '}
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div className="swiper-slide">
                        <div className="milestone-box text-start">
                          <span className="milestone-dot"></span>
                          <h2 className="milestone-year">2022</h2>
                          <p className="milestone-para">
                            <span className="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit,{' '}
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                  </CustomSwiper>

                  {/* <!-- If we need navigation buttons --> */}
                  <div className="swiper-button-prev milestone-button-prev">
                    <img src={arrowLeftIconImg} alt="" />
                  </div>
                  <div className="swiper-button-next milestone-button-next">
                    <img src={arrowRightIconImg} alt="" />
                  </div>
                </div>
              </div>

              {/* <!-- If we need navigation buttons --> */}
              {/* <div className="swiper-button-prev milestone-button-prev">
                            <img src={arrowLeftIconImg} alt="" />
                        </div>
                        <div className="swiper-button-next milestone-button-next">
                            <img src={arrowRightIconImg} alt="" />
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
