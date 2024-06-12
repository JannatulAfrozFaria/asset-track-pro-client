import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAssets from "../../../Hooks/useAssets";
import { Link } from "react-router-dom";


const Asset = ({asset}) => {
    const {name,type, quantity,stock,date_added,image,_id} = asset;
    const {assets,loading,refetch} = useAssets();
    const axiosSecure = useAxiosSecure();
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete it!"
          }).then(async(result) => {  //async---await---edition
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/assets/${id}`) //async---await---edition
                // .then(res=>{
                //     console.log(res.data);
                    if(res.data.deletedCount>0){
                          refetch();
                          Swal.fire({
                                      title: "Deleted!",
                                      text: `${name} has been deleted.`,
                                      icon: "success"
                                    });
                    }
                // })
            }
          });
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-[240px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-primary">{stock}</div>
                </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-left">
                    <p className="text-gray-600">Type: <span className="font-semibold text-purple-500">{type}</span> </p>
                    <p className="text-gray-600">Quantity: <span className="font-semibold text-purple-500">{quantity}</span> </p>
               </div>
              <div className="mb-2">
                    <p className="text-gray-600 text-left">Date Added: <span className="font-semibold text-purple-500">{date_added}</span> </p>
              </div>
                <div className="flex gap-2 justify-evenly">
                    <button className="btn btn-outline text-purple-700 font-bold btn-sm w-1/2"><Link to={`/dashboard/updateAsset/${_id}`}>Update</Link></button>
                    
                    <button onClick={()=>handleDelete(_id)} className="btn btn-outline text-red-500 btn-sm w-1/2">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Asset;