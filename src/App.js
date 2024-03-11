import './App.css';
import './css/account-collagedekho.css';
import './css/account-responsive.css';
import './css/career-collage-dekho.css';
import './css/career-responsive.css';
import './css/collage-collagedekho.css';
import './css/collagedekho.css'
import './css/collages-responsive.css'
import './css/counsellors-collagedekho.css'
import './css/counsellors-responsive.css'
import './css/document-collagedekho.css'
import './css/document-responsive.css'
import './css/feed-collage-dekho.css'
import './css/homepage-collage.css'
import './css/homepage-responsive.css'
import './css/insurance-collagedekho.css'
import './css/insurance-responsive.css'
import './css/model.css'
import './css/payments-collagedekho.css'
import './css/perfomence-collagedekho.css'
import './css/perfomence-responsive.css'
import './css/profilepage-collage-dekho.css'
import './css/responsive-feed-collagedekho.css'
import './css/responsive-paymentscollagedekho.css'
import './css/responsive-profile-page.css'
import './css/responsive.css'
import './css/rewards-collagedekho.css'
import './css/rewards-responsive.css'
import './css/signin-collagedekho.css'
import './css/signin-responsive.css'
import './css/style-bck-up.css'
import './css/style.css'

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