import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <div className="w-1/2 mx-auto text-center my-20 text-purple-500">
                    <p className="text-2xl font-semibold text-center">Loading . . . </p>
                    <progress className="progress w-56  mx-auto mt-5"></progress>
                </div>
    }
    if(user){
        console.log('user found', user);
        return children;
    }
    console.log('user not found', user);
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
    
    // return <div><h2>AJVXSVCASVCHSD</h2></div>
    // return <Navigate to="/" state={{from: location}} replace ></Navigate>
        
};

export default PrivateRoute;