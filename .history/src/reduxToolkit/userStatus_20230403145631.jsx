import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'jsfb',
}

export const userID = createSlice({
    name: 'settingUserName',
    initialState,
    reducers:{
        userName: (state, action)=>{
            state.value = action.payload;
        }
    }
})

export const {userName} = userID.actions;
export default userID.reducer;