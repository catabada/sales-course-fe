import style from './CardCourse.module.scss';
import classNames from 'classnames/bind';
import {Box, Card, CardActionArea, CardContent, CardMedia, MobileStepper, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import PriceCourse from "~/components/card-course/PriceCourse";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useDispatch, useSelector} from "react-redux";
import {requestAddWishlist, requestDeleteWishlist, requestGetWishlist} from "~/redux/wishlist/wishlistSlice";
import {useEffect, useState} from "react";

const cx = classNames.bind(style);

function countLesson(data) {
    return data.reduce((accumulator, currentValue) => accumulator + currentValue.lessons.length, 0)
}

function CardCourse(props) {
    const {data} = props
    // const numberLesson = countLesson(data.chapters);
    // const currentLesson = data.currentLesson;
    // const percent = ((currentLesson / numberLesson) * 100).toFixed()
    // const progressPercent = Number.parseInt(percent);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.authReducer.userId)

    const [active, setActive] = useState(false);


    const handleAddFavorite = (e, data) => {
        e.preventDefault();
        dispatch(requestAddWishlist({
            appUser: {
                id: userId,
            },
            course: {
                ...data
            }
        }))
    }

    const handleRemoveFavorite = (e, data) => {
        e.preventDefault();
        dispatch(requestDeleteWishlist({
            appUser: {
                id: userId,
            },
            course: {
                ...data
            }
        }))
    }

    const progress = false
    return <Card className={cx('card')} sx={{boxShadow: '0px 0px 15px rgb(84 84 84 /25%)', borderRadius: '20px'}}>
        <CardActionArea
            component={Link} to={`/course/${data.codeName}`}
        >
            <CardMedia
                component='img'
                height='160'
                image={`/images/${data.image}`}
                alt='green iguana'
            />
            <CardContent className={cx('card-content')}>
                <Typography
                    gutterBottom
                    variant='h5'
                    className={cx('card-category')}>
                    {/*{category.name}*/}
                </Typography>
                <Typography
                    variant='h4'
                    className={cx('card-title')}>
                    {data.name}
                </Typography>
                <Typography
                    variant='body2'
                    className={cx('card-description')}>
                    {data.description}
                </Typography>
                <Typography
                    variant='body2'
                    className={cx('card-author')}>
                    {data.lecturer.name}
                </Typography>

                {
                    progress ?
                        <div className={cx("progress")}>
                            {/*<MobileStepper steps={100} variant="progress" activeStep={progressPercent}*/}
                            {/*               className={cx("progress-percent")}*/}
                            {/*               defaultValue={0}*/}
                            {/*               LinearProgressProps={{*/}
                            {/*                   style: {*/}
                            {/*                       width: '100%',*/}
                            {/*                       backgroundColor: '#ccc',*/}
                            {/*                       borderRadius: '4px',*/}
                            {/*                       height: '5px',*/}
                            {/*                   },*/}

                            {/*               }}*/}
                            {/*/>*/}
                            {/*<span className={cx('percent')}>{percent}%</span>*/}
                        </div>
                        :
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <PriceCourse
                                price={data.price}
                                discount={data.discount}
                            />
                            <Box sx={{marginLeft: 'auto', marginRight: '1rem'}}>
                                {
                                    active ?
                                        <FavoriteIcon
                                            onClick={(e) => handleRemoveFavorite(e, data)}
                                            className={cx('favorite-icon', 'icon-fill')}/>
                                        :
                                        <FavoriteBorderIcon
                                            onClick={(e) => handleAddFavorite(e, data)}
                                            className={cx('favorite-icon', 'icon-outline')}/>
                                }


                            </Box>
                        </Box>
                }
            </CardContent>
        </CardActionArea>
    </Card>
}

export default CardCourse