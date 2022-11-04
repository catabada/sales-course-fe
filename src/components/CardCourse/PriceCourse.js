import { Typography } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './CardCourse.module.scss';
const cx = classNames.bind(styles);

function PriceCourse({ price, salesPrice, isFree }) {
    if (isFree) {
        return (
            <div className={cx('card-course-price', 'card-free')}>
                <Typography
                    variant='body2'
                    className={cx('card-free-title')}>
                    Khoá học miễn phí
                </Typography>
            </div>
        );
    } else if (price) {
        return (
            <div className={cx('card-course-price')}>
                <Typography
                    variant='body2'
                    className={cx('card-sales-price')}>
                    {salesPrice}
                </Typography>
                <Typography
                    variant='body2'
                    className={cx('card-price')}>
                    {price}
                </Typography>
            </div>
        );
    } else {
        return (
            <div className={cx('card-course-price')}>
                <Typography
                    variant='body2'
                    className={cx('card-sales-price')}>
                    {salesPrice}
                </Typography>
            </div>
        );
    }
}

export default PriceCourse;
