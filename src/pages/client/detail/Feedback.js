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
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestFeedbackCreate} from "~/redux/feedback/feedbackSlice";
import {useNavigate} from "react-router-dom";


function Feedback({course}) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(state => state.authReducer.userId)
    const accessToken = useSelector(state => state.authReducer.accessToken)

    const handleClose = () => {
        setOpen(!open);
    };
    const handleFeedback = () => {
        const rate = document.querySelector("input[name='rate']").value;
        const content = document.querySelector("textarea").value;
        dispatch(requestFeedbackCreate({
            course: {
                id: course.id,
            },
            userInfo: {
                userId: userId,
            },
            content: content,
            rating: rate,
        }))
        setOpen(!open)
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

                <FormControl sx={{width: '100%', marginTop: '4rem'}}>
                    <Box sx={{marginBottom: '3rem'}}>
                        <Box component={'input'} type="number" max={5} min={1} defaultValue={1}
                             name="rate"
                             sx={{width: '20%', padding: '1rem', marginRight: '1rem'}}/>
                        <label>Chọn số sao</label>
                    </Box>


                    <Box
                        component={"textarea"}
                        placeholder='Chia sẻ về chất lượng khoá học'
                        name="content"
                        sx={{
                            width: '100%',
                            outline: 'none',
                            border: 'none',
                            backgroundColor: "#eee",
                            minHeight: '100px',
                            borderRadius: '1rem',
                            marginBottom: '2rem',
                            fontSize: '1.6rem',
                            padding: '1rem'
                        }}
                    />
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            onClick={handleFeedback}
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

                </FormControl>

            </DialogContent>
        </Dialog>
    </Box>

}

export default Feedback;