import {
    createBrowserRouter,
  } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import Private from "./Private";
import AcceptRequest from "../pages/Dashboard/Admin/AcceptRequest";
import TransactionList from "../pages/Dashboard/Admin/TransactionList";
import SendMoney from "../pages/Dashboard/User/SendMoney";
import CashOut from "../pages/Dashboard/User/CashOut";
import CashIn from "../pages/Dashboard/User/CashIn";
import Transaction from "../pages/Dashboard/User/Transaction";
import Balance from "../pages/Dashboard/User/Balance";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome></Welcome>,
      errorElement:<Error></Error>,
    },
    // admin route
    {
      path:"dashboard",
      element:<Private><Dashboard></Dashboard></Private>,
      errorElement:<Error></Error>,
      children:[
        // admin Routes
        {
          path:"acceptRequest",
          element:<AcceptRequest></AcceptRequest>
          
        },
        {
          path:"transaction",
          element:<TransactionList></TransactionList>
        },
        // user route
        {
          path:"sendMoney",
          element:<SendMoney></SendMoney>
        },
        {
          path:"cashOut",
          element:<CashOut></CashOut>
        },
        {
          path:"cashIn",
          element:<CashIn></CashIn>
        },
        {
          path:"transaction",
          element:<Transaction></Transaction>
        },
        {
          path:"balance",
          element:<Balance></Balance>
        }
      ]

    }
  ]);




