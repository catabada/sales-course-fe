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
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addToCart} from "~/redux/cart/cartSlice";

const cx = classNames.bind(style);

function CourseInactive(props) {
    const {data} = props
    const dispatch = useDispatch();
    const addCart = () => {
        dispatch(addToCart({...data}))
    }

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
                        }}
                    >
                        <div className={cx('sale')}>
                            <div className={cx('sale-wrapper')}>
                                <div className={cx('sale-image')}>
                                    <div className={cx('sale-image-wrapper')}>
                                        <img
                                            src={`/images/${data.image}`}
                                            alt={data.image}
                                            className={cx('sale-banner')}/>
                                        <BackDropVideo url={data.videoDemo}/>
                                    </div>
                                </div>
                                <div className={cx('sale-detail')}>
                                    <div className={cx('price-info')}>
                                        <span className={cx('old-price')}>  {Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }).format(data.price)}</span>
                                        <span className={cx('current-price')}>  {Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }).format((data.price - data.price * data.discount))}</span>
                                    </div>

                                    {/*<div className={cx('sale-offer')}>*/}
                                    {/*    Ưu đãi sẽ kết thúc sau*/}
                                    {/*    <span>06:40:59</span>*/}
                                    {/*</div>*/}
                                    <div className={cx('add-cart')}>
                                        <Button
                                            onClick={() => addCart()}
                                            variant="outlined" className={cx('btn-add')}
                                            startIcon={<CartIcon
                                                sx={{height: '2.4rem', width: '2.4rem'}}/>}>
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </div>
                                    <div className={cx('buy-now')}>
                                        <Button variant="contained" className={cx('btn-buy-now')}> Mua ngay</Button>
                                    </div>
                                    <div className={cx('tool')}>
                                        <div className={cx('wish-list')} onClick={() => props.parentCallback(data)}>
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