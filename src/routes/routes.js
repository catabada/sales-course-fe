// config
import config from '~/config';
//Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/client/Home';
import Category from '~/pages/client/Category';
import { Forget, SignIn, SignUp } from '~/pages/client/Auth';
import Course from '~/pages/client/Course';
import Detail from '~/pages/client/Detail';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.category,
        component: Category,
    },
    {
        path: config.routes.signIn,
        component: SignIn,
        layout: HeaderOnly,
    },
    {
        path: config.routes.signUp,
        component: SignUp,
        layout: HeaderOnly,
    },
    {
        path: config.routes.forget,
        component: Forget,
        layout: HeaderOnly,
    },
    {
        path: config.routes.course,
        component: Course,
    },
    {
        path: config.routes.detail,
        component: Detail,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
