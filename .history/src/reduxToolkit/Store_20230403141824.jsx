import { configureStore } from "@reduxjs/toolkit";
import signInReducer from './signInStatus';

export const store = configureStore({
    reducer: {
        signingIn: signInReducer
    }
})
