
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';

const useAllEmployeeRequests = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    //tanstack Query
    const {data : allEmployeeRequests = [],refetch} = useQuery({
        queryKey: ['allEmployeeRequests', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get('/requests')
            return res.data;
        }
    });
    return [allEmployeeRequests,refetch];

    //------------------------------------------------------------------------------

    // const [allEmployeeRequests,setAllEmployeeRequests] = useState([]);
    // const[loading,setLoading] = useState(true)
    // useEffect(()=>{
    //     setLoading(true)
    //     fetch('https://asset-track-pro-server.vercel.app/requests')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setAllEmployeeRequests(data);
    //         setLoading(false);
    //     })
    // },[])
    // return {allEmployeeRequests,loading}

    //------------------------------------------------------------------------------
};

export default useAllEmployeeRequests;