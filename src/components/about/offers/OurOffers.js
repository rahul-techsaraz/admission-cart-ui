import { Link } from 'react-router-dom';
import { CollegeSection } from './CollegesSection';
import arrowRightImg from '../../../images/arrow-right-icon.svg';
export const OurOffering = () => {
  return (
    <section className="offering-section section-padding pt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="section-heading text-start">Our Offerings</h1>
            <p className="section-subheading text-start">
              We simplify international admissions for students, universities & our partners
            </p>
          </div>
        </div>
        <div className="row">
          <CollegeSection />
          <CollegeSection />
          <CollegeSection />
          <CollegeSection />
          <CollegeSection />
          <CollegeSection />
          <CollegeSection />
          <CollegeSection />
        </div>
        <div className="row">
          <Link class="course-readmore-btn green-btn">
            Enquire Now <img src={arrowRightImg} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};
