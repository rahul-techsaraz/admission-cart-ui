import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserEducationalDetails } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useFetchUserEducationalDetails = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userSlice);

  const fetchUserEducationalDetail = () => {
    dispatch(
      fetchUserEducationalDetails({
        url: constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY + userInfo.email,
        method: constants.apiMethod.GET,
        header: constants.apiHeader.HEADER,
      })
    );
  };
  return { fetchUserEducationalDetail };
};
