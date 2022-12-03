import {
    GET_PROVINCES,
    GET_PROVINCE_BY_CODE
} from "./provinceType";

const initialState = {}

export const provinceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROVINCES:
            state = action.provinces;
            return state;
        case GET_PROVINCE_BY_CODE:
            state = action.province;
            return state;
        default:
            return state;
    }
}