import {Typography} from '@mui/material';
import classNames from 'classnames/bind';
import styles from './CardCourse.module.scss';
import style from "~/pages/client/cart/Cart.module.scss";

const cx = classNames.bind(styles);

function PriceCourse({price, discount}) {
    if (price === 0) {
        return (
            <div className={cx('card-course-price', 'card-free')}>
                <Typography
                    variant='body2'
                    className={cx('card-free-title')}>
                    Khoá học miễn phí
                </Typography>
            </div>
        );
    } else if (discount !== 0) {
        return (
            <div className={cx('card-course-price')}>
                <Typography
                    variant='body2'
                    className={cx('card-sales-price')}>
                    {Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                    }).format((price - price * discount))}
                </Typography>
                <Typography
                    variant='body2'
                    className={cx('card-price')}>
                    {Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(price)}
                </Typography>
            </div>
        );
    } else {
        return (
            <div className={cx('card-course-price')}>
                <Typography
                    variant='body2'
                    className={cx('card-sales-price')}>
                    {Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(price)}
                </Typography>
            </div>
        );
    }
}

export default PriceCourse;
