import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";
import toast, { Toaster } from "react-hot-toast";


const MoneyRequest = () => {
   

    const axiosSecure=useAxiosSecure()

    const {person}=useRole()


    const {data,isLoading,refetch}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{

            const res = await  axiosSecure.get(`/moneyRequestAgent?mobile=${person?.mobile}`)

            return res.data
        }
    })


    if(isLoading){
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }


    const handleAccept =(item)=>{
        const type = item.type
        const amount = item.amount
        const senderMobile= item.senderMobile
        const receiver = item.receiver
        const id = item._id
        

        axiosSecure.put(`/acceptRequest?type=${type}&amount=${amount}&senderMobile=${senderMobile}&receiver=${receiver}&id=${id}`)
        .then(res=>{
           if(res.data.message="success"){
            toast.success("Accepted")
            refetch()
           }
        })
    }

 

   




    return (
        <div className="p-5">
        <Toaster></Toaster>


        <div className="overflow-auto rounded-lg shadow-xl mt-10">
<table className="w-full">
<thead className="bg-gray-50 border-2 border-gray-200">
  <tr>
    <th className="p-3 text-sm font-semibold tracking-wide text-left"></th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Sender</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Type</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Amount</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Action</th> 
   
  </tr>
</thead> 
<tbody className="divide-y divide-gray-100">

    {
        data?.map((item,index)=>   <tr key={index}>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index+1}</td> 
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.senderMobile}</td> 
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.type}</td> 
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.amount}</td> 
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.date}</td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><button onClick={()=>handleAccept(item)} className="btn btn-success btn-sm text-white">Accept</button></td>
       
       
      </tr>)
    }
</tbody> 
</table>
</div>
        
    </div>
    );
};

export default MoneyRequest;