import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    name: "",
    codeName: "",
}

const lecturerApi = {
    async getLecturers(search = initialSearch) {
        return await axiosClient.post("lecturer/search", {
            name: search.name,
            codeName: search.codeName
        }).then((response) => {
            return response;
        }).catch((err) => err.response)
    },

    async getLecturerById(id) {
        const url = `lecturer/get/${id}`
        return await axiosClient.get(url)
            .then((response) => {
                return response;
            }).catch((err) => err.response)
    },
    async createLecturer(lecturer) {
        return await axiosClient.post('/lecturer/create', lecturer)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async updateLecturer(lecturer) {
        return await axiosClient.put('/lecturer/update', lecturer)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
    async deleteLecturer(id) {
        const url = `/lecturer/${id}`
        return axiosClient.delete(url)
            .then((response) => response)
            .catch((err) => err.response.data)
    },
}


export default lecturerApi;