import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {FEEDBACK_CREATE, FEEDBACK_GET_SEARCH} from "~/redux/feedback/feedbackType";
import {feedbackApi} from "~/apis/feedbackApi";

const initialState = {
    feedbacks: [],
    isLoading: false,
    isSuccess: false,
}
export const requestFeedbackSearch = createAsyncThunk(FEEDBACK_GET_SEARCH, (params, thunkApi) => {
    const feedbacks = feedbackApi.getFeedbackSearch(params);
    return feedbacks;
})
export const requestFeedbackCreate = createAsyncThunk(FEEDBACK_CREATE, async (params, thunkApi) => {
    console.log(params)
    const response = await feedbackApi.createFeedback(params);
    try {
        if (!response.success) {
            return thunkApi.rejectWithValue(response)
        }
        return thunkApi.fulfillWithValue(params)
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data)
    }
})

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestFeedbackSearch.fulfilled, (state, action) => {
                const feedbacks = action.payload.data;
                state.feedbacks = feedbacks
                return state;
            })
            // create
            .addCase(requestFeedbackCreate.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                return state
            })
            .addCase(requestFeedbackCreate.pending, (state, action) => {
                state.isLoading = true;
                return state
            })
            .addCase(requestFeedbackCreate.fulfilled, (state, action) => {
                state.isLoading = false;
                const data = action.payload;
                state.feedbacks.push(data)
                return state
            })
    }
})

export const feedbackReducer = feedbackSlice.reducer