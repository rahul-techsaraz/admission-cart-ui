import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllCollegeList,
  fetchAllCourseList,
  fetchAllExamList,
  fetchCollegeById,
  fetchCourseById,
  fetchExamById,
  login,
  signup,
} from '../components/ReduxThunk/CommonThunk';
import constants from '../utils/Constants/constants';

const initialState = {
  isLoading: false,
  isLoginPopup: false,
  isSignupPopup: false,
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
  collegeDetailsById: {
    basicDetails: {
      account_name: '',
      affiliate_by: '',
      category_name: '',
      city: '',
      college_logo: '',
      college_name: '',
      college_thumbnail: '',
      college_type: '',
      created_at: '',
      is_publish: '',
      location: '',
      message: '',
      ratings: '',
      state: '',
      updated_at: '',
    },
    courseOfferedDetails: [],
    descriptionDetails: {
      college_campus_description: '',
      college_course_description: '',
      college_description: '',
      college_highlights_description: '',
    },
    facilitiesDetails: {
      facilities: '',
      faculty_name: '',
    },
    gallaryDetails: {
      image_path: '',
      video_path: '',
    },
    highlightsDetails: [],
  },
  examDetailsById: {
    descriptionDetails: {
      apllication_form_step1_description: '',
      apllication_form_step2_description: '',
      apllication_form_step3_description: '',
      created_at: '',
      exam_admit_card_description: '',
      exam_application_form_description: '',
      exam_center_description: '',
      exam_conducting_body_description: '',
      exam_counselling_description: '',
      exam_description: '',
      exam_important_dates_description: '',
      exam_intimation_slip_description: '',
      exam_pattern_description: '',
      exam_session_description: '',
      exam_syllabus_description: '',
      updated_at: '',
    },
    examBasicDetails: {
      application_end_date: '',
      application_start_date: '',
      category_name: '',
      created_at: '',
      exam_end_date: '',
      exam_name: '',
      exam_start_date: '',
      exam_year: '',
      updated_at: '',
    },
    examDetails: {
      counselling_dates: '',
      created_at: '',
      exam_conducting_address: '',
      exam_conducting_email: '',
      is_counselling_announced: '',
      no_of_session: '',
      session_name: '',
      updated_at: '',
    },
    highlightsDetails: [],
  },
  courseDetailsById: {
    basicCourseDetails: {
      category_name: '',
      course_accepting_exam: '',
      course_description: '',
      course_duration: '',
      course_fee_max: '',
      course_fee_min: '',
      course_mode: '',
      course_name: '',
      created_at: '',
      is_publish: '',
      updated_at: '',
    },
    courseDetails: {
      course_level: '',
      created_at: '',
      eligiblity_criteria: '',
      exam_type: '',
      updated_at: '',
    },
    descriptionDetails: {
      course_admission_process_description: '',
      course_eligibility_criteria_description: '',
      course_entrance_exam_description: '',
      course_fee_description: '',
      course_overview_description: '',
      course_placement_description: '',
      created_at: '',
      updated_at: '',
    },
    syllabusDetails: [],
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
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.allCollegeData = payload.data;
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
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.allCourseData = payload.data.result;
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
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.allExamData = payload.data;
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
        state.collegeDetailsById = payload.data;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchCollegeById.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCollegeById.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchCourseById.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.courseDetailsById = payload.data;
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
      state.examDetailsById = payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchExamById.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExamById.rejected, (state, { payload }) => {
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
} = commonSlice.actions;

export default commonSlice.reducer;
