import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    course: null,
    userInfo: null,
    rating: 0,
}


export const feedbackApi = {
    async getFeedbackSearch(search = initialSearch, token) {
        return await axiosClient.post("/feedback/search", {
            // params: {
            course: search.course,
            userInfo: search.userInfo,
            rating: search.rating,
            // },
            // headers: {
            //     Authorization: `Bearer ${token}`
            // }
        }).then(response => response)
            .catch(err => err.response)
    },
    async createFeedback(feedback) {
        return await axiosClient.post("/feedback/create", feedback
            // },
            // headers: {
            //     Authorization: `Bearer ${feedback.token}`
            // }
        )
            .then(response => response)
            .catch(err => err.response.data)


    }
}