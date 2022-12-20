import {Button, TextField, Typography} from '@mui/material';
import classNames from 'classnames/bind';
import {useNavigate} from 'react-router-dom';
import style from './Auth.module.scss';

import {FacebookIcon, GoogleIcon, AppleIcon} from '~/components/icons';
import {useState} from 'react';
import {Form, useForm} from '~/hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import {requestRegister} from '~/redux/auth/authSlice';
import Loading from '~/components/loading';

const cx = classNames.bind(style);

function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState(false);
    const {isLoading} = useSelector(state => state.authReducer)


    const initialFieldValues = {
        username: '',
        email: '',
        password: '',
        phone: ''
    }

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        let tempEnable = {...errorsEnable}
        if ('email' in fieldValues) {
            if (fieldValues.email !== '') {
                if ((/$^|.+@.+..+/).test(fieldValues.email)) {
                    temp.email = ''
                    tempEnable.email = false
                } else {
                    temp.email = 'Không đúng định dạng email'
                    tempEnable.email = true
                }
            } else {
                temp.email = 'Không được để trống'
                tempEnable.email = true
            }
        }
        if ('username' in fieldValues) {
            if (fieldValues.username !== '') {
                temp.username = ''
                tempEnable.username = false
            } else {
                temp.username = 'Không được để trống'
                tempEnable.username = true
            }
        }
        if ('password' in fieldValues) {
            if (fieldValues.email !== '') {
                if (fieldValues.password.length >= 8) {
                    temp.password = ''
                    tempEnable.password = false
                } else {
                    temp.password = 'Mật khẩu phải có ít nhất 8 ký tự'
                    tempEnable.password = true
                }
            } else {
                temp.password = 'Không được để trống'
                tempEnable.password = true
            }
        }
        if ('phone' in fieldValues) {
            if (fieldValues.phone !== '') {
                if (fieldValues.phone[0] === '0') {
                    if (fieldValues.phone.length === 10) {
                        temp.phone = ''
                        tempEnable.phone = false
                    } else {
                        temp.phone = 'Số điện thoại phải có đủ 10 số'
                        tempEnable.phone = true
                    }
                } else {
                    temp.phone = 'Số điện thoại phải bắt đầu bằng số 0'
                    tempEnable.phone = true
                }
            } else {
                temp.phone = 'Không được để trống'
                tempEnable.phone = true
            }
        }
        setErrors({
            ...temp
        })
        setErrorsEnable({
            ...tempEnable
        })

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "")
        }
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
    } = useForm(initialFieldValues, true, validate);
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validate()) {
            await dispatch(requestRegister({userRegister: values}))
            if (!isLoading) {
                setShowConfirm(true);
            }
        }
    }

    const handleSendEmailAgain = () => {
        dispatch(requestRegister({userRegister: values}))
    }


    return (
        <div className={cx('wrapper')}>
            <div hidden={showConfirm} className={cx('content')}>
                <Typography className={cx('title')}>Đăng ký</Typography>

                <div className={cx('content-social')}>
                    <div className={cx('social-list')}>
                        <button className={cx('social-item', 'fb-background')}>
                            <FacebookIcon/>
                            <Typography className={cx('social-lable', 'fb-color')}>Continue with Facebook</Typography>
                        </button>

                        <button className={cx('social-item')}>
                            <GoogleIcon/>
                            <Typography className={cx('social-lable')}>Continue with Google</Typography>
                        </button>

                        <button className={cx('social-item')}>
                            <AppleIcon/>
                            <Typography className={cx('social-lable')}>Continue with Apple</Typography>
                        </button>
                    </div>

                    <div className={cx('divider')}>Hoặc tiếp tục với</div>
                </div>

                <Form
                    onSubmit={handleSubmit} id="form">
                    <TextField
                        id="username"
                        label="Tên đăng nhập"
                        autoComplete='off'
                        margin='normal'
                        InputProps={{
                            style: {fontSize: '1.6rem'},
                        }}
                        InputLabelProps={{style: {fontSize: 16}}}
                        FormHelperTextProps={{style: {fontSize: 12}}}
                        variant="outlined"
                        fullWidth
                        placeholder="username"
                        error={errorsEnable.username}
                        helperText={errors.username}
                        onChange={handleInputChange}
                        name="username"
                        value={values.username}
                    />
                    <TextField
                        id="email"
                        autoComplete='off'
                        label="Địa chỉ email"
                        margin='normal'
                        InputProps={{
                            style: {fontSize: '1.6rem'},
                        }}
                        InputLabelProps={{style: {fontSize: 16}}}
                        FormHelperTextProps={{style: {fontSize: 12}}}
                        variant="outlined"
                        fullWidth
                        placeholder="mail@example.com"
                        error={errorsEnable.email}
                        helperText={errors.email}
                        onChange={handleInputChange}
                        name="email"
                        value={values.email}
                    />
                    <TextField
                        margin='normal'
                        id="password"
                        type="password"
                        label="Mật khẩu"
                        autoComplete='current-password'
                        InputProps={{
                            style: {fontSize: '1.6rem'},
                        }}
                        InputLabelProps={{style: {fontSize: 16}}}
                        FormHelperTextProps={{style: {fontSize: 12}}}
                        variant="outlined"
                        fullWidth
                        placeholder="*******"
                        error={errorsEnable.password}
                        helperText={errors.password}
                        onChange={handleInputChange}
                        name="password"
                        value={values.password}
                    />
                    <TextField
                        id="phone-number"
                        label="Số điện thoại"
                        margin='normal'
                        autoComplete='off'
                        InputProps={{
                            style: {fontSize: '1.6rem'},
                        }}
                        InputLabelProps={{style: {fontSize: 16}}}
                        FormHelperTextProps={{style: {fontSize: 12}}}
                        variant="outlined"
                        fullWidth
                        placeholder="0123133123"
                        error={errorsEnable.phone}
                        helperText={errors.phone}
                        onChange={handleInputChange}
                        name="phone"
                        value={values.phone}
                    />
                    <Button
                        type='submit'
                        variant="contained"
                        fullWidth
                        className={cx('btn', 'btn-second')}
                    >
                        Tiếp theo
                    </Button>
                </Form>


                <div className={cx('flex')}>
                    <Typography sx={{color: '#00459F', fontSize: '1.5rem'}}>
                        Đã có tài khoản?
                        <Typography
                            onClick={() => navigate("/auth/signin")}
                            className={cx('custom-link')}
                            sx={{marginLeft: '10px!important', fontWeight: 'bold', cursor: 'pointer'}}
                        >
                            Đăng nhập
                        </Typography>
                    </Typography>
                </div>
            </div>
            <div hidden={!showConfirm} className={cx('confirm')}>
                <Typography className={cx('title')}>Xác nhận</Typography>
                <Typography className={cx('content')}>Chúng tôi đã gửi email tới địa chỉ {values.email}</Typography>
                <Typography className={cx('des')}>
                    Vui lòng nhấn vào đường dẫn được gửi tới email của bạn để hoàn thành đăng ký. Nếu bạn không nhận
                    được email, hãy kiểm tra tệp tin rác của bạn.
                </Typography>
                <Button
                    variant="contained"
                    fullWidth
                    className={cx('btn', 'btn-second')}
                    onClick={handleSendEmailAgain}
                >
                    Gửi lại email xác nhận
                </Button>
                <div className={cx('flex')}>
                    <Typography sx={{color: '#00459F', fontSize: '1.5rem'}}>
                        Đã có tài khoản?
                        <Typography
                            onClick={() => navigate('/auth/signin')}
                            className={cx('custom-link')}
                            sx={{marginLeft: '10px!important', fontWeight: 'bold'}}
                        >
                            Đăng nhập
                        </Typography>
                    </Typography>
                </div>
            </div>
            <Loading open={isLoading}/>
        </div>
    );
}

export default SignUp;
