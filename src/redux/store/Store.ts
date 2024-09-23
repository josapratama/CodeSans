import { configureStore } from "@reduxjs/toolkit";
import StoreHome from "../combine/storeHome";

const store = configureStore({
    reducer: {
        home: StoreHome
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store