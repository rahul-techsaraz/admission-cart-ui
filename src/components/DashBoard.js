import AbroadSuccessStory from '../page/AbroadSuccessStory';
import CareerProcess from '../page/CareerProcess';
import CareerStep from '../page/CareerStep';
import ChoiceSection from '../page/ChoicePlace';
import DreamJobContainer from '../page/DreamJobContainer';
import ExploreCoursesPage from '../page/ExploreCoursesPage';
import AdmissionProcess from './AdmissionProcess';
import CourseList from './CourseList';
import ExploreCareer from './ExploreCareer';
import LandingContainer from './LandingContainer';
import TrandingSection from './TrandingSection';

const DashBoard = () => {
  return (
    <>
      <LandingContainer />
      {/* <MockExamList /> */}
      <CourseList />
      {/* <AboutUs /> */}
      <AdmissionProcess />
      <CareerProcess />
      <ChoiceSection />
      <TrandingSection />
      <DreamJobContainer />
      <CareerStep />
      <ExploreCoursesPage />
      <ExploreCareer />
      <AbroadSuccessStory />

      {/* <BlogSection /> */}
      {/* <DataCounter />
        <Testimonial /> */}
    </>
  );
};
export default DashBoard;
