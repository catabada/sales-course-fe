import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Search from '../search';
import Category from '../category';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
import { LogoIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <AppBar position={'fixed'}>
            <Container maxWidth={false} className={cx('wrapper')}>
                <Toolbar className={cx('inner')}>
                    <div className={cx('header')}>
                        <Box component={Link} to={'/'} className={cx('logo')}>
                            <LogoIcon className={cx('icon')} />
                        </Box>
                        <Category />

                        <Search />

                        <Button variant="outlined" className={cx('btn-active')}>
                            Kích hoạt khoá học
                        </Button>

                        <Box className={cx('cart')} component={Link} to={'/cart'}>
                            <ShoppingCart className={cx('cart-icon')} />

                            <span className={cx('cart-number')}>1</span>

                            <div className={cx('cart-content')}>{/* cart item */}</div>
                        </Box>

                        {/* chua dang nhap */}
                        <Box component={Link} to={'/auth/signin'} className={cx('wrapper-link')}>
                            <Button variant="text" className={cx('btn', 'btn-text')}>
                                Đăng nhập
                            </Button>
                        </Box>
                        <Box component={Link} to={'/auth/signup'} className={cx('wrapper-link')}>
                            <Button variant="outline" className={cx('btn', 'btn-primary')}>
                                Đăng ký
                            </Button>
                        </Box>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
