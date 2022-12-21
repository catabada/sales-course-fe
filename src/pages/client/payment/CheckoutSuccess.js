import { Box } from "@mui/system";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestCheckoutSuccess } from "~/redux/order/orderSlice";
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import { removeAllCart } from "~/redux/cart/cartSlice";

const CheckoutSuccess = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { payment } = useParams();
    const { accessToken } = useSelector(state => state.authReducer)
    const [searchParams, setSearchParams] = useSearchParams();

    const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
    const orderId = searchParams.get("orderId");
    const resultCode = searchParams.get("resultCode");
    const message = searchParams.get("message");

    useEffect(() => {
        if (resultCode === 0) dispatch(removeAllCart())
        const createCapture = setTimeout(async () => {
            const capture = {}
            searchParams.forEach((value, key) => {
                capture[key] = value;
            })
            await dispatch(requestCheckoutSuccess({ capture: capture, payment: payment, accessToken: accessToken }))
        }, 0)
        return () => {
            clearTimeout(createCapture)
        }
    }, [dispatch])

    const handleResponse = () => {
        if (resultCode === "0" || vnp_ResponseCode === "00") {
            return (
                <Grid item lg={12}>
                    <Typography sx={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: '#fccf00'
                    }}>Cảm ơn bạn đã thanh toán</Typography>
                    <Typography sx={{ fontSize: '1.8rem' }}>Mã hóa đơn của bạn: {orderId}</Typography>
                    <Typography sx={{ fontSize: '1.8rem' }}>Note: Nếu bạn mua không đăng nhập thì bạn hãy kiểm tra email lấy mã để kích hoạt khóa học.</Typography>
                    <Button onClick={() => navigate("/")} sx={{ padding: '10px 15px', fontSize: '1.4rem', marginTop: '20px' }} variant="contained" className="btn-primary">Trở về trang chủ</Button>
                </Grid>
            );
        }

        if (resultCode === "1006" || vnp_ResponseCode === "24") {
            return (
                <Grid item lg={12}>
                    <Typography sx={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: '#fccf00'
                    }}>Thanh toán không thành công</Typography>
                    <Typography sx={{ fontSize: '1.8rem' }}>Mã hóa đơn của bạn: {orderId}</Typography>
                    <Button onClick={() => navigate("/")} sx={{ padding: '10px 15px', fontSize: '1.4rem', marginTop: '20px' }} variant="contained" className="btn-primary">Trở về trang chủ</Button>
                </Grid>
            );
        }
    }

    return (
        <Box >
            <Grid sx={{ height: '400px' }} container textAlign={"center"} alignContent={"center"} justifyContent="center" alignItems="center">
                <Grid item lg={12}>
                    {resultCode === 0
                        ? <CheckCircleOutlineIcon sx={{ fontSize: '14rem', color: '#fccf00' }} />
                        : <HighlightOffSharpIcon sx={{ fontSize: '14rem', color: '#fccf00' }} />}
                </Grid>
                {handleResponse()}
            </Grid>
        </Box>
    );
}

export default CheckoutSuccess