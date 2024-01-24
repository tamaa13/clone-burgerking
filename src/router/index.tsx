import {
    createBrowserRouter, redirect,
} from "react-router-dom";
import Layouts from "../components/layouts";
import Home from "../pages/Home";
import MenusPage from "../pages/Menus";
import Slug from "../pages/Slug";
import News from "../pages/News";
import LargeOrders from "../pages/LargeOrders";


const router = createBrowserRouter([

    {
        path: "",
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menus",
                element: <MenusPage />
            },
            {
                path: "/news",
                element: <News />,
            },
            {
                path: "/news/v-1",
                element: <Slug />,
            },
            {
                path: "/large-orders",
                element: <LargeOrders />,
            },
        ],
    },
    // {
    //     path: "/login",
    //     element: <Login />,
    //     loader: async () => {
    //         if (localStorage.token) return redirect('/')
    //         return null
    //     },
    // },
    // {
    //     path: "/register",
    //     element: <Register />,
    // }
]);

export default router;