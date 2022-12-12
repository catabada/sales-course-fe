import axiosClient from "./axiosClient";

export const provincesApi = {
    async fetchProvinceByCode(code) {
        return axiosClient.get(`/p/${code}`)
            .then((response) => {
                return response;
            }).catch((err) => {
                return err.response
            });
    }
}
export default provincesApi;