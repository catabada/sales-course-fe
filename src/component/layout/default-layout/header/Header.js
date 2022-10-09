import className from 'classnames/bind'
import styles from './header.module.scss'
import CategoryIcon from '@mui/icons-material/Category';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Box, Button, IconButton, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

const cx = className.bind(styles);

function Header() {
    return <header id='header' className={cx('header')}>
        <div className={cx('wrapper')}>
            <Box
                className={cx('logo')}
                component={Link}
                to={'/'}
            >
                <svg className="MuiSvgIcon-root jss310" focusable="false" viewBox="0 0 97 31" aria-hidden="true"
                     fill="#FCCF00" id="emHdLogo">
                    <g>
                        <path fill="#FCCF00"
                              d="M25.785 6.863a2.701 2.701 0 011.348 2.348v2.059a2.71 2.71 0 01-1.348 2.347l-11.558 6.695a1.034 1.034 0 01-1.032 0l-3.441-1.996a1.027 1.027 0 01-.516-.894v-2.805c0-.566.465-1.031 1.032-1.031.18 0 .355.05.511.14l2.422 1.403c.317.184.707.184 1.031 0l6.887-3.996a1.032 1.032 0 000-1.79zm0 0"></path>
                        <path fill="#FCCF00"
                              d="M5.926 26.465c-1.192-.902-.555-4.227-.555-4.227l.027-1.261a1.283 1.283 0 01-.64-1.102v-9.04c0-.366.195-.71.515-.894l7.864-4.558a1.162 1.162 0 011.086-.035l3.132-3.371L15.06.645a2.689 2.689 0 00-2.7 0L1.645 6.863A2.701 2.701 0 00.297 9.211v12.422c0 .972.512 1.867 1.348 2.351zm0 0"></path>
                        <path fill="#FCCF00"
                              d="M25.785 6.863L15.062.653a2.67 2.67 0 00-2.699 0l-3.297 1.91-4.23 2.457 1.746-1.012a5.303 5.303 0 015.328 0l3.555 2.058 4.043 2.34 1.617.938c2.676 1.55 2.676 5.422 0 6.972l-1.54.891 6.204-3.598a2.693 2.693 0 001.348-2.347V9.207c0-.965-.516-1.863-1.352-2.344zm0 0"></path>
                        <path fill="#FCCF00"
                              d="M10.168 28.918l2.2 1.281a2.67 2.67 0 002.698 0l11.559-6.695c.316-.184.512-.527.512-.895v-2.808c0-.567-.465-1.031-1.032-1.031a1 1 0 00-.511.14l-11.36 6.59c-.32.184-.71.184-1.03 0zm0 0"></path>
                        <path fill="#FCCF00"
                              d="M.297 21.633c0 .972.512 1.867 1.348 2.351L12.367 30.2a2.67 2.67 0 002.7 0l11.558-6.695-5.773 3.34a5.307 5.307 0 01-5.32 0l-3.618-2.102-6.266-3.617-2.691-1.563a5.355 5.355 0 01-2.66-4.628zm0 0"></path>
                        <path
                            d="M43.508 20.73v1.75h-9.035V8.36h9.039v1.75H36.21v3.945h5.824V15.8h-5.824v4.93zm0 0M49.242 20.813a3.27 3.27 0 001.32-.266 3.452 3.452 0 001.797-1.805c.176-.418.27-.867.266-1.32a3.23 3.23 0 00-.266-1.3 3.466 3.466 0 00-1.797-1.806 3.27 3.27 0 00-1.32-.265 3.13 3.13 0 00-1.293.265 3.466 3.466 0 00-1.797 1.805c-.18.41-.27.856-.265 1.3a3.27 3.27 0 00.265 1.321 3.452 3.452 0 001.797 1.805c.406.183.852.277 1.293.277zm5.035-12.454V22.48h-1.652v-1.308a5.63 5.63 0 01-1.594.976c-.57.223-1.18.332-1.789.332a5.045 5.045 0 01-4.637-3.113 5.059 5.059 0 01-.37-1.937c0-2.762 2.265-5.035 5.015-5.035.613 0 1.215.113 1.79.332.585.238 1.116.57 1.593.98v-5.34zm0 0M63.828 12.39v10.09H62.18v-.793c-.7.524-1.551.805-2.422.793a3.874 3.874 0 01-2.863-1.199 4.037 4.037 0 01-1.196-2.89v-6h1.653v5.996c0 .324.062.64.191.937.121.29.297.551.512.778a2.36 2.36 0 002.633.527 2.482 2.482 0 001.292-1.297 2.41 2.41 0 00.192-.937v-6h1.656zm0 0M78.66 13.586a3.936 3.936 0 011.2 2.875v6.02h-1.657v-6.012c0-.324-.062-.64-.191-.938a2.286 2.286 0 00-.524-.765 2.595 2.595 0 00-.777-.516 2.35 2.35 0 00-1.867 0 2.425 2.425 0 00-1.469 2.219v6.011h-1.656V16.47c0-.324-.067-.64-.192-.938-.12-.289-.3-.547-.527-.765a2.466 2.466 0 00-.77-.516 2.36 2.36 0 00-1.87 0 2.418 2.418 0 00-1.465 2.219v6.011h-1.649V12.39h1.652v.797a3.897 3.897 0 012.403-.796 4.004 4.004 0 012.879 1.195c.125.133.25.277.351.426a3.895 3.895 0 013.215-1.625 3.963 3.963 0 012.879 1.199zm0 0M85.578 20.816c.453.008.899-.086 1.317-.265a3.459 3.459 0 001.796-1.801c.18-.422.27-.871.266-1.324.004-.45-.086-.89-.266-1.301a3.466 3.466 0 00-1.796-1.805 3.251 3.251 0 00-1.317-.265 3.147 3.147 0 00-1.297.265 3.466 3.466 0 00-1.797 1.805c-.18.41-.27.855-.265 1.3-.004.454.086.903.265 1.325a3.459 3.459 0 001.797 1.8c.41.18.848.274 1.297.266zm5.031-8.425v10.09h-1.652v-1.305a5.544 5.544 0 01-1.59.972 4.93 4.93 0 01-1.793.332 5.036 5.036 0 01-4.636-3.113 4.99 4.99 0 01-.376-1.937 4.976 4.976 0 011.47-3.559 4.931 4.931 0 013.546-1.476 4.864 4.864 0 011.793.332c.582.238 1.117.57 1.59.98v-1.312zm0 0M93.68 8.355h-1.653V22.48h1.653zm0 0M96.766 8.36h-1.653v14.12h1.653zm0 0"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="120" height="31"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </Box>
            <div className={cx('category')}>
                <Box
                    component={Link}
                    to='/category'
                    sx={{
                        fontSize: 12,
                        color: '#fff',
                        textDecoration: 'none',
                        '&: hover': {
                            color: '#FCCF00',
                        }
                    }}
                >
                    <IconButton>
                        <CategoryIcon
                            sx={{
                                fontSize: 22,
                                color: '#fff'
                            }}/>
                    </IconButton>
                    Danh mục
                    <KeyboardArrowDownIcon sx={{
                        fontSize: 20,
                        m: 1
                    }}/>
                </Box>

            </div>
            <div className={cx('search')}>
                <div className={cx('wrapper')}>
                    <TextField
                        variant="standard"
                        name='query'
                        placeholder='Tìm kiếm khóa học'
                        fullWidth
                        sx={{
                            border: 'none'
                        }}
                        InputProps={{
                            style: {
                                fontSize: 14,
                                color: '#fff',
                            },
                            startAdornment: <SearchIcon sx={{
                                fontSize: 26,
                                m: 1,
                                color: '#fff'
                            }}
                            />, // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                    />
                </div>
            </div>
            <div className={cx("active-code")}>
                <Button
                    variant='outlined'
                    size='large'
                    sx={{
                        fontSize: 12,
                    }}
                >Kích hoạt gói học</Button>
            </div>
            <Box sx={{
                width: 75
            }}/>
            <div className={cx('cart')}>
                <IconButton
                >
                    <ShoppingCartIcon sx={{
                        fontSize: 22,
                        mr: 1,
                        color: '#fff',
                        '&:hover, &:focus': {
                            color: '#FCCF00'
                        }
                    }}/>
                </IconButton>
            </div>
            <div className={cx("signin-btn")}>
                <Button
                    variant='text'
                >Đăng nhập</Button>
            </div>
            <div className={cx("signup-btn")}>
                <Button
                    variant='outlined'
                >Đăng ký</Button>
            </div>
        </div>
    </header>
}

export default Header