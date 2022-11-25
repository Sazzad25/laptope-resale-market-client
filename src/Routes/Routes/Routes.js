import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import DisplayError from "../../pages/DisplayError/DisplayError";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <DisplayError></DisplayError>
    }
])