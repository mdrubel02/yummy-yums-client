import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import Blog from "../Components/Blog/Blog";




const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/login', element: <Login /> },
        {path:'/register',element:<Register />},
        {path:'/blog',element:<Blog />},
    ]
}]);
export default router;