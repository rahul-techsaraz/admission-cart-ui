import { Link } from 'react-router-dom';
import ourVissionImg from '../../images/vission-img.png';

export const OurVission = () => {
  return (
    <section class="imgText-grid-section section-padding">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6 text-end">
            <h1 class="imgText-heading">Our Vision</h1>
            <p class="imgText-para">
              Powering your global education dream. We support future leader from India in their quest to study at the
              best global schools.{' '}
            </p>
            <Link class="leftdash-btn greendash">Enquire Now</Link>
          </div>
          <div class="col-md-3">
            <div class="about-img-parent position-relative ps-md-5">
              <img src={ourVissionImg} class="img-fluid about-img1" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
