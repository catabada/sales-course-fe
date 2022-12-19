import axiosClient from "./axiosClient";

export const checkoutApi = {
    async purchase(purchase, accessToken) {
        
        return await axiosClient.post('/checkout/purchase', {...purchase}
            , {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response.data
            })
    }
}