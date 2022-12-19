import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    type: 0,
    name: '',
    category: null,
}

const categoryApi = {
    async getCategory(search = initialSearch) {
        return await axiosClient.post('/category/search', {
            name: search.name,
            type: search.type,
            category: search.category
        }).then((response) => {
            return response;
        }).catch((err) => err.response)
    },
    getCategoryByCode(code) {
        const url = `/category/code-name/${code}`
        return axiosClient.get(url)
            .then((response) => response)
            .catch((err) => err.response)
    },
    async createCategory(category) {
        return await axiosClient.post('/category/create', category)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async updateCategory(category) {
        return await axiosClient.put('/category/update', category)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async deleteCategory(id) {
        const url = `/category/${id}`
        return axiosClient.delete(url)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
}

export default categoryApi