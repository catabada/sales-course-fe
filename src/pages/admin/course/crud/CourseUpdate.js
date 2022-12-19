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
import {requestUpdateCourse} from "~/redux/course/courseSlice";
import {getLecturerSearch} from "~/redux/lecturer/lecturerSlice";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesSearch} from "~/redux/category/categorySlice";


function CourseUpdate(props) {
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
    const handleAction = (id) => {
        const name = document.querySelector("input[name='name']")?.value;
        const sku = document.querySelector("input[name='sku']")?.value;
        const description = document.querySelector("textarea[name='description']")?.value;
        const videoDemo = document.querySelector("input[name='video']")?.value;
        const price = document.querySelector("input[name='price']")?.value;
        const discount = document.querySelector("input[name='discount']")?.value;
        const cateId = document.querySelector("select[name='category']")?.value;
        const lecId = document.querySelector("select[name='lecturer']")?.value;
        const image = document.querySelector("input[name='image']")?.value;
        dispatch(requestUpdateCourse({
            id: id,
            name: name,
            sku: sku === null ? null : sku,
            description: description == null ? null : description,
            image: image,
            videoDemo: videoDemo,
            price: price,
            discount: discount,
            category: {
                id: cateId
            },
            lecturer: {
                id: lecId
            },
        }))
        // validation
        // setOpen(!open);
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
            <DialogTitle sx={{fontSize: '2.4rem', fontWeight: 'bold'}}> Cập nhật thông tin khoá học</DialogTitle>
            <DialogContent>
                <Box component={"form"} className="row" sx={{p: 1}}>
                    <Box className="col-8">
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   defaultValue={props?.data.name}
                                   name="name"
                                   label="Tên"
                                   placeholder="Tên khoá học"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                        <TextField variant="outlined"
                                   fullWidth name="sku"
                                   label="sku"
                                   defaultValue={props?.data.sku}
                                   placeholder="sku"
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                        <TextField multiline
                                   rows={6}
                                   variant="outlined"
                                   defaultValue={props?.data.description}
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
                                   defaultValue={props?.data.videoDemo}
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
                            <Box component="option" value={props?.data.lecturer.id}>{props?.data.lecturer.name}</Box>
                            {
                                lecturers?.map((item, index) => {
                                        if (item.id !== props?.data.lecturer.id) {
                                            return <Box component={"option"} sx={{fontSize: '1.6rem'}} key={item.id}
                                                        value={item.id}>
                                                {item.name}
                                            </Box>
                                        }
                                    }
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
                            <Box component="option"
                                 value={props.data.category?.id}>{props.data.category?.name}</Box>
                            {
                                categories?.map((item, index) => {
                                        if (props.data.category?.id !== item.id) {
                                            return <Box component={"option"} sx={{fontSize: '1.6rem'}} key={item.id}
                                                        value={item.id}>
                                                {item.name}
                                            </Box>
                                        }
                                    }
                                )
                            }
                        </TextField>
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   name="price"
                                   defaultValue={props?.data.price}
                                   placeholder="Giá khoá học"
                                   label="Giá"
                                   type="number"
                                   sx={{marginBottom: '2.2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{style: {fontSize: '1.6rem'}}}/>
                        <TextField variant="outlined"
                                   required
                                   fullWidth
                                   name="discount"
                                   placeholder="0.2"
                                   label="Discount"
                                   type="number"
                                   readOnly
                                   sx={{marginBottom: '2rem'}}
                                   InputLabelProps={{style: {fontSize: '1.4rem'}}}
                                   inputProps={{
                                       min: 0,
                                       max: 1,
                                       step: 0.1,
                                       defaultValue: `${props?.data.discount}`,
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
                <Button onClick={() => handleAction(props?.data?.id)}
                        sx={{
                            marginLeft: "2rem",
                            backgroundColor: "#28a745",
                            color: '#fff',
                            height: '3rem',
                            boxShadow: 'none',
                            "&:hover": {boxShadow: 'none', backgroundColor: '#28a745', color: '#fff'}
                        }}>
                    Cập nhật khoá học
                </Button>
            </DialogActions>
        </Dialog>
    </Box>
}

export default CourseUpdate;