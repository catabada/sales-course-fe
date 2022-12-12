import classNames from 'classnames/bind';
import style from './Detail.module.scss';
import {BreadcrumbDetail} from '~/components/breadcrumb';
import {
    AppBar, Avatar, Backdrop, Badge, Box, Button, Collapse,
    Grid,
    List,
    ListItem, ListItemButton, ListItemIcon, ListItemText, makeStyles,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Tab,
    Tabs, Typography,

} from '@mui/material';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import BackDropVideo from "~/components/back-drop";
import {TabScroll} from "~/components/tabs";

const cx = classNames.bind(style);

function CourseInactive({data}) {

    data.url = 'https://res.cloudinary.com/dbrdml9bf/image/upload/v1638449082/topica/wave_iabqmr.png';


    return (
        <div className={cx('wrapper')}>
            <BreadcrumbDetail data={data}/>
            <Grid container>
                <Grid container justifyContent="center">
                    <Grid item md={8}>
                        <TabScroll data={data}/>
                    </Grid>

                    <Grid
                        item
                        md={3}
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            zIndex: 1000,
                            marginTop: '-300px',
                            visibility: 'hidden'
                        }}
                    >
                        <div className={cx('sale')}>
                            <div className={cx('sale-wrapper')}>
                                <div className={cx('sale-image')}>
                                    <div className={cx('sale-image-wrapper')}>
                                        <img
                                            src='https://d1nzpkv5wwh1xf.cloudfront.net/640/k-57ac2d8c047c990776574ffe/20170817-thayanh_linhnt19_17817/duonglt10.png'
                                            alt='text'
                                            className={cx('sale-banner')}/>
                                        <BackDropVideo url={data.video}/>
                                    </div>
                                </div>
                                <div className={cx('sale-detail')}>
                                    <div className={cx('price-info')}>
                                        <span className={cx('old-price')}>699,000 đ</span>
                                        <span className={cx('current-price')}>399,000 đ</span>
                                    </div>

                                    <div className={cx('sale-offer')}>
                                        Ưu đãi sẽ kết thúc sau
                                        <span>06:40:59</span>
                                    </div>
                                    <div className={cx('add-cart')}>
                                        <Button variant="outlined" className={cx('btn-add')}
                                                startIcon={<CartIcon
                                                    sx={{height: '2.4rem', width: '2.4rem'}}/>}> Thêm
                                            vào giỏ hàng</Button>
                                    </div>
                                    <div className={cx('buy-now')}>
                                        <Button variant="contained" className={cx('btn-buy-now')}> Mua ngay</Button>
                                    </div>
                                    <div className={cx('tool')}>
                                        <div className={cx('wish-list')}>
                                            <FavoriteIcon sx={{height: '2.4rem', width: '2.4rem'}}/>
                                            <span>Lưu vào Yêu thích</span>
                                        </div>
                                        <div className={cx('share')}>
                                            <ShareIcon sx={{height: '2.4rem', width: '2.4rem'}}/>
                                            <span>Chia sẻ</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default CourseInactive;