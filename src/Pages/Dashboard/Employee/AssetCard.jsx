import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useRequest from "../../../Hooks/useRequest";
import { useEffect, useState } from "react";


const AssetCard = ({asset}) => {
    const {name,type, quantity,stock,date_added,image,_id} = asset;
    const{user} = useAuth();
    // console.log(user);
    const axiosSecure = useAxiosSecure();
    //for refetching the requestsList
    const [,refetch] = useRequest();

    //picking the current date
    const [currentDate, setCurrentDate] = useState(new Date());

    // Use useEffect to set the current date when the component mounts
    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    const handleRequest = () =>{
        console.log(currentDate)
        //send card item to the database
        const requestedAsset = {
            assetId: _id,
            email: user.email,
            userName: user.displayName,
            name,type,date_added,image,
            request_date: currentDate.toISOString().split('T')[0],
            status: 'Pending',
            approval: ''
        }
        console.log(requestedAsset);
        axiosSecure.post('/requests',requestedAsset)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Request for ${name} has been sent!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                //refetch requested Assets List
                  refetch();
            }
        })
    }
    return (
        // <div className="card card-side bg-base-100 shadow-xl">
        //     <figure><img className="h-[260px]" src={image} alt="Movie"/></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>Type:{type} </p>
        //         <p>Availability:{type} </p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Request</button>
        //         </div>
        //     </div>
        // </div>
        <div className="card bg-base-100 shadow-xl image-full h-[260px]">
            <figure><img className="h-[260px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-3xl">{name}</h2>
                <div className="grid grid-cols-1 gap-2 my-2">
                    <p>Type: {type}</p>
                    <p>Availability: {stock} </p>
                </div>
                <div className="card-actions justify-center">
                    {/* <button onClick={handleRequest} className="btn bg-purple-200 btn-outline btn-sm w-24">Request</button> */}

                    {/* MODAL------ */}
                    <button className="btn bg-purple-200 btn-outline btn-sm w-24" onClick={()=>document.querySelector(`[data-asset-name="${name}"]`).showModal()}>Request</button>
                    <dialog data-asset-name ={name} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-purple-500">Are You Sure?</h3>
                            <p className="py-4 text-purple-400">You are Requesting for {name} </p>
                            <div className="modal-action w-1/2 mx-auto justify-center">
                                <form method="dialog">
                                    <button onClick={handleRequest} className="btn bg-purple-200 btn-outline btn-sm w-24">Request</button>
                                </form>
                            </div>
                         </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AssetCard;