import axiosClient from "~/apis/axiosClient";


const statisticApi = {
    async getRevenueDay(day) {
        return await axiosClient.get("/statistify/revenue/day", {
            params: {
                number: day
            }
        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    },
    async getRevenueMonth(month) {
        return await axiosClient.get("/statistify/revenue/month", {

        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    },
    async getRevenueYear(year) {
        return await axiosClient.get("/statistify/revenue/year", {

        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    },
}

export default statisticApi;