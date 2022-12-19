import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkoutApi } from "~/apis/checkoutApi";
import { ORDER_PURCHASE } from "./orderType";

const initialState = {
    order: null,
    orders: [],
    response: null,
    isLoading: false,
}

export const requestPurchase = createAsyncThunk(ORDER_PURCHASE, async (params, thunkApi) => {
    try {
        const response = await checkoutApi.purchase(params.purchase, params.accessToken);
        return !response.success ? thunkApi.rejectWithValue(response) : thunkApi.fulfillWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestPurchase.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestPurchase.fulfilled, (state, action) => {
                const order = action.payload.data;
                state.isLoading = false;
                state.order = order;
                state.response = action.payload;
                return state;
            })
            .addCase(requestPurchase.rejected, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
                return state;
            })
    }
})

export const orderReducer = orderSlice.reducer;