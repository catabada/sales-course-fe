import axiosClient from "~/apis/axiosClient";


const statisticApi = {
    async getRevenueDay(day) {
        return await axiosClient.get("/statistic/revenue/day", {
            params: {
                number: day
            }
        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    },
    async getRevenueMonth(month) {
        return await axiosClient.get("/statistic/revenue/month", {
            params: {
                number: month
            }
        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    },
    async getRevenueYear(year) {
        return await axiosClient.get("/statistic/revenue/year", {
            params: {
                number: year
            }
        }).then((response) => {
            return response;
        }).catch((err) => err.response.data)
    },
}

export default statisticApi;