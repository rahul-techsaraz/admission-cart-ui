import { configureStore,combineReducers } from "@reduxjs/toolkit";
// import productOverviewReducers from '../features/productDetailsSlice/productDetailsSlice';
 import commonReducers from '../features/commonSlice';
// import propertyDetailsReducers from '../features/propertyDetails'
const reducers = combineReducers({
 // productoverview:productOverviewReducers,
  common:commonReducers,
 // propertydetails:propertyDetailsReducers
});
const store = configureStore({
  reducer: reducers
});

export default store;