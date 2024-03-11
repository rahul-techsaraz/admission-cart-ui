import './App.css';
import './css/document-responsive.css'
import './css/homepage-collage.css'
import './css/homepage-responsive.css'
import './css/model.css'
import './css/responsive.css'
import './css/signin-collagedekho.css'
import './css/signin-responsive.css'
import './css/style.css'

import Header from './components/header/Header';

import NewsLetter from './components/footer/NewsLetter';
import ContactUsPage from './page/ContactUsPage';
import Footer from './components/footer/Footer';
import router from './Routes/router';
import { BrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import ErrorBoundary from './components/ErrorBoundary';

const AppLayout = () => {
 

  return (
 <div className="app">
          <Header />
          <Outlet />
          <NewsLetter />
          <ContactUsPage />
          <Footer />
        </div>
     
       
  );
};

export default AppLayout;