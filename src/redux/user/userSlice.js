import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "~/apis/authApi";
import { USER_GET_PROFILE } from "./userType";

const initialState = {
    users: [],
    user: null,
    isLoading: false,
}

export const requestGetProfile = createAsyncThunk(USER_GET_PROFILE, async (params, thunkApi) => {
    return await authApi.getProfile(params.userId, params.accessToken)
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestGetProfile.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(requestGetProfile.fulfilled, (state, action) => {
                const user = action.payload.data;
                state.isLoading = false;
                state.user = user;
                return state;
            })
            .addCase(requestGetProfile.rejected, (state, action) => {
                return state;
            })
    }
})

export const userReducer = userSlice.reducer;