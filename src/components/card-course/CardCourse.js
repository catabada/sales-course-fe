import style from './CardCourse.module.scss';
import classNames from 'classnames/bind';
import {Card, CardActionArea, CardContent, CardMedia, MobileStepper, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import PriceCourse from "~/components/card-course/PriceCourse";

const cx = classNames.bind(style);

function countLesson(data) {
    return data.reduce((accumulator, currentValue) => accumulator + currentValue.lessons.length, 0)
}

function CardCourse({data, progress}) {
    const numberLesson = countLesson(data.chapters);
    const currentLesson = data.currentLesson;
    const percent = ((currentLesson / numberLesson) * 100).toFixed()
    const progressPercent = Number.parseInt(percent);


    return <Card className={cx('card')} sx={{boxShadow: '0px 0px 15px rgb(84 84 84 /25%)', borderRadius: '20px'}}>
        <CardActionArea component={Link} to={`/course/${data.slug}`}>
            <CardMedia
                component='img'
                height='160'
                image={data.thumbnail}
                alt='green iguana'
            />
            <CardContent className={cx('card-content')}>
                <Typography
                    gutterBottom
                    variant='h5'
                    className={cx('card-category')}>
                    {data.category.name}
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
                    {data.author.user.name}
                </Typography>

                {
                    progress ?
                        <div className={cx("progress")}>
                            <MobileStepper steps={100} variant="progress" activeStep={progressPercent}
                                           className={cx("progress-percent")}
                                           defaultValue={0}
                                           LinearProgressProps={{
                                               style: {
                                                   width: '100%',
                                                   backgroundColor: '#ccc',
                                                   borderRadius: '4px',
                                                   height: '5px',
                                               },

                                           }}
                            />
                            <span className={cx('percent')}>{percent}%</span>
                        </div>
                        :
                        <PriceCourse
                            price={data.price}
                            salesPrice={data.salesPrice}
                            isFree={data.isFree}
                        />
                }

            </CardContent>
        </CardActionArea>
    </Card>
}

export default CardCourse