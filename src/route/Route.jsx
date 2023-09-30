import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main-layout/MainLayout";
import ErrorPage from "../error-page/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register"
import PrivateRoute from "../components/private-route/PrivateRoute";
import Orders from "../components/Orders";

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
            },
            {
                path: `/orders`,
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    }
]) 

export default Route;