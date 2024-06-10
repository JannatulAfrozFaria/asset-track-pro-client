import { Helmet } from 'react-helmet';

import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import signUp1 from '../../../../src/signUp1.json';
import signUp2 from '../../../../src/addNew.json';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Title from '../../../Components/Title';

const AddAnAsset = () => {
    // const {createUser,updateUserProfile} = useAuth();
    // const {register, handleSubmit, watch, reset, formState: { errors }} = useForm();
    const navigate =  useNavigate();

    const handleAdd = (data) => {
        console.log(data);
        navigate('/');
    }
    return (
        <div className="w-5/6 mx-auto text-center my-16">
           <Helmet>
                <title>Asset Track Pro | Add An Asset</title>
            </Helmet>
            <Title heading={'Add an asset'} subHeading={'You can list new assets here'} ></Title>
            {/* <h2 className="text-2xl mb-4 text-purple-500">Total Requests: ( <span className="font-semibold"></span> ) </h2> */}
            <div className="bg-base-200 p-5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="text-center md:text-left col-span-1">
                        <Lottie className='w-1/2 md:w-full mx-auto md:mx-0' animationData={signUp1} />
                    </div>
                    <div className="card shadow-2xl bg-base-100 col-span-1">
                        <form onSubmit={handleAdd} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                                {/* FULL-----NAME */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    {/* <input {...register("name", { required: true })} type="text" name="name" placeholder="Full Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500" >User Name is required</span>} */}
                                </div>
                                {/* PROFILE-----PICTURE */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    {/* <input {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-500" >Photo URL is required</span>} */}
                                </div>
                            </div>
                            {/* ------EMAIL----- */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                {/* <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered"  />
                                {errors.email && <span className="text-red-500" >Email is required</span>} */}
                            </div>
                            {/* PASSWORD------- */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                    // {...register("password", 
                                    //     { 
                                    //     required: true, minLength: 6, maxLength: 20,
                                    //     pattern: /(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?=.*[a-z])/ 
                                    //     }
                                    // )} 
                                type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-base" type="submit" value="Add" />
                            </div>

                            <h2 className="text-gray-500 text-sm mt-1">Go to <Link className='text-purple-400 font-semibold' to="/dashboard/allAssets" > All Assets</Link>  </h2>
                        </form>
                        
                    </div>
                    <div>
                        <div className="text-center md:text-left col-span-1">
                            <Lottie className='' animationData={signUp2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAnAsset;