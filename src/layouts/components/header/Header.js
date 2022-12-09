import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import Search from '../search';
import Category from '../category';
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography
} from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
import {LogoIcon} from '~/components/icons';
import {CourseData} from '~/services/fakeData'
import PlayIcon from '@mui/icons-material/PlayArrowOutlined';
import {useState} from "react";

// layouts
import HeaderActive from "~/layouts/components/header/HeaderActive";
import HeaderAccount from "~/layouts/components/header/HeaderAccount";

const cx = classNames.bind(styles);

function Header() {

    const user = CourseData;
    // const user = null;

    return (
        <AppBar position={'fixed'}>
            <Container maxWidth={false} className={cx('wrapper')}>
                <Toolbar className={cx('inner')}>
                    <div className={cx('header')}>
                        <Box component={Link} to={'/'} className={cx('logo')}>
                            <LogoIcon className={cx('icon')}/>
                        </Box>
                        <Category/>

                        <Search data={user}/>
                        <HeaderActive/>
                        {
                            (user !== null) ?
                                <Box component={Link} to={'/my-courses'} className={cx('my-courses')}>
                                    <PlayIcon sx={{height: '3rem', width: '3rem'}}/>
                                    <Typography className={cx('text')}>Khoá học của tôi</Typography>
                                </Box>
                                : ''
                        }
                        <Box className={cx('cart')} component={Link} to={'/cart'}>
                            <ShoppingCart className={cx('cart-icon')}/>

                            <span className={cx('cart-number')}>1</span>

                            <div className={cx('cart-content')}>{/* cart item */}</div>
                        </Box>

                        {
                            (user !== null) ?
                                <HeaderAccount data={user}/>
                                :
                                <>
                                    <Box component={Link} to={'/auth/signin'} className={cx('wrapper-link')}>
                                        <Button variant="text" className={cx('btn', 'btn-text')}>
                                            Đăng nhập
                                        </Button>
                                    </Box>
                                    <Box component={Link} to={'/auth/signup'} className={cx('wrapper-link')}>
                                        <Button variant="outline" className={cx('btn', 'btn-primary')}>
                                            Đăng ký
                                        </Button>
                                    </Box>
                                </>
                        }


                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
        ;
}

export default Header;
