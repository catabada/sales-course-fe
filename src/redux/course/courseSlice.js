import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    CREATE_COURSE, DELETE_COURSE,
    GET_COURSE_ALL_FIELD_BY_CODE_NAME,
    GET_COURSE_ALL_FIELD_BY_ID,
    GET_COURSE_BY_CODE_NAME,
    GET_COURSES_SEARCH, UPDATE_COURSE
} from "~/redux/course/courseType";
import courseApi from "~/apis/courseApi";
import {requestCreateDiscuss} from "~/redux/discuss/discussSlice";
import MySwal from "~/constants/MySwal";

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
export const requestCreateCourse = createAsyncThunk(CREATE_COURSE, async (params, thunkAPI) => {
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
                    title: 'Thành công!',
                    text: `Thêm khoá học thành công`,
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
                    title: 'Thất bại!',
                    text: `Xoá khoá học thất bại`,
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
                    title: 'Thành công!',
                    text: `Xoá khoá học thành công`,
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
                    title: 'Thất bại!',
                    text: `Cập nhật khoá học thất bại`,
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
                    title: 'Thành công!',
                    text: `Cập nhật khoá học thành công`,
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