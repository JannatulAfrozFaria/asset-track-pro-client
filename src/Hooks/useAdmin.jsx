import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isHR,isPending: isHRLoading} = useQuery({
        queryKey: [user?.email, 'isHR'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.HR;
        }
    })
    return [isHR,isHRLoading]
};

export default useAdmin;