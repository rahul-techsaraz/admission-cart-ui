import arrowLeftIconImg from "../../../images/arrow-left-icon.svg";
import arrowRightIconImg from "../../../images/arrow-right-icon.svg";
import CustomSwiper from "../../../utils/Constants/custom-components/CustomSwiper";
export const Milestones = ()=>{

    return (
        <section class="milestone-section text-center section-padding pt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-10 mx-auto mb-5">
                    <h1 class="section-heading text-start">Milestones</h1>
                    <p class="section-subheading text-start"> perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto b</p>
                </div>
                <div class="col-10 mx-auto">
                    {/* <!-- Slider main container --> */}
                    <div class="milestone-slider-wrapper position-relative">
                        <div class="swiper milestone-slider">
                            <div class="milestone-separator"></div>
                            {/* <!-- Additional required wrapper --> */}
                            <div class="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <CustomSwiper noOfSlidesPerView={1} isBreakPoint={false}>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="milestone-box text-start">
                                                <span class="milestone-dot"></span>
                                                <h2 class="milestone-year">2015</h2>
                                                <p class="milestone-para"><span class="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="milestone-box text-start">
                                                <span class="milestone-dot"></span>
                                                <h2 class="milestone-year">2016</h2>
                                                <p class="milestone-para"><span class="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="milestone-box text-start">
                                                <span class="milestone-dot"></span>
                                                <h2 class="milestone-year">2017</h2>
                                                <p class="milestone-para"><span class="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="milestone-box text-start">
                                                <span class="milestone-dot"></span>
                                                <h2 class="milestone-year">2018</h2>
                                                <p class="milestone-para"><span class="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="milestone-box text-start">
                                                <span class="milestone-dot"></span>
                                                <h2 class="milestone-year">2019</h2>
                                                <p class="milestone-para"><span class="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="milestone-box text-start">
                                                <span class="milestone-dot"></span>
                                                <h2 class="milestone-year">2020</h2>
                                                <p class="milestone-para"><span class="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="milestone-box text-start">
                                                <span class="milestone-dot"></span>
                                                <h2 class="milestone-year">2021</h2>
                                                <p class="milestone-para"><span class="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="milestone-box text-start">
                                                <span class="milestone-dot"></span>
                                                <h2 class="milestone-year">2022</h2>
                                                <p class="milestone-para"><span class="d-block">It was Founded</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </CustomSwiper>
                                
                                
                                
                                
                                
                                
                                
                                

                            </div>
                        </div>

                        {/* <!-- If we need navigation buttons --> */}
                        <div class="swiper-button-prev milestone-button-prev">
                            <img src={arrowLeftIconImg} alt="" />
                        </div>
                        <div class="swiper-button-next milestone-button-next">
                            <img src={arrowRightIconImg} alt="" />
                        </div>
                        
        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
