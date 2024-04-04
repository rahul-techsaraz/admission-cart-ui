import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : localStorage.getItem('loginResponse') ? JSON.parse(localStorage.getItem("loginResponse")) : {},
    userQualificationInfo : [],
};

const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers:{
        updateUserInfo : (state, {payload}) => {
            state.userInfo = payload.userData
        },
        updateQualificationInfo : (state, {payload}) => {
            console.log(payload.qualificationInfo)
            state.userQualificationInfo = payload.qualificationInfo
        }
    }
})
export const{
    updateUserInfo,
    updateQualificationInfo,
}=userSlice.actions;

export default userSlice.reducer;