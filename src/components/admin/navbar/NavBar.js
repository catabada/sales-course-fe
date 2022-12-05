import style from './NavBar.module.scss';
import classNames from "classnames/bind";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {InputAdornment, TextField} from "@mui/material";

const cx = classNames.bind(style);

function NavBar() {
    return <div className={cx('navbar')}>
        <div className={cx("wrapper")}>
            <div className={cx('search')}>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Search..."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon/>
                            </InputAdornment>
                        ),
                    }}
                    sx={{}}
                    variant="outlined"
                />
            </div>
            <div className={cx("items")}>
                <div className={cx("item")}>
                    <NotificationsNoneOutlinedIcon className={cx("icon")}/>
                    <div className={cx("counter")}>1</div>
                </div>
                <div className={cx("item")}>
                    <ChatBubbleOutlineOutlinedIcon className={cx("icon")}/>
                    <div className={cx("counter")}>2</div>
                </div>
                <div className={cx("item")}>
                    <img
                        src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className={cx("avatar")}
                    />
                </div>
            </div>
        </div>
    </div>
}

export default NavBar