import { Box, Button } from "@mui/material";
import React, { useRef } from "react";
import SocialLogin from "react-social-login";

const SocialButton = ({ children, triggerLogin, ...props }) => {
    return <Button 
            sx={{
                width: '100%',
                borderRadius: '20px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#3a5c98',
                border: '1px solid #3a5c98',
                margin: '15px 0',
                '&:hover': {
                    backgroundColor: '#3a5c98',
                }
            }}
            onClick={triggerLogin} {...props}>
            {children}
        </Button>
    
}
export default SocialLogin(SocialButton);