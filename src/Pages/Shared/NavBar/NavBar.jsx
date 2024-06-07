import { Link } from "react-router-dom";

const NavBar = () => {
    const NavOptions = <>
        <li><Link to="/"><a href="">Home</a></Link> </li>
        <li><Link to="/joinAsEmployee"><a href="">Join as Employee</a></Link> </li>
        <li><Link to="/joinAsManager"><a href="">Join as HR Manager</a></Link> </li>
        <li><Link to="/"><a href="">Dashboard</a></Link> </li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {NavOptions}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"> 
                        <img className='w-16' src="/src/assets/icons/icon.png" alt="" />
                        Asset Track Pro Ltd
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><a href="">Login</a></Link>
                </div>
            </div>
        </>
        
    );
};

export default NavBar;