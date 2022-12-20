import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    userInfo: null,
    lesson: null,
    content: '',
}


export const discussApi = {
    async getDiscussSearch(search = initialSearch, token) {
        return await axiosClient.post("/discuss/search", {
            // params: {
            userInfo: search.userInfo,
            lesson: search.lesson,
            content: search.content
            // },
            // headers: {
            //     Authorization: `Bearer ${token}`
            // }
        }).then(response => response)
            .catch(err => err.response)
    },
    async createDiscuss(discuss) {
        return await axiosClient.post("/discuss/create", {
            // params: {
            content: discuss.content,
            userInfo: discuss.userInfo,
            lesson: discuss.lesson,
            parent: discuss.parent,
            // },
            // headers: {
            //     Authorization: `Bearer ${feedback.token}`
            // }
        }).then(response => response)
            .catch(err => err.response.data)
    },
    async deleteDiscuss(id) {
        const url = `/discuss/${id}`
        return await axiosClient.delete(url)
            .then(response => response)
            .catch(err => err.response.data)
    }
}