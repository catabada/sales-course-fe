import {Breadcrumbs, Link, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import style from './SubNav.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(style);


function SubNav({data, breadcrumbCourse}) {
    const element = [];
    element.unshift({name: data.name, codeName: data.codeName});
    if (data?.category)
        element.unshift({
            name: data.category.name,
            codeName: data.category.codeName
        })
    if (data?.category?.category)
        element.unshift({
            name: data.category.category.name,
            codeName: data.category.category.codeName
        })
    if (data?.category?.category?.category)
        element.unshift({
            name: data.category.category.category.name,
            codeName: data.category.category.category.codeName
        })
    if (data?.category?.category?.category?.category)
        element.unshift({
            name: data.category.category.category.category.name,
            codeName: data.category.category.category.category.codeName
        })
    return <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" className={cx('next-icon')}/>}
        aria-label="breadcrumb"
        className={cx(`${breadcrumbCourse}`)}
    >
        <Link color="inherit" href="/" className={cx('sub-item')}>
            Trang chủ
        </Link>
        {
            element.map((item, index) => {
                if (index == element.length - 1) {
                    return <Typography key={index} className={cx('sub-last-item')}>
                        {item.name}
                    </Typography>
                } else {
                    return <Link key={index} color="inherit" href={`/category/${item.codeName}`}
                                 className={cx('sub-item')}>
                        {item.name}
                    </Link>
                }
            })
        }
    </Breadcrumbs>

}

export default SubNav;