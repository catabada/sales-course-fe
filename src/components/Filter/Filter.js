import {
    Box, Checkbox,
    Divider,
    FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel,
    Link,
    List,
    ListItem, ListItemText,
    MenuItem,
    MenuList,
    Paper, Radio, RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames/bind";
import styles from "./Filter.module.scss";

const cx = classNames.bind(styles);
export default function Filter() {
    return (
        <Box sx={{width: '100%'}}>
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
                                fontWeight: 400
                            },
                            startAdornment: (
                                <SearchIcon sx={{
                                    fontSize: '2.4rem',
                                    m: 1,
                                    color: '#000',
                                    fontWeight: 300
                                }}/>
                            ), // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                    />
                </Box>

                <Paper className={cx('category-list')} elevation={0} sx={{width: '100%', marginTop: '2rem'}}>
                    <MenuList sx={{padding: '0 25px'}} className={cx('menu-list')}>
                        <Typography
                            sx={{
                                color: '#082346',
                                fontWeight: 'bold',
                                margin: '10px 7px',
                            }}
                            variant='h4'>Danh mục con</Typography>
                        <MenuItem className={cx('menu-item')}>
                            <Typography variant="body1">
                                <Link href="">Tiếng Anh (303)</Link>
                            </Typography>
                        </MenuItem>
                        <Divider/>
                        <MenuItem className={cx('menu-item')}>
                            <Typography variant="body1">
                                <Link href="">Tiếng Hàn (17)</Link>
                            </Typography>
                        </MenuItem>
                        <Divider/>
                        <MenuItem className={cx('menu-item')}>
                            <Typography variant="body1">
                                <Link href="">Tiếng Nhật (30)</Link>
                            </Typography>
                        </MenuItem>
                        <Divider/>
                        <MenuItem className={cx('menu-item')}>
                            <Typography variant="body1">
                                <Link href="">Tiếng Trung (36)</Link>
                            </Typography>
                        </MenuItem>
                        <Divider/>
                        <MenuItem className={cx('menu-item')}>
                            <Typography variant="body1">
                                <Link href="">Ngôn ngữ khác (6)</Link>
                            </Typography>
                        </MenuItem>
                        <Divider/>
                    </MenuList>
                </Paper>

                <Paper className={cx('filter-list')} elevation={0} sx={{width: '100%', marginTop: '1rem'}}>
                    <MenuList className={cx('menu-list')}>
                        <Typography
                            sx={{
                                color: '#082346',
                                fontWeight: 'bold',
                                margin: '0 7px',
                            }}
                            variant='h4'>Lọc</Typography>

                        <MenuList className={cx('sub-menu-list')}>
                            <Typography
                                sx={{
                                    color: '#C89F65',
                                    fontWeight: 'bold',
                                    margin: '0 7px',
                                    fontSize:'1.6rem'
                                }}
                                variant='h5'>Thời lượng khóa</Typography>
                            <FormGroup sx={{marginTop: '5px'}}>
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel control={<Checkbox size='large'/>} label={ <Typography sx={{width: '100%'}} variant="body1">Dưới 1 giờ</Typography>} />
                                </MenuItem>
                                <Divider />
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel control={<Checkbox size='large'/>} label={ <Typography sx={{width: '100%'}} variant="body1">1-2 giờ</Typography>} />
                                </MenuItem>
                                <Divider />
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel control={<Checkbox size='large'/>} label={ <Typography sx={{width: '100%'}} variant="body1">2-4 giờ</Typography>} />
                                </MenuItem>
                                <Divider />
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel control={<Checkbox size='large'/>} label={ <Typography sx={{width: '100%'}} variant="body1">4-6 giờ</Typography>} />
                                </MenuItem>
                                <Divider />
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel control={<Checkbox size='large'/>} label={ <Typography sx={{width: '100%'}} variant="body1">6 giờ trở lên</Typography>} />
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
                                    fontSize:'1.6rem'
                                }}
                                variant='h5'>Khác</Typography>
                            <FormGroup sx={{marginTop: '5px'}}>
                                <MenuItem className={cx('sub-menu-item')}>
                                    <FormControlLabel control={<Checkbox size='large'/>} label={ <Typography sx={{width: '100%'}} variant="body1">Đang giảm giá</Typography>} />
                                </MenuItem>
                                <Divider />
                            </FormGroup>
                        </MenuList>
                    </MenuList>
                </Paper>

            </Box>
        </Box>
    )
}