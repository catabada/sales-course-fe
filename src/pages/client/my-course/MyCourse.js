import style from './MyCourse.module.scss';
import classNames from 'classnames/bind';
import { CourseData } from '~/services/fakeData';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import CardCourse from '~/components/card-course';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { requestGetMyCourse } from '~/redux/my-course/myCourseSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '~/components/loading/Loading';

const cx = classNames.bind(style);

function MyCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { accessToken } = useSelector((state) => state.authReducer);
    const { user } = useSelector((state) => state.userReducer);
    const { myCourse, isLoading } = useSelector((state) => state.myCourseReducer);

    useEffect(() => {
        if (accessToken !== '') {
            dispatch(requestGetMyCourse({ accessToken: accessToken }));
        } else {
            if (!isLoading) navigate('/auth/signin');
        }
    }, [dispatch, user, accessToken]);

    return (
        <div className="container">
            <div className={cx('my-courses')}>
                <div className={cx('sub-nav')}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="medium" className={cx('next-icon')} />}
                        aria-label="breadcrumb"
                    >
                        <Link color="inherit" href="/" className={cx('sub-item')}>
                            Trang chủ
                        </Link>
                        <Typography className={cx('sub-last-item')}>Khoá học của tôi</Typography>
                    </Breadcrumbs>
                </div>

                <div className={cx('title')}>
                    <Typography sx={{ fontSize: '3rem', fontWeight: 'bold' }}>Khoá học của tôi</Typography>
                </div>
                <Box className="row" sx={{ minHeight: '100px' }}>
                    {myCourse !== null &&
                        myCourse.content.map((item, index) => (
                            <Box sx={{ padding: '1rem' }} className="col-3" key={index}>
                                <CardCourse data={item.course} progress />
                            </Box>
                        ))}
                </Box>
            </div>

            <Loading open={isLoading} />
        </div>
    );
}

export default MyCourse;
