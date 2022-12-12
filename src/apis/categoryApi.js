import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    code: '',
    type: 0,
    name: '',
    category: null,
}

const categoryApi = {
    fetchCategoriesSearch(search = initialSearch) {
            return axiosClient.post('/category/search', {
                code: search.code,
                name: search.name,
                type: search.type,
                category: search.category
            }).then((response) => {
                return response;
            }).catch((err) => err.response)
    },
    fetchCategoryByCode(code) {
        const url = `/category/code-name/${code}`
        return axiosClient.get(url).then((response) => response.data).catch((err) => err.response)
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