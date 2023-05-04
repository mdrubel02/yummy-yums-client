import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import Blog from "../Components/Blog/Blog";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Chefs from "../Pages/Chefs/Chefs";
import ChefSingle from "../Pages/Chefs/ChefSingle/ChefSingle";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/login', element: <Login /> },
        {path:'/register',element:<Register />},
        {path:'/blog',element:<Blogs/>},
        {path:'/chefs',element:<Chefs/>},
        {path:'/chefSingle/:id',
        loader: async ({ params }) => {
            return fetch(`https://yummy-yums-server-mdrubel02.vercel.app/chefSingle/${params.id}`)
        },
        element:<PrivateRoute><ChefSingle/></PrivateRoute>},
    ]
}]);
export default router;