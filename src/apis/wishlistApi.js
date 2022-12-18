import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    appUser: null,
    course: null,
}

const wishlistApi = {
    async getWishlist(search = initialSearch, token) {
        return await axiosClient.post("/wish-list/search", {
                param: {
                    appUser: search.appUser,
                    course: search.course,
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((response) => {
            return response;
        }).catch((err) => err.response)
    },

    async addWishlist(wishlist, token) {
        return await axiosClient.post("/wish-list/create", {
            params: {
                appUser: wishlist.appUser,
                course: wishlist.course
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    }
    ,

    async deleteWishlist(id, token) {
        const url = `/wish-list/${id}`
        return await axiosClient.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                return response;
            }).catch((err) => err.response.data)
    }
}

export default wishlistApi;