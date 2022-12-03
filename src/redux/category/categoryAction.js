import {
    GET_CATEGORIES_BY_CODE,
    GET_CATEGORIES_SEARCH
} from './categoryType.js';

export const getCategoriesSearch = (categories) => {
    return {
        type: GET_CATEGORIES_SEARCH,
        categories
    }
}

export const getCategoriesByCode = (category) => {
    return {
        type: GET_CATEGORIES_BY_CODE,
        category
    }
}