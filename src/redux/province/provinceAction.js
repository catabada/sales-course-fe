import { GET_PROVINCES } from "./provinceType"

export const getProvinces = (provinces) => {
    return {
        type: GET_PROVINCES,
        provinces
    }
}