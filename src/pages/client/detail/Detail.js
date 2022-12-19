import CourseActive from "~/pages/client/detail/CourseActive";
import CourseInactive from "~/pages/client/detail/CourseInactive";
import { CourseData, User, CourseList } from '~/services/fakeData';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesAllFieldByCodeName } from "~/redux/course/courseSlice";
import { requestAddWishlist } from "~/redux/wishlist/wishlistSlice";
import Loading from "~/components/loading/Loading";

function Detail() {
    const { code } = useParams();
    const dispatch = useDispatch();
    const coursesAllField = useSelector(state => state.courseReducer.coursesAllField)
    const userId = useSelector(state => state.authReducer.userId)
    const { user } = useSelector(state => state.userReducer)
    const { myCourse, isLoading } = useSelector(state => state.myCourseReducer)
    const [active, setActive] = useState(!!myCourse ? !!myCourse.content.find(item => item.course.codeName === code) : false);

    useEffect(() => {
        dispatch(getCoursesAllFieldByCodeName(code))
    }, [dispatch, active])

    const handleClickWishlist = (data) => {
        dispatch(requestAddWishlist({
            appUser: {
                id: userId,
            },
            course: {
                ...data
            }
        }))
    }


    const isMyCourse = false;


    return (
        <>
            {
                active
                    ? (coursesAllField && <CourseActive data={coursesAllField} />)
                    : (coursesAllField && <CourseInactive data={coursesAllField} parentCallback={handleClickWishlist} />)
            }
            <Loading open={isLoading} />
        </>

    )


}

export default Detail;
