import {Box, Chip, SvgIcon, Typography} from '@mui/material';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import config from '~/config';
import styles from './Category.module.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import {useState} from 'react';

const cx = classNames.bind(styles);

function Category() {
    const [isHover, setIsHover] = useState(false);

    return (
        <Box component={Link} to={config.routes.category} className={cx('wrapper')}>
            <div className={cx('inner')}>
                <CategoryOutlinedIcon className={cx('icon')}/>
                <Typography noWrap className={cx('title')}>
                    Danh mục
                </Typography>

                {isHover ? (
                    <KeyboardArrowUpOutlinedIcon className={cx('icon', 'icon-arrow')}/>
                ) : (
                    <KeyboardArrowDownOutlinedIcon className={cx('icon', 'icon-arrow')}/>
                )}
            </div>
        </Box>
    );
}

export default Category;
