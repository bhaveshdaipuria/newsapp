import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const userID = createSlice({
    name: 'userName',
    initialState, 
    reducers:{
        emailID: (state, action)=>{
            state.value = action.emailInput
        }
    }
})

export const {emailID} = userID.actions
export default userID.reducer;