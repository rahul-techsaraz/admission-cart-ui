import React, { useEffect, useState } from 'react';
import CustomInputTextBox from '../../utils/Constants/custom-components/CustomInputTextBox';
import constants from '../../utils/Constants/constants';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomSelectBox from '../../utils/Constants/custom-components/CustomSelectBox';
import { resetQualification, updateQualification } from '../../features/userSlice';
import { deleteUserEducationalDetails, saveUserEducationalDetails } from '../ReduxThunk/CommonThunk';
import { useFetchUserEducationalDetails } from '../hooks/useFetchUserEducationalDetails';

export default function ProfileEducationalDetails() {
  const [show, setShow] = useState(true);
  const [toggleButton, setToggleButton] = useState(true);
  const [disable, setDisable] = useState(true);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const { userQualificationInfo, userQualification, userInfo } = useSelector((state) => state.userSlice, shallowEqual);
  const { fetchUserEducationalDetail } = useFetchUserEducationalDetails();

  const handleAddDetails = () => {
    setToggleButton(true);
    setShow(false);
    setDisable(true);
    dispatch(resetQualification());
  };
  const handleEdit = async (i) => {
    dispatch(updateQualification({ qualificationInfo: userQualificationInfo[i] }));
    setIndex(i);
    setShow(false);
    setToggleButton(false);
  };
  const handleSave = async () => {
    try {
      if (dataCheck()) {
        const payload = {
          requestType: 'educationalQualification',
          email: userInfo?.email,
          class_name: userQualification?.class_name,
          board_name: userQualification?.board_name,
          school_name: userQualification?.school_name,
          passing_year: userQualification?.passing_year,
          stream: userQualification?.stream,
          marks_type: userQualification?.marks_type,
          marks_percentage: userQualification?.marks_percentage,
        };
        const response = await dispatch(
          saveUserEducationalDetails({
            url: constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_UPDATE,
            method: constants.apiMethod.POST,
            header: constants.apiHeader.HEADER,
            body: payload,
          })
        );
        if (response?.payload?.status === 'success') {
          fetchUserEducationalDetail();
          setShow(true);
        }
      } else {
        setDisable(true);
      }
    } catch (err) {
      alert('Something went Wrong');
    }
  };
  const handleUpdate = async () => {
    try {
      const payload = {
        requestType: 'educationalQualification',
        email: userInfo?.email,
        class_name: userQualification?.class_name,
        board_name: userQualification?.board_name,
        school_name: userQualification?.school_name,
        passing_year: userQualification?.passing_year,
        stream: userQualification?.stream,
        marks_type: userQualification?.marks_type,
        marks_percentage: userQualification?.marks_percentage,
      };
      const response = await dispatch(
        saveUserEducationalDetails({
          url: constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_UPDATE,
          method: constants.apiMethod.PUT,
          header: constants.apiHeader.HEADER,
          body: payload,
        })
      );
      if (response?.payload?.status === 'success') {
        fetchUserEducationalDetail();
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
  const handleDelete = async (i) => {
    try {
      const payload = {
        requestType: 'educationalQualification',
        email: userInfo.email,
        class_name: userQualificationInfo[i].class_name,
      };
      const response = await dispatch(
        deleteUserEducationalDetails({
          url: constants.apiEndPoint.USER_EDUCATIONAL_QUALIFICATION_UPDATE,
          method: constants.apiMethod.DELETE,
          header: constants.apiHeader.HEADER,
          body: payload,
        })
      );
      if (response?.payload.status === constants.apiResponseStatus.SUCCESS) {
        fetchUserEducationalDetail();
        setShow(true);
      }
    } catch (err) {
      alert('Something went Wrong');
    }
  };
  const validate = () => {
    if (
      userQualification?.class_name !== '' &&
      userQualification?.board_name !== '' &&
      userQualification?.school_name !== '' &&
      userQualification?.passing_year !== '' &&
      userQualification?.marks_type !== '' &&
      userQualification?.marks_percentage !== '' &&
      userQualification?.stream !== ''
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const dataCheck = () => {
    if (JSON.stringify(userQualificationInfo).includes(userQualification.class_name)) {
      alert('Data for selected Class aready exist');
      return false;
    } else {
      return true;
    }
  };
  const checkClassName = (e) => {
    if (index >= 0) {
      const list = userQualificationInfo.filter((v, i) => i !== index).map((val) => val.class_name);
      console.log('with index', index, e.target.value);
      console.log(userQualificationInfo);
      console.log(list);
      console.log(list.includes(e.target.value));
      if (list.includes(e.target.value)) {
        alert('Data for selected Class already exist');
      } else {
        dispatch(updateQualification({ qualificationInfo: { ...userQualification, class_name: e.target.value } }));
      }
    } else {
      console.log('without index');
      if (JSON.stringify(userQualificationInfo).includes(e.target.value)) {
        setDisable(true);
        alert('Data for selected Class aready exist');
      } else {
        dispatch(updateQualification({ qualificationInfo: { ...userQualification, class_name: e.target.value } }));
      }
    }
  };
  useEffect(() => {
    validate();
  }, [
    userQualification.class_name,
    userQualification.board_name,
    userQualification.school_name,
    userQualification.passing_year,
    userQualification.stream,
    userQualification.marks_type,
    userQualification.marks_percentage,
  ]);
  useEffect(() => {
    fetchUserEducationalDetail();
  }, []);
  return (
    <>
      {show === true ? (
        <>
          <div className="education-details">
            <div className="education-details-all-text">
              <div className="education-detials-h3-i">
                <h3>Education Details</h3>
                <Link>
                  <button className="besic-detials-button-save" onClick={() => handleAddDetails()}>
                    Add Details
                  </button>
                </Link>
              </div>
              {userQualificationInfo.length > 0 &&
                userQualificationInfo.map((data, index) => (
                  <>
                    <div
                      className="preferences-h3-i"
                      style={{ display: 'flex', columnGap: '30px', justifyContent: 'flex-start', marginTop: '30px' }}
                    >
                      <h4 className="education-h4">{data.class_name}</h4>
                      <Link>
                        <i className="fa-solid fa-pen-fancy" onClick={() => handleEdit(index)}></i>
                      </Link>
                      <Link>
                        <button className="besic-detials-button-save" onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </Link>
                    </div>
                    <div className="educationl-details-wraper" style={{ borderBottom: '1px solid #00ff91' }}>
                      <div className="full-name">
                        Board
                        <h3 className="full-name-h3">{data.board_name}</h3>
                      </div>
                      <div className="dob">
                        School
                        <h3 className="do-b">{data.school_name}</h3>
                      </div>
                      <div className="social-category">
                        Passing Year
                        <h3 className="social">{data.passing_year}</h3>
                      </div>

                      <div className="gender">
                        Marks Type
                        <h3 className="gender-h3">{data.marks_type}</h3>
                      </div>
                      <div className="marital-status">
                        Percentage/ CGPA
                        <h3 className="marital-h3">{data.marks_percentage}</h3>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="education-details">
            <div className="education-details-all-text">
              <div className="education-detials-h3-i">
                <h3>Education Details</h3>
              </div>
              <CustomSelectBox
                divlable="Educational Standared"
                name="test"
                arialInvalid="false"
                onChange={(e) => checkClassName(e)}
                style={{ fontWeight: '600' }}
                values={['Educational Standared', 'Class X', 'Class XII', 'Graduation', 'Diploma', 'Others']}
                inputValue={userQualification.class_name}
              />
              <div className="educationl-details-wraper">
                <CustomInputTextBox
                  inputType="text"
                  divlable="Board"
                  inputLabel="Board"
                  onChange={(e) =>
                    dispatch(
                      updateQualification({ qualificationInfo: { ...userQualification, board_name: e.target.value } })
                    )
                  }
                  style={{ fontWeight: '600' }}
                  inputValue={userQualification.board_name}
                />
                <CustomInputTextBox
                  inputType="text"
                  divlable="School"
                  inputLabel="School"
                  onChange={(e) =>
                    dispatch(
                      updateQualification({ qualificationInfo: { ...userQualification, school_name: e.target.value } })
                    )
                  }
                  style={{ fontWeight: '600' }}
                  inputValue={userQualification.school_name}
                />
                <CustomInputTextBox
                  inputType="text"
                  divlable="Passing Year"
                  inputLabel="Passing Year"
                  onChange={(e) =>
                    dispatch(
                      updateQualification({ qualificationInfo: { ...userQualification, passing_year: e.target.value } })
                    )
                  }
                  style={{ fontWeight: '600' }}
                  inputValue={userQualification.passing_year}
                />
                <CustomInputTextBox
                  inputType="text"
                  divlable="Marks Type"
                  inputLabel="Marks Type"
                  onChange={(e) =>
                    dispatch(
                      updateQualification({ qualificationInfo: { ...userQualification, marks_type: e.target.value } })
                    )
                  }
                  style={{ fontWeight: '600' }}
                  inputValue={userQualification.marks_type}
                />
                <CustomInputTextBox
                  inputType="text"
                  divlable="Percentage/ CGPA"
                  inputLabel="Percentage/CGPA"
                  onChange={(e) =>
                    dispatch(
                      updateQualification({
                        qualificationInfo: { ...userQualification, marks_percentage: e.target.value },
                      })
                    )
                  }
                  style={{ fontWeight: '600' }}
                  inputValue={userQualification.marks_percentage}
                />
                <CustomInputTextBox
                  inputType="text"
                  divlable="Stream"
                  inputLabel="Stream"
                  onChange={(e) =>
                    dispatch(
                      updateQualification({ qualificationInfo: { ...userQualification, stream: e.target.value } })
                    )
                  }
                  style={{ fontWeight: '600' }}
                  inputValue={userQualification.stream}
                />
              </div>
            </div>
            <div className="besic-detials-all-text-hide-button-parent">
              <button className="besic-detials-all-text-hide-button1" onClick={() => setShow(true)}>
                Cancle
              </button>
              <button
                className="besic-detials-button-save"
                disabled={disable}
                onClick={(e) => handleSaveOrUpdate(e)}
                style={disable ? { backgroundColor: 'lightgray' } : {}}
              >
                {toggleButton ? 'SAVE' : 'UPDATE'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
