import { FaBars, FaBook, FaCalendar, FaHome, FaMailBulk, FaUser, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { FaBookBookmark, FaShop } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useAssets from "../Hooks/useAssets";

const Dashboard = () => {
    const [assets] = useAssets();
    return (
        <div className="flex">
             {/* Dashboard Content */}
             <div className="flex-1">
                <Outlet></Outlet>
            </div>
            {/* Dashboard Side Bar */}
            <div className="w-64 min-h-screen bg-purple-200">
                <ul className="menu p-4 uppercase">
                    {
                        // isManager ? 
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome className="mr-2" ></FaHome> HR Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils className="mr-2"></FaUtensils > Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaBars className="mr-2" ></FaBars>  Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings"> <FaBook className="mr-2" ></FaBook> Manage Bookings </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"><FaUsers></FaUsers>  All users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allAssets"><FaUsers></FaUsers>  All Assets</NavLink>
                            </li>
                        </>
                        // :
                        // <>
                        //     <li>
                        //         <NavLink to="/dashboard/userHome"><FaHome className="mr-2" ></FaHome> Employee Home</NavLink>
                        //     </li>
                        //     <li>
                        //         <NavLink to="/dashboard/reservation"><FaCalendar className="mr-2" ></FaCalendar> Reservation</NavLink>
                        //     </li>
                        //     {/* <li>
                        //         <NavLink to="/dashboard/payment"><FaWallet className="mr-2" ></FaWallet> Payment History</NavLink>
                        //     </li> */}
                        //     <li>
                        //         <NavLink to="/dashboard/cart"> <IoCart className="mr-2" />My Cart ({assets.length}) </NavLink>
                        //     </li>
                        //     <li>
                        //         <NavLink to="/dashboard/review"> <IoCart className="mr-2" />Add Review</NavLink>
                        //     </li>
                        //     <li>
                        //         <NavLink to="/dashboard/paymentHistory"> <FaBookBookmark className="mr-2" ></FaBookBookmark>Real Payment History</NavLink>
                        //     </li>
                        // </>
                    }
                    {/* Shared Menu Options------- */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome className="mr-2" ></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><FaBars className="mr-2" ></FaBars> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaShop className="mr-2" ></FaShop> Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact"><FaMailBulk className="mr-2" ></FaMailBulk> Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;