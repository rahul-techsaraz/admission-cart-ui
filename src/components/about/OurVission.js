import { Link } from 'react-router-dom';
import ourVissionImg from '../../images/vission-img.png';

export const OurVission = () => {
  return (
    <section className="imgText-grid-section section-padding">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-end">
            <h1 className="imgText-heading">Our Vision</h1>
            <p className="imgText-para">
              Powering your global education dream. We support future leader from India in their quest to study at the
              best global schools.{' '}
            </p>
            <Link className="leftdash-btn greendash">Enquire Now</Link>
          </div>
          <div className="col-md-3">
            <div className="about-img-parent position-relative ps-md-5">
              <img src={ourVissionImg} className="img-fluid about-img1" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
