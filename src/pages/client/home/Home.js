import style from './Home.module.scss';
import classNames from 'classnames/bind';
import {CourseData} from '~/services/fakeData';
import {Box} from '@mui/material';
import CardCourse from "~/components/card-course";

const cx = classNames.bind(style);

function Home() {
    const myCourses = CourseData.courses;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className="row">
                    {myCourses.map((item) => (
                        <Box sx={{padding: '1rem'}} className="col-3">
                            <CardCourse key={item.id} data={item} className={cx('course-item')}/>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
