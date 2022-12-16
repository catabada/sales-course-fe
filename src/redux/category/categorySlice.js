import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import categoryApi from "~/apis/categoryApi"
import {GET_CATEGORIES_BY_CODE, GET_CATEGORIES_SEARCH} from "./categoryType"

const initialState = {
    categories: [],
    category: null,
    isLoading: false,
}

export const getCategoryByCode = createAsyncThunk(GET_CATEGORIES_BY_CODE, (params, thunkApi) => {
    const category = categoryApi.getCategoryByCode(params);
    return category;
})

export const getCategoriesSearch = createAsyncThunk(GET_CATEGORIES_SEARCH, async (params, thunkApi) => {
    const categories = await categoryApi.getCategory(params);
    return categories;
})

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryByCode.fulfilled, (state, action) => {
                const category = action.payload.data;
                state.category = category;
                return state;
            })
            .addCase(getCategoriesSearch.fulfilled, (state, action) => {
                const categories = action.payload.data;
                state.categories = categories;
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

