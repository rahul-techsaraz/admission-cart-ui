import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import constants from '../../utils/Constants/constants';
import { fetchUserBasicDetails } from '../ReduxThunk/CommonThunk';

export const useFetchUserBasicDetails = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userSlice);

  const fetchUserBasicDetail = async () => {
    dispatch(
      fetchUserBasicDetails({
        url: constants.apiEndPoint.USER_DETAILS_GET_ALL_USER_TO_VERIFY + userInfo.email,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };
  return { fetchUserBasicDetail };
};
