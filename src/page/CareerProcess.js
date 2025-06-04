import AdmissionProcess from '../components/AdmissionProcess';
import campusIcon from '../images/campus-icon.svg';
import careerIcon from '../images/career-icon.svg';
import guestList from '../images/guest-list-icon.svg';
import ratingIcon from '../images/rating-stars-icon.svg';

const CareerProcess = () => {
  return (
    <>
      <section className="career-process-section section-padding">
        <div className="container">
          <ul className="process-list d-flex justify-content-center">
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="290" viewBox="0 0 220 290" fill="none">
                  <path
                    d="M1 70.948C3.84898 60.1865 25.0029 2.1423 103.33 1.22852C118.566 1.05077 103.33 1.2285 118.566 1.05079C118.566 1.05079 193 -3.39693 218.662 70.948C218.962 71.8159 219.422 221.841 218.662 275.07"
                    stroke="black"
                    stroke-dasharray="8 8"
                  />
                </svg>
                <img src={campusIcon} className="d-block mx-auto" alt="" />
                <span className="mx-auto d-flex align-items-center justify-content-center">01</span>
              </div>
              <div className="px-2">
                <p className="process-title">Fill the Application Form</p>
                <p className="process-para">
                  Start your journey by filling out our easy online application form. Just provide your basic details, academic background, and course preferences. It takes less than 5 minutes!
                </p>
              </div>
            </li>
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="290" viewBox="0 0 220 290" fill="none">
                  <path
                    d="M1.00002 205.052C3.84901 215.814 25.003 273.858 103.33 274.771C118.566 274.949 103.33 274.771 118.566 274.949C118.566 274.949 193 279.397 218.662 205.052C218.962 204.184 219.422 54.1593 218.662 0.93037"
                    stroke="black"
                    stroke-dasharray="8 8"
                  />
                </svg>
                <img src={careerIcon} className="d-block mx-auto" alt="" />
                <span className="mx-auto d-flex align-items-center justify-content-center">02</span>
              </div>
              <div className="px-2">
                <p className="process-title">Get Free Expert Counseling</p>
                <p className="process-para">
                  Our expert counselors will get in touch to understand your goals and guide you through the best college and course options based on your interests, budget, and eligibility.
                </p>
              </div>
            </li>
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="290" viewBox="0 0 220 290" fill="none">
                  <path
                    d="M1 70.948C3.84898 60.1865 25.0029 2.1423 103.33 1.22852C118.566 1.05077 103.33 1.2285 118.566 1.05079C118.566 1.05079 193 -3.39693 218.662 70.948C218.962 71.8159 219.422 221.841 218.662 275.07"
                    stroke="black"
                    stroke-dasharray="8 8"
                  />
                </svg>
                <img src={guestList} className="d-block mx-auto" alt="" />
                <span className="mx-auto d-flex align-items-center justify-content-center">03</span>
              </div>
              <div className="px-2">
                <p className="process-title">Shortlist the Right Colleges</p>
                <p className="process-para">
                  We’ll help you shortlist top colleges that match your profile and preferences. Compare courses, rankings, fees, and more to make an informed decision.
                </p>
              </div>
            </li>
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="290" viewBox="0 0 220 290" fill="none">
                  <path
                    d="M1.00002 205.052C3.84901 215.814 25.003 273.858 103.33 274.771C118.566 274.949 103.33 274.771 118.566 274.949C118.566 274.949 193 279.397 218.662 205.052C218.962 204.184 219.422 54.1593 218.662 0.93037"
                    stroke="black"
                    stroke-dasharray="8 8"
                  />
                </svg>
                <img src={ratingIcon} className="d-block mx-auto" alt="" />
                <span className="mx-auto d-flex align-items-center justify-content-center">04</span>
              </div>
              <div className="px-2">
                <p className="process-title">Document Verification & Profile Building</p>
                <p className="process-para">
                  Upload the required documents securely. We verify your academic records and help you create a strong application profile to maximize your chances of admission.
                </p>
              </div>
            </li>
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="290" viewBox="0 0 220 290" fill="none">
                  <path
                    d="M1 70.948C3.84898 60.1865 25.0029 2.1423 103.33 1.22852C118.566 1.05077 103.33 1.2285 118.566 1.05079C118.566 1.05079 193 -3.39693 218.662 70.948C218.962 71.8159 219.422 221.841 218.662 275.07"
                    stroke="black"
                    stroke-dasharray="8 8"
                  />
                </svg>
                <img src={campusIcon} className="d-block mx-auto" alt="" />
                <span className="mx-auto d-flex align-items-center justify-content-center">05</span>
              </div>
              <div className="px-2">
                <p className="process-title">Get Admission Confirmation</p>
                <p className="process-para">
                  We coordinate directly with colleges to fast-track your application. Once approved, receive your official admission offer letter – no stress, no delays.
                </p>
              </div>
            </li>
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="108" viewBox="0 0 220 108" fill="none">
                  <path
                    d="M0.999993 1.052C3.84898 11.8135 25.0029 69.8577 103.33 70.7715C118.566 70.9492 103.33 70.7715 118.566 70.9492C118.566 70.9492 193 75.3969 218.662 1.05199"
                    stroke="black"
                    strokeDasharray="8 8"
                  />
                </svg>
                <img src={campusIcon} className="d-block mx-auto" alt="" />
                <span className="mx-auto d-flex align-items-center justify-content-center">06</span>
              </div>
              <div className="px-2">
                <p className="process-title">Post-Admission Support</p>
                <p className="process-para">
                  After admission, we assist you with hostel booking, education loan guidance, scholarship info, and other post-admission services to ensure a smooth start to your college life.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default CareerProcess;
