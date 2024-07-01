import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAllEmployeeRequests from "../../../Hooks/useAllEmployeeRequests";
import { useEffect, useState } from "react";


const AllRequests = () => {
    const axiosSecure = useAxiosSecure();
    const [allEmployeeRequests,refetch] = useAllEmployeeRequests();
    // const [requestList,setRequestList] = useState(allEmployeeRequests);
    console.log(allEmployeeRequests);

    //picking the current date and setting in state
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        setCurrentDate(new Date());
    }, []);
    const approvalDate = {
        approval_date: currentDate.toISOString().split('T')[0],
    }
    console.log(approvalDate)
    //handle---APPROVE----FUNCTION
    const handleApprove = (item) =>{
        axiosSecure.patch(`/approve/${item._id}`)
        .then(res=>{
            if(item.approve){
                console.log(item.approve)
            }
            console.log(res);
            console.log(res.data)
            if(res.data.modifiedData){
                // setRequestList(res.data.modifiedData)
                refetch(); 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Request for ${item.name} is Approved!`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })
    }

    //handle REJECT---- Function
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
            <Helmet>
                <title>Asset Track Pro | All Requested Assets</title>
            </Helmet>
            <Title heading={'All Requested Assets'} subHeading={'Here is the list of assets requested by all the employees'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Requests: ( 
                <span className="font-semibold">
                    {allEmployeeRequests.length}
                    {/* {employeeList.length} */}
                </span> ) </h2>
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
                        <th>Email of Requester</th>
                        <th>Name of Requester</th>
                        <th>Request Date</th>
                        <th>Approval date</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {
                        allEmployeeRequests.map((item,index)=>
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
                                <td>{item.email} </td>
                                <td>{item.userName} </td>
                                {/* REQUEST_DATE */}
                                <td>{item.request_date}</td>
                                {/* APPROVAL DATE */}
                                <td>{item.approval_date}</td>
                                {/* ----STATUS------ */}
                                <td className={item.status === 'Pending'?
                                    "text-orange-400 font-semibold"
                                    : "text-purple-500 font-semibold"
                                 }>
                                    {item.status}
                                </td>
                                <th>
                                    {item.approval_date? <button disabled className="btn btn-base btn-xs">Approve</button>
                                    // <p className="text-purple-400 font-semibold">Approved</p> 
                                    :
                                    <button onClick={()=>handleApprove(item)} className="btn btn-base btn-xs">Approve</button>
                                    }
                                </th>
                                <th>
                                    <button onClick={()=>handleReject(item._id)} className="btn btn-outline text-red-500 btn-xs">Reject</button>
                                </th>
                            </tr>
                        )}
                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}
                    
                </table>
            </div>
        </div>
    );
};

export default AllRequests;