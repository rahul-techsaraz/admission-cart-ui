import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCollegeList, fetchAllCourseList, fetchAllExamList, fetchCollegeById, fetchCourseById, fetchExamById, login, signup } from "../components/ReduxThunk/CommonThunk";
import constants from "../utils/Constants/constants";

const initialState = {
    isLoading: false,
    isLoginPopup: false,
    isSignupPopup: false,
    authenticateUser: localStorage.getItem('loginResponse')? true : false,
    lastLocation:'',
    openLoginModel: false,
    openAfterLoginModel: false,
    openDashBoardModel:false,
    activemenue:1,
    allCollegeData:[],
    allExamData:[],
    allCourseData:[],
    collegeDetailsById : {
      basicCourseDetails :{
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
      }
    },
    examDetailsById : {},
    courseDetailsById : {},
 
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggelAfterLoginModel: (state, {payload}) => {
      state.openAfterLoginModel = payload.flag;
    },
    toggelLoginModel: (state, {payload}) => {
      state.openLoginModel = payload.flag
    },
    toggelDashBoardModel: (state) => {
      state.openDashBoardModel = !state.openDashBoardModel;
    },
    upDateActiveMenu: (state, action)=>{
      state.activemenue = action.payload.index
    },
    updateauthenticateUser: (state, {payload})=>{
      state.authenticateUser = payload.flag
    },
    updateLastLocation:(state, {payload})=>{
      state.lastLocation = payload.location
    },
    toggelIsLoginPopup:(state, {payload})=>{
      state.isLoginPopup = payload.flag
    },
    toggelIsSignupPopup:(state, {payload})=>{
      state.isSignupPopup = payload.flag
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(login.fulfilled, (state, { payload}) => {
      state.isLoading = false
    })
    builder.addCase(login.pending, (state, { payload}) => {
      state.isLoading = true
    })
    builder.addCase(login.rejected, (state, { payload}) => {
      state.isLoading = false
    })
    builder.addCase(signup.fulfilled, (state, { payload}) => {
      state.isLoading = false
    })
    builder.addCase(signup.pending, (state, { payload}) => {
      state.isLoading = true
    })
    builder.addCase(signup.rejected, (state, { payload}) => {
      state.isLoading = false
    })
    builder.addCase(fetchAllCollegeList.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.allCollegeData = payload.data
      }
      state.isLoading = false
    })
    builder.addCase(fetchAllCollegeList.pending, (state, { payload }) => {
      state.isLoading = true
    })
    builder.addCase(fetchAllCollegeList.rejected, (state, { payload }) => {
      state.isLoading = false
    })
    builder.addCase(fetchAllCourseList.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.allCourseData = payload.data.result
      }
      state.isLoading = false
    })
    builder.addCase(fetchAllCourseList.pending, (state, { payload }) => {
      state.isLoading = true
    })
    builder.addCase(fetchAllCourseList.rejected, (state, { payload }) => {
      state.isLoading = false
    })
    builder.addCase(fetchAllExamList.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.allExamData = payload.data
      }
      state.isLoading = false
    })
    builder.addCase(fetchAllExamList.pending, (state, { payload }) => {
      state.isLoading = true
    })
    builder.addCase(fetchAllExamList.rejected, (state, { payload }) => {
      state.isLoading = false
    })
    builder.addCase(fetchCollegeById.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.collegeDetailsById = payload.data
      }
      state.isLoading = false
    })
    builder.addCase(fetchCollegeById.pending, (state, { payload }) => {
      state.isLoading = true
    })
    builder.addCase(fetchCollegeById.rejected, (state, { payload }) => {
      state.isLoading = false
    })
    builder.addCase(fetchCourseById.fulfilled, (state, { payload }) => {
      if (payload.status === constants.apiResponseStatus.SUCCESS) {
        state.courseDetailsById = payload.data
      }
      state.isLoading = false
    })
    builder.addCase(fetchCourseById.pending, (state, { payload }) => {
      state.isLoading = true
    })
    builder.addCase(fetchCourseById.rejected, (state, { payload }) => {
      state.isLoading = false
    })
    builder.addCase(fetchExamById.fulfilled, (state, { payload }) => {
        state.examDetailsById = payload.data
        state.isLoading = false
    })
    builder.addCase(fetchExamById.pending, (state, { payload }) => {
      state.isLoading = true
    })
    builder.addCase(fetchExamById.rejected, (state, { payload }) => {
      state.isLoading = false
    })
  }
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
 } = commonSlice.actions;

export default commonSlice.reducer;