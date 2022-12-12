import { requestLogin, requestRegister } from "~/redux/auth/authSlice";

export default class AuthService {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    async login(userLogin) {
        return await this.dispatch(requestLogin(userLogin));
    }

    register(userRegister) {
        return this.dispatch(requestRegister(userRegister));
    }

}