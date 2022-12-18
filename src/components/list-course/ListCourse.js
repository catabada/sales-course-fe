import {AppBar, Box, Button, Container, Grid, IconButton, Pagination, Typography} from "@mui/material";
import styles from "./ListCourse.module.scss"
import classNames from "classnames/bind";
import {useEffect, useRef, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import SubPagination from "~/components/sub-pagination";
import CardCourse from "~/components/card-course";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesSearch} from "~/redux/course/courseSlice";

const cx = classNames.bind(styles);

export default function ListCourse(props) {
    // State

    const [page, setPage] = useState(1);
    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate();
    const [courseSort, setCourseSort] = useState([]);

    const {courses} = props

    const handlePagination = (event, value) => {
        setSearch({page: value})
        setPage(value)
    }

    useEffect(() => {
        let pageUrl = Number.parseInt(search.get("page") === null ? 1 : search.get("page"))
        setPage(pageUrl)
    }, [search.get("page")])
    return (
        <>
            <Container className={cx('wrapper')} maxWidth={false}>
                <Box className={cx('header-sort')} sx={{display: 'flex'}}>
                    {/*<Button onClick={() => handleSort(0)} className={cx(sort === 0 ? 'active' : '')} variant="outlined">Liên*/}
                    {/*    quan nhất</Button>*/}
                    <Button onClick={(e) => props.parentCallback(e, 0)}
                            className={cx(props.params === 0 ? 'active' : '')}
                            variant="outlined">
                        Phổ biến nhất
                    </Button>
                    <Button onClick={(e) => props.parentCallback(e, 1)}
                            className={cx(props.params === 1 ? 'active' : '')}
                            variant="outlined">
                        Mới nhất
                    </Button>
                    <Button onClick={(e) => props.parentCallback(e, 2)}
                            className={cx(props.params === 2 ? 'active' : '')}
                            variant="outlined">
                        Cũ nhất
                    </Button>
                    <Button onClick={(e) => props.parentCallback(e, 3)}
                            className={cx(props.params === 3 ? 'active' : '')}
                            variant="outlined">
                        Giá tăng dần
                    </Button>
                    <Button onClick={(e) => props.parentCallback(e, 4)}
                            className={cx(props.params === 4 ? 'active' : '')}
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
                                    <CardCourse key={index} data={item}/>
                                </Grid>
                            })
                        }

                    </Grid>

                </Box>
                <Box className={cx('pagination')}>
                    <Grid container justifyContent={'center'}>
                        <Grid item lg={12}>
                            <Pagination count={11} defaultPage={1} page={page} boundaryCount={2}
                                        onChange={handlePagination}/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}