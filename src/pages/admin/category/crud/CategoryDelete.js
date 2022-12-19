import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {requestDeleteCategory} from "~/redux/category/categorySlice";

function CategoryDelete(props) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(!open);
    };

    const handleAction = (id) => {
        dispatch(requestDeleteCategory(id))
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
            <DialogTitle> Bạn có chắc muốn xoá?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Danh mục {props?.name} sẽ bị xoá ngay lập tức
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Huỷ</Button>
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

export default CategoryDelete