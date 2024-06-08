import { Helmet } from 'react-helmet';
import Title from '../../Components/Title';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import signUp1 from '../../../src/signUp1.json';
import signUp2 from '../../../src/signUp2.json';

const SignUp = () => {
    const handleSignUp = () =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =  form.password.value;
        console.log(email,password);
    }
    return (
        <div>
            <Helmet>
                <title>Asset Track Pro | Sign Up</title>
            </Helmet>
            <Title heading={'please Sign Up!'}></Title>
            <div className="bg-base-200 p-5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="text-center md:text-left">
                        <Lottie className='w-1/2 md:w-full mx-auto md:mx-0' animationData={signUp1} />
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
                        <div className="text-center md:text-left">
                            <Lottie className='' animationData={signUp2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;