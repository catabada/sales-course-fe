import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { FACEBOOK_APP_ID } from "~/constants/LoginConstant";
import { requestLoginFacebook } from "~/redux/auth/authSlice";
import { FacebookIcon } from "../icons";
import SocialLogin from "./SocialLogin";

const FacebookLogin = () => {
    const dispatch = useDispatch();
    const responseFacebook = (response) => {
        dispatch(requestLoginFacebook({accessToken: response._token.accessToken}))
    }

    return <Box>
        <SocialLogin
            provider='facebook'
            appId={FACEBOOK_APP_ID}
            onLoginSuccess={responseFacebook}
            onLoginFailure={responseFacebook}
        >
            <FacebookIcon />
            <Typography
                sx={{
                    fontSize: '1.7rem',
                    textTransform: 'none',
                    color: '#fff',
                    marginLeft: '1rem'
                }}
            >
                Đăng nhập bằng Facebook
            </Typography>

        </SocialLogin>
    </Box>
}

export default FacebookLogin