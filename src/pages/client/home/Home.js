import CardCourse from '~/components/card-course';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import data from '~/services/fakeData';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProvinceService from '~/services/ProvinceService';
const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
    }, [dispatch]);


    return (
        <div className={cx('wrapper')}>
            <div className={cx('course-list')}>
                <Grid container spacing={2}>
                    {data.map((item) => (
                        <Grid item xs={3}>
                            <CardCourse key={item.id} data={item} className={cx('course-item')} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Home;
