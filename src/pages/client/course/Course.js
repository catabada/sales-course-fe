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

// const filterCourseByPrice = (arrayPrice, courses, currentCourses) => {

//         const result = []
//         if (arrayPrice.length == 0) {
//             return currentCourses;
//         } else if (arrayPrice.length == 1) {
//             switch (arrayPrice[0]) {
//                 case "0":
//                     result.push(...courses.slice().filter(item => {
//                         const salePrice = item.price - item.price * item.discount;
//                         return salePrice === 0
//                     }));
//                     break;
//                 case "200":
//                     result.push(...courses.slice().filter(item => {
//                         const salePrice = item.price - item.price * item.discount;
//                         return salePrice > 0 && salePrice <= 200000
//                     }));
//                     break;
//                 case "500":
//                     result.push(...courses.slice().filter(item => {
//                         const salePrice = item.price - item.price * item.discount;
//                         return salePrice <= 500000 && salePrice > 200000
//                     }));
//                     break;
//                 case "501":
//                     result.push(...courses.slice().filter(item => {
//                         const salePrice = item.price - item.price * item.discount;
//                         return salePrice > 500000
//                     }));
//                     break;
//             }
//             const currentCourse = result.filter((item, index) => result.indexOf(item) === index);
//             return currentCourse
//         } else {
//             arrayPrice.map((item) => {
//                 switch (item) {
//                     case "0":
//                         result.push(...currentCourses.slice().filter(item => {
//                             const salePrice = item.price - item.price * item.discount;
//                             return salePrice === 0
//                         }));
//                         break;
//                     case "200":
//                         result.push(...currentCourses.slice().filter(item => {
//                             const salePrice = item.price - item.price * item.discount;
//                             return salePrice > 0 && salePrice <= 200000
//                         }));
//                         break;
//                     case "500":
//                         result.push(...currentCourses.slice().filter(item => {
//                             const salePrice = item.price - item.price * item.discount;
//                             return salePrice <= 500000 && salePrice > 200000
//                         }));
//                         break;
//                     case "501":
//                         result.push(...currentCourses.slice().filter(item => {
//                             const salePrice = item.price - item.price * item.discount;
//                             return salePrice > 500000
//                         }));
//                         break;
//                 }
//             })
//             const currentCourse = result.filter((item, index) => result.indexOf(item) === index);
//             return currentCourse
//         }

//     }

function Course() {
    const { codeCategory } = useParams();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoading, page } = useSelector(state => state.courseReducer)
    const category = useSelector(state => state.categoryReducer.category)
    const [priceFilter, setPriceFilter] = useState([]);
    const [pageNumber, setPageNumber] = useState(searchParams.get("page-number"))
    const [currentCourses, setCurrentCourses] = useState([]);
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
                }
            },
            pageParam: {
                "page-number": pageNumber - 1,
                "page-size": 6,
                "sort-by": sort,
                "asc": asc
            }
        }));
    }, [dispatch, category, pageNumber, sort, asc])

    // useEffect(() => {
    //     setCurrentCourses(courses)
    //     setCourseFilter(courses)
    // }, [courses])

    // set price change
    const handleSelectPrice = (e) => {
        if (e.target.checked) {
            setPriceFilter((prev) => [...prev, e.target.value])
        } else {
            const values = priceFilter.filter((item) => item !== e.target.value)
            setPriceFilter([...values]);
        }
    }
    const callBackParentPageNumber = (pageNumber) => {
        setPageNumber(pageNumber)
    }
    const callBackParentSortBy = (sortBy, asc) => {
        setSort(sortBy)
        setAsc(asc)
    }

    //set currentCourse khi click
    // const handleSort = (e, newSort) => {
    //     setSort(newSort)
    //     switch (e.target.innerText) {
    //         case "MỚI NHẤT":
    //             const typeNew = courses.slice().sort((a, b) => {
    //                 return a.createdDate - b.createdDate ? -1 : 1;
    //             });
    //             setCurrentCourses(typeNew)
    //             setCourseFilter(typeNew);
    //             break;
    //         case "CŨ NHẤT":
    //             const typeOld = courses.slice().sort((a, b) => {
    //                 return a.createdDate - b.createdDate ? 1 : -1;
    //             });
    //             setCurrentCourses(typeOld)
    //             setCourseFilter(typeOld);
    //             break;
    //         case "GIÁ GIẢM DẦN":
    //             const descrement = courses.slice().sort((a, b) => {
    //                 return a.price > b.price ? -1 : 1;
    //             });
    //             setCurrentCourses(descrement)
    //             setCourseFilter(descrement);
    //             break;
    //         case "GIÁ TĂNG DẦN":
    //             const increment = courses.slice().sort((a, b) => {
    //                 return a.price > b.price ? 1 : -1;
    //             });
    //             setCurrentCourses(increment)
    //             setCourseFilter(increment);
    //             break;
    //         default:
    //             return courses
    //     }
    // }

    // get course filter
    // useEffect(() => {
    //     setCourseFilter(filterCourseByPrice(priceFilter, courseFilter, currentCourses))
    // }, [priceFilter, currentCourses])

    return <Box className={cx('wrapper')}>
        <Box sx={{ width: '100%' }}>
            {category && <Breadcrumb category={category} />}

            <Container maxWidth={false}>
                <Paper elevation={4}>
                    <Grid container className={cx('body')}>
                        <Grid item lg={2} sx={{ width: '100%' }}>
                            <Filter codeCategory={codeCategory} />
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


