import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const itemsName = ['UP Scholarships Last.1..','UP Scholarships Last.1..2','UP Scholarships Last.1..3','UP Scholarships Last.1..4','UP Scholarships Last.1..45']
const MockExamList = () => {
    return(
        <section class="">
        <div class="container">
            <div class="">
                    
                <div class="">
                    <div class="">
                    <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
         {itemsName.map((imageUrl, index) => {
          return (
            <div class="implink-slider-bx">
            <p>{imageUrl}</p>
            </div>
          );
        })}
        </Carousel>
                   
                        {/* <div class="swiper-slide">
                          <div class="implink-slider-bx">
                              <p>UP Scholarships Last...</p>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="implink-slider-bx">
                              <p>Common Application Form...</p>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="implink-slider-bx">
                              <p>JEE Main 2024 Exam D... </p>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="implink-slider-bx">
                              <p>NEET 2024 Exam Date...</p>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="implink-slider-bx">
                              <p>Free CAT Mock Test 2023</p>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="implink-slider-bx">
                              <p>Free CAT Mock Test 2023</p>
                          </div>
                        </div> */}
                    </div>
                </div>
          
                {/* <div class="swiper-button-prev implink-button-prev"></div>
                <div class="swiper-button-next implink-button-next"></div> */}
                
            </div>
        </div>
    </section>

    )
}
export default MockExamList