import { useDispatch } from "react-redux"
import { fetchAllCourseList } from "../ReduxThunk/CommonThunk"
import constants from "../../utils/Constants/constants"

export const useFetchAllCourse=()=>{
    const dispatch = useDispatch()

    const fetchCourseList = async()=>{
        dispatch(fetchAllCourseList({
            url: constants.apiEndPoint.COURSE_LIST + "?requestType=getAllCourseDetails",
            method: constants.apiMethod.GET,
            header: constants.apiHeader.HEADER,
        }))
    }
    return {fetchCourseList}
}