import React from 'react';
import constants from '../../utils/Constants/constants';
import '../../css/career-collage-dekho.css';
import '../../css/career-responsive.css';
import Sidebar from './Sidebar';

export default function Career() {
  return (
    <>
      <section className="profile-page">
        <div className="container">
          <div className="side-bar">
            <Sidebar />
            <div className="left-box">
              {/* <!-- box-up start --> */}
              <div className="box-up">
                <div className="center">
                  <h3 className="box-up-h3">Career Profile Test</h3>
                  <p className="box-up-p">
                    A scientific assessment method that can analyze your aptitude, capabilities, personality, and
                    interests and suggest the best-fit career options for you.
                  </p>
                  <div className="btn-box-up from-center1">Start Test</div>
                </div>
                <div className="disclaime-all-p">
                  <p className="disclaime-first-p">
                    <strong className="color-change">Disclaime:</strong> While the CollegeDekho Career Profiler Results
                    are research based, they are only indicative of various career streams that you can choose based on
                    your current interests and should not be used as the only way to choose your career.
                  </p>
                  <p className="disclaime-last3-p">
                    You should use these results to explore the world of careers as you look at fulfiling your dreams
                    and ambitions. You will be able to look at the interests satisfied by careers and compare them to
                    your own interests based on the results of the Career Profiler.
                  </p>
                  <p className="disclaime-last3-p">
                    To get the maximum benefit from this test and its results, you should talk to a professional
                    counselor for more help on how to use your CD Career Profiler Test Results.
                  </p>
                  <p className="disclaime-last3-p">
                    Even better, just talk to one of CollegeDekho's highly trained counsellors and get FREE guidance on
                    which stream and college to apply to via a Single Common Admission Form and then get Admission into
                    a college of your choice.
                  </p>
                </div>
              </div>
              {/* <!-- box-up end --> */}
              <div className="box-down">
                <div className="text-image">
                  <div className="text-h5-button order-text">
                    <h5>To explore the world of careers basis your interest you can connect with our counsellor.</h5>
                    <div className="button-box">
                      <div className="btn1-box-down from-center">Request a Callback</div>
                    </div>
                  </div>
                  <div className="box-down-img">
                    <img src={constants.images.users.callNowBanner} alt="box-down-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
