import React, { useEffect, useState } from 'react';
import ProfileTheme from '../../utils/Constants/custom-components/ProfileTheme';
import { Link } from 'react-router-dom';
import httpFetch from '../../fetch/useFetch';
import constants from '../../utils/Constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import CustomInputTextBox from '../../utils/Constants/custom-components/CustomInputTextBox';
import CustomSelectBox from '../../utils/Constants/custom-components/CustomSelectBox';
import CustomeInputRadio from '../../utils/Constants/custom-components/CustomeInputRadio';
import { updateUserInfo } from '../../features/userSlice';
import { useFetchUserBasicDetails } from '../hooks/useFetchUserBasicDetails';
import { saveUserBasicDetails } from '../ReduxThunk/CommonThunk';

export default function ProfileBasicDetails() {
  const [show, setShow] = useState(true);
  const [toggleButton, setToggleButton] = useState(true);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userSlice);
  const { fetchUserBasicDetail } = useFetchUserBasicDetails();

  const validate = () => {
    if (
      userInfo?.full_name !== '' &&
      userInfo?.dob !== '' &&
      userInfo?.social_category !== '' &&
      userInfo?.gender !== '' &&
      userInfo?.marital_status !== '' &&
      userInfo?.physically_challenged !== '' &&
      userInfo?.city !== '' &&
      userInfo?.state !== ''
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const handleEdit = async () => {
    setToggleButton(false);
    setShow(false);
  };
  const handleSave = async () => {
    const payload = {
      requestType: 'userDetails',
      email: userInfo?.email,
      full_name: userInfo?.full_name,
      city: userInfo?.city,
      state: userInfo?.state,
      country: 'India',
      dob: userInfo?.dob,
      gender: userInfo?.gender,
      marital_status: userInfo?.marital_status,
      physically_challenged: userInfo.physically_challenged,
      social_category: userInfo?.social_category,
    };
    const response = await dispatch(
      saveUserBasicDetails({
        url: constants.apiEndPoint.USER_DETAILS_SAVE_UPDATE,
        method: constants.apiMethod.POST,
        header: constants.apiHeader.HEADER,
        body: payload,
      })
    );
    if (response?.payload?.status === constants.apiResponseStatus.SUCCESS) {
      fetchUserBasicDetail();
      setShow(true);
    }
  };
  const handleUpdate = async () => {
    const payload = {
      requestType: 'userDetails',
      email: userInfo?.email,
      full_name: userInfo?.full_name,
      city: userInfo?.city,
      state: userInfo?.state,
      country: 'India',
      dob: userInfo?.dob,
      gender: userInfo?.gender,
      marital_status: userInfo?.marital_status,
      physically_challenged: userInfo.physically_challenged,
      social_category: userInfo?.social_category,
    };
    const response = await dispatch(
      saveUserBasicDetails({
        url: constants.apiEndPoint.USER_DETAILS_SAVE_UPDATE,
        method: constants.apiMethod.PUT,
        header: constants.apiHeader.HEADER,
        body: payload,
      })
    );
    if (response?.payload?.status === constants.apiResponseStatus.SUCCESS) {
      fetchUserBasicDetail();
      setShow(true);
    }
  };
  useEffect(() => {
    validate();
  }, [
    userInfo?.full_name,
    userInfo?.dob,
    userInfo?.social_category,
    userInfo?.gender,
    userInfo?.marital_status,
    userInfo?.physically_challenged,
    userInfo?.city,
    userInfo?.state,
  ]);
  useEffect(() => {
    fetchUserBasicDetail();
  }, []);
  return (
    <>
      {show === true ? (
        <>
          <ProfileTheme>
            <div className="besic-detials-h3-i">
              <h3>Basic Details</h3>
              <Link>
                <i className="fa-solid fa-pen-fancy" onClick={() => handleEdit()}></i>
              </Link>
            </div>
            <div className="fname-dob-social">
              <div className="full-name">
                Full Name
                <h3 className="full-name-h3">{userInfo.full_name}</h3>
              </div>
              <div className="dob">
                DOB
                <h3 className="do-b">{userInfo.dob ? userInfo.dob : 'N/A'}</h3>
              </div>
              <div className="social-category">
                Social Category
                <h3 className="social">{userInfo.social_category ? userInfo.social_category : 'N/A'}</h3>
              </div>

              <div className="gender">
                Gender
                <h3 className="gender-h3">{userInfo.gender ? userInfo.gender : 'N/A'}</h3>
              </div>
              <div className="marital-status">
                Marital Status
                <h3 className="marital-h3">{userInfo.marital_status ? userInfo.marital_status : 'N/A'}</h3>
              </div>
              <div className="physically-challenged">
                Physically challenged?
                <h3 className="physically-h3">
                  {userInfo.physically_challenged ? userInfo.physically_challenged : 'N/A'}
                </h3>
              </div>
              <div className="full-name">
                Mobile Number
                <h3 className="full-name-h3">{userInfo.phone}</h3>
              </div>
              <div className="dob">
                Email address
                <h3 className="do-b">{userInfo.email}</h3>
              </div>
              <div className="social-category">
                City
                <h3 className="social">{userInfo.city ? userInfo.city : 'N/A'}</h3>
              </div>
              <div className="gender">
                State
                <h3 className="gender-h3">{userInfo.state ? userInfo.state : 'N/A'}</h3>
              </div>
            </div>
          </ProfileTheme>
        </>
      ) : (
        <>
          <ProfileTheme>
            <div className="besic-detials-h3-i">
              <h3>Basic Details</h3>
            </div>
            <div className="fname-dob-social-hide">
              <CustomInputTextBox
                divlable="Full Name"
                inputType="text"
                spellcheck="false"
                inputLabel="Full Name"
                onChange={(e) => dispatch(updateUserInfo({ userData: { ...userInfo, full_name: e.target.value } }))}
                style={{ fontWeight: '600' }}
                placeHolder={userInfo?.full_name}
                inputValue={userInfo?.full_name}
              />
              <CustomInputTextBox
                divlable="DOB"
                inputType="date"
                inputId="birth_date"
                inputName="birth_date"
                onChange={(e) => dispatch(updateUserInfo({ userData: { ...userInfo, dob: e.target.value } }))}
                style={{ fontWeight: '600' }}
                placeHolder={userInfo?.dob}
                inputValue={userInfo?.dob}
              />
              <CustomSelectBox
                divlable="Social Category"
                name="test"
                arialInvalid="false"
                onChange={(e) =>
                  dispatch(updateUserInfo({ userData: { ...userInfo, social_category: e.target.value } }))
                }
                style={{ fontWeight: '600' }}
                values={['Social Category', 'General', 'OBC', 'SC', 'Others']}
                inputValue={userInfo?.social_category}
              />
              <CustomeInputRadio
                divlable="Gender"
                style={{ fontWeight: '600' }}
                options={['Male', 'Female', 'Others']}
                name={'frequency'}
                onChange={(e) => dispatch(updateUserInfo({ userData: { ...userInfo, gender: e.target.value } }))}
                inputValue={userInfo?.gender}
              />
              <CustomeInputRadio
                divlable="Marital Status"
                style={{ fontWeight: '600' }}
                options={['Married', 'Unmarried']}
                name={'frequency1'}
                onChange={(e) =>
                  dispatch(updateUserInfo({ userData: { ...userInfo, marital_status: e.target.value } }))
                }
                inputValue={userInfo?.marital_status}
              />
              <CustomeInputRadio
                divlable="Physically Challanged?"
                style={{ fontWeight: '600' }}
                options={['Yes', 'No']}
                name={'frequency2'}
                onChange={(e) =>
                  dispatch(updateUserInfo({ userData: { ...userInfo, physically_challenged: e.target.value } }))
                }
                inputValue={userInfo.physically_challenged}
              />
              <CustomInputTextBox
                divlable="City"
                inputType="text"
                spellcheck="false"
                inputLabel="City"
                onChange={(e) => dispatch(updateUserInfo({ userData: { ...userInfo, city: e.target.value } }))}
                style={{ fontWeight: '600' }}
                placeHolder={userInfo?.city}
                inputValue={userInfo?.city}
              />
              <CustomInputTextBox
                divlable="State"
                inputType="text"
                spellcheck="false"
                inputLabel="State"
                onChange={(e) => dispatch(updateUserInfo({ userData: { ...userInfo, state: e.target.value } }))}
                style={{ fontWeight: '600' }}
                placeHolder={userInfo?.state}
                inputValue={userInfo?.state}
              />
            </div>
            <div className="besic-detials-all-text-hide-button-parent">
              <button className="besic-detials-all-text-hide-button1" onClick={() => setShow(true)}>
                Cancle
              </button>
              {toggleButton === true ? (
                <button
                  className="besic-detials-button-save"
                  disabled={disable === true ? true : false}
                  onClick={() => handleSave()}
                  style={disable ? { backgroundColor: 'lightgray' } : {}}
                >
                  Save
                </button>
              ) : (
                <button
                  className="besic-detials-button-save"
                  disabled={disable === true ? true : false}
                  onClick={() => handleUpdate()}
                  style={disable ? { backgroundColor: 'lightgray' } : {}}
                >
                  Update
                </button>
              )}
            </div>
          </ProfileTheme>
        </>
      )}
    </>
  );
}
