import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputBase, TextField, Typography } from "@mui/material";
import { LogoIcon } from "~/components/icons";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MySwal from "~/constants/MySwal";
import { useNavigate } from 'react-router-dom';
import { Form, useForm } from "~/hooks/useForm";
import { requestActiveCourse } from "~/redux/auth/authSlice";
import Loading from "~/components/loading/Loading";


const cx = classNames.bind(styles);

function HeaderActive() {
    const [open, setOpen] = useState(false);
    const { user } = useSelector(state => state.userReducer)
    const { isLoading } = useSelector(state => state.authReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { accessToken, response } = useSelector(state => state.authReducer)


    const initialValues = {
        code: '',
    }
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        let tempEnable = { ...errorsEnable }
        if ('code' in fieldValues) {
            if (fieldValues.code === '') {
                tempEnable.code = true;
                temp.code = 'Không được để trống.'
            } else {
                tempEnable.code = false;
                temp.code = ''
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

    const handleClickOpen = () => {
        if (!!user) {
            setOpen(true);
        } else {
            MySwal.fire({
                title: 'Bạn cần đăng nhập để kích hoạt khóa học',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Đăng nhập',
                cancelButtonText: 'Hủy',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/auth/signin')
                }
            })
        }
    };

    const handleClose = () => {
        resetForm();
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(requestActiveCourse({ code: values.code, accessToken: accessToken }))
        if (response.success) {
            setOpen(false)
            resetForm()
        } else
            setOpen(true)
    }

    return <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ flex: 1 }}>
            <Button variant="outlined" className={cx('btn-active')} onClick={handleClickOpen}>
                Kích hoạt khoá học
            </Button>
            <Dialog open={open} onClose={handleClose}
                PaperProps={{
                    style: {
                        maxWidth: 600,
                        minWidth: 520,
                    }
                }}>
                <DialogTitle sx={{ textAlign: 'center', position: 'relative' }}>
                    <LogoIcon />
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ marginBottom: '1rem' }}>
                        <Typography variant='body1'
                            sx={{
                                textAlign: 'center',
                                fontSize: '3rem',
                                lineHeight: '4rem',
                                fontWeight: 'bold'
                            }}>
                            Kích hoạt khóa học của bạn
                        </Typography>
                        <Typography variant='body1'
                            sx={{ textAlign: 'center', fontSize: '1.6rem', lineHeight: '2rem', }}>
                            Nhập mã kích hoạt của bạn vào ô dưới đây
                        </Typography>
                    </Box>
                    <TextField
                        placeholder='Nhập mã kích hoạt'
                        fullWidth
                        sx={{
                            width: '100%',
                            outline: 'none',
                            border: 'none',
                            backgroundColor: "#eee",
                            height: 64,
                            borderRadius: '1rem',
                            marginBottom: '3rem',
                            fontSize: '2rem',
                        }}
                        name='code'
                        value={values.code}
                        onChange={handleInputChange}
                        error={errorsEnable.code}
                        helperText={errors.code}
                        FormHelperTextProps={{ style: { fontSize: 12 } }}
                        inputProps={{
                            style: {
                                textAlign: 'center',
                                fontSize: '2.4rem'
                            }
                        }}
                    />
                    <Button
                        type='submit'
                        sx={{
                            width: '100%',
                            height: 64,
                            backgroundColor: '#C89F65',
                            color: '#fff',
                            borderRadius: '1rem',
                            fontSize: '1.8rem',
                            textTransform: 'initial',
                            '&:hover': {
                                backgroundColor: '#C89F65',
                                color: '#fff',
                            },
                            marginBottom: '3rem'
                        }}
                        onClick={handleSubmit}

                    >Kích hoạt khóa học của bạn</Button>

                    <DialogActions sx={{ justifyContent: 'center' }}>
                        <Box>
                            <Typography variant='body1' sx={{
                                margin: '1rem 0',
                                fontSize: '1.2rem',
                                lineHeight: '2.2rem'
                            }}>
                                Nếu bạn có gặp vấn đề về kích hoạt tài khoản, xin vui lòng liên hệ
                                hotline:
                            </Typography>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box component={"span"} sx={{ color: '#C89F65', fontSize: '1.2rem' }}>
                                    1800 6816
                                </Box>
                                <Box component={'span'} sx={{ fontSize: '1.2rem', marginLeft: '0.3rem' }}>
                                    (07:00 - 24:00 các ngày trong tuần)
                                </Box>
                            </Box>
                        </Box>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </Box>
        <Loading open={isLoading} />
    </Box>

}

export default HeaderActive