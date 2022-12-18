import { Backdrop, Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import classNames from 'classnames/bind';

import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';


import { useEffect, useState } from 'react';
import { FacebookIcon, GoogleIcon, AppleIcon, EyeUnshowIcon, EyeShowIcon } from '~/components/icons';
import { Form, useForm } from '~/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '~/redux/auth/authSlice';
import Loading from '~/components/loading';
import { FACEBOOK_APP_ID, GOOGLE_APP_ID } from '~/constants/LoginConstant';
import FacebookLogin from '~/components/social-login/FacebookLogin';
import GoogleLogin from '~/components/social-login/GoogleLogin';


const cx = classNames.bind(styles);

function SignIn() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const google = window.google;

    const { isLoading, accessToken } = useSelector(state => state.authReducer)
    const handleClick = (e) => {
        e.preventDefault();
        setShow(!show);
    };

    const initialValues = {
        username: '',
        password: ''
    }
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        let tempEnable = { ...errorsEnable }
        if ('username' in fieldValues) {
            if (fieldValues.username === '') {
                tempEnable.username = true;
                temp.username = 'Không được để trống.'
            } else {
                tempEnable.username = false;
                temp.username = ''
            }
        }
        if ('password' in fieldValues) {
            if (fieldValues.password === '') {
                tempEnable.password = true;
                temp.password = 'Không được để trống.'
            } else {
                tempEnable.password = false;
                temp.password = ''
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
    useEffect(() => {
        if (accessToken !== '') navigate("/home")
    }, [accessToken, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            await dispatch(requestLogin(values));
        }
    }


    return (
        <Container maxWidth={false}>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <Typography sx={{ marginBottom: '3rem' }} className={cx('title')}>
                        Đăng nhập
                    </Typography>

                    <div className={cx('content-social')}>
                        <div className={cx('social-list')}>
                            {/* <button className={cx('social-item', 'fb-background')}>
                                <FacebookIcon />
                                
                                <Typography className={cx('social-lable', 'fb-color')}>
                                    Continue with Facebook
                                </Typography>
                            </button> */}
                            <FacebookLogin />
                            {/* <button className={cx('social-item')}>
                                <GoogleIcon />
                                <Typography className={cx('social-lable')}>Continue with Google</Typography>
                            </button> */}
                            <GoogleLogin />
                            <button className={cx('social-item')}>
                                <AppleIcon />
                                <Typography className={cx('social-lable')}>Continue with Apple</Typography>
                            </button>
                        </div>

                        <div className={cx('divider')}>Hoặc tiếp tục với</div>
                    </div>

                    <Form onSubmit={handleSubmit} sx={{ width: '100%' }}>
                        <Box sx={{ position: 'relative' }}>
                            <TextField
                                label="Tên đăng nhập"
                                autoComplete='off'
                                InputProps={{
                                    style: { fontSize: '1.5rem' },
                                }}
                                sx={{ marginTop: '1rem' }}
                                variant="outlined"
                                fullWidth
                                name="username"
                                onChange={handleInputChange}
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                error={errorsEnable.username}
                                value={values.username}
                                helperText={errors.username}
                                placeholder="username"
                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                            />
                        </Box>

                        <Box sx={{ position: 'relative', marginBottom: '15px' }}>
                            <TextField
                                sx={{
                                    position: 'relative',
                                    marginTop: '3rem',
                                }}
                                autoComplete='off'
                                label="Mật khẩu"
                                variant="outlined"
                                placeholder={'*******'}
                                fullWidth
                                type={show ? 'text' : 'password'}
                                size="medium"
                                name="password"
                                onChange={handleInputChange}
                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                error={errorsEnable.password}
                                value={values.password}
                                helperText={errors.password}
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
                        <Button variant="contained" type="submit" fullWidth className={cx('btn')}>
                            Đăng nhập
                        </Button>
                    </Form>

                    <Typography
                        component={Link}
                        to={'/auth/forget'}
                        className={cx('custom-link')}
                        sx={{ display: 'block' }}
                    >
                        Quên mật khẩu?
                    </Typography>


                    <div className={cx('flex')}>
                        <Typography sx={{ color: '#00459F', fontSize: '1.5rem' }}>
                            Bạn chưa có tài khoản?
                            <Typography
                                component={Link}
                                to={'/auth/signup'}
                                className={cx('custom-link')}
                                sx={{ marginLeft: '10px!important', fontWeight: 'bold' }}
                            >
                                Đăng ký
                            </Typography>
                        </Typography>
                    </div>
                </div>
            </div>
            <Loading open={isLoading} />
        </Container>
    );
}

export default SignIn;
