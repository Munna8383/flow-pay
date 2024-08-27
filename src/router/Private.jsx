import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";


const email = localStorage.getItem("email")
const token = localStorage.getItem("access-token")
const Private = ({children}) => {
    const {person}=useRole()
   
    if(person&&email&&token){
        return children
    }
    
    <Navigate to={"/"}></Navigate>

   
};

export default Private;