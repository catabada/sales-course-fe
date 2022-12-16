import CourseActive from "~/pages/client/detail/CourseActive";
import CourseInactive from "~/pages/client/detail/CourseInactive";
import {CourseData, User, CourseList} from '~/services/fakeData';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesAllFieldByCodeName} from "~/redux/course/courseSlice";
import {requestAddWishlist} from "~/redux/wishlist/wishlistSlice";

function Detail() {
    const {code} = useParams();
    const dispatch = useDispatch();
    const coursesAllField = useSelector(state => state.courseReducer.coursesAllField)
    const userId = useSelector(state => state.authReducer.userId)

    useEffect(() => {
        dispatch(getCoursesAllFieldByCodeName(code))
    }, [dispatch])

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
                isMyCourse
                    ? (coursesAllField && <CourseActive data={coursesAllField}/>)
                    : (coursesAllField && <CourseInactive data={coursesAllField} parentCallback={handleClickWishlist}/>)
            }
        </>

    )


}

export default Detail;
