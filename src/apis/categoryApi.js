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
    // createCategory(category) {
    //     const url = `/category/create`
    //     return axiosClient.post(url, category)
    // },
    // updateCategory() {

    // },
    // deleteCategory(id) {
    //     const url = `/category/delete/${id}`
    //     return axiosClient.get(url)
    // },
}

export default categoryApi