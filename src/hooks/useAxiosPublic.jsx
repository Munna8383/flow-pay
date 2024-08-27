import axios from "axios";



const axiosPublic = axios.create({
    baseURL:"https://flow-pay-server.vercel.app"
})

const useAxiosPublic = () => {

    return axiosPublic
  
    
};

export default useAxiosPublic;