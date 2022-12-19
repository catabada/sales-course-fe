import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "~/apis/authApi";
import { MY_COURSE_USER } from "./myCourseType";

const initialState = {
    myCourse: null,
    isLoading: false,
}

export const requestGetMyCourse = createAsyncThunk(MY_COURSE_USER, async (params, thunkApi) => {
    try {
        const response = await authApi.myCourse(params.accessToken);
        return !response.success ? thunkApi.rejectWithValue(response) : thunkApi.fulfillWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})




export const myCourseSlice = createSlice({
    name: 'myCourse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestGetMyCourse.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestGetMyCourse.fulfilled, (state, action) => {
                const myCourse = action.payload.data;
                state.isLoading = false;
                state.myCourse = myCourse;
                return state;
            })
            .addCase(requestGetMyCourse.rejected, (state, action) => {
                return state;
            })
    }
})

export const myCourseReducer = myCourseSlice.reducer;