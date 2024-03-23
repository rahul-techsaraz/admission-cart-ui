import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authenticateUser: localStorage.getItem('loginResponse')? true : false,
    lastLocation:'',
    openLoginModel: false,
    openAfterLoginModel: false,
    openDashBoardModel:false,
    activemenue:1,
    fullName: (localStorage.getItem('loginResponse') ? JSON.parse(localStorage.getItem("loginResponse")).full_name : '')
 
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
    updateFirstName: (state, {payload})=>{
      state.fullName = payload.first_Name
    },
    updateauthenticateUser: (state, {payload})=>{
      state.authenticateUser = payload.flag
    },
    
    updateLastLocation:(state, {payload})=>{
      state.lastLocation = payload.location
    }
  },
});

export const { 
    
    toggelAfterLoginModel,
    toggelLoginModel,
    toggelDashBoardModel,
    upDateActiveMenu,
    updateFirstName,
    updateauthenticateUser,
    updateLastLocation
 } = commonSlice.actions;

export default commonSlice.reducer;