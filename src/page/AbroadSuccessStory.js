import circleImage from '../images/circle-img.svg';
import polyGoneImage1 from '../images/polygonimg1.png';
import dotsImage from '../images/dots-img.svg';


const AbroadSuccessStory = () => {
    return(
        <>
        <section className="imgText-grid-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <h1 className="imgText-heading">Lorem Ipsum: Your Trusted Guide For Study Abroad Success</h1>
                    <p className="imgText-para">So, you have decided to study abroad. As you embark on this life-changing journey, We will be your trusted advisor guiding you towards your destination. Studying in a foreign country is appealing, promising and a wonderful experience. Nevertheless, securing that coveted spot in your dream university demands tenacity and careful planning.</p>
                    <a href="#" className="theme-btn black-btn">Get Started Now</a>
                </div>
                <div className="col-lg-5">
                    <div className="position-relative">
                        <img src={dotsImage} className="dots-img" alt="" />
                        <img src={polyGoneImage1} className="img-fluid polygonimg1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default AbroadSuccessStory;