import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRequest = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    //tanstack Query
    const {data : allRequests = [],refetch} = useQuery({
        queryKey: ['allRequests', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/requests?email=${user.email}`)
            return res.data;
        }
    });
    return [allRequests,refetch];
};

export default useRequest;