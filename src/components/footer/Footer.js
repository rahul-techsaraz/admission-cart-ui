
const Footer = () => {
    return (
        <>
        <footer className="footer-section section-padding pb-0">
        <div className="footer-top">
           <div className="container">
              <div className="row justify-content-between">
                 <div className="col-12 col-lg-4">
                    <div className="widget company-intro-widget pe-lg-5 mb-5 mb-lg-0">
                       <p><a href="index.html" className="site-logo">LOGO Design</a></p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                        <path d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z" fill="#5BE4A8"/>
                        </svg>
                       <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                 </div>
                 <div className="col-12 col-md-4 col-lg-2">
                    <div className="widget course-links-widget">
                       <h5 className="widget-title">Company</h5>
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                        <path d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z" fill="#5BE4A8"/>
                        </svg>
                       <ul className="courses-link-list">
                          <li><a href="#">About</a></li>
                          <li><a href="#">Pricing</a></li>
                          <li><a href="#">News</a></li>
                          <li><a href="#">Careers</a></li>
                          <li><a href="#">Contact</a></li>
                          <li><a href="#">Events</a></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-12 col-md-4 col-lg-2">
                    <div className="widget course-links-widget">
                       <h5 className="widget-title">Explore Courses</h5>
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                        <path d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z" fill="#5BE4A8"/>
                        </svg>
                       <ul className="courses-link-list">
                          <li><a href="#">Courses</a></li>
                          <li><a href="#">Course Two</a></li>
                          <li><a href="#">Single Course</a></li>
                          <li><a href="#">Profile</a></li>
                          <li><a href="#">Login/Register</a></li>
                          <li><a href="#">My accounts</a></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-12 col-md-4 col-lg-3">
                    <div className="widget newsletter-widget">
                       <h5 className="widget-title">Contacts</h5>
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                        <path d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z" fill="#5BE4A8"/>
                        </svg>
                       <ul className="company-footer-contact-list">
                          <li><i className="fa fa-map-marker" aria-hidden="true"></i>59 Street, New York City</li>
                          <li><i className="fa fa-phone" aria-hidden="true"></i>+2123 5900036</li>
                          <li><i className="fa fa-envelope-o" aria-hidden="true"></i>info@gmail.com</li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="footer-bottom">
           <div className="container">
              <div className="row align-items-center">
                 <div className="col-md-6 col-sm-6">
                    <ul className="terms-privacy d-flex gap-4 mb-3 mb-md-0">
                       <li><a href="#"><img src="images/facebook-icon.svg" alt="" /></a></li>
                       <li><a href="#"><img src="images/instagram-icon.svg" alt="" /></a></li>
                       <li><a href="#"><img src="images/youtube-icon.svg" alt="" /></a></li>
                       <li><a href="#"><img src="images/twitter-icon.svg" alt="" /></a></li>
                    </ul>
                 </div>
                 <div className="col-md-6 col-sm-6 text-center text-md-end">
                    <span className="copy-right-text text-white">© 2023 All Rights Reserved.</span>
                 </div>
              </div>
           </div>
        </div>
     </footer>
    
        </>
    )
}
export default Footer;