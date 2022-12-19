import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";
import {requestDeleteCourse} from "~/redux/course/courseSlice";
import {useDispatch} from "react-redux";

function CourseDelete(props) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(!open);
    };

    const handleAction = (id) => {
        dispatch(requestDeleteCourse(id))
        setOpen(!open);
    };

    return <Box>
        <Button variant="contained"
                onClick={() => setOpen(!open)}
                sx={{
                    marginLeft: "2rem",
                    backgroundColor: "#dc3545",
                    color: '#fff',
                    height: '3rem',
                    boxShadow: 'none',
                    "&:hover": {boxShadow: 'none', backgroundColor: "#dc3545", color: '#fff'}
                }}>
            Xoá
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{fontSize: '2rem', fontWeight:'bold'}}> Bạn có chắc muốn xoá?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" sx={{fontSize: '2rem'}}>
                    Khoá học <strong>{props?.name}</strong> sẽ bị xoá ngay lập tức
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}
                        variant='outlined'
                        sx={{
                            marginLeft: "2rem",
                            color: '#fff',
                            backgroundColor: '#555',
                            height: '3rem',
                            boxShadow: 'none',
                            border: 'none',
                            "&:hover": {
                                border: 'none',
                                backgroundColor: '#555',
                                color: '#fff'
                            },
                        }}>
                    Huỷ
                </Button>
                <Button onClick={() => handleAction(props.id)}
                        sx={{
                            marginLeft: "2rem",
                            backgroundColor: "#dc3545",
                            color: '#fff',
                            height: '3rem',
                            boxShadow: 'none',
                            "&:hover": {boxShadow: 'none', backgroundColor: "#dc3545", color: '#fff'}
                        }}>
                    Xoá
                </Button>
            </DialogActions>
        </Dialog>
    </Box>


}

export default CourseDelete