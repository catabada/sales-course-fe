import {useDispatch, useSelector} from "react-redux";
import {getLecturerSearch} from "~/redux/lecturer/lecturerSlice";
import {getCategoriesSearch} from "~/redux/category/categorySlice";
import {Form, useForm} from "~/hooks/useForm";
import {requestUpdateCourse} from "~/redux/course/courseSlice";
import {useState} from "react";
import {Box, Button, Dialog, DialogContent, DialogTitle, FormControl, TextField} from "@mui/material";

function CourseUpdate(props) {
    const dispatch = useDispatch();
    const lecturers = useSelector(state => state.lecturerReducer.lecturers)
    const categories = useSelector(state => state.categoryReducer.categories)
    const [open, setOpen] = useState(false);

    const {data} = props

    // const initialValues = {
    //     name: data?.name,
    //     sku: data?.sku,
    //     description: data?.description,
    //     videoDemo: data?.videoDemo,
    //     category: `${data?.category?.id}-${data?.category?.name}`,
    //     lecturer: `${data?.lecturer?.id}-${data?.lecturer?.name}`,
    //     price: data?.price,
    //     discount: data?.discount,
    //     image: data?.image
    // }
    const initialValues = {
        name: data?.name == undefined ? '' : data?.name,
        sku: data?.sku == undefined ? '' : data?.sku,
        description: data?.description == undefined ? '' : data?.description,
        videoDemo: data?.videoDemo == undefined ? '' : data?.videoDemo,
        category: data?.category == undefined ? '' : `${data?.category.id}-${data?.category.name}`,
        lecturer: data?.lecturer == undefined ? '' : `${data?.lecturer.id}-${data?.lecturer.name}`,
        price: data?.price == undefined ? '' : data?.price,
        discount: data?.discount == undefined ? '' : data?.discount,
        image: ''
    }
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        let tempEnable = {...errorsEnable}
        if ('name' in fieldValues) {
            if (fieldValues.name === '') {
                tempEnable.name = true;
                temp.name = 'Vui l??ng nh???p t??n kho?? h???c'
            } else {
                tempEnable.name = false;
                temp.name = ''
            }
        }
        if ('videoDemo' in fieldValues) {
            if (fieldValues.videoDemo === '') {
                tempEnable.videoDemo = true;
                temp.videoDemo = 'Vui l??ng nh???p link video demo kho?? h???c'
            } else {
                tempEnable.videoDemo = false;
                temp.videoDemo = ''
            }
        }
        if ('price' in fieldValues) {
            if (fieldValues.price <= 0) {
                tempEnable.price = true;
                temp.price = 'Vui l??ng nh???p gi?? kho?? h???c'
            } else {
                tempEnable.price = false;
                temp.price = ''
            }
        }
        if ('discount' in fieldValues) {
            if (fieldValues.discount < 0 && fieldValues.discount > 1 && fieldValues.discount == '') {
                tempEnable.discount = true;
                temp.discount = 'Vui l??ng nh???p l???i ph???n tr??m gi???m gi?? (v?? d???: 0.2)'
            } else {
                tempEnable.discount = false;
                temp.discount = ''
            }
        }
        if ('category' in fieldValues) {
            if (fieldValues.category === '' && fieldValues.category === null) {
                tempEnable.category = true;
                temp.category = 'Vui l??ng ch???n danh m???c kho?? h???c'
            } else {
                tempEnable.category = false;
                temp.category = ''
            }
        }
        if ('lecturer' in fieldValues) {
            if (fieldValues.lecturer === '') {
                tempEnable.lecturer = true;
                temp.lecturer = 'Vui l??ng ch???n t??c gi??? kho?? h???c'
            } else {
                tempEnable.lecturer = false;
                temp.lecturer = ''
            }
        }
        if ('image' in fieldValues) {
            if (fieldValues.image === '') {
                tempEnable.image = true;
                temp.image = 'Vui l??ng ch???n ???nh cho kho?? h???c'
            } else {
                tempEnable.image = false;
                temp.image = ''
            }
        }
        if ('sku' in fieldValues) {
            tempEnable.sku = false;
            temp.sku = ''
        }
        if ('description' in fieldValues) {
            tempEnable.description = false;
            temp.description = ''
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


    const handleClose = () => {
        setOpen(!open);
    };
    const handleOpen = async () => {
        await dispatch(getLecturerSearch({}))
        await dispatch(getCategoriesSearch({}))
        setOpen(!open)
        // console.log(initialValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(requestUpdateCourse({
                codeName: props?.codeName,
                name: values.name,
                sku: values.sku,
                description: values.description,
                image: values.image,
                videoDemo: values.videoDemo,
                price: Number.parseInt(values.price),
                discount: Number.parseFloat(values.discount),
                category: {
                    id: Number.parseInt(values.category.substring(0, values.category.indexOf("-"))),
                    name: values.category.substring(values.category.indexOf("-") + 1),
                },
                lecturer: {
                    id: Number.parseInt(values.lecturer.substring(0, values.lecturer.indexOf("-"))),
                    name: values.lecturer.substring(values.lecturer.indexOf("-") + 1),
                },
                state: "RUNNING"
            }))
            setOpen(!open)
        }
    }
    return <Box>
        <Button variant="contained"
                onClick={handleOpen}
                sx={{
                    marginLeft: "2rem",
                    backgroundColor: '#3498db',
                    color: '#fff',
                    height: '3rem',
                    boxShadow: 'none',
                    "&:hover": {boxShadow: 'none', backgroundColor: '#3498db', color: '#fff'}
                }}>
            C???p nh???t
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
            <DialogTitle sx={{fontSize: '2.4rem', fontWeight: 'bold'}}>C???p nh???t kho?? h???c</DialogTitle>
            <DialogContent className="p-4">
                <Form onSubmit={(e) => handleSubmit(e, props?.data)} component={"form"} className="row">
                    <Box className="col-12">
                        <Box className="row">
                            <Box className="col-8">
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="T??n kho?? h???c"
                                            placeholder="T??n kho?? h???c"
                                            autoComplete='off'
                                            inputProps={{
                                                style: {fontSize: '1.5rem'},
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="name"
                                            onChange={handleInputChange}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            error={errorsEnable.name}
                                            value={values?.name}
                                            helperText={errors.name}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                        />
                                    </FormControl>
                                </Box>
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Sku"
                                            placeholder="Sku"
                                            autoComplete='off'
                                            InputProps={{
                                                style: {fontSize: '1.5rem'},
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="sku"
                                            onChange={handleInputChange}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            value={values?.sku}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                        />
                                    </FormControl>
                                </Box>
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            multiline
                                            rows={5}
                                            label="M?? t??? kho?? h???c"
                                            placeholder="M?? t??? kho?? h???c"
                                            autoComplete='off'
                                            InputProps={{
                                                style: {fontSize: '1.5rem'},
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="description"
                                            onChange={handleInputChange}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            value={values?.description}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                        />
                                    </FormControl>
                                </Box>
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="???????ng d???n video demo"
                                            placeholder="???????ng d???n video demo"
                                            autoComplete='off'
                                            InputProps={{
                                                style: {fontSize: '1.5rem'},
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="videoDemo"
                                            onChange={handleInputChange}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            error={errorsEnable.videoDemo}
                                            value={values?.videoDemo}
                                            helperText={errors.videoDemo}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                        />
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box className="col-4">
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            select
                                            autoComplete='off'
                                            InputProps={{
                                                style: {fontSize: '1.5rem'},
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="category"
                                            onChange={handleInputChange}
                                            error={errorsEnable.category}
                                            helperText={errors.category}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                            SelectProps={{
                                                native: true,
                                                style: {fontSize: '1.6rem'},
                                            }}
                                            label="Ch???n danh m???c"
                                        >
                                            <option value={values?.category}>{data?.category.name}</option>
                                            {
                                                categories?.map((item, index) => {
                                                    if (item.id !== data?.category.id) {
                                                        return (
                                                            <option key={index} value={`${item.id}-${item.name}`}
                                                                    sx={{fontSize: '1.8rem'}}>
                                                                {item.name}
                                                            </option>
                                                        )
                                                    }
                                                })
                                            }
                                        </TextField>
                                    </FormControl>
                                </Box>
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Ch???n t??c gi???"
                                            select
                                            autoComplete='off'
                                            InputProps={{
                                                style: {fontSize: '1.5rem'},
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="lecturer"
                                            onChange={handleInputChange}
                                            error={errorsEnable.lecturer}
                                            helperText={errors.lecturer}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                            SelectProps={{
                                                native: true,
                                                style: {fontSize: '1.6rem'}
                                            }}>
                                            <option value={values?.lecturer}>{data?.lecturer.name}</option>
                                            {
                                                lecturers?.map((item, index) => {
                                                        if (item.id !== data?.lecturer.id) {
                                                            return (
                                                                <option key={index} value={`${item.id}-${item.name}`}
                                                                        sx={{fontSize: '1.8rem'}}>
                                                                    {item.name}
                                                                </option>
                                                            )
                                                        }
                                                    }
                                                )
                                            }
                                        </TextField>
                                    </FormControl>
                                </Box>
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Gi?? kho?? h???c"
                                            placeholder="Gi?? kho?? h???c"
                                            type="number"
                                            autoComplete='off'
                                            InputProps={{
                                                style: {fontSize: '1.5rem'},
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="price"
                                            onChange={handleInputChange}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            value={values.price}
                                            error={errorsEnable.price}
                                            helperText={errors.price}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                        />
                                    </FormControl>
                                </Box>
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Discount kho?? h???c"
                                            type='number'
                                            autoComplete='off'
                                            inputProps={{
                                                style: {fontSize: '1.5rem'},
                                                min: 0,
                                                max: 1,
                                                step: 0.1,
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="discount"
                                            onChange={handleInputChange}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            value={values.discount}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                        />
                                    </FormControl>
                                </Box>
                                <Box sx={{position: 'relative', marginBottom: '2rem'}}>
                                    <FormControl fullWidth>
                                        <TextField
                                            type='file'
                                            autoComplete='off'
                                            inputProps={{
                                                style: {fontSize: '1.5rem'},
                                                accept: '.png, .jpg,. jpeg',
                                            }}
                                            sx={{marginTop: '1rem'}}
                                            variant="outlined"
                                            fullWidth
                                            name="image"
                                            onChange={handleInputChange}
                                            FormHelperTextProps={{style: {fontSize: 12}}}
                                            error={errorsEnable.image}
                                            value={values.image}
                                            helperText={errors.image}
                                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                                        />
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className='col-12 d-flex justify-content-end'>
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
                            Hu???
                        </Button>
                        <Button
                            type="submit"
                            sx={{
                                marginLeft: "2rem",
                                backgroundColor: "#8e44ad",
                                color: '#fff',
                                height: '3rem',
                                boxShadow: 'none',
                                "&:hover": {
                                    boxShadow: 'none',
                                    backgroundColor: "#8e44ad",
                                    color: '#fff'
                                }
                            }}>
                            L??u
                        </Button>
                    </Box>
                </Form>

            </DialogContent>
        </Dialog>
    </Box>
}

export default CourseUpdate;