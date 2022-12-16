import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    GET_COURSE_ALL_FIELD_BY_CODE_NAME,
    GET_COURSE_ALL_FIELD_BY_ID,
    GET_COURSE_BY_CODE_NAME,
    GET_COURSES_SEARCH
} from "~/redux/course/courseType";
import courseApi from "~/apis/courseApi";

const initialState = {
    courses: [],
    course: null,
    coursesAllField: [],
    isLoading: false,
}

export const getCoursesSearch = createAsyncThunk(GET_COURSES_SEARCH, async (params, thunkAPI) => {
    const courses = await courseApi.getCourse(params);
    return courses;
})
export const getCourseByCodeName = createAsyncThunk(GET_COURSE_BY_CODE_NAME, (params, thunkAPI) => {
    const course = courseApi.getCourseByCodeName(params);
    return course;
})
export const getCoursesAllFieldByCodeName = createAsyncThunk(GET_COURSE_ALL_FIELD_BY_CODE_NAME, (params, thunkAPI) => {
    const course = courseApi.getCourseAllFieldByCode(params);
    return course;
})

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoursesSearch.fulfilled, (state, action) => {
                const courses = action.payload.data;
                state.courses = courses;
                return state;
            })
            .addCase(getCourseByCodeName.fulfilled, (state, action) => {
                const course = action.payload.data;
                state.course = course;
                return state;
            })
            .addCase(getCoursesAllFieldByCodeName.fulfilled, (state, action) => {
                const coursesAllField = action.payload.data;
                state.coursesAllField = coursesAllField;
                return state;
            })
    }
})


export const courseReducer = courseSlice.reducer;