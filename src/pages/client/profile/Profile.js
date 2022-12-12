import style from './Profile.scss';
import classNames from "classnames/bind";
import {Box, Typography} from "@mui/material";
import SubNav from "~/components/sub-nav";
import {TabProfile} from "~/components/tabs";
import {CourseData} from '~/services/fakeData'

const cx = classNames.bind(style);

function Profile() {
    const user = CourseData;
    const data = {name: 'Trang cá nhân & Cài đặt', slug: ''};
    return <Box className={cx('profile')}>
        <SubNav data={data}/>

        <Box className={cx('profile-header')}>
            <Typography variant='body1' className={cx('profile-header-content')}>Trang cá nhân & Cài đặt</Typography>
        </Box>

        <Box className={cx('content')}>
            <TabProfile data={user}/>
        </Box>
    </Box>
}

export default Profile;