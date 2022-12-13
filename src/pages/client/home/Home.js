import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import {CourseList, SlideShow} from '~/services/fakeData';
import {Typography} from '@mui/material';
import {SlickCustomDot, SlickCustomArrow} from "~/components/slick";


import data from '~/services/fakeData';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SlickCustomArrow, SlickCustomDot } from '~/components/slick';
const cx = classNames.bind(styles);


function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
    }, [dispatch]);


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx("slide-show")}>
                    <SlickCustomDot data={ []} />
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
                        <SlickCustomArrow data={ []}/>
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
                        <SlickCustomArrow data={ []}/>
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
                        <SlickCustomArrow data={ []}/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
