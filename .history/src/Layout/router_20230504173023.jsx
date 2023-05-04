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
        {path:'/chefSingle',element:<ChefSingle/>}
    ]
}]);
export default router;