import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DISCUSS_CREATE, DISCUSS_DELETE, DISCUSS_GET_SEARCH, DISCUSS_UPDATE} from "~/redux/discuss/discussType";
import {discussApi} from "~/apis/discussApi";
import {requestDeleteWishlist} from "~/redux/wishlist/wishlistSlice";

const initialState = {
    discusses: [],
    isLoading: false,
    isSuccess: false,
}


export const requestGetSearchDiscuss = createAsyncThunk(DISCUSS_GET_SEARCH, (params, thunkApi) => {
    const discusses = discussApi.getDiscussSearch(params);
    return discusses;
})

export const requestCreateDiscuss = createAsyncThunk(DISCUSS_CREATE, async (params, thunkApi) => {
    console.log(params)
    try {
        const response = await discussApi.createDiscuss(params);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(params);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data)
    }
})

export const requestDeleteDiscuss = createAsyncThunk(DISCUSS_DELETE, async (params, thunkApi) => {
    console.log(params)
    try {
        const response = await discussApi.deleteDiscuss(params);
        if (!response.success) {
            return thunkApi.rejectWithValue(response);
        }
        return thunkApi.fulfillWithValue(params);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data)
    }
})

const discussSlice = createSlice({
    name: 'discuss',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestGetSearchDiscuss.fulfilled, (state, action) => {
                const discusses = action.payload.data;
                state.discusses = discusses
                return state;
            })
            // create
            .addCase(requestCreateDiscuss.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                return state
            })
            .addCase(requestCreateDiscuss.pending, (state, action) => {
                state.isLoading = true;
                return state
            })
            .addCase(requestCreateDiscuss.fulfilled, (state, action) => {
                state.isLoading = false;
                const data = action.payload;
                state.discusses.push(data)
                return state
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
            .addCase(requestDeleteDiscuss.fulfilled, (state, action) => {
                state.isLoading = true;
                const data = action.payload
                const list = state.discusses.filter(item => item.id !== data)
                state.discusses = list
                return state;
            })
    }
})

export const discussReducer = discussSlice.reducer