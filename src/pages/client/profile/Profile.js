import style from './Profile.scss';
import classNames from "classnames/bind";
import {Box, Typography} from "@mui/material";
import SubNav from "~/components/sub-nav";
import {TabProfile} from "~/components/tabs";
import {CourseData} from '~/services/fakeData'
import {useDispatch, useSelector} from "react-redux";
import {requestGetProfile} from "~/redux/user/userSlice";
import {useEffect} from "react";
import Loading from '~/components/loading/Loading';

const cx = classNames.bind(style);

function Profile() {
    const dispatch = useDispatch()
    const data = {name: 'Trang cá nhân & Cài đặt'};
    const { userId, accessToken} = useSelector(state => state.authReducer)
    const { isLoading} = useSelector(state => state.userReducer)
    const user = useSelector(state => state.userReducer.user)


    return <Box className={cx('profile')}>
        <SubNav data={data}/>

        <Box className={cx('profile-header')}>
            <Typography variant='body1' className={cx('profile-header-content')}>Trang cá nhân & Cài đặt</Typography>
        </Box>

        <Box className={cx('content')}>
            {user && <TabProfile user={user}/>}
        </Box>

        <Loading open={isLoading} />
    </Box>
}

export default Profile;