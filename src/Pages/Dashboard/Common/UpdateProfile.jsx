import Swal from "sweetalert2";
import Title from "../../../Components/Title";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateProfile = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {register, handleSubmit,reset} = useForm();
    const onSubmit = async(data) => {
        console.log(data)
        // upload image to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the asset to the server with image url
            const newInfo = {
                displayName: data.displayName,
                photoURL: data.photoURL,
            }
            console.log(newInfo);
            const updatedProfileInfo = await axiosSecure.patch(`/updateProfile/${user?.email}`,user,newInfo);
            console.log(updatedProfileInfo.data)
            if(updatedProfileInfo.data.modifiedCount>0){
                reset();
                // refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Details of your profile is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
    };
    return (
        <div>
            <Title heading={'Update Your Profile details'} subHeading={'Here you can update your profile info'}></Title>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                             {/* FORM------- */}
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-4'>
                                {/* -----USER-----NAME */}
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Name</span>
                                        </label>
                                        <input {...register("displayName", { required: true })} defaultValue={name} type="text" placeholder="User Name" className="input input-bordered" />
                                        
                                </div>
                                {/* -----PROFILE-----PHOTO */}
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Profile Picture</span>
                                        </label>
                                        <input {...register("photoURL", { required: true })} type="file" className="file-input w-full max-w-xs bg-purple-100" />
                                </div>
                            </div>
                            {/* <input className="btn btn-base" type="submit" value="Add" /> */}
                            <div className='mt-4'>
                                <button  className="btn btn-base w-full">Update Profile</button>
                            </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;