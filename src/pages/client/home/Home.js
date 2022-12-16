import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import {SlideShow} from '~/services/fakeData';
import {SlickCustomDot, SlickCustomArrow} from "~/components/slick";


import {Grid, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getCoursesSearch} from "~/redux/course/courseSlice";

const cx = classNames.bind(styles);


function Home() {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courseReducer.courses)
    useEffect(() => {
        dispatch(getCoursesSearch({}))
    }, [dispatch]);

    const viewedArray = courses.slice().sort((a, b) => {
        return a.viewed > b.viewed ? -1 : 1
    });
    const createdDateArray = courses.slice().sort((a, b) => {
        return a.createdDate > b.createdDate ? -1 : 1
    });

    const priceArray = courses.slice().sort((a, b) => {
        return a.price > b.price ? -1 : 1
    });
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
                        <SlickCustomArrow data={priceArray}/>
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
                        <SlickCustomArrow data={createdDateArray}/>
                    </div>
                </section>

                {/*xem nhieu nhat*/}
                <section id='view'>
                    <div className={cx('section-header')}>
                        <div>
                            <Typography variant='h2' className={cx('title')}>
                                Các khóa học xem nhiều nhất
                            </Typography>
                        </div>
                    </div>
                    <div className={cx("section-content")}>
                        <SlickCustomArrow data={viewedArray}/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
