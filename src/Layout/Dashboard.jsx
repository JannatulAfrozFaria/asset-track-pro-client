import { FaBars, FaBook, FaCalendar, FaHome, FaMailBulk, FaUser, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { FaBookBookmark, FaShop } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAssets from "../Hooks/useAssets";
import { PiTreasureChestDuotone } from "react-icons/pi";
import { MdAddCard } from "react-icons/md";
import { VscChecklist } from "react-icons/vsc";
import { IoPersonAddSharp } from "react-icons/io5";

import { ImProfile } from "react-icons/im";
import { RiPlayListAddLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdBookmarkAdded } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import useAuth from "../Hooks/useAuth";
import useRequest from "../Hooks/useRequest";
import useAllEmployeeRequests from "../Hooks/useAllEmployeeRequests";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const {assets} = useAssets();
    const {user,logOut} = useAuth();
    const [request] = useRequest();
    const [allEmployeeRequests] = useAllEmployeeRequests();

    //toDo: get isAdmin value from the database
    // const isHR = true;
    const [isHR] = useAdmin();


    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    return (
        <div className="flex">
             {/* Dashboard Content */}
             <div className="flex-1">
                <Outlet></Outlet>
            </div>
            {/* Dashboard Side Bar */}
            <div className="w-40 md:w-64 min-h-screen bg-purple-200">
                <ul className="menu p-4 uppercase">
                    {
                        isHR ? 
                            <>
                                <li>
                                    <img className='w-1/2 mx-auto my-2' src="/src/assets/icons/icon.png" alt="" />
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allAssets"><PiTreasureChestDuotone className="text-lg mr-0 md:mr-2" />Asset List ({assets.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/AddAnAsset"><MdAddCard className="text-lg mr-0 md:mr-2" /> Add an Asset</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allRequests"><VscChecklist className="text-lg mr-0 md:mr-2" /> All Requests ( {allEmployeeRequests.length} ) </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myEmployeeList"><FaUsers className="text-lg mr-0 md:mr-2"></FaUsers>My Employee list</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addAnEmployee"> <IoPersonAddSharp className="text-lg mr-0 md:mr-2" /> Add an Employee </NavLink>
                                </li>
                            </> 
                        :
                        <>
                            {/* EMPLOYEE-----DASHBOARD */}
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/dashboard/requestedAssets"> <FaCalendar className="text-xl mr-0 md:mr-2" ></FaCalendar>My Assets ( {request.length} )</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/reservation"><TbChecklist className="text-lg mr-0 md:mr-2" /> My Assets</NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/dashboard/myTeam"> <FaUsers className="text-lg mr-0 md:mr-2"></FaUsers>My Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/requestAsset"> <RiPlayListAddLine className="text-lg mr-0 md:mr-2" />Request for an asset</NavLink>
                            </li>
                        </>
                    }
                            
                            
                            

                    {/* Shared Menu Options------- */}
                    <div className="divider"></div>
                    <li>
                                <NavLink to="/"><FaHome className="text-lg mr-0 md:mr-2" ></FaHome>Home</NavLink>
                            </li>
                    <li>
                        <NavLink to="/dashboard/profile"><ImProfile className="text-lg mr-0 md:mr-2" />Profile</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li className="w-2/3 mx-auto">
                        <Link to="/dashboard/profile" >{user?.displayName}</Link>
                    </li>
                    <li className="w-2/3 mx-auto">
                        <Link to="/dashboard/profile"><img className="rounded-full" src={user?.photoURL} alt="" /></Link>
                    </li>
                    
                    <li>
                        {user && <> 
                        <Link> <RiLogoutCircleLine className="text-lg mr-0 md:mr-2"/><button onClick={handleLogOut} className="btn btn-base w-28 btn-sm"> Logout</button>  </Link>
                        </>}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;