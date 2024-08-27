import toast, { Toaster } from "react-hot-toast";
import useRole from "../../../hooks/useRole";
import moment from "moment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const SendMoney = () => {
    const {person,refetch}=useRole()

    const axiosSecure = useAxiosSecure()


   const handleSendMoney=e=>{

    e.preventDefault()

    const pin = e.target.pin.value

    let amount = parseInt( e.target.amount.value)
    const receiver = e.target.receiver.value
    const date  =moment(new Date()).format("MMM Do YY")
    const name = person?.name
    const mobile = person?.mobile
    const email = person?.email
    const role = person?.role





    if(!amount || !receiver){
        return toast.error("Please Fill All Information")
    }


    if(amount<50){

       return toast.error("Amount Must be 50 and above")

    }

    if(amount>100){
        amount = amount+5
    }

     const data = {amount,receiver,date,name,mobile,email,role,pin}



     axiosSecure.post("/sendMoney",data)
     .then(res=>{
        if(res.data.insertedId){
            toast.success("Send Money Successful")
            e.target.reset()
            refetch()
        }else{
            toast.error("Send Money Unsuccessful")
        }
     })





   }




    return (
        <div className="flex justify-center items-center p-10">
            <div>
                <Toaster></Toaster>
                <h1 className="text-3xl font-semibold text-center">Send Money</h1>


                <div className="space-y-5 p-10 mt-10 shadow-2xl shadow-emerald-700">
                    <h1 className="text-center font-semibold">Provide Required Information</h1>
                    <form onSubmit={handleSendMoney} className="space-y-3">
                    <input type="number" placeholder="Receiver Number" name="receiver" className="input input-bordered  text-center w-full" />
                    <input type="number" placeholder="Amount" name="amount" className="input input-bordered  text-center w-full" />
                    <input type="number" placeholder="PIN" name="pin" className="input input-bordered  text-center w-full" />
                    <br />
                    <button type="submit" className="btn btn-accent w-full text-white">Send</button>
                    </form>
                    <p className="text-center font-semibold">Your Balance: {person?.balance} Taka</p>
                </div>
            </div>
            
        </div>
    );
};

export default SendMoney;