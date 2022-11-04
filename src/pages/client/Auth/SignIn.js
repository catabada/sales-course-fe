import { Box, Button, TextField, Typography } from '@mui/material';
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
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Typography className={cx('title')}>Đăng nhập</Typography>

                <div className={cx('content-social')}>
                    <div className={cx('social-list')}>
                        <button className={cx('social-item', 'fb-background')}>
                            <FacebookIcon />
                            <Typography className={cx('social-lable', 'fb-color')}>Continue with Facebook</Typography>
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
                    <label className={cx('form-label')}>Địa chỉ email</label>
                    <TextField
                        InputProps={{
                            style: { fontSize: '1.2rem' },
                        }}
                        variant="outlined"
                        fullWidth
                        placeholder="mail@example.com"
                    />

                    <label className={cx('form-label')}>Mật khẩu</label>
                    <Box sx={{ position: 'relative' }}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            type="password"
                            sx={{ marginTop: '.25rem' }}
                            size="medium"
                            InputProps={{
                                style: { fontSize: '1.2rem' },
                            }}
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
                    <Typography sx={{ color: '#00459F', fontSize: '13px' }}>
                        Bạn chưa có tài khoản
                        <Typography
                            component={Link}
                            to={config.routes.signUp}
                            className={cx('custom-link')}
                            sx={{ marginLeft: '10px!important' }}
                        >
                            Đăng ký
                        </Typography>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
