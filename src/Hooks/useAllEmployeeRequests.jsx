
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useAllEmployeeRequests = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    //tanstack Query
    const {data : allEmployeeRequests = [],refetch} = useQuery({
        queryKey: ['allEmployeeRequests', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/requests?email=${user.email}`)
            return res.data;
        }
    });
    return [allEmployeeRequests,refetch];
};

export default useAllEmployeeRequests;