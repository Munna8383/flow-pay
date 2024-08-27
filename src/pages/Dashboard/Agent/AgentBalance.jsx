import useRole from "../../../hooks/useRole";


const AgentBalance = () => {
    const {person}=useRole()
    return (
        <div className="flex justify-center items-center mt-10">

        <div className="space-y-10 text-4xl font-semibold text-center p-10 shadow-2xl shadow-emerald-700 mt-10">
            <h1>Your Balance:</h1>
            <h1>{person?.balance} Taka</h1>
        </div>
        
    </div>
    );
};

export default AgentBalance;