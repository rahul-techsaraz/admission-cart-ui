import { useDispatch } from 'react-redux';
import { fetchCourseById } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useFetchCourseById = () => {
  const dispatch = useDispatch();

  const fetchCourse = async (course_id) => {
    dispatch(
      fetchCourseById({
        url: constants.apiEndPoint.NEW_COURSE_API + '?course_id=' + course_id,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };
  return { fetchCourse };
};
