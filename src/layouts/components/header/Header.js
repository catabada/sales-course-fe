import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../search';
import Category from '../category';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { LogoIcon } from '~/components/icons';
import PlayIcon from '@mui/icons-material/PlayArrowOutlined';
import { useEffect, useLayoutEffect, useState } from 'react';

// layouts
import HeaderActive from '~/layouts/components/header/HeaderActive';
import HeaderAccount from '~/layouts/components/header/HeaderAccount';
import CartHeader from '~/layouts/components/header/CartHeader';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetProfile } from '~/redux/user/userSlice';

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const { userId, accessToken, imageUrl, firstName } = useSelector((state) => state.authReducer);
    const { user } = useSelector((state) => state.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (userId !== 0) {
            dispatch(requestGetProfile({ userId: userId, accessToken: accessToken }));
        }
    }, [dispatch, userId, accessToken]);

    return (
        <AppBar position={'fixed'} sx={{ zIndex: 1000 }}>
            <Container maxWidth={false} className={cx('wrapper')}>
                <Toolbar className={cx('inner')}>
                    <div className={cx('header')}>
                        <Box onClick={() => navigate('/')} className={cx('logo', 'col-1')}>
                            <p>Baha Mall</p>
                        </Box>
                        <Category />

                        <Search />
                        <HeaderActive />
                        {!!user && (
                            <Box component={Link} to={'/my-courses'} className={cx('my-courses', 'col-2')}>
                                <PlayIcon sx={{ height: '3rem', width: '3rem' }} />
                                <Typography className={cx('text')}>Khoá học của tôi</Typography>
                            </Box>
                        )}
                        <CartHeader />
                        {!!user ? (
                            <HeaderAccount image={imageUrl} />
                        ) : (
                            <>
                                <Box className={cx('wrapper-link')}>
                                    <Button
                                        onClick={() => navigate('/auth/signin')}
                                        variant="text"
                                        className={cx('btn', 'btn-text')}
                                    >
                                        Đăng nhập
                                    </Button>
                                    <Button
                                        onClick={() => navigate('/auth/signup')}
                                        variant="outline"
                                        className={cx('btn', 'btn-primary')}
                                    >
                                        Đăng ký
                                    </Button>
                                </Box>
                            </>
                        )}
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
