import { Button, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { requestLoginGoogle } from "~/redux/auth/authSlice";
import { GoogleIcon } from "../icons";

const GoogleLogin = () => {
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        console.log(response);
        dispatch(requestLoginGoogle({ accessToken: response.access_token }))
    }

    const errorGoogle = (error) => {
        console.log(error);
    }

    const login = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: errorGoogle,
    })  

    return <Button
        onClick={() => login()}
        sx={{
            border: '1px solid #000',
            width: '100%',
            borderRadius: '20px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <GoogleIcon />
        <Typography
            sx={{ fontSize: '1.7rem', textTransform: 'none', color: '#000', marginLeft: '1rem' }}
        >Đăng nhập bằng Google</Typography>
    </Button>

}

export default GoogleLogin