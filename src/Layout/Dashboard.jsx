import { useState, useEffect } from "react";
import { FaBars, FaBook, FaCalendar, FaHome, FaMailBulk, FaUser, FaUsers, FaUtensils, FaWallet, FaTimes } from "react-icons/fa";
import { FaBookBookmark, FaShop } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAssets from "../Hooks/useAssets";
import { PiTreasureChestDuotone } from "react-icons/pi";
import { MdAddCard } from "react-icons/md";
import { VscChecklist } from "react-icons/vsc";
import { IoPersonAddSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { RiPlayListAddLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import useAuth from "../Hooks/useAuth";
import useRequest from "../Hooks/useRequest";
import useAllEmployeeRequests from "../Hooks/useAllEmployeeRequests";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const {assets} = useAssets();
    const {user,logOut} = useAuth();
    const [request] = useRequest();
    const [allEmployeeRequests] = useAllEmployeeRequests();
    const [isHR] = useAdmin();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Check screen size and update state
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768; // md breakpoint
            setIsMobile(mobile);
            if (!mobile) {
                setSidebarOpen(true); // Always show sidebar on larger screens
            } else {
                setSidebarOpen(false); // Hide sidebar on mobile by default
            }
        };

        // Set initial state
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        if (isMobile) {
            setSidebarOpen(false);
        }
    };

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
        navigate('/login')
    }

    return (
        <div className="flex flex-col md:flex-row">
            {/* Mobile Header */}
            {isMobile && (
                <div className="fixed top-0 left-0 right-0 bg-purple-200 shadow-md p-4 z-40 flex justify-between items-center md:hidden">
                    <button onClick={toggleSidebar} className="text-2xl text-purple-800">
                        {sidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <div className="flex items-center">
                        <img className='w-8 mr-2' src="/src/assets/icons/icon.png" alt="" />
                        <span className="font-bold text-purple-800">Dashboard</span>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div 
                className={`w-64 min-h-screen bg-purple-200 fixed md:static z-30 transition-all duration-300 ease-in-out
                    ${isMobile ? 
                        `${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
                        : 'translate-x-0'}`}
            >
                <ul className="menu p-4 uppercase pt-16 md:pt-4">
                    {isHR ? 
                        <>
                            <li>
                                <img className='w-1/2 mx-auto my-2' src="/src/assets/icons/icon.png" alt="" />
                            </li>
                            <li>
                                <NavLink to="/dashboard/allAssets" onClick={closeSidebar}><PiTreasureChestDuotone className="text-lg mr-0 md:mr-2" />Asset List ({assets.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/AddAnAsset" onClick={closeSidebar}><MdAddCard className="text-lg mr-0 md:mr-2" /> Add an Asset</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allRequests" onClick={closeSidebar}><VscChecklist className="text-lg mr-0 md:mr-2" /> All Requests ( {allEmployeeRequests.length} ) </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myEmployeeList" onClick={closeSidebar}><FaUsers className="text-lg mr-0 md:mr-2"></FaUsers>My Employee list</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addAnEmployee" onClick={closeSidebar}> <IoPersonAddSharp className="text-lg mr-0 md:mr-2" /> Add an Employee </NavLink>
                            </li>
                        </> 
                        :
                        <>
                            {/* EMPLOYEE-----DASHBOARD */}
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/dashboard/requestedAssets" onClick={closeSidebar}> <FaCalendar className="text-xl mr-0 md:mr-2" ></FaCalendar>My Assets ( {request.length} )</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myTeam" onClick={closeSidebar}> <FaUsers className="text-lg mr-0 md:mr-2"></FaUsers>My Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/requestAsset" onClick={closeSidebar}> <RiPlayListAddLine className="text-lg mr-0 md:mr-2" />Request for an asset</NavLink>
                            </li>
                        </>
                    }
                    
                    {/* Shared Menu Options------- */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" onClick={closeSidebar}><FaHome className="text-lg mr-0 md:mr-2" ></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" onClick={closeSidebar}><ImProfile className="text-lg mr-0 md:mr-2" />Profile</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li className="w-2/3 mx-auto">
                        <Link to="/dashboard/profile" onClick={closeSidebar}>{user?.displayName}</Link>
                    </li>
                    <li className="w-2/3 mx-auto">
                        <Link to="/dashboard/profile" onClick={closeSidebar}><img className="rounded-full" src={user?.photoURL} alt="" /></Link>
                    </li>
                    
                    <li>
                        {user && <> 
                        <Link onClick={closeSidebar}> <RiLogoutCircleLine className="text-lg mr-0 md:mr-2"/><button onClick={handleLogOut} className="btn btn-base w-28 btn-sm"> Logout</button>  </Link>
                        </>}
                    </li>
                </ul>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isMobile && sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main Content */}
            <div className={`flex-1 p-4 md:p-8 ${isMobile ? 'mt-16' : ''}`}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;