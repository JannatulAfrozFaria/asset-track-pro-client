import Banner from './Banner';
import About from './About/About';
import Packages from './Packages/Packages';
import { Helmet } from 'react-helmet';
import RelevantSection from './RelevantSection';
// import useAuth from '../../Hooks/useAuth';
// import useAdmin from '../../Hooks/useAdmin';

import MyPendingRequests from './EmployeeSections/MyPendingRequests';
import Events from './EmployeeSections/Events';

import PendingRequests from './ManagerSection/PendingRequests';
import LimitedStockItems from './ManagerSection/LimitedStockItems';
import PieChartDisplay from './ManagerSection/PieChartDisplay';
import useAdmin from '../../Hooks/useAdmin';
import useAuth from '../../Hooks/useAuth';
import TopMostRequestedItems from './ManagerSection/TopMostRequestedItems';
import ClockSection from './ManagerSection/ClockSection';
import ManageATeam from './ManagerSection/ManageATeam';

const Home = () => {
    const {user} = useAuth();
    // console.log(user);
    const [isHR] = useAdmin();
    // console.log(isHR);
    return (
        <div className='h-screen bg-gradient-to-r from-purple-950 to-purple-200'>
            <Helmet>
                <title>Asset Track Pro | Home</title>
            </Helmet>
            <Banner></Banner>
            {/* {
                isHR?
                <>
                  <PendingRequests></PendingRequests>
                  <TopMostRequestedItems></TopMostRequestedItems>
                  <LimitedStockItems></LimitedStockItems>
                  <PieChartDisplay></PieChartDisplay>
                  <ClockSection></ClockSection>
                  <NoticeSection></NoticeSection>
                </>
                : user?
                <>
                    <MyPendingRequests></MyPendingRequests>
                    <Events></Events>
                </>
                :
                <></>
            } */}

             {/* GENERAL------------------ */}
            {/* <About></About>
            <Events></Events>
            <PieChartDisplay></PieChartDisplay>
            <ClockSection></ClockSection>
            <Packages></Packages> */}



            {/* MODIFIED------ FOR----- PORT----- FOLIO------------- */}
            {
                isHR?
                <>
                  
                </>
                : user?
                <>
                <MyPendingRequests></MyPendingRequests>
                </>
                :
                <></>
            }
            {/* GENERAL------------------ */}
            <TopMostRequestedItems></TopMostRequestedItems>
            <LimitedStockItems></LimitedStockItems>
            <PendingRequests></PendingRequests>
            <About></About>
            <PieChartDisplay></PieChartDisplay>
            <ClockSection></ClockSection>
            <ManageATeam></ManageATeam>
            <Events></Events>
            <Packages></Packages>
        </div>
    );
};

export default Home;