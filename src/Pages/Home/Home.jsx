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
import NoticeSection from './ManagerSection/NoticeSection';

const Home = () => {
    const {user} = useAuth();
    // console.log(user);
    const [isHR] = useAdmin();
    // console.log(isHR);
    return (
        <div>
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

            {/* MODIFIED------ FOR----- PORT----- FOLIO------------- */}
            {
                isHR?
                <>
                  <PendingRequests></PendingRequests>
                </>
                : user?
                <>
                    <MyPendingRequests></MyPendingRequests>
                </>
                :
                <></>
            }
            {/* GENERAL------------------ */}
            <About></About>
            <TopMostRequestedItems></TopMostRequestedItems>
            <LimitedStockItems></LimitedStockItems>
            <PieChartDisplay></PieChartDisplay>
            <ClockSection></ClockSection>
            <NoticeSection></NoticeSection>
            <Events></Events>
            <Packages></Packages>
        </div>
    );
};

export default Home;