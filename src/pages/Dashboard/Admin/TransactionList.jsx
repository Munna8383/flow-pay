import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const TransactionList = () => {

    const axiosSecure=useAxiosSecure()

    const {data,isLoading}=useQuery({
        queryKey:["usersForAdmin"],
        queryFn:async()=>{

            const res = await axiosSecure.get(`/transactionList`)

            return res.data
        }
    })


    if(isLoading){
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }




    return (
        <div className="p-5">

            <h1 className="flex justify-center my-5 text-3xl font-semibold">Transaction List</h1>


        <div className="overflow-auto rounded-lg shadow-xl mt-10">
<table className="w-full">
<thead className="bg-gray-50 border-2 border-gray-200">
  <tr>
    <th className="p-3 text-sm font-semibold tracking-wide text-left"></th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Sender</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Receiver</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Amount</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th> 
   
  </tr>
</thead> 
<tbody className="divide-y divide-gray-100">

    {
        data?.map((item,index)=>   <tr key={index}>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index+1}</td> 
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.sender}</td> 
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.receiver}</td> 
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.amount}</td> 
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.date}</td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.status}</td>
       
       
      </tr>)
    }
</tbody> 
</table>
</div>
        
    </div>
    );
};

export default TransactionList;