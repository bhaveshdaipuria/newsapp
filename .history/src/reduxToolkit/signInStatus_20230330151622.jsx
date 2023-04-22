import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const isSignedIn = createSlice({
    name: 'lionelmessi',
    initialState,
    reducers: {
        SIGN_IN: (state)=>{
            state.value = true;
        },
        SIGN_OUT: (state)=>{
            state.value = false;
        }
    }
})

export const {SIGN_IN, SIGN_OUT} = isSignedIn.actions;
export default isSignedIn.reducer;