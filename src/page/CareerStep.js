import campusIcon from '../images/campus-icon.svg';
import careerIcon from '../images/career-icon.svg';
import guestList from '../images/guest-list-icon.svg';
import ratingIcon from '../images/rating-stars-icon.svg';
const CareerStep = () => {
    return(
        <>
        <section className="career-process-section">
        <div className="container">
            <ul className="process-list d-flex justify-content-center">
                <li>
                    <div className="dashed-border position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="276" viewBox="0 0 220 276" fill="none">
                            <path d="M1 70.948C3.84898 60.1865 25.0029 2.1423 103.33 1.22852C118.566 1.05077 103.33 1.2285 118.566 1.05079C118.566 1.05079 193 -3.39693 218.662 70.948C218.962 71.8159 219.422 221.841 218.662 275.07" stroke="black" stroke-dasharray="8 8"/>
                        </svg>
                        <img src={campusIcon} className="d-block mx-auto" alt="" />
                        <span className="mx-auto d-flex align-items-center justify-content-center">01</span>
                    </div>
                    <div className="px-2">
                        <p className="process-title">Register</p>
                        <p className="process-para">Just drop in your phone number to register.</p>
                    </div>
                </li>
                <li>
                    <div className="dashed-border position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="276" viewBox="0 0 220 276" fill="none">
                            <path d="M1.00002 205.052C3.84901 215.814 25.003 273.858 103.33 274.771C118.566 274.949 103.33 274.771 118.566 274.949C118.566 274.949 193 279.397 218.662 205.052C218.962 204.184 219.422 54.1593 218.662 0.93037" stroke="black" stroke-dasharray="8 8"/>
                        </svg>
                        <img src={careerIcon} className="d-block mx-auto" alt="" />
                        <span className="mx-auto d-flex align-items-center justify-content-center">02</span>
                    </div>
                    <div className="px-2">
                        <p className="process-title">Ability / Communication Assessment</p>
                        <p className="process-para">Our experts will contact you to understand your career goals. Our experts will contact you to understand your career goals.</p>
                    </div>
                </li>
                <li>
                    <div className="dashed-border position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="276" viewBox="0 0 220 276" fill="none">
                            <path d="M1 70.948C3.84898 60.1865 25.0029 2.1423 103.33 1.22852C118.566 1.05077 103.33 1.2285 118.566 1.05079C118.566 1.05079 193 -3.39693 218.662 70.948C218.962 71.8159 219.422 221.841 218.662 275.07" stroke="black" stroke-dasharray="8 8"/>
                        </svg>
                        <img src={guestList} className="d-block mx-auto" alt="" />
                        <span className="mx-auto d-flex align-items-center justify-content-center">03</span>
                    </div>
                    <div className="px-2">
                        <p className="process-title">Talent Suggestion</p>
                        <p className="process-para">Experts will recommend MBA/ B.Tech course suggestions customised to your skill set.</p>
                    </div>
                </li>
                <li>
                    <div className="dashed-border position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="72" viewBox="0 0 220 72" fill="none">
                            <path d="M0.999993 1.052C3.84898 11.8135 25.0029 69.8577 103.33 70.7715C118.566 70.9492 103.33 70.7715 118.566 70.9492C118.566 70.9492 193 75.3969 218.662 1.05199" stroke="black" stroke-dasharray="8 8"/>
                        </svg>
                        <img src={campusIcon} className="d-block mx-auto" alt="" />
                        <span className="mx-auto d-flex align-items-center justify-content-center">04</span>
                    </div>
                    <div className="px-2">
                        <p className="process-title">Course Commencement</p>
                        <p className="process-para">Get set go! Get an edge over your peers and shine out throughout your college years as well as jumpstart your career even before you graduate!</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
        </>
    )
}
export default CareerStep;