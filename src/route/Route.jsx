import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main-layout/MainLayout";
import ErrorPage from "../error-page/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register"

const Route = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: `/`,
                element: <Home></Home>
            },
            {
                path: `/login`,
                element: <Login></Login>
            },
            {
                path: `/register`,
                element: <Register></Register>
            }
        ]
    }
]) 

export default Route;