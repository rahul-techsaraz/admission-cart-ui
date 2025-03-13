import { useDispatch } from "react-redux"
import { fetchAllCollegeList } from "../ReduxThunk/CommonThunk"
import constants from "../../utils/Constants/constants"

export const useFetchAllCollege=()=>{
    const dispatch = useDispatch()

    const fetchCollegeList = async()=>{
        dispatch(fetchAllCollegeList({
            url: constants.apiEndPoint.COLLEGE_LIST + "?requestType=basicCollegeListing",
            method: constants.apiMethod.GET,
            header: constants.apiHeader.HEADER,
        }))
    }
    return {fetchCollegeList}
}