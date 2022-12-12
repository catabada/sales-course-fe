import { getProvince } from "~/redux/province/provinceSlice";

export default class ProvinceService {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    getProvinceByCode(code) {
        this.dispatch(getProvince(code));
    }
}