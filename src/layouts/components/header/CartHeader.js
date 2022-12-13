import { Avatar, Badge, Box, Button, Divider, Popover, Typography } from "@mui/material";
import { Link, redirect } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function CartItem({ course }) {
    course = {}
    return 
    // return <Box sx={{
    //     marginBottom: '1rem', paddingBottom: '1rem',
    // }}>
    //     <Box sx={{ display: 'flex', textDecoration: 'none' }} component={Link} to={`/course/${course.slug}`}>
    //         <Avatar src={course.thumbnail} variant='rounded'
    //             sx={{ height: '7rem', width: '10rem', marginRight: '1rem' }} />
    //         <Box sx={{ flex: 1 }}>
    //             <Typography variant="body1" sx={{ color: '#000', fontSize: '1.4rem' }}>
    //                 {course.name}
    //             </Typography>
    //             <Typography variant="body1"
    //                 sx={{ color: '#1a1a1a', fontSize: '1.2rem' }}>{course.author.user.name}</Typography>
    //             <Box sx={{ display: 'flex' }}>
    //                 <Typography variant="body1" sx={{ fontSize: '1.4rem', color: '#B89700', marginRight: "1rem" }}>
    //                     {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.salesPrice)}
    //                 </Typography>
    //                 <Typography variant="body1"
    //                     sx={{ fontSize: '1.4rem', textDecoration: 'line-through', color: '#C4C4C4' }}>
    //                     {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price)}
    //                 </Typography>
    //             </Box>
    //         </Box>
    //     </Box>
    // </Box>
}

function CartHeader({ data }) {
    const redirect = () => {
        window.location.href = '/cart'
    }
    // const length = data.courses.length;
    return 
    // return <Box className={cx('cart')} component={Link} to={'/cart'}>
    //     <Badge badgeContent={4} color='primary'
    //         className={cx('cart-badge')}
    //         sx={{
    //             "& .MuiBadge-badge": {
    //                 fontSize: '1.4rem',
    //                 height: '2.4rem',
    //                 width: '2.4rem',
    //                 borderRadius: '100%',
    //                 alignItems: 'center',
    //                 justifyContent: 'center'
    //             },
    //         }}>
    //         <ShoppingCart sx={{ height: '3rem', width: '3rem', color: '#fff' }} />
    //     </Badge>
    //     <Box className={cx('cart-content')}>
    //         {
    //             data.courses.map((item, index) => {
    //                 if (index < 4) {
    //                     return <CartItem key={index} course={item} />
    //                 }
    //             })
    //         }

    //         {
    //             length > 4 ?
    //                 <Typography variant='body1'>và {data.courses.length - 4} sản phẩm khác</Typography>
    //                 : <></>
    //         }

    //         <Button variant='outlined' fullWidth
    //             onClick={redirect}
    //             sx={{
    //                 color: '#393f4d',
    //                 fontWeight: 'bold',
    //                 fontSize: '1.8rem',
    //                 textTransform: 'uppercase',
    //                 border: '1px solid #000',
    //                 '&:hover': {
    //                     border: '1px solid #000',
    //                 }
    //             }}>
    //             Xem tất cả {length} sản phẩm
    //         </Button>
    //     </Box>
    // </Box>
}

export default CartHeader;