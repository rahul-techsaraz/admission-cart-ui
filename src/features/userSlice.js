import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : localStorage.getItem('loginResponse') ? JSON.parse(localStorage.getItem("loginResponse")) : {},
    userQualificationInfo : [],
    userCollegePreferences : {},
    userDocument:{
        email: " ",
        certificate_10th: " ",
        certificate_12th: " ",
        graduation_certificate: " ",
        pg_certificate: " ",
        aadhaar_card: " ",
        pan_card: " "
    },
};

const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers:{
        updateUserInfo : (state, {payload}) => {
            state.userInfo = payload.userData
        },
        updateQualificationInfo : (state, {payload}) => {
            state.userQualificationInfo = payload.qualificationInfo
        },
        updateUserCollegePreferences : (state, {payload}) => {
            state.userCollegePreferences = payload.collegePreferences
        },
        updateUserDocument : (state, {payload})=>{
            console.log(payload)
            payload.data.map((value)=>{
                state.userDocument[value.fileName.split('-')[1]?.split('.')[0]] = value.fileName
            })
        },
        updateUserDocumentAfterFetch : (state, {payload}) => {
            console.log(payload)
            state.userDocument.email = payload.data[0].email
            state.userDocument.certificate_10th = payload.data[0].certificate_10th
            state.userDocument.certificate_12th = payload.data[0].certificate_12th
            state.userDocument.graduation_certificate = payload.data[0].graduation_certificate
            state.userDocument.aadhaar_card = payload.data[0].aadhaar_card
            state.userDocument.pan_card = payload.data[0].pan_card
            // payload.data.map((value)=>{
            //     Object.keys(value).map((key)=> (state.userDocument[key]= value[key]))
            // })
        }
    }
})
export const{
    updateUserInfo,
    updateQualificationInfo,
    updateUserCollegePreferences,
    updateUserDocument,
    updateUserDocumentAfterFetch,
}=userSlice.actions;

export default userSlice.reducer;