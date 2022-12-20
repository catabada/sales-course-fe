import classNames from "classnames/bind";
import { Breadcrumb } from "~/components/breadcrumb";
import style from "./Course.module.scss"
import { Box, Container, Grid, Paper } from "@mui/material";
import Filter from "~/components/filter";
import ListCourse from "~/components/list-course";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getCategoryByCode } from "~/redux/category/categorySlice";
import { getCoursesSearch, getCoursesSearchPagination } from "~/redux/course/courseSlice";
import Loading from "~/components/loading/Loading";

const cx = classNames.bind(style);

function Course() {
    const { codeCategory } = useParams();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoading, page } = useSelector(state => state.courseReducer)
    const category = useSelector(state => state.categoryReducer.category)
    const [priceBetween, setPriceBetween] = useState(null)
    const [pageNumber, setPageNumber] = useState(searchParams.get("page-number"))
    const [sort, setSort] = useState("name");
    const [asc, setAsc] = useState(1);

    // get category when codeCategory change
    useEffect(() => {
        dispatch(getCategoryByCode(codeCategory))
    }, [dispatch, codeCategory])

    // get course with category id
    useEffect(() => {
        category && dispatch(getCoursesSearchPagination({
            search: {
                category: {
                    id: category.id
                },
                priceBetween: priceBetween
            },
            pageParam: {
                "page-number": pageNumber - 1,
                "page-size": 6,
                "sort-by": sort,
                "asc": asc
            }
        }));
    }, [dispatch, category, pageNumber, sort, asc, priceBetween])


    const callBackParentPageNumber = (pageNumber) => {
        setPageNumber(pageNumber)
    }
    const callBackParentSortBy = (sortBy, asc) => {
        setSort(sortBy)
        setAsc(asc)
    }
    const callBackParentFilterPrice = (from, to) => {
        if (from === 0 && to === 0) {
            setPriceBetween(null)
        } else if (to === 0)
            setPriceBetween({ from: from })
        else setPriceBetween({ from: from, to: to })
    }

    return <Box className={cx('wrapper')}>
        <Box sx={{ width: '100%' }}>
            {category && <Breadcrumb category={category} />}

            <Container maxWidth={false}>
                <Paper elevation={4}>
                    <Grid container className={cx('body')}>
                        <Grid item lg={2} sx={{ width: '100%' }}>
                            <Filter codeCategory={codeCategory} callBackParentFilterPrice={callBackParentFilterPrice} />
                        </Grid>
                        <Grid item lg={10} sx={{ width: '100%', position: 'relative' }}>
                            {!!page &&
                                <ListCourse page={page} callBackParentPageNumber={callBackParentPageNumber} callBackParentSortBy={callBackParentSortBy} />}
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
        <Loading open={isLoading} />
    </Box>
}

export default Course;


