import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    //tanstack Query
    const {data : allEmployees = [],refetch ,loading} = useQuery({
        queryKey: ['allEmployees', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get('/employees')
            return res.data;
        }
    });
    return [allEmployees,refetch,loading];
};

//DYNAMIC API_____--------------------
// {
//     const axiosSecure = useAxiosSecure();
//     const {user} = useAuth();
//     //tanstack Query
//     const {data : allEmployees = [],refetch} = useQuery({
//         queryKey: ['allEmployees', user?.email],
//         queryFn: async()=>{
//             const res = await axiosSecure.get(`/employees/${user.email}`)
//             return res.data;
//         }
//     });
//     return [allEmployees,refetch];
// };




//CONVENTIONAL FETCHING----------------
// {
//     const [employees,setEmployees] = useState([]);
//     const[loading,setLoading] = useState(true)
//     useEffect(()=>{
//         setLoading(true)
//         fetch('https://asset-track-pro-server.vercel.app/users')
//         .then(res=> res.json())
//         .then(data=>{
//             setEmployees(data);
//             setLoading(false);
//         })
//     },[])
//     return {employees,loading}
// };

export default useEmployee;