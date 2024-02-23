import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  import { AboutMainPage } from "../components/about/AboutMainPage";
import AppLayout from "../App";
import ErrorElement from "../components/ErrorElement/Error";
import Header from "../components/header/Header";
import NewsLetter from "../components/footer/NewsLetter";
import ContactUsPage from "../page/ContactUsPage";
import Footer from "../components/footer/Footer";
import CourseListing from "../components/courses/CourseListing";
import { CollegeSection } from "../components/about/offers/CollegesSection";
import CollegeListing from "../components/colleges/CollegeListing";
import ExamListing from "../components/exam/ExamListing";
import CourseDetails from "../components/courses/course_details/CourseDetails";
import CollegeDetails from "../components/colleges/college_details/CollegeDetails";
import ExamDetails from "../components/exam/exam_details/ExamDetails";
import DashBoard  from "../components/users/DashBoard";

  export const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children:[
        {
          path: "/",
          element: (
            <DashBoard />
          ),
        },
        {
          path: "about",
          element: <AboutMainPage/>,
        },
        {
          path: "/contact-us",
          element: <ContactUsPage/>,
        },
        {
          path: "/user/dashboard",
          element: <DashBoard />,
        },
        {
          path: '/courses_list',
          element:<CourseListing />
        },
        {
          path: '/courses_details/:course_name',
          element:<CourseDetails />
        },
        {
          path: '/colleges_details/:college_name',
          element:<CollegeDetails />
        },
        {
          path: '/exam_details/:exam_name',
          element:<ExamDetails />
        },
        {
          path: '/colleges_list',
          element:<CollegeListing />
        },
         {
          path: '/exam_list',
          element:<ExamListing />
        }
      ],
      errorElement: (<>
      <Header />
      <ErrorElement />
      <NewsLetter />
      <ContactUsPage />
      <Footer />
      </>),
    }
  ]);