import {Avatar, Box, Button, FormControl, MenuItem, Tab, Tabs, TextField, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useState} from "react";


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
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}


function TabProfile({data}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const genders = ['Nam', 'Nữ', 'Giới tính khác']

    return (
        <Box>
            <Box sx={{paddingLeft: 0}}>
                <Tabs value={value} onChange={handleChange} aria-label="full width tabs example"
                      TabIndicatorProps={{
                          style: {
                              height: '0.5rem'
                          }
                      }}
                      variant="fullWidth"
                >
                    <Tab label="Thông tin cơ bản" {...a11yProps(0)} sx={{fontSize: '2rem'}}/>
                    <Tab label="Lịch sử đăng ký" {...a11yProps(1)} sx={{fontSize: '2rem'}}/>
                    <Tab label="Hoạt động gần đây" {...a11yProps(2)} sx={{fontSize: '2rem'}}/>
                </Tabs>
            </Box>
            <TabPanels value={value} index={0}>
                <Box sx={{display: 'flex'}}>
                    <Box component={"form"}
                         sx={{width: '70%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Box sx={{width: '50%', padding: '2% 5% 0 0'}}>
                            <FormControl sx={{width: '100%'}}>
                                <TextField
                                    id="standard-required"
                                    label="Tên"
                                    defaultValue={data.user.lastName}
                                    variant="standard"
                                    name='first-name'
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem'
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            paddingBottom: '2rem',
                                            fontSize: '2rem',
                                            marginTop: '2.6rem'
                                        }
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{width: '50%', padding: '2% 5% 0 0'}}>
                            <FormControl sx={{width: '100%'}}>
                                <TextField
                                    id="standard-required"
                                    label="Họ"
                                    defaultValue={data.user.firstName}
                                    variant="standard"
                                    name='last-name'
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem'
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            paddingBottom: '2rem',
                                            fontSize: '2rem',
                                            marginTop: '2.6rem'
                                        }
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{width: '50%', padding: '2% 5% 0 0'}}>
                            <FormControl sx={{width: '100%'}}>
                                <TextField
                                    id="standard-required"
                                    label="Giới tính"
                                    defaultValue={data.user.gender}
                                    variant="standard"
                                    select
                                    name='gender'
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem',
                                            transform: 'none',
                                            transition: 'none',
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            paddingBottom: '2rem',
                                            fontSize: '2rem',
                                            marginTop: '2.6rem',
                                        }
                                    }}
                                >
                                    {
                                        genders.map((option) => (
                                            <MenuItem key={option} sx={{fontSize: '1.8rem'}}>
                                                {option}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </FormControl>
                        </Box>
                        <Box sx={{width: '50%', padding: '2% 5% 0 0'}}>
                            <FormControl sx={{width: '100%'}}>
                                <TextField
                                    id="standard-required"
                                    label="Ngày sinh"
                                    type='date'
                                    defaultValue={data.user.firstName}
                                    variant="standard"
                                    name='date'
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '2rem',
                                            transform: 'none',
                                            transition: 'none',
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            paddingBottom: '2rem',
                                            fontSize: '2rem',
                                            marginTop: '2.6rem'
                                        }
                                    }}
                                />
                            </FormControl>
                        </Box>
                        {/*<Box sx={{width: '50%', padding: '2% 5% 0 0'}}>*/}
                        {/*    <FormControl sx={{width: '100%'}}>*/}
                        {/*        <TextField*/}
                        {/*            */}
                        {/*            id="standard-required"*/}
                        {/*            label="Số điện thoại"*/}
                        {/*            defaultValue={data.user.phone}*/}
                        {/*            variant="standard"*/}
                        {/*            name='first-name'*/}
                        {/*            InputLabelProps={{*/}
                        {/*                style: {*/}
                        {/*                    fontSize: '2rem',*/}
                        {/*                    transform: 'none',*/}
                        {/*                    transition: 'none',*/}
                        {/*                }*/}
                        {/*            }}*/}
                        {/*            InputProps={{*/}
                        {/*                style: {*/}
                        {/*                    paddingBottom: '2rem',*/}
                        {/*                    fontSize: '2rem',*/}
                        {/*                    marginTop: '2.6rem'*/}
                        {/*                }*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    </FormControl>*/}
                        {/*</Box>*/}
                        {/*<Box sx={{width: '50%', padding: '2% 5% 0 0'}}> </Box>*/}
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
                                '&:hover': {backgroundColor: '#C89F65', color: '#fff',}
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
                        <Box sx={{width: 120, height: 120}}>
                            <Avatar alt='user-image' src={data.user.avatar}
                                    sx={{width: '100%', height: '100%', border: '1px solid #ccc'}}/>
                        </Box>
                        <Typography variant='body1'
                                    sx={{
                                        marginTop: '2rem',
                                        fontSize: '2rem',
                                        textDecoration: 'underline',
                                        cursor: 'pointer'
                                    }}>
                            Cập nhập ảnh
                        </Typography>
                        <input type="file" accept='.png, .jpg,. jpeg' name='file' className='file-upload'/>
                    </Box>
                </Box>
            </TabPanels>
            <TabPanels value={value} index={1}>
                Chức năng đang cập nhật
            </TabPanels>
            <TabPanels value={value} index={2}>
                Chức năng đang cập nhật
            </TabPanels>


        </Box>
    )
}

export default TabProfile;