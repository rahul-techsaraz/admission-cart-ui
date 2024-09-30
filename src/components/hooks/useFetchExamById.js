import { useDispatch } from "react-redux"
import { fetchExamById } from "../ReduxThunk/CommonThunk"
import constants from "../../utils/Constants/constants"

export const useFetchExamById=()=>{
    const dispatch = useDispatch()

    const fetchExam = async(exam_id)=>{
        await dispatch(fetchExamById({
            url: constants.apiEndPoint.EXAM_LIST + "?requestType=getExamDetails&exam_id="+exam_id,
            method: constants.apiMethod.GET,
            header: constants.apiHeader.HEADER,
        }))
    }
    return {fetchExam}
}