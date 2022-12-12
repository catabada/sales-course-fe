import style from './WishList.module.scss';
import classNames from 'classnames/bind';
import {CourseData} from '~/services/fakeData';
import {Box, Breadcrumbs, Button, Link, Typography} from "@mui/material";
import CardCourse from "~/components/card-course";
import {useState} from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const cx = classNames.bind(style);

function WishList() {
    const myCourses = CourseData.courses;

    const [label, setLabel] = useState(
        "Chọn khoá học"
    )
    const handleClick = () => {
        if (label.length !== 3)
            setLabel("Huỷ");
        else
            setLabel("Chọn khoá học");
    }

    return <div className="container">
        <div className={cx('wish-list')}>
            <div className={cx('sub-nav')}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="medium" className={cx('next-icon')}/>}
                    aria-label="breadcrumb"
                >
                    <Link color="inherit" href="/" className={cx('sub-item')}>
                        Trang chủ
                    </Link>
                    <Typography className={cx('sub-last-item')}>
                        Đã thích
                    </Typography>
                </Breadcrumbs>
            </div>
            <div className={cx('title')}>
                <Typography sx={{fontSize: "3rem", fontWeight: 'bold'}}>Đã thích</Typography>

                <Button sx={{color: '#FCCF00', fontSize: '2rem'}} onClick={handleClick}>{label}</Button>
            </div>
            <div className="row">
                {
                    myCourses.map((item, index) => (
                        <Box sx={{padding: '1rem'}} key={index} className='col-3'>
                            <CardCourse data={item}/>
                        </Box>
                    ))
                }
            </div>
        </div>
    </div>
}

export default WishList;