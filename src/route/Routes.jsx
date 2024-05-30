import {createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../layout/shared/Secret";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Cart";
import AllUsers from "../layout/dashboard/AllUsers";
import AddItems from "../layout/dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../layout/dashboard/ManageItems";
import UpdateItem from "../layout/dashboard/UpdateItem";
import Payment from "../layout/dashboard/Payment";
import PaymentHistory from "../layout/dashboard/PaymentHistory";
import UserHome from "../layout/dashboard/UserHome";
import AdminHome from "../layout/dashboard/AdminHome";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path: 'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path:'userHome',
          element: <UserHome></UserHome>
        },
        {
          path:'cart',
          element: <Cart></Cart>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },

        

        // admin only routes
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem> </AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-server-two-tau.vercel.app/menu/${params.id}`)
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);