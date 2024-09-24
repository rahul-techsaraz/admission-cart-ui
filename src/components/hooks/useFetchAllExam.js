import { useDispatch } from "react-redux"
import { fetchAllExamList } from "../ReduxThunk/CommonThunk"
import constants from "../../utils/Constants/constants"

export const useFetchAllExam=()=>{
    const dispatch = useDispatch()

    const fetchExamList = async()=>{
        dispatch(fetchAllExamList({
            url: constants.apiEndPoint.EXAM_LIST + '?requestType=basicExamDetails',
            method: constants.apiMethod.GET,
            header: constants.apiHeader.HEADER,
        }))
    }
    return {fetchExamList}
}