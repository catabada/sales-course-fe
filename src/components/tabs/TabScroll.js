import classNames from 'classnames/bind';
import style from './TabScroll.module.scss';
import {
    AppBar, Avatar, Badge, Box, Button, Collapse,
    Grid,
    List,
    ListItem, ListItemButton, ListItemText,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Tab,
    Tabs, Typography,

} from '@mui/material';
import {useEffect, useRef, useState} from 'react';
import {Container} from '@mui/system';
import TaskIcon from '@mui/icons-material/TaskAltOutlined';
import PlayIcon from '@mui/icons-material/PlayCircleOutlined';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import WebsiteIcon from '@mui/icons-material/LanguageOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarOutlineIcon from '@mui/icons-material/StarOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SmileIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import DocumentIcon from '@mui/icons-material/TextSnippetOutlined';
import {HalfStarIcon, StarIcon} from "~/components/icons";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";
import {faqFakeData} from '~/services/fakeData'
import {useDispatch, useSelector} from "react-redux";
import {requestFeedbackSearch} from "~/redux/feedback/feedbackSlice";
import StarIconFill from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const cx = classNames.bind(style);

function RatingList({rating}) {
    let result = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            result.push(<StarIconFill key={i} sx={{
                height: '2.4rem', width: '2.4rem', color: '#FFC043FF'
            }}/>)
        } else {
            result.push(<StarBorderIcon key={i} sx={{
                height: '2.4rem', width: '2.4rem', color: '#FFC043FF'
            }}/>)
        }
    }

    return <div>
        {
            result.map(item => item)
        }
    </div>
}

function TabScroll({data}) {
    const dispatch = useDispatch();
    const faqList = faqFakeData;
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState([])

    const feedBacks = useSelector(state => state.feedbackReducer.feedbacks)

    useEffect(() => {
        data && dispatch(requestFeedbackSearch({
            course: {
                id: data.id
            }
        }))
    }, [data])
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    const handleExpand = (index) => {
        if (open.includes(index)) {
            const openCopy = open.filter((element) => {
                return element !== index
            });
            setOpen(openCopy);
        } else {
            const openCopy = [...open];
            openCopy.push(index);
            setOpen(openCopy);
        }
    }
    const handleToggleMore = (e) => {
        const faqWrapper = document.querySelector("#faq .TabScroll_faq-wrapper__EyopY");
        const textInner = e.target.innerHTML;
        if (textInner.length === 8) {
            faqWrapper.style.height = "auto";
            e.target.innerHTML = "Thu gọn"
        } else {
            faqWrapper.style.height = "200px";
            e.target.innerHTML = "Xem thêm"
        }
    }
    const chapters = data && data.chapters;
    const handleShow = (index) => {
        const col = document.querySelector(`#chapter-${index}`)
        if (col.hidden) {
            col.hidden = false;
        } else {
            col.hidden = true;
        }
    }

    const handleExpandLesson = (e) => {
        const courseVideo = document.querySelector("#readMore")
        const backgroundElement = document.querySelector(".TabScroll_read-more-hidden__VBoLr");
        const textInner = e.target.innerHTML;
        if (textInner.length === 8) {
            courseVideo.style.height = "auto";
            backgroundElement.style.display = "none";
            e.target.innerHTML = "Thu gọn"
        } else {
            courseVideo.style.height = "250px";
            backgroundElement.style.display = "flex";
            e.target.innerHTML = "Xem thêm"
        }

    }
    const labelRender = (props) => {
        const {active, completed} = props;
        return (<div ownerstate={{active, completed}}>
            <div className={cx('lesson-number')}>{props + 1}</div>
        </div>)
    }


    const countTotalRating = feedBacks?.reduce((acu, currentValue) => acu + currentValue.rating, 0)
    const avgRating = (countTotalRating / feedBacks?.length).toFixed(1);
    return <div>
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
                <Tab label="Giảng viên" className={cx('tab')} href={'#lecturer'}/>
                <Tab label="Đánh giá" className={cx('tab')} href={'#evolution'}/>
                <Tab label="Câu hỏi thường gặp" href={'#faq'} className={cx('tab')}/>
            </Tabs>
        </AppBar>
        {/* content */}
        <Container maxWidth={false} className={cx('detail-content')}>
            {/*benefit*/}
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

            <Box id='curriculum' className={cx('course')}>
                <div className={cx('course-wrapper')}>
                    <h2 className={cx('course-title')}>Lộ trình khoá học</h2>

                    <div id={cx('readMore')} className={cx('course-video')}>
                        {
                            chapters && chapters.map((chapter, index) => (
                                <Stepper orientation='vertical' connector={null} key={index}>
                                    <Step key={index} orientation="vertical">
                                        <StepLabel StepIconComponent={() => labelRender(index)}>
                                            <div className={cx('lesson-header')}>
                                                <div className={cx('lesson-header-title')}>{chapter.name}
                                                </div>
                                                <div className={cx('lesson-duration')}>00:46:16
                                                </div>
                                            </div>
                                        </StepLabel>
                                        <StepContent className={cx('lesson-content')}>
                                            <Box className={cx('video-overview')}
                                                 onClick={() => handleShow(index)}>
                                                <PlayIcon className={cx('video-icon__play')}/>
                                                <span>3 videos</span>
                                                <ArrowDownIcon className={cx('video-icon__down')}
                                                />
                                            </Box>
                                            <Collapse id={`chapter-${index}`} in={true} hidden={true} timeout="auto"
                                                      unmountOnExit>
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
                        <button className={cx('btn-more')}
                                onClick={(e) => handleExpandLesson(e)}>
                            Xem thêm
                        </button>
                    </div>
                </div>
            </Box>

            {/*lecturer*/}
            {
                data.lecturer && <Box id='lecturer' className={cx('author')}>
                    <h2 className={cx('author-title')}>Giảng viên</h2>
                    <div className={cx('author-wrapper')}>
                        <div className={cx('author-image')}>
                            <Badge>
                                <Avatar
                                    src={`/images/author/${data.lecturer.codeName}.jpg`}
                                    alt={data.lecturer.name}
                                    sx={{width: 120, height: 120}}/>
                            </Badge>
                        </div>
                        <div className={cx('author-info')}>
                            <div className={cx('author-header')}>
                                <div className={cx('author-profile')}>
                                    <Box component={Link} to={'/'} className={cx('author-link')}>
                                        {data.lecturer.name}
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
                                    <span className={cx('author-text')}> {data.lecturer.description}</span>
                                    {/*<span className={cx('author-more')}>Xem thêm</span>*/}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Box>
            }


            {/*evolution*/}
            <div id="evolution" className={cx('course-evolution')}>
                <h2 className={cx('evolution-title')}>Đánh giá từ học viên</h2>

                <div className={cx('evolution-wrapper')}>
                    <div className={cx('evolution-content')}>
                        <div className={cx('evolution-left')}>
                            <div className={cx('evolution-overview')}>
                                <Typography variant='body1' sx={{
                                    fontSize: '2.4rem',
                                    fontWeight: 700,
                                    paddingBottom: '.5rem'
                                }}>{avgRating}/5</Typography>
                                <div>
                                    <RatingList rating={avgRating}/>
                                </div>
                                <Typography variant='body1' sx={{
                                    fontSize: '1.2rem',
                                    paddingTop: '.5rem',
                                    color: '#082346'
                                }}>({feedBacks?.length} đánh giá)</Typography>
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
                            {
                                feedBacks?.map((item, index) => {
                                    if (index <= 4) {
                                        return <div key={index} className={cx('evolution-right-wrapper')}>
                                            <div className={cx('evolution-comment-item')}>
                                                <div className={cx('evolution-student')}>
                                                    <Typography variant='body1'
                                                                className={cx('evolution-student-name', 'col-4')}>
                                                        {item.userInfo.username}
                                                    </Typography>
                                                    <div className='col-8'>
                                                        <RatingList rating={item.rating}/>
                                                    </div>
                                                </div>
                                                <div className={cx('evolution-student-comment')}>
                                                    <Typography variant='body1' sx={{fontSize: '1.6rem'}}>
                                                        {item.content}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>


            {/*faq */}
            <Grid id="faq" className={cx('faq')}>
                <h2 className={cx('faq-title')}>Câu hỏi thường gặp</h2>
                <div className={cx('faq-wrapper')}>
                    <List>
                        {
                            faqList.map((item, index) => {
                                return <div key={index}>
                                    <ListItemButton onClick={() => handleExpand(index)}
                                                    sx={{
                                                        border: '1px solid #082346',
                                                        borderRadius: '1rem',
                                                        marginBottom: '1rem'
                                                    }}>
                                        <ListItemText primary={`${item.title}`}
                                                      primaryTypographyProps={{fontSize: '1.6rem'}}/>
                                        {open.includes(index) ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItemButton>
                                    <Collapse in={open.includes(index)} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{pl: 4}}>
                                                <ListItemText
                                                    primary={`${item.content}`}
                                                    primaryTypographyProps={{
                                                        fontSize: '1.6rem'
                                                    }}/>
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>
                            })
                        }
                    </List>
                </div>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box
                        onClick={(e) => handleToggleMore(e)}
                        variant="outlined" sx={{
                        color: "#082346",
                        border: '1px solid #082346',
                        padding: '1rem',
                        borderRadius: '2rem',
                        cursor: 'pointer'
                    }}>
                        Xem thêm
                    </Box>
                </Box>
            </Grid>
        </Container>

    </div>

}

export default TabScroll