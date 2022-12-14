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
import { requestSaveProfile, requestUserOrder } from "~/redux/user/userSlice";
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
    const { orders } = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(requestUserOrder(accessToken))
    }, [dispatch])

    const data = orders?.map((order) => {
        return {
            id: order?.orderTrackingNumber,
            price: order?.totalPrice,
            state: order?.state,
            createdDate: order?.dateCreated,
            option: <TabOrderDetail data={order} />
        }
    })
    const customStyles = {
        headCells: {
            style: {
                justifyContent: 'center',
                fontSize: '1.8rem',
            },
        },
        cells: {
            style: {
                fontSize: '1.4rem',
            },
        },
    };

    const columns = [
        {
            name: 'Order Tracking',
            selector: (row) => row.id,
        },
        {
            name: 'Ng??y ghi nh???n',
            selector: (row) => row.createdDate,
            style: {
                justifyContent: 'center'
            }
        },

        {
            name: 'Tr???ng th??i',
            selector: (row) => row.state,
            style: {
                justifyContent: 'center'
            }
        },
        {
            name: 'T???ng gi??',
            selector: (row) => Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(row.price),
            style: {
                justifyContent: 'flex-end',
                width: "100px!important",
            }
        },
        {
            name: 'Ch???c n??ng',
            selector: (row) => row.option,
            style: {
                justifyContent: 'center',
                width: "100px!important",
            }
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
                temp.firstName = 'Kh??ng ???????c ????? tr???ng'
                tempEnable.firstName = true
            }
        }
        if ('lastName' in fieldValues) {
            if (fieldValues.lastName !== '' && fieldValues.lastName !== null) {
                temp.lastName = ''
                tempEnable.lastName = false
            } else {
                temp.lastName = 'Kh??ng ???????c ????? tr???ng'
                tempEnable.lastName = true
            }
        }
        if ('dateOfBirth' in fieldValues) {
            if (fieldValues.dateOfBirth !== '' && fieldValues.dateOfBirth !== null) {
                temp.dateOfBirth = ''
                tempEnable.dateOfBirth = false
            } else {
                temp.dateOfBirth = 'Kh??ng ???????c ????? tr???ng'
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
                        temp.phone = 'S??? ??i???n tho???i ph???i c?? ????? 10 s???'
                        tempEnable.phone = true
                    }
                } else {
                    temp.phone = 'S??? ??i???n tho???i ph???i b???t ?????u b???ng s??? 0'
                    tempEnable.phone = true
                }
            } else {
                temp.phone = 'Kh??ng ???????c ????? tr???ng'
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
                    <Tab label="Th??ng tin c?? b???n" {...a11yProps(0)} sx={{ fontSize: '2rem' }} />
                    <Tab label="L???ch s??? mua h??ng" {...a11yProps(1)} sx={{ fontSize: '2rem' }} />
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
                                    label="T??n"
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
                                    label="H???"
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
                                    label="Gi???i t??nh"
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
                                        N???
                                    </MenuItem>
                                </TextField>
                            </FormControl>
                        </Box>
                        <Box sx={{ width: '50%', padding: '2% 5% 0 0' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    id="standard-required"
                                    label="Ng??y sinh"
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
                                    label="S??? ??i???n tho???i"
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
                            L??u
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
                            C???p nh???p ???nh
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
                <Box >
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination={true}
                        pointerOnHover={true}
                        highlightOnHover={true}
                        responsive={true}
                        fixedHeader={true}
                        fixedHeaderScrollHeight={'65vh'}
                        customStyles={customStyles}
                    />
                </Box>
            </TabPanels>



        </Box >
    )
}

export default TabProfile;