import { GiTakeMyMoney } from "react-icons/gi";
import banner from "../../assets/Images/Blue Gradient Festive Flat Illustration Quote Pinterest Pin.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

  const navigate = useNavigate()

  const axiosPublic = useAxiosPublic()


  const submitRegister = (e)=>{

    e.preventDefault()


    const name = e.target.name.value
    const email = e.target.email.value
    const mobile = e.target.mobile.value
    const category= e.target.category.value
    const pin = e.target.pin.value

    const regex = /^.{5}$/;
    if(!regex.test(pin)){

      return alert("pin must be 5")
    }
    
    const data= {name,email,mobile,pin,category}


    axiosPublic.post("/addUser",data)
    .then(res=>{

      if(res.data.insertedId){
        toast.success("user registered")
        e.target.reset()
      }
    })

  }


  const handleLogin=(e)=>{
    e.preventDefault()


    const emailOrPhone = e.target.emailOrMobile.value 
    const pin = e.target.pin.value

    const data1 = {emailOrPhone,pin}


    axiosPublic.post("/loginUser",data1)
    .then(res=>{
      if(res.data.message=="matched"){
        localStorage.setItem("email",emailOrPhone)
        navigate("/dashboard")
      }else{
        toast.error("incorrect username or password")
      }
    })



  }







    return (
        <div>

            <div className="sm:flex">
              <Toaster></Toaster>

                <div className="w-full sm:w-5/12 min-h-screen bg-teal-700">

                    <div className="flex justify-center gap-2 items-center pt-5 text-white">
                        <div >
                            <h1 className="text-4xl"><GiTakeMyMoney /></h1>
                        </div>
                        <div>
                            <h1 className="text-3xl">Flow Pay</h1>
                        </div>
                    </div>

                    <div className="flex justify-around mt-1 text-white">
                        <Tabs className={"w-full p-5" }>
                            <TabList className={"opacity-80 text-center text-white"}>
                                <Tab>Login</Tab>
                                <Tab>Register</Tab>
                            </TabList>

                            <TabPanel className={"opacity-80"}>
                            <div className="card bg-base-100 opacity-80  shadow-2xl mt-10 lg:mt-1">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Or Mobile Number</span>
          </label>
          <input type="text" name="emailOrMobile" placeholder="Enter Mobile or Email" className="input input-bordered text-black" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Pin</span>
          </label>
          <input type="number" name="pin" placeholder="Enter Pin" className="input input-bordered text-black" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
                            </TabPanel>
                            <TabPanel className={"opacity-80"}>
                            <div className="card bg-base-100 opacity-80  shadow-2xl mt-1 lg:mt-1">
      <form onSubmit={submitRegister} className="card-body">
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  placeholder="Enter Name" className="input input-bordered text-black" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Email</span>
          </label>
          <input type="email"  placeholder="Enter email" className="input input-bordered text-black" name="email" required />
        </div>
       </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
     <div className="form-control ">
          <label className="label">
            <span className="label-text">Enter Mobile Number</span>
          </label>
          <input type="number" placeholder="Enter Mobile" className="input input-bordered text-black" name="mobile" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Pin(5 digit)</span>
          </label>
          <input type="number" placeholder="Enter Pin" className="input input-bordered text-black" name="pin" required />
        </div>
     </div>
        
        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered text-black">
                            <option>User</option>
                            <option>Agent</option>
                        </select>
                    </div>

        
        
        <div className="form-control mt-1">
          <button className="btn btn-primary text-white">Register</button>
        </div>
      </form>
    </div>
                            </TabPanel>
                        </Tabs>
                    </div>


                </div>


                <div className="hidden sm:block  sm:w-7/12 h-screen">

                    <img className="h-full w-full" src={banner} />



                </div>






            </div>



        </div>
    );
};

export default Welcome;