import Banner from './Banner';
import About from './About/About';
import Packages from './Packages/Packages';
import { Helmet } from 'react-helmet';
import useAuth from '../../Hooks/useAuth';
import useAdmin from '../../Hooks/useAdmin';
import PendingRequests from './ManagerSection/PendingRequests';
import LimitedStockItems from './ManagerSection/LimitedStockItems';
import MyPendingRequests from './EmployeeSections/MyPendingRequests';
import Events from './EmployeeSections/Events';
import PieChart from './ManagerSection/PieChart';

const Home = () => {
    // const {user} = useAuth();
    // const [isHR,isHRLoading] = useAdmin();
    return (
        <div>
            <Helmet>
                <title>Asset Track Pro | Home</title>
            </Helmet>
            <Banner></Banner>
             {/* {user ?
                <>
                    <MyPendingRequests></MyPendingRequests>
                    <Events></Events>
                </>
                : isHR ? 
                <div>
                    <PendingRequests></PendingRequests>
                    <LimitedStockItems></LimitedStockItems>
                    <PieChart></PieChart>
                    <Events></Events>
                </div>
                : 
                <>
                    <About></About>
                    <Packages></Packages>
                </>
             } */}


             {/* EMPLOYEE----------- */}
             <MyPendingRequests></MyPendingRequests>
             <Events></Events>
             {/* HR_____MANAGER------- */}
             <PendingRequests></PendingRequests>
             <LimitedStockItems></LimitedStockItems>
             <PieChart></PieChart>
             <Events></Events>
             {/* general------ */}
            <About></About>
            <Packages></Packages>
        </div>
    );
};

export default Home;