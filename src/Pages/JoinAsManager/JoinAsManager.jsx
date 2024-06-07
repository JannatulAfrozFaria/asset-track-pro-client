import { Helmet } from "react-helmet";
import login from "../../assets/login/login.jpg"

const JoinAsManager = () => {
    return (
        <div className="my-8">
            <Helmet>
                <title>Asset Track Pro | HR Manager Registration</title>
            </Helmet>
            <h2 className="text-3xl text-center mb-8">Join As A HR Manager!</h2>
            <div className="hero py-12 bg-purple-200 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse gap-6 w-5/6 mx-auto">
                    <div className="text-center lg:text-left">
                        <img className="w-full h-[500px]" src={login} alt="login" />
                    </div>
                    <div className="card shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100">
                    <form className="card-body ">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div>
                                {/* Full Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="email" placeholder="Full Name" className="input input-bordered" required />
                                </div>
                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                {/* Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {/* Date Of Birth */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input type="email" placeholder="Date Of Birth" className="input input-bordered" required />
                                </div>
                            </div>
                            <div>
                                {/* Company Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Company Name</span>
                                    </label>
                                    <input type="email" placeholder="Company Name" className="input input-bordered" required />
                                </div>
                                {/* Company Logo */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Company Logo</span>
                                    </label>
                                    <input type="email" placeholder="Logo" className="input input-bordered" required />
                                </div>
                                {/* Select */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select a package</span>
                                    </label>
                                    <input type="email" placeholder="select a package" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-base">Sign Up</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinAsManager;