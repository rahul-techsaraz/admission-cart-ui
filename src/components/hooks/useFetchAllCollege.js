import { useDispatch } from 'react-redux';
import { fetchAllCollegeList } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useFetchAllCollege = () => {
  const dispatch = useDispatch();

  const fetchCollegeList = async () => {
    dispatch(
      fetchAllCollegeList({
        url: constants.apiEndPoint.NEW_COLLEGE_API,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };

  const fetchTrendingCollege = (colleges) =>{
    const trendingColleges = colleges.filter((college)=>college.is_trending) ?? [];
    console.log({trendingColleges})
    return trendingColleges
  }
  return { fetchCollegeList, fetchTrendingCollege };
};
