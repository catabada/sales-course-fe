import axiosClient from "./axiosClient";

export const checkoutApi = {
    async purchase(purchase, accessToken) {

        return await axiosClient.post('/checkout/purchase/momo', { ...purchase }
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
    async checkoutSuccess(capture, accessToken) {
        return await axiosClient.post('/checkout/momo/success', null
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