import SubNav from "~/components/sub-nav";
import TabDetail from "~/components/tabs";
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

import {useState} from "react";
import ExpandNext from '@mui/icons-material/NavigateNext';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';
import {Link} from "react-router-dom";
import LockIcon from '@mui/icons-material/WatchLater';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import TaskIcon from "@mui/icons-material/TaskAltOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebsiteIcon from "@mui/icons-material/LanguageOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutlineOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

const cx = classNames.bind(style);


function CourseActive({data}) {
    const arrayChapter = data.chapters;
    const [open, setOpen] = useState(0);
    const [lesson, setLesson] = useState(arrayChapter[0].lessons[0]);


    const handleClick = (index) => {
        setOpen(index);
    };

    const handleClickLesson = (e, lessonItem) => {
        const liElement = e.target.parentElement.parentElement;
        liElement.backgroundColor = '#ccc';
        setLesson(lessonItem)
    }


    const getCategoryParent = (data) => {
        const result = {};
        if (data?.category) {
            result.name = data.category.name
            result.slug = data.category.slug
        }
        if (data?.category?.category) {
            result.name = data.category.category.name
            result.slug = data.category.category.slug
        }
        if (data?.category?.category?.category) {
            result.name = data.category.category.category.name
            result.slug = data.category.category.category.slug
        }
        if (data?.category?.category?.category?.category) {
            result.name = data.category.category.category.category.name
            result.slug = data.category.category.category.category.slug
        }

        return result
    }

    const handleSeeMore = (e) => {
        //     here
    }

    const parentCategory = getCategoryParent(data);

    return <div className=''>
        <div className={cx('study-wrapper')}>
            <Box className={cx('sub-nav')}>
                <SubNav data={data}/>
            </Box>

            <div className={cx('content')}>
                <div className="row g-0">
                    <Box className="col-8" sx={{paddingLeft: '4rem', paddingRight: '2rem'}}>
                        <div className={cx('lesson-detail')}>
                            <iframe width="100%" height="500" src={lesson.video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

                            <h2 className={cx('lesson-name')}>{lesson.name.substring(lesson.name.indexOf(":") + 1)}</h2>
                            <Box sx={{marginBottom: '3rem'}}>
                                <Box component={Link} to={`/category/${parentCategory.slug}`}
                                     className={cx('lesson-tag')}>{parentCategory.name}</Box>
                            </Box>

                            {/*details*/}
                            <Box className='row' sx={{margin: '1.5rem 0 4rem'}}>
                                <div className="row col-5 align-items-center">
                                    <Typography variant='body1' className={cx('wrapper', 'col-4')}>
                                        <LockIcon sx={{
                                            width: '3rem',
                                            height: '3rem',
                                            color: '#FCCF00'
                                        }}/>
                                        <span className={cx('lesson-time')}>{lesson.time}</span>
                                    </Typography>
                                    <Typography variant='body1' className={cx('wrapper', 'col-3')}>
                                        <PlayArrowIcon sx={{
                                            width: '3rem',
                                            height: '3rem',
                                            color: '#FCCF00'
                                        }}/>
                                        <span className={cx('number-study')}>895</span>
                                    </Typography>
                                    <Typography variant='body1' className={cx('wrapper', 'col-5')}>
                                        <StarIcon sx={{
                                            width: '3rem',
                                            height: '3rem',
                                            color: '#FCCF00'
                                        }}/>
                                        <span className={cx('evolution')}>4.7 Đánh giá</span>
                                    </Typography>
                                </div>
                                <div className="row col-7 align-items-center">
                                    <Typography variant='body1' className={cx('wrapper', 'col-4')}>
                                        <span className={cx('lesson-create')}>Thời gian tạo: 22/05/2019</span>
                                    </Typography>
                                    <Typography variant='body1' className={cx('wrapper', 'col-4')}>
                                        <span className={cx('lesson-update')}>Thời gian cập nhật: 13/03/2022</span>
                                    </Typography>
                                    <Typography variant='body1' className={cx('wrapper', 'col-4')}>
                                        <span className={cx('lesson-evolution')}>Chia sẻ đánh giá của bạn</span>
                                    </Typography>
                                </div>
                            </Box>

                            {/*tabs*/}
                            <TabDetail/>

                            <Grid className={cx('benefit')}>
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
                            </Grid>

                            <Box className={cx('author')}>
                                <h2 className={cx('author-title')}>Giảng viên</h2>
                                <Box className={cx('author-wrapper')}>
                                    <div className={cx('author-image')}>
                                        <Badge>
                                            <Avatar
                                                src="https://cdn7.edumall.vn/uploads/images/instructors/le-tham-duong.png"
                                                alt='author'
                                                sx={{width: 120, height: 120}}/>
                                        </Badge>
                                    </div>
                                    <Box className={cx('author-info')}>
                                        <div className={cx('author-header')}>
                                            <div className={cx('author-profile')}>
                                                <Box component={Link} to={'/'} className={cx('author-link')}>Lê Thẩm
                                                    Dương</Box>
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
                                                    data.author.description.map((item, index) => {
                                                        if (index === 0) {
                                                            return <span className={cx('author-text')} key={index}>
                                                                        {item}
                                                                    </span>
                                                        } else {
                                                            return <span className={cx('author-text', 'hidden')}
                                                                         key={index}>
                                                                        {item}
                                                                    </span>
                                                        }
                                                    })
                                                }
                                                <span className={cx('author-more')}
                                                      onClick={(e) => handleSeeMore(e)}>Xem thêm</span>

                                            </Typography>
                                        </div>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </Box>

                    {/*lesson control*/}
                    <Box className="col-4" sx={{paddingRight: '2rem'}}>
                        <List
                            sx={{width: '100%', overflowY: 'scroll'}}
                            component="div"
                            className={cx("lesson-control")}
                        >
                            {
                                arrayChapter.map((item, index) => {
                                    return <div key={index}>
                                        <ListItemButton onClick={() => handleClick(index)} sx={{paddingRight: 0}}>
                                            <ListItemText primary={item.name}
                                                          primaryTypographyProps={{
                                                              style: {
                                                                  fontSize: '2rem',
                                                                  lineHeight: '2.4rem',
                                                                  textTransform: 'uppercase',
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
                                                          sx={{display: 'flex', justifyContent: 'space-between'}}
                                                          className={cx(`${open === index ? 'active' : ''}`)}/>
                                            {(open === index) ?
                                                <ExpandMore className={cx(`${open === index ? 'active' : ''}`)}
                                                            sx={{
                                                                width: '3rem',
                                                                height: '3rem'
                                                            }}/> :
                                                <ExpandNext className={cx('icon')}
                                                            sx={{
                                                                width: '3rem',
                                                                height: '3rem'
                                                            }}/>}
                                        </ListItemButton>
                                        <Collapse in={open === index} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding className='row'>
                                                <Box component={'ul'} className='col-12'
                                                     sx={{listStyle: 'none', flexDirection: 'column',}}>
                                                    {
                                                        item.lessons.map((lItem, lIndex) => (
                                                            <Box key={lIndex} className='row align-items-center '
                                                                 onClick={(e) => handleClickLesson(e, lItem)}
                                                                 component={'li'}
                                                                 sx={{cursor: 'pointer', marginBottom: '1rem'}}>
                                                                <ListItemIcon className='col-1' sx={{minWidth: '20px'}}>
                                                                    <PlayIcon sx={{
                                                                        width: '3rem',
                                                                        height: '3rem',
                                                                        color: '#000'
                                                                    }}/>
                                                                </ListItemIcon>
                                                                <ListItemText primary={lItem.name} className='col-9'
                                                                              primaryTypographyProps={{
                                                                                  style: {
                                                                                      fontSize: '1.8rem',
                                                                                      color: '#000'
                                                                                  }
                                                                              }}/>
                                                                <ListItemText primary={lItem.time} className='col-2'
                                                                              primaryTypographyProps={{
                                                                                  style: {
                                                                                      fontSize: '1.8rem',
                                                                                      color: '#757575'
                                                                                  }
                                                                              }}/>
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