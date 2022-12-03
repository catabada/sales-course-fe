import styles from './CardCourse.module.scss';
import classNames from 'classnames/bind';
import PriceCourse from './PriceCourse';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function CardCourse({ data }) {

    return <Card className={cx('card')}    >
        <CardActionArea component={Link} to={`/${data.slug}`}>

            <CardMedia
                component='img'
                height='160'
                image='https://edumall.vn/_next/image?url=%2Fapi%2Fimageproxy%3Furl%3Dhttps%253A%252F%252Fcdn2.topica.vn%252F5a7a63749f7bfc459700033e%252Fproduct%252F60013b2f44d203002598bf2b&w=1920&q=50'
                alt='green iguana'
            />
            <CardContent className={cx('card-content')}>
                <Typography
                    gutterBottom
                    variant='h5'
                    className={cx('card-category')}>
                    {data.category}
                </Typography>
                <Typography
                    variant='h4'
                    className={cx('card-title')}>
                    {data.title}
                </Typography>
                <Typography
                    variant='body2'
                    className={cx('card-description')}>
                    {data.description}
                </Typography>
                <Typography
                    variant='body2'
                    className={cx('card-author')}>
                    {data.author}
                </Typography>
                <PriceCourse
                    price={data.price}
                    salesPrice={data.salesPrice}
                    isFree={data.isFree}
                />
            </CardContent>
        </CardActionArea>
    </Card>
}

export default CardCourse