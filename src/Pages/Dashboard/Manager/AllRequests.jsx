import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAllEmployeeRequests from "../../../Hooks/useAllEmployeeRequests";
import { useEffect, useState } from "react";


const AllRequests = () => {
    const axiosSecure = useAxiosSecure();
    //tanstack Query
    // const {data : allEmployeeRequests = [],refetch} = useQuery({
    //     queryKey: ['allEmployeeRequests'],
    //     queryFn: async()=>{
    //         const res = await axiosSecure.get('requests')
    //         return res.data;
    //     }
    // });
    const [allEmployeeRequests,refetch] = useAllEmployeeRequests();
    console.log(allEmployeeRequests);

    //picking the current date and setting in state
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    //handle---APPROVE----FUNCTION
    const handleApprove = (item) =>{
        axiosSecure.patch(`/requests/${item._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
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

        
        const approvalDate = {
            approval_date: currentDate.toISOString().split('T')[0],
        }
        console.log(approvalDate)
        // axiosSecure.post('/requests',approvalDate)
        // .then(res=>{
        //     console.log(res.data)
        //     if(res.data.insertedId){
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: `Request for ${name} has been approved!`,
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //           refetch();
        //     }
        // })
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
                <title>Asset Track Pro | Requested Assets</title>
            </Helmet>
            <Title heading={'All Requested Assets'} subHeading={'Here is the list of assets requested by all the employees'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Requests: ( <span className="font-semibold">{allEmployeeRequests.length}</span> ) </h2>
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
                        {allEmployeeRequests.map((item,index)=>
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
                                <td>0000/00/00</td>
                                {/* ----STATUS------ */}
                                <td className="text-orange-400 font-semibold">Pending</td>
                                <th>
                                    {item.approval_date? <p className="text-purple-400 font-semibold">Approved</p> :
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