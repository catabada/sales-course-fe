import {Avatar, Badge, Box, Button, Divider, Popover, Typography} from "@mui/material";
import {Link, redirect, useNavigate} from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {useSelector} from "react-redux";

const cx = classNames.bind(styles);


function CartItem({course}) {
    return <Box sx={{
        marginBottom: '1rem', paddingBottom: '1rem',
    }}>
        <Box sx={{display: 'flex', textDecoration: 'none'}} component={Link} to={`/course/${course.codeName}`}>
            <Avatar src={`/images/${course.image}`} variant='rounded'
                    sx={{height: '7rem', width: '10rem', marginRight: '1rem'}}/>
            <Box sx={{flex: 1}}>
                <Typography variant="body1"
                            className={cx('course-title')}
                >
                    {course.name}
                </Typography>
                <Typography variant="body1"
                            sx={{color: '#1a1a1a', fontSize: '1.2rem'}}>{course.lecturer.name}</Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography variant="body1" sx={{fontSize: '1.4rem', color: '#B89700', marginRight: "1rem"}}>
                        {Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                        }).format(course.price - course.price * course.discount)}
                    </Typography>
                    <Typography variant="body1"
                                sx={{fontSize: '1.4rem', textDecoration: 'line-through', color: '#C4C4C4'}}>
                        {Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(course.price)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
}


function CartHeader() {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cartReducer.cart);

    return <Box className={cx('cart')} onClick={() => navigate('/cart')}>
        <Badge badgeContent={cart?.length} color='primary'
               className={cx('cart-badge')}
               sx={{
                   "& .MuiBadge-badge": {
                       fontSize: '1.4rem',
                       height: '2.4rem',
                       width: '2.4rem',
                       borderRadius: '100%',
                       alignItems: 'center',
                       justifyContent: 'center'
                   },
               }}>
            <ShoppingCart sx={{height: '3rem', width: '3rem', color: '#fff'}}/>
        </Badge>
        <Box className={cx('cart-content')}>
            {
                cart?.map((item, index) => {
                    if (index < 4) {
                        return <CartItem key={index} course={item}/>
                    }
                })
            }

            {
                cart?.length > 4 ?
                    <Typography variant='body1' sx={{textAlign: 'center', fontSize: '1.6rem', margin: '1.5rem 0'}}>
                        và {cart.length - 4} sản phẩm khác
                    </Typography>
                    : <></>
            }

            <Button variant='outlined' fullWidth
                    onClick={() => navigate('/cart')}
                    sx={{
                        color: '#393f4d',
                        fontWeight: 'bold',
                        fontSize: '1.8rem',
                        textTransform: 'uppercase',
                        border: '1px solid #000',
                        '&:hover': {
                            border: '1px solid #000',
                        }
                    }}>
                Xem tất cả {cart?.length} sản phẩm
            </Button>
        </Box>

    </Box>
}

export default CartHeader;