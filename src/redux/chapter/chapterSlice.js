import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GET_CHAPTERS_SEARCH} from "~/redux/chapter/chapterType";
import chapterApi from "~/apis/chapterApi";

const initialState = {
    chapters: [],
    chapter: null,
    isLoading: false,
}

export const getChapterSearch = createAsyncThunk(GET_CHAPTERS_SEARCH, async (params, thunkApi) => {
    const chapters = await chapterApi.getChapters(params);
    return chapters;
})

const chapterSlice = createSlice({
    name: 'chapter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChapterSearch.fulfilled, (state, action) => {
                const chapters = action.payload.data;
                state.chapters = chapters;
                return state;
            })
    }
})

export const chapterReducer = chapterSlice.reducer