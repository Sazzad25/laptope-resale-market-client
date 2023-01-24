import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Dashboard/AddProduct";
import AllBuyers from "../../Dashboard/AllBuyers";
import AllSellers from "../../Dashboard/AllSellers";
import MyOrders from "../../Dashboard/MyOrders";
import MyProducts from "../../Dashboard/MyProducts";
import Payment from "../../Dashboard/Payment";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import DisplayError from "../../pages/DisplayError/DisplayError";
import Animation from "../../pages/Home/Animation/Animation";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import SingleCard from "../../pages/SingleCard/SingleCard";


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
                path: '/range',
                element: <Category></Category>
            },

            {
                path: '/animation',
                element: <Animation></Animation>
            },

            {
                path: '/category',
                element: <SingleCard></SingleCard>,
                loader: () => fetch('https://laptope-resale-market-server.vercel.app/product'),
            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
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
            },

            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },

            {
                path: '/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },

            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://laptope-resale-market-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])