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
        
    }


}