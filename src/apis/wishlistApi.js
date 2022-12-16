import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    appUser: null,
    course: null,
}

const wishlistApi = {
    async getWishlist(search = initialSearch) {
        return await axiosClient.post("/wish-list/search", {
            appUser: search.appUser,
            course: search.course
        }).then((response) => {
            return response;
        }).catch((err) => err.response)
    },

    async addWishlist(wishlist) {
        return await axiosClient.post("/wish-list/create", {
            appUser: wishlist.appUser,
            course: wishlist.course
        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    },

    async deleteWishlist(id) {
        const url = `/wish-list/${id}`
        return await axiosClient.delete(url)
            .then((response) => {
                return response;
            }).catch((err) => err.response.data)
    }
}

export default wishlistApi;