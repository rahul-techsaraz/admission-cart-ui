import ourStoryImg from "../../images/story-img.png"
export const OurStory = ()=>{


    return (
            <section class="imgText-grid-section green-bg section-padding">
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-3">
                    <div class="about-img-parent position-relative pe-md-5">
                        <img src={ourStoryImg} class="img-fluid about-img1" alt=""/>
                    </div>
                </div>
                <div class="col-md-6">
                    <h1 class="imgText-heading">Our Story</h1>

                    <p class="imgText-para">Our team of global study experts and student mentors guide you at every step of the way - From choosing the right university to helping you with your application and financing counselling to lining up job interviews, We invests heavily in your success.</p>
                    <a href="#" class="leftdash-btn">Read More</a>
                </div>
                
            </div>
        </div>
    </section>
    )
}