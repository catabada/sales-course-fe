import classNames from 'classnames/bind';
import style from './TabScroll.module.scss';
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
import {useEffect, useState} from 'react';
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
import {HalfStarIcon, StarIcon} from "~/components/icons";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import {Link} from "react-router-dom";
import ExpandNext from "@mui/icons-material/NavigateNext";

const cx = classNames.bind(style);

function TabScroll({data}) {
    const chapters = data.chapters;

    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false)
    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    const handleExpand = (e) => {
        setOpen(!open)
    }
    const numberCustom = (props) => {
        const {active, completed, icon, error, index} = props;
        console.log(props)
        return (<div ownerstate={{active, completed}}>
            <div className={cx('lesson-number')}>{index}</div>
        </div>)
    }
    console.log('render')

    return <>
        <AppBar className={cx('navbar')}>
            <Tabs
                className={cx('tabs')}
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                scrollButtons="auto"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: '#C89F65',
                        color: '#C89F65',
                    }
                }}
                sx={{
                    ' & a.Mui-selected': {
                        color: '#c89f65'
                    }
                }}
            >
                <Tab label="Lợi ích" className={cx('tab')} href={'#benefit'}/>
                <Tab label="Giáo trình" className={cx('tab')} href={'#curriculum'}/>
                <Tab label="Giảng viên" className={cx('tab')} href={'#lecture'}/>
                <Tab label="Đánh giá" className={cx('tab')} href={'#evolution'}/>
                <Tab label="Câu hỏi thường gặp" href={'#faq'} className={cx('tab')}/>
            </Tabs>
        </AppBar>
        {/* content */}
        <Container maxWidth={false} className={cx('detail-content')}>
            <Box id='benefit' className={cx('benefit')}>
                <div className={cx('benefit-wrapper')}>
                    <h2 className={cx('benefit-title')}>Lợi ích từ khoá học</h2>
                    <div className={cx('benefit-content')}>
                        <div className={cx('benefit-item')}>
                            <TaskIcon className={cx('benefit-icon')}/>
                            <p className={cx('benefit-text')}>Khóa học hướng dẫn cách thiết lập các
                                chiến lược nhân sự dựa vào nhu cầu và quy mô của công ty, từ đó có
                                những
                                bước triển khai kế hoạch một cách hợp lý nhất.</p>
                        </div>
                    </div>
                </div>
            </Box>

            {/*course*/}
            <Box id='curriculum' className={cx('course')}>
                <div className={cx('course-wrapper')}>
                    <h2 className={cx('course-title')}>Lộ trình khoá học</h2>

                    <div id={cx('readMore')} className={cx('course-video')}>
                        {
                            chapters.map((chapter, index) => (
                                <Stepper orientation='vertical' connector={null}>
                                    <Step key={index} orientation="vertical">
                                        <StepLabel optional={index}>
                                            <div className={cx('lesson-header')}>
                                                <div className={cx('lesson-header-title')}>{chapter.name}
                                                </div>
                                                <div className={cx('lesson-duration')}>00:46:16
                                                </div>
                                            </div>
                                        </StepLabel>
                                        <StepContent className={cx('lesson-content')}>
                                            <div className={cx('video-overview')}>
                                                <PlayIcon className={cx('video-icon__play')}/>
                                                <span>4 videos</span>
                                                <ArrowDownIcon className={cx('video-icon__down')}
                                                               onClick={handleExpand}/>
                                            </div>
                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                <List className={cx('video-list')}>
                                                    {
                                                        chapter.lessons.map((lesson, i) => (
                                                            <ListItem key={i} className={cx('video-item')}>
                                                                <PlayIcon className={cx('video-icon__play')}/>
                                                                <p className={cx('video-title')}>{lesson.name}</p>
                                                                <p className={cx('video-duration')}>{lesson.time}</p>
                                                            </ListItem>
                                                        ))
                                                    }
                                                </List>
                                            </Collapse>
                                        </StepContent>
                                    </Step>
                                </Stepper>
                            ))
                        }

                        <div className={cx('read-more-hidden')}></div>
                    </div>

                    <div className={cx('course-more')}>
                        <Button variant="outlined" className={cx('btn-more')}>Xem thêm</Button>
                    </div>
                </div>
            </Box>

            {/*author*/}
            <Box id='lecture' className={cx('author')}>
                <h2 className={cx('author-title')}>Giảng viên</h2>
                <div className={cx('author-wrapper')}>
                    <div className={cx('author-image')}>
                        <Badge>
                            <Avatar
                                src={data.author.user.avatar}
                                alt='author'
                                sx={{width: 120, height: 120}}/>
                        </Badge>
                    </div>
                    <div className={cx('author-info')}>
                        <div className={cx('author-header')}>
                            <div className={cx('author-profile')}>
                                <Box component={Link} to={'/'} className={cx('author-link')}>
                                    {data.author.user.name}
                                </Box>
                                <LinkedInIcon sx={{color: '#007bb6'}}
                                              className={cx('author-social')}/>
                                <WebsiteIcon className={cx('author-social')}/>
                            </div>
                            <div className={cx('author-evolution')}>
                                <StarOutlineIcon/>
                                <Typography variant='body1'
                                            className={cx('text')}>4.7/5</Typography>
                                <Typography variant='body1'>sao</Typography>
                                <GroupOutlinedIcon/>
                                <Typography variant='body1' className={cx('text')}>1091</Typography>
                                <Typography variant='body1'>Người theo dõi</Typography>
                            </div>
                        </div>
                        <div id={cx('description-expand')} className={cx('author-body')}>
                            <Typography variant='body1'>
                                {
                                    data.author.description.map((item, index) => (
                                        <span className={cx('author-text')} key={index}> {item}</span>
                                    ))
                                }
                                <span className={cx('author-more')}>Xem thêm</span>
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
        </Container></>

}

export default TabScroll