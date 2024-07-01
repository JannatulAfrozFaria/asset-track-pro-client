import Swal from "sweetalert2";
import Title from "../../../Components/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useRequest from "../../../Hooks/useRequest";

const MyPendingRequests = () => {
    const [allRequests,refetch] = useRequest();
    const axiosSecure = useAxiosSecure();
    // console.log(allRequests);
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/requests/${id}`)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.deletedCount>0){
                          refetch();
                          Swal.fire({
                                      title: "Cancelled!",
                                      text: `Your Request has been cancelled.`,
                                      icon: "success"
                                    });
                    }
                })
            }
          });
    }
    return (
        <div className="w-5/6 mx-auto text-center my-16">
            <Title heading={'MY PENDING REQUESTS'} subHeading={`Total Requests:${allRequests.length}`} ></Title>
            {/* <h2 className="text-2xl mb-4 text-purple-500">Total Requests: ( <span className="font-semibold">{allRequests.length}</span> ) </h2> */}
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
                        <th>Image</th>
                        <th>Asset Name</th>
                        <th>Asset Type</th>
                        <th>Request Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {allRequests.map((item,index)=>
                            <tr key={item._id}>
                                {/* SERIAL---NUMBER */}
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                {/* ASSET-----IMAGE */}
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>
                                {/* ASSET-----NAME */}
                                <td>
                                    <div className="font-bold">{item.name}</div>
                                </td>
                                {/* ASEET----TYPE */}
                                <td>
                                    {item.type}
                                </td>
                                {/* REQUEST_DATE */}
                                <td>{item.request_date}</td>
                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-outline text-red-500 btn-xs">Cancel</button>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPendingRequests;