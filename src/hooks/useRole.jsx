import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";





const useRole = () => {

    const email = localStorage.getItem("email")
    const axiosPublic=useAxiosPublic()

    const {data:person,isLoading,refetch}=useQuery({
        queryKey:["role",email],
        queryFn:async()=>{
            const res = await  axiosPublic.get(`/user?email=${email}`)

            return res.data
        }
    })
    
    return {person,isLoading,refetch}
};

export default useRole;