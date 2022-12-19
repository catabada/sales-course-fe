import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import categoryApi from "~/apis/categoryApi"
import {
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES_BY_CODE,
    GET_CATEGORIES_SEARCH,
    UPDATE_CATEGORY
} from "./categoryType"
import MySwal from "~/constants/MySwal";

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


export const requestCreateCategory = createAsyncThunk(CREATE_CATEGORY, async (params, thunkAPI) => {
    try {
        const response = await categoryApi.createCategory(params);
        if (!response.success) {
            return thunkAPI.rejectWithValue(response)
        }
        return thunkAPI.fulfillWithValue(params)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})
export const requestUpdateCategory = createAsyncThunk(UPDATE_CATEGORY, async (params, thunkAPI) => {
    try {
        const response = await categoryApi.updateCategory(params);
        if (!response.success) {
            return thunkAPI.rejectWithValue(response)
        }
        return thunkAPI.fulfillWithValue(params)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})
export const requestDeleteCategory = createAsyncThunk(DELETE_CATEGORY, async (params, thunkAPI) => {
    console.log(params)
    try {
        const response = await categoryApi.deleteCategory(params);
        if (!response.success) {
            return thunkAPI.rejectWithValue(response)
        }
        return thunkAPI.fulfillWithValue(params)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
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
            // create
            .addCase(requestCreateCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                return state
            })
            .addCase(requestCreateCategory.pending, (state, action) => {
                state.isLoading = true;
                return state
            })
            .addCase(requestCreateCategory.fulfilled, (state, action) => {
                const data = action.payload;
                state.isLoading = false;
                console.log(data)
                state.categories.push(data)
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Thêm khoá học thành công`,
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
            // delete
            .addCase(requestDeleteCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Thất bại!',
                    text: `Xoá khoá học thất bại`,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    }
                });
                return state
            })
            .addCase(requestDeleteCategory.pending, (state, action) => {
                state.isLoading = true;
                return state
            })
            .addCase(requestDeleteCategory.fulfilled, (state, action) => {
                const data = action.payload;
                const list = state.categories.filter(item => item.id !== data)
                state.isLoading = true;
                state.categories = list
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Xoá khoá học thành công`,
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
            // update
            .addCase(requestUpdateCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Thất bại!',
                    text: `Cập nhật khoá học thất bại`,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    }
                });
                return state
            })
            .addCase(requestUpdateCategory.pending, (state, action) => {
                state.isLoading = true;
                return state
            })
            .addCase(requestUpdateCategory.fulfilled, (state, action) => {
                const data = action.payload;
                const list = state.categories.filter(item => item.id !== data.id)
                state.isLoading = true;
                state.categories = list.push(data);
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Cập nhật khoá học thành công`,
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

    }
})

export const categoryReducer = categorySlice.reducer

