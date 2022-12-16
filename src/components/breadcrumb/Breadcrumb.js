import styles from './Breadcrumb.module.scss';
import classNames from 'classnames/bind';
import {Box, Breadcrumbs, CardContent, Container, Grid, Link, Paper, Typography} from '@mui/material';
import {NavigateNext} from '@mui/icons-material';
import SubNav from "~/components/sub-nav";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategoryByCode} from "~/redux/category/categorySlice";

const cx = classNames.bind(styles);

function Breadcrumb({category}) {

    let background = category.codeName;
    if (category?.category) {
        background = category.category.codeName;
    }
    if (category?.category?.category) {
        background = category.category.category.codeName;
    }
    if (category?.category?.category?.category) {
        background = category.category.category.category.codeName;
    }
    return (
        <Box className={cx('breadcrumb')}>
            <Paper
                className={cx('image-bg')}
                style={{
                    backgroundImage: `linear-gradient(0, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%), url('/images/background/${background}.png')`,
                }}
            >
                <Container maxWidth={false}>
                    <div className={cx('content')}>
                        <SubNav data={category} breadcrumbCourse={"sub-nav"}/>

                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: '#fff',
                                margin: '10px 0 0 20px',
                            }}
                        >
                            {category.name}
                        </Typography>
                    </div>
                </Container>
            </Paper>
        </Box>
    );
}

export default Breadcrumb;
