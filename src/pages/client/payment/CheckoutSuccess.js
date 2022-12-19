import { Box } from "@mui/system";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCheckoutSuccess } from "~/redux/order/orderSlice";

const CheckoutSuccess = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const { accessToken } = useSelector(state => state.authReducer)


    useEffect(() => {
        const capture = {};
        searchParams.forEach((value, key) => {
            capture[key] = value;
        });
        dispatch(requestCheckoutSuccess({capture: capture, accessToken: accessToken}))
    })

    return (
        <Box >
            <Grid sx={{ height: '400px !importance' }} container textAlign={"center"} alignContent={"center"} justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                <Grid item lg={12}>
                    <CheckCircleOutlineIcon sx={{ fontSize: '14rem', color: '#fccf00' }} />
                </Grid>
                <Grid item lg={12}>
                    <Typography sx={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: '#fccf00'
                    }}>Cảm ơn bạn đã thanh toán</Typography>
                    <Typography sx={{ fontSize: '1.8rem' }}>Mã hóa đơn của bạn: </Typography>
                    <Typography sx={{ fontSize: '1.8rem' }}>Note: Nếu bạn mua không đăng nhập thì bạn hãy kiểm tra email lấy mã để kích hoạt khóa học.</Typography>
                    <Button onClick={() => navigate("/")} sx={{ padding: '10px 15px', fontSize: '1.4rem', marginTop: '20px' }} variant="contained" className="btn-primary">Trở về trang chủ</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CheckoutSuccess