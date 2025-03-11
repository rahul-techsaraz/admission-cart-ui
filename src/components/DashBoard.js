import { useEffect } from "react"
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
import { useFetchAllCollege } from "./hooks/useFetchAllCollege"
import { useFetchAllCourse } from "./hooks/useFetchAllCourse"
import { useSelector } from "react-redux"
import { useFetchAllExam } from "./hooks/useFetchAllExam"

const DashBoard = () => {
    // const {fetchCollegeList} = useFetchAllCollege()
    // const {fetchCourseList} = useFetchAllCourse()
    // const {fetchExamList} = useFetchAllExam()
    
    // useEffect(()=>{
    //     fetchCollegeList()
    //     fetchCourseList()
    //     fetchExamList()
    // },[])
    // useEffect(()=>{
    //     console.log(allCollegeData)
    // },[allCollegeData])
    // useEffect(()=>{
    //     console.log(allExamData)
    // },[allExamData])
    // useEffect(()=>{
    //     console.log(allCourseData)
    // },[allCourseData])
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
    )
}
export default DashBoard