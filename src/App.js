import './App.css';
import './css/document-responsive.css'
import './css/homepage-collage.css'
import './css/homepage-responsive.css'
import './css/model.css'
import './css/signin-collagedekho.css'
import './css/signin-responsive.css'
import './css/style.css'
import './css/responsive.css'
// import './css/collagedekho.css'

import Header from './components/header/Header';
import NewsLetter from './components/footer/NewsLetter';
import ContactUsPage from './page/ContactUsPage';
import Footer from './components/footer/Footer';
import router from './Routes/router';
import { Await, BrowserRouter, Outlet, RouterProvider, useLocation, useNavigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './state/store';
import ErrorBoundary from './components/ErrorBoundary';
import { useEffect } from 'react';
import { toggelAfterLoginModel, toggelLoginModel, updateauthenticateUser } from './features/commonSlice';
import constants from './utils/Constants/constants';
import httpFetch from './fetch/useFetch'
import {register} from "swiper/element/bundle"
import Loader from './components/Loader/Loader';
import ScrollTop from './components/scroll/ScrollTop';
import ChatBot from './components/chatBot/ChatBot';
import ContactUsPopup from './components/contactUs/ContactUsPopup';
import LoginPopup from './components/contactUs/LoginPopup';
import FeedbackPopup from './components/contactUs/FeedbackPopup';

const AppLayout = () => {
  const {isLoading, isLoginPopup, isSignupPopup, authenticateUser, isFeedbackPopup} = useSelector(state=>state.common)
  const {loader} = useSelector(state=>state.userSlice)
  const location = useLocation()
  register()

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location.pathname])

  return (
    <>
      {(isLoading || loader) && <Loader />}
      <div className="app position-relative">
        <Header />
        <Outlet />
        <ScrollTop />
        <ChatBot />
        {(isLoginPopup && authenticateUser===false) && <LoginPopup />}
        {(isSignupPopup && authenticateUser===false) && <ContactUsPopup />}
        {isFeedbackPopup && <FeedbackPopup />}
        <NewsLetter />
        {/* <ContactUsPage /> */}
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;