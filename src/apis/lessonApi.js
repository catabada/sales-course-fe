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
    }

}


export default lessonApi;