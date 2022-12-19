import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {requestDeleteCourse} from "~/redux/course/courseSlice";

function CourseTrash() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
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
            Thùng rác
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{fontSize: '5rem'}}> Chức năng thùng rác đang cập nhật</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Huỷ</Button>
            </DialogActions>
        </Dialog>
    </Box>
}

export default CourseTrash;