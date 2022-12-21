import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { authApi } from "~/apis/authApi";
import { AUTH_LOGIN, AUTH_FORGOT_PASS, AUTH_LOGIN_FB, AUTH_LOGIN_GG, AUTH_LOGOUT, AUTH_REGISTER, AUTH_ACTIVE_COURSE } from "./authType";

import MySwal, { Toast } from "~/constants/MySwal";
import storage from "redux-persist/lib/storage";

const initialState = {
    userId: 0,
    firstName: '',
    accessToken: '',
    imageUrl: '',
    isLoading: false,
    isLogin: false,
    response: null,
}

export const requestLogin = createAsyncThunk(AUTH_LOGIN, async (params, thunkApi) => {
    try {
        const response = await authApi.login(params);
        return response.success ? thunkApi.fulfillWithValue(response) : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})

export const requestRegister = createAsyncThunk(AUTH_REGISTER, async (params, thunkApi) => {
    try {
        const response = await authApi.register(params.userRegister);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }

        return thunkApi.fulfillWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})

export const requestLogout = createAsyncThunk(AUTH_LOGOUT, async (params, thunkApi) => {
    return
})

export const requestLoginFacebook = createAsyncThunk(AUTH_LOGIN_FB, async (params, thunkApi) => {
    try {
        const response = await authApi.loginFacebook(params.accessToken);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})
export const requestLoginGoogle = createAsyncThunk(AUTH_LOGIN_GG, async (params, thunkApi) => {
    try {
        const response = await authApi.loginGoogle(params.accessToken);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})

export const requestForgotPassword = createAsyncThunk(AUTH_FORGOT_PASS, async (params, thunkApi) => {
    try {
        const response = await authApi.forgotPassword(params.email);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})

export const requestActiveCourse = createAsyncThunk(AUTH_ACTIVE_COURSE, async (params, thunkApi) => {
    try {
        const response = await authApi.activeCourse(params.code, params.accessToken);
        return !response.success ? thunkApi.rejectWithValue(response) : thunkApi.fulfillWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestLogin.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestLogin.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.userId = data.userId;
                state.firstName = data.firstName;
                state.accessToken = data.token;
                state.imageUrl = data.imageUrl;
                state.isLoading = false;
                state.isLogin = true;

                Toast.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Chào mừng ${state.username} đến với website`,
                });
                return state;
            })
            .addCase(requestLogin.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: action.payload.message,
                });
                return state;
            })

            // Login Facebook
            .addCase(requestLoginFacebook.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestLoginFacebook.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.userId = data.userId;
                state.firstName = data.firstName;
                state.accessToken = data.token;
                state.imageUrl = data.imageUrl;
                state.isLoading = false;
                state.isLogin = true;
                Toast.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Chào mừng ${state.username} đến với website`,
                });
                return state;
            })
            .addCase(requestLoginFacebook.rejected, (state, action) => {
                state.isLoading = false;
                // MySwal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: action.payload.message,
                // });
                return state;
            })

            // Login Google
            .addCase(requestLoginGoogle.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestLoginGoogle.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.userId = data.userId;
                state.firstName = data.firstName;
                state.accessToken = data.token;
                state.imageUrl = data.imageUrl;
                state.isLoading = false;
                state.isLogin = true;
                Toast.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Chào mừng ${state.username} đến với website`,
                });
                return state;
            })
            .addCase(requestLoginGoogle.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: action.payload.message,
                });
                return state;
            })

            // Register

            .addCase(requestRegister.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestRegister.fulfilled, (state, action) => {
                state.isLoading = false;
                Toast.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Bạn đã đăng ký tài khoản thành công. Bạn hay kiểm tra email để kích hoạt tài khoản`,
                });
                return state;
            })
            .addCase(requestRegister.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: action.payload.message,
                });
                return state;
            })

            //Logout
            .addCase(requestLogout.fulfilled, (state, action) => {
                state.userId = 0;
                state.username = '';
                state.accessToken = '';
                state.isLogin = false;
                storage.removeItem('persist:root')
                return state;
            })


            // Forgot Password
            .addCase(requestForgotPassword.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestForgotPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                Toast.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Bạn đã đổi mật khẩu thành công. Bạn hay kiểm tra email để kích hoạt tài khoản`,
                });
                return state;
            })
            .addCase(requestForgotPassword.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: action.payload.message,
                });
                return state;
            })

            // Active Course
            .addCase(requestActiveCourse.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestActiveCourse.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
                Toast.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Bạn đã kích hoạt khóa học thành công`,
                });
                return state;
            })
            .addCase(requestActiveCourse.rejected, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: action.payload.message,
                });
                return state;
            })
    }
})

export const authReducer = authSlice.reducer