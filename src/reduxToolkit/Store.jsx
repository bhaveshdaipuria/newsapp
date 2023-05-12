import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from './userStatus';

export const store = configureStore({
    reducer: {
        userNameValue: userNameReducer
    }
})
