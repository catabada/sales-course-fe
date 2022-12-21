import SubNav from "~/components/sub-nav";
import { TabDetail } from "~/components/tabs";
import style from './Detail.module.scss';
import classNames from "classnames/bind";
import {
    Avatar,
    Badge,
    Box,
    Collapse, Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography
} from "@mui/material";

import { useEffect, useState } from "react";
import ExpandNext from '@mui/icons-material/NavigateNext';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from "react-router-dom";
import LockIcon from '@mui/icons-material/WatchLater';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import TaskIcon from "@mui/icons-material/TaskAltOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebsiteIcon from "@mui/icons-material/LanguageOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutlineOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import Feedback from '~/components/feedback/Feedback'


const cx = classNames.bind(style);

const getCategoryParent = (data) => {
    const result = { name: data.name, codeName: data.codeName };
    if (data?.category) {
        result.name = data.category.name
        result.codeName = data.category.codeName
    }
    if (data?.category?.category) {
        result.name = data.category.category.name
        result.codeName = data.category.category.codeName
    }
    if (data?.category?.category?.category) {
        result.name = data.category.category.category.name
        result.codeName = data.category.category.category.codeName
    }
    if (data?.category?.category?.category?.category) {
        result.name = data.category.category.category.category.name
        result.codeName = data.category.category.category.category.codeName
    }
    return result
}


function CourseActive(props) {
    const { data } = props;
    const chapters = data && data.chapters;
    const [lesson, setLesson] = useState()
    const parentCategory = getCategoryParent(data);
    const [lessonId, setLessonId] = useState();

    useEffect(() => {
        chapters && setLesson(chapters[0].lessons[0])
    }, [chapters])
    const handleClick = (index, event) => {    
        const collapse = document.querySelector(`#chapter-${index}`)
        if (collapse.hidden) collapse.hidden = false;
        else collapse.hidden = true;
    }
    const handleSelectLesson = (lesson) => {
        setLessonId(lesson?.id)
        setLesson(lesson)
    }

    return <div className=''>
        <div className={cx('study-wrapper')}>
            <Box className={cx('sub-nav')}>
                <SubNav data={data} />
            </Box>

            <div className={cx('content')}>
                <div className="row g-0">
                    <Box className="col-8" sx={{ paddingLeft: '4rem', paddingRight: '2rem' }}>
                        {
                            lesson &&
                            <div className={cx('lesson-detail')}>
                                <iframe width="100%" height="500" src={lesson.video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

                                <h2 className={cx('lesson-name')}>{lesson.name}</h2>
                                <Box sx={{ marginBottom: '3rem' }}>
                                    <Box component={Link} to={`/category/${parentCategory.codeName}`}
                                        className={cx('lesson-tag')}>{parentCategory.name}</Box>
                                </Box>

                                {/*details*/}
                                <Box className='row' sx={{ margin: '1.5rem 0 4rem' }}>
                                    <div className="row col-5 align-items-center">
                                        {/*<Typography variant='body1' className={cx('wrapper', 'col-4')}>*/}
                                        {/*    <LockIcon sx={{*/}
                                        {/*        width: '3rem',*/}
                                        {/*        height: '3rem',*/}
                                        {/*        color: '#FCCF00'*/}
                                        {/*    }}/>*/}
                                        {/*    <span className={cx('lesson-time')}>{"lesson.time"}</span>*/}
                                        {/*</Typography>*/}
                                        <Typography variant='body1' className='col-3'
                                            sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PlayArrowIcon sx={{
                                                width: '3rem',
                                                height: '3rem',
                                                color: '#FCCF00'
                                            }} />
                                            <span className={cx('number-study')}>{data.viewed}</span>
                                        </Typography>
                                        <Typography variant='body1' className='col-7'
                                            sx={{ display: 'flex', alignItems: 'center' }}>
                                            <StarIcon sx={{
                                                width: '3rem',
                                                height: '3rem',
                                                color: '#FCCF00'
                                            }} />
                                            <span className={cx('evolution')}>4.7 Đánh giá</span>
                                        </Typography>
                                    </div>
                                    <div className="row col-7 align-items-center">
                                        <Typography variant='body1' className={cx('wrapper', 'col-4')}>
                                            <span
                                                className={cx('lesson-create')}>Thời gian tạo bài:
                                                <br /> {lesson.createdDate}
                                            </span>
                                        </Typography>
                                        <Typography variant='body1' className={cx('wrapper', 'col-4')}>
                                            <span
                                                className={cx('lesson-update')}>Thời gian cập nhật: <br /> {lesson.modifierDate}</span>
                                        </Typography>
                                        <Feedback course={data} />
                                    </div>
                                </Box>

                                {/*tabs*/}
                                <TabDetail data={data} lesson={lesson} />

                                <Grid className={cx('benefit')}>
                                    <div className={cx('benefit-wrapper')}>
                                        <h2 className={cx('benefit-title')}>Lợi ích từ khoá học</h2>
                                        <div className={cx('benefit-content')}>
                                            <div className={cx('benefit-item')}>
                                                <TaskIcon className={cx('benefit-icon')} />
                                                <p className={cx('benefit-text')}>Khóa học hướng dẫn cách thiết lập các
                                                    chiến lược nhân sự dựa vào nhu cầu và quy mô của công ty, từ đó có
                                                    những
                                                    bước triển khai kế hoạch một cách hợp lý nhất.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>

                                {data.lecturer && <Box className={cx('author')}>
                                    <h2 className={cx('author-title')}>Giảng viên</h2>
                                    <Box className={cx('author-wrapper')}>
                                        <div className={cx('author-image')}>
                                            <Badge>
                                                <Avatar
                                                    src={`/images/author/${data.lecturer.codeName}.jpg`}
                                                    alt='author'
                                                    sx={{ width: 120, height: 120 }} />
                                            </Badge>
                                        </div>
                                        <Box className={cx('author-info')}>
                                            <div className={cx('author-header')}>
                                                <div className={cx('author-profile')}>
                                                    <Box component={Link} to={`/author/${data.lecturer.codeName}`}
                                                        className={cx('author-link')}>
                                                        {data.lecturer.name}
                                                    </Box>
                                                    <LinkedInIcon sx={{ color: '#007bb6' }}
                                                        className={cx('author-social')} />
                                                    <WebsiteIcon className={cx('author-social')} />
                                                </div>
                                                <div className={cx('author-evolution')}>
                                                    <StarOutlineIcon />
                                                    <Typography variant='body1'
                                                        className={cx('text')}>4.7/5</Typography>
                                                    <Typography variant='body1'>sao</Typography>
                                                    <GroupOutlinedIcon />
                                                    <Typography variant='body1' className={cx('text')}>1091</Typography>
                                                    <Typography variant='body1'>Người theo dõi</Typography>
                                                </div>
                                            </div>
                                            <div id={cx('description-expand')} className={cx('author-body')}>
                                                <Typography variant='body1'>
                                                    <span className={cx('author-text')}>
                                                        {data.lecturer.description}
                                                    </span>
                                                </Typography>
                                            </div>
                                        </Box>
                                    </Box>
                                </Box>
                                }
                            </div>
                        }
                    </Box>

                    {/*lesson control*/}
                    <Box className="col-4" sx={{ paddingRight: '2rem' }}>
                        <List
                            sx={{ width: '100%', overflowY: 'scroll' }}
                            component="div"
                            className={cx("lesson-control")}
                        >
                            {
                                data.chapters && data.chapters.map((item, index) => {
                                    return <div key={index}>
                                        <ListItemButton
                                            id={`button-${index}`}
                                            onClick={(event) => handleClick(index, event)}
                                            className={cx("chapters")}>
                                            <ListItemText primary={item.name}
                                                primaryTypographyProps={{
                                                    style: {
                                                        fontSize: '2rem',
                                                        lineHeight: '2.4rem',
                                                        textTransform: 'uppercase',
                                                        overflow: "hidden",
                                                        textOverflow: 'ellipsis',
                                                        WebkitLineClamp: 1,
                                                        display: "-webkit-box",
                                                        WebkitBoxOrient: 'vertical',
                                                        maxWidth: '350px'
                                                    }
                                                }}
                                                secondary={`${item.lessons.length} Bài đăng`}
                                                secondaryTypographyProps={{
                                                    style: {
                                                        fontSize: '1.6rem',
                                                        lineHeight: '2.4rem',
                                                        textTransform: 'uppercase',
                                                    }
                                                }}
                                                sx={{ display: 'flex', justifyContent: 'space-between' }}
                                            />
                                            <ExpandMore className={cx('icon', 'icon-more')} />
                                            <ExpandNext className={cx('icon', 'icon-next')} />
                                        </ListItemButton>
                                        <Collapse id={`chapter-${index}`} hidden={true} in={true} timeout="auto"
                                            unmountOnExit>
                                            <List component="div" disablePadding className='row'>
                                                <Box component={'ul'} className='col-12'
                                                    sx={{ listStyle: 'none', flexDirection: 'column', }}>
                                                    {
                                                        item.lessons && item.lessons.map((lesson, i) => (
                                                            <Box key={i}
                                                                 className={cx('row', ' align-items-center', 'lesson-item',`${lessonId===lesson?.id?
                                                                    'active':''}`)}
                                                                 onClick={() => handleSelectLesson(lesson)}
                                                                 component={'li'}
                                                                 sx={{cursor: 'pointer', marginBottom: '1rem'}}>
                                                                <ListItemIcon className='col-1' sx={{minWidth: '20px'}}>
                                          <PlayIcon sx={{
                                                                        width: '3rem',
                                                                        height: '3rem',
                                                                        color: '#000'
                                                                    }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={lesson.name} className='col-9'
                                                                    primaryTypographyProps={{
                                                                        style: {
                                                                            fontSize: '1.8rem',
                                                                            color: '#000',
                                                                            overflow: "hidden",
                                                                            textOverflow: 'ellipsis',
                                                                            WebkitLineClamp: 2,
                                                                            display: "-webkit-box",
                                                                            WebkitBoxOrient: 'vertical',
                                                                            maxWidth: '350px'
                                                                        }
                                                                    }} />
                                                                {/*<ListItemText primary={"time"} className='col-2'*/}
                                                                {/*              primaryTypographyProps={{*/}
                                                                {/*                  style: {*/}
                                                                {/*                      fontSize: '1.8rem',*/}
                                                                {/*                      color: '#757575'*/}
                                                                {/*                  }*/}
                                                                {/*              }}/>*/}
                                                            </Box>
                                                        ))
                                                    }
                                                </Box>
                                            </List>
                                        </Collapse>
                                    </div>
                                })
                            }
                        </List>
                    </Box>
                </div>
            </div>
        </div>
    </div>
}

export default CourseActive;