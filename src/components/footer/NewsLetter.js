
import { Link } from 'react-router-dom';
import conversationImage from '../../images/conversation-img.png';
import newsLetterImage from '../../images/newsletter-icon.svg'
const NewsLetter = () => {
    return(
        <>
       <section class="newsletter-section section-padding pt-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="d-flex align-items-center pt-5 mb-4 mb-lg-0">
                        <img src={newsLetterImage} class="newsletter-icon" alt="" /> 
                        <h2 class="newsletter-hdng">Subscribe to our Newsletter for your Daily Updates <span>Get Latest News and Keep Update</span></h2>
                    </div>
                </div>
                <div class="col-lg-6">
                    <form action="">
                        <div class="row">
                            <div class="col-md-6">
                                <input type="email" class="form-control newsletter-input" id="email" placeholder="Email address" />
                            </div>
                            <div class="col-md-6">
                                <button type="submit" class="btn newsletter-btn w-100">Confirm identity</button>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <img src={conversationImage} class="d-block mx-auto conversation-img mt-5 pt-3" alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-8 mx-auto">
                    <div class="qa-forum">
                        <h1 class="qa-title">Q&A Forum</h1>
                        <p class="qa-para">If you have any questions on your mind or if you’re confused about the colleges/ careers/ courses/ exams you wish to pursue, just drop in a query & our experts will revert in no time with all the possible solutions.</p>
                        <Link class="theme-btn green-btn">Post Your Request</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default NewsLetter