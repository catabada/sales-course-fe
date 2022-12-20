import axiosClient from "~/apis/axiosClient";
import data from "bootstrap/js/src/dom/data";

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
    async getCoursesSearchPagination(search = initialSearch, pageParam) {
        return await axiosClient.post('/course/course-pagination', {
            codeName: search.codeName,
            priceBetween: search.priceBetween,
            name: search.name,
            sku: search.sku,
            discount: search.discount,
            lecturer: search.lecturer,
            category: search.category,
        }, {
            params: {
                ...pageParam
            }
        }).then((response) => {
            return response;
        }).catch((err) => err.response)
    },
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
    async createCourse(course) {
        console.log(course)
        return await axiosClient.post("/course/create", course)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async updateCourse(course) {
        return await axiosClient.put("/course/update", course)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async deleteCourse(id) {
        const url = `/course/${id}`;
        return await axiosClient.delete(url).then((response) => response)
            .catch((err) => err.response.data())
    }
}

export default courseApi