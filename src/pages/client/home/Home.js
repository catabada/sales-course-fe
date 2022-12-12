import style from './Home.module.scss';
import classNames from 'classnames/bind';
import {CourseList, SlideShow} from '~/services/fakeData';
import {Typography} from '@mui/material';
import {SlickCustomDot, SlickCustomArrow} from "~/components/slick";

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx("slide-show")}>
                    <SlickCustomDot data={SlideShow}/>
                </div>
                {/* ban chay*/}
                <section id='bestseller'>
                    <div className={cx('section-header')}>
                        <div>
                            <Typography variant='h2' className={cx('title')}>
                                Các khóa học bán chạy nhất tháng này
                            </Typography>
                        </div>
                    </div>
                    <div className={cx("section-content")}>
                        <SlickCustomArrow data={CourseList}/>
                    </div>
                </section>


                {/*moi nhat*/}
                <section id='new'>
                    <div className={cx('section-header')}>
                        <div>
                            <Typography variant='h2' className={cx('title')}>
                                Khoá học mới nhất
                            </Typography>
                        </div>
                    </div>
                    <div className={cx("section-content")}>
                        <SlickCustomArrow data={CourseList}/>
                    </div>
                </section>

                {/*xem nhieu nhat*/}
                <section id='view'>
                    <div className={cx('section-header')}>
                        <div>
                            <Typography variant='h2' className={cx('title')}>
                                Các khóa học bán chạy nhất tháng này
                            </Typography>
                        </div>
                    </div>
                    <div className={cx("section-content")}>
                        <SlickCustomArrow data={CourseList}/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
