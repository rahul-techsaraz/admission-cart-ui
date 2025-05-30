import { Link } from 'react-router-dom';
import arrowRightIcon from '../images/arrow-right-icon.svg';
const AdmissionProcess = () => {
  return (
    <section className="admission-process-section section-padding">
      <div className="container cust-container">
        <div className="admission-process-bx d-flex align-items-center justify-content-between">
          <div className="admission-process-content">
            <h2>End-to-end Admission Process Simplified</h2>
            <p>Get help for your search, shortlist, application, preparation, admission and placement requirements!</p>
          </div>
          <Link className="admission-process-btn d-inline-flex align-self-stretch">
            <img src={arrowRightIcon} className="arrow-right-icon" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AdmissionProcess;
