import { getProvinces } from "~/redux/province/provinceAction";
import axiosClient from "./axiosClient";

export const provincesApi = {
    fetchProvinces() {
        return dispatch => {
            axiosClient.get('/p')
                .then((response) => {
                    dispatch(getProvinces(response));
                }).catch((err) => {
                });
        }
    }
}
export default provincesApi;