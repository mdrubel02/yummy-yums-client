import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Components/Home/Home";



const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {path: '/', element:<Home />},
        {path: '/home', element:<Home />}
    ]
}]);
export default router;