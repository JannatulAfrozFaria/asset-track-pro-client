import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {
    const {user,logOut} = useAuth();
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    const NavOptions = <>
        <li><Link to="/"><a href="">Home</a></Link> </li>
        <li><Link to="/joinAsEmployee"><a href="">Join as Employee</a></Link> </li>
        <li><Link to="/joinAsManager"><a href="">Join as HR Manager</a></Link> </li>
        <li><Link to="/dashboard"><a href="">Dashboard</a></Link> </li>
        <li><Link to="/secret"><a href="">Secret</a></Link> </li>
    </>
    return (
        <>
            <div className="navbar bg-base-100 w-full lg:w-[1500px] mx-auto">
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
                    <img className='w-16' src="/src/assets/icons/icon.png" alt="" />
                    <a className="btn btn-ghost text-xl"> Asset Track Pro Ltd</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <>
                            <button onClick={handleLogOut}><Link className="btn btn-base"><a href="">Logout</a></Link></button>
                            </> 
                        : <><Link className="btn btn-base" to="/login"><a href="">Login</a></Link></>
                    }
                    
                </div>
            </div>
        </>
        
    );
};

export default NavBar;