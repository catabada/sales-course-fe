import CourseActive from "~/pages/client/detail/CourseActive";
import CourseInactive from "~/pages/client/detail/CourseInactive";
import {CourseData, User, CourseList} from '~/services/fakeData';
import {useParams} from "react-router-dom";

function Detail() {
    const {code} = useParams();
    // user login
    const user = CourseData.user.id === User.id;
    // get my course of user or course list
    let activeCourse = true;
    let courses
    if (user) {
        courses = CourseData.courses;
    } else {
        activeCourse = false;
        courses = CourseList;
    }

    // check my course list contain course:slug
    let thisCourse = courses.find((course) => course.slug === code);
    // if undefined
    if (thisCourse === undefined) {
        activeCourse = false;
        thisCourse = CourseList.find((course) => course.slug === code)
    }

    return (activeCourse ? <CourseActive data={thisCourse}/> : <CourseInactive data={thisCourse}/>)
}

export default Detail;
