import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Breadcrumb from '~/components/Breadcrumb';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CardCategory from '~/components/CardCategory';
const cx = classNames.bind(styles);
function Category() {
    return <div className={cx("category")}>
        <Box
            className={cx('breadcrumb')}
        >
            <Paper
                className={cx('image-bg')}
            >
                <Grid container
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid item lg={12}>
                        <Typography
                            variant='body1'
                            className={cx('title')}
                        >
                            Danh mục
                        </Typography>
                        <Typography
                            variant='body1'
                            className={cx('des')}
                        >
                            <span>Tìm những chủ đề mà bạn yêu thích</span>
                            <span>Có hơn 2000 khoá học với 14 ngành khác nhau để bạn có thể lựa chọn</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
        <Box
            className={cx('list-card-category')}
            sx={{
                px: 6
            }}
        >
            <Grid container
                spacing={0}
                alignItems='center'
            >
                <Grid item
                    lg={3}
                    sx={{ pt: 5, pl: 5 }}
                >
                    <CardCategory />
                </Grid>
            </Grid>
        </Box>
    </div>
}
export default Category;
