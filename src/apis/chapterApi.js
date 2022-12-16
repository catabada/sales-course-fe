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
    }

}


export default chapterApi;