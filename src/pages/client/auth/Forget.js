import { Button, Radio, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import style from './Auth.module.scss';
import { CheckIcon } from '~/components/icons';
import { Form, useForm } from '~/hooks/useForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestForgotPassword } from '~/redux/auth/authSlice';
import Loading from '~/components/loading/Loading';
const cx = classNames.bind(style);

function Forget() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { isLoading, accessToken } = useSelector(state => state.authReducer)
    const initialValues = {
        email: '',
        privacy: false,
    }

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        let tempEnable = { ...errorsEnable }
        console.log(fieldValues.privacy)
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
        if ('privacy' in fieldValues) {
            if (fieldValues.privacy !== false) {
                tempEnable.privacy = false
                errors.privacy = ""
            } else {
                tempEnable.privacy = true
                errors.privacy = "Bạn phải đồng ý với điều khoản của chúng tôi"
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
            await dispatch(requestForgotPassword(values));
        }
    }


    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        label="Địa chỉ email"
                        InputProps={{
                            style: { fontSize: '1.5rem' },
                        }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        helperText={errorsEnable.email}
                        placeholder="mail@example.com"
                    />
                    <div className={cx('check-wrapper')}>
                        <div className={cx('check-content')}>
                            <Radio
                                // checked={selectedValue === 'a'}
                                // onChange={handleChange}
                                value={true}
                                size="large"
                                name="privacy"
                                onChange={handleInputChange}
                                error={errors.email}
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            {/* <span className={cx('check-icon')}><CheckIcon /></span> */}
                        </div>
                        <div>
                            <span> Đồng ý với điều khoản, quy chế hoạt động và chính sách bảo mật</span>
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        type="submit" 
                        disabled={!values.privacy}
                        fullWidth
                        className={cx('btn', 'btn-second')}>
                        Xác nhận
                    </Button>
                </Form>
            </div>
            <Loading open={isLoading} />
        </div>
    );
}

export default Forget;
