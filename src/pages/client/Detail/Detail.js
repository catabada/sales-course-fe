import classNames from 'classnames/bind';
import {Link, useParams} from 'react-router-dom';
import styles from './Detail.module.scss';
import data from '~/services/fakeData';
import {BreadcrumbDetail} from '~/components/Breadcrumb';
import {
    AppBar, Avatar, Badge, Box, Button, Collapse,
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
import {useState} from 'react';
import {Container} from '@mui/system';
import TaskIcon from '@mui/icons-material/TaskAltOutlined';
import PlayIcon from '@mui/icons-material/PlayCircleOutlined';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import WebsiteIcon from '@mui/icons-material/LanguageOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarOutlineIcon from '@mui/icons-material/StarOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SmileIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import DocumentIcon from '@mui/icons-material/TextSnippetOutlined';
import {HalfStarIcon, StarIcon} from "~/components/Icons";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';

const cx = classNames.bind(styles);

function Detail() {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {slug} = useParams();
    const thisCourse = data.find((course) => course.slug === slug);
    thisCourse.url = 'https://res.cloudinary.com/dbrdml9bf/image/upload/v1638449082/topica/wave_iabqmr.png';

    const numberCustom = (props) => {
        const {active, completed} = props;
        return (<div ownerstate={{active, completed}}>
            <div className={cx('lesson-number')}>1</div>
        </div>)
    }

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className={cx('wrapper')}>
            <BreadcrumbDetail data={thisCourse}/>
            <Grid container>
                <Grid container justifyContent="center">
                    <Grid item md={8}>
                        <AppBar className={cx('navbar')}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="simple tabs example"
                                scrollButtons="auto"
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: '#C89F65'
                                    }
                                }}
                                className={cx('tabs')}
                            >
                                <Tab label="Lợi ích" sx={{
                                    fontSize: '1.4rem',
                                    textTransform: 'initial'
                                }}/>
                                <Tab label="Giáo trình" sx={{
                                    fontSize: '1.4rem',
                                    textTransform: 'initial'
                                }}/>
                                <Tab label="Giảng viên" sx={{
                                    fontSize: '1.4rem',
                                    textTransform: 'initial'
                                }}/>
                                <Tab label="Đánh giá" sx={{
                                    fontSize: '1.4rem',
                                    textTransform: 'initial'
                                }}/>
                                <Tab label="Câu hỏi thường gặp" sx={{
                                    fontSize: '1.4rem',
                                    textTransform: 'initial'
                                }}/>
                            </Tabs>
                        </AppBar>
                        {/* content */}
                        <Container maxWidth={false} className={cx('detail-content')}>
                            <Grid className={cx('benefit')}>
                                <div className={cx('benefit-wrapper')}>
                                    <h2 className={cx('benefit-title')}>Lợi ích từ khoá học</h2>
                                    <div className={cx('benefit-content')}>
                                        <div className={cx('benefit-item')}>
                                            <TaskIcon className={cx('benefit-icon')}/>
                                            <p className={cx('benefit-text')}>Khóa học hướng dẫn cách thiết lập các
                                                chiến lược nhân sự dựa vào nhu cầu và quy mô của công ty, từ đó có những
                                                bước triển khai kế hoạch một cách hợp lý nhất.</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            {/*course*/}
                            <Grid className={cx('course')}>
                                <div className={cx('course-wrapper')}>
                                    <h2 className={cx('course-title')}>Lộ trình khoá học</h2>

                                    <div id={cx('readMore')} className={cx('course-video')}>
                                        <Stepper orientation='vertical' connector={null}>
                                            <Step key='1' orientation="vertical">
                                                <StepLabel StepIconComponent={numberCustom}>
                                                    <div className={cx('lesson-header')}>
                                                        <div className={cx('lesson-header-title')}>Giới thiệu yếu tố
                                                            nhân sự trong doanh nghiệp
                                                        </div>
                                                        <div className={cx('lesson-duration')}>00:46:16
                                                        </div>
                                                    </div>
                                                </StepLabel>
                                                <StepContent className={cx('lesson-content')}>
                                                    <div className={cx('lesson-content-title')}>
                                                        Các nhân tố trong doanh nghiệp
                                                    </div>
                                                    <div className={cx('video-overview')}>
                                                        <PlayIcon className={cx('video-icon__play')}/>
                                                        <span>4 videos</span>
                                                        <ArrowDownIcon className={cx('video-icon__down')}/>
                                                    </div>
                                                    <List className={cx('video-list')}>
                                                        <ListItem key='1' className={cx('video-item')}>
                                                            <PlayIcon className={cx('video-icon__play')}/>
                                                            <p className={cx('video-title')}>Những nhân tố trong
                                                                doanh nghiệp</p>
                                                            <p className={cx('video-duration')}>00:10:57</p>
                                                        </ListItem>
                                                        <ListItem key='2' className={cx('video-item')}>
                                                            <PlayIcon className={cx('video-icon__play')}/>
                                                            <p className={cx('video-title')}>Những nhân tố trong
                                                                doanh nghiệp</p>
                                                            <p className={cx('video-duration')}>00:10:57</p>
                                                        </ListItem>
                                                        <ListItem key='3' className={cx('video-item')}>
                                                            <PlayIcon className={cx('video-icon__play')}/>
                                                            <p className={cx('video-title')}>Những nhân tố trong
                                                                doanh nghiệp</p>
                                                            <p className={cx('video-duration')}>00:10:57</p>
                                                        </ListItem>
                                                    </List>
                                                </StepContent>
                                            </Step>

                                            <Step key='2' orientation="vertical">
                                                <StepLabel StepIconComponent={numberCustom}>
                                                    <div className={cx('lesson-header')}>
                                                        <div className={cx('lesson-header-title')}>Giới thiệu yếu tố
                                                            nhân sự trong doanh nghiệp 2
                                                        </div>
                                                        <div className={cx('lesson-duration')}>00:46:16
                                                        </div>
                                                    </div>
                                                </StepLabel>
                                                <StepContent className={cx('lesson-content')}>
                                                    <div className={cx('lesson-content-title')}>
                                                        Các nhân tố trong doanh nghiệp
                                                    </div>
                                                    <div className={cx('video-overview')}>
                                                        <PlayIcon className={cx('video-icon__play')}/>
                                                        <span>4 videos</span>
                                                        <ArrowDownIcon className={cx('video-icon__down')}/>
                                                    </div>
                                                    <List className={cx('video-list')}>
                                                        <ListItem key='1' className={cx('video-item')}>
                                                            <PlayIcon className={cx('video-icon__play')}/>
                                                            <p className={cx('video-title')}>Những nhân tố trong
                                                                doanh nghiệp</p>
                                                            <p className={cx('video-duration')}>00:10:57</p>
                                                        </ListItem>
                                                        <ListItem key='2' className={cx('video-item')}>
                                                            <PlayIcon className={cx('video-icon__play')}/>
                                                            <p className={cx('video-title')}>Những nhân tố trong
                                                                doanh nghiệp</p>
                                                            <p className={cx('video-duration')}>00:10:57</p>
                                                        </ListItem>
                                                        <ListItem key='3' className={cx('video-item')}>
                                                            <PlayIcon className={cx('video-icon__play')}/>
                                                            <p className={cx('video-title')}>Những nhân tố trong
                                                                doanh nghiệp</p>
                                                            <p className={cx('video-duration')}>00:10:57</p>
                                                        </ListItem>
                                                    </List>
                                                </StepContent>
                                            </Step>
                                        </Stepper>

                                        <div className={cx('read-more-hidden')}></div>
                                    </div>

                                    <div className={cx('course-more')}>
                                        <Button variant="outlined" className={cx('btn-more')}>Xem thêm</Button>
                                    </div>
                                </div>
                            </Grid>
                            {/*author*/}
                            <div className={cx('author')}>
                                <h2 className={cx('author-title')}>Giảng viên</h2>
                                <div className={cx('author-wrapper')}>
                                    <div className={cx('author-image')}>
                                        <Badge>
                                            <Avatar
                                                src="https://cdn7.edumall.vn/uploads/images/instructors/le-tham-duong.png"
                                                alt='author'
                                                sx={{width: 120, height: 120}}/>
                                        </Badge>
                                    </div>
                                    <div className={cx('author-info')}>
                                        <div className={cx('author-header')}>
                                            <div className={cx('author-profile')}>
                                                <Box component={Link} to={'/'} className={cx('author-link')}>Lê Thẩm
                                                    Dương</Box>
                                                <LinkedInIcon sx={{color: '#007bb6'}} className={cx('author-social')}/>
                                                <WebsiteIcon className={cx('author-social')}/>
                                            </div>
                                            <div className={cx('author-evolution')}>
                                                <StarOutlineIcon/>
                                                <Typography variant='body1' className={cx('text')}>4.7/5</Typography>
                                                <Typography variant='body1'>sao</Typography>
                                                <GroupOutlinedIcon/>
                                                <Typography variant='body1' className={cx('text')}>1091</Typography>
                                                <Typography variant='body1'>Người theo dõi</Typography>
                                            </div>
                                        </div>
                                        <div id={cx('description-expand')} className={cx('author-body')}>
                                            <Typography variant='body1'>
                                                <span className={cx('author-text')}>TS. Lê Thẩm Dương được biết đến không chỉ là một giảng viên xuất sắc của Khoa Quản trị Kinh doanh, Đại học Ngân hàng TP. Hồ Chí Minh mà còn là một diễn giả chuyên nghiệp, một chuyên gia hàng đầu trong nhiều lĩnh vực đào tạo, hoạt động thực tiễn...</span>
                                                <span className={cx('author-text')}> Năm 1982 - 1989: Giảng viên, Học viện Ngân hàng, Hà Nội</span>
                                                <span className={cx('author-more')}>Xem thêm</span>
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*    evolution*/}
                            <div className={cx('course-evolution')}>
                                <h2 className={cx('evolution-title')}>Đánh giá từ học viên</h2>

                                <div className={cx('evolution-wrapper')}>
                                    <div className={cx('evolution-content')}>
                                        <div className={cx('evolution-left')}>
                                            <div className={cx('evolution-overview')}>
                                                <Typography variant='body1' sx={{
                                                    fontSize: '2.4rem',
                                                    fontWeight: 700,
                                                    paddingBottom: '.5rem'
                                                }}>4.6/5</Typography>
                                                <div>
                                                    <StarIcon/>
                                                    <StarIcon/>
                                                    <StarIcon/>
                                                    <StarIcon/>
                                                    <HalfStarIcon/>
                                                </div>
                                                <Typography variant='body1' sx={{
                                                    fontSize: '1.2rem',
                                                    paddingTop: '.5rem',
                                                    color: '#082346'
                                                }}>(15,677 đánh giá)</Typography>
                                            </div>
                                            <div>
                                                <div className={cx('evolution-item')}>
                                                    <SmileIcon className={cx('evolution-icon')}/>
                                                    <Typography variant='body1' className={cx('evolution-text')}>Giảng
                                                        viên thân thiện, nhiệt tình</Typography>
                                                </div>
                                                <div className={cx('evolution-item')}>
                                                    <DocumentIcon className={cx('evolution-icon')}/>
                                                    <Typography variant='body1' className={cx('evolution-text')}>Tài
                                                        liệu chi tiết, dễ hiểu</Typography>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('divide')}></div>
                                        <div className={cx('evolution-right')}>
                                            <div className={cx('evolution-right-wrapper')}>
                                                <div className={cx('evolution-comment-item')}>
                                                    <div className={cx('evolution-student')}>
                                                        <Typography variant='body1'
                                                                    className={cx('evolution-student-name')}>
                                                            Lan Phuong
                                                        </Typography>
                                                        <div>
                                                            <StarIcon/>
                                                            <StarIcon/>
                                                            <StarIcon/>
                                                            <StarOutlineIcon sx={{
                                                                color: '#FFC043',
                                                                height: '2.4rem',
                                                                width: '2.4rem'
                                                            }}/>
                                                            <StarOutlineIcon sx={{
                                                                color: '#FFC043',
                                                                height: '2.4rem',
                                                                width: '2.4rem'
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className={cx('evolution-student-comment')}>
                                                        <Typography variant='body1' sx={{fontSize: '1.6rem'}}>Giảng viên
                                                            nhiệt tình, chương trình
                                                            học đơn giản, dễ hiểu. Nội
                                                            dung rất đáng học</Typography>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={cx('evolution-right-wrapper')}>
                                                <div className={cx('evolution-comment-item')}>
                                                    <div className={cx('evolution-student')}>
                                                        <Typography variant='body1'
                                                                    className={cx('evolution-student-name')}>
                                                            Hong Mai
                                                        </Typography>
                                                        <div className={cx('evolution-rate')}>
                                                            <StarIcon/>
                                                            <StarIcon/>
                                                            <StarIcon/>
                                                            <StarOutlineIcon sx={{
                                                                color: '#FFC043',
                                                                height: '2.4rem',
                                                                width: '2.4rem'
                                                            }}/>
                                                            <StarOutlineIcon sx={{
                                                                color: '#FFC043',
                                                                height: '2.4rem',
                                                                width: '2.4rem'
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className={cx('evolution-student-comment')}>
                                                        <Typography variant='body1' sx={{fontSize: '1.6rem'}}>Giáo trình
                                                            giảng dạy chi tiết, có hướng dẫn công cụ đi kèm. Tuy nhiên
                                                            cần thêm case study thực tế để dễ tham khảo</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('evolution-right-wrapper')}>
                                                <div className={cx('evolution-comment-item')}>
                                                    <div className={cx('evolution-student')}>
                                                        <Typography variant='body1'
                                                                    className={cx('evolution-student-name')}>
                                                            Hong Mai
                                                        </Typography>
                                                        <div className={cx('evolution-rate')}>
                                                            <StarIcon/>
                                                            <StarIcon/>
                                                            <StarIcon/>
                                                            <StarOutlineIcon sx={{
                                                                color: '#FFC043',
                                                                height: '2.4rem',
                                                                width: '2.4rem'
                                                            }}/>
                                                            <StarOutlineIcon sx={{
                                                                color: '#FFC043',
                                                                height: '2.4rem',
                                                                width: '2.4rem'
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className={cx('evolution-student-comment')}>
                                                        <Typography variant='body1' sx={{fontSize: '1.6rem'}}>Giáo trình
                                                            giảng dạy chi tiết, có hướng dẫn công cụ đi kèm. Tuy nhiên
                                                            cần thêm case study thực tế để dễ tham khảo</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Grid className={cx('faq')}>
                                <h2 className={cx('faq-title')}>Câu hỏi thường gặp</h2>
                                <div className={cx('faq-wrapper')}>
                                    <List>
                                        <ListItemButton onClick={handleClick}
                                                        sx={{
                                                            border: '1px solid #082346',
                                                            borderRadius: '1rem',
                                                            marginBottom: '1rem'
                                                        }}>
                                            <ListItemText primary="Cách đăng thảo luận, thắc mắc về bài học"
                                                          primaryTypographyProps={{fontSize: '1.6rem'}}/>
                                            {open ? <ExpandLess/> : <ExpandMore/>}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{pl: 4}}>
                                                    <ListItemText
                                                        primary="Bạn truy cập hướng dẫn tại: http://topi.ca/edumall_thaoluan"/>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                        <ListItemButton onClick={handleClick}
                                                        sx={{
                                                            border: '1px solid #082346',
                                                            borderRadius: '1rem',
                                                            marginBottom: '1rem'
                                                        }}>
                                            <ListItemText secondary="Điều chỉnh chất lượng video"
                                                          secondaryTypographyProps={{fontSize: '1.6rem'}}/>
                                            {open ? <ExpandLess/> : <ExpandMore/>}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{pl: 4}}>
                                                    <ListItemText
                                                        secondary="Bạn truy cập hướng dẫn tại: http://topi.ca/edumall_dcvideo"/>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                        <ListItemButton onClick={handleClick}
                                                        sx={{
                                                            border: '1px solid #082346',
                                                            borderRadius: '1rem',
                                                            marginBottom: '1rem'
                                                        }}>
                                            <ListItemText primary="Cách sử dụng khuyến mãi"
                                                          primaryTypographyProps={{fontSize: '1.6rem'}}/>
                                            {open ? <ExpandLess/> : <ExpandMore/>}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{pl: 4}}>
                                                    <ListItemText
                                                        primary="Bạn tham khảo hướng dẫn tại: http://topi.ca/edumall_makhuyenmai"/>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </div>
                            </Grid>
                        </Container>
                    </Grid>


                    <Grid
                        item
                        md={3}
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            zIndex: 1000,
                            marginTop: '-300px'
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
                                                startIcon={<CartIcon sx={{height: '2.4rem', width: '2.4rem'}}/>}> Thêm
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

export default Detail;
