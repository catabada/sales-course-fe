import {Box, TextField} from '@mui/material';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import SearchIcon from '@mui/icons-material/Search';

const cx = classNames.bind(styles);


function SearchItem({course}) {
    return
}

function Search({data}) {
    return (
        <Box className={cx('wrapper')} sx={{width: `${(data === null) ? '27%' : 'auto'}`}}>
            <TextField
                className={cx('search-input')}
                variant="standard"
                name="query"
                placeholder="Tìm kiếm khóa học"
                fullWidth={(data === null) ? true : false}
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

            <div className={cx('content')}>{/* course item */}</div>
        </Box>
    );
}

export default Search;
