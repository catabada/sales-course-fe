import style from './Payment.module.scss'
import classNames from "classnames/bind";
import SubNav from "~/components/sub-nav";
import {Avatar, Box, Button, Container, Divider, Typography} from "@mui/material";

import {CourseList} from '~/services/fakeData'
import {useState} from "react";

const cx = classNames.bind(style);

function Payment() {

    const data = {name: 'Thanh toán', slug: ''}
    const [disable, setDisable] = useState(true)
    const price = CourseList.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const salePrice = CourseList.reduce((accumulator, currentValue) => accumulator + currentValue.salesPrice, 0)


    const handleChange = (e) => {
        const inputChecked = e.target
        setDisable(false)
    }
    const handleClick = () => {

    }

    const decrement = price - salePrice;

    return <Box className={cx('payment')}>
        <Container sx={{paddingTop: '3rem'}}>
            <SubNav data={data}/>

            <Box sx={{display: "flex"}}>
                <Box sx={{width: '60%', marginRight: '3rem'}}>
                    <Typography variant='h5' className={cx('title')}>Thanh toán</Typography>
                    <Box>
                        <Typography variant='h4' className={cx('sub-title')}>Phương thức thanh toán</Typography>
                        <Box sx={{display: 'flex'}}>
                            <input type='radio' name='payment' id='vn-pay' hidden
                                   onChange={(e) => handleChange(e)}/>
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
                                <Box sx={{margin: '22px auto'}}>
                                    <Avatar variant="square"
                                            src="/vnpay.png"
                                            sx={{
                                                height: '4rem',
                                                width: '4rem',
                                                margin: '0 auto'
                                            }}/>
                                </Box>
                                <Typography variant="body1"
                                            sx={{textAlign: 'center', textTransform: 'uppercase', fontSize: '1.6rem'}}>
                                    VN Pay QR
                                </Typography>
                            </Box>

                            <input type='radio' name='payment' id='momo' hidden onChange={(e) => handleChange(e)}/>
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
                                <Box sx={{margin: '22px auto'}}>
                                    <Avatar variant="square"
                                            src="/momo.png"
                                            sx={{
                                                height: '4rem',
                                                width: '4rem',
                                                margin: '0 auto'
                                            }}/>
                                </Box>
                                <Typography variant="body1"
                                            sx={{textAlign: 'center', textTransform: 'uppercase', fontSize: '1.6rem'}}>
                                    Ví MoMo
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{flex: 1}}>
                    <Box sx={{marginTop: '4rem'}}>
                        <Box className={cx('detail-bill')}>
                            <Typography variant='h2' sx={{fontSize: '2rem', fontWeight: 'bold'}}>Hoá đơn</Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0'}}>
                                <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                    Giá chưa giảm
                                </Typography>
                                <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                    {Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(price)}
                                </Typography>
                            </Box>
                            <Divider sx={{borderBottom: '1px solid #545454'}}/>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0'}}>
                                <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                    Giảm giá
                                </Typography>
                                <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                    - {Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                }).format(decrement)}
                                </Typography>
                            </Box>
                            <Divider sx={{borderBottom: '1px solid #545454'}}/>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0'}}>
                                <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                    Mã giảm giá
                                </Typography>
                                <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                    Không áp dụng
                                </Typography>
                            </Box>
                            <Divider sx={{borderBottom: '1px solid #545454'}}/>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0'}}>
                                <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                    Tổng cộng
                                </Typography>
                                <Typography variant="body1" sx={{fontSize: '2rem', fontWeight: 700}}>
                                    {Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(salePrice)}
                                </Typography>
                            </Box>

                            <Button variant='contained' fullWidth
                                    onClick={handleClick}
                                    disabled={disable}
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
    </Box>
}

export default Payment