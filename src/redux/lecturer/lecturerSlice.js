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
    const lecturer = await lecturerApi.getLecturers(params);
    return lecturer;
})

export const lecturerSlice = createSlice({
    name: 'lecturer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLecturerById.fulfilled, (state, action) => {
                const lecturer = action.payload.data;
                state.lecturer = lecturer;
                return state;
            })
            .addCase(getLecturerSearch.fulfilled, (state, action) => {
                const lecturers = action.payload.data;
                state.lecturers = lecturers
                return state;
            })
    }
})


export const lecturerReducer = lecturerSlice.reducer;