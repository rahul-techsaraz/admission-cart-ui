import CustomSwiper from "../utils/Constants/custom-components/CustomSwiper";
import rightArrow from '../images/arrow-right-icon.svg';
import leftArrow from '../images/arrow-left-icon.svg'
import { swiperResponsive } from "../utils/Constants/swiperResponsive";
const responsive = {
  1400:{
      slidesPerView: 5,
      spaceBetween: 50,
  },
  1024:{
      slidesPerView: 4,
      spaceBetween: 50,
  },
  768:{
      slidesPerView: 3,
      spaceBetween: 40,
  },
  640:{
      slidesPerView: 2,
      spaceBetween: 20,
  },
  460:{
      slidesPerView: 2,
      spaceBetween: 20,
  },
};
  const itemsName = ['UP Scholarships Last.1..','UP Scholarships Last.1..2','UP Scholarships Last.1..3','UP Scholarships Last.1..4','UP Scholarships Last.1..45']
const MockExamList = () => {
    return(
        <section class="">
          <div class="container">

            {/* <div class="">
              <div class="">
                <div class=""> */}

                  <div class="implink-slider-bx position-relative">
                    <p><CustomSwiper navigationNext={'.implink-button-next'} navigationPrev={".implink-button-prev"} noOfSlidesPerView={4} isBreakPoint={true} breakPoint={swiperResponsive(responsive)}>
                    {itemsName.map(items=>(
                      <swiper-slide>{items}</swiper-slide>
                    ))}</CustomSwiper></p>
                    <div class="swiper-button-prev implink-button-prev">
                      <img src={leftArrow} alt="" />
                    </div>
                    <div class="swiper-button-next implink-button-next">
                      <img src={rightArrow} alt="" />
                    </div>
                  </div>

                {/* </div>
              </div>
            </div> */}
            
          </div>
        </section>
    )
}
export default MockExamList