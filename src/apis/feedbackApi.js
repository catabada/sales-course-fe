import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    course: null,
    rating: 0,
}


export const feedbackApi = {
    async getFeedbackSearch(search = initialSearch, token) {
        return await axiosClient.post("/feedback/search", {
            // params: {
            course: search.course,
            rating: search.rating,
            // },
            // headers: {
            //     Authorization: `Bearer ${token}`
            // }
        }).then(response => response)
            .catch(err => err.response)
    },
    async createFeedback(feedback) {
        return await axiosClient.post("/feedback/create", {
            // params: {
            content: feedback.content,
            rating: feedback.rating,
            appUser: feedback.appUser,
            course: feedback.course
            // },
            // headers: {
            //     Authorization: `Bearer ${feedback.token}`
            // }
        }).then(response => response)
            .catch(err => err.response.data)
    }
}