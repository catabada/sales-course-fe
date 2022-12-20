import style from './Payment.module.scss'
import classNames from "classnames/bind";
import SubNav from "~/components/sub-nav";
import { Avatar, Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Form, useForm } from '~/hooks/useForm';
import { requestPurchase } from '~/redux/order/orderSlice';
import Loading from '~/components/loading/Loading';
import { removeAllCart } from '~/redux/cart/cartSlice';
import { Toast } from '~/constants/MySwal';
import payment from '.';

const cx = classNames.bind(style);

function Payment() {
    const { type } = useParams()
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [active, setActive] = useState(type === 'cart')
    const [disable, setDisable] = useState(true)

    const { cart } = useSelector(state => state.cartReducer);

    const courses = active ? [...cart] : [location.state.course];
    const { accessToken } = useSelector(state => state.authReducer)
    const { user } = useSelector(state => state.userReducer)
    const { isLoading, order } = useSelector(state => state.orderReducer)

    const data = { name: 'Thanh toán', slug: '' }
    const initPrice = courses.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const totalPrice = courses.reduce((accumulator, currentValue) => accumulator + (currentValue.price - currentValue.price * currentValue.discount), 0)
    const salePrice = initPrice - totalPrice;

    useEffect(() => {
        if (!!order && !isLoading)
            window.location.replace(order.payUrl);
    }, [order])


    const initialValues = {
        fullName: !!user ? user.lastName + ' ' + user.firstName : '',
        email: !!user ? user.email : '',
        payment: "",
    }
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        let tempEnable = { ...errorsEnable }
        if ('fullName' in fieldValues) {
            if (fieldValues.fullName === '') {
                tempEnable.fullName = true;
                temp.fullName = 'Không được để trống.'
            } else {
                tempEnable.fullName = false;
                temp.fullName = ''
            }
        }
        if ('email' in fieldValues) {
            if (fieldValues.email !== '') {
                if ((/$^|.+@.+..+/).test(fieldValues.email)) {
                    temp.email = ''
                    tempEnable.email = false
                } else {
                    temp.email = 'Không đúng định dạng email'
                    tempEnable.email = true
                }
            } else {
                temp.email = 'Không được để trống'
                tempEnable.email = true
            }
        }
        setErrors({
            ...temp
        })
        setErrorsEnable({
            ...tempEnable
        })
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        errorsEnable,
        setErrorsEnable,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const handleChange = (e) => {
        handleInputChange(e)
        const inputChecked = e.target
        setDisable(false)
    }
    useEffect(() => {

    }, [order])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const items = []
            courses.forEach(course => {
                console.log(course.id)
                items.push({
                    course: {
                        id: course.id,
                    },
                    order: null,
                    unitPrice: course.price,
                });
            })
            const purchase = {
                name: values.fullName,
                email: values.email,
                order: {
                    totalPrice: 10000,
                },
                items: items
            };
            await dispatch(requestPurchase({ purchase: purchase, payment: payment, accessToken: accessToken }))
            if (active) {
                dispatch(removeAllCart())
            }

        }
    }

    return <Box className={cx('payment')}>
        <Container sx={{ paddingTop: '3rem' }}>
            <SubNav data={data} />

            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex" }}>
                <Box sx={{ width: '50%', marginRight: '3rem' }}>
                    <Typography variant='h5' className={cx('title')}>Thanh toán</Typography>
                    <Box>
                        <TextField
                            id="username"
                            label="Họ và tên"
                            autoComplete='off'
                            margin='normal'
                            InputProps={{
                                style: { fontSize: '1.6rem' },
                            }}
                            InputLabelProps={{ style: { fontSize: 16 } }}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            variant="outlined"
                            fullWidth
                            placeholder="Nguyễn Văn A"
                            error={errorsEnable.fullName}
                            helperText={errors.fullName}
                            onChange={handleInputChange}
                            name="fullName"
                            value={values.fullName}
                        />
                        <TextField
                            id="email"
                            autoComplete='off'
                            label="Địa chỉ email"
                            margin='normal'
                            InputProps={{
                                style: { fontSize: '1.6rem' },
                            }}
                            InputLabelProps={{ style: { fontSize: 16 } }}
                            FormHelperTextProps={{ style: { fontSize: 12 } }}
                            variant="outlined"
                            fullWidth
                            placeholder="mail@example.com"
                            error={errorsEnable.email}
                            helperText={errors.email}
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                        />
                    </Box>
                    <Box>
                        <Typography variant='h4' className={cx('sub-title')}>Phương thức thanh toán</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <input type='radio' name='payment' value={"vnpay"} id='vn-pay' hidden
                                onChange={(e) => handleChange(e)} />
                            <Box
                                component={'label'}
                                htmlFor='vn-pay'
                                className={cx('vn-pay')}
                                sx={{
                                    height: '15.5rem',
                                    width: '12rem',
                                    padding: '0.8rem',
                                    borderRadius: '2rem',
                                    border: '1px solid #E0E0E0',
                                    cursor: 'pointer'
                                }}>
                                <Box sx={{ margin: '22px auto' }}>
                                    <Avatar variant="square"
                                        src="/vnpay.png"
                                        sx={{
                                            height: '4rem',
                                            width: '4rem',
                                            margin: '0 auto'
                                        }} />
                                </Box>
                                <Typography variant="body1"
                                    sx={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '1.6rem' }}>
                                    VN Pay QR
                                </Typography>
                            </Box>

                            <input type='radio' name='payment' id='momo' value="momo" hidden onChange={(e) => handleChange(e)} />
                            <Box
                                htmlFor='momo'
                                component={'label'}
                                className={cx('momo')}
                                sx={{
                                    height: '15.5rem',
                                    width: '12rem',
                                    padding: '0.8rem',
                                    borderRadius: '2rem',
                                    border: '1px solid #E0E0E0',
                                    cursor: 'pointer',
                                    marginLeft: '2rem'
                                }}>
                                <Box sx={{ margin: '22px auto' }}>
                                    <Avatar variant="square"
                                        src="/momo.png"
                                        sx={{
                                            height: '4rem',
                                            width: '4rem',
                                            margin: '0 auto'
                                        }} />
                                </Box>
                                <Typography variant="body1"
                                    sx={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '1.6rem' }}>
                                    Ví MoMo
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="h5" className={cx('title-courses')}>Đơn hàng của bạn</Typography>
                        {
                            courses.map((item, index) => (
                                <Box key={index} sx={{ marginTop: '5rem' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body1"
                                            sx={{ fontSize: '2rem', fontWeight: 'bold' }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2"
                                            sx={{
                                                fontSize: '1.6rem',
                                                textDecoration: 'line-through',
                                                marginLeft: 'auto'
                                            }}
                                        >
                                            {Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            }).format(item.price)}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body1"
                                            sx={{
                                                fontSize: '1.6rem',
                                            }}
                                        >
                                            {item.lecturer.name}
                                        </Typography>
                                        <Typography variant="body2"
                                            sx={{
                                                fontSize: '1.6rem',
                                                color: '#FCCF00',
                                                marginLeft: 'auto',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            }).format(item.price - item.price * item.discount)}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ marginTop: '4rem' }}>
                        <Box className={cx('detail-bill')}>
                            <Typography variant='h2' sx={{ fontSize: '2rem', fontWeight: 'bold' }}>Hoá đơn</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
                                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: '#545454' }}>
                                    Giá chưa giảm
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: '#545454' }}>
                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(initPrice)}
                                </Typography>
                            </Box>
                            <Divider sx={{ borderBottom: '1px solid #545454' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
                                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: '#545454' }}>
                                    Giảm giá
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: '#545454' }}>
                                    - {Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(salePrice)}
                                </Typography>
                            </Box>
                            <Divider sx={{ borderBottom: '1px solid #545454' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
                                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: '#545454' }}>
                                    Mã giảm giá
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: '#545454' }}>
                                    Không áp dụng
                                </Typography>
                            </Box>
                            <Divider sx={{ borderBottom: '1px solid #545454' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
                                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: '#545454' }}>
                                    Tổng cộng
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '2rem', fontWeight: 700 }}>
                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}
                                </Typography>
                            </Box>

                            <Button variant='contained' fullWidth
                                disabled={disable}
                                type='submit'
                                sx={{
                                    fontSize: '2rem',
                                    color: '#000',
                                    borderRadius: '1rem',
                                    boxShadow: 'none',
                                    height: '6rem',
                                    marginBottom: '2rem',
                                    '&:hover': {
                                        backgroundColor: '#FCCF00',
                                        boxShadow: 'none'
                                    }
                                }}>
                                Thanh toán
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
        <Loading open={isLoading} />
    </Box>
}

export default Payment