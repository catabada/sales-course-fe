import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../apis/authApi";
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER } from "./authType";
import MySwal from "~/constants/MySwal";

const initialState = {
    userId: 0,
    username: '',
    accessToken: '',
    isLoading: false,
}

export const requestLogin = createAsyncThunk(AUTH_LOGIN, async (params, thunkApi) => {

    const response = await authApi.login(params);
    if (response.success) {
        MySwal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Thành công!',
            text: `Chào mừng ${response.data.username} đến với website`,
            showConfirmButton: false,
            timer: 5000,
            showClass: {
                popup: 'animate__animated animate__backInRight'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            }
        });
    } else {
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
        });
    }
    return thunkApi.fulfillWithValue(response);
})

export const requestRegister = createAsyncThunk(AUTH_REGISTER, async (params, thunkApi) => {
    return await authApi.register(params);
})

export const requestLogout = createAsyncThunk(AUTH_LOGOUT, async (params, thunkApi) => {
    return 
})



export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestLogin.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.userId = data.userId;
                state.username = data.username;
                state.accessToken = data.token;
                return state;
            })
            .addCase(requestRegister.fulfilled, (state, action) => {
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