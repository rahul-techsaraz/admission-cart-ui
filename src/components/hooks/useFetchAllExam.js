import { useDispatch } from 'react-redux';
import { fetchAllExamList } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useFetchAllExam = () => {
  const dispatch = useDispatch();

  const fetchExamList = async () => {
    dispatch(
      fetchAllExamList({
        url: constants.apiEndPoint.NEW_EXAM_API,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };
  const fetchTrendingExam = (exams) => {
    return exams.filter((exam) => exam?.is_trending) ?? [];
  };
  return { fetchExamList, fetchTrendingExam };
};
