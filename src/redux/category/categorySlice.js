import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import categoryApi from "~/apis/categoryApi"
import { GET_CATEGORIES_BY_CODE, GET_CATEGORIES_SEARCH } from "./categoryType"

const initialState = {
    categories: [],
    category: {},
    isLoading: false,
}

export const getCategoryByCode = createAsyncThunk(GET_CATEGORIES_BY_CODE, (params, thunkApi) => {
    const category = categoryApi.fetchCategoryByCode(params);
    return category;
})

export const getCategoriesSearch = createAsyncThunk(GET_CATEGORIES_SEARCH, (params, thunkApi) => {
    const categories = categoryApi.fetchCategoriesSearch(params);
    return categories;
})

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryByCode.fulfilled, (state, action) => {
                state.category = action.payload;
                return state;
            })
            .addCase(getCategoriesSearch.fulfilled, (state, action) => {
                state.categories = action.payload;
                return state;
            })
        // [getCategoryByCode.fulfilled]: (state, action) => {
        //     state.category = action.payload;
        //     return state;
        // },
        // [getCategoriesSearch.fulfilled]: (state, action) => {
        //     state.categories = action.payload;
        //     return state;
        // }

    }
})

export const categoryReducer = categorySlice.reducer

