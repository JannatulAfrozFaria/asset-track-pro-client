import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsManager from "../Pages/JoinAsManager/JoinAsManager";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/joinAsEmployee',
            element: <JoinAsEmployee></JoinAsEmployee>
        },
        {
            path: '/joinAsManager',
            element: <JoinAsManager></JoinAsManager>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
    ]
    },
  ]);
  