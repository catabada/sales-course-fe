import Home from "../page/client/home/Home";
import Category from "../page/client/category/Category";

export const publicRoutes = [
    {
        path: "/",
        component: <Home />,
    },
    {
        path: "/category",
        component: <Category />,
    },
]
export const privateRoute = [
    {
        path: "/sign-out",
        component: "Login"
    },
]
