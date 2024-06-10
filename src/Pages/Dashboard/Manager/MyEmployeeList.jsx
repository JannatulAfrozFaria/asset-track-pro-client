import { Helmet } from 'react-helmet';
import Title from '../../../Components/Title';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useEmployee from '../../../Hooks/useEmployee';
// import { useQuery } from '@tanstack/react-query';

const MyEmployeeList = () => {
    
    const axiosSecure = useAxiosSecure();
    const [allEmployees,refetch] = useEmployee();
    console.log(allEmployees);
   
    const handleRemove = item =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Remove!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/employees/${item._id}`)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.deletedCount>0){
                          refetch();
                          Swal.fire({
                                      title: "Deleted!",
                                      text: `Employee has been removed from your team.`,
                                      icon: "success"
                                    });
                    }
                })
            }
          });
    }
    return (
        <div className='w-5/6 mx-auto text-center'>
            <Helmet>
                <title>Asset Track Pro | My  Employee List</title>
            </Helmet>
            <Title heading={'EMPLOYEE LIST'} subHeading={'Here is the list of employees added by you.'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Employees: ( <span className="font-semibold">{allEmployees.length}</span> ) </h2>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                            {<label>
                                <input type="checkbox" className="checkbox" />
                            </label>}
                        </th>
                        <th>Image</th>
                        <th>Employee Name</th>
                        <th>Employee Type</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {allEmployees.map((item,index)=>
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
                                            <img src={item.photo} />
                                        </div>
                                    </div>
                                </td>
                                {/* ASSET-----NAME */}
                                <td>
                                    <div className="font-bold">{item.name}</div>
                                </td>
                                {/* EMPLOYEE----TYPE */}
                                <td></td>
                                <th>
                                    <button onClick={()=>handleRemove(item)} className="btn btn-outline text-red-500 btn-xs">Remove From Team</button>
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

export default MyEmployeeList;