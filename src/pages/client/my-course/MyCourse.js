import style from './MyCourse.module.scss';
import classNames from 'classnames/bind';
import {CourseData} from '~/services/fakeData';
import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import CardCourse from "~/components/card-course";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const cx = classNames.bind(style);

function MyCourse() {
    const myCourses = CourseData.courses;

    return <div className="container">
        <div className={cx('my-courses')}>
            <div className={cx('sub-nav')}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="medium" className={cx('next-icon')}/>}
                    aria-label="breadcrumb"
                >
                    <Link color="inherit" href="/" className={cx('sub-item')}>
                        Trang chủ
                    </Link>
                    <Typography className={cx('sub-last-item')}>
                        Khoá học của tôi
                    </Typography>
                </Breadcrumbs>
            </div>

            <div className={cx('title')}>
                <Typography sx={{fontSize: "3rem", fontWeight: 'bold'}}>Khoá học của tôi</Typography>
            </div>
            <div className="row">
                {
                    myCourses.map((item, index) => (
                        <Box sx={{padding: '1rem'}} className='col-3' key={index}>
                            <CardCourse data={item} progress/>
                        </Box>
                    ))
                }
            </div>
        </div>
    </div>
}

export default MyCourse;