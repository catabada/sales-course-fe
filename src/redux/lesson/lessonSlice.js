import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GET_LESSONS_SEARCH} from "~/redux/lesson/lessonType";
import lessonApi from "~/apis/lessonApi";

const initialState = {
    lessons: [],
    lesson: null,
    isLoading: false,
}

export const getLessonSearch = createAsyncThunk(GET_LESSONS_SEARCH, async (params, thunkApi) => {
    const lessons = await lessonApi.getLessons(params)
    return lessons;
})

const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLessonSearch.fulfilled, (state, action) => {
                const lessons = action.payload.data;
                state.lessons = lessons;
                return state;
            })
    }
})

export const lessonReducer = lessonSlice.reducer