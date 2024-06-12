import { Helmet } from "react-helmet";
import Title from "../../../Components/Title";
import signUp1 from '../../../../src/signUp1.json';
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAssets from "../../../Hooks/useAssets";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateAnAsset = () => {
    const {_id,name,type,quantity,stock,date_added,image} = useLoaderData();
    const {assets,loading,refetch} = useAssets()
    const {register, handleSubmit,reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async(data) => {
        console.log(data)
        //upload image to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            //now send the asset to the server with image url
            const newAsset = {
                name: data.name,
                type: data.type,
                quantity: data.quantity,
                stock:data.stock,
                date_added: data.date,
                image: res.data.data.display_url
            }
            const updatedAssetResponse = await axiosSecure.patch(`/assets/${_id}`,newAsset);
            console.log(updatedAssetResponse.data)
            if(updatedAssetResponse.data.modifiedCount>0){
                reset();
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Details of ${data.name} is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
    };
    return (
        <div className="w-5/6 mx-auto text-center my-16">
            <Helmet>
                <title>Asset Track Pro | Update An Asset</title>
            </Helmet>
            <Title heading={'UPDATE ASSET'} subHeading={'You can update the asset details here.'} ></Title>
            <div className="bg-base-200 p-5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="card w-full shadow-2xl bg-base-100  col-span-full md:col-span-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                             {/* FORM------- */}
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-4'>
                                {/* -----PRODUCT-----NAME */}
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input {...register("name", { required: true })} defaultValue={name} type="text" placeholder="Product Name" className="input input-bordered" />
                                        
                                </div>
                                {/* -----PRODUCT-------TYPE */}
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Type</span>
                                        </label>
                                        <select defaultValue="default" {...register("type")} className="select select-bordered w-full">
                                            <option disabled selected>Select Type</option>
                                            <option value="Returnable">Returnable</option>
                                            <option value="Non-Returnable">Non-Returnable</option>
                                        </select>
                                </div>
                                {/* -----PRODUCT-----QUANTITY */}
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Quantity</span>
                                        </label>
                                        <input {...register("quantity", { required: true })} defaultValue={quantity} type="number" placeholder="Product Quantity" className="input input-bordered" />
                                </div>
                                {/* -----PRODUCT-----STOCK */}
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Stock</span>
                                        </label>
                                        <select defaultValue="default" {...register("stock")} className="select select-bordered w-full">
                                            <option disabled value="default">Stock</option>
                                            <option value="Available">Available</option>
                                            <option value="Out-of-Stock">Out-of-Stock</option>
                                        </select>
                                </div>
                                {/* -----PRODUCT-----DATE----ADDED */}
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date of Addition</span>
                                        </label>
                                        <input defaultValue={date_added}  {...register("date", { required: true })} type="date" placeholder="Date of Addition" className="input input-bordered" required />
                                </div>
                                {/* -----PRODUCT-----IMAGE */}
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Image</span>
                                        </label>
                                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs bg-purple-100" />
                                </div>
                            </div>
                            {/* <input className="btn btn-base" type="submit" value="Add" /> */}
                            <div className='mt-4'>
                                <button  className="btn btn-base w-full">Update Asset</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center md:text-left col-span-2">
                        <Lottie className='w-1/2 md:w-full mx-auto md:mx-0' animationData={signUp1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAnAsset;