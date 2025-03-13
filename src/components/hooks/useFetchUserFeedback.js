import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFeedback } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useFetchUserFeedback = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userSlice);

  const fetchFeedback = () => {
    dispatch(
      fetchUserFeedback({
        url: constants.apiEndPoint.USER_FEADBACK_RESPONSE + userInfo.email,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };
  return { fetchFeedback };
};
