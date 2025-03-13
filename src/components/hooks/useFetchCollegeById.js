import { useDispatch } from 'react-redux';
import { fetchCollegeById } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useFetchCollegeById = () => {
  const dispatch = useDispatch();

  const fetchCollege = async (college_id) => {
    dispatch(
      fetchCollegeById({
        url: constants.apiEndPoint.COLLEGE_LIST + '?requestType=getAllCollegeDetails&college_id=' + college_id,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };
  return { fetchCollege };
};
