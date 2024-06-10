import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';


const useEmployee = () => {
    const axiosSecure = useAxiosSecure();
    //tanstack Query
    const {data : allEmployees = [],refetch} = useQuery({
        queryKey: ['allEmployees'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/employees')
            return res.data;
        }
    });
    return [allEmployees,refetch];
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
//         fetch('http://localhost:5000/users')
//         .then(res=> res.json())
//         .then(data=>{
//             setEmployees(data);
//             setLoading(false);
//         })
//     },[])
//     return {employees,loading}
// };

export default useEmployee;