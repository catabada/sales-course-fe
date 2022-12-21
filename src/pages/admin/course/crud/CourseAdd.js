import { useDispatch, useSelector } from 'react-redux';
import { getLecturerSearch } from '~/redux/lecturer/lecturerSlice';
import { getCategoriesSearch } from '~/redux/category/categorySlice';
import { Form, useForm } from '~/hooks/useForm';
import { requestCreateCourse } from '~/redux/course/courseSlice';
import { useState } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, TextField } from '@mui/material';

function CourseAdd() {
    const dispatch = useDispatch();
    const lecturers = useSelector((state) => state.lecturerReducer.lecturers);
    const categories = useSelector((state) => state.categoryReducer.categories);
    const [open, setOpen] = useState(false);

    const handleOpen = async (data) => {
        await dispatch(getLecturerSearch({}));
        await dispatch(getCategoriesSearch({}));
        setOpen(!open);
    };
    const initialValues = {
        name: '',
        sku: '',
        description: '',
        videoPath: '',
        category: '',
        lecturer: '',
        price: 0,
        discount: 0.1,
        image: '',
    };
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        let tempEnable = { ...errorsEnable };
        if ('name' in fieldValues) {
            if (fieldValues.name === '') {
                tempEnable.name = true;
                temp.name = 'Vui lòng nhập tên khoá học';
            } else {
                tempEnable.name = false;
                temp.name = '';
            }
        }
        if ('videoPath' in fieldValues) {
            if (fieldValues.videoPath === '') {
                tempEnable.videoPath = true;
                temp.videoPath = 'Vui lòng nhập link video demo khoá học';
            } else {
                tempEnable.videoPath = false;
                temp.videoPath = '';
            }
        }
        if ('price' in fieldValues) {
            if (fieldValues.price <= 0) {
                tempEnable.price = true;
                temp.price = 'Vui lòng nhập giá khoá học';
            } else {
                tempEnable.price = false;
                temp.price = '';
            }
        }
        if ('discount' in fieldValues) {
            if (fieldValues.discount < 0 && fieldValues.discount > 1 && fieldValues.discount == '') {
                tempEnable.discount = true;
                temp.discount = 'Vui lòng nhập lại phần trăm giảm giá (ví dụ: 0.2)';
            } else {
                tempEnable.discount = false;
                temp.discount = '';
            }
        }
        if ('category' in fieldValues) {
            if (fieldValues.category === '') {
                tempEnable.category = true;
                temp.category = 'Vui lòng chọn danh mục khoá học';
            } else {
                tempEnable.category = false;
                temp.category = '';
            }
        }
        if ('lecturer' in fieldValues) {
            if (fieldValues.lecturer === '') {
                tempEnable.lecturer = true;
                temp.lecturer = 'Vui lòng chọn tác giả khoá học';
            } else {
                tempEnable.lecturer = false;
                temp.lecturer = '';
            }
        }
        if ('image' in fieldValues) {
            if (fieldValues.image === '') {
                tempEnable.image = true;
                temp.image = 'Vui lòng chọn ảnh cho khoá học';
            } else {
                tempEnable.image = false;
                temp.image = '';
            }
        }
        if ('sku' in fieldValues) {
            tempEnable.sku = false;
            temp.sku = '';
        }
        if ('description' in fieldValues) {
            tempEnable.description = false;
            temp.description = '';
        }
        setErrors({
            ...temp,
        });
        setErrorsEnable({
            ...tempEnable,
        });
        if (fieldValues === values) return Object.values(temp).every((x) => x === '');
    };
    const { values, setValues, errors, setErrors, errorsEnable, setErrorsEnable, handleInputChange, resetForm } =
        useForm(initialValues, true, validate);

    const handleClose = () => {
        setOpen(!open);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(
                requestCreateCourse({
                    name: values.name,
                    sku: values.sku,
                    description: values.description,
                    image: values.image,
                    videoDemo: values.videoPath,
                    price: Number.parseInt(values.price),
                    discount: Number.parseFloat(values.discount),
                    category: {
                        id: Number.parseInt(values.category.substring(0, values.category.indexOf('-'))),
                        name: values.category.substring(values.category.indexOf('-') + 1),
                    },
                    lecturer: {
                        id: Number.parseInt(values.lecturer.substring(0, values.lecturer.indexOf('-'))),
                        name: values.lecturer.substring(values.lecturer.indexOf('-') + 1),
                    },
                    state: 'RUNNING',
                }),
            );
            setOpen(!open);
            resetForm();
        }
    };
    return (
        <Box>
            <Button
                variant="contained"
                onClick={() => handleOpen()}
                sx={{
                    marginLeft: '2rem',
                    backgroundColor: '#2ecc71',
                    color: '#fff',
                    height: '3rem',
                    boxShadow: 'none',
                    '&:hover': { boxShadow: 'none', backgroundColor: '#2ecc71', color: '#fff' },
                }}
            >
                Thêm khoá học
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        maxWidth: '800px',
                    },
                }}
            >
                <DialogTitle sx={{ fontSize: '2.4rem', fontWeight: 'bold' }}>Thêm khoá học mới !!!</DialogTitle>
                <DialogContent className="p-4">
                    <Form onSubmit={(e) => handleSubmit(e)} component={'form'} className="row">
                        <Box className="col-12">
                            <Box className="row">
                                <Box className="col-8">
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Tên khoá học"
                                                placeholder="Tên khoá học"
                                                autoComplete="off"
                                                inputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="name"
                                                onChange={handleInputChange}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                error={errorsEnable.name}
                                                value={values.name}
                                                helperText={errors.name}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Sku"
                                                placeholder="Sku"
                                                autoComplete="off"
                                                InputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="sku"
                                                onChange={handleInputChange}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                value={values.sku}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                multiline
                                                rows={5}
                                                label="Mô tả khoá học"
                                                placeholder="Mô tả khoá học"
                                                autoComplete="off"
                                                InputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="description"
                                                onChange={handleInputChange}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                value={values.description}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Đường dẫn video demo"
                                                placeholder="Đường dẫn video demo"
                                                autoComplete="off"
                                                InputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="videoPath"
                                                onChange={handleInputChange}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                error={errorsEnable.videoPath}
                                                value={values.videoPath}
                                                helperText={errors.videoPath}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                            />
                                        </FormControl>
                                    </Box>
                                </Box>
                                <Box className="col-4">
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                select
                                                autoComplete="off"
                                                InputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="category"
                                                onChange={handleInputChange}
                                                error={errorsEnable.category}
                                                helperText={errors.category}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                                SelectProps={{
                                                    native: true,
                                                    style: { fontSize: '1.6rem' },
                                                }}
                                                label="Chọn danh mục"
                                            >
                                                <option>Chọn danh mục</option>
                                                {categories?.map((item, index) => (
                                                    <option
                                                        key={index}
                                                        value={`${item.id}-${item.name}`}
                                                        sx={{ fontSize: '1.8rem' }}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Chọn tác giả"
                                                select
                                                autoComplete="off"
                                                InputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="lecturer"
                                                onChange={handleInputChange}
                                                error={errorsEnable.lecturer}
                                                helperText={errors.lecturer}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                                SelectProps={{
                                                    native: true,
                                                    style: { fontSize: '1.6rem' },
                                                }}
                                            >
                                                <option>Chọn tác giả</option>
                                                {lecturers?.map((item, index) => (
                                                    <option
                                                        key={index}
                                                        value={`${item.id}-${item.name}`}
                                                        sx={{ fontSize: '1.8rem' }}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Giá khoá học"
                                                placeholder="Giá khoá học"
                                                type="number"
                                                autoComplete="off"
                                                InputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="price"
                                                onChange={handleInputChange}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                value={values.price}
                                                error={errorsEnable.price}
                                                helperText={errors.price}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Discount khoá học"
                                                type="number"
                                                autoComplete="off"
                                                inputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                    min: 0,
                                                    max: 1,
                                                    step: 0.1,
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="discount"
                                                onChange={handleInputChange}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                value={values.discount}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                type="file"
                                                autoComplete="off"
                                                inputProps={{
                                                    style: { fontSize: '1.5rem' },
                                                    accept: '.png, .jpg,. jpeg',
                                                }}
                                                sx={{ marginTop: '1rem' }}
                                                variant="outlined"
                                                fullWidth
                                                name="image"
                                                onChange={handleInputChange}
                                                FormHelperTextProps={{ style: { fontSize: 12 } }}
                                                error={errorsEnable.image}
                                                value={values.image}
                                                helperText={errors.image}
                                                InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                            />
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="col-12 d-flex justify-content-end">
                            <Button
                                onClick={handleClose}
                                variant="outlined"
                                sx={{
                                    marginLeft: '2rem',
                                    color: '#fff',
                                    backgroundColor: '#555',
                                    height: '3rem',
                                    boxShadow: 'none',
                                    border: 'none',
                                    '&:hover': {
                                        border: 'none',
                                        backgroundColor: '#555',
                                        color: '#fff',
                                    },
                                }}
                            >
                                Huỷ
                            </Button>
                            <Button
                                type="submit"
                                sx={{
                                    marginLeft: '2rem',
                                    backgroundColor: '#8e44ad',
                                    color: '#fff',
                                    height: '3rem',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        backgroundColor: '#8e44ad',
                                        color: '#fff',
                                    },
                                }}
                            >
                                Lưu
                            </Button>
                        </Box>
                    </Form>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default CourseAdd;
