import { Link } from 'react-router-dom';
import aboutImg1 from '../../images/about-img1.png';
import { useDispatch } from 'react-redux';
import { toggelIsLoginPopup } from '../../features/commonSlice';
export const AboutUs = () => {
  const dispatch = useDispatch();
  return (
    <section className="imgText-grid-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="position-relative pe-md-5">
              <img src={aboutImg1} className="img-fluid about-img1" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <p className="abouttxt-small">About us</p>
            <h1 className="imgText-heading">The Achievement of Perfection is our goal but Excellence is Guarantee!</h1>

            <p className="imgText-para">
              Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Eaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className="theme-btn black-btn" onClick={() => dispatch(toggelIsLoginPopup({ flag: true }))}>
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
