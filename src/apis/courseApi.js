import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    codeName: '',
    price: 0,
    name: '',
    sku: '',
    discount: 0,
    lecturer: null,
    category: null,
}

const courseApi = {
    async getCourse(search = initialSearch) {
        return await axiosClient.post('course/search', {
            codeName: search.codeName,
            price: search.price,
            name: search.name,
            sku: search.sku,
            discount: search.discount,
            lecturer: search.lecturer,
            category: search.category,
        }).then((response) => {
            return response;
        }).catch((err) => err.response)
    },
    getCourseByCodeName(code) {
        const url = `/course/code-name/${code}`
        return axiosClient.get(url)
            .then((response) => response)
            .catch((err) => err.response)
    },
    getCourseAllFieldByCode(code) {
        const url = `/course/get-all-field/code-name/${code}`
        return axiosClient.get(url)
            .then((response) => response)
            .catch((err) => err.response)
    },
}

export default courseApi