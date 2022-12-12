import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import provincesApi from "~/apis/provincesApi"

export const getProvince = createAsyncThunk('province/getProvince', async (params, thunkApi) => {
    const response = await provincesApi.fetchProvinceByCode(params)
    return response;
})

const initialState = {
}

export const provinceSlice = createSlice({
    name: 'province',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getProvince.fulfilled]: (state, action) => {
            state = action.payload
            return state;
        }
    }

})


export const provinceReducer = provinceSlice.reducer