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
import {getLecturerSearch} from "~/redux/lecturer/lecturerSlice";
import {getCategoriesSearch} from "~/redux/category/categorySlice";
import {requestCreateCourse} from "~/redux/course/courseSlice";


function CourseAdd() {
    const dispatch = useDispatch();
    const lecturers = useSelector(state => state.lecturerReducer.lecturers)
    const categories = useSelector(state => state.categoryReducer.categories)
    const [open, setOpen] = useState(false);

    const handleOpen = async () => {
        await dispatch(getLecturerSearch({}))
        await dispatch(getCategoriesSearch({}))
        setOpen(!open)
    }


    const handleClose = () => {
        setOpen(!open);
    };

    const handleAction = () => {
        const name = document.querySelector("input[name='name']")?.value;
        const sku = document.querySelector("input[name='sku']")?.value;
        const description = document.querySelector("textarea[name='description']")?.value;
        const videoDemo = document.querySelector("input[name='video']")?.value;
        const price = document.querySelector("input[name='price']")?.value;
        const discount = document.querySelector("input[name='discount']")?.value;
        const cateId = document.querySelector("select[name='category']")?.value;
        const lecId = document.querySelector("select[name='lecturer']")?.value;
        const image = document.querySelector("input[name='image']")?.value;
        dispatch(requestCreateCourse({
            name: name,
            sku: sku === null ? null : sku,
            description: description == null ? null : description,
            image: image,
            videoDemo: videoDemo,
            price: price,
            discount: discount,
            category: {
                id: cateId,
            },
            lecturer: {
                id: lecId
            },
            state: "RUNNING"
        }))
        setOpen(!open);
    };
    return <Box>
        <Button variant="contained"
                onClick={handleOpen}
                sx={{
                    marginLeft: "2rem",
                    backgroundColor: "#28a745",
                    color: '#fff',
                    height: '3rem',
                    boxShadow: 'none',
                    "&:hover": {boxShadow: 'none', backgroundColor: '#28a745', color: '#fff'}
                }}>
            Thêm khoá học
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
            <DialogTitle sx={{fontSize: '2.4rem', fontWeight: 'bold'}}> Thêm khoá học mới</DialogTitle>
            <DialogContent>
                <Box component={"form"} className="row" sx={{p: 1}}>
                    <Box className="col-8">
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   name="name"
                                   label="Tên"
                                   placeholder="Tên khoá học"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                        <TextField variant="outlined"
                                   fullWidth name="sku"
                                   label="sku"
                                   placeholder="sku"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                        <TextField multiline
                                   rows={6}
                                   variant="outlined"
                                   fullWidth
                                   label="Mô tả"
                                   name="description"
                                   placeholder="mô tả"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   name="video"
                                   placeholder="Đường dẫn đến video"
                                   label="Link Video"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                    </Box>
                    <Box className="col-4">
                        <TextField select
                                   required
                                   sx={{marginBottom: "2rem"}}
                                   SelectProps={{
                                       native: true,
                                       style: {fontSize: '1.6rem'}
                                   }} name="lecturer">
                            <Box component="option">Chọn tác giả</Box>
                            {
                                lecturers?.map((item, index) => (
                                        <Box component={"option"} sx={{fontSize: '1.6rem'}} key={item.id} value={item}>
                                            {item.name}
                                        </Box>
                                    )
                                )
                            }
                        </TextField>
                        <TextField select
                                   required
                                   sx={{marginBottom: "2rem"}}
                                   SelectProps={{
                                       native: true,
                                       style: {fontSize: '1.6rem'}
                                   }} name="category">
                            <Box component="option">Chọn danh mục</Box>
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
                                   name="price"
                                   placeholder="Giá khoá học"
                                   label="Giá"
                                   sx={{marginBottom: '2.2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   type="number"
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   type="number"
                                   name="discount"
                                   placeholder="0.2"
                                   label="Discount"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{
                                       min: 0,
                                       max: 1,
                                       step: 0.1,
                                       style: {fontSize: '1.6rem'}
                                   }}/>
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   type="file"
                                   name="image"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>

                    </Box>
                </Box>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Huỷ</Button>
                <Button onClick={handleAction}
                        sx={{
                            marginLeft: "2rem",
                            backgroundColor: "#28a745",
                            color: '#fff',
                            height: '3rem',
                            boxShadow: 'none',
                            "&:hover": {boxShadow: 'none', backgroundColor: '#28a745', color: '#fff'}
                        }}>
                    Thêm khoá học
                </Button>
            </DialogActions>
        </Dialog>
    </Box>
}

export default CourseAdd;