import axiosClient from "~/apis/axiosClient";

const initialSearch = {
    userInfo: null,
    course: null,
}

const wishlistApi = {
    async getWishlist(search = initialSearch, token) {
        return await axiosClient.post("/wish-list/search", {
            userInfo: search.userInfo,
        }, {
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
            userInfo: wishlist.userInfo,
            course: wishlist.course
        }, {
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
    },
    async deleteWishlistByUserIdAndCourseId(wishlist, token) {
        const url = `/wish-list/delete`
        return await axiosClient.post(url, {
            userInfo: {
                userId: wishlist.userInfo.userId
            },
            course: {
                id: wishlist.course.id
            }
        }, {
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