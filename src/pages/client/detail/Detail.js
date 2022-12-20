import CourseActive from "~/pages/client/detail/CourseActive";
import CourseInactive from "~/pages/client/detail/CourseInactive";
import { CourseData, User, CourseList } from '~/services/fakeData';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesAllFieldByCodeName } from "~/redux/course/courseSlice";
import { requestAddWishlist, requestGetWishlist } from "~/redux/wishlist/wishlistSlice";
import Loading from "~/components/loading/Loading";
import MySwal from "~/constants/MySwal";

function Detail() {
    const { code } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { coursesAllField, isLoadingCourse } = useSelector(state => state.courseReducer)
    const userId = useSelector(state => state.authReducer.userId)
    const { accessToken } = useSelector(state => state.authReducer)
    const { isLoadingAddWishList } = useSelector(state => state.wishlistReducer)

    const { user } = useSelector(state => state.userReducer)
    const { myCourse } = useSelector(state => state.myCourseReducer)

    const [active, setActive] = useState(!!myCourse ? !!myCourse.content.find(item => item.course.codeName === code) : false);

    useEffect(() => {
        dispatch(getCoursesAllFieldByCodeName(code))
    }, [dispatch, active])

    const callBackParentWish = (course, activeHeart) => {
        if (!!user) {
            dispatch(requestAddWishlist({
                wishlist: {
                    userInfo: {
                        userId: userId,
                    },
                    course: {
                        ...course
                    }
                },
                accessToken: accessToken
            }))
            dispatch(requestGetWishlist({
                search: {
                    userInfo: {
                        userId: userId
                    }
                },
                accessToken: accessToken
            }))
        } else {
            MySwal.fire({
                title: 'Bạn cần đăng nhập để kích hoạt khóa học',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Đăng nhập',
                cancelButtonText: 'Hủy',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/auth/signin')
                }
            })
        }
    }

    return (
        <>
            {
                active
                    ? (coursesAllField && <CourseActive data={coursesAllField} />)
                    : (coursesAllField && <CourseInactive data={coursesAllField} callBackParentWish={callBackParentWish} />)
            }
            <Loading open={isLoadingCourse || isLoadingAddWishList} />
        </>

    )


}

export default Detail;
