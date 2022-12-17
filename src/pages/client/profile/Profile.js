import style from './Profile.scss';
import classNames from "classnames/bind";
import {Box, Typography} from "@mui/material";
import SubNav from "~/components/sub-nav";
import {TabProfile} from "~/components/tabs";
import {CourseData} from '~/services/fakeData'
import {useDispatch, useSelector} from "react-redux";
import {requestGetProfile} from "~/redux/user/userSlice";
import {useEffect} from "react";

const cx = classNames.bind(style);

function Profile() {
    const data = {name: 'Trang cá nhân & Cài đặt'};
    const user = useSelector(state => state.userReducer.user)

    console.log(user)
    return <Box className={cx('profile')}>
        <SubNav data={data}/>

        <Box className={cx('profile-header')}>
            <Typography variant='body1' className={cx('profile-header-content')}>Trang cá nhân & Cài đặt</Typography>
        </Box>

        <Box className={cx('content')}>
            {user && <TabProfile data={user}/>}
        </Box>
    </Box>
}

export default Profile;