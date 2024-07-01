import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRequest = () => {
    const axiosSecure = useAxiosSecure();
    const {user,loading} = useAuth();
    //tanstack Query
    const {data : allRequests = [],refetch} = useQuery({
        queryKey: ['allRequests', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            // const res = await axiosSecure.get(`/requests?email=${user.email}`)
            const res = await axiosSecure.get(`/requests/${user?.email}`)
            // const res = await axiosSecure.get(`/requests`)
            
            return res.data;
        }
    });
    return [allRequests,refetch];
};

export default useRequest;