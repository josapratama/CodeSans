import { configureStore } from "@reduxjs/toolkit";
import StoreHome from "../combine/storeHome";
import StorePricingPlan from "../combine/storePricingPlan";

const store = configureStore({
    reducer: {
        home: StoreHome,
        pricingPlan: StorePricingPlan
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store