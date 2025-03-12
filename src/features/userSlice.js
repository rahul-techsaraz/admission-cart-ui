import { createSlice } from '@reduxjs/toolkit';
import {
  deleteUserEducationalDetails,
  fetchSpecializationCategory,
  fetchUserBasicDetails,
  fetchUserDocument,
  fetchUserEducationalDetails,
  fetchUserFeedback,
  fetchUserPreferenceDetails,
  fetchUserShortlist,
  saveUserBasicDetails,
  saveUserDocument,
  saveUserEducationalDetails,
  saveUserFeedback,
  saveUserPreferenceDetails,
  saveUserShortlist,
} from '../components/ReduxThunk/CommonThunk';
import constants from '../utils/Constants/constants';

const initialState = {
  loader: false,
  userInfo: localStorage.getItem('loginResponse') ? JSON.parse(localStorage.getItem('loginResponse')) : {},
  userQualificationInfo: [],
  userPreferenceInfo: [],
  specializationCategory: [],
  userPreferences: {
    level: '',
    specialization: '',
    location: '',
    college_type: '',
    fee_range: '',
    interested_abroad: '',
    need_loan: '',
  },
  userQualification: {
    class_name: '',
    board_name: '',
    school_name: '',
    passing_year: '',
    marks_type: '',
    marks_percentage: '',
    stream: '',
  },
  userDocument: {
    email: ' ',
    certificate_10th: ' ',
    certificate_12th: ' ',
    graduation_certificate: ' ',
    pg_certificate: ' ',
    aadhaar_card: ' ',
    pan_card: ' ',
  },
  userShortListedColleges: {
    college_id: '',
    college_name: '',
  },
  feedback: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUserInfo: (state, { payload }) => {
      state.userInfo = payload.userData;
    },
    updateQualificationInfo: (state, { payload }) => {
      state.userQualificationInfo = payload.qualificationInfo;
    },
    updateQualification: (state, { payload }) => {
      state.userQualification = payload.qualificationInfo;
    },
    resetQualification: (state, { payload }) => {
      state.userQualification = initialState.userQualification;
    },
    updateUserPreferences: (state, { payload }) => {
      state.userPreferences = payload.preferences;
    },
    updateUserSortlistedColleges: (state, { payload }) => {
      if (state.userShortListedColleges.college_id === '') {
        state.userShortListedColleges = {
          college_id: payload?.sortlistedCollege?.college_id,
          college_name: payload?.sortlistedCollege?.college_name,
        };
      } else {
        state.userShortListedColleges = {
          college_id: `${state.userShortListedColleges?.college_id},${payload?.sortlistedCollege?.college_id}`,
          college_name: `${state.userShortListedColleges?.college_name},${payload?.sortlistedCollege?.college_name}`,
        };
      }
    },
    updateUserFeedback: (state, { payload }) => {},
    updateUserDocument: (state, { payload }) => {
      payload.data.map((value) => (state.userDocument[value.fileName.split('-')[1]?.split('.')[0]] = value.fileName));
    },
    updateUserDocumentAfterFetch: (state, { payload }) => {
      state.userDocument.email = payload.data[0].email;
      state.userDocument.certificate_10th = payload.data[0].certificate_10th;
      state.userDocument.certificate_12th = payload.data[0].certificate_12th;
      state.userDocument.graduation_certificate = payload.data[0].graduation_certificate;
      state.userDocument.aadhaar_card = payload.data[0].aadhaar_card;
      state.userDocument.pan_card = payload.data[0].pan_card;
      // payload.data.map((value)=>{
      //     Object.keys(value).map((key)=> (state.userDocument[key]= value[key]))
      // })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserBasicDetails.fulfilled, (state, { payload }) => {
      state.userInfo = { ...state.userInfo, ...payload.data };
      state.loader = false;
    });
    builder.addCase(fetchUserBasicDetails.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(fetchUserBasicDetails.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserBasicDetails.fulfilled, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserBasicDetails.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(saveUserBasicDetails.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(fetchUserEducationalDetails.fulfilled, (state, { payload }) => {
      state.userQualificationInfo = payload.data;
      state.loader = false;
    });
    builder.addCase(fetchUserEducationalDetails.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(fetchUserEducationalDetails.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserEducationalDetails.fulfilled, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserEducationalDetails.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(saveUserEducationalDetails.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(deleteUserEducationalDetails.fulfilled, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(deleteUserEducationalDetails.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(deleteUserEducationalDetails.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(fetchSpecializationCategory.fulfilled, (state, { payload }) => {
      state.specializationCategory = payload?.data.map((category) => category?.category_name);
      state.loader = false;
    });
    builder.addCase(fetchSpecializationCategory.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(fetchSpecializationCategory.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(fetchUserPreferenceDetails.fulfilled, (state, { payload }) => {
      state.userPreferenceInfo = payload?.data;
      state.loader = false;
    });
    builder.addCase(fetchUserPreferenceDetails.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(fetchUserPreferenceDetails.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserPreferenceDetails.fulfilled, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserPreferenceDetails.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(saveUserPreferenceDetails.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserFeedback.fulfilled, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserFeedback.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(saveUserFeedback.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(fetchUserFeedback.fulfilled, (state, { payload }) => {
      console.log(payload);
      if (payload.status === constants.apiResponseStatus.SUCCESS && payload.data.length > 0) {
        state.feedback = JSON.parse(payload?.data[0]?.feedback);
      }
      state.loader = false;
    });
    builder.addCase(fetchUserFeedback.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(fetchUserFeedback.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserDocument.fulfilled, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserDocument.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(saveUserDocument.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(fetchUserDocument.fulfilled, (state, { payload }) => {
      if (payload.data.length > 0) {
        state.userDocument = { ...state?.userDocument, ...payload.data[0] };
      }
      state.loader = false;
    });
    builder.addCase(fetchUserDocument.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(fetchUserDocument.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserShortlist.fulfilled, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(saveUserShortlist.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(saveUserShortlist.rejected, (state, { payload }) => {
      state.loader = false;
    });
    builder.addCase(fetchUserShortlist.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS && payload.data.length > 0) {
        state.userShortListedColleges = {
          college_id: payload?.data[0]?.college_id,
          college_name: payload?.data[0]?.college_name,
        };
      }
      state.loader = false;
    });
    builder.addCase(fetchUserShortlist.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(fetchUserShortlist.rejected, (state, { payload }) => {
      state.loader = false;
    });
  },
});
export const {
  updateUserInfo,
  updateQualificationInfo,
  updateQualification,
  resetQualification,
  updateUserPreferences,
  updateUserSortlistedColleges,
  updateUserFeedback,
  updateUserDocument,
  updateUserDocumentAfterFetch,
} = userSlice.actions;

export default userSlice.reducer;
