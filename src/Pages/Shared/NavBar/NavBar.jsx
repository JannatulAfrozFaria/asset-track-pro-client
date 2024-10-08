import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Tippy from "@tippyjs/react";
import logo from "../../../assets/icons/icon.png";
// import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useAuth();
    // const [isHR] = useAdmin();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const NavOptions = <>
        <li><Link to="/"><a href="">Home</a></Link> </li>
        <li><Link to="/joinAsEmployee"><a href="">Join as Employee</a></Link> </li>
        <li><Link  to="/joinAsManager"><a href="">Join as HR Manager</a></Link> </li>
        <li><Link to="/dashboard/profile"><a href="">Dashboard</a></Link> </li>
    </>
    
    // NavOptions.forEach(navLink => {
    //     navLink.addEventListener('click', () => {
    //         document.querySelector('.active')?.classList.remove('active');
    //         navLink.classList.add('active');
    //     });
    // })
    
    return (
        <>
            <div className="navbar bg-purple-900 w-full mx-auto shadow-lg shadow-purple-300 text-purple-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavOptions}
                        </ul>
                    </div>
                    {/* DYNAMIC COMPANY NAME */}
                    <img className='w-6 md:w-16' src={logo} alt="" />
                    {/* <a className="btn btn-ghost text-xl"> Asset Track Pro Ltd</a> */}
                    <a className="btn btn-ghost text-md md:text-xl text-purple-100">
                        Asset <span className="text-purple-300">Track Pro</span>  Ltd
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">

                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <Tippy content={user?.displayName} >
                                <Link to='/dashboard/profile'>
                                    <div className="profile-pic w-6 md:w-10 rounded-full mr-3">
                                        <img className=" w-6 md:w-10 rounded-full" src={user?.photoURL} alt="" />
                                    </div>
                                </Link>
                            </Tippy>
                            {/* <div className="flex gap-2 mr-3">
                                <div>{user?.displayName} </div>
                                <div> <img className="w-12 rounded-full" src={user?.photoURL} alt="" /> </div>
                            </div> */}
                            <button onClick={handleLogOut}><Link className="btn btn-sm md:btn-md  btn-base"><a href="">Logout</a></Link></button>
                        </>
                            : <><Link className="btn btn-base " to="/login"><a href="">Login</a></Link></>
                    }

                </div>
            </div>
        </>

    );
};

export default NavBar;