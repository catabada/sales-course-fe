import {Avatar, Box, Button, Divider, Popover, TextField, Typography} from '@mui/material';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesSearch} from "~/redux/course/courseSlice";

const cx = classNames.bind(styles);


function SearchItem({course}) {
    return <Box component={'li'}>
        <Box component={Link} to={`/course/${course.codeName}`}
             sx={{display: 'flex', textDecoration: 'none', alignItems: 'center'}}>
            <Avatar src={`/images/${course.image}`} alt="course-img" sx={{height: 70, width: 70, marginRight: '1rem'}}/>
            <Box className={cx('course-item-content')} sx={{width: '100%'}}>
                <Box className={cx('course-item-name')}>
                    <Typography className={cx('course-name')} variant="body1">
                        {course.name}
                    </Typography>
                    {
                        course.price === 0 ?
                            <button className={cx('btn-course')}>Bắt đầu</button>
                            :
                            <button className={cx('btn-course')}>Nhận</button>
                    }
                </Box>
                <Box className={cx('course-item-price')}>
                    {
                        course.price === 0 ?
                            <Typography variant='body1' className={cx('price', 'current-price')}>
                                Khóa học miễn phí</Typography>
                            :
                            course.discount === 0 ?
                                <Typography variant="body1"
                                            className={cx('price', 'current-price')}>{
                                    Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(course.price)}
                                </Typography>
                                :
                                <>
                                    <Typography variant="body1"
                                                className={cx('price', 'current-price')}>
                                        {Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }).format(course.price - (course.price * course.discount))}
                                    </Typography>
                                    <Typography variant="body1"
                                                className={cx('price', 'old-price')}>{
                                        Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }).format(course.price)}
                                    </Typography>
                                </>
                    }
                </Box>
            </Box>
        </Box>
        <Divider sx={{backgroundColor: '#E6E5E5', marginTop: '1rem', height: '0.2rem'}}/>
    </Box>
}

function Search({user}) {
    const [focus, setFocus] = useState(false)
    const [search, setSearch] = useState('');
    const handleFocus = () => {
        setFocus(!focus)
    }
    const handleChange = (value) => {
        setSearch(value)
    }
    const dispatch = useDispatch();

    const coursesSearch = useSelector(state => state.courseReducer.courses)
    useEffect(() => {
        dispatch(getCoursesSearch({
            name: search
        }))
    }, [dispatch, search])
    return (
        <Box className={cx('wrapper', `${(!!user) ? '' : 'full-width'}`)}
             onClick={handleFocus}>
            <TextField
                className={cx('search-input')}
                variant="standard"
                fullWidth={!!user ? false : true}
                placeholder="Tìm kiếm khóa học"
                value={search}
                onChange={(e) => handleChange(e.target.value)}
                InputProps={{
                    style: {
                        fontSize: '1.4rem',
                        color: '#fff',
                        padding: '0.5rem',
                        fontWeight: 400,
                    },
                    startAdornment: (
                        <SearchIcon
                            sx={{
                                fontSize: '2rem',
                                m: 1,
                                color: '#fff',
                                fontWeight: 300,
                            }}
                        />
                    ), // <== adjusted this
                    disableUnderline: true, // <== added this
                }}
            />
            {
                focus ?
                    <div className={cx('content')}>
                        <div className={cx('content-wrapper')}>
                            <h4 className={cx('content-title')}>Gợi ý tìm kiếm</h4>
                            <ul className={cx('course-list')}>
                                {
                                    coursesSearch.map((course, index) => {
                                        if (index <= 2)
                                            return <SearchItem key={index} course={course}/>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    : <></>
            }

        </Box>
    );
}

export default Search;
