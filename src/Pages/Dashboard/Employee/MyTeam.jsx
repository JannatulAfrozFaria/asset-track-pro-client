import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";
import useEmployee from "../../../Hooks/useEmployee";


const MyTeam = () => {
    const [allEmployees] = useEmployee();
    return (
        <div className='w-5/6 mx-auto text-center my-16'>
             <Helmet>
                <title>Asset Track Pro | My Team</title>
            </Helmet>
            <Title heading={'my team'} subHeading={'Here is the list of members in your team.'} ></Title>
            <h2 className="text-2xl mb-4 text-purple-500">Total Members: ( <span className="font-semibold"> {allEmployees.length} </span> ) </h2>
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

export default MyTeam;