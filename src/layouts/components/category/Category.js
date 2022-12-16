import {Box, Chip, SvgIcon, Typography} from '@mui/material';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import styles from './Category.module.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import {memo, useEffect, useMemo, useState} from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {getCategoriesSearch} from "~/redux/category/categorySlice";
import {useDispatch, useSelector, useStore} from "react-redux";

const cx = classNames.bind(styles);


function CategoryItem(props) {
    const {data} = props;
    //
    // const typeParent = data.map(item => {
    //     if (item.type == 0) return item
    // })
    //
    // const typeChild = data.map(item => {
    //     if (item.type !== 0) return item
    // })
    //
    // console.log(typeParent)
    // console.log(typeChild)

    return
}


function Category() {
    // const dispatch = useDispatch();
    // const categories = useSelector(state => state.categoryReducer.categories)
    // useEffect(() => {
    //     dispatch(getCategoriesSearch({type: 0}))
    // }, [dispatch])

    return (
        <Box component={Link} to={'/category'} className={cx('wrapper')}>
            <div className={cx('inner')}>
                <CategoryOutlinedIcon className={cx('icon')}/>
                <Typography noWrap className={cx('title')}>
                    Danh mục
                </Typography>

                <KeyboardArrowUpOutlinedIcon className={cx('icon', 'icon-arrow', 'icon-up')}/>
                <KeyboardArrowDownOutlinedIcon className={cx('icon', 'icon-arrow', 'icon-down')}/>
            </div>

            {/*<Box className={cx('category-content')}>*/}
            {/*    <ul className={cx('category-list')}>*/}
            {/*{*/}
            {/*    listCate && listCate.map((item, index) => {*/}
            {/*        if (item.type === 0) {*/}
            {/*            return <Box component={Link} to={`/category/${item.codeName}`} key={index}*/}
            {/*                        className={cx('category-item')}>*/}
            {/*                {item.name}*/}
            {/*                <ChevronRightIcon sx={{marginLeft: 'auto', height: '3rem', width: '3rem'}}/>*/}
            {/*            </Box>*/}
            {/*        }*/}
            {/*    })*/}
            {/*}*/}
            {/*    </ul>*/}
            {/*</Box>*/}
        </Box>
    );
}

export default memo(Category);
