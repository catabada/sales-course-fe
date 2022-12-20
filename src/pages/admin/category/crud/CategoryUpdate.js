import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesSearch, requestUpdateCategory} from "~/redux/category/categorySlice";

function CategoryUpdate(props) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories)
    const [open, setOpen] = useState(false);

    const handleOpen = async () => {
        await dispatch(getCategoriesSearch({}))
        setOpen(!open)
    }


    const handleClose = () => {
        setOpen(!open);
    };

    const handleAction = (id) => {
        const name = document.querySelector("input[name='name']")?.value;
        const cateId = document.querySelector("select[name='category']")?.value;
        const type = document.querySelector("input[name='type']")?.value;
        const category = cateId == 'null' ? null : {id: Number.parseInt(cateId)}

        dispatch(requestUpdateCategory({
            id: id,
            name: name,
            category: category,
            type: Number.parseInt(type)
        }))

        setOpen(!open);
    };
    return <Box>
        <Button variant="contained"
                onClick={handleOpen}
                sx={{
                    marginLeft: "2rem",
                    backgroundColor: "#ffc107",
                    color: '#fff',
                    height: '3rem',
                    boxShadow: 'none',
                    "&:hover": {boxShadow: 'none', backgroundColor: '#ffc107', color: '#fff'}
                }}>
            Cập nhật
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                style: {
                    maxWidth: '800px'
                }
            }}
        >
            <DialogTitle sx={{fontSize: '2.4rem', fontWeight: 'bold'}}> Cập nhật danh mục</DialogTitle>
            <DialogContent>
                <Box component={"form"} className="row" sx={{p: 1}}>
                    <Box className="col-8">
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   name="name"
                                   label="Tên"
                                   placeholder="Tên danh mục"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                    </Box>
                    <Box className="col-4">
                        <TextField select
                                   sx={{marginBottom: "2rem"}}
                                   SelectProps={{
                                       native: true,
                                       style: {fontSize: '1.6rem'}
                                   }} name="category">
                            <Box component="option" value="null">Chọn danh mục</Box>
                            {
                                categories?.map((item, index) => (
                                    <Box component={"option"} sx={{fontSize: '1.6rem'}} key={item.id} value={item.id}>
                                        {item.name}
                                    </Box>
                                ))
                            }
                        </TextField>
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   name="type"
                                   type="number"
                                   placeholder="Cấp danh mục"
                                   label="Level"
                                   sx={{marginBottom: '2.2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>

                    </Box>
                </Box>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Huỷ</Button>
                <Button onClick={() => handleAction(props.id)}
                        sx={{
                            marginLeft: "2rem",
                            backgroundColor: "#28a745",
                            color: '#fff',
                            height: '3rem',
                            boxShadow: 'none',
                            "&:hover": {boxShadow: 'none', backgroundColor: '#28a745', color: '#fff'}
                        }}>
                    Cập nhật danh mục
                </Button>
            </DialogActions>
        </Dialog>
    </Box>
}

export default CategoryUpdate;