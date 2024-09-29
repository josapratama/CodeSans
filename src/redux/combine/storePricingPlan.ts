import { combineReducers } from "@reduxjs/toolkit";
import questionsFeatures from "../slice/pricingPlan/questionsFeatures";

const StorePricingPlan = combineReducers({
    questions: questionsFeatures
})

export default StorePricingPlan