import styles from './BreadcrumbDetail.module.scss';
import classNames from 'classnames/bind';
import {Box, Breadcrumbs, CardContent, Container, Grid, Link, Paper, Typography} from '@mui/material';
import {NavigateNext} from "@mui/icons-material";
import {StarIcon, HalfStarIcon} from '~/components/icons';
import SubNav from "~/components/sub-nav";


const cx = classNames.bind(styles);

function BreadcrumbDetail({data}) {
    const url = 'https://res.cloudinary.com/dbrdml9bf/image/upload/v1638449082/topica/wave_iabqmr.png';

    return (
        <Box className={cx('breadcrumb')}>
            <Paper
                className={cx('image-bg')}
                style={{backgroundImage: `linear-gradient(191deg, rgba(255, 192, 67, 0) 5.02%, rgba(255, 192, 67, 0.5) 94.1%), url(${url})`}}
            >
                <Container maxWidth={false}>
                    <div className={cx('content')}>
                        <SubNav data={data}/>

                        <Typography variant="h2"
                                    sx={{
                                        fontWeight: 700,
                                        color: '#000',
                                        padding: '1.5rem 0',
                                    }}>
                            {data.name}
                        </Typography>

                        <Typography variant="p"
                                    sx={{
                                        fontSize: '1.6rem',
                                        color: '#000',
                                    }}>
                            {data.description}
                        </Typography>

                        {/*<div className={cx('evaluate-wrapper')}>*/}
                        {/*    <Grid container direction="row"*/}
                        {/*          alignItems="center">*/}
                        {/*        <Grid item xs={12} sx={{display: 'inherit'}}*/}
                        {/*              alignItems="center">*/}
                        {/*            <div>*/}
                        {/*                <StarIcon/>*/}
                        {/*                <StarIcon/>*/}
                        {/*                <StarIcon/>*/}
                        {/*                <StarIcon/>*/}
                        {/*                <HalfStarIcon/>*/}
                        {/*            </div>*/}
                        {/*            <span className={cx('text')}>4.6/5 (15,677 Đánh giá)</span>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}
                        {/*</div>*/}
                    </div>
                </Container>

            </Paper>
        </Box>
    );
}

export default BreadcrumbDetail;
