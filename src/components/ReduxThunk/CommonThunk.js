import { createApiThunk } from './apiThunk';

export const fetchAllCollegeList = createApiThunk('college/fetchAllCollegeList');

export const fetchAllCourseList = createApiThunk('course/fetchAllCourseList');

export const fetchAllExamList = createApiThunk('exam/fetchAllExamList');

export const fetchCollegeById = createApiThunk('college/fetchCollegeById');

export const fetchCourseById = createApiThunk('course/fetchCourseById');

export const fetchExamById = createApiThunk('exam/fetchExamById');

export const signup = createApiThunk('signup/userSignup');

export const login = createApiThunk('login/userLogin');

export const fetchUserBasicDetails = createApiThunk('UserBasicDetails/fetchUserBasicDetails');

export const saveUserBasicDetails = createApiThunk('UserBasicDetails/saveUserBasicDetails');

export const fetchUserEducationalDetails = createApiThunk('UserEducationalDetails/fetchUserEducationalDetails');

export const saveUserEducationalDetails = createApiThunk('UserEducationalDetails/saveUserEducationalDetails');

export const deleteUserEducationalDetails = createApiThunk('UserEducationalDetails/deleteUserEducationalDetails');

export const fetchSpecializationCategory = createApiThunk('UserPreferenceslDetails/fetchSpecializationCategory');

export const fetchUserPreferenceDetails = createApiThunk('UserPreferenceDetails/fetchUserPreferenceDetails');

export const saveUserPreferenceDetails = createApiThunk('UserPreferenceDetails/saveUserPreferenceDetails');

export const saveUserFeedback = createApiThunk('UserFeedback/saveUserFeedback');

export const fetchUserFeedback = createApiThunk('UserFeedback/fetchUserFeedback');
// User Callback Request
export const addUserCallBackRequest = createApiThunk('UserFeedback/fetchUserFeedback');

export const fetchUserDocument = createApiThunk('UserDocument/fetchUserDocument');

export const saveUserDocument = createApiThunk('UserDocument/saveUserDocument');

export const fetchUserShortlist = createApiThunk('UserShortlist/fetchUserShortlist');

export const saveUserShortlist = createApiThunk('UserShortlist/saveUserShortlist');
