import { useDispatch } from 'react-redux';
import { fetchAllCourseList } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useFetchAllCourse = () => {
  const dispatch = useDispatch();

  const fetchCourseList = async () => {
    dispatch(
      fetchAllCourseList({
        url: constants.apiEndPoint.NEW_COURSE_API,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };

  const getTrendingCourses = (course) => {
    const trendingCourse = course.filter((trendingCourse) => trendingCourse.is_trending) ?? [];
    console.log({trendingCourse})
    return trendingCourse;
  };
  return { fetchCourseList, getTrendingCourses };
};
