import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserShortlist } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useFetchUserSortlist = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userSlice);

  const fetchSortlist = () => {
    dispatch(
      fetchUserShortlist({
        url: constants.apiEndPoint.USER_SORTLIST_GET_ALL + userInfo.email,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };
  return { fetchSortlist };
};
