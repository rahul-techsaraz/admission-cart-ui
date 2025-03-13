import { createAsyncThunk } from '@reduxjs/toolkit';
import httpFetch from '../../fetch/useFetch';
import constants from '../../utils/Constants/constants';

export const fetchAllCollegeList = createAsyncThunk(
  'college/fetchAllCollegeList',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchAllCourseList = createAsyncThunk(
  'course/fetchAllCourseList',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchAllExamList = createAsyncThunk('exam/fetchAllExamList', async ({ url, method, header }, thunkApi) => {
  try {
    const data = await httpFetch(url, method, header);
    if (data.status !== constants.apiResponseStatus.SUCCESS) {
      throw new Error('Somting went wrong... try again');
    }
    return data;
  } catch (error) {
    return thunkApi.rejectWithError(error);
  }
});

export const fetchCollegeById = createAsyncThunk(
  'college/fetchCollegeById',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchCourseById = createAsyncThunk('course/fetchCourseById', async ({ url, method, header }, thunkApi) => {
  try {
    const data = await httpFetch(url, method, header);
    if (data.status !== constants.apiResponseStatus.SUCCESS) {
      throw new Error('Somting went wrong... try again');
    }
    return data;
  } catch (error) {
    return thunkApi.rejectWithError(error);
  }
});

export const fetchExamById = createAsyncThunk('exam/fetchExamById', async ({ url, method, header }, thunkApi) => {
  try {
    const data = await httpFetch(url, method, header);
    if (data.status !== constants.apiResponseStatus.SUCCESS) {
      throw new Error('Somting went wrong... try again');
    }
    return data;
  } catch (error) {
    return thunkApi.rejectWithError(error);
  }
});

export const signup = createAsyncThunk('signup/userSignup', async ({ url, method, header, body }, thunkApi) => {
  try {
    const data = await httpFetch(url, method, header, body);
    if (data.success !== 1) {
      throw new Error('Somting went wrong... try again');
    }
    return data;
  } catch (error) {
    return thunkApi.rejectWithError(error);
  }
});

export const login = createAsyncThunk('login/userLogin', async ({ url, method, header, body }, thunkApi) => {
  try {
    const data = await httpFetch(url, method, header, body);
    if (data.success !== 1) {
      throw new Error('Somting went wrong... try again');
    }
    return data;
  } catch (error) {
    return thunkApi.rejectWithError(error);
  }
});

export const fetchUserBasicDetails = createAsyncThunk(
  'UserBasicDetails/fetchUserBasicDetails',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const saveUserBasicDetails = createAsyncThunk(
  'UserBasicDetails/saveUserBasicDetails',
  async ({ url, method, header, body }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header, body);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchUserEducationalDetails = createAsyncThunk(
  'UserEducationalDetails/fetchUserEducationalDetails',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const saveUserEducationalDetails = createAsyncThunk(
  'UserEducationalDetails/saveUserEducationalDetails',
  async ({ url, method, header, body }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header, body);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const deleteUserEducationalDetails = createAsyncThunk(
  'UserEducationalDetails/deleteUserEducationalDetails',
  async ({ url, method, header, body }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header, body);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchSpecializationCategory = createAsyncThunk(
  'UserPreferenceslDetails/fetchSpecializationCategory',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchUserPreferenceDetails = createAsyncThunk(
  'UserPreferenceDetails/fetchUserPreferenceDetails',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const saveUserPreferenceDetails = createAsyncThunk(
  'UserPreferenceDetails/saveUserPreferenceDetails',
  async ({ url, method, header, body }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header, body);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const saveUserFeedback = createAsyncThunk(
  'UserFeedback/saveUserFeedback',
  async ({ url, method, header, body }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header, body);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchUserFeedback = createAsyncThunk(
  'UserFeedback/fetchUserFeedback',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchUserDocument = createAsyncThunk(
  'UserDocument/fetchUserDocument',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const saveUserDocument = createAsyncThunk(
  'UserDocument/saveUserDocument',
  async ({ url, method, header, body }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header, body);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const fetchUserShortlist = createAsyncThunk(
  'UserShortlist/fetchUserShortlist',
  async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);

export const saveUserShortlist = createAsyncThunk(
  'UserShortlist/saveUserShortlist',
  async ({ url, method, header, body }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header, body);
      console.log(data);
      if (data.status !== constants.apiResponseStatus.SUCCESS) {
        throw new Error('Somting went wrong... try again');
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithError(error);
    }
  }
);
