import { combineReducers } from "redux";
import { categoryReducer } from "~/redux/category/categoryReducer";
import { provinceReducer } from "~/redux/province/provinceReducer";

export const rootReducer = combineReducers({
    categoryReducer: categoryReducer,
})