import { Helmet } from "react-helmet";
import login from "../../assets/login/login.jpg"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const JoinAsManager = () => {
    const axiosPublic = useAxiosPublic();
    const {createUser,updateUserProfile} = useAuth();
    const {register, handleSubmit, watch, reset, formState: { errors }} = useForm();
    const navigate =  useNavigate();


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser =  result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photo: data.photoURL
                }
                //create user entry in database
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        reset();
                        Swal.fire("User created successfully!");
                        navigate('/');
                    }
                })
            }).catch((error)=>{
                console.log(error)
            });
        })
    }
    return (
        <div className="my-8">
            <Helmet>
                <title>Asset Track Pro | HR Manager Registration</title>
            </Helmet>
            <h2 className="text-3xl text-center mb-8">Join As A HR Manager!</h2>
            <div className="hero py-12 bg-purple-200 rounded-3xl w-4/5 md:w-full mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse gap-6 w-5/6 mx-auto">
                    <div className="text-center lg:text-left">
                        <img className="w-full h-[500px]" src={login} alt="login" />
                    </div>
                    <div className="card shrink-0 w-full md:w-1/2 mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Column------- 1 */}
                            <div>
                                {/* FULL-----NAME */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500" >User Name is required</span>}
                                </div>
                                {/* ------EMAIL----- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered"  />
                                    {errors.email && <span className="text-red-500" >Email is required</span>}
                                </div>
                                {/* PASSWORD------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input 
                                        {...register("password", 
                                            { 
                                            required: true, minLength: 6, maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?=.*[a-z])/ 
                                            }
                                        )} 
                                    type="password" name="password" placeholder="password" className="input input-bordered" />
                                    {/* PASSWORD VALIDATION----- */}
                                    {errors.password?.type === 'required' && <span role="alert"className="text-red-500" >Password is required</span>}
                                    {errors.password?.type ==='minLength' && <p role="alert" className='text-red-600'>Password must be 6 characters</p>}
                                    {errors.password?.type ==='maxLength' && <p role="alert" className='text-red-600'>Password must be within 20 characters</p>}
                                    {errors.password?.type ==='pattern' && <p role="alert" className='text-red-600'>Password must have one uppercase, one lowercase, one special character and one number</p>}
                                </div>
                                {/* Date Of Birth */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input {...register("date", { required: true })} type="date" placeholder="Date Of Birth" className="input input-bordered" required />
                                    {errors.date && <span className="text-red-500" >Date of Birth is required</span>}
                                </div>
                            </div>
                            {/* COlumn-------2 */}
                            <div>
                                {/* PROFILE-----PICTURE */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-500" >Photo URL is required</span>}
                                </div>
                                {/* Company Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Company Name</span>
                                    </label>
                                    <input {...register("company", { required: true })} type="text" placeholder="Company Name" className="input input-bordered" required />
                                    {errors.photoURL && <span className="text-red-500" >Company Name is required</span>}
                                </div>
                                {/* Company Logo */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Company Logo</span>
                                    </label>
                                    <input {...register("logo", { required: true })} type="text" placeholder="Company Logo URL" className="input input-bordered" required />
                                </div>
                                {/* Select------PACKAGE */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select a package</span>
                                    </label>
                                    {/* <input type="text" placeholder="select a package" className="input input-bordered" required /> */}
                                    <select defaultValue="default" {...register("type")} className="select select-bordered w-full max-w-xs">
                                        <option disabled value="default">Select Package</option>
                                        <option value="Bronze Package">Bronze Package</option>
                                        <option value="Silver Package">Silver Package</option>
                                        <option value="Gold Package">Gold Package</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-base" type="submit" value="Sign Up" />
                        </div>
                        <h2 className="text-gray-500 text-sm mt-1">Already Have an Account? <Link className='text-purple-400 font-semibold' to="/login" > Login</Link>  </h2>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinAsManager;