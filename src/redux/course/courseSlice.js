import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    CREATE_COURSE, DELETE_COURSE,
    GET_COURSE_ALL_FIELD_BY_CODE_NAME,
    GET_COURSE_ALL_FIELD_BY_ID,
    GET_COURSE_BY_CODE_NAME,
    GET_COURSES_SEARCH, UPDATE_COURSE, GET_COURSES_SEARCH_PAGINATION
} from "~/redux/course/courseType";
import courseApi from "~/apis/courseApi";
import { requestCreateDiscuss } from "~/redux/discuss/discussSlice";
import MySwal from "~/constants/MySwal";

const initialState = {
    courses: [],
    course: null,
    page: null,
    coursesAllField: [],
    isLoading: false,
}

export const getCoursesSearch = createAsyncThunk(GET_COURSES_SEARCH, async (params, thunkAPI) => {
    try {
        const response = await courseApi.getCourse(params.search);
        return response.success ? thunkAPI.fulfillWithValue(response) : thunkAPI.rejectWithValue(response)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
export const getCoursesSearchPagination = createAsyncThunk(GET_COURSES_SEARCH_PAGINATION, async (params, thunkAPI) => {
    try {
        const response = await courseApi.getCoursesSearchPagination(params.search, params.pageParam);
        return response.success ? thunkAPI.fulfillWithValue(response) : thunkAPI.rejectWithValue(response)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getCourseByCodeName = createAsyncThunk(GET_COURSE_BY_CODE_NAME, (params, thunkAPI) => {
    const course = courseApi.getCourseByCodeName(params);
    return course;
})
export const getCoursesAllFieldByCodeName = createAsyncThunk(GET_COURSE_ALL_FIELD_BY_CODE_NAME, (params, thunkAPI) => {
    const course = courseApi.getCourseAllFieldByCode(params);
    return course;
})
export const requestCreateCourse = createAsyncThunk(CREATE_COURSE, async (params, thunkAPI) => {
    console.log(params)
    try {
        const response = await courseApi.createCourse(params);
        if (!response.success) {
            return thunkAPI.rejectWithValue(response)
        }
        return thunkAPI.fulfillWithValue(params)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})
export const requestUpdateCourse = createAsyncThunk(UPDATE_COURSE, async (params, thunkAPI) => {
    try {
        const response = await courseApi.updateCourse(params);
        if (!response.success) {
            return thunkAPI.rejectWithValue(response)
        }
        return thunkAPI.fulfillWithValue(params)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})
export const requestDeleteCourse = createAsyncThunk(DELETE_COURSE, async (params, thunkAPI) => {
    try {
        const response = await courseApi.deleteCourse(params);
        if (!response.success) {
            return thunkAPI.rejectWithValue(response)
        }
        return thunkAPI.fulfillWithValue(params)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoursesSearchPagination.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(getCoursesSearchPagination.fulfilled, (state, action) => {
                const page = action.payload.data;
                state.page = page;
                state.isLoading = false;
                return state;
            })
            .addCase(getCoursesSearchPagination.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })



            .addCase(getCoursesSearch.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(getCoursesSearch.fulfilled, (state, action) => {
                const courses = action.payload.data;
                state.courses = courses;
                state.isLoading = false;
                return state;
            })




            .addCase(getCourseByCodeName.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(getCourseByCodeName.fulfilled, (state, action) => {
                const course = action.payload.data;
                state.course = course;
                state.isLoading = false;
                return state;
            })
            .addCase(getCoursesAllFieldByCodeName.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(getCoursesAllFieldByCodeName.fulfilled, (state, action) => {
                const coursesAllField = action.payload.data;
                state.coursesAllField = coursesAllField;
                state.isLoading = false;
                return state;
            })
            // create
            .addCase(requestCreateCourse.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                return state
            })
            .addCase(requestCreateCourse.pending, (state, action) => {
                state.isLoading = true;
                return state
            })
            .addCase(requestCreateCourse.fulfilled, (state, action) => {
                const data = action.payload;
                state.isLoading = false;
                state.courses.push(data)
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Th??nh c??ng!',
                    text: `Th??m kho?? h???c th??nh c??ng`,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    }
                });
                return state;
            })
            // delete
            .addCase(requestDeleteCourse.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Th???t b???i!',
                    text: `Xo?? kho?? h???c th???t b???i`,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    }
                });
                return state
            })
            .addCase(requestDeleteCourse.pending, (state, action) => {
                state.isLoading = true;
                return state
            })
            .addCase(requestDeleteCourse.fulfilled, (state, action) => {
                const data = action.payload;
                const list = state.courses.filter(item => item.id !== data)
                state.isLoading = true;
                state.courses = list
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Th??nh c??ng!',
                    text: `Xo?? kho?? h???c th??nh c??ng`,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    }
                });
                return state;
            })
            // update
            .addCase(requestUpdateCourse.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Th???t b???i!',
                    text: `C???p nh???t kho?? h???c th???t b???i`,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    }
                });
                return state
            })
            .addCase(requestUpdateCourse.pending, (state, action) => {
                state.isLoading = true;
                return state
            })
            .addCase(requestUpdateCourse.fulfilled, (state, action) => {
                const data = action.payload;
                state.courses = state.courses.filter(item => item.id !== data.id)
                state.isLoading = true;
                console.log(data)
                state.courses.push(data)
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Th??nh c??ng!',
                    text: `C???p nh???t kho?? h???c th??nh c??ng`,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    }
                });
                return state;
            })
    }
})


export const courseReducer = courseSlice.reducer;