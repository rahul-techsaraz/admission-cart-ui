import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggelIsLoginPopup } from '../../../features/commonSlice'

const CustomSearch = () => {
    const [searchItem, setSearchItem] = useState('')
    const [suggestion, setSuggestion] = useState([])
    const { allCollegeData, allExamData, allCourseData, authenticateUser} = useSelector((state)=>state.common)
    const dispatch = useDispatch()
    console.log(allCollegeData)
    console.log(allExamData)
    console.log(allCourseData)
    const handleInput = (e) => {
        const searchKey = e.target.value
        setSearchItem(searchKey)
        const filteredColleges = allCollegeData.filter((college) =>
            college.college_name.toLowerCase().includes(searchKey.toLowerCase())
          );
      
          const filteredExams = allExamData.filter((exam) =>
            exam.exam_name.toLowerCase().includes(searchKey.toLowerCase())
          );
      
          const filteredCourses = allCourseData.filter((course) =>
            course.course_name.toLowerCase().includes(searchKey.toLowerCase())
          );

          const allSuggestions = [
            ...filteredColleges.map((college) => ({
              type: "College",
              link: "/colleges_details/",
              name: college.college_name,
              id: college.college_id,
            })),
            ...filteredExams.map((exam) => ({
              type: "Exam",
              link: "/exam_details/",
              name: exam.exam_name,
              id: exam.exam_id,
            })),
            ...filteredCourses.map((course) => ({
              type: "Course",
              link: "/courses_details/",
              name: course.course_name,
              id: course.course_id,
            })),
          ];
          setSuggestion(allSuggestions)
    }
    const handleClick = () => {
        if (!authenticateUser) {
            dispatch(toggelIsLoginPopup({ flag: true }));
        }
    }
  return (
    <div className="banner1_searchbutton_button">
        <input type="text" placeholder="Search for Collages, Exams, Courses..." value={searchItem} onChange={(e)=>handleInput(e)}/>
        <span className='banner-search-icon'><i className="fa-solid fa-magnifying-glass"></i></span>
        <div className={searchItem ? 'search-suggestion' : 'hidden'}>
            {searchItem && 
            <ul>
                {suggestion.length > 0 ? 
                    suggestion.map((suggested)=>(
                        <Link to={authenticateUser && `${suggested.link}${suggested.id}`} onClick={()=>handleClick()}>
                            <li>
                                {suggested.name}
                            </li>
                        </Link>
                    ))
                :
                    <li>
                        No Result Found
                    </li>
                }
            </ul>
            }
        </div>
    </div>
  )
}

export default CustomSearch