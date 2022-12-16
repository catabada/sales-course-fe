import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import lecturerApi from "~/apis/lecturerApi";
import {GET_LECTURER_BY_ID, GET_LECTURER_SEARCH} from "~/redux/lecturer/lecturerType";

const initialState = {
    lecturers: [],
    lecturer: null,
    isLoading: false,
}

export const getLecturerById = createAsyncThunk(GET_LECTURER_BY_ID, async (params, thunkAPI) => {
    const lecturer = await lecturerApi.getLecturerById(params);
    return lecturer;
})
export const getLecturerSearch = createAsyncThunk(GET_LECTURER_SEARCH, async (params, thunkAPI) => {
    const lecturer = await lecturerApi.getLecturerById(params);
    return lecturer;
})

export const lecturerSlice = createSlice({
    name: 'lecturer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLecturerById.fulfilled, (state, action) => {
                const lecture = action.payload.data;
                state.lecture = lecture;
                return state;
            })
    }
})


export const lecturerReducer = lecturerSlice.reducer;