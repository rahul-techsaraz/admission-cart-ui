import { useDebugValue, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toggelIsLoginPopup, updateauthenticateUser, updateLastLocation } from '../features/commonSlice';
import constants from '../utils/Constants/constants';
import httpFetch from '../fetch/useFetch';

const ProtectedRouter = ({ children }) => {
  const dispatch = useDispatch();
  const { authenticateUser } = useSelector((state) => state.common);
  const navigate = useNavigate();
  // let location = useLocation()
  // console.log(authenticateUser)
  // if(!authenticateUser){
  //     dispatch((updateLastLocation({location})))
  //     return <Navigate to="/" state={{from:location}} replace/>
  // }
  const authorise = async () => {
    if (!authenticateUser) {
      navigate('/');
    }
    const custHeader = {
      ...constants.apiHeader.HEADER,
      Authorization: JSON.parse(localStorage.getItem('loginResponse')).token,
    };
    const jsonData = await httpFetch(constants.apiEndPoint.USER_AUTHORISATION, custHeader, constants.apiMethod.GET);
    if (jsonData.success === 0) {
      localStorage.removeItem('loginResponse');
      dispatch(updateauthenticateUser({ flag: false }));
      navigate('/');
    }
  };
  useEffect(() => {
    if (!localStorage.getItem('loginResponse')) {
      dispatch(updateauthenticateUser({ flag: false }));
      navigate('/');
      dispatch(toggelIsLoginPopup({ flag: true }));
    } else {
      authorise();
    }
  }, [authenticateUser]);

  return children;
};
export default ProtectedRouter;
