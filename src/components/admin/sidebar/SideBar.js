import {Link, useNavigate} from "react-router-dom";
import style from './SideBar.module.scss';
import classNames from "classnames/bind";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {useDispatch, useSelector} from "react-redux";
import {requestLogout} from "~/redux/auth/authSlice";
import {requestGetProfile, requestLogoutUser} from "~/redux/user/userSlice";
import {Avatar, Box, Typography} from "@mui/material";
import {useEffect} from "react";
import SchoolIcon from '@mui/icons-material/School';
import CategoryIcon from '@mui/icons-material/Category';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
const cx = classNames.bind(style);

function SideBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(state => state.authReducer.userId)
    const accessToken = useSelector(state => state.authReducer.accessToken)
    const user = useSelector(state => state.userReducer.user)

    useEffect(() => {
        if (userId !== 0) {
            dispatch(requestGetProfile({userId: userId, accessToken: accessToken}))
        }

    }, [dispatch, userId, accessToken])

    const handleLogout = async () => {
        await dispatch(requestLogout())
        await dispatch(requestLogoutUser());
        navigate('/auth/signin')
    }
    return <div className={cx("sidebar")}>
        <div className={cx("top")}>
            <Link to="/admin/dashboard" style={{textDecoration: "none"}}>
                <span className={cx("logo")}>Sales Course Admin</span>
            </Link>
            {
                user &&
                <Box className={cx('user')}>
                    <Avatar  src={user?.imageUrl} alt={user.username} className={cx('avatar')}/>
                    <Typography className={cx('text')}>Xin chào <strong>{user?.username}</strong>!</Typography>
                </Box>
            }

        </div>
        <hr/>
        <div className={cx("center")}>
            <ul>
                <p className={cx('title')}>MAIN</p>
                <Link to="/admin/dashboard" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className={cx('icon')}/>
                        <span>Dashboard</span>
                    </li>
                </Link>

                <p className={cx('title')}>LISTS</p>
                <Link to="/admin/user" style={{textDecoration: "none"}}>
                    <li>
                        <PersonOutlineIcon className={cx('icon')}/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/admin/course" style={{textDecoration: "none"}}>
                    <li>
                        <SchoolIcon className={cx('icon')}/>
                        <span>Courses</span>
                    </li>
                </Link>
                <Link to="/admin/category" style={{textDecoration: "none"}}>
                    <li>
                        <CategoryIcon className={cx('icon')}/>
                        <span>Category</span>
                    </li>
                </Link>
                <Link to="/admin/lecturer" style={{textDecoration: "none"}}>
                    <li>
                        <AccessibilityIcon className={cx('icon')}/>
                        <span>Lecturer</span>
                    </li>
                </Link>
                <li>
                    <CreditCardIcon className={cx('icon')}/>
                    <span>Orders</span>
                </li>
                <p className={cx('title')}>USER</p>
                <li onClick={handleLogout}>
                    <ExitToAppIcon className={cx('icon')}/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
}

export default SideBar