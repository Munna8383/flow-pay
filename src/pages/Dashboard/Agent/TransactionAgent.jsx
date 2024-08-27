import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useRole from '../../../hooks/useRole';
import { Toaster } from 'react-hot-toast';

const TransactionAgent = () => {
    const axiosSecure=useAxiosSecure()

    const {person}=useRole()

    const {data,isLoading}=useQuery({
        queryKey:["TransactionAgent"],
        queryFn:async()=>{

            const res = await axiosSecure.get(`/transactionAgent?mobile=${person.mobile}`)

            return res.data
        }
    })

    console.log(data)




    return (
        <div className="p-5">
        <Toaster></Toaster>


        <div className="overflow-auto rounded-lg shadow-xl mt-10">
<table className="w-full">
<thead className="bg-gray-50 border-2 border-gray-200">
  <tr>
    <th className="p-3 text-sm font-semibold tracking-wide text-left"></th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Sender</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Receiver</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Amount</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th> 
    <th className="p-3 text-sm font-semibold tracking-wide text-left">Type</th> 
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
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.type}</td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.status}</td>
       
       
      </tr>)
    }
</tbody> 
</table>
</div>
        
    </div>
    );
};

export default TransactionAgent;