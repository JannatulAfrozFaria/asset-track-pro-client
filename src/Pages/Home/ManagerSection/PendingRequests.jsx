import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";
import useAllEmployeeRequests from "../../../Hooks/useAllEmployeeRequests";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PendingRequests = () => {
    const axiosSecure = useAxiosSecure();
    const [allEmployeeRequests,refetch] = useAllEmployeeRequests();
    // console.log(allEmployeeRequests);
    const arrayOfFiveRequests = allEmployeeRequests.slice(0, 5);
    // console.log(arrayOfFiveRequests);

    //picking the current date and setting in state
    // const [currentDate, setCurrentDate] = useState(new Date());
    // useEffect(() => {
    //     setCurrentDate(new Date());
    // }, []);

    // handle REJECT---- Function
    const handleReject = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Reject it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/requests/${id}`)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.deletedCount>0){
                          refetch();
                          Swal.fire({
                                      title: "Deleted!",
                                      text: `Request has been Rejected.`,
                                      icon: "success"
                                    });
                    }
                })
            }
          });
    }

    return (
        <div className="w-5/6 mx-auto text-center my-16">
            {/* <Helmet>
                <title>Asset Track Pro | All Requested Assets</title>
            </Helmet> */}
            <Title heading={'PENDING REQUESTS'} subHeading={'Asset requests made by the employees'} ></Title>
            <Link className="text-xl mb-12 text-purple-600 btn border-0 border-b-4 rounded-md border-purple-600" to="/dashboard/allRequests">
                <a href="">View All Requests</a>
            </Link>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Asset Name</th>
                        <th>Asset Type</th>
                        {/* <th>Email of Requester</th> */}
                        <th>Name of Requester</th>
                        <th>Request Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {
                        arrayOfFiveRequests.map((item,index)=>
                            // employeeList.map((item,index)=>
                            <tr key={item._id}>
                                {/* SERIAL---NUMBER */}
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                {/* ASSET-----NAME */}
                                <td>
                                    <div className="font-bold">{item.name}</div>
                                </td>
                                {/* ASEET----TYPE */}
                                <td>{item.type}</td>
                                 {/* EMAIL---OF---THE----REQUESTER */}
                                {/* <td>{item.email} </td> */}
                                <td>{item.userName} </td>
                                {/* REQUEST_DATE */}
                                <td>{item.request_date}</td>
                                {/* ----STATUS------ */}
                                <td className={item.status === 'Pending'?
                                    "text-orange-400 font-semibold"
                                    : "text-purple-500 font-semibold"
                                 }>{item.status}</td>
                                <th>
                                    <button onClick={()=>handleReject(item._id)} className="btn btn-outline text-red-500 btn-xs">Reject</button>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingRequests;