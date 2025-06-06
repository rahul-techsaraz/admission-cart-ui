import logo from '../../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchAllExam } from '../hooks/useFetchAllExam';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchAllCollege } from '../hooks/useFetchAllCollege';
import { useFetchAllCourse } from '../hooks/useFetchAllCourse';
import { toggelIsLoginPopup } from '../../features/commonSlice';
const Footer = () => {
  const [trendingData, setTrendingData] = useState({
    trendingExam: [],
    trendingCollege: [],
    trendingCourse: []
  })
  const { allExamData, allCollegeData, allCourseData, authenticateUser } = useSelector((state) => state.common);
  const { fetchTrendingExam} = useFetchAllExam()
  const {fetchTrendingCollege} = useFetchAllCollege()
  const {getTrendingCourses}= useFetchAllCourse()
  const dispatch = useDispatch()

  const handleClick = () => {
    if (!authenticateUser) {
          dispatch(toggelIsLoginPopup({ flag: true }));
        }
  }
  useEffect(()=>{
    if(allExamData.length > 0 && allCollegeData.length > 0 && allCourseData.length > 0){
      const trendingExamList = fetchTrendingExam(allExamData)
      const trendingCollegeList = fetchTrendingCollege(allCollegeData)
      const trendingCourseList = getTrendingCourses(allCourseData)
      setTrendingData({...trendingData, trendingExam:trendingExamList, trendingCollege:trendingCollegeList, trendingCourse:trendingCourseList})
    }
  },[allExamData, allCollegeData, allCourseData])
  
  return (
    <>
      <footer className="footer-section section-padding pb-0">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-5">
                <div className="widget company-intro-widget pe-lg-5 mb-5 mb-lg-0">
                  <p>
                    <Link to="/">
                      <img src={logo} alt="logo" className="img-fluid footer-img-size" />
                    </Link>
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                    <path
                      d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z"
                      fill="#5BE4A8"
                    />
                  </svg>
                  <p className="footer-para">
                        Your Gateway to the Right College <br/>
                        At Admission Kart, we guide students toward the best educational opportunities across all streams and 
                        courses — including Engineering, Medical, Management, Arts, Science, Commerce, Law, Design, and more. 
                        Our mission is to make the admission process easy, transparent, and tailored to each student’s goals.
                        From entrance exam guidance to college selection and application support, we offer end-to-end 
                        counselling that helps you take confident steps toward a successful future. Wherever you dream of
                        studying, we’ll help you get there. 
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <div className="widget course-links-widget">
                  <h5 className="widget-title">TOP EXAMS</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                    <path
                      d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z"
                      fill="#5BE4A8"
                    />
                  </svg>
                  {trendingData.trendingExam.length > 0 &&
                  <ul className="courses-link-list">
                    {trendingData.trendingExam.map((exam, index)=>(
                      <li key={index}>
                      <Link to={authenticateUser ? '/exam_list' : ''} onClick={()=> handleClick()}>
                        {exam.exam_name}
                      </Link>
                    </li>  
                    ))}
                  </ul>
                  }
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <div className="widget course-links-widget">
                  <h5 className="widget-title">COLLEGES</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                    <path
                      d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z"
                      fill="#5BE4A8"
                    />
                  </svg>
                  {trendingData.trendingCollege.length > 0 &&
                    <ul className="collages-link-list">
                      {trendingData.trendingCollege.map((college, index)=>(
                        <li key={index}>
                          <Link to={authenticateUser ? '/colleges_list' : ''} onClick={()=> handleClick()}>{college.college_name}</Link>
                        </li>  
                      ))}
                    </ul>
                  }
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="widget newsletter-widget">
                  <h5 className="widget-title">COURSES</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                    <path
                      d="M0 2C0 0.895431 0.895431 0 2 0H68C69.1046 0 70 0.895431 70 2C70 3.10457 69.1046 4 68 4H2C0.895431 4 0 3.10457 0 2Z"
                      fill="#5BE4A8"
                    />
                  </svg>
                  {trendingData.trendingCourse.length > 0 &&
                    <ul className="courses-link-list">
                      {trendingData.trendingCourse.map((course, index)=>(
                        <li key={index}>
                          <Link to={authenticateUser ? '/courses_list' : ''} onClick={()=> handleClick()}>{course.slug}</Link>
                        </li>
                      ))}
                    </ul>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-5 col-lg-3">
                <ul className="terms-privacy d-flex gap-3 mb-3 mb-md-0">
                  <li>
                     <Link to={'https://www.facebook.com/share/1AhUiZhgpN/'} target='blank'>
                      <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={'https://www.instagram.com/admissionkart_official?utm_source=qr&igsh=MWV3cDN3OTkzaWJuaA=='} target='blank'>
                      <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src="images/youtube-icon.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src="images/twitter-icon.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-9 col-lg-9 col-sm-12 text-center text-lg-end">
                <p className="copy-right-text">
                  {' '}
                  ©Copyright 2023 All Rights Reserved by AdmissionKart. Designed by
                  <Link to={'https://techsaraz.com/'} target="_blank">
                    <span> Tech SaraZ</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
