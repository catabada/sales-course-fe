//Layouts
import { HeaderOnly, AdminLayout } from '~/layouts';
// Pages
import Home from '~/pages/client/home';
import Category from '~/pages/client/category';
import { Forget, SignIn, SignUp } from '~/pages/client/auth';
import Course from '~/pages/client/course';
import Detail from '~/pages/client/detail';
import MyCourse from "~/pages/client/my-course";
import WishList from "~/pages/client/wish-list";
import Profile from "~/pages/client/profile";
import Cart from "~/pages/client/cart";
import Payment from "~/pages/client/payment";

// Admin
import Dashboard from "~/pages/admin/dashboard";
import User from "~/pages/admin/user";

import CheckoutSuccess from '~/pages/client/payment/CheckoutSuccess';

import AdminCourse from "~/pages/admin/course";
import AdminCategory from "~/pages/admin/category";
import NotFoundPage from '~/pages/error/404/NotFoundPage';
import AuthorizationPage from '~/pages/error/403/AuthorizationPage';



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
        path: '/cart',
        component: Cart,
        exact: true,
    },
    {
        path: '/:type/payment',
        component: Payment,
        exact: true,
    },
    {
        path: '/error/403',
        component: AuthorizationPage,
        layout: HeaderOnly,
        exact: true,
    },
    {
        path: '*',
        component: NotFoundPage,
        layout: HeaderOnly,

    }, 


];

const privateRoutes = [
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
        path: '/profile',
        component: Profile,
        exact: true,
    },
    {
        path: '/payment/response/:payment',
        component: CheckoutSuccess,
        exact: true,
        layout: HeaderOnly,
    },

];

const adminRoutes = [
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
    {
        path: '/admin/course',
        component: AdminCourse,
        layout: AdminLayout,
        exact: true,
    },
    {
        path: '/admin/category',
        component: AdminCategory,
        layout: AdminLayout,
        exact: true,
    },
    {
        path: '/admin/dashboard',
        component: Dashboard,
        layout: AdminLayout,
        exact: true,
    },

];

export { publicRoutes, privateRoutes, adminRoutes };
