import {
    Avatar,
    Box,
    Button,
    FormControl,
    MenuItem,
    Tab,
    Tabs,
    TextField,

} from "@mui/material";
import PropTypes from "prop-types";
import { TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "~/hooks/useForm";
import { requestSaveProfile } from "~/redux/user/userSlice";
import moment from "moment"
import DataTable from "react-data-table-component";
import TabOrderDetail from "./TabOrderDetail";


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanels(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}


function TabProfile({ user }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dispatch = useDispatch();
    const { accessToken } = useSelector(state => state.authReducer)
    const { orders } = useSelector(state => state.orderReducer)

    const data = [
        {
            id: '12321',
            state: 'Thành công',
            price: 123000,
            payment: 'vnpay',
            createdDate: '21/12/2022',
            option: <TabOrderDetail />
        }
    ]
    const columns = [
        {
            name: 'Order Tracking',
            selector: (row) => row.id,
            width: '200px',
        },
        {
            name: 'Trạng thái',
            selector: (row) => row.state,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Thanh toán',
            selector: (row) => row.payment,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Tổng giá',
            selector: (row) => Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(row.price),
            width: '120px',
        },
        {
            name: 'Ngày ghi nhận',
            selector: (row) => row.createdDate,
            width: '150px',
        },
        {
            name: 'Chức năng',
            selector: (row) => row.option,
            width: '150px',
        },
    ]

    const handleChangeFile = (e) => {
        console.log(e.target.value);
    }

    const initialFieldValues = {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        isMale: !!user.isMale,
        dateOfBirth: moment(user.dateOfBirth).format('yyyy-MM-DD'),
        phone: user.phone,
        email: user.email,
        fullName: user.fullName,
    }

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        let tempEnable = { ...errorsEnable }
        if ('firstName' in fieldValues) {
            if (fieldValues.firstName !== '' && fieldValues.firstName !== null) {
                temp.firstName = ''
                tempEnable.firstName = false
            } else {
                temp.firstName = 'Không được để trống'
                tempEnable.firstName = true
            }
        }
        if ('lastName' in fieldValues) {
            if (fieldValues.lastName !== '' && fieldValues.lastName !== null) {
                temp.lastName = ''
                tempEnable.lastName = false
            } else {
                temp.lastName = 'Không được để trống'
                tempEnable.lastName = true
            }
        }
        if ('dateOfBirth' in fieldValues) {
            if (fieldValues.dateOfBirth !== '' && fieldValues.dateOfBirth !== null) {
                temp.dateOfBirth = ''
                tempEnable.dateOfBirth = false
            } else {
                temp.dateOfBirth = 'Không được để trống'
                tempEnable.dateOfBirth = true
            }
        }
        if ('phone' in fieldValues) {
            console.log(fieldValues.phone)
            if (fieldValues.phone !== '' && fieldValues.phone !== null) {
                if (fieldValues.phone[0] === '0') {
                    if (fieldValues.phone.length === 10) {
                        temp.phone = ''
                        tempEnable.phone = false
                    } else {
                        temp.phone = 'Số điện thoại phải có đủ 10 số'
                        tempEnable.phone = true
                    }
                } else {
                    temp.phone = 'Số điện thoại phải bắt đầu bằng số 0'
                    tempEnable.phone = true
                }
            } else {
                temp.phone = 'Không được để trống'
                tempEnable.phone = true
            }
        }
        setErrors({
            ...temp
        })
        setErrorsEnable({
            ...tempEnable
        })

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "")
        }
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
    } = useForm(initialFieldValues, true, validate);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(requestSaveProfile({ userInfo: values, accessToken: accessToken }))
        }
    }

    return (
        <Box>
            <Box sx={{ paddingLeft: 0 }}>
                <Tabs value={value} onChange={handleChange} aria-label="full width tabs example"
                    TabIndicatorProps={{
                        style: {
                            height: '0.5rem'
                        }
                    }}
                    variant="fullWidth"
                >
                    <Tab label="Thông tin cơ bản" {...a11yProps(0)} sx={{ fontSize: '2rem' }} />
                    <Tab label="Lịch sử mua hàng" {...a11yProps(1)} sx={{ fontSize: '2rem' }} />
                    <Tab label="Hoạt động gần đây" {...a11yProps(2)} sx={{ fontSize: '2rem' }} />
                </Tabs>
            </Box>
            <TabPanels value={value} index={0}>
                <Box sx={{ display: 'flex' }}>
                    <Box component="form" onSubmit={handleSubmit}
                        sx={{ width: '70%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Box sx={{ width: '50%', padding: '2% 5% 0 0' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    id="standard-required"
                                    label="Tên"
                                    defaultValue={user.firstName}
                                    error={errorsEnable.firstName}
                                    value={values.firstName}
                                    helperText={errors.firstName}
                                    variant="standard"
                                    name='firstName'
                                    onChange={handleInputChange}
                                    FormHelperTextProps={{ style: { fontSize: 12 } }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem'
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: '2rem',
                                            marginTop: '2.6rem'
                                        }
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ width: '50%', padding: '2% 5% 0 0' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    id="standard-required"
                                    label="Họ"
                                    defaultValue={user.lastName}
                                    value={values.lastName}
                                    error={errorsEnable.lastName}
                                    helperText={errors.lastName}
                                    variant="standard"
                                    name='lastName'
                                    FormHelperTextProps={{ style: { fontSize: 12 } }}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem'
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: '2rem',
                                            marginTop: '2.6rem'
                                        }
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ width: '50%', padding: '2% 5% 0 0' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    label="Giới tính"
                                    id="isMale"
                                    variant="standard"
                                    defaultValue={!!user.isMale}
                                    select
                                    name='isMale'
                                    onChange={handleInputChange}
                                    FormHelperTextProps={{ style: { fontSize: 12 } }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem',
                                            transform: 'none',
                                            transition: 'none',
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: '2rem',
                                            marginTop: '2.6rem',
                                            backgroundColor: '#fff !important',
                                        }
                                    }}
                                >
                                    <MenuItem value={true} sx={{ fontSize: '1.8rem' }}>
                                        Nam
                                    </MenuItem>
                                    <MenuItem value={false} sx={{ fontSize: '1.8rem' }}>
                                        Nữ
                                    </MenuItem>
                                </TextField>
                            </FormControl>
                        </Box>
                        <Box sx={{ width: '50%', padding: '2% 5% 0 0' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    id="standard-required"
                                    label="Ngày sinh"
                                    type='date'
                                    variant="standard"
                                    name='dateOfBirth'
                                    onChange={handleInputChange}
                                    defaultValue={values.dateOfBirth}
                                    value={values.dateOfBirth}
                                    error={errorsEnable.dateOfBirth}
                                    helperText={errors.dateOfBirth}
                                    FormHelperTextProps={{ style: { fontSize: 12 } }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem',
                                            transform: 'none',
                                            transition: 'none',
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: '2rem',
                                            marginTop: '2.6rem'
                                        }
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ width: '50%', padding: '2% 5% 0 0' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    id="standard-required"
                                    label="Số điện thoại"
                                    type='text'
                                    variant="standard"
                                    value={values.phone}
                                    defaultValue={user.phone}
                                    error={errorsEnable.phone}
                                    helperText={errors.phone}
                                    name='phone'
                                    onChange={handleInputChange}
                                    FormHelperTextProps={{ style: { fontSize: 12 } }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem',
                                            transform: 'none',
                                            transition: 'none',
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: '2rem',
                                            marginTop: '2.6rem'
                                        }
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Button
                            type='submit'
                            sx={{
                                backgroundColor: '#C89F65',
                                color: '#fff',
                                marginTop: '2rem',
                                width: '32%',
                                height: '54px',
                                borderRadius: '50px',
                                fontSize: '2rem',
                                '&:hover': { backgroundColor: '#C89F65', color: '#fff', }
                            }}
                        >
                            Lưu
                        </Button>

                    </Box>

                    <Box sx={{
                        margin: '1% 5% 1% 0',
                        display: 'flex',
                        height: 140,
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Box sx={{ width: 120, height: 120 }}>
                            <Avatar alt='user-image' src={user.imageUrl}
                                sx={{ width: '100%', height: '100%', border: '1px solid #ccc' }} />
                        </Box>
                        <Box
                            component={"label"}
                            htmlFor="file"
                            sx={{
                                marginTop: '2rem',
                                fontSize: '2rem',
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}>
                            Cập nhập ảnh
                        </Box>

                        <input
                            type="file"
                            accept='.png, .jpg,. jpeg'
                            id='file' name='file' className='file-upload'
                            onChange={(e) => handleChangeFile(e)}
                        />
                    </Box>
                </Box>
            </TabPanels>
            <TabPanels value={value} index={1}>
                <Box>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination={true}
                        pointerOnHover={true}
                        highlightOnHover={true}
                        responsive={true}
                        fixedHeader={true}
                        fixedHeaderScrollHeight={'65vh'}
                    />
                </Box>
            </TabPanels>
            <TabPanels value={value} index={2}>
                Chức năng đang cập nhật
            </TabPanels>


        </Box >
    )
}

export default TabProfile;