import { configureStore,combineReducers } from "@reduxjs/toolkit";
// import productOverviewReducers from '../features/productDetailsSlice/productDetailsSlice';
 import commonReducers from '../features/commonSlice';
 import userReducers from "../features/userSlice";

// import propertyDetailsReducers from '../features/propertyDetails'
const reducers = combineReducers({
 // productoverview:productOverviewReducers,
  common:commonReducers,
  userSlice:userReducers,
 // propertydetails:propertyDetailsReducers
});
const store = configureStore({
  reducer: reducers
});

export default store;