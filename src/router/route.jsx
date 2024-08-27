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
import Balance from "../pages/Dashboard/User/Balance";
import TransactionUser from "../pages/Dashboard/User/TransactionUser";
import AgentBalance from "../pages/Dashboard/Agent/AgentBalance";
import TransactionAgent from "../pages/Dashboard/Agent/TransactionAgent";
import MoneyRequest from "../pages/Dashboard/Agent/MoneyRequest";
import WelcomeDashboard from "../pages/Dashboard/WelcomeDashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome></Welcome>,
      errorElement:<Error></Error>,
    },
    // admin route
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      errorElement:<Error></Error>,
      children:[
        // admin Routes
        {
          path:"dashboard",
          element:<WelcomeDashboard></WelcomeDashboard>

        },
        {
          path:"acceptRequest",
          element:<Private><AcceptRequest></AcceptRequest></Private>
          
        },
        {
          path:"transactionList",
          element:<Private><TransactionList></TransactionList></Private>
        },
        // user route
        {
          path:"sendMoney",
          element:<Private><SendMoney></SendMoney></Private>
        },
        {
          path:"cashOut",
          element:<Private><CashOut></CashOut></Private>
        },
        {
          path:"cashIn",
          element:<Private><CashIn></CashIn></Private>
        },
        {
          path:"transaction",
          element:<Private><TransactionUser></TransactionUser></Private>
        },
        {
          path:"balance",
          element:<Private><Balance></Balance></Private>
        },
        // agent Router

        {
          path:"agentBalance",
          element:<AgentBalance></AgentBalance>
        },
        {
          path:"transactionAgent",
          element:<TransactionAgent></TransactionAgent>
        },
        {
          path:"moneyRequest",
          element:<MoneyRequest></MoneyRequest>
        }
      ]

    }
  ]);




