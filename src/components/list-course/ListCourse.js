import { AppBar, Box, Button, Container, Grid, IconButton, Pagination, Typography } from "@mui/material";
import styles from "./ListCourse.module.scss"
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import CardCourse from "~/components/card-course";
import { useNavigate, useSearchParams } from "react-router-dom";
import SubPagination from "~/components/sub-pagination";

const cx = classNames.bind(styles);

export default function ListCourse() {
    const navigate = useNavigate();
    const [search, setSearch] = useSearchParams()

    // State
    const [sort, setSort] = useState(0);
    const [page, setPage] = useState(1);


    const handleSort = (newSort) => {
        setSort(newSort)
    }

    const handlePagination = (event, value) => {
        setSearch({ page: value })
        setPage(value)
    }

    const listCourse = []
        

    useEffect(() => {


        let pageUrl = Number.parseInt(search.get("page") === null ? 1 : search.get("page"))
        setPage(pageUrl)


    }, [search.get("page")])
    return (
        <>
            <SubPagination />
            <Container className={cx('wrapper')} maxWidth={false}>
                <Box className={cx('header-sort')}>
                    <Button onClick={() => handleSort(0)} className={cx(sort === 0 ? 'active' : '')} variant="outlined">Liên
                        quan nhất</Button>
                    <Button onClick={() => handleSort(1)} className={cx(sort === 1 ? 'active' : '')} variant="outlined">Phổ
                        biến nhất</Button>
                    <Button onClick={() => handleSort(2)} className={cx(sort === 2 ? 'active' : '')} variant="outlined">Mới
                        nhất</Button>
                    <Button onClick={() => handleSort(3)} className={cx(sort === 3 ? 'active' : '')} variant="outlined">Cũ
                        nhất</Button>
                    <Button onClick={() => handleSort(4)} className={cx(sort === 4 ? 'active' : '')} variant="outlined">Giá
                        tăng dần</Button>
                    <Button onClick={() => handleSort(5)} className={cx(sort === 5 ? 'active' : '')} variant="outlined">Giá
                        giảm dần</Button>
                </Box>

                <Box className={cx('list-course')}>
                    <Grid container spacing={3}>
                        {
                            listCourse.map((item, index) => {
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
                            <Pagination count={11} defaultPage={1} page={page} boundaryCount={2}
                                onChange={handlePagination} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}