import logo from '../../images/logo.png';
import { Link, useNavigate  } from "react-router-dom";
const Footer = () => {
    return (
        <>
        <footer className="footer-section section-padding pb-0">
        <div className="footer-top">
           <div className="container">
              <div className="row justify-content-between">
                 <div className="col-12 col-lg-4">
                    <div className="widget company-intro-widget pe-lg-5 mb-5 mb-lg-0">
                        <p>
                           <Link to="/">
                              <img src={logo} alt="logo" className='img-fluid' />
                           </Link>
                        </p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                        <path d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z" fill="#5BE4A8"/>
                        </svg>
                       <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                 </div>
                 <div className="col-12 col-md-4 col-lg-2">
                    <div className="widget course-links-widget">
                       <h5 className="widget-title">TOP EXAMS</h5>
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                        <path d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z" fill="#5BE4A8"/>
                        </svg>
                       <ul className="courses-link-list">
                          <li><Link to={'about'} target='_blank'>JEE Main 2025</Link></li>
                          <li><Link to={'/contact-us'} target='_blank'>CAT 2024</Link></li>
                          <li><Link to={'about'} target='_blank'>NEET 2025</Link></li>
                          <li><Link to={'/contact-us'} target='_blank'>GATE 2024</Link></li>
                          <li><Link to={'about'} target='_blank'>XATE 2025</Link></li>
                          <li><Link to={'/contact-us'} target='_blank'>NIFT 2024</Link></li>
                          <li><Link to={'about'} target='_blank'>JEE Main 2025</Link></li>
                          <li><Link to={'/contact-us'} target='_blank'>CAT 2024</Link></li>
                          <li><Link to={'about'} target='_blank'>JEE Main 2025</Link></li>
                          <li><Link to={'/contact-us'} target='_blank'>CAT 2024</Link></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-12 col-md-4 col-lg-3">
                    <div className="widget course-links-widget">
                       <h5 className="widget-title">COLLEGES</h5>
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                        <path d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z" fill="#5BE4A8"/>
                        </svg>
                       <ul className="colleges-link-list">
                          <li><Link to={"/courses_list"}>Engineering and Architecture</Link></li>
                          <li><Link to={"/courses_list"}>Management and Business</Link></li>
                          <li><Link to={"/courses_list"}>Medicine and Allied Sciences</Link></li>
                          <li><Link to={"/courses_list"}>Computer Application and IT</Link></li>
                          <li><Link to={"/courses_list"}>Pharmacy</Link></li>
                          <li><Link to={"/courses_list"}>MBBS</Link></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-12 col-md-4 col-lg-3">
                    <div className="widget newsletter-widget">
                       <h5 className="widget-title">COURSES</h5>
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                        <path d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z" fill="#5BE4A8"/>
                        </svg>
                        <ul className="courses-link-list">
                          <li><Link to={"/courses_list"}>Engineering and Architecture</Link></li>
                          <li><Link to={"/courses_list"}>Management and Business</Link></li>
                          <li><Link to={"/courses_list"}>Medicine and Allied Sciences</Link></li>
                          <li><Link to={"/courses_list"}>Computer Application and IT</Link></li>
                          <li><Link to={"/courses_list"}>Pharmacy</Link></li>
                          <li><Link to={"/courses_list"}>MBBS</Link></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="footer-bottom">
           <div className="container">
              <div className="row align-items-center">
                 <div className="col-md-5 col-sm-5">
                    <ul className="terms-privacy d-flex gap-4 mb-3 mb-md-0">
                       <li><Link><img src="images/facebook-icon.svg" alt="" /></Link></li>
                       <li><Link><img src="images/instagram-icon.svg" alt="" /></Link></li>
                       <li><Link><img src="images/youtube-icon.svg" alt="" /></Link></li>
                       <li><Link><img src="images/twitter-icon.svg" alt="" /></Link></li>
                    </ul>
                 </div>
                 <div className="col-md-7 col-sm-7 text-center text-md-end">
                    <p className="copy-right-text"> ©Copyright 2023 All Rights Reserved by AdmissionKart. Designed by<Link to={'https://techsaraz.com/'} target='_blank'><span> Tech SaraZ</span></Link></p>
                 </div>
              </div>
           </div>
        </div>
     </footer>
    
        </>
    )
}
export default Footer;