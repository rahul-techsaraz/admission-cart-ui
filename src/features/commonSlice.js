import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSignupModel: false,
    openLoginModel: false,
    openDashBoardModel:false
 
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

  },
});

export const { 
    toggelSignupModel,
    toggelLoginModel,
    toggelDashBoardModel
 } = commonSlice.actions;

export default commonSlice.reducer;