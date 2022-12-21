import { Avatar, Box, Divider, Popover, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogout } from '~/redux/auth/authSlice';
import { requestLogoutUser } from '~/redux/user/userSlice';

function HeaderAccount({ image }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = async () => {
        await dispatch(requestLogout());
        await dispatch(requestLogoutUser());
        navigate({ pathname: '/auth/signin' });
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Box className="col-1">
            <Avatar
                src={image}
                alt="avatar"
                sx={{ width: 56, height: 56, cursor: 'pointer', marginLeft: '1rem' }}
                onClick={handleClick}
            ></Avatar>
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
                <Box component={'ul'} sx={{ listStyle: 'none', padding: '1rem 0 1rem 1rem' }}>
                    <Box component={'li'} sx={{ marginBottom: '1rem', padding: '0.6rem 1.6rem' }}>
                        <Box
                            component={Link}
                            to={'/profile'}
                            sx={{
                                textDecoration: 'none',
                                color: '#082346',
                                '&:hover': { color: '#082346' },
                            }}
                        >
                            <Box className="d-flex align-items-center">
                                <AccountIcon sx={{ height: '2.2rem', width: '2.2rem' }} />
                                <Typography
                                    sx={{
                                        fontSize: '1.8rem',
                                        color: '#082346',
                                        marginLeft: '0.5rem',
                                        fontWeight: 400,
                                        lineHeight: '2rem',
                                    }}
                                >
                                    Thông tin cá nhân
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box component={'li'} sx={{ marginBottom: '1rem', padding: '0.6rem 1.6rem' }}>
                        <Box
                            component={Link}
                            to={'/wishlist'}
                            sx={{
                                textDecoration: 'none',
                                color: '#082346',
                                '&:hover': { color: '#082346' },
                            }}
                        >
                            <Box className="d-flex align-items-center">
                                <FavoriteIcon sx={{ height: '2.2rem', width: '2.2rem' }} />
                                <Typography
                                    sx={{
                                        fontSize: '1.8rem',
                                        color: '#082346',
                                        marginLeft: '0.5rem',
                                        fontWeight: 400,
                                        lineHeight: '2rem',
                                    }}
                                >
                                    Danh sách yêu thích
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Divider
                        sx={{
                            height: '0.2rem',
                            backgroundColor: '#cbcbcb',
                            marginBottom: '1rem',
                        }}
                    />
                    <Box component={'li'} sx={{ padding: '0.6rem 1.6rem' }} onClick={handleLogout}>
                        <Box
                            component={Link}
                            sx={{
                                textDecoration: 'none',
                                color: '#ff414e',
                                '&:hover': { color: '#ff414e' },
                            }}
                        >
                            <Box className="d-flex align-items-center">
                                <LogoutIcon sx={{ height: '2.2rem', width: '2.2rem' }} />
                                <Typography
                                    sx={{
                                        fontSize: '1.8rem',
                                        color: '#ff414e',
                                        marginLeft: '0.5rem',
                                        fontWeight: 400,
                                        lineHeight: '2rem',
                                    }}
                                >
                                    Đăng xuất
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Popover>
        </Box>
    );
}

export default HeaderAccount;
