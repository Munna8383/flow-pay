import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";


const AcceptRequest = () => {

    const axiosSecure=useAxiosSecure()

    const {data,isLoading,refetch}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{

            const res = await axiosSecure.get("/users")

            return res.data
        }
    })

    const handleAgent=(email)=>{

        axiosSecure.put(`/acceptAgent?agent=${email}`)
        .then(res=>{
            if(res.data.modifiedCount==1 || res.data.matchedCount==1){
                toast.success("accepted")
                refetch()
            }
        })


        
    }
    const handleUser=(email)=>{

        axiosSecure.put(`/acceptUser?user=${email}`)
        .then(res=>{
            if(res.data.modifiedCount==1 || res.data.matchedCount==1){
                toast.success("accepted")
                refetch()
            }
        })


        
    }




    return (
        <div className="p-5">

            <h1>Accept Request</h1>
            <Toaster></Toaster>


            <div className="overflow-auto rounded-lg shadow-xl mt-10">
  <table className="w-full">
    <thead className="bg-gray-50 border-2 border-gray-200">
      <tr>
        <th className="p-3 text-sm font-semibold tracking-wide text-left"></th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Mobile</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Role</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Request For</th> 
       
      </tr>
    </thead> 
    <tbody className="divide-y divide-gray-100">

        {
            data?.map((item,index)=>   <tr key={index}>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index+1}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.name}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.email}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.mobile}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.role}</td>
            {item.requestFor=="Agent" &&  <td><button onClick={()=>handleAgent(item?.email)} className="btn btn-xs text-white btn-primary">Accept Agent</button></td>} 
            {item.requestFor=="User" &&  <td><button onClick={()=>handleUser(item?.email)}  className="btn btn-xs text-white btn-secondary">Accept User</button></td>} 
           
          </tr>)
        }
    </tbody> 
  </table>
</div>
            
        </div>
    );
};

export default AcceptRequest;