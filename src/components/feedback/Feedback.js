import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputBase, TextareaAutosize, TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestFeedbackCreate, requestFeedbackSearch} from "~/redux/feedback/feedbackSlice";
import {useNavigate} from "react-router-dom";
import {Rating} from 'react-simple-star-rating'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import './Feedback.scss';
import {Form, useForm} from "~/hooks/useForm";
import {requestLogin} from "~/redux/auth/authSlice";


function Feedback({course}) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(state => state.authReducer.userId)
    const accessToken = useSelector(state => state.authReducer.accessToken)
    const [ratingValue, setRatingValue] = useState(0)
    const feedback = useSelector(state => state.feedbackReducer.feedbacks)
    useEffect(() => {
        dispatch(requestFeedbackSearch({
            course: {
                id: course?.id
            },
            userInfo: {
                id: userId
            }
        }))
    }, [dispatch])
    const handleClose = () => {
        setOpen(!open);

    };
    const handleRating = (rate) => {
        setRatingValue(rate)
    }

    const initialValues = {
        content: '',
    }
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        let tempEnable = {...errorsEnable}
        if ('content' in fieldValues) {
            if (fieldValues.content === '') {
                tempEnable.content = true;
                temp.content = 'Hãy cho chúng tôi biết trải nghiệm của bạn về khoá học.'
            } else if (ratingValue === 0) {
                tempEnable.content = true;
                temp.content = 'Hãy cho chúng tôi biết khoá học này được bao nhiêu sao.'
            } else {
                tempEnable.content = false;
                temp.content = '';
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(requestFeedbackCreate({
                course: {
                    id: course.id,
                },
                userInfo: {
                    userId: userId,
                },
                content: values.content,
                rating: ratingValue,
            }))
            setOpen(!open)
        }

    }


    return <Box sx={{display: 'flex'}} className='col-4'>
        <Typography variant='body1' onClick={() => setOpen(!open)} sx={{
            fontSize: '1.8rem',
            textAlign: 'center',
            color: '#C89F65',
            cursor: 'pointer',
        }}>
            Chia sẻ đánh giá của bạn
        </Typography>
        <Dialog open={open} onClose={handleClose}
                PaperProps={{
                    style: {
                        maxWidth: 600,
                        minWidth: 520,
                        minHeight: 500,
                    }
                }}>
            <DialogTitle sx={{textAlign: 'center', position: 'relative'}}>
                x
            </DialogTitle>
            <DialogContent>
                <Box sx={{marginBottom: '1rem'}}>
                    <Typography variant='body1'
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '4rem',
                                    lineHeight: '4rem',
                                    fontWeight: 'bold',
                                    margin: '4rem 0'
                                }}>
                        Đánh giá
                    </Typography>
                    <Typography variant='body1'
                                sx={{textAlign: 'center', fontSize: '1.6rem', lineHeight: '2rem',}}>
                        Bạn cảm thấy khoá học <strong> {course?.name}</strong> như thể nào?
                    </Typography>
                </Box>

                <Form onSubmit={(e) => handleSubmit(e)} sx={{width: '100%', marginTop: '4rem'}}>
                    <Box sx={{marginBottom: '3rem', display: 'flex', justifyContent: 'center'}}>
                        <Rating onClick={handleRating}
                                iconsCount={5}
                                initialValue={0}
                                size={60}
                                showTooltip={true}
                                tooltipArray={['Rất chán', 'Chán', 'Cũng bình thường thôi', 'Hay', 'Rất hay']}
                                tooltipStyle={{
                                    backgroundColor: 'transparent',
                                    color: '#000',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}

                        />
                    </Box>
                    <TextField
                        variant='outlined'
                        multiline={true}
                        rows={5}
                        placeholder='Chia sẻ về chất lượng khoá học'
                        name="content"
                        autoComplete='off'
                        sx={{
                            width: '100%',
                            minHeight: '100px',
                            borderRadius: '1rem',
                            marginBottom: '2rem',
                            fontSize: '1.6rem',
                            padding: '1rem'
                        }}
                        onChange={handleInputChange}
                        FormHelperTextProps={{style: {fontSize: 12}}}
                        error={errorsEnable.content}
                        value={values.content}
                        helperText={errors.content}
                        inputProps={{
                            style: {fontSize: '1.8rem'}
                        }}
                    />
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            type="submit"
                            sx={{
                                width: '80%',
                                height: 50,
                                backgroundColor: '#C89F65',
                                color: '#fff',
                                borderRadius: '3rem',
                                fontSize: '1.8rem',
                                textTransform: 'initial',
                                '&:hover': {
                                    backgroundColor: '#C89F65',
                                    color: '#fff',
                                },
                                marginBottom: '3rem'
                            }}>Xác nhận</Button>
                    </Box>
                </Form>

            </DialogContent>
        </Dialog>
    </Box>

}

export default Feedback;