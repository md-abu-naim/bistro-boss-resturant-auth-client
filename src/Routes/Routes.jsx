import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <PrivateRoutes><Menu /></PrivateRoutes>
        },
        {
          path: '/order/:category',
          element: <PrivateRoutes><Order /></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signUp',
          element: <SignUp />
        },
      ]
    },
  ]);

  export default router;