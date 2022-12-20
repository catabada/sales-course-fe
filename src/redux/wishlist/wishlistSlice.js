import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WISHLIST_ADD, WISHLIST_DELETE, WISHLIST_GET_SEARCH } from "~/redux/wishlist/wishlistType";
import wishlistApi from "~/apis/wishlistApi";
import MySwal, { Toast } from "~/constants/MySwal";

const initialState = {
    wishlist: [],
    response: null,
    isSuccess: false,
    isLoading: false,
}

export const requestGetWishlist = createAsyncThunk(WISHLIST_GET_SEARCH, async (params, thunkApi) => {
    try {
        const response = await wishlistApi.getWishlist(params.search, params.accessToken)
        return response.success ? thunkApi.fulfillWithValue(response) : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})

export const requestAddWishlist = createAsyncThunk(WISHLIST_ADD, async (params, thunkApi) => {
    try {
        const response = await wishlistApi.addWishlist(params.wishlist, params.accessToken);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(params);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})
export const requestDeleteWishlist = createAsyncThunk(WISHLIST_DELETE, async (params, thunkApi) => {
    try {
        const response = await wishlistApi.deleteWishlist(params);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(params);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
})


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestGetWishlist.pending, (state, action) => {
                state.isLoading = true
                return state;
            })
            .addCase(requestGetWishlist.fulfilled, (state, action) => {
                state.response = action.payload;
                const wishlist = action.payload.data;
                state.wishlist = wishlist
                state.isLoading = false
                return state;
            })
            .addCase(requestGetWishlist.rejected, (state, action) => {
                state.response = action.payload;
                state.isLoading = false
                return state;
            })
            //add
            .addCase(requestAddWishlist.rejected, (state, action) => {
                state.response = action.payload;
                state.isLoading = false;
                state.isSuccess = false;
                Toast.fire({
                    icon: 'error',
                    title: 'Oop...!',
                    text: state.response.message,
                });
                return state;
            })
            .addCase(requestAddWishlist.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestAddWishlist.fulfilled, (state, action) => {
                state.response = action.payload;
                state.isLoading = false;
                const data = action.payload
                state.wishlist.push(data)
                Toast.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Đã thêm sản phẩm vào danh sách yêu thích`,
                });
                return state;
            })
            //delete
            .addCase(requestDeleteWishlist.rejected, (state, action) => {
                state.response = action.payload;
                state.isLoading = false;
                state.isSuccess = false;
                Toast.fire({
                    icon: 'error',
                    title: 'Oop...!',
                    text: state.response.message,
                });
                return state;
            })
            .addCase(requestDeleteWishlist.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestDeleteWishlist.fulfilled, (state, action) => {
                state.response = action.payload;
                state.isLoading = true;
                const data = action.payload
                state.wishlist.filter(item => item.id !== data)
                Toast.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Đã xóa sản phẩm khỏi danh sách yêu thích`,
                });
                return state;
            })
    }
})


export const wishlistReducer = wishlistSlice.reducer;