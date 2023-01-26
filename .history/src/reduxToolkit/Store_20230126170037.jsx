import { configureStore } from "@reduxjs/toolkit";
import signInReducer from './signInStatus';

export const Store = configureStore({
    reducer: {
        signingIn: signInReducer
    }
})