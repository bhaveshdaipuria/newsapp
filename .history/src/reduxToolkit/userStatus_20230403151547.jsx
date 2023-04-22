import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
}

export const userID = createSlice({
    name: 'settingUserName',
    initialState,
    reducers:{
        userName: (this.state., action)=>{
            state.value = action.payload;
        }
    }
})

export const {userName} = userID.actions;
export default userID.reducer;