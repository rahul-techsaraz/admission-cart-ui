import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomSelectBox from '../../utils/Constants/custom-components/CustomSelectBox';
import constants from '../../utils/Constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPreferences } from '../../features/userSlice';
import { useFetchAllCategory } from '../hooks/useFetchAllCategory';
import { useFetchUserPreferenceDetails } from '../hooks/useFetchUserPreferenceDetails';
import { saveUserPreferenceDetails } from '../ReduxThunk/CommonThunk';

export default function ProfilePreferences() {
  const [show, setShow] = useState(true);
  const [toggleButton, setToggleButton] = useState(true);
  const [disable, setDisable] = useState(true);
  const { userInfo, userPreferences, specializationCategory, userPreferenceInfo } = useSelector(
    (state) => state.userSlice
  );
  const dispatch = useDispatch();
  const { fetchCategory } = useFetchAllCategory();
  const { fetchPreferences } = useFetchUserPreferenceDetails();

  const handleEdit = async () => {
    if (userPreferenceInfo.length > 0) {
      dispatch(updateUserPreferences({ preferences: userPreferenceInfo[0] }));
      setToggleButton(false);
    }
    setShow(false);
  };
  const handleSave = async () => {
    try {
      const payload = {
        requestType: 'collegePreferences',
        email: userInfo.email,
        level: userPreferences?.level,
        specialization: userPreferences?.specialization,
        location: userPreferences?.location,
        college_type: userPreferences?.college_type,
        fee_range: userPreferences?.fee_range,
        interested_abroad: userPreferences?.interested_abroad,
        need_loan: userPreferences?.need_loan,
      };
      const response = await dispatch(
        saveUserPreferenceDetails({
          url: constants.apiEndPoint.USER_PREFERENCE_SAVE_UPDATE,
          method: constants.apiMethod.POST,
          header: constants.apiHeader.HEADER,
          body: payload,
        })
      );
      console.log(response);
      if (response?.payload?.status === 'success') {
        fetchPreferences();
        setShow(true);
      }
    } catch (err) {
      alert('Something went Wrong');
    }
  };
  const handleUpdate = async () => {
    try {
      const payload = {
        requestType: 'collegePreferences',
        email: userInfo.email,
        level: userPreferences?.level,
        specialization: userPreferences?.specialization,
        location: userPreferences?.location,
        college_type: userPreferences?.college_type,
        fee_range: userPreferences?.fee_range,
        interested_abroad: userPreferences?.interested_abroad,
        need_loan: userPreferences?.need_loan,
      };
      const response = await dispatch(
        saveUserPreferenceDetails({
          url: constants.apiEndPoint.USER_PREFERENCE_SAVE_UPDATE,
          method: constants.apiMethod.PUT,
          header: constants.apiHeader.HEADER,
          body: payload,
        })
      );
      if (response?.payload?.status === 'success') {
        fetchPreferences();
        setShow(true);
      }
    } catch (err) {
      alert('Something went Wrong');
    }
  };
  const handleSaveOrUpdate = (e) => {
    if (e.target.innerText === 'SAVE') {
      handleSave();
    } else {
      handleUpdate();
    }
  };
  const validate = () => {
    if (
      userPreferences?.level !== '' &&
      userPreferences?.specialization !== '' &&
      userPreferences?.location !== '' &&
      userPreferences?.college_type !== '' &&
      userPreferences?.fee_range !== '' &&
      userPreferences?.interested_abroad !== '' &&
      userPreferences?.need_loan !== ''
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  useEffect(() => {
    validate();
  }, [
    userPreferences?.level,
    userPreferences?.specialization,
    userPreferences?.location,
    userPreferences?.college_type,
    userPreferences?.fee_range,
    userPreferences?.interested_abroad,
    userPreferences?.need_loan,
  ]);
  useEffect(() => {
    fetchPreferences();
    fetchCategory();
  }, []);
  return (
    <>
      {show ? (
        <div className="preferences">
          <div className="preferences-h3-i">
            <h3>Preferences</h3>
            <Link>
              <i className="fa-solid fa-pen-fancy" onClick={() => handleEdit()}></i>
            </Link>
          </div>
          <div className="preferences-all-text">
            <div className="text">
              Level
              <h6>{userPreferenceInfo.length > 0 ? userPreferenceInfo[0]?.level : 'NA'}</h6>
            </div>
            <div className="text">
              Specialization
              <h6>{userPreferenceInfo.length > 0 ? userPreferenceInfo[0]?.specialization : 'NA'}</h6>
            </div>
            <div className="text">
              Location
              <h6>{userPreferenceInfo.length > 0 ? userPreferenceInfo[0]?.location : 'NA'}</h6>
            </div>
            <div className="text">
              College Type
              <h6>{userPreferenceInfo.length > 0 ? userPreferenceInfo[0]?.college_type : 'NA'}</h6>
            </div>
            <div className="text">
              Fee Range
              <h6>{userPreferenceInfo.length > 0 ? userPreferenceInfo[0]?.fee_range : 'NA'}</h6>
            </div>
            {/* <div className="text">Colleges
                    <h6>{userPreferenceInfo.length > 0 ? userPreferenceInfo[0]?.colleges : "NA"}</h6>
                </div> */}
            <div className="text">
              Interested in studying abroad?
              <h6>{userPreferenceInfo.length > 0 ? userPreferenceInfo[0]?.interested_abroad : 'NA'}</h6>
            </div>
            <div className="text">
              Need a loan?
              <h6>{userPreferenceInfo.length > 0 ? userPreferenceInfo[0]?.need_loan : 'NA'}</h6>
            </div>
          </div>
        </div>
      ) : (
        <div className="preferences">
          <div className="preferences-h3-i">
            <h3>Preferences</h3>
          </div>
          <div className="preferences-all-text">
            <CustomSelectBox
              divlable="Level"
              onChange={(e) =>
                dispatch(updateUserPreferences({ preferences: { ...userPreferences, level: e.target.value } }))
              }
              style={{ fontWeight: '600' }}
              values={constants?.userPreferencesLevel}
              inputValue={userPreferences?.level}
            />
            <CustomSelectBox
              divlable="Specialization"
              onChange={(e) =>
                dispatch(updateUserPreferences({ preferences: { ...userPreferences, specialization: e.target.value } }))
              }
              style={{ fontWeight: '600' }}
              values={specializationCategory}
              inputValue={userPreferences?.specialization}
            />
            <CustomSelectBox
              divlable="Location"
              onChange={(e) =>
                dispatch(updateUserPreferences({ preferences: { ...userPreferences, location: e.target.value } }))
              }
              style={{ fontWeight: '600' }}
              values={constants?.state}
              inputValue={userPreferences?.location}
            />
            <CustomSelectBox
              divlable="College Type"
              onChange={(e) =>
                dispatch(updateUserPreferences({ preferences: { ...userPreferences, college_type: e.target.value } }))
              }
              style={{ fontWeight: '600' }}
              values={constants?.collegeType}
              inputValue={userPreferences?.college_type}
            />
            <CustomSelectBox
              divlable="Fee Range"
              onChange={(e) =>
                dispatch(updateUserPreferences({ preferences: { ...userPreferences, fee_range: e.target.value } }))
              }
              style={{ fontWeight: '600' }}
              values={constants?.feeRange}
              inputValue={userPreferences?.fee_range}
            />
            {/* <CustomSelectBox
                divlable="Colleges" 
                onChange={(e)=>setColleges(e.target.value)}
                style={{fontWeight:"600"}}
                values={['Colleges', 'A', 'B','C']}
                /> */}
            <CustomSelectBox
              divlable="Interested in studying abroad"
              onChange={(e) =>
                dispatch(
                  updateUserPreferences({ preferences: { ...userPreferences, interested_abroad: e.target.value } })
                )
              }
              style={{ fontWeight: '600' }}
              values={constants?.studingAbroad}
              inputValue={userPreferences?.interested_abroad}
            />
            <CustomSelectBox
              divlable="Need a Loan"
              onChange={(e) =>
                dispatch(updateUserPreferences({ preferences: { ...userPreferences, need_loan: e.target.value } }))
              }
              style={{ fontWeight: '600' }}
              values={constants?.loan}
              inputValue={userPreferences?.need_loan}
            />
          </div>
          <div className="besic-detials-all-text-hide-button-parent">
            <button className="besic-detials-all-text-hide-button1" onClick={() => setShow(true)}>
              Cancle
            </button>
            <button
              className="besic-detials-button-save"
              disabled={disable === true ? true : false}
              onClick={(e) => handleSaveOrUpdate(e)}
              style={disable ? { backgroundColor: 'lightgray' } : {}}
            >
              {toggleButton ? 'SAVE' : 'UPDATE'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
