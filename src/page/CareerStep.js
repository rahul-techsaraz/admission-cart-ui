import campusIcon from '../images/campus-icon.svg';
import careerIcon from '../images/career-icon.svg';
import guestList from '../images/guest-list-icon.svg';
import ratingIcon from '../images/rating-stars-icon.svg';
const CareerStep = () => {
  return (
    <>
      <section className="career-process-section section-padding">
        <div className="container">
          <ul className="process-list d-flex justify-content-center">
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="276" viewBox="0 0 220 276" fill="none">
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
                <p className="process-title process-title-height">Personalized Career Counselling</p>
                <p className="process-para">We begin by understanding your interests, strengths, and career goals to guide you toward the right course and college aligned with your dream job.</p>
              </div>
            </li>
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="276" viewBox="0 0 220 276" fill="none">
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
                <p className="process-title process-title-height">Expert College Admission Guidance</p>
                <p className="process-para">
                  Our admission experts help you shortlist top institutes offering industry-relevant programs that enhance employability and placement opportunities.
                </p>
              </div>
            </li>
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="276" viewBox="0 0 220 276" fill="none">
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
                <p className="process-title process-title-height">Skill-Building & Mentorship Support</p>
                <p className="process-para">
                  We connect you with mentors and recommend certified programs that help you gain real-world skills, making you industry-ready even before graduation.
                </p>
              </div>
            </li>
            <li>
              <div className="dashed-border position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="72" viewBox="0 0 220 72" fill="none">
                  <path
                    d="M0.999993 1.052C3.84898 11.8135 25.0029 69.8577 103.33 70.7715C118.566 70.9492 103.33 70.7715 118.566 70.9492C118.566 70.9492 193 75.3969 218.662 1.05199"
                    stroke="black"
                    stroke-dasharray="8 8"
                  />
                </svg>
                <img src={campusIcon} className="d-block mx-auto" alt="" />
                <span className="mx-auto d-flex align-items-center justify-content-center">04</span>
              </div>
              <div className="px-2">
                <p className="process-title process-title-height">Placement Support & Career Readiness</p>
                <p className="process-para">
                  Through our partner network and placement training resources, we assist you with internships, mock interviews, and job opportunities to kickstart your career with confidence.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default CareerStep;
