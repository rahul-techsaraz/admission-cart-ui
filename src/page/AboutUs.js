

import circleImage from '../images/circle-img.svg';
import polyGoneImage2 from '../images/polygonimg2.png';
import dotsImage from '../images/dots-img.svg';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    
    return(
        <>
          <section className="imgText-grid-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 order-2 order-lg-0">
                    <div className="position-relative">
                        <img src={circleImage} className="circle-img" alt="" />
                        <img src={polyGoneImage2} className="img-fluid polygonimg1" alt="" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="position-relative">
                        <h1 className="imgText-heading">About Us</h1>
                        <p className="imgText-para">The Achievement of Perfection is our goal but Excellence is Guarantee!</p>
                        <p className="imgText-para">It was founded under the aegis of Girnarsoft Education Services Pvt Ltd. (GESPL) to institutionalize students’ counseling in India. Between its inception in 2015 and 2021, Collegedekho.com has counselled over two million students. Headquartered in Gurgaon, Haryana, and with satellite offices in Delhi, Chandigarh, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Mumbai etc,</p>
                        <Link className="theme-btn black-btn" to={'about'}>View More</Link>
                        <img src={dotsImage} className="dots-img1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default AboutUs;