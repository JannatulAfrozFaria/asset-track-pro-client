import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useEmployee from "../../../Hooks/useEmployee";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AddAnEmployee = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    // const user1 = users.map(user=>console.log(user));
    // console.log(user1);

    const handleMakeHR = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is a HR Manager Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleAddAnEmployee = (user)=>{
        const addedUser = {
            userId: user._id,
            photo: user.photo,
            email: user.email,
            name: user.name
        }
        console.log(addedUser);
        axiosSecure.post('/employees',addedUser)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                //refetch employee list
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: ` ${user.name} has been added to your team!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }
        })
    }
    return (
        <div className='w-5/6 mx-auto text-center'>
             <Helmet>
                <title>Asset Track Pro | Add An Employee</title>
            </Helmet>
            <Title heading={'PACKAGE DETAILS'} subHeading={'Here is the package you are using currently.'} ></Title>
            <div>
                <div>
                    <button className="btn btn-outline bg-purple-300"><Link to='/dashboard/upgradePackage'>Upgrade Package</Link> </button>
                </div>
            </div>
            <Title heading={'add an employee'} subHeading={'Here you can add members to your team.'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Employees: {users.length -1 } </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {users.map((usr)=>{
                            if(usr.email === user.email){
                                return
                            }
                            return <tr key={usr._id}>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={usr.photo} />
                                    </div>
                                </div>
                            </div>
                            </td>
                            <td>
                                {usr.name}
                            </td>
                            {/*     -------EXTRA-----BUTTON */}
                            <td>
                                {
                                    usr.role === 'HR' ? <p className="text-purple-500 font-semibold">HR Manager</p> :
                                    <button onClick={()=>handleMakeHR(usr)
                                    } className="btn btn-base btn-lg md:btn-xs">Make HR Manager</button>
                                }
                            </td>
                            {/* -----EXTRA---BUTTON----ENDS */}
                            <th>
                                <button onClick={()=>handleAddAnEmployee(usr)
                                } className="btn btn-base btn-lg md:btn-xs">Add to Team</button>
                            </th>
                            </tr>
                        } 
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
                <div className="w-5/6 mx-auto">
                    <button className="btn btn-base w-72 mt-6" >Add Selected Members to the Team</button>
                </div>
            </div>
        </div>
    );
};

export default AddAnEmployee;