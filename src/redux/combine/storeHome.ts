import { combineReducers } from "@reduxjs/toolkit";
import usualyAskedFeatures from "../slice/home/usualyAskedFeatures";

const StoreHome = combineReducers({
  UsualyAsked: usualyAskedFeatures,
});

export default StoreHome;
