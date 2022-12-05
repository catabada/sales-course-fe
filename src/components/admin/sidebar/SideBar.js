import {Link} from "react-router-dom";
import style from './SideBar.module.scss';
import classNames from "classnames/bind";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const cx = classNames.bind(style);

function SideBar() {
    return <div className={cx("sidebar")}>
        <div className={cx("top")}>
            <Link to="/admin/dashboard" style={{textDecoration: "none"}}>
                <span className={cx("logo")}>lamadmin</span>
            </Link>
        </div>
        <hr/>
        <div className={cx("center")}>
            <ul>
                <p className="title">MAIN</p>
                <Link to="/admin/dashboard" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>

                <p className="title">LISTS</p>
                <Link to="/admin/user" style={{textDecoration: "none"}}>
                    <li>
                        <PersonOutlineIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/admin/course" style={{textDecoration: "none"}}>
                    <li>
                        <StoreIcon className="icon"/>
                        <span>Courses</span>
                    </li>
                </Link>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <InsertChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
}

export default SideBar