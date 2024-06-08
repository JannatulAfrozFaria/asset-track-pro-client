import { Helmet } from 'react-helmet-async';
import Lottie from "lottie-react";
import LoginIcon from "../../Login.json"
import LoginIcon2 from "../../Login2.json"
import Title from '../../Components/Title';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const location =  useLocation();

    const from = location?.state?.from?.pathname || "/"
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =  form.password.value;
        signIn(email,password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from,{replace: true});
            })
    }
    return (
        <div className='w-5/6 md:w-full mx-auto'>
            <Helmet>
                <title>Asset Track Pro | Login</title>
            </Helmet>
            <Title heading={'please login!'}></Title>
            <div className="bg-base-200 p-5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="text-center md:text-left">
                        <Lottie className='w-1/2 md:w-full mx-auto md:mx-0' animationData={LoginIcon} />
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input className="btn btn-base" type="submit" value="Login" />
                            </div>

                            <h2 className="text-gray-500 text-sm mt-1">New Here? <Link className='text-purple-400 font-semibold' to="/signup" > Create a new Account</Link>  </h2>
                        </form>
                        
                    </div>
                    <div>
                        <div className="text-center md:text-left">
                            <Lottie className='' animationData={LoginIcon2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;