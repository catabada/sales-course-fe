import { Box } from "@mui/system";
import { useState } from "react";
import ReactFacebookLogin from "react-facebook-login"

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
            icon="fa-facebook"
        />
    </Box>
}

export default FacebookLogin