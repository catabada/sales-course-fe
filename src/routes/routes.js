// config
import config from '~/config';
//Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/client/Home';
import Category from '~/pages/client/Category';
import { SignIn } from '~/pages/client/Auth';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
