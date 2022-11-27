import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../../Dashboard/AllBuyers";
import AllSellers from "../../Dashboard/AllSellers";
import MyOrders from "../../Dashboard/MyOrders";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import DisplayError from "../../pages/DisplayError/DisplayError";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import SingleCard from "../../pages/SingleCard/SingleCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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

            {
                path: '/category',
                element: <PrivateRoute><SingleCard></SingleCard></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/product'),
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },

            {
                path: '/dashboard/buyers',
                element: <AllBuyers></AllBuyers>
            },

            {
                path: '/dashboard/sellers',
                element: <AllSellers></AllSellers>
            }
        ]
    }
])