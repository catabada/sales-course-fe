import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {WISHLIST_ADD, WISHLIST_DELETE, WISHLIST_GET_SEARCH} from "~/redux/wishlist/wishlistType";
import wishlistApi from "~/apis/wishlistApi";
import MySwal from "~/constants/MySwal";

const initialState = {
    wishlist: [],
    isSuccess: false,
    isLoading: false,
}

export const requestGetWishlist = createAsyncThunk(WISHLIST_GET_SEARCH, (params, thunkApi) => {
    const wishlist = wishlistApi.getWishlist(params)
    return wishlist
})

export const requestAddWishlist = createAsyncThunk(WISHLIST_ADD, async (params, thunkApi) => {
    try {
        const response = await wishlistApi.addWishlist(params);
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
            .addCase(requestGetWishlist.fulfilled, (state, action) => {
                const wishlist = action.payload.data;
                state.wishlist = wishlist
                return state;
            })
            //add
            .addCase(requestAddWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                return state;
            })
            .addCase(requestAddWishlist.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestAddWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                const data = action.payload
                state.wishlist.push(data)
                return state;
            })
            //delete
            .addCase(requestDeleteWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                return state;
            })
            .addCase(requestDeleteWishlist.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(requestDeleteWishlist.fulfilled, (state, action) => {
                state.isLoading = true;
                const data = action.payload
                state.wishlist.filter(item => item.id !== data)
                return state;
            })
    }
})


export const wishlistReducer = wishlistSlice.reducer;