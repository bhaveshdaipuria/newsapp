import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
}

export const userID = createSlice({
    name: 'settingUserName',
    initialState,
    reducers:{
        userName: (state, action)=>{
            state.value = action.setUserName;
        }
    }
})

export const {userName} = userID.actions;
export default userID.reducer;