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
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Dashboard/Common/Profile";
import RequestAsset from "../Pages/Dashboard/Employee/RequestAsset";
import RequestedAssets from "../Pages/Dashboard/Employee/RequestedAssets";
import MyEmployeeList from "../Pages/Dashboard/Manager/MyEmployeeList";
import AddAnEmployee from "../Pages/Dashboard/Manager/AddAnEmployee";
import AllRequests from "../Pages/Dashboard/Manager/AllRequests";
import AddAnAsset from "../Pages/Dashboard/Manager/AddAnAsset";
import MyTeam from "../Pages/Dashboard/Employee/MyTeam";
import AdminRoute from "./AdminRoute";
import UpdateAnAsset from "../Pages/Dashboard/Manager/UpdateAnAsset";
import UpgradePackage from "../Pages/Dashboard/Manager/UpgradePackage"
import BuyPackage from "../Pages/Dashboard/Manager/BuyPackage";
import Payment from "../Pages/Dashboard/Manager/Payment/Payment";
import UpdateProfile from "../Pages/Dashboard/Common/UpdateProfile";

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
        },
        {
            path: 'upgradePackage',
            element: <UpgradePackage></UpgradePackage>
        },
        // {
        //     path: 'payment',
        //     element: <Payment></Payment>
        // },
        {
            path: 'buyPackage/:id',
            element: <BuyPackage></BuyPackage>,
            loader: ({params}) =>fetch(`https://asset-track-pro-server.vercel.app/packages/${params.id}`)
        }
    ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>,
        children: [
            //manager routes
            {
                path: 'allAssets',
                element: <AllAssets></AllAssets>
            },
            {
                path: 'addAnAsset',
                element: <AdminRoute>
                            <AddAnAsset></AddAnAsset>
                        </AdminRoute>
            },
            {
                path: 'updateAsset/:id',
                element: <AdminRoute>
                            <UpdateAnAsset></UpdateAnAsset>
                         </AdminRoute>,
                loader: ({params}) =>fetch(`https://asset-track-pro-server.vercel.app/assets/${params.id}`)
                         
            },
            {
                path: 'allRequests',
                element: <AllRequests></AllRequests>
            },
            {
                path: 'myEmployeeList',
                element: <MyEmployeeList></MyEmployeeList>
            },
            {
                path: 'addAnEmployee',
                element: <AdminRoute>
                            <AddAnEmployee></AddAnEmployee>
                         </AdminRoute>
            },
            //employee routes
            {
                path: 'myTeam',
                element: <MyTeam></MyTeam>
            },
            {
                path: 'requestAsset',
                element: <RequestAsset></RequestAsset>
            },
            {
                path: 'requestedAssets',
                element: <RequestedAssets></RequestedAssets>
            },
            //common----
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                // path: 'updateProfile/:email',
                path: 'updateProfile',
                element: <UpdateProfile></UpdateProfile>,
                // loader: ({params}) =>fetch(`https://asset-track-pro-server.vercel.app/updateProfile/${params.email}`)
            }
        ]
    }
  ]);
  