import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCollegeList, fetchAllCourseList, fetchAllExamList } from "../components/ReduxThunk/CommonThunk";
import constants from "../utils/Constants/constants";

const initialState = {
    isLoading: false,
    authenticateUser: localStorage.getItem('loginResponse')? true : false,
    lastLocation:'',
    openLoginModel: false,
    openAfterLoginModel: false,
    openDashBoardModel:false,
    activemenue:1,
    allCollegeData:[],
    allExamData:[],
    allCourseData:[],

 
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
    }
  },
  extraReducers:(builder)=>{
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
  }
});

export const { 
    
    toggelAfterLoginModel,
    toggelLoginModel,
    toggelDashBoardModel,
    upDateActiveMenu,
    updateauthenticateUser,
    updateLastLocation
 } = commonSlice.actions;

export default commonSlice.reducer;