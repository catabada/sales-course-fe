import { Box, Button, Container, TextField, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Auth.module.scss';

import { useState } from 'react';
import { FacebookIcon, GoogleIcon, AppleIcon, EyeUnshowIcon, EyeShowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SignIn() {
    const [show, setShow] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <Container maxWidth={false}>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <Typography sx={{ marginBottom: '3rem' }} className={cx('title')}>
                        Đăng nhập
                    </Typography>

                    <div className={cx('content-social')}>
                        <div className={cx('social-list')}>
                            <button className={cx('social-item', 'fb-background')}>
                                <FacebookIcon />
                                <Typography className={cx('social-lable', 'fb-color')}>
                                    Continue with Facebook
                                </Typography>
                            </button>

                            <button className={cx('social-item')}>
                                <GoogleIcon />
                                <Typography className={cx('social-lable')}>Continue with Google</Typography>
                            </button>

                            <button className={cx('social-item')}>
                                <AppleIcon />
                                <Typography className={cx('social-lable')}>Continue with Apple</Typography>
                            </button>
                        </div>

                        <div className={cx('divider')}>Hoặc tiếp tục với</div>
                    </div>

                    <form id="form">
                        <Box sx={{ position: 'relative' }}>
                            <TextField
                                label="Địa chỉ email"
                                InputProps={{
                                    style: { fontSize: '1.5rem' },
                                }}
                                sx={{ marginTop: '1rem' }}
                                variant="outlined"
                                fullWidth
                                placeholder="mail@example.com"
                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                            />
                        </Box>

                        <Box sx={{ position: 'relative' }}>
                            <TextField
                                sx={{
                                    position: 'relative',
                                    marginTop: '3rem',
                                }}
                                label="Mật khẩu"
                                variant="outlined"
                                placeholder={'*******'}
                                fullWidth
                                type={show ? 'text' : 'password'}
                                size="medium"
                                InputProps={{
                                    style: { fontSize: '1.5rem' },
                                }}
                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                            />
                            <button className={cx('btn-show')} onClick={handleClick}>
                                {show ? (
                                    <EyeUnshowIcon className={cx('icon-von')} />
                                ) : (
                                    <EyeShowIcon className={cx('icon-von')} />
                                )}
                            </button>
                        </Box>
                    </form>

                    <Typography
                        component={Link}
                        to={config.routes.forget}
                        className={cx('custom-link')}
                        sx={{ display: 'block' }}
                    >
                        Quên mật khẩu?
                    </Typography>

                    <Button variant="contained" disabled fullWidth className={cx('btn')}>
                        Đăng nhập
                    </Button>
                    <div className={cx('flex')}>
                        <Typography sx={{ color: '#00459F', fontSize: '1.5rem' }}>
                            Bạn chưa có tài khoản?
                            <Typography
                                component={Link}
                                to={config.routes.signUp}
                                className={cx('custom-link')}
                                sx={{ marginLeft: '10px!important', fontWeight: 'bold' }}
                            >
                                Đăng ký
                            </Typography>
                        </Typography>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default SignIn;
