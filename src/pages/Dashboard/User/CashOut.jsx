import toast, { Toaster } from "react-hot-toast";
import useRole from "../../../hooks/useRole";
import moment from "moment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";





const CashOut = () => {

    const {person}=useRole()
    const axiosSecure= useAxiosSecure()



    const handleCashOut=(e)=>{
        e.preventDefault()

        const pin = e.target.pin.value

        let amount = parseInt( e.target.amount.value)
        const agentNumber = e.target.agent.value
        const date  =moment(new Date()).format("MMM Do YY")
        const name = person?.name
        const mobile = person?.mobile
        const email = person?.email
        const role = person?.role


        const data = {amount,agentNumber,date,name,mobile,email,role,pin}

        axiosSecure.post("/cashOut",data)
        .then(res=>{
            if(res.data.insertedId){
                e.target.reset()
                toast.success("Request For Cash Out")

            }else if(res.data.message=="pin mismatch"){
                toast.error("Invalid Pin")
            }else{
                toast.error("Check Input")
            }
        })
    }





    return (
        <div className="flex justify-center items-center p-10">
        <div>
            <Toaster></Toaster>
            <h1 className="text-3xl font-semibold text-center">Cash Out</h1>


            <div className="space-y-5 p-10 mt-10 shadow-2xl shadow-emerald-700">
                <h1 className="text-center font-semibold">Provide Required Information</h1>
                <form onSubmit={handleCashOut} className="space-y-3">
                <input type="number" placeholder="Agent Number" name="agent" className="input input-bordered  text-center w-full" />
                <input type="number" placeholder="Amount" name="amount" className="input input-bordered  text-center w-full" />
                <input type="number" placeholder="PIN" name="pin" className="input input-bordered  text-center w-full" />
                <br />
                <button type="submit" className="btn btn-accent w-full text-white">Cash Out</button>
                </form>
               
            </div>
        </div>
        
    </div>
    );
};

export default CashOut;