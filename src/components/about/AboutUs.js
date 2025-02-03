import { Link } from 'react-router-dom';
import aboutImg1 from '../../images/about-img1.png';
import { useDispatch } from 'react-redux';
import { toggelIsLoginPopup } from '../../features/commonSlice';
export const AboutUs =()=>{
    const dispatch = useDispatch()
    return(
          <section class="imgText-grid-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="position-relative pe-md-5">
                        <img src={aboutImg1} class="img-fluid about-img1" alt=""/>
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="abouttxt-small">About us</p>
                    <h1 class="imgText-heading">The Achievement of Perfection is our goal but Excellence is Guarantee!</h1>

                    <p class="imgText-para">Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link class="theme-btn black-btn" onClick={()=>dispatch(toggelIsLoginPopup({flag:true}))}>Get Started Now</Link>
                </div>
                
            </div>
        </div>
    </section>
    )
}