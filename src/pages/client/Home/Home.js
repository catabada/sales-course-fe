import CardCourse from '~/components/CardCourse';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import data from '~/services/fakeData';
import { Grid } from '@mui/material';
const cx = classNames.bind(styles);

function Home() {
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
