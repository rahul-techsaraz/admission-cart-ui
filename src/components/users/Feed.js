import React from 'react'
import constants from '../../utils/Constants/constants';
import '../../css/feed-collage-dekho.css';

export default function Feed() {
  return (
    <>
        <section className="profile-page">
        <div className="container">
        <div className="side-bar">
            <div className="side-navbar-parents">
                
            <div className="side-navbar">
                <input type="checkbox" id="check"/>
                <label for="check">
                    <i className="fa-solid fa-bars-staggered" id="bars"></i>
                    <i className="fa-solid fa-xmark" id="cancel"></i>
                </label>
            <ul>
                <li><a href="#"><span className="home-icon"><i className="fa-solid fa-house"></i></span> <span className="home-text">Home</span></a></li>
                <li><a href="#"><span><i className="fa-solid fa-user"></i></span> <span className="profile-text">Profile</span></a></li>
                <li><a href="#"><span><i className="fa-solid fa-chart-pie"></i></span> My Test Performance</a></li>
                <li><a href="#"><span><i className="fa-solid fa-building-columns"></i></span> Collages</a></li>
                <li><a href="#"><span><i className="fa-solid fa-compass"></i></span>Career Compass</a></li>
                <li><a href="#"><span><i className="fa-solid fa-id-card"></i></span> Document</a></li>
                <li className="active"><a href="#"><span className="feed-i"><i className="fa-solid fa-comment"></i></span><span className="feed-text">Feed</span></a></li>
                <li><a href="#"><span><i className="fa-solid fa-money-check-dollar"></i></span> Payments</a></li>
                <li><a href="#"><span><i className="fa-solid fa-gift"></i></span> Rewards</a></li>
                <li><a href="#"><span><i className="fa-solid fa-car-burst"></i></span> Insurance</a></li>
                <li><a href="#"><span><i className="fa-solid fa-face-smile"></i></span> Counsellors</a></li>
                <li><a href="#"><span><i className="fa-solid fa-gear"></i></span> Account Settings</a></li>
            </ul>
        </div>
    </div>
        <div className="left-box">
            {/* <!-- My Feed start --> */}
            <div className="my-feed-box">
               <li><a href="#">My Feed</a></li>
            </div>
            <div className="all-collage">
                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.rankUpto1000} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>List of Colleges for Upto 10,000 Rank in MAH MBA CET 2024</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.lowRank} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>Colleges Accepting Low Score/Rank in MAH MBA CET 2024</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.cutOffScore} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>MAH MBA CET 2024 All India (AI) Quota Cutoff Scores</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.goodScore} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>What is a Good Score in MAH MBA CET 2024?</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.topMbaMumbai} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>MAH CET Cutoff 2024 for Top MBA Colleges in Mumbai</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.topMbaPune} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>MAH CET Cutoff 2024 for Top MBA Colleges in Pune</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.normalisation} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>MAH MBA CET 2024 Normalization Process</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.topMbaPune} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>5 Best CAT Coaching Institutes in Madhya Pradesh 2024</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.cutoffJBIMS} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>MAH MBA CET Cutoff 2024 for JBIMS: Check Category-wise Expected and Previous Year Cutoff</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.cutOffScore} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>AP ICET 2024 అప్లికేషన్‌‌ను ఫిల్ చేయడానికి (Documents to AP ICET 2024 application) ఏ డాక్యుమెంట్లు అవసరం?</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.cutoffPUMBA} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>MAH MBA CET Cutoff 2024 for PUMBA: Check Category-wise Expected and Previous Year Cutoff</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.passingMarks} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>MAH MBA CET Passing Marks 2024: Minimum Qualifying Marks, Percentile</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.formCorrection} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>AP ICET 2024 Application Form: ఏపీ ఐసెట్ 2024 అప్లికేషన్ ఫార్మ్‌ కరెక్షన్ విధానం, ముఖ్యమైన తేదీలు</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.normalisation} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>Documents Required for MAH MBA CET 2024 Counselling Process (CAP)</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.mcaGujarat} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>ACPC Gujarat MCA Admission 2024: Dates, Application Form, Eligibility, Merit List, Choice Filling, Seat Allotment</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.mahbacetai} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>Documents Required for AP ICET 2024 Application Form - Photograph, Signature, Payment Details</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.formCorrection} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>AP ICET 2024 Application Form Correction - Direct Link, Dates, Categories, Detailed Instructions</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.passingMarks} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>List of Colleges for 500 Marks in GATE 2024</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.catTamilNadu} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>10 Best CAT Coaching Institutes in Tamil Nadu 2024</h4>
                    </div>
                    </div>
                </div>

                <div className="img-colg-name">
                    <div className="img-colg-name-child">
                    <div className="colg-img">
                    <img src={constants.images.users.lowFees} alt=""/>
                    </div>
                    <div className="colg-name">
                        <h4>MBA Colleges in India with Low Fees - List of B-Schools Offering an Affordable MBA Degree in India</h4>
                    </div>
                    </div>
                </div>
            </div>
              
        </div>

        </div>
        </div>
    </section>
    </>
  )
}
