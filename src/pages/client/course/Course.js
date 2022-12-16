import classNames from "classnames/bind";
import {Breadcrumb} from "~/components/breadcrumb";
import style from "./Course.module.scss"
import {Box, Container, Grid, Paper} from "@mui/material";
import Filter from "~/components/filter";
import ListCourse from "~/components/list-course";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategoryByCode} from "~/redux/category/categorySlice";
import {getCoursesSearch} from "~/redux/course/courseSlice";


const cx = classNames.bind(style);

function Course() {
    const {codeCategory} = useParams();
    const dispatch = useDispatch();

    const courses = useSelector(state => state.courseReducer.courses)
    const category = useSelector(state => state.categoryReducer.category)


    useEffect(() => {
        dispatch(getCategoryByCode(codeCategory))
    }, [dispatch, codeCategory])

    useEffect(() => {
        category && dispatch(getCoursesSearch({
            category: {
                id: category.id
            }
        }));
    }, [dispatch, category])

    return <Box className={cx('wrapper')}>
        <Box sx={{width: '100%'}}>
            {category && <Breadcrumb category={category}/>}

            <Container maxWidth={false}>
                <Paper elevation={4}>
                    <Grid container className={cx('body')}>
                        <Grid item lg={2} sx={{width: '100%'}}>
                            <Filter codeCategory={codeCategory}/>
                        </Grid>
                        <Grid item lg={10} sx={{width: '100%', position: 'relative'}}>
                            <ListCourse courses={courses}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>

    </Box>
};

export default Course;

