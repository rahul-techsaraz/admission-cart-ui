import './App.css';
import './css/style.css';
import './css/responsive.css';
import './css/homepage-responsive.css';
import './css/homepage-collage.css';
import './css/homepage-collage.css';
import './css/collagedekho.css'

import './css/model.css';
import Header from './components/header/Header';

import NewsLetter from './components/footer/NewsLetter';
import ContactUsPage from './page/ContactUsPage';
import Footer from './components/footer/Footer';
import router from './Routes/router';
import { BrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';

const AppLayout = () => {
 

  return (
     <Provider store={store}>
 <div className="app">
          <Header />
          <Outlet />
          <NewsLetter />
          <ContactUsPage />
          <Footer />
        </div>
     </Provider>
       
  );
};

export default AppLayout;