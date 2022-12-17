import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../apis/authApi";
import { AUTH_LOGIN, AUTH_LOGIN_FB, AUTH_LOGIN_GG, AUTH_LOGOUT, AUTH_REGISTER } from "./authType";
import MySwal from "~/constants/MySwal";

const initialState = {
    userId: 0,
    username: '',
    accessToken: '',
    urlImage: '',
    isLoading: false,
}

export const requestLogin = createAsyncThunk(AUTH_LOGIN, async (params, thunkApi) => {
    try {
        const response = await authApi.login(params);
        if (!response.success) {
            return thunkApi.fulfillWithValue(response);
        } else {
            return thunkApi.rejectWithValue(response);
        }
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
        const response = await authApi.loginGoogle(params.code);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
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
                state.username = data.username;
                state.accessToken = data.token;
                state.isLoading = false;
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Chào mừng ${state.username} đến với website`,
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
                state.username = data.username;
                state.accessToken = data.token;
                state.isLoading = false;
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
                state.username = data.username;
                state.accessToken = data.token;
                state.isLoading = false;
            })
            .addCase(requestLoginGoogle.rejected, (state, action) => {
                state.isLoading = false;
                // MySwal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: action.payload.message,
                // });
                return state;
            })


            .addCase(requestRegister.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestRegister.fulfilled, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Bạn đã đăng ký tài khoản thành công. Bạn hay kiểm tra email để kích hoạt tài khoản`,
                    showConfirmButton: false,
                    timer: 3500,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    }
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
            .addCase(requestLogout.fulfilled, (state, action) => {
                state.userId = 0;
                state.username = '';
                state.accessToken = '';
                return state;
            })
    }
})

export const authReducer = authSlice.reducer