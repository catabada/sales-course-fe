import CourseActive from "~/pages/client/detail/CourseActive";
import CourseInactive from "~/pages/client/detail/CourseInactive";
import {CourseData, User} from '~/services/fakeData';
import {useParams} from "react-router-dom";

function Detail() {
    const {code} = useParams();

    const myCourse = CourseData.courses;
    const thisCourse = myCourse.find((course) => course.slug === code);


    const active = (User.id === CourseData.user.id);
    return (active ? <CourseActive data={thisCourse}/> : <CourseInactive data={thisCourse}/>)
}

export default Detail;
