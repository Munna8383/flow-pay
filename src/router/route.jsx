import {
    createBrowserRouter,
  } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
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
          element:<AcceptRequest></AcceptRequest>
          
        },
        {
          path:"transactionList",
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
          element:<TransactionUser></TransactionUser>
        },
        {
          path:"balance",
          element:<Balance></Balance>
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




