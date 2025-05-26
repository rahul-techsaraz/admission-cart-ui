import { Link } from 'react-router-dom';
import conversationImage from '../../images/conversation-img.png';
import newsLetterImage from '../../images/newsletter-icon.svg';
const NewsLetter = () => {
  return (
    <>
      <section className="newsletter-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4 mb-lg-0">
                <img src={newsLetterImage} className="newsletter-icon" alt="" />
                <h2 className="newsletter-hdng">
                  Subscribe to our Newsletter for your Daily Updates <span>Get Latest News and Keep Update</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="email"
                      className="form-control newsletter-input"
                      id="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className=" newsletter-btn w-100">
                      Confirm identity
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img src={conversationImage} className="d-block mx-auto conversation-img mt-5 pt-3" alt="" />
            </div>
          </div>
          {/* <div className="row">
                <div className="col-10 col-md-8 mx-auto">
                    <div className="qa-forum">
                        <h1 className="qa-title">Q&A Forum</h1>
                        <p className="qa-para">If you have any questions on your mind or if you’re confused about the colleges/ careers/ courses/ exams you wish to pursue, just drop in a query & our experts will revert in no time with all the possible solutions.</p>
                        <Link className="theme-btn green-btn">Post Your Request</Link>
                    </div>
                </div>
            </div> */}
        </div>
      </section>
    </>
  );
};
export default NewsLetter;
