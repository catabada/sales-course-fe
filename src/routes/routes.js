// config
import config from '~/config';
//Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/client/Home';
import Category from '~/pages/client/Category';
import { Forget, SignIn, SignUp } from '~/pages/client/Auth';
import Products from '~/pages/client/Products';

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
        path: config.routes.product,
        component: Products,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
