import offeringImg from '../../../images/offer-icon/offering-icon1.svg';
import arrowRightImg from '../../../images/arrow-right-icon.svg';
import { Link } from 'react-router-dom';
export const CollegeSection = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="offering-box text-center">
        <img src={offeringImg} className="offer-icon" alt="" />
        <h1 className="offer-heading">College Finder</h1>
        <p className="offer-para">Browse through authentic and updated information on courses, careers, colleges </p>
        {/* <Link class="course-readmore-btn green-btn">Enquire Now <img src={arrowRightImg} alt="" /></Link> */}
      </div>
    </div>
  );
};
