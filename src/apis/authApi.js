import axiosClient from "./axiosClient"

export const authApi = {
    async register(userRegister) {
        return await axiosClient.post('/user/register', {
            username: userRegister.username,
            email: userRegister.email,
            phone: userRegister.phone,
            password: userRegister.password
        })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response.data
            })
    },

    async login(userLogin) {
        return await axiosClient.post('/user/login', {
            username: userLogin.username,
            password: userLogin.password
        })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response.data
            })
    },

    async getProfile(userId, token) {
        return await axiosClient.get(`/user/profile`, {
            params: {
                id: userId
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)

    },

    async loginFacebook(accessToken) {
        return await axiosClient.post('/user/login-facebook', null, {
            params: {
                access_token: accessToken
            }
        })
            .then((response) => {
                return response;
            }).catch((err) => err.response.data)
    },
    async loginGoogle(accessToken) {
        return await axiosClient.post('/user/login-google', null, {
            params: {
                access_token: accessToken
            }
        })
            .then((response) => {
                return response;
            }).catch((err) => err.response.data)
    },

    async saveProfile(userInfo, accessToken) {
        return await axiosClient.put('/user/profile', {
            userId: userInfo.userId,
            phone: userInfo.phone,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            dateOfBirth: userInfo.dateOfBirth,
            isMale: userInfo.isMale,
            email: userInfo.email,
            fullName: userInfo.email,
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        ).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    },

    async forgotPassword(email) {
        return await axiosClient.post(`/user/forgot-password/${email}`)
            .then((response) => response)
            .catch((err) => err.response.data);
    },

    async myCourse(token) {
        return await axiosClient.get(`/user/course`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => response)
            .catch((err) => err.response.data);

    },

    async activeCourse(code, accessToken) {
        return await axiosClient.post(`/user/active-course/${code}`, null, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => response)
            .catch((err) => err.response.data);
    },
    async getOrder(accessToken) {
        return await axiosClient.get('/user/order', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => response)
            .catch((err) => err.response.data);
    }

}