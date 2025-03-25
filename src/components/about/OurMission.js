import { Link } from 'react-router-dom';
import OurMissionImg from '../../images/mission-img.png';
export const OurMission = () => {
  return (
    <section className="imgText-grid-section green-bg section-padding">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="about-img-parent position-relative pe-md-5">
              <img src={OurMissionImg} className="img-fluid about-img1" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="imgText-heading">Our Mission</h1>

            <p className="imgText-para text-justify">
              Our mission is to continuously innovate the best ways to train the next generation of developers and to
              transform the the way tech education is delivered.
            </p>
            <Link className="leftdash-btn">Enquire Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
