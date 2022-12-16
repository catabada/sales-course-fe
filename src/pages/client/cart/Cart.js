import style from './Cart.module.scss'
import classNames from "classnames/bind";
import SubNav from "~/components/sub-nav";
import {Avatar, Box, Button, Checkbox, Container, Divider, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {removeItem} from "~/redux/cart/cartSlice";

const cx = classNames.bind(style);

function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [disable, setDisable] = useState(true);
    const cart = useSelector(state => state.cartReducer.cart);
    const data = {name: 'Giỏ hàng', slug: ''}

    const deleteCourse = (courseId) => {
        dispatch(removeItem(courseId))
    }


    const price = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const salePrice = cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price - currentValue.price * currentValue.discount), 0)
    const decrement = price - salePrice;

    return <Box className={cx('cart')}>
        <Container sx={{paddingTop: '3rem'}}>
            <SubNav data={data}/>

            <Typography variant='h5' className={cx('title')}>Giỏ hàng</Typography>
            {
                cart?.length == 0 ?
                    <Box className={cx('cart-empty')}>
                        <Typography variant="body1" className={cx('cart-empty-text')}>
                            Bạn hiện không có sản phẩm trong giỏ hàng
                        </Typography>
                        <Typography variant="body1" className={cx('cart-empty-text')}>
                            Hãy tiếp tục tìm kiếm khoá học để bỏ vào giỏ hàng nhé
                        </Typography>
                        <Button variant="contained" className={cx('btn-back')} onClick={() => navigate('/')}>
                            Tìm kiếm khoá học
                        </Button>
                    </Box>
                    :
                    <Box sx={{display: "flex"}}>
                        <Box sx={{width: '60%', marginRight: '3rem'}}>
                            <Typography variant='body1' className={cx('sub-title')}>
                                Bạn đang có {cart?.length} sản phẩm trong giỏ hàng
                            </Typography>

                            <div className={cx('cart-content')}>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    {/*<Box sx={{display: 'flex', marginBottom: '1rem'}}>*/}
                                    {/*    <Typography variant='body1'*/}
                                    {/*                sx={{*/}
                                    {/*                    fontSize: '1.8rem',*/}
                                    {/*                    fontWeight: 'bold',*/}
                                    {/*                    marginRight: '1rem',*/}
                                    {/*                    cursor: 'pointer'*/}
                                    {/*                }}>*/}
                                    {/*        Chọn tất cả*/}
                                    {/*    </Typography>*/}
                                    {/*    <Typography variant='body1'*/}
                                    {/*                sx={{fontSize: '1.8rem', fontWeight: 'bold', cursor: 'pointer'}}>*/}
                                    {/*        Xoá tất cả*/}
                                    {/*    </Typography>*/}
                                    {/*</Box>*/}

                                    {
                                        cart?.map((course, index) => {

                                            return <Box sx={{display: 'flex'}} key={index}>
                                                {/*<Box sx={{display: 'flex', alignItems: 'center'}}>*/}
                                                {/*    <Checkbox*/}
                                                {/*        name="course-check"*/}
                                                {/*        checked*/}
                                                {/*        icon={<CheckBoxOutlineBlankIcon*/}
                                                {/*            sx={{height: '2rem', width: '2rem'}}/>}*/}
                                                {/*        checkedIcon={<CheckBoxIcon*/}
                                                {/*            sx={{height: '2rem', width: '2rem'}}/>}*/}
                                                {/*    />*/}
                                                {/*</Box>*/}
                                                <Box sx={{display: 'flex', padding: '1rem 0'}}>
                                                    <Avatar variant='square'
                                                            src={`/images/${course.image}`}
                                                            sx={{
                                                                height: '13rem',
                                                                width: '20rem',
                                                                marginRight: '2rem'
                                                            }}/>
                                                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                                        <Box sx={{display: 'flex'}}>
                                                            <Typography variant="body1" className={cx('course-name')}>
                                                                {course.name}
                                                            </Typography>
                                                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                                <FavoriteBorderIcon
                                                                    sx={{
                                                                        width: '2rem',
                                                                        height: '2rem',
                                                                        cursor: 'pointer'
                                                                    }}/>
                                                                <CloseIcon
                                                                    onClick={() => deleteCourse(course.id)}
                                                                    sx={{
                                                                        width: '2rem',
                                                                        height: '2rem',
                                                                        cursor: 'pointer'
                                                                    }}/>
                                                            </Box>
                                                        </Box>
                                                        <Typography variant='body1'
                                                                    sx={{fontSize: '1.8rem', height: '4.6rem'}}>
                                                            {course.lecturer.name}
                                                        </Typography>
                                                        <Box sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-end'
                                                        }}>
                                                            <Typography variant='body1'
                                                                        className={cx('old-price')}>
                                                                {Intl.NumberFormat('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND'
                                                                }).format(course.price)}
                                                            </Typography>
                                                            <Typography variant='body1'
                                                                        className={cx('current-price')}>
                                                                {Intl.NumberFormat('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND'
                                                                }).format(course.price - course.price * course.discount)}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        })
                                    }
                                </Box>
                            </div>
                        </Box>
                        <Box sx={{flex: 1}}>
                            <Box sx={{marginTop: '4rem'}}>
                                <Box className={cx('detail-bill')}>
                                    <Typography variant='h2' sx={{fontSize: '2rem', fontWeight: 'bold'}}>Hoá
                                        đơn</Typography>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0'}}>
                                        <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                            Giá chưa giảm
                                        </Typography>
                                        <Typography variant="body1" sx={{fontSize: '1.8rem', color: '#545454'}}>
                                            {Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            }).format(price)}
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
                                            {Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            }).format(salePrice)}
                                        </Typography>
                                    </Box>

                                    <Button variant='contained' fullWidth
                                            disabled={false}
                                            onClick={() => navigate('/payment')}
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
            }
        </Container>
    </Box>
}

export default Cart