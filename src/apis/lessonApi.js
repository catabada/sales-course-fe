import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    name: "",
    codeName: "",
    index: 0,
    chapter: null,
}

const lessonApi = {
    async getLessons(search = initialSearch) {
        return await axiosClient.post("lesson/search", {
            name: search.name,
            codeName: search.codeName,
            index: search.index,
            chapter: search.chapter
        }).then((response) => {
            return response;
        }).catch((err) => err.response)
    },
    async createLesson(lesson) {
        return await axiosClient.post('/lesson/create', lesson)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async updateLesson(lesson) {
        return await axiosClient.put('/lesson/update', lesson)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async deleteLesson(id) {
        const url = `/lesson/${id}`
        return axiosClient.delete(url)
            .then((response) => response)
            .catch((err) => err.response.data)
    },

}


export default lessonApi;