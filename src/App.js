import './App.css';
import './css/document-responsive.css';
import './css/homepage-collage.css';
import './css/homepage-responsive.css';
import './css/model.css';
import './css/signin-collagedekho.css';
import './css/signin-responsive.css';
import './css/style.css';
import './css/responsive.css';
import './css/carousel.css';

import Header from './components/header/Header';
import NewsLetter from './components/footer/NewsLetter';
import Footer from './components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Loader from './components/Loader/Loader';
import ScrollTop from './components/scroll/ScrollTop';
import ContactUsPopup from './components/contactUs/ContactUsPopup';
import LoginPopup from './components/contactUs/LoginPopup';
import FeedbackPopup from './components/contactUs/FeedbackPopup';
import NotificationToast from './components/NotificationToast';
import ContactUsModal from './components/contactUs/ContactUsModal';

const AppLayout = () => {
  const { isLoading, isLoginPopup, isSignupPopup, isContactUs, authenticateUser, isFeedbackPopup, notificationInfo } = useSelector(
    (state) => state.common,
    shallowEqual
  );
  const { loader } = useSelector((state) => state.userSlice);
  const { isOpen, notificationType, notificationMessage } = notificationInfo;

  const location = useLocation();
  register();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {(isLoading || loader) && <Loader />}
      {isOpen && (
        <NotificationToast
          isOpen={isOpen}
          notificationType={notificationType}
          notificationMessage={notificationMessage}
        />
      )}

      <div className="app position-relative">
        <Header />

        <Outlet />
        <ScrollTop />
        {/* <ChatBot /> */}
        {isLoginPopup && authenticateUser === false && <LoginPopup />}
        {isSignupPopup && authenticateUser === false && <ContactUsPopup />}
        {isFeedbackPopup && <FeedbackPopup />}
        {isContactUs && <ContactUsModal />}
        <NewsLetter />
        {/* <ContactUsPage /> */}
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
