//Layouts
import {HeaderOnly, AdminLayout} from '~/layouts';
// Pages
import Home from '~/pages/client/home';
import Category from '~/pages/client/category';
import {Forget, SignIn, SignUp} from '~/pages/client/auth';
import Course from '~/pages/client/course';
import Detail from '~/pages/client/detail';
import Dashboard from "~/pages/admin/dashboard";
import User from "~/pages/admin/user";
import MyCourse from "~/pages/client/my-course";
import WishList from "~/pages/client/wish-list";

const publicRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/home',
        component: Home,
        exact: true,
    },
    {
        path: '/category',
        component: Category,
        exact: true,
    },
    {
        path: '/auth/signin',
        component: SignIn,
        layout: HeaderOnly,
        exact: true,
    },
    {
        path: '/auth/signup',
        component: SignUp,
        layout: HeaderOnly,
        exact: true,
    },
    {
        path: '/auth/forget',
        component: Forget,
        layout: HeaderOnly,
        exact: true,
    },
    {
        path: '/category/:codeCategory',
        component: Course,
        exact: false,
    },
    {
        path: '/course/:code',
        component: Detail,
        exact: true,
    },
    {
        path: '/my-courses',
        component: MyCourse,
        exact: true,
    },
    {
        path: '/wishlist',
        component: WishList,
        exact: true,
    },
    {
        path: '/admin/dashboard',
        component: Dashboard,
        layout: AdminLayout,
        exact: true,
    },
    {
        path: '/admin/user',
        component: User,
        layout: AdminLayout,
        exact: true,
    },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
