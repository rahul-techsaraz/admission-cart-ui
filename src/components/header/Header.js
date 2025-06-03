import userImage from '../../images/user-icon.svg';
import logo from '../../images/logo.png';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import { tabName } from '../../data/header/TabData';
import { megaMenuData } from '../../data/header/megaMenuData';
import { useDispatch, useSelector } from 'react-redux';
import { toggelLoginModel, toggelAfterLoginModel } from '../../features/commonSlice';
import LoginModel from '../model/LoginModel';
import AfterLoginModel from '../model/AfterLoginModel';
import { useFetchAllCollege } from '../hooks/useFetchAllCollege';
import { useFetchAllCourse } from '../hooks/useFetchAllCourse';
import { useFetchAllExam } from '../hooks/useFetchAllExam';
import CustomSearch from '../../utils/Constants/custom-components/CustomSearch';

const Header = () => {
  const [isBurgerclicked, setIsBurgerClicked] = useState(false);
  const modalRef = useRef(null); // For detecting outside clicks on modals

  const { fetchCollegeList } = useFetchAllCollege();
  const { fetchCourseList } = useFetchAllCourse();
  const { fetchExamList } = useFetchAllExam();

  useEffect(() => {
    fetchCollegeList();
    fetchCourseList();
    fetchExamList();
  }, []);

  const { openAfterLoginModel, openLoginModel } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const handelBurgerClick = () => {
    setIsBurgerClicked(true);
  };

  const handleModel = () => {
    if (!localStorage.getItem('loginResponse')) {
      dispatch(toggelLoginModel({ flag: true }));
      dispatch(toggelAfterLoginModel({ flag: false }));
    } else {
      dispatch(toggelLoginModel({ flag: false }));
      dispatch(toggelAfterLoginModel({ flag: !openAfterLoginModel }));
    }
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && (openLoginModel || openAfterLoginModel)) {
        dispatch(toggelLoginModel({ flag: false }));
        dispatch(toggelAfterLoginModel({ flag: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openLoginModel, openAfterLoginModel, dispatch]);

  return (
    <>
      {(openAfterLoginModel || openLoginModel) && (
        <div ref={modalRef}>
          {openAfterLoginModel && <AfterLoginModel />}
          {openLoginModel && <LoginModel />}
        </div>
      )}
      <section className='headertop-header-container'>
      <div className="h7_header-top d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9">
              <ul className="h7_header-top-list d-flex align-items-center">
                <li className="position-relative">
                  <span href="tel:8812356877787 ">
                    <i className="fa fa-phone" aria-hidden="true"></i> +919886220024{' '}
                  </span>
                </li>
                <li>
                  <span href="mailto:info@xyz-text.com ">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i> admissionkartinfo@gmail.com
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3">
              <div className="h7_header-top-social">
                <ul className="d-flex align-items-center justify-content-end">
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
                      <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <section className="navbar-left">
              <Link to="/">
                <img src={logo} alt="logo" className="img-fluid" />
              </Link>
              <div className="burger" id="burger" onClick={() => handelBurgerClick()}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </div>
            </section>
            <section className="navbar-center">
              <span
                className={isBurgerclicked ? 'overlay is-active' : 'overlay'}
                onClick={() => setIsBurgerClicked(false)}
              ></span>
              <div className={isBurgerclicked ? 'menu is-active' : 'menu'} id="menu">
                <div className="menu-header">
                  <span className="menu-arrow">
                    <i className="bx bx-chevron-left"></i>
                  </span>
                  <span className="menu-title"></span>
                </div>
                <ul className="menu-inner">
                  {tabName.map((list, index) => (
                    <li className="menu-item menu-dropdown" key={index}>
                      <Link to={list.path} onClick={() => setIsBurgerClicked(false)}>
                        <span className="menu-link">
                          {list.name}
                          <i className="bx bx-chevron-right"></i>
                        </span>
                      </Link>
                      {list.megaMenu && (
                        <MegaMenu menuData={megaMenuData.filter((data) => data.mainCategory === list.name)} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className='header-navbar-search'>
              <CustomSearch/>
            </section>
            <section className="navbar-right">
              <span className="menu-block">
                <img src="images/search-icon.svg" alt="" />
              </span>
              <button className="menu-block" onClick={handleModel}>
                <img src={userImage} alt="" />
              </button>
            </section>
          </nav>
        </div>
      </header>
      </section>
    </>
  );
};

export default Header;
