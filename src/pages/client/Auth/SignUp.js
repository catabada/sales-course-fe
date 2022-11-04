import { Box, Button, TextField, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Auth.module.scss';

import { FacebookIcon, GoogleIcon, AppleIcon, EyeUnshowIcon, EyeShowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function SignUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Typography className={cx('title')}>Đăng ký</Typography>

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
                    <TextField
                        label = "Địa chỉ email"
                        InputProps={{
                            style: { fontSize: '1.5rem' },
                        }}
                        InputLabelProps={{style: {fontSize: 14}}}
                        variant="outlined"
                        fullWidth
                        placeholder="mail@example.com"
                    />
                </form>

                <Button variant="contained" fullWidth className={cx('btn', 'btn-second')}>
                    Tiếp theo
                </Button>
                <div className={cx('flex')}>
                    <Typography sx={{ color: '#00459F', fontSize: '1.5rem' }}>
                        Đã có tài khoản?
                        <Typography
                            component={Link}
                            to={config.routes.signIn}
                            className={cx('custom-link')}
                            sx={{ marginLeft: '10px!important', fontWeight:'bold' }}
                        >
                            Đăng nhập
                        </Typography>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
