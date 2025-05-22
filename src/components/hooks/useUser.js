import React from 'react';
import { useDispatch } from 'react-redux';
import { sendMail, verifyEmail } from '../ReduxThunk/CommonThunk';
import constants from '../../utils/Constants/constants';

const useUser = () => {
  const dispatch = useDispatch();
  const verifyUserEmail = (email) => {
    return dispatch(
      verifyEmail({
        url: constants.apiEndPoint.VERIFY_EMAIL,
        method: constants.apiMethod.POST,
        header: constants.apiHeader.HEADER,
        payload: { email },
      })
    );
  };
  function objectToFormData(obj) {
    const formData = new FormData()
    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key])
      }
    }
    return formData
  }
  const sendEmail = (payload) => {
    // Assuming payload is an object with key-value pairs
    const formDataPayload = objectToFormData(payload)
    

    return dispatch(
      sendMail({
        url: constants.apiEndPoint.SENDMAIL,
        header: { Authorization: '865913f6692726f102d2715908fd0870bbbbd06775805c8396853cd348aa6108' },
        method: constants.apiMethod.POST,
        payload: formDataPayload
      })
    )
  }

  const generate4DigitOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString()
  }
  return { verifyUserEmail, sendEmail, generate4DigitOTP };
};

export default useUser;
