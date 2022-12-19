import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    name: "",
    codeName: "",
    index: 0,
    course: null,
}

const chapterApi = {
    async getChapters(search = initialSearch) {
        return await axiosClient.post("chapter/search", {
            name: search.name,
            codeName: search.codeName,
            index: search.index,
            course: search.course
        }).then((response) => {
            return response;
        }).catch((err) => err.response)
    },
    async createChapter(chapter) {
        return await axiosClient.post('/chapter/create', chapter)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async updateChapter(chapter) {
        return await axiosClient.put('/chapter/update', chapter)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async deleteChapter(id) {
        const url = `/chapter/${id}`
        return axiosClient.delete(url)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
}


export default chapterApi;