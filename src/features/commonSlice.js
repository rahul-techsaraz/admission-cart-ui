import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllCollegeList,
  fetchAllCourseList,
  fetchAllExamList,
  fetchCollegeById,
  fetchCourseById,
  fetchExamById,
  login,
  sendMail,
  signup,
} from '../components/ReduxThunk/CommonThunk';
import constants from '../utils/Constants/constants';
import { deepParseTypedJSON } from '../utils/deepParseTypedJSON';

const initialState = {
  isLoading: false,
  isLoginPopup: false,
  isSignupPopup: false,
  isContactUs: false,
  isFeedbackPopup: false,
  authenticateUser: localStorage.getItem('loginResponse') ? true : false,
  lastLocation: '',
  openLoginModel: false,
  openAfterLoginModel: false,
  openDashBoardModel: false,
  activemenue: 1,
  allCollegeData: [],
  allExamData: [],
  allCourseData: [],
  collegeDetailsById: {},
  examDetailsById: {},
  courseDetailsById: {},
  notificationInfo: {
    isOpen: false,
    notificationType: '',
    notificationMessage: '',
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toggelAfterLoginModel: (state, { payload }) => {
      state.openAfterLoginModel = payload.flag;
    },
    toggelLoginModel: (state, { payload }) => {
      state.openLoginModel = payload.flag;
    },
    toggelDashBoardModel: (state) => {
      state.openDashBoardModel = !state.openDashBoardModel;
    },
    upDateActiveMenu: (state, action) => {
      state.activemenue = action.payload.index;
    },
    updateauthenticateUser: (state, { payload }) => {
      state.authenticateUser = payload.flag;
    },
    updateLastLocation: (state, { payload }) => {
      state.lastLocation = payload.location;
    },
    toggelIsLoginPopup: (state, { payload }) => {
      state.isLoginPopup = payload.flag;
    },
    toggelIsSignupPopup: (state, { payload }) => {
      state.isSignupPopup = payload.flag;
    },
    toggelIsFeedBackPopup: (state, { payload }) => {
      state.isFeedbackPopup = payload.flag;
    },
    toggelIsContactUs: (state, { payload }) => {
      state.isContactUs = payload.flag;
    },
    showNotification: (state, action) => {
      state.notificationInfo.isOpen = true;
      state.notificationInfo.notificationType = action.payload.type;
      state.notificationInfo.notificationMessage = action.payload.message;
    },
    hideNotification: (state) => {
      state.notificationInfo.isOpen = false;
      state.notificationInfo.notificationType = '';
      state.notificationInfo.notificationMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(signup.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchAllCollegeList.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS && payload.data.length > 0) {
        const parseCollegeList = payload.data
          .map((college) => deepParseTypedJSON(college))
          .filter((approvedCollege) => approvedCollege?.is_publish?.toLowerCase() === 'approved');
        state.allCollegeData = parseCollegeList;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchAllCollegeList.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllCollegeList.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchAllCourseList.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS && payload.data.length > 0) {
        const parseCourseResponse = payload.data.map((course) => deepParseTypedJSON(course));
        state.allCourseData = parseCourseResponse;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchAllCourseList.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllCourseList.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchAllExamList.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS && payload.data.length > 0) {
        const parseExamList = payload.data.map((exam) => deepParseTypedJSON(exam));
        state.allExamData = parseExamList;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchAllExamList.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllExamList.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchCollegeById.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        const parseCollageDetails = deepParseTypedJSON(payload.data);
        state.collegeDetailsById = parseCollageDetails;
        state.isLoading = false;
      }
    });
    builder.addCase(fetchCollegeById.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCollegeById.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchCourseById.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.courseDetailsById = deepParseTypedJSON(payload.data);
      }
      state.isLoading = false;
    });
    builder.addCase(fetchCourseById.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCourseById.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchExamById.fulfilled, (state, { payload }) => {
      const parseExamDetails = deepParseTypedJSON(payload.data);
      state.examDetailsById = parseExamDetails;
      state.isLoading = false;
    });
    builder.addCase(fetchExamById.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExamById.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(sendMail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(sendMail.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(sendMail.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export const {
  toggelAfterLoginModel,
  toggelLoginModel,
  toggelDashBoardModel,
  upDateActiveMenu,
  updateauthenticateUser,
  updateLastLocation,
  toggelIsLoginPopup,
  toggelIsSignupPopup,
  toggelIsFeedBackPopup,
  showNotification,
  hideNotification,
  toggelIsContactUs
} = commonSlice.actions;

export default commonSlice.reducer;
