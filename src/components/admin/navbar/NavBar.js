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
        </div>
    </div>
}

export default NavBar