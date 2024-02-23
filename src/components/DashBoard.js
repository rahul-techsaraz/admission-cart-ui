import AboutUs from "../page/AboutUs"
import AbroadSuccessStory from "../page/AbroadSuccessStory"
import BlogSection from "../page/BlogSection"
import CareerProcess from "../page/CareerProcess"
import CareerStep from "../page/CareerStep"
import ChoiceSection from "../page/ChoicePlace"
import DataCounter from "../page/DataCounter"
import DreamJobContainer from "../page/DreamJobContainer"
import ExploreCoursesPage from "../page/ExploreCoursesPage"
import AdmissionProcess from "./AdmissionProcess"
import CourseList from "./CourseList"
import ExploreCareer from "./ExploreCareer"
import LandingContainer from "./LandingContainer"
import MockExamList from "./MockExamList"
import Testimonial from "./Testimonial"
import TrandingSection from "./TrandingSection"

const DashBoard = () => {
    return (
        <>
         <LandingContainer />
     <MockExamList />
     <CourseList />
     <AdmissionProcess />
     <CareerProcess />
     <ChoiceSection />
     <TrandingSection />
    <DreamJobContainer />
    <CareerStep />
   <ExploreCoursesPage />
    <ExploreCareer />
    <AbroadSuccessStory />
    <AboutUs />
    <BlogSection />
    <DataCounter />
    <Testimonial />
        </>
    )
}
export default DashBoard