import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import useRole from "../../hooks/useRole";


const Dashboard =() => {

    const navigate = useNavigate()

    const {person,loading}= useRole()


    const handleReturn=()=>{

      localStorage.removeItem("email")
      localStorage.removeItem("access-token")
        navigate("/")



    }



    if(loading){

        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-lg"></span>
        </div>
    }

    const handleSignOut=()=>{
      localStorage.removeItem("email")
      localStorage.removeItem("access-token")
        navigate("/")
    }

    if(person?.role==="noRule"){

        return   <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
          <h1 className="text-xl font-bold">Request Pending!</h1>
          <h1 className="text-xl font-bold">Wait for Admin to Accept</h1>
          <button onClick={handleReturn} className="btn btn-outline">Return</button>
         
          </div>
    }



    return (
        <div className="flex">
<div>
    
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">
    <MdMenu />
    </label>
  </div>
  <div className="drawer-side">

    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

    <div className="bg-[#0F766E] text-base-content min-h-full w-60 py-5 flex flex-col justify-between">
   <div>
   <div className="flex justify-center gap-2 items-center text-white">
                        <div >
                            <h1 className="text-4xl"><GiTakeMyMoney /></h1>
                        </div>
                        <div>
                            <h1 className="text-3xl">Flow Pay</h1>
                        </div>
                    </div>

                     
     <div className="flex justify-center mt-10 text-white">

        {
            person?.role==="admin" &&  <ul className="menu space-y-3 ">
            {/* Sidebar content here */}
            <li><NavLink to={"/dashboard/acceptRequest"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Accept Request</NavLink></li>
            <li><NavLink to={"/dashboard/transactionList"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Transaction List</NavLink></li>

          
          </ul>
        }

        {
            person?.role==="user" &&  <ul className="menu space-y-3 ">
            {/* Sidebar content here */}
            <li><NavLink to={"/dashboard/sendMoney"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Send Monay</NavLink></li>
            <li><NavLink to={"/dashboard/cashOut"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Cash Out</NavLink></li>
            <li><NavLink to={"/dashboard/cashIn"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Cash In</NavLink></li>
            <li><NavLink to={"/dashboard/balance"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Balance</NavLink></li>
            <li><NavLink to={"/dashboard/transaction"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Transaction</NavLink></li>

          
          </ul>
        }

        {
          person?.role==="agent" && <ul className="menu space-y-3">
          {/* Sidebar content here */}
          <li><NavLink to={"/dashboard/agentBalance"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Agent Balance</NavLink></li>
          <li><NavLink to={"/dashboard/moneyRequest"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Money Request</NavLink></li>
          <li><NavLink to={"/dashboard/transactionAgent"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Transaction</NavLink></li>

        
        </ul>
        }
    

     </div>
   </div>

     <div className="flex justify-center text-white">
        <button className="border-t-2 border-b-2 w-full py-2" onClick={handleSignOut}>Logout</button>
     </div>


    </div>
   
  </div>
</div>
</div>

<div className="flex-1">
    <Outlet></Outlet>
</div>
            
        </div>
    );
};

export default Dashboard;