import { createAsyncThunk } from "@reduxjs/toolkit"
import httpFetch from '../../fetch/useFetch';
import constants from "../../utils/Constants/constants";

export const fetchAllCollegeList = createAsyncThunk("college/fetchAllCollegeList", async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header )
      if(data.status!==constants.apiResponseStatus.SUCCESS){
        throw new Error("Somting went wrong... try again");
      }
      return data
    } catch (error) {
      return thunkApi.rejectWithError(error)
    }
  })

  export const fetchAllCourseList = createAsyncThunk("course/fetchAllCourseList", async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header )
      if(data.status!==constants.apiResponseStatus.SUCCESS){
        throw new Error("Somting went wrong... try again");
      }
      return data
    } catch (error) {
      return thunkApi.rejectWithError(error)
    }
  })

  export const fetchAllExamList = createAsyncThunk("exam/fetchAllExamList", async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header )
      if(data.status!==constants.apiResponseStatus.SUCCESS){
        throw new Error("Somting went wrong... try again");
      }
      return data
    } catch (error) {
      return thunkApi.rejectWithError(error)
    }
  })

  export const fetchCollegeById = createAsyncThunk("college/fetchCollegeById", async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header )
      if(data.status!==constants.apiResponseStatus.SUCCESS){
        throw new Error("Somting went wrong... try again");
      }
      return data
    } catch (error) {
      return thunkApi.rejectWithError(error)
    }
  })

  export const fetchCourseById = createAsyncThunk("course/fetchCourseById", async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header )
      if(data.status!==constants.apiResponseStatus.SUCCESS){
        throw new Error("Somting went wrong... try again");
      }
      return data
    } catch (error) {
      return thunkApi.rejectWithError(error)
    }
  })

  export const fetchExamById = createAsyncThunk("exam/fetchExamById", async ({ url, method, header }, thunkApi) => {
    try {
      const data = await httpFetch(url, method, header )
      if(data.status!==constants.apiResponseStatus.SUCCESS){
        throw new Error("Somting went wrong... try again");
      }
      return data
    } catch (error) {
      return thunkApi.rejectWithError(error)
    }
  })