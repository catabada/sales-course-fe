import {Avatar, Box, Divider, Popover, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import {useState} from "react";

function HeaderAccount({data}) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return <Box>
        <Avatar src={data.user.avatar}
                alt="avatar"
                sx={{width: 56, height: 56, cursor: 'pointer', marginLeft: '1rem'}}
                onClick={handleClick}>
        </Avatar>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            PaperProps={{
                style: {
                    width: 250,

                },
            }}
        >
            <Box component={"ul"} sx={{listStyle: 'none', padding: '1rem 0 1rem 1rem'}}>
                <Box component={"li"} sx={{marginBottom: '1rem', padding: '0.6rem 1.6rem'}}>
                    <Box
                        component={Link}
                        to={'/profile'}
                        sx={{
                            textDecoration: 'none',
                            color: '#082346',
                            '&:hover': {color: '#082346'}
                        }}>
                        < Box className='d-flex align-items-center'>
                            <AccountIcon sx={{height: '2.2rem', width: '2.2rem'}}/>
                            <Typography sx={{
                                fontSize: '1.8rem',
                                color: '#082346',
                                marginLeft: '0.5rem',
                                fontWeight: 400,
                                lineHeight: '2rem'
                            }}>
                                Thông tin cá nhân
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box component={"li"} sx={{marginBottom: '1rem', padding: '0.6rem 1.6rem'}}>
                    <Box
                        component={Link}
                        to={'/wishlist'}
                        sx={{
                            textDecoration: 'none',
                            color: '#082346',
                            '&:hover': {color: '#082346'}
                        }}>
                        < Box className='d-flex align-items-center'>
                            <FavoriteIcon sx={{height: '2.2rem', width: '2.2rem'}}/>
                            <Typography sx={{
                                fontSize: '1.8rem',
                                color: '#082346',
                                marginLeft: '0.5rem',
                                fontWeight: 400,
                                lineHeight: '2rem'
                            }}>
                                Danh sách yêu thích
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{
                    height: '0.2rem',
                    backgroundColor: '#cbcbcb',
                    marginBottom: '1rem'
                }}/>
                <Box component={"li"} sx={{padding: '0.6rem 1.6rem'}}>
                    <Box
                        component={Link}
                        to={'/logout'}
                        sx={{
                            textDecoration: 'none',
                            color: '#ff414e',
                            '&:hover': {color: '#ff414e'}
                        }}>
                        < Box className='d-flex align-items-center'>
                            <LogoutIcon sx={{height: '2.2rem', width: '2.2rem'}}/>
                            <Typography sx={{
                                fontSize: '1.8rem',
                                color: '#ff414e',
                                marginLeft: '0.5rem',
                                fontWeight: 400,
                                lineHeight: '2rem'
                            }}>
                                Đăng xuất
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Popover>
    </Box>
}

export default HeaderAccount