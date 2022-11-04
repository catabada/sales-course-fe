import { Box, Divider, Grid, SvgIcon, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer id="footer" className={cx('footer')}>
            <Divider />
            <div className={cx('wrapper')}>
                <Grid container>
                    <Grid item className={cx('footer-item')}>
                        <div className={cx('footer-menu')}>
                            <Typography variant="body1" className={cx('footer-title')}>
                                Về chúng tôi
                            </Typography>

                            <Box component={Link} to={config.routes.terms}>
                                <Typography variant="body1" className={cx('footer-paragraph')}>
                                    Điều khoản
                                </Typography>
                            </Box>
                            <Box component={Link} to={config.routes.policy}>
                                <Typography variant="body1" className={cx('footer-paragraph')}>
                                    Chính sách bảo mật
                                </Typography>
                            </Box>
                        </div>

                        <img
                            alt="license-img"
                            src="https://edumall.vn/assets/images/logoSaleNoti.png"
                            className={cx('img-license')}
                        />
                    </Grid>
                    <Grid item className={cx('footer-item')}>
                        <div className={cx('footer-menu')}>
                            <Typography variant="body1" className={cx('footer-title')}>
                                Cộng đồng
                            </Typography>
                            <Box component={Link} to={config.routes.takecare}>
                                <Typography variant="body1" className={cx('footer-paragraph')}>
                                    Chăm sóc khách hàng
                                </Typography>
                            </Box>
                            <Box component={Link} to={config.routes.blog}>
                                <Typography variant="body1" className={cx('footer-paragraph')}>
                                    Blog
                                </Typography>
                            </Box>
                            <Box component={Link} to={config.routes.category}>
                                <Typography variant="body1" className={cx('footer-paragraph')}>
                                    Danh mục
                                </Typography>
                            </Box>
                        </div>
                    </Grid>
                    <Grid container className={cx('footer-container')}>
                        <div className={cx('footer-menu')}>
                            <Typography variant="body1" className={cx('footer-title')}>
                                Địa chỉ
                            </Typography>
                            <Typography variant="body1" className={cx('footer-paragraph')}>
                                Công ty TNHH Công Nghệ Giáo Dục Topica Việt Nam
                            </Typography>
                            <Typography variant="body1" className={cx('footer-paragraph')}>
                                MST: 0109475876
                            </Typography>
                            <Typography variant="body1" className={cx('footer-paragraph')}>
                                Địa chỉ: Tầng 6, Tòa nhà Kim Khí Thăng long, Sô 1 Lương Yên, Phường Bạch Đằng, Quận Hai
                                Bà Trưng, Thành phố Hà Nội, Việt Nam
                            </Typography>
                            <Typography variant="body1" className={cx('footer-paragraph')}>
                                Email: trogiup@edumall.vn
                            </Typography>
                        </div>

                        {/* <a href="d" className={cx('social')}>
                            <SvgIcon className="jss516" focusable="false" viewBox="0 0 35 35" aria-hidden="true">
                                <SvgIcon
                                    width="35"
                                    height="35"
                                    viewBox="0 0 35 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z"
                                        fill="#3B5998"
                                    ></path>
                                    <path
                                        d="M20.6827 18.191H18.3451V26.7547H14.8035V18.191H13.1191V15.1813H14.8035V13.2338C14.8035 11.841 15.4651 9.66016 18.3767 9.66016L21.0001 9.67113V12.5925H19.0966C18.7844 12.5925 18.3454 12.7485 18.3454 13.4129V15.1841H20.9921L20.6827 18.191Z"
                                        fill="white"
                                    ></path>
                                </SvgIcon>
                            </SvgIcon>
                        </a>
                        <a href="d" className={cx('social')}>
                            <SvgIcon viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
                                    fill="#FF0000"
                                ></path>
                                <path
                                    d="M17 27.2686C17 28.0382 17.8331 28.5194 18.4997 28.1348L28.4986 22.3662C29.1656 21.9814 29.1656 21.0186 28.4986 20.6338L18.4997 14.8652C17.8331 14.4806 17 14.9618 17 15.7314V27.2686Z"
                                    fill="white"
                                ></path>
                            </SvgIcon>
                        </a> */}
                    </Grid>
                    <Grid item className={cx('footer-container')}>
                        <div className={cx('footer-menu')}>
                            <Typography variant="body1" className={cx('footer-title')}>
                                Tải app edumall:
                            </Typography>
                            <div className={cx('footer-download')}>
                                <a href="https://edumall.vn/">
                                    <Box className={cx('footer-app-wrapper')}>
                                        <SvgIcon
                                            className=" jss550"
                                            focusable="false"
                                            viewBox="0 0 18 23"
                                            width="23"
                                            height="30"
                                            aria-hidden="true"
                                        >
                                            <SvgIcon
                                                width="18"
                                                height="23"
                                                viewBox="0 0 18 23"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.8384 12.3008C14.8492 11.4662 15.0715 10.6478 15.4847 9.92182C15.8978 9.19587 16.4885 8.58593 17.2015 8.14876C16.7485 7.5036 16.1509 6.97266 15.4561 6.5981C14.7614 6.22355 13.9886 6.01571 13.1992 5.99108C11.5152 5.81482 9.8827 6.99591 9.02459 6.99591C8.14987 6.99591 6.82867 6.00858 5.40596 6.03777C4.48571 6.06742 3.58885 6.33427 2.80277 6.81233C2.0167 7.29039 1.3682 7.96335 0.920483 8.76564C-1.01895 12.1141 0.427692 17.0351 2.2855 19.7417C3.21501 21.0671 4.30133 22.5475 5.72276 22.495C7.11371 22.4375 7.63321 21.6105 9.31221 21.6105C10.9756 21.6105 11.463 22.495 12.9133 22.4616C14.4058 22.4375 15.3462 21.1304 16.2431 19.7925C16.911 18.8481 17.4249 17.8044 17.7658 16.7C16.8987 16.3343 16.1587 15.7221 15.6381 14.9398C15.1175 14.1575 14.8394 13.2397 14.8384 12.3008Z"
                                                    fill="white"
                                                ></path>
                                                <path
                                                    d="M12.0993 4.21083C12.9131 3.23663 13.314 1.98445 13.2169 0.720215C11.9736 0.850435 10.8251 1.44299 10.0003 2.37982C9.59699 2.83749 9.28812 3.36993 9.09132 3.9467C8.89452 4.52347 8.81364 5.13326 8.85332 5.74121C9.47522 5.7476 10.0905 5.61319 10.6527 5.3481C11.215 5.08301 11.7096 4.69416 12.0993 4.21083Z"
                                                    fill="white"
                                                ></path>
                                            </SvgIcon>
                                        </SvgIcon>
                                        <div className={cx('footer-app-context')}>
                                            <Typography>Tải ứng dụng</Typography>
                                            <Typography sx={{ fontSize: 18, lineHeight: 1 }}>App store</Typography>
                                        </div>
                                    </Box>
                                </a>
                                <a href="https://edumall.vn/">
                                    <Box className={cx('footer-app-wrapper')}>
                                        <SvgIcon
                                            className=" jss651"
                                            focusable="false"
                                            viewBox="0 0 25 26"
                                            width="23"
                                            height="30"
                                            aria-hidden="true"
                                        >
                                            <SvgIcon
                                                width="25"
                                                height="26"
                                                viewBox="0 0 25 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.44018 0.540215C1.12142 0.934271 0.964153 1.43465 1.00018 1.94021V24.0602C0.966153 24.5706 1.13507 25.0738 1.47018 25.4602L1.54018 25.5402L13.9002 13.1502V12.8502L1.51018 0.470215L1.44018 0.540215Z"
                                                    fill="url(#paint0_linear)"
                                                ></path>
                                                <path
                                                    d="M17.9999 17.2802L13.8999 13.1502V12.8502L17.9999 8.72021L18.0899 8.78021L22.9999 11.5602C24.3999 12.3502 24.3999 13.6502 22.9999 14.4502L18.1099 17.2302L17.9999 17.2802Z"
                                                    fill="url(#paint1_linear)"
                                                ></path>
                                                <path
                                                    d="M18.1199 17.23L13.8999 13L1.43994 25.46C1.72252 25.7115 2.08421 25.8562 2.46229 25.869C2.84038 25.8818 3.21102 25.7619 3.50994 25.53L18.1199 17.23Z"
                                                    fill="url(#paint2_linear)"
                                                ></path>
                                                <path
                                                    d="M18.1199 8.77997L3.50994 0.47997C3.21297 0.244884 2.84262 0.122027 2.46402 0.133001C2.08541 0.143975 1.7228 0.288077 1.43994 0.53997L13.8999 13L18.1199 8.77997Z"
                                                    fill="url(#paint3_linear)"
                                                ></path>
                                                <path
                                                    opacity="0.2"
                                                    d="M17.9999 17.1299L3.50994 25.3799C3.22189 25.5973 2.87083 25.7149 2.50994 25.7149C2.14905 25.7149 1.798 25.5973 1.50994 25.3799L1.43994 25.4499L1.50994 25.5299C1.798 25.7473 2.14905 25.8649 2.50994 25.8649C2.87083 25.8649 3.22189 25.7473 3.50994 25.5299L18.1199 17.2299L17.9999 17.1299Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    opacity="0.12"
                                                    d="M1.43988 25.3202C1.11867 24.9235 0.96126 24.4191 0.999878 23.9102V24.0602C0.965852 24.5705 1.13477 25.0737 1.46988 25.4602L1.53988 25.3902L1.43988 25.3202Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    opacity="0.12"
                                                    d="M23 14.3L18 17.13L18.09 17.23L23 14.44C23.2898 14.3174 23.5413 14.119 23.7278 13.8656C23.9143 13.6122 24.0291 13.3132 24.06 13C23.9975 13.2846 23.869 13.5505 23.6849 13.7763C23.5007 14.0021 23.2662 14.1815 23 14.3Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    opacity="0.25"
                                                    d="M3.51 0.619978L23 11.7C23.2662 11.8185 23.5007 11.9979 23.6849 12.2237C23.869 12.4495 23.9975 12.7154 24.06 13C24.0291 12.6868 23.9143 12.3878 23.7278 12.1344C23.5413 11.881 23.2898 11.6825 23 11.56L3.51 0.479978C2.12 -0.320022 1 0.339978 1 1.93998V2.08998C1 0.489978 2.12 -0.170022 3.51 0.619978Z"
                                                    fill="white"
                                                ></path>
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear"
                                                        x1="12.8002"
                                                        y1="1.71022"
                                                        x2="-3.97982"
                                                        y2="18.4902"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#00A0FF"></stop>
                                                        <stop offset="0.01" stopColor="#00A1FF"></stop>
                                                        <stop offset="0.26" stopColor="#00BEFF"></stop>
                                                        <stop offset="0.51" stopColor="#00D2FF"></stop>
                                                        <stop offset="0.76" stopColor="#00DFFF"></stop>
                                                        <stop offset="1" stopColor="#00E3FF"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint1_linear"
                                                        x1="24.8299"
                                                        y1="13.0002"
                                                        x2="0.639902"
                                                        y2="13.0002"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#FFE000"></stop>
                                                        <stop offset="0.41" stopColor="#FFBD00"></stop>
                                                        <stop offset="0.78" stopColor="#FFA500"></stop>
                                                        <stop offset="1" stopColor="#FF9C00"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint2_linear"
                                                        x1="15.8299"
                                                        y1="15.3"
                                                        x2="-6.93006"
                                                        y2="38.05"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#FF3A44"></stop>
                                                        <stop offset="1" stopColor="#C31162"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint3_linear"
                                                        x1="-1.70006"
                                                        y1="-6.82003"
                                                        x2="8.45994"
                                                        y2="3.33997"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#32A071"></stop>
                                                        <stop offset="0.07" stopColor="#2DA771"></stop>
                                                        <stop offset="0.48" stopColor="#15CF74"></stop>
                                                        <stop offset="0.8" stopColor="#06E775"></stop>
                                                        <stop offset="1" stopColor="#00F076"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </SvgIcon>
                                        </SvgIcon>
                                        <div className={cx('footer-app-context')}>
                                            <Typography>Tải ứng dụng</Typography>
                                            <Typography sx={{ fontSize: 18, lineHeight: 1 }}>Google play</Typography>
                                        </div>
                                    </Box>
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;
