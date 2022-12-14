import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import statisticApi from '~/apis/statisticApi'
import { STATISTIC_REVENUE_DAY, STATISTIC_REVENUE_YEAR, STATISTIC_REVENUE_MONTH, STATISTIC_REVENUE_CATEGORY } from './statisticType'

const initialState = {
    statistic: [],
    statisticCate: [],
    isLoading: false,
}

export const getRevenueDay = createAsyncThunk((STATISTIC_REVENUE_DAY), async (params, thunkApi) => {
    const statistic = statisticApi.getRevenueDay(params);
    return statistic;
})

export const getRevenueMonth = createAsyncThunk((STATISTIC_REVENUE_MONTH), async (params, thunkApi) => {
    const statistic = statisticApi.getRevenueMonth(params);
    return statistic;
})
export const getRevenueYear = createAsyncThunk((STATISTIC_REVENUE_YEAR), async (params, thunkApi) => {
    const statistic = statisticApi.getRevenueYear(params);
    return statistic;
})
export const getRevenueCategory = createAsyncThunk((STATISTIC_REVENUE_CATEGORY), async (params, thunkApi) => {
    const statistic = statisticApi.getRevenueCategory(params);
    return statistic;
})

const statisticSlice = createSlice({
    name: "statistic",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRevenueDay.fulfilled, (state, action) => {
                const statistic = action.payload.data;
                state.statistic = statistic
                return state;
            })
            .addCase(getRevenueMonth.fulfilled, (state, action) => {
                const statistic = action.payload.data;
                state.statistic = statistic
                return state;
            })
            .addCase(getRevenueYear.fulfilled, (state, action) => {
                const statistic = action.payload.data;
                state.statistic = statistic
                return state;
            })
            .addCase(getRevenueCategory.fulfilled, (state, action) => {
                const statisticCate = action.payload.data;
                state.statisticCate = statisticCate
                return state;
            })
    }
})

export const statisticReducer = statisticSlice.reducer;