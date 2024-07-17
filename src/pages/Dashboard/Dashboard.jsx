import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import useRole from "../../hooks/useRole";


const Dashboard = () => {

    const navigate = useNavigate()

    const {person,loading}=useRole()

    if(loading){

        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-lg"></span>
        </div>
    }

    const handleSignOut=()=>{
        navigate("/")
    }

    if(person?.role==="noRule"){

        return   <div className="flex justify-center items-center min-h-screen text-2xl font-semibold text-center space-y-5">
          <h1>Request Pending!</h1>
          <h1>Wait for admin to accept</h1>
          </div>
    }



    return (
        <div className="flex">
<div>
    
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
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
            <li><NavLink to={"/dashboard/transaction"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Transaction List</NavLink></li>

          
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