import { FaBars, FaBook, FaCalendar, FaHome, FaMailBulk, FaUser, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { FaBookBookmark, FaShop } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useAssets from "../Hooks/useAssets";
import { PiTreasureChestDuotone } from "react-icons/pi";


const Dashboard = () => {
    const [assets] = useAssets();
    return (
        <div className="flex">
             {/* Dashboard Content */}
             <div className="flex-1">
                <Outlet></Outlet>
            </div>
            {/* Dashboard Side Bar */}
            <div className="w-40 md:w-64 min-h-screen bg-purple-200">
                <ul className="menu p-4 uppercase">
                            <li>
                                <img className='w-1/2' src="/src/assets/icons/icon.png" alt="" />
                            </li>
                            <li>
                                <NavLink to="/dashboard/allAssets"><PiTreasureChestDuotone />Asset List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome className="mr-2" ></FaHome> Add an Asset</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils className="mr-2"></FaUtensils > All Requests</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"><FaUsers></FaUsers>My EMployee list</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings"> <FaBook className="mr-2" ></FaBook> Add an Employee </NavLink>
                            </li>
                            
                            {/* EMPLOYEE-----DASHBOARD */}
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/dashboard/userHome"><FaHome className="mr-2" ></FaHome> Employee Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation"><FaCalendar className="mr-2" ></FaCalendar> My Assets</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart"> <IoCart className="mr-2" />Request for an asset ({assets.length}) </NavLink>
                            </li>

                    {/* Shared Menu Options------- */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome className="mr-2" ></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><FaUser className="mr-2" ></FaUser> Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><FaBars className="mr-2" ></FaBars> User Name</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><FaBars className="mr-2" ></FaBars> Profile picture</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;