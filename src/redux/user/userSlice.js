import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "~/apis/authApi";
import { USER_GET_PROFILE, USER_LOGOUT } from "./userType";

const initialState = {
    users: [],
    user: null,
    isLoading: false,
}

export const requestGetProfile = createAsyncThunk(USER_GET_PROFILE, async (params, thunkApi) => {
    try {
        const response = await authApi.getProfile(params.userId, params.accessToken)
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})

export const requestLogoutUser = createAsyncThunk(USER_LOGOUT, async (params, thunkApi) => {
    return thunkApi.fulfillWithValue(params);
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
            .addCase(requestLogoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                return state;
            })
    }
})

export const userReducer = userSlice.reducer;