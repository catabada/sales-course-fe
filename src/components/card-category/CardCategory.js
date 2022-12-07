import {Link} from 'react-router-dom';
import {Box, Card, CardContent, Paper, Typography} from '@mui/material';
import styles from './CardCategory.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CardCategory({category}) {
    return (
        <Box
            className={cx('card-category')}
            component={Link}
            // to={category.codeName}
            to={category.slug}
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
                                    url(${category.url})`,
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
                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#fff',
                            }}>
                            392 khóa học
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );
}

export default CardCategory;
