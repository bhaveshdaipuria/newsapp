import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const isSignedIn = createSlice({
    name: 'signInReducer',
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
export const signInValue = useSelector((state)=> state.signingIn.value);
export default isSignedIn.reducer;