import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";


const email = localStorage.getItem("email")
const Private = ({children}) => {
    const {person}=useRole()
   
    if(person&&email){
        return children
    }else{

        <Navigate to={"/"}></Navigate>

    }

   
};

export default Private;