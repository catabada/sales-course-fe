import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardCategory from '~/components/card-category';
import {getCategoriesSearch} from '../../../redux/category/categorySlice'


const cx = classNames.bind(styles);
function Category() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories);


    useEffect(() => {
        dispatch(getCategoriesSearch({}))
    }, [dispatch])
    return <div className={cx("category")}>
        <Box
            className={cx('breadcrumb')}
        >
            <Paper
                className={cx('image-bg')}
            >
                <Grid container
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid item lg={12}>
                        <Typography
                            variant='body1'
                            className={cx('title')}
                        >
                            Danh mục
                        </Typography>
                        <Typography
                            variant='body1'
                            className={cx('des')}
                        >
                            <span>Tìm những chủ đề mà bạn yêu thích</span>
                            <span>Có hơn 2000 khoá học với 14 ngành khác nhau để bạn có thể lựa chọn</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
        <Box
            className={cx('list-card-category')}
            sx={{
                px: 6
            }}
        >
            <Grid container
                spacing={0}
                alignItems='center'
            >
                {Array.from(categories).map((category, index) => {
                    return <Grid key={category.id} item lg={3} sx={{ pt: 5, pl: 5 }}>
                        <CardCategory category={category} />
                    </Grid>
                })}
            </Grid>
        </Box>
    </div>
}
export default Category;
