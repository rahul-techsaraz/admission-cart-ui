import person1 from '../images/testi-user-img1.png';
import person2 from '../images/testi-user-img2.png';
import person3 from '../images/testi-user-img3.png';
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg'
import CustomSwiper from '../utils/Constants/custom-components/CustomSwiper';
import { swiperResponsive } from '../utils/Constants/swiperResponsive';
const testimonialPersonDetails = [
    {
        name:'Dolorsit Psumamet',
        description:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor in cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
        designation:'Founder & Co',
        imageUrl:person1
},
{
    name:'Dolorsit Psumamet',
    description:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor in cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    designation:'Founder & Co',
    imageUrl:person2
},
{
    name:'Dolorsit Psumamet',
    description:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor in cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    designation:'Founder & Co',
    imageUrl:person3
},
{
    name:'Dolorsit Psumamet',
    description:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor in cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.',
    designation:'Founder & Co',
    imageUrl:person1
},
]


const Testimonial = () => {
    const responsive = {
        1400:{
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        460:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
    return(
        <>
        <section className="testimonial-slider-section section-padding">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="section-heading text-center">Results I have Helped Create</h1>
                    <p className="section-subheading text-center">Hear out what my clients say about me.</p>
                </div>
                <div className="col-12">
                    <div className="testimonial-slider-wrapper position-relative mt-3">
                        <div className="swiper testimonial-slider">
                            <div className="swiper-wrapper position-relative">
                                <CustomSwiper navigationNext={".testimonials-button-next"} navigationPrev={".testimonials-button-prev"} noOfSlidesPerView={3} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                                {testimonialPersonDetails.map((details, index) => (
                                    <swiper-slide key={index}>
                                        <div className="swiper-slide">
                                            <div className="testimonial-slider-box3">
                                                <div className="testimonials-box">
                                                    <div className="testi-content-box">
                                                        <p>{details.description}</p>
                                                    </div>
                                                    <img src={details.imageUrl} className="testi-user-img mx-auto d-block" alt="user img" />
                                                    <p className="testi-user-info text-center">{details.name} <span className="d-block">{details.designation}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                ))}
                                </CustomSwiper>

                                <div className="swiper-button-prev testimonials-button-prev">
                                <img src={leftArrow} alt="" />
                            </div>
                            <div className="swiper-button-next testimonials-button-next">
                                <img src={rightArrow} alt="" />
                            </div>
                            </div>
                            {/* <div className="swiper-button-prev testimonials-button-prev">
                                <img src={leftArrow} alt="" />
                            </div>
                            <div className="swiper-button-next testimonials-button-next">
                                <img src={rightArrow} alt="" />
                            </div> */}
                        </div>

                        <div className="swiper-pagination testimonial-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Testimonial