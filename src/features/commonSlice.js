import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //openSignupModel: false,
    openLoginModel: false,
    openAfterLoginModel: false,
    openDashBoardModel:false,
    activemenue:1,
    name:JSON.parse(localStorage.getItem("name"))
 
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    // toggelSignupModel: (state,{payload}) => {
    //       state.openSignupModel = payload.flag;
    // }
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
    //console.log(action)
    state.activemenue = action.payload.index
  },
  updateFirstName: (state, {payload})=>{
    console.log(payload)
    state.name = payload.first_Name
  }

  },
});

export const { 
    // toggelSignupModel,
    toggelAfterLoginModel,
    toggelLoginModel,
    toggelDashBoardModel,
    upDateActiveMenu,
    updateFirstName
 } = commonSlice.actions;

export default commonSlice.reducer;