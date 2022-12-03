import { GET_CATEGORIES_BY_CODE, GET_CATEGORIES_SEARCH } from "./categoryType";


const initialState = {
    categories: [],
    category: {},
    isLoading: false,
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_SEARCH:
            return {
                ...state,
                categories: action.categories
            }
        case GET_CATEGORIES_BY_CODE:
            return {
                ...state,
                category: action.category
            }
        default:
            return state;
    }
}