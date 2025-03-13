import { Link } from 'react-router-dom';
import OurMissionImg from '../../images/mission-img.png';
export const OurMission = () => {
  return (
    <section class="imgText-grid-section green-bg section-padding">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-3">
            <div class="about-img-parent position-relative pe-md-5">
              <img src={OurMissionImg} class="img-fluid about-img1" alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <h1 class="imgText-heading">Our Mission</h1>

            <p class="imgText-para">
              Our mission is to continuously innovate the best ways to train the next generation of developers and to
              transform the the way tech education is delivered.
            </p>
            <Link class="leftdash-btn">Enquire Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
