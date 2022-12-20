import {Box} from "@mui/material";
import {useState} from "react";
import ReactFacebookLogin from "react-facebook-login"
import style from './FacebookLogin.module.scss'
import classNames from "classnames/bind";
import {FacebookIcon} from '~/components/icons';

const cx = classNames.bind(style)
const FacebookLogin = () => {
    const [accessToken, setAccessToken] = useState(null)

    const responseFacebook = (response) => {
        console.log(response);
    }

    return <Box>
        <ReactFacebookLogin
            appId="560670479403999"
            autoLoad={true}
            fields="first_name,last_name,name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            icon={<FacebookIcon className={cx('facebook-icon')}/>}
            cssClass={classNames(cx("my-facebook-button-class"))}
        />
    </Box>
}

export default FacebookLogin