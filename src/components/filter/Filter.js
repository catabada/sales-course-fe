import {
    Box,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    MenuItem,
    MenuList,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategoriesSearch, getCategoryByCode } from '~/redux/category/categorySlice';

const cx = classNames.bind(styles);
export default function Filter({ codeCategory, callBackParentFilterPrice }) {
    const dispatch = useDispatch();
    const subCategories = useSelector((state) => state.categoryReducer.categories);
    const [active, setActive] = React.useState(0);

    useEffect(() => {
        dispatch(
            getCategoriesSearch({
                category: {
                    codeName: codeCategory,
                },
            }),
        );
    }, [dispatch, codeCategory]);

    const handleChangePrice = (from, to, active) => {
        callBackParentFilterPrice(from, to);
        setActive(active);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box className={cx('wrapper')}>
                <Box className={cx('search')}>
                    <TextField
                        className={cx('search-input')}
                        variant="standard"
                        name="query"
                        placeholder="Tìm kiếm khóa học"
                        fullWidth
                        InputProps={{
                            style: {
                                fontSize: '1.6rem',
                                color: '#393f4d',
                                padding: '0.2rem',
                                fontWeight: 400,
                            },
                            startAdornment: (
                                <SearchIcon
                                    sx={{
                                        fontSize: '2.4rem',
                                        m: 1,
                                        color: '#000',
                                        fontWeight: 300,
                                    }}
                                />
                            ), // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                    />
                </Box>

                <Paper className={cx('category-list')} elevation={0} sx={{ width: '100%', marginTop: '2rem' }}>
                    {subCategories.length !== 0 && (
                        <MenuList sx={{ padding: '0 25px' }} className={cx('menu-list')}>
                            <Typography
                                sx={{
                                    color: '#082346',
                                    fontWeight: 'bold',
                                    margin: '10px 7px',
                                }}
                                variant="h4"
                            >
                                Danh mục con
                            </Typography>
                            {subCategories.map((subCategory) => {
                                return (
                                    <MenuItem key={subCategory.id} className={cx('menu-item')}>
                                        <Typography variant="body1">
                                            <Link to={`/category/${subCategory.codeName}`}>{subCategory.name}</Link>
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </MenuList>
                    )}
                </Paper>

                <Paper className={cx('filter-list')} elevation={0} sx={{ width: '100%', marginTop: '1rem' }}>
                    <MenuList className={cx('menu-list')}>
                        <Typography
                            sx={{
                                color: '#082346',
                                fontWeight: 'bold',
                                margin: '0 7px',
                            }}
                            variant="h4"
                        >
                            Lọc
                        </Typography>

                        <MenuList className={cx('sub-menu-list')}>
                            <Typography
                                sx={{
                                    color: '#C89F65',
                                    fontWeight: 'bold',
                                    margin: '0 7px',
                                    fontSize: '1.6rem',
                                }}
                                variant="h5"
                            >
                                Giá bán
                            </Typography>
                            <FormGroup sx={{ marginTop: '5px' }}>
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={active === 0}
                                                onClick={() => handleChangePrice(0, 0, 0)}
                                                size="large"
                                            />
                                        }
                                        label={
                                            <Typography sx={{ width: '100%' }} variant="body1">
                                                Tất cả
                                            </Typography>
                                        }
                                    />
                                </MenuItem>
                                <Divider />
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={active === 1}
                                                onClick={() => handleChangePrice(0, 100000, 1)}
                                                size="large"
                                            />
                                        }
                                        label={
                                            <Typography sx={{ width: '100%' }} variant="body1">
                                                Dưới 100k
                                            </Typography>
                                        }
                                    />
                                </MenuItem>
                                <Divider />
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={active === 2}
                                                onClick={() => handleChangePrice(100000, 300000, 2)}
                                                size="large"
                                            />
                                        }
                                        label={
                                            <Typography sx={{ width: '100%' }} variant="body1">
                                                Từ 100k - 300k
                                            </Typography>
                                        }
                                    />
                                </MenuItem>
                                <MenuItem className={cx('sub-menu-item')}></MenuItem>
                                <Divider />
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={active === 3}
                                                onClick={() => handleChangePrice(300000, 500000, 3)}
                                                size="large"
                                            />
                                        }
                                        label={
                                            <Typography sx={{ width: '100%' }} variant="body1">
                                                Từ 300k - 500k
                                            </Typography>
                                        }
                                    />
                                </MenuItem>
                                <Divider />
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={active === 4}
                                                onClick={() => handleChangePrice(500000, 0, 4)}
                                                size="large"
                                            />
                                        }
                                        label={
                                            <Typography sx={{ width: '100%' }} variant="body1">
                                                Từ 500k trở lên
                                            </Typography>
                                        }
                                    />
                                </MenuItem>
                                <Divider />
                            </FormGroup>
                        </MenuList>
                        <MenuList className={cx('sub-menu-list')}>
                            <Typography
                                sx={{
                                    color: '#C89F65',
                                    fontWeight: 'bold',
                                    margin: '0 7px',
                                    fontSize: '1.6rem',
                                }}
                                variant="h5"
                            >
                                Khác
                            </Typography>
                            <FormGroup sx={{ marginTop: '5px' }}>
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel
                                        control={<Checkbox size="large" />}
                                        label={
                                            <Typography sx={{ width: '100%' }} variant="body1">
                                                Đang giảm giá
                                            </Typography>
                                        }
                                    />
                                </MenuItem>
                                <Divider />
                            </FormGroup>
                        </MenuList>
                        {/*<MenuList className={cx('sub-menu-list')}>*/}
                        {/*    <Typography*/}
                        {/*        sx={{*/}
                        {/*            color: '#C89F65',*/}
                        {/*            fontWeight: 'bold',*/}
                        {/*            margin: '0 7px',*/}
                        {/*            fontSize: '1.6rem'*/}
                        {/*        }}*/}
                        {/*        variant='h5'>Khác</Typography>*/}
                        {/*    <FormGroup sx={{marginTop: '5px'}}>*/}
                        {/*        <MenuItem className={cx('sub-menu-item')}>*/}
                        {/*            <FormControlLabel control={<Checkbox size='large'/>}*/}
                        {/*                              label={<Typography sx={{width: '100%'}} variant="body1">Đang giảm*/}
                        {/*                                  giá</Typography>}/>*/}
                        {/*        </MenuItem>*/}
                        {/*        <Divider/>*/}
                        {/*    </FormGroup>*/}
                        {/*</MenuList>*/}
                    </MenuList>
                </Paper>
            </Box>
        </Box>
    );
}
