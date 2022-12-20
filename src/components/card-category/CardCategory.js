import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Paper, Typography } from '@mui/material';
import styles from './CardCategory.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CardCategory({ category }) {
    const navigate = useNavigate()

    const handleChangePageCourse = (codeName) => {
        navigate({
            pathname: `/category/${codeName}`,
            search: '?page-number=1',
        })
    }

    return (
        <Box
            className={cx('card-category')}
            onClick={() => handleChangePageCourse(category.codeName)}
        >
            <Paper
                className={cx('image-bg')}
                elevation={4}
                square
                sx={{
                    background: `linear-gradient(
                                    0deg,
                                    rgba(0, 0, 0, 0.75) 0%,
                                    rgba(0, 0, 0, 0) 100%),
                                    url('/images/category/${category.codeName}.png')`,
                }}>
                <Card className={cx('card-wrapper')}>
                    <CardContent
                        sx={{
                            p: 3,
                        }}>
                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: 36,
                                fontWeight: 'bold',
                                color: '#fff',
                            }}>
                            {category.name}
                        </Typography>
                        {/*<Typography*/}
                        {/*    variant='body1'*/}
                        {/*    sx={{*/}
                        {/*        fontSize: 18,*/}
                        {/*        fontWeight: 'bold',*/}
                        {/*        color: '#fff',*/}
                        {/*    }}>*/}
                        {/*    392 khóa học*/}
                        {/*</Typography>*/}
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );
}

export default CardCategory;
