import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSignupModel: false,
    openLoginModel: false,
    openDashBoardModel:false,
    activemenue:1
 
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggelSignupModel: (state,{payload}) => {
          state.openSignupModel = payload.flag;
    },
    toggelLoginModel: (state) => {
      state.openLoginModel = !state.openLoginModel
  },
  toggelDashBoardModel: (state) => {
          state.openDashBoardModel = !state.openDashBoardModel;
      },
  upDateActiveMenu: (state, action)=>{
    console.log(action)
    state.activemenue = action.payload.index
  }

  },
});

export const { 
    toggelSignupModel,
    toggelLoginModel,
    toggelDashBoardModel,
    upDateActiveMenu
 } = commonSlice.actions;

export default commonSlice.reducer;