import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsManager from "../Pages/JoinAsManager/JoinAsManager";
import Dashboard from "../Layout/Dashboard";
import AllAssets from "../Pages/Dashboard/Manager/AllAssets";

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
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            //employees
            //managers routes
            {
                path: 'allAssets',
                element: <AllAssets></AllAssets>
            }
        ]
    }
  ]);
  