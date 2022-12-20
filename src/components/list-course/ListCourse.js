import { AppBar, Box, Button, Container, Grid, IconButton, Pagination, Typography } from "@mui/material";
import styles from "./ListCourse.module.scss"
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SubPagination from "~/components/sub-pagination";
import CardCourse from "~/components/card-course";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesSearch } from "~/redux/course/courseSlice";

const cx = classNames.bind(styles);

export default function ListCourse({ page, callBackParentPageNumber, callBackParentSortBy }) {
    // State

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate();
    const [sort, setSort] = useState("name");
    const [asc, setAsc] = useState(1);
    const [active, setActive] = useState(0);

    const courses = !!page.content ? page.content : [];
    const pageInfo = page.pageInfo;


    const handlePagination = (event, value) => {
        callBackParentPageNumber(value)
        navigate({
            pathname: "/",
            search: `?page=${value}`
        })
        setSearch({ "page-number": value })
        setPageNumber(value)
    }

    const handleSort = (sortBy, asc, active) => {
        callBackParentSortBy(sortBy, asc)
        setSort(sortBy)
        setActive(active)
    }

    return (
        <>
            <Container className={cx('wrapper')} maxWidth={false}>
                <Box className={cx('header-sort')} sx={{ display: 'flex' }}>
                    {/*<Button onClick={() => handleSort(0)} className={cx(sort === 0 ? 'active' : '')} variant="outlined">Liên*/}
                    {/*    quan nhất</Button>*/}
                    <Button
                        className={active === 0 ? cx('active') : cx('')}
                        onClick={() => handleSort("name", 1, 0)}
                        variant="outlined">
                        Phổ biến nhất
                    </Button>
                    <Button
                        className={active === 1 ? cx('active') : cx('')}
                        onClick={() => handleSort("createdDate", 0, 1)}
                        variant="outlined">
                        Mới nhất
                    </Button>
                    <Button
                        className={active === 2 ? cx('active') : cx('')}
                        onClick={() => handleSort("createdDate", 1, 2)}
                        variant="outlined">
                        Cũ nhất
                    </Button>
                    <Button
                        className={active === 3 ? cx('active') : cx('')}
                        onClick={() => handleSort("price", 1, 3)}
                        variant="outlined">
                        Giá tăng dần
                    </Button>
                    <Button
                        className={active === 4 ? cx('active') : cx('')}
                        onClick={() => handleSort("price", 0, 4)}
                        variant="outlined">
                        Giá giảm dần
                    </Button>
                    {/*<SubPagination/>*/}
                </Box>

                <Box className={cx('list-course')}>
                    <Grid container spacing={3}>
                        {
                            courses.map((item, index) => {
                                return <Grid key={index} item lg={4}>
                                    <CardCourse key={index} data={item} />
                                </Grid>
                            })
                        }

                    </Grid>

                </Box>
                <Box className={cx('pagination')}>
                    <Grid container justifyContent={'center'}>
                        <Grid item lg={12}>
                            {pageInfo && <Pagination count={pageInfo.totalPage} defaultPage={pageInfo.currentPage + 1} page={pageInfo.currentPage + 1} boundaryCount={2}
                                onChange={handlePagination} />}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}