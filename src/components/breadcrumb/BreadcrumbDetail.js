import styles from './BreadcrumbDetail.module.scss';
import classNames from 'classnames/bind';
import { Box, Breadcrumbs, CardContent, Container, Grid, Link, Paper, Typography } from '@mui/material';
import { NavigateNext } from "@mui/icons-material";
import { StarIcon, HalfStarIcon } from '~/components/Icons';


const cx = classNames.bind(styles);

function BreadcrumbDetail({ data }) {
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/"
        // onClick={handleClick}
        >
            Trang chủ
        </Link>,
        <Link
            key="2"
            color="inherit"
            to='/'
        // onClick={handleClick}
        >
            {data.category}
        </Link>,
        <Link key="3" color="text.primary">
            {data.title}
        </Link>,
    ];

    return (
        <Box className={cx('breadcrumb')}>
            <Paper
                className={cx('image-bg')}
                style={{ backgroundImage: `linear-gradient(191deg, rgba(255, 192, 67, 0) 5.02%, rgba(255, 192, 67, 0.5) 94.1%), url(${data.url})` }}
            >
                <Container maxWidth={false}>
                    <div className={cx('content')}>
                        <Breadcrumbs
                            separator={<NavigateNext fontSize="medium" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>

                        <Typography variant="h2"
                            sx={{
                                fontWeight: 700,
                                color: '#000',
                                padding: '1.5rem 0',
                            }}>
                            {data.category}
                        </Typography>

                        <Typography variant="p"
                            sx={{
                                fontSize: '1.2rem',
                                color: '#000',
                            }}>
                            {data.description}
                        </Typography>

                        <div className={cx('evaluate-wrapper')}>
                            <Grid container direction="row"
                                alignItems="center">
                                <Grid item xs={12} sx={{ display: 'inherit' }}
                                    alignItems="center">
                                    <div>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <HalfStarIcon />
                                    </div>
                                    <span className={cx('text')} >4.6/5 (15,677 Đánh giá)</span>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Container>

            </Paper>
        </Box>
    );
}

export default BreadcrumbDetail;
