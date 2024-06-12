import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isHR,isHRLoading] = useAdmin();
    const location = useLocation();
    if(loading || isHRLoading ){
        return <div className="w-1/2 mx-auto text-center my-20 text-purple-500">
                    <p className="text-2xl font-semibold text-center">Loading . . . </p>
                    <progress className="progress w-56  mx-auto mt-5"></progress>
                </div>
    }
    if(user && isHR ){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace ></Navigate>
        
};

export default AdminRoute;