import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "~/apis/authApi";
import MySwal from "~/constants/MySwal";
import { USER_GET_PROFILE, USER_LOGOUT, USER_ORDER, USER_SAVE_PROFILE } from "./userType";

const initialState = {
    users: [],
    user: null,
    isLoading: false,
    orders: [],
}

export const requestGetProfile = createAsyncThunk(USER_GET_PROFILE, async (params, thunkApi) => {
    try {
        const response = await authApi.getProfile(params.userId, params.accessToken)
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})

export const requestLogoutUser = createAsyncThunk(USER_LOGOUT, async (params, thunkApi) => {
    return thunkApi.fulfillWithValue(params);
})

export const requestSaveProfile = createAsyncThunk((USER_SAVE_PROFILE), async (params, thunkApi) => {
    try {
        const response = await authApi.saveProfile(params.userInfo, params.accessToken);
        return !response.success ? thunkApi.rejectWithValue(response) : thunkApi.fulfillWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})


export const requestUserOrder = createAsyncThunk((USER_ORDER), async (params, thunkApi) => {
    try {
        const response = await authApi.getOrder(params);
        return !response.success ? thunkApi.rejectWithValue(response) : thunkApi.fulfillWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})



export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestGetProfile.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(requestGetProfile.fulfilled, (state, action) => {
                const user = action.payload.data;
                state.isLoading = false;
                state.user = user;
                return state;
            })
            .addCase(requestGetProfile.rejected, (state, action) => {
                return state;
            })
            .addCase(requestLogoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                return state;
            })

            .addCase(requestSaveProfile.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestSaveProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Thay đổi thông tin thành công!`,
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
            .addCase(requestSaveProfile.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: action.payload.message,
                });
                return state;
            })

            .addCase(requestUserOrder.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(requestUserOrder.fulfilled, (state, action) => {
                const orders = action.payload.data;
                state.isLoading = false;
                state.orders = orders;
                return state;
            })
            .addCase(requestUserOrder.rejected, (state, action) => {
                return state;
            })
    }
})

export const userReducer = userSlice.reducer;