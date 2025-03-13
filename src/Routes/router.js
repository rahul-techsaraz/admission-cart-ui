import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import { AboutMainPage } from '../components/about/AboutMainPage';
import AppLayout from '../App';
import ErrorElement from '../components/ErrorElement/Error';
import Header from '../components/header/Header';
import NewsLetter from '../components/footer/NewsLetter';
import ContactUsPage from '../page/ContactUsPage';
import Footer from '../components/footer/Footer';
import CourseListing from '../components/courses/CourseListing';
import { CollegeSection } from '../components/about/offers/CollegesSection';
import CollegeListing from '../components/colleges/CollegeListing';
import ExamListing from '../components/exam/ExamListing';
import CourseDetails from '../components/courses/course_details/CourseDetails';
import CollegeDetails from '../components/colleges/college_details/CollegeDetails';
import ExamDetails from '../components/exam/exam_details/ExamDetails';
import DashBoard from '../components/DashBoard';
import UserDashBoard from '../components/users/UserDashBoard';
import DashBoardMainSection from '../components/users/DashBoardMainSection';
import Profile from '../components/users/Profile';
import Counsellor from '../components/users/Counsellor';
import Performence from '../components/users/Performence';
import Collages from '../components/users/Collages';
import Career from '../components/users/Career';
import Document from '../components/users/Document';
import Feed from '../components/users/Feed';
import ErrorBoundary from '../components/ErrorBoundary';
import Payment from '../components/users/Payment';
import Insurance from '../components/users/Insurance';
import Account from '../components/users/Account';
import PsychometricTest from '../components/PsychometricTest';
import Quiz from '../components/Quiz';
import ProtectedRouter from './ProtectedRouter';
import ContactMain from '../components/contactUs/contactDetails/ContactMain';

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <DashBoard />,
        },
        {
          path: 'aptitude_test',
          element: <PsychometricTest />,
        },
        {
          path: 'quiz',
          element: <Quiz />,
        },
        {
          path: 'about',
          element: <AboutMainPage />,
        },
        {
          path: '/contact-us',
          element: <ContactMain />,
        },
        {
          path: '/user/dashboard',
          element: (
            <ProtectedRouter>
              <UserDashBoard />
            </ProtectedRouter>
          ),

          children: [
            {
              path: 'home',
              element: <DashBoardMainSection />,
            },
            {
              path: 'profile',
              element: <Profile />,
            },
            {
              path: 'counsellor',
              element: <Counsellor />,
            },
            {
              path: 'performence',
              element: <Performence />,
            },
            {
              path: 'collages',
              element: <Collages />,
            },
            {
              path: 'career',
              element: <Career />,
            },
            {
              path: 'document',
              element: <Document />,
            },
            {
              path: 'feed',
              element: <Feed />,
            },
            {
              path: 'payment',
              element: <Payment />,
            },
            {
              path: 'insurance',
              element: <Insurance />,
            },
            {
              path: 'account',
              element: <Account />,
            },
          ],
        },
        {
          path: '/courses_list',
          element: <CourseListing />,
        },
        {
          path: '/courses_details/:course_id',
          element: <CourseDetails />,
        },
        {
          path: '/colleges_details/:college_id',
          element: <CollegeDetails />,
        },
        {
          path: '/exam_details/:exam_id',
          element: <ExamDetails />,
        },
        {
          path: '/colleges_list',
          element: <CollegeListing />,
        },
        {
          path: '/exam_list',
          element: <ExamListing />,
        },
      ],
      errorElement: (
        <>
          <Header />
          <ErrorElement />
          <NewsLetter />
          <ContactUsPage />
          <Footer />
        </>
      ),
    },
  ],
  {
    basename: '/ui',
  }
);
