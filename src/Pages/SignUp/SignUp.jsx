import { Helmet } from 'react-helmet';
import Title from '../../Components/Title';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import signUp1 from '../../../src/signUp1.json';
import signUp2 from '../../../src/signUp2.json';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const SignUp = () => {
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
                console.log('user profile info updated')
                reset();
                Swal.fire("User created successfully!");
                navigate('/');
            }).catch((error)=>{
                console.log(error)
            });
        })
    }
    console.log(watch("example"))
    return (
        <div className="w-5/6 md:w-full mx-auto" >
            <Helmet>
                <title>Asset Track Pro | Sign Up</title>
            </Helmet>
            <Title heading={'please Sign Up!'}></Title>
            <div className="bg-base-200 p-5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="text-center md:text-left col-span-1">
                        <Lottie className='w-1/2 md:w-full mx-auto md:mx-0' animationData={signUp1} />
                    </div>
                    <div className="card shadow-2xl bg-base-100 col-span-1">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                                {/* USER-----NAME */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500" >User Name is required</span>}
                                </div>
                                {/* PROFILE-----PICTURE */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-500" >Photo URL is required</span>}
                                </div>
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

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-base" type="submit" value="Sign Up" />
                            </div>

                            <h2 className="text-gray-500 text-sm mt-1">Already Have an Account? <Link className='text-purple-400 font-semibold' to="/login" > Login</Link>  </h2>
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

export default SignUp;