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
    }
}


export default lecturerApi;