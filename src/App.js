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
import { Await, BrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './state/store';
import ErrorBoundary from './components/ErrorBoundary';
import { useEffect } from 'react';
import { toggelAfterLoginModel, toggelLoginModel, updateauthenticateUser } from './features/commonSlice';
import constants from './utils/Constants/constants';
import httpFetch from './fetch/useFetch'
import {register} from "swiper/element/bundle"
import Loader from './components/Loader/Loader';

const AppLayout = () => {
  const {isLoading} = useSelector(state=>state.common)
  register()

  return (
    <>
      {isLoading && <Loader />}
      <div className="app">
        <Header />
        <Outlet />
        <NewsLetter />
        <ContactUsPage />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;