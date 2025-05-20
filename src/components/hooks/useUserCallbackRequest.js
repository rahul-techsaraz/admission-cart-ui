import React from 'react';
import { useDispatch } from 'react-redux';
import { addUserCallBackRequest } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

export const useUserCallbackRequest = () => {
  const dispatch = useDispatch();

  const sendUserCallbackRequest = (payload) => {
    return dispatch(
      addUserCallBackRequest({
        url: constants.apiEndPoint.USER_CALL_BACK_REQUEST,
        method: constants.apiMethod.POST,
        header: constants.apiHeader.HEADER,
        payload: payload,
      })
    );
  };
  return { sendUserCallbackRequest };
};
