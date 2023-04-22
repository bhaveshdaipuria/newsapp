import { configureStore } from "@reduxjs/toolkit";
import signInReducer from './signInStatus';
import userNameReducer from './userStatus';

export const store = configureStore({
    reducer: {
        signingIn: signInReducer
    }
})
