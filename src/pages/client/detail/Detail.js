import CourseActive from "~/pages/client/detail/CourseActive";
import CourseInactive from "~/pages/client/detail/CourseInactive";
import {CourseData, User, CourseList} from '~/services/fakeData';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesAllFieldByCodeName} from "~/redux/course/courseSlice";

function Detail() {
    const {code} = useParams();
    const dispatch = useDispatch();
    const coursesAllField = useSelector(state => state.courseReducer.coursesAllField)

    useEffect(() => {
        dispatch(getCoursesAllFieldByCodeName(code))
    }, [dispatch])

    const isMyCourse = true;

    return (
        <>
            {
                isMyCourse
                    ? (coursesAllField && <CourseActive data={coursesAllField}/>)
                    : (coursesAllField && <CourseInactive data={coursesAllField}/>)
            }
        </>

    )


}

export default Detail;
