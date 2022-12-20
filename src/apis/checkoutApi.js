import axiosClient from "./axiosClient";

export const checkoutApi = {
    async purchase(purchase, payment, accessToken) {

        return await axiosClient.post(`/checkout/purchase/${payment}`, { ...purchase }
            , {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((response) => {
                console.log(response)
                return response;
            })
            .catch((error) => {
                return error.response.data
            })
    },
    async checkoutSuccess(capture, payment, accessToken) {
        return await axiosClient.post(`/checkout/${payment}/success`, null
            , {
                params: {...capture},
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then((response) => response)
            .catch((error) => {
                return error.response.data
            })
    }
}