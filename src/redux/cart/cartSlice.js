import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CART_ADD_COURSE, CART_DELETE_COURSE, CART_GET_ALL} from "~/redux/cart/cartType";

const initialState = {
    cart: [],
    isLoading: false,
    isSuccess: false,
}


// export const requestGetCart = createAsyncThunk(CART_GET_ALL, (params, thunkApi) => {
// })
//
// export const requestAddCourse = createAsyncThunk(CART_ADD_COURSE, async (params, thunkApi) => {
// })
// export const requestDeleteCourse = createAsyncThunk(CART_DELETE_COURSE, async (params, thunkApi) => {
//
// })

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {chapters, ...course} = action.payload;

            const item = state.cart.find((item) => {
                return item.id === course.id
            });
            if (!item)
                state.cart.push(course);

        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
            return state;
        },
        removeAllCart: (state, action) => { 
            state.cart = [];
            return state;
        }

    },
})


export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    removeItem,
    removeAllCart
} = cartSlice.actions;